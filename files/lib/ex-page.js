function preRender() {
    createjs.MotionGuidePlugin.install();
    this.lib === undefined ? setTimeout(preRender, 100) : ($("#container").css("visibility", "hidden"), lib.properties != undefined && lib.properties.manifest.length === 0 && (lib.properties.manifest = [{
        id: "temp",
        src: "https://majemastoragelive.blob.core.windows.net/math-test/Content/temp.jpg"
    }]), loadAssetsForIE9(), init(), postRender())
}

function postRender() {
    stage == null ? setTimeout(postRender, 100) : (canvasFontAdjust(exportRoot), addStageEvents(), setTimeout(function() {
        $("#container").css("visibility", "visible");
        loaded = !0;
        typeof window.parent.iframeloaded != "undefined" && window.parent.iframeloaded(window)
    }, 250))
}

function getMotionPathFromPoints(n) {
    for (var t = 0, i = []; t < n.length; ++t) t === 0 ? i.push(n[t].x, n[t].y) : i.push(n[t - 1].x, n[t - 1].y, n[t].x, n[t].y);
    return i
}

function addStageEvents() {
    var i, n, r, u, t;
    for (exportRoot.isExercise === !0 && (stageProperties = {
            width: 1200,
            height: 500
        }), createjs.Ticker.removeEventListener("tick", stage), createjs.Touch.enable(stage), createjs.Ticker.addEventListener("tick", tick), stage.enableMouseOver(10), steps = [{
            object: exportRoot,
            x: 0,
            y: 0,
            width: stageProperties.width,
            height: stageProperties.height,
            scaling: 1,
            info: {}
        }], i = 1; i <= exportRoot.getNumChildren(); i++)(n = exportRoot["stage" + i.toString()], n !== undefined) && (n.x -= n.regX, n.y -= n.regY, n.regX = n.regY = 0, r = {
        object: n,
        x: n.x,
        y: n.y,
        width: n.virtualBounds.width,
        height: n.virtualBounds.height,
        rotation: n.rotation,
        scaling: n.scaleX
    }, r.width = customSize.width, r.height = customSize.height, steps.push(r));
    u = document.createElement("div");
    $(u).attr("id", "buttons");
    $("body").append(u);
    t = exportRoot.isExercise ? " exercise" : "";
    btn_answers = document.createElement("a");
    $(btn_answers).text(mathviewer.getTranslation("CheckAnswer", defaultLanguage));
    $(btn_answers).addClass("button position2" + t);
    $(btn_answers).on("click", exerciseNavigationFunctions);
    $("#buttons").append(btn_answers);
    $(btn_answers).hide();
    exportRoot.isAnswersAvailable && !exportRoot.isCheckAnswerEnabled ? ($(btn_answers).show(), $(btn_answers).removeClass("disabled")) : ($(btn_answers).hide(), $(btn_answers).addClass("disabled"));
    btn_newExercise = document.createElement("a");
    $(btn_newExercise).text(mathviewer.getTranslation("NewExercise", defaultLanguage));
    $(btn_newExercise).addClass("button position1" + t);
    $(btn_newExercise).on("click", exerciseNavigationFunctions);
    $("#buttons").append(btn_newExercise);
    $(btn_newExercise).hide();
    exportRoot.isAnswersAvailable && !exportRoot.isCheckAnswerEnabled ? $(btn_newExercise).show() : ($(btn_newExercise).hide(), $(btn_newExercise).addClass("disabled"));
    exportRoot.isNewExerciseEnabled || ($(btn_newExercise).hide(), $(btn_newExercise).addClass("disabled"), $(btn_answers).removeClass("position2"), $(btn_answers).addClass("position1"), $(btn_answers).hide(), $(btn_answers).addClass("disabled"));
    btn_spread = document.createElement("a");
    $(btn_spread).text(mathviewer.getTranslation("ResetExercise", defaultLanguage));
    $(btn_spread).attr("title", mathviewer.getTranslation("ResetExercise", defaultLanguage));
    $(btn_spread).addClass("button position3" + t);
    $(btn_spread).on("click", exerciseNavigationFunctions);
    $("#buttons").append(btn_spread);
    $(btn_spread).hide();
    $(btn_spread).addClass("disabled");
    btn_navigate1 = document.createElement("a");
    $(btn_navigate1).text(mathviewer.getTranslation("PreviousExercise", defaultLanguage));
    $(btn_navigate1).attr("title", mathviewer.getTranslation("PreviousExercise", defaultLanguage));
    $(btn_navigate1).addClass("button position2" + t);
    $(btn_navigate1).on("click", exerciseNavigationFunctions);
    $("#buttons").append(btn_navigate1);
    $(btn_navigate1).hide();
    $(btn_navigate1).addClass("disabled");
    btn_navigate2 = document.createElement("a");
    $(btn_navigate2).text(mathviewer.getTranslation("NextExercise", defaultLanguage));
    $(btn_navigate2).attr("title", mathviewer.getTranslation("NextExercise", defaultLanguage));
    $(btn_navigate2).addClass("button position1" + t);
    $(btn_navigate2).on("click", exerciseNavigationFunctions);
    $("#buttons").append(btn_navigate2);
    $(btn_navigate2).hide();
    $(btn_navigate2).addClass("disabled");
    window.parent === this || (window.addEventListener("orientationchange", updateProperties), window.onresize = updateProperties);
    updateProperties();
    stepsCount = 1;
    step = steps[0];
    setSteps()
    $('body').prepend('<input value="" type="input" tabindex="1" autofocus class="hdnFocusInput" />'); // to add focus to dummy invisible textbox on Vilar/Viovar popup
}

