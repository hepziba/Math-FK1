var frequentUpdate = true;
var loaded, canvasProperties, update, pageCount, position;
var stageInfoBeforeStep, sideFrameMC, steps, stepsCount, btn_navigate1, btn_navigate2, btn_spread;

function addButtonGroup() {
    var buttons = document.createElement('div');
    $(buttons).attr('id', 'buttons');
    $('body').append(buttons);
    btn_navigate1 = document.createElement('a');
    $(btn_navigate1).text('<');
    $(btn_navigate1).attr('title', mathviewer.getTranslation('Previous', defaultLanguage));
    $(btn_navigate1).addClass('btn navigation navigate_prev');
    $(btn_navigate1).on('click', navigation_functions);
    $('body').append(btn_navigate1);
    $(btn_navigate1).hide();
    btn_navigate2 = document.createElement('a');
    $(btn_navigate2).text('>');
    $(btn_navigate2).attr('title', mathviewer.getTranslation('Next', defaultLanguage));
    $(btn_navigate2).addClass('btn navigation navigate_next');
    $(btn_navigate2).on('click', navigation_functions);
    $('body').append(btn_navigate2);
    $(btn_navigate2).hide();
    btn_spread = document.createElement('a');
    $(btn_spread).text(mathviewer.getTranslation('Return', defaultLanguage));
    $(btn_spread).addClass('button navigate_spread');
    $(btn_spread).on('click', navigation_functions);
    $('#buttons').append(btn_spread);
    $(btn_spread).hide();
}

function preRender() {
    if (this["lib"] == undefined) {
        setTimeout(preRender, 100);
    } else {
        $('#container').css('visibility', 'hidden');
        if (lib.properties != undefined && lib.properties.manifest.length === 0) {
            lib.properties.manifest = [{ id: 'temp', src: 'https://majemastoragelive.blob.core.windows.net/math-test/Content/temp.jpg' }];
        }
        loadAssetsForIE9();
        init();
        postRender();
    }
}
$(document).ready(preRender);

function postRender() {
    if (stage == null) {
        setTimeout(postRender, 100);
    } else {
        canvasFontAdjust(exportRoot);
        addStageEvents();
        setTimeout(function() {
            $('#container').css('visibility', 'visible');
            loaded = true;
            if (typeof window.parent.pageloaded !== 'undefined') {
                window.parent.pageloaded();
            }
        }, 250);
    }
}

var stageProperties = { width: 610, height: 678 };

function addStageEvents() {
    createjs.Ticker.removeEventListener("tick", stage);
    createjs.Touch.enable(stage);
    createjs.Ticker.addEventListener('tick', tick);
    stage.enableMouseOver(10);
    steps = [{ object: exportRoot, x: 0, y: 0, width: stageProperties.width, height: stageProperties.height, scaling: 1 }];
    if (exportRoot.other) { // page bottomtext add zoom effect on mouseover
        if (exportRoot.other.pageBottomText) {
            var xPos = exportRoot.other.pageBottomText.x;
            exportRoot.other.pageBottomText.cursor = 'pointer';
            var transformX = (xPos >= 440) ? 77 : (xPos >= 390) ? 115 : (xPos >= 380) ? 120 : (xPos >= 370) ? 130 : (xPos >= 360) ? 140 : (xPos < 320) ? 180 : 130;
            exportRoot.other.pageBottomText.addEventListener("mouseover", function() {
                exportRoot.other.pageBottomText.font = "16px 'Myriad Pro'";
                if (exportRoot.other.pageBottomText.pos == "right") {
                    exportRoot.other.pageBottomText.x = exportRoot.other.pageBottomText.x - transformX;
                }
                stage.update();
            });
            exportRoot.other.pageBottomText.addEventListener("mouseout", function() {
                exportRoot.other.pageBottomText.font = "9px 'Myriad Pro'";
                if (exportRoot.other.pageBottomText.pos == "right") {
                    exportRoot.other.pageBottomText.x = exportRoot.other.pageBottomText.x + transformX;
                }
                stage.update();
            });
        }
    }
    for (var index = 1; index <= exportRoot.getNumChildren(); index++) { // invisible frame for zoom/clickable-able area in a page
        var item = exportRoot["v" + index.toString()];
        if (item === undefined) {
            continue;
        }
        item.addEventListener("click", stepFunctions);
        item.addEventListener("rollover", stepRoll);
        item.addEventListener("rollout", stepRoll);
        item.cursor = 'pointer';
        item.x -= item.regX;
        item.y -= item.regY;
        item.regX = item.regY = 0;
        var obj = { object: item, x: item.x, y: item.y, width: item.virtualBounds.width, height: item.virtualBounds.height, rotation: item.rotation, scaling: item.scaleX };
        var gr = new createjs.Graphics().f('rgba(255,255,255,.01)').drawRoundRect(-5, -5, obj.width + 10, obj.height + 10, 5);
        var s = new createjs.Shape(gr);
        var background = new createjs.MovieClip();
        background.id = 'background';
        background.addChild(s);
        item.addChildAt(background, 0);
        steps.push(obj);
    }
    gr = new createjs.Graphics(); // outer frame of chapter pages
    gr.s('#999999').ss(1).rect(0, 0, stageProperties.width, stageProperties.height);
    gr.s('#999999').ss(1).moveTo(stageProperties.width / 2, 0);
    sideFrameMC = new createjs.Shape(gr);
    sideFrameMC.x = sideFrameMC.y = 0;
    stage.addChild(sideFrameMC);
    addButtonGroup();
    if (window.parent === this) {
        window.addEventListener('orientationchange', updateProperties);
        window.onresize = updateProperties;
    }
    updateProperties();
    stepsCount = 0;
    step = steps[0];
    setSteps();
}