function addEnterKeyEvent() {
    setTimeout(function() {
        $('.hdnFocusInput').focus();
        $(document).unbind("keyup").keyup(function(e) {
            var code = e.which; // recommended to use e.which, it's normalized across browsers
            if (code == 13) {
                var popupViovar = window.parent.document.getElementById('modalViOvar');
                var popupVilar = window.parent.document.getElementById('modalViLar');

                if ($(popupVilar).is(':visible')) {
                    if (parseInt($(popupVilar).attr('data-slide-count')) > 0) { //vilar with Slides
                        focusActiveSlide('move');
                    } else {
                        for (var i = 0; i < $('.position1').length; i++) { //vilar without Slides
                            if ($($('.position1')[i]).hasClass('disabled') == false) {
                                $($('.position1')[i]).click();
                                break;
                            }
                        }
                    }
                } else if ($(popupViovar).is(':visible')) {
                    lib.playMagicWand();
                    for (var i = 0; i < $('.position1').length; i++) {
                        if ($($('.position1')[i]).hasClass('disabled') == false && $($('.position1')[i]).is(":visible") == true) {
                            $($('.position1')[i]).click();
                            break;
                        }
                    }
                }
            }
        });
    }, 500);
    $('.hdnFocusInput').focus();
    loopInterval = setInterval(function() {
        focusActiveSlide();
    }, 500);
}

var loopInterval;

function focusActiveSlide(isMove) {
    var visibleTabs = $(window.parent.$('.tabs')[0]).find('.shown');
    var activeTabIndex = 0;
    for (var i = 0; i < visibleTabs.length; i++) {
        if ($(visibleTabs[i].children[0]).hasClass('active')) {
            activeTabIndex = i;
            break;
        }
    };

    var temp = $(window.parent.$(".slider .slides"))[activeTabIndex];
    var currIndex = 0;
    if (activeTabIndex < 3) { //max three tabs with slides
        for (var i = 0; i < temp.children.length; i++) {
            if ($(temp.children[i]).attr('class').trim() == 'active') {
                currIndex = i;
                break;
            }
        }
    } else {
        var id = activeTabIndex + 1;
        temp = $('#tab' + id);
    }

    if (isMove != undefined && isMove == 'refresh') { // refresh iframe to get focus on moveto next slide
        $($(temp).find('.pageContent')[currIndex])[0].src = $($(temp).find('.pageContent')[currIndex])[0].src;
    }
    var inpHdn = $($($(temp).find('.pageContent')[currIndex]).contents()[0]).find('.hdnFocusInput')[0];

    $(inpHdn).focus();
    if (inpHdn != undefined) {
        if ($(inpHdn).is(":focus") == false) {
            $(inpHdn).focus();
        }
        clearInterval(loopInterval);
    }
    if (isMove != undefined && isMove == 'move') {
        var btnNxt = $($($(temp).find('.pageContent')[currIndex]).contents()[0]).find('.position1');
        for (var i = 0; i < btnNxt.length; i++) {
            if ($(btnNxt[i]).hasClass('disabled') == false) {
                $(btnNxt[i]).click();
                break;
            }
        }
    }
    $(inpHdn).focus();
    if (inpHdn != undefined) {
        if ($(inpHdn).is(":focus") == false) {
            $(inpHdn).focus();
        }
        clearInterval(loopInterval);
    }
}