function hideNavigation() {
    $(btn_navigate1).hide();
    $(btn_navigate2).hide();
    $(btn_spread).hide();
}

function navigation_functions(e) {
    switch (e.target) {
        case btn_navigate1:
            closeStep();
            stepsCount--;
            break;
        case btn_navigate2:
            closeStep();
            stepsCount++;
            break;
        case btn_spread:
            closeStep(true);
            stepsCount = 0;
            break;
    }
    setSteps();
}

function stepFunctions(e) {
    if (stepsCount > 0) {
        return;
    }
    closeStep(true);
    var v = (e.currentTarget != undefined) ? e.currentTarget : (e.target != undefined) ? e.target : e;
    $.each(steps, function(a, obj) {
        if (obj.object === v) {
            stepsCount = a;
        }
    });
    setSteps();
    update = true;
}

function stepRoll(e) {
    if (stepsCount > 0) {
        return;
    }
    var activeArea;
    var currObj = (e.currentTarget != undefined) ? e.currentTarget : (e.target != undefined) ? e.target : e;
    $.each(steps, function(a, obj) {
        if (obj.object === currObj) {
            activeArea = obj;
            activeArea = [activeArea];
        }
    });
    switch (e.type) {
        case 'rollover':
            $.each(activeArea, function(a, obj) {
                obj.object.scaleX = obj.object.scaleY = (obj.scaling * (obj.width + 14) / obj.width);
                obj.object.x -= 4;
                obj.object.y -= 2;
            });
            break;
        case 'rollout':
            $.each(activeArea, function(a, obj) {
                obj.object.scaleX = obj.object.scaleY = obj.scaling;
                obj.object.x = obj.x;
                obj.object.y = obj.y;
            });
            break;
    }
    update = true;
}

function setSteps() {
    steps[stepsCount].object.visible = true;
    if (stepsCount > 0) {
        steps[stepsCount].object.removeEventListener("click", stepFunctions);
        steps[stepsCount].object.cursor = null;
    }
    if (stepsCount === 0) {
        hideNavigation();
    } else {
        $(btn_navigate1).show();
        $(btn_navigate2).show();
        $(btn_spread).show();
        if (stepsCount === 1)
            $(btn_navigate1).hide();
        if (stepsCount === steps.length - 1)
            $(btn_navigate2).hide();
    }
    if (stepsCount > 0) {
        for (var index = 0; index < exportRoot.getNumChildren(); index++) {
            var item = exportRoot.getChildAt(index);
            if (item === steps[stepsCount].object || item.contains === undefined) {
                continue;
            }
            item.visible = false;
        }
        steps[stepsCount].object.visible = true;
    }
    sideFrameMC.visible = (sideFrameMC && stepsCount === 0) ? true : (sideFrameMC && stepsCount > 0) ? false : sideFrameMC.visible;
    if (!stageInfoBeforeStep) {
        stageInfoBeforeStep = { x: stage.x, y: stage.y, scaling: stage.scaleX };
    }
    updateProperties();
}

function closeStep(all) {
    hideNavigation();
    if (stepsCount > 0) {
        steps[stepsCount].object.addEventListener("click", stepFunctions);
        steps[stepsCount].object.cursor = 'pointer';
    }
    if (all === false) {
        steps[stepsCount].object.visible = false;
        return;
    }
    for (var index = 0; index < exportRoot.getNumChildren(); index++) {
        var item = exportRoot.getChildAt(index);
        if (item.contains === undefined) {
            continue;
        }
        item.visible = true;
    }
    updateProperties();
    if (all === true) {
        if (stageInfoBeforeStep) {
            if (stageInfoBeforeStep.scaling == stageInfo.scaling) {
                setTimeout(function() {
                    stage.x = stageInfoBeforeStep.x;
                    stage.y = stageInfoBeforeStep.y;
                    stage.scaleX = stage.scaleY = stageInfoBeforeStep.scaling;
                    stageInfoBeforeStep = null;
                    update = true;
                }, 0);
            }
        }
    }
    update = true;
}