function setNavigations() {
    var n = window.parent.document.getElementById("modalViLar"),
        t = n == null ? 0 : n.getAttribute("data-slide-count");
    if (t > 0) {
        $(btn_navigate2).unbind("click");
        $(btn_navigate2).on("click", exerciseNavigationFunctions)
    }
    if (stepsCount === 0) $(btn_navigate1).hide(), $(btn_navigate2).hide(), $(btn_spread).hide(), $(btn_navigate1).addClass("disabled"), $(btn_navigate2).addClass("disabled"), $(btn_spread).addClass("disabled");
    else if (!exportRoot.isAnswersAvailable) {
        if ($(btn_navigate1).show(), $(btn_navigate2).show(), $(btn_navigate1).removeClass("disabled"), $(btn_navigate2).removeClass("disabled"), stepsCount === 1 && $(btn_navigate1).addClass("disabled"), stepsCount === steps.length - 1)
            if (t > 0) {
                $(btn_navigate2).unbind("click");
                $(btn_navigate2).on("click", moveToNextSlide)
            } else $(btn_navigate2).addClass("disabled");
        stepsCount > 1 && ($(btn_spread).show(), $(btn_spread).removeClass("disabled"))
    }
    steps.length == 3 && (stepsCount == 1 ? $(btn_navigate1).hide() : stepsCount == 2 && ($(btn_navigate1).hide(), $(btn_spread).removeClass("position3"), $(btn_spread).addClass("position2"), $(btn_spread).show()));
    exportRoot.ishideButtons && $("#buttons").attr({
        style: "display:none !important"
    })
}

function hideNavigation() {
    $(btn_navigate1).addClass("disabled");
    $(btn_navigate2).addClass("disabled");
    $(btn_spread).addClass("disabled");
    $(btn_spread).hide()
}

function moveToNextSlide() {
    $(btn_spread).click();
    window.parent.$(".slider").slider("next");
    setTimeout(function() {
        focusActiveSlide();
    }, 500);
    loopInterval = setInterval(function() {
        focusActiveSlide();
    }, 50);
}

function exerciseNavigationFunctions(n) {
    var r, i, t;
    if (!$(n.currentTarget).hasClass("disabled")) {
        r = !0;
        i = !1;
        switch (n.target) {
            case btn_answers:
                t = steps[stepsCount].object;
                t.onCheckAnswer && t.onCheckAnswer();
                t.incorrectAnswer.visible = !1;
                currentAnswers[stepsCount] && t.answer === currentAnswers[stepsCount] ? (t.incorrectAnswer.visible = !1, t.incorrectIcon.visible = !1, t.correctIcon.visible = !0, stepsCount == steps.length - 1 && (i = 1)) : currentAnswers[stepsCount] == -1 || (t.incorrectAnswer.visible = !0, t.incorrectAnswer.alpha = 0, createjs.Tween.get(t.incorrectAnswer).to({
                    alpha: 1
                }, 2e3), t.incorrectIcon.visible = !0, t.correctIcon.visible = !1, t.onIncorrectAnswer && t.onIncorrectAnswer());
                break;
            case btn_newExercise:
                t = steps[stepsCount].object;
                t.incorrectAnswer.visible = !1;
                t.answer = undefined;
                createjs.Tween.removeAllTweens();
                currentAnswers[stepsCount] && t.answer === currentAnswers[stepsCount] ? (t.incorrectAnswer.visible = !1, t.incorrectIcon.visible = !1, t.correctIcon.visible = !0) : (t.incorrectAnswer.visible = !0, t.incorrectIcon.visible = !0, t.correctIcon.visible = !1);
                t.onNewExercise && t.onNewExercise.call(t);
                closeStep();
                stepsCount == steps.length - 1 ? i = 1 : stepsCount++;
                break;
            case btn_navigate1:
                navType = "prev";
                closeStep();
                stepsCount--;
                t = steps[stepsCount].object;
                t.onNewExercise && t.onNewExercise.call(t);
                break;
            case btn_navigate2:
                navType = "next";
                closeStep();
                stepsCount++;
                t = steps[stepsCount].object;
                t.onNewExercise && t.onNewExercise.call(t);
                break;
            case btn_spread:
                closeStep();
                stepsCount = 1
        }
        return setSteps(), i && (stepsCount = i), !0
    }
}

function setSteps() {
    if (steps[stepsCount].object.visible = !0, setNavigations(), stepsCount > 0) {
        for (index = 1; index < exportRoot.getNumChildren(); index++) {
            var n = exportRoot.getChildAt(index);
            n !== steps[stepsCount].object && n.contains !== undefined && (n.visible = !1)
        }
        steps[stepsCount].object.visible = !0;
        handleAnimation(steps[stepsCount].object)
    }
    stageInfoBeforeStep || (stageInfoBeforeStep = {
        x: stage.x,
        y: stage.y,
        scaling: stage.scaleX
    });
    updateProperties()
}

function numberline1(n, t, i) {
    var e = [],
        u, o, r, f;
    for (t.numberLine = new i.Shape, t.numberLine.graphics.ss(1.5).f("#000000").s("#000000").moveTo(130, 60).lineTo(332.5, 60).moveTo(332.5, 60).lineTo(332.5, 58).lineTo(342.5, 60).lineTo(332.5, 62).lineTo(332.5, 60), u = n, r = 0; r < u; r++) o = "#000000", u === r && (o = "#00B2CA"), t.numberLine.graphics.f("#000000").ss(1.5).s(o).moveTo(130 + 20 * r, 55).lineTo(130 + 20 * r, 65);
    for (t.numberLine.graphics.f("#00B2CA").ss(3.5).s("#00B2CA").moveTo(129, 60).lineTo(130 + 20 * u, 60), r = 0; r < u; r++) t.temptext = u === r ? new i.Text("" + r, "bold 16px 'Myriad Pro'", "#00B2CA") : new i.Text("" + r, "16px 'Myriad Pro'"), t.temptext.lineHeight = 15, t.temptext.setTransform(125 + 20 * r, 90), e.push(t.temptext);
    for (t.numberLine.setTransform(0, 15), t.addChild(t.numberLine), f = 0; f < e.length; f++) t.addChild(e[f])
}

function handleAnimation(n) {
    n.tweens && (createjs.Tween.removeAllTweens(), $.each(n.tweens, function(n, t) {
        var u = navType == "prev" ? 0 : t.wait,
            i, f, e, o, r, s;
        if (t.alphaTimeout !== undefined && (t.tweenTime = navType == "prev" ? 0 : t.alphaTimeout), t.loop || (t.loop = !1), i = {}, t.startColor !== undefined && (t.ref.color = t.startColor), t.endColor !== undefined && (i.color = t.endColor), t.alphaTo !== undefined && (i.alpha = t.alphaTo), t.rotationTo !== undefined && (i.rotation = t.rotationTo), t.guide !== undefined && (i.guide = t.guide), t.positionTo !== undefined && (i.x = t.positionTo.x, i.y = t.positionTo.y), t.scale !== undefined && (i.scaleX = t.scale.x, i.scaleY = t.scale.y), t.scaleTo !== undefined && (i.scaleX = t.scaleTo.x, i.scaleY = t.scaleTo.y), t.shadow !== undefined && (t.ref.shadow = t.ref.shadow === undefined || t.ref.shadow === null ? new createjs.Shadow("#000000", 0, 0, 0) : t.ref.shadow, f = t.ref.shadow.blur, t.ref.shadow.ref = t.ref, createjs.Tween.get(t.ref.shadow).to({
                blur: t.shadow.blurFrom
            }, 1e3).wait(10).to({
                blur: 0
            }, 1e3).to({
                blur: t.shadow.blurTo
            }, 1e3).wait(10).to({
                blur: f
            }, 1e3).to({
                blur: t.shadow.blurFrom
            }, 1e3).wait(100).to({
                blur: 0
            }, 1e3).to({
                blur: t.shadow.blurTo
            }, 1e3).wait(10).to({
                blur: f
            }, 1e3).call(function() {
                createjs.Tween.get(this.ref.shadow).to({
                    blur: t.shadow.blurFrom
                }, 1e3)
            })), t.wiggle !== undefined && t.wiggle !== !1)
            for (e = createjs.Tween.get(t.ref), t.ref.x = t.positionFrom.x, t.ref.y = t.positionFrom.y, t.ref.scaleX = t.scaleFrom.x, t.ref.scaleY = t.scaleFrom.y, e.wait(u), o = 0; o < t.loopCount; o++) e.to({
                x: t.positionTo.x,
                y: t.positionTo.y,
                scaleX: t.scaleTo.x,
                scaleY: t.scaleTo.y
            }, t.tweenTime).to({
                x: t.positionFrom.x,
                y: t.positionFrom.y,
                scaleX: t.scaleFrom.x,
                scaleY: t.scaleFrom.y
            }, t.tweenTime);
        else t.textRef ? (r = {}, r.override = t.override !== undefined ? t.override : !0, t.textRef.text = t.textFrom, i.text = t.textTo, s = createjs.Tween.get(t.textRef, r).wait(u).to(i, t.tweenTime).on("change", function() {}).call(function() {})) : (r = {}, r.override = t.override !== undefined ? t.override : !0, r.loop = t.loop, t.scaleFrom && (t.ref.scaleX = t.scaleFrom.x, t.ref.scaleY = t.scaleFrom.y), t.ref.alpha = t.alphaFrom !== undefined ? t.alphaFrom : t.ref.alpha, t.ref.rotation = t.rotationFrom !== undefined ? t.rotationFrom : t.ref.rotation, t.ref.rotation = t.staticRotation !== undefined ? t.staticRotation : t.ref.rotation, t.positionFrom && (t.ref.x = t.positionFrom.x, t.ref.y = t.positionFrom.y), s = createjs.Tween.get(t.ref, r).wait(u).to(i, t.tweenTime).on("change", function() {}).call(function() {}))
    }))
}

function closeStep(n) {
    var t;
    if (hideNavigation(), n === !1) {
        steps[stepsCount].object.visible = !1;
        return
    }
    for (index = 0; index < exportRoot.getNumChildren(); index++)(t = exportRoot.getChildAt(index), t.contains !== undefined) && (t.visible = !0);
    if (n)
        for (index = 2; index < exportRoot.getNumChildren(); index++)(t = exportRoot.getChildAt(index), t.contains !== undefined) && (t.visible = !1);
    updateProperties();
    n === !0 && stageInfoBeforeStep && stageInfoBeforeStep.scaling == stageInfo.scaling && setTimeout(function() {
        stage.x = stageInfoBeforeStep.x;
        stage.y = stageInfoBeforeStep.y;
        stage.scaleX = stage.scaleY = stageInfoBeforeStep.scaling;
        stageInfoBeforeStep = null;
        update = !0
    }, 0);
    update = !0
}