function updateStep2(v) {
    if (stepsCount === 0) {
        v.object.scaleX = v.object.scaleY = v.scaling;
        v.object.x = v.x;
        v.object.y = v.y;
        v.object.rotation = v.rotation;
    } else {
        var middlePoint = { x: stageProperties.width / 1.97, y: stageProperties.height / 2 };
        var ps = parseFloat($('#buttons').attr('scaling') || 1);
        v.object.scaleX = v.object.scaleY = Math.min(3.5, Math.min((canvasProperties.width - 110 * ps) / v.width, (canvasProperties.height - 20 * stage.scaleX - 60 * ps) / v.height) / stage.scaleX);
        v.object.x = middlePoint.x - (v.width * v.object.scaleX) / 2;
        v.object.y = Math.min(80, middlePoint.y - (v.height * v.object.scaleY) / 2 - 20);
        if (v.frame) {
            v.frame.visible = false;
        }
    }
    update = true;
}

setTimeout(function() {
    frequentUpdate = false;
}, 60000);

function tick(e) {
    if (frequentUpdate) {
        update = true;
    }
    if (update || createjs.Tween.hasActiveTweens()) {
        update = false;
        stage.update(e);
    }
}
var stageInfo = { x: 0, y: 0, scaling: 1, ratio: 1 };

function updateProperties() {
    if (canvas == undefined || stage == undefined) {
        setTimeout(updateProperties, 100);
        return;
    }
    canvasProperties = { width: window.innerWidth ? window.innerWidth : $(window).width(), height: window.innerHeight ? window.innerHeight : $(window).height() };
    var context = canvas.getContext('2d');
    stageInfo.ratio = mathviewer.getPixelRatio(context);
    canvasProperties.width *= stageInfo.ratio;
    canvasProperties.height *= stageInfo.ratio;

    canvas.width = canvasProperties.width;
    canvas.height = canvasProperties.height;
    canvas.style.width = canvasProperties.width / stageInfo.ratio + 'px';
    canvas.style.height = canvasProperties.height / stageInfo.ratio + 'px';

    if (canvasProperties.width > canvasProperties.height || stepsCount > 0) {
        if (position != 'horizontal' && stepsCount === 0) {
            stageInfoBeforeStep = null;
        }
        if (stepsCount === 0) {
            position = 'horizontal';
        }
        stageInfo.scaling = Math.min(canvasProperties.width / stageProperties.width, canvasProperties.height / stageProperties.height);
        stageInfo.x = (canvasProperties.width - stageProperties.width * stageInfo.scaling) / 2;
        stageInfo.y = (canvasProperties.height - stageProperties.height * stageInfo.scaling) / 2;
    } else {
        if (position != 'topright' && stepsCount === 0) {
            stageInfoBeforeStep = null;
        }
        if (stepsCount === 0) {
            position = 'topright';
        }
        stageInfo.scaling = Math.min(canvasProperties.width / (stageProperties.width / 2), canvasProperties.height / stageProperties.height);
        if (pageCount == null) {
            pageCount = 1;
        }
        if (pageCount == 1) {
            stageInfo.x = 0;
            stageInfo.y = (canvasProperties.height - stageProperties.height * stageInfo.scaling) / 2;
        } else {
            stageInfo.x = canvasProperties.width - stageProperties.width * stageInfo.scaling;
            stageInfo.y = (canvasProperties.height - stageProperties.height * stageInfo.scaling) / 2;
        }
    }

    stage.x = stageInfo.x;
    stage.y = stageInfo.y;
    stage.scaleX = stage.scaleY = stageInfo.scaling;
    var scaling = canvasProperties.height / 580;
    scaling = (navigator.userAgent.match(/iPad/i) != null) ? 0.98276 : scaling;

    $('#buttons').attr('scaling', scaling);
    $('#buttons').css({ 'font-size': 15 * scaling + 'px' });
    $('.navigation').css({ 'font-size': 20 * scaling + 'px' });
    $('a.button').css({ 'font-size': 15 * scaling + 'px' });
    $('a.btn').css({ 'font-size': 20 * scaling + 'px' });
    if (steps) {
        for (a = 1; a < steps.length; a++) {
            updateStep2(steps[a]);
        }
    }
    update = true;
}