function updateStep2(v) {
    if (stepsCount === 0) {
        v.object.scaleX = v.object.scaleY = v.scaling;
        v.object.x = v.x;
        v.object.y = v.y;
        v.object.y = 0;
        v.object.rotation = v.rotation;
        if (v.frame) {
            v.frame.visible = true;
        }
    } else {
        var middlePoint = { x: stageProperties.width / 2, y: stageProperties.height / 2 };
        var ps = parseFloat($('#buttons').attr('scaling') || 1);
        v.object.scaleX = v.object.scaleY = Math.min(3.5, Math.min((canvasProperties.width - 110 * ps) / v.width, (canvasProperties.height) / v.height) / stage.scaleX);
        v.object.rotation = 0;

        var height = $(window).height();
        var width = $(window).width();
        var dustbinXTrans = 0,
            dustbinYTrans = 0;

        v.isoX = v.object.x = 60;
        v.isoY = v.object.y = 160;
        v.object.scaleY = v.object.scaleX = 0.80;
        // console.log('if(height==' + height + '&&width==' + width + '){v.isoX = v.object.x = ' + v.object.x + ';v.isoY = v.object.y =' + v.object.y + '; v.object.scaleX=v.object.scaleY=' + v.object.scaleY + '}')
        var isEdge = navigator.userAgent.indexOf(' Edge/') >= 0 || navigator.userAgent.indexOf(' edge/') >= 0;
        var isIE = /*@@cc_on!@@*/ false || !!document.documentMode;
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isiPad = (navigator.userAgent.match(/iPad/i) != null);
        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        var isSafari = navigator.userAgent.indexOf("Safari") > -1;

        if (isChrome == true) {
            if (screen.width == 1920 && screen.height == 1080) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 135;
                v.object.scaleX = v.object.scaleY = 0.73;
            } else if (screen.width == 1680 && screen.height == 1050) {
                v.isoX = v.object.x = 130;
                v.isoY = v.object.y = 160;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -15;
                dustbinYTrans = 35;
            } else if (screen.width == 1600 && screen.height == 900) {
                v.isoX = v.object.x = 150;
                v.isoY = v.object.y = 140;
                v.object.scaleX = v.object.scaleY = 0.67;
                dustbinXTrans = -35;
                dustbinYTrans = -3;
            } else if (screen.width == 1440 && screen.height == 900) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 160;
                v.object.scaleX = v.object.scaleY = 0.73;
                dustbinXTrans = -10;
                dustbinYTrans = -2;
            } else if (screen.width == 1366 && screen.height == 768) {
                v.isoX = v.object.x = 180;
                v.isoY = v.object.y = 125;
                v.object.scaleX = v.object.scaleY = 0.63;
                dustbinXTrans = -70;
                dustbinYTrans = 7;
            } else if (screen.width == 1280 && screen.height == 1024) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 240;
                v.object.scaleX = v.object.scaleY = 0.75;
                dustbinXTrans = 12;
                dustbinYTrans = 55;
            } else if (screen.width == 1280 && screen.height == 960) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 180;
                v.object.scaleX = v.object.scaleY = 0.76;
                dustbinXTrans = 13.5;
                dustbinYTrans = 55;
            } else if (screen.width == 1280 && screen.height == 800) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 130;
                v.object.scaleX = v.object.scaleY = 0.73;
                dustbinXTrans = -10;
                dustbinYTrans = 10;
            } else if (screen.width == 1280 && screen.height == 720) {
                v.isoX = v.object.x = 175;
                v.isoY = v.object.y = 120;
                v.object.scaleX = v.object.scaleY = 0.63;
                dustbinXTrans = -60;
                dustbinYTrans = 0;
            } else if (screen.width == 1024 && screen.height == 768) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 160;
                v.object.scaleX = v.object.scaleY = 0.75;
                dustbinXTrans = 20;
                dustbinYTrans = 40;
            } else if (screen.width == 1600 && screen.height == 1200) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 200;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 100;
            } else if (screen.width == 1280 && screen.height == 1050) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 250;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 95;
            } else if (screen.width == 1920 && screen.height == 1200) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 140;
                v.object.scaleX = v.object.scaleY = 0.73;
                dustbinXTrans = -10;
                dustbinYTrans = 40;
            } else if (screen.width == 2560 && screen.height == 1440) {
                v.isoX = v.object.x = 130;
                v.isoY = v.object.y = 150;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -25;
                dustbinYTrans = 20;
            } else if (screen.width == 1600 && screen.height == 1024) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 200;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 20;
            }
        } else if (isFirefox == true) {
            if (screen.width == 1920 && screen.height == 1080) {
                v.isoX = v.object.x = 110;
                v.isoY = v.object.y = 135;
                v.object.scaleX = v.object.scaleY = 0.74;
                dustbinXTrans = -10;
                dustbinYTrans = -2;
            } else if (screen.width == 1680 && screen.height == 1050) {
                v.isoX = v.object.x = 130;
                v.isoY = v.object.y = 160;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -18;
                dustbinYTrans = 30;
            } else if (screen.width == 1600 && screen.height == 900) {
                v.isoX = v.object.x = 140;
                v.isoY = v.object.y = 130;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -30;
                dustbinYTrans = -7;
            } else if (screen.width == 1440 && screen.height == 900) {
                v.isoX = v.object.x = 135;
                v.isoY = v.object.y = 150;
                v.object.scaleX = v.object.scaleY = 0.73;
                dustbinXTrans = -26;
                dustbinYTrans = 7;
            } else if (screen.width == 1366 && screen.height == 768) {
                v.isoX = v.object.x = 170;
                v.isoY = v.object.y = 130;
                v.object.scaleX = v.object.scaleY = 0.63;
                dustbinXTrans = -50;
                dustbinYTrans = 2;
            } else if (screen.width == 1280 && screen.height == 1024) {
                v.isoX = v.object.x = 80;
                v.isoY = v.object.y = 200;
                v.object.scaleX = v.object.scaleY = 0.8;
                dustbinXTrans = 27;
                dustbinYTrans = 63;
            } else if (screen.width == 1280 && screen.height == 960) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 160;
                v.object.scaleX = v.object.scaleY = 0.76;
                dustbinXTrans = 14.2;
                dustbinYTrans = 68;
            } else if (screen.width == 1280 && screen.height == 800) {
                v.isoX = v.object.x = 140;
                v.isoY = v.object.y = 140;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -20;
                dustbinYTrans = 10;
            } else if (screen.width == 1280 && screen.height == 720) {
                v.isoX = v.object.x = 200;
                v.isoY = v.object.y = 120;
                v.object.scaleX = v.object.scaleY = 0.63;
                dustbinXTrans = -85;
                dustbinYTrans = 1;
            } else if (screen.width == 1024 && screen.height == 768) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 160;
                v.object.scaleX = v.object.scaleY = 0.75;
                dustbinXTrans = 20;
                dustbinYTrans = 40;
            } else if (screen.width == 1600 && screen.height == 1200) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 180;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 110;
            } else if (screen.width == 1280 && screen.height == 1050) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 250;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 90;
            } else if (screen.width == 1920 && screen.height == 1200) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 140;
                v.object.scaleX = v.object.scaleY = 0.73;
                dustbinXTrans = -10;
                dustbinYTrans = 43;
            } else if (screen.width == 2560 && screen.height == 1440) {
                v.isoX = v.object.x = 130;
                v.isoY = v.object.y = 150;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -25;
                dustbinYTrans = 18;
            } else if (screen.width == 1600 && screen.height == 1024) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 200;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 20;
            }
        } else if (isEdge == true) {
            if (screen.width == 1920 && screen.height == 1080) {
                v.isoX = v.object.x = 130;
                v.isoY = v.object.y = 130;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -23;
                dustbinYTrans = 8;
            } else if (screen.width == 1680 && screen.height == 1050) {
                v.isoX = v.object.x = 130;
                v.isoY = v.object.y = 160;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -17;
                dustbinYTrans = 25;
            } else if (screen.width == 1600 && screen.height == 900) {
                v.isoX = v.object.x = 180;
                v.isoY = v.object.y = 130;
                v.object.scaleX = v.object.scaleY = 0.65;
                dustbinXTrans = -68;
                dustbinYTrans = 0;
            } else if (screen.width == 1440 && screen.height == 900) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 130;
                v.object.scaleX = v.object.scaleY = 0.75;
                dustbinXTrans = 8;
                dustbinYTrans = 3;
            } else if (screen.width == 1366 && screen.height == 768) {
                v.isoX = v.object.x = 200;
                v.isoY = v.object.y = 130;
                v.object.scaleX = v.object.scaleY = 0.62;
                dustbinXTrans = -85;
                dustbinYTrans = 1;
            } else if (screen.width == 1280 && screen.height == 1024) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 180;
                v.object.scaleX = v.object.scaleY = 0.76;
                dustbinXTrans = 15;
                dustbinYTrans = 80;
            } else if (screen.width == 1280 && screen.height == 960) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 170;
                v.object.scaleX = v.object.scaleY = 0.76;
                dustbinXTrans = 15;
                dustbinYTrans = 50;
            } else if (screen.width == 1280 && screen.height == 800) {
                v.isoX = v.object.x = 150;
                v.isoY = v.object.y = 140;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -35;
                dustbinYTrans = -3;
            } else if (screen.width == 1280 && screen.height == 720) {
                v.isoX = v.object.x = 190;
                v.isoY = v.object.y = 115;
                v.object.scaleX = v.object.scaleY = 0.63;
                dustbinXTrans = -70;
                dustbinYTrans = 5;
            } else if (screen.width == 1024 && screen.height == 768) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 160;
                v.object.scaleX = v.object.scaleY = 0.75;
                dustbinXTrans = 20;
                dustbinYTrans = 25;
            } else if (screen.width == 1600 && screen.height == 1200) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 180;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 105;
            } else if (screen.width == 1280 && screen.height == 1050) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 250;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 85;
            } else if (screen.width == 1920 && screen.height == 1200) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 140;
                v.object.scaleX = v.object.scaleY = 0.75;
                dustbinYTrans = 30;
            } else if (screen.width == 2560 && screen.height == 1440) {
                v.isoX = v.object.x = 130;
                v.isoY = v.object.y = 150;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -25;
                dustbinYTrans = 15;
            } else if (screen.width == 1600 && screen.height == 1024) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 200;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 15;
            }
        } else if (isIE == true) {
            if (screen.width == 1920 && screen.height == 1080) {
                v.isoX = v.object.x = 150;
                v.isoY = v.object.y = 160;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -40;
            } else if (screen.width == 1680 && screen.height == 1050) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 170;
                v.object.scaleX = v.object.scaleY = 0.75;
                dustbinXTrans = 2;
                dustbinYTrans = 10;
            } else if (screen.width == 1600 && screen.height == 900) {
                v.isoX = v.object.x = 170;
                v.isoY = v.object.y = 130;
                v.object.scaleX = v.object.scaleY = 0.65;
                dustbinXTrans = -60;
                dustbinYTrans = 18;
            } else if (screen.width == 1440 && screen.height == 900) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 140;
                v.object.scaleX = v.object.scaleY = 0.75;
                dustbinXTrans = 9;
                dustbinYTrans = 13;
            } else if (screen.width == 1366 && screen.height == 768) {
                v.isoX = v.object.x = 200;
                v.isoY = v.object.y = 130;
                v.object.scaleX = v.object.scaleY = 0.63;
                dustbinXTrans = -90;
                dustbinYTrans = 5;
            } else if (screen.width == 1280 && screen.height == 1024) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 180;
                v.object.scaleX = v.object.scaleY = 0.76;
                dustbinXTrans = 15;
                dustbinYTrans = 100;
            } else if (screen.width == 1280 && screen.height == 960) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 160;
                v.object.scaleX = v.object.scaleY = 0.76;
                dustbinXTrans = 15;
                dustbinYTrans = 75;
            } else if (screen.width == 1280 && screen.height == 800) {
                v.isoX = v.object.x = 100;
                v.isoY = v.object.y = 140;
                v.object.scaleX = v.object.scaleY = 0.76;
                dustbinXTrans = 13;
                dustbinYTrans = -5;
            } else if (screen.width == 1280 && screen.height == 720) {
                v.isoX = v.object.x = 200;
                v.isoY = v.object.y = 120;
                v.object.scaleX = v.object.scaleY = 0.62;
                dustbinXTrans = -88;
                dustbinYTrans = 10;
            } else if (screen.width == 1024 && screen.height == 768) {
                v.isoX = v.object.x = 80;
                v.isoY = v.object.y = 160;
                v.object.scale = v.object.scaleY = 0.8;
                dustbinXTrans = 20;
                dustbinYTrans = 30;
            } else if (screen.width == 1600 && screen.height == 1200) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 200;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 105;
            } else if (screen.width == 1280 && screen.height == 1050) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 250;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 95;
            } else if (screen.width == 1920 && screen.height == 1200) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 150;
                v.object.scaleX = v.object.scaleY = 0.73;
                dustbinXTrans = -10;
                dustbinYTrans = 35;
            } else if (screen.width == 2560 && screen.height == 1440) {
                v.isoX = v.object.x = 130;
                v.isoY = v.object.y = 150;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -25;
                dustbinYTrans = 25;
            } else if (screen.width == 1600 && screen.height == 1024) {
                v.isoX = v.object.x = 120;
                v.isoY = v.object.y = 200;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -10;
                dustbinYTrans = 20;
            }
        } else if (isSafari == true) {
            if (isiPad) {
                if ((screen.width == 768 && screen.height == 1024) && (Math.abs(window.orientation) === 90)) {
                    v.isoX = v.object.x = 120;
                    v.isoY = v.object.y = 180;
                    v.object.scaleX = v.object.scaleY = 0.7;
                    dustbinXTrans = 5;
                    dustbinYTrans = 80;
                } else if (screen.width == 768 && screen.height == 1024) {
                    v.isoX = v.object.x = 100;
                    v.isoY = v.object.y = 180;
                    v.object.scaleX = v.object.scaleY = 0.7; /*Ipad 3&4   Portrait*/
                    dustbinXTrans = 5;
                    dustbinYTrans = 100;
                }
            } else if ((screen.width == 2560 && screen.height == 1600) || (screen.width == 2880 && screen.height == 1800)) {
                v.isoX = v.object.x = 130;
                v.isoY = v.object.y = 180;
                v.object.scaleX = v.object.scaleY = 0.7;
                dustbinXTrans = -30;
                dustbinYTrans = 65;
            }
        }


        /* Firebox*/
        // if(height==670&&width==1317){v.isoX = v.object.x = 80;v.isoY = v.object.y =140; v.object.scaleX=v.object.scaleY=0.73}

        for (var i = 0; i < v.object.children.length; i++) {
            if (v.object.children[i].type == 'toTransform') {

                v.object.children[i].x = v.object.children[i].x + dustbinXTrans;
                v.object.children[i].y = v.object.children[i].y + dustbinYTrans;
            }
        };

        if (v.frame) {
            v.frame.visible = false;
        }
    }
    update = true;
}

function tick(n) {
    frequentUpdate && (update = !0);
    update = !0;
    (update || createjs.Tween.hasActiveTweens()) && (update = !1, stage.update(n))
}

function updateProperties() {
    var t, n;
    if (canvas == undefined || stage == undefined) {
        setTimeout(updateProperties, 100);
        return
    }
    if (canvasProperties = {
            width: window.innerWidth ? window.innerWidth : $(window).width(),
            height: window.innerHeight ? window.innerHeight : $(window).height()
        }, t = canvas.getContext("2d"), stageInfo.ratio = mathviewer.getPixelRatio(t), canvasProperties.width *= stageInfo.ratio, canvasProperties.height *= stageInfo.ratio, canvas.width = canvasProperties.width, canvas.height = canvasProperties.height, canvas.style.width = canvasProperties.width / stageInfo.ratio + "px", canvas.style.height = canvasProperties.height / stageInfo.ratio + "px", canvasProperties.width > canvasProperties.height || stepsCount > 0 ? (position != "horizontal" && stepsCount === 0 && (stageInfoBeforeStep = null), stepsCount === 0 && (position = "horizontal"), stageInfo.scaling = Math.min(canvasProperties.width / stageProperties.width, canvasProperties.height / stageProperties.height), stageInfo.x = (canvasProperties.width - stageProperties.width * stageInfo.scaling) / 2, stageInfo.y = (canvasProperties.height - stageProperties.height * stageInfo.scaling) / 2) : (position != "topright" && stepsCount === 0 && (stageInfoBeforeStep = null), stepsCount === 0 && (position = "topright"), stageInfo.scaling = Math.min(canvasProperties.width / (stageProperties.width / 2), canvasProperties.height / stageProperties.height), pageCount == null && (pageCount = 1), pageCount == 1 ? (stageInfo.x = 0, stageInfo.y = (canvasProperties.height - stageProperties.height * stageInfo.scaling) / 2) : (stageInfo.x = canvasProperties.width - stageProperties.width * stageInfo.scaling, stageInfo.y = (canvasProperties.height - stageProperties.height * stageInfo.scaling) / 2)), customStageProp.x = stageInfo.x, customStageProp.y = stageInfo.y, stageInfo.x = stageInfo.y = 0, stage.x = stageInfo.x, stage.y = stageInfo.y, stage.scaleX = stage.scaleY = stageInfo.scaling, n = canvasProperties.height / 580,
        n = (navigator.userAgent.match(/iPad/i) != null) ? 0.98276 : n,
        $("#buttons").attr("scaling", n), $("#buttons").css({
            "font-size": 15 * n + "px"
        }), $(".navigation").css({
            "font-size": 20 * n + "px"
        }), $(".navigation.exercise").css({
            "font-size": 18 * n + "px"
        }), $("a.button").css({
            "font-size": 15 * n + "px"
        }), $("a.btn").css({
            "font-size": 20 * n + "px"
        }), steps)
        for (a = 1; a < steps.length; a++) updateStep2(steps[a]);
    update = !0
}
var loaded, canvasProperties, update, frequentUpdate = !0,
    pageCount, position, stageInfoBeforeStep, steps, stepsCount, btn_navigate1, btn_navigate2, btn_spread, btn_answers, customSize, stageProperties, currentAnswers, navType, customStageProp, stageInfo;
$(document).ready(preRender);
customSize = {
    width: 1432,
    height: 632
};
stageProperties = {
    width: $(window).width(),
    height: $(window).height()
};
currentAnswers = [];
navType = "";
setTimeout(function() {
    frequentUpdate = !1
}, 6e4);
customStageProp = {
    x: 0,
    y: 0
};
stageInfo = {
    x: 0,
    y: 0,
    scaling: 1,
    ratio: 1
};
