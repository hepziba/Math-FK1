var canvas, stage, exportRoot;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};

    var loader = new createjs.LoadQueue(true, null, true); // allow cross origin images
    loader.addEventListener("fileload", function(evt) {
        if (evt.item.type == "image") {
            images[evt.item.id] = evt.result;
        }
    });
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
}

function handleComplete() {
    addEnterKeyEvent();
    exportRoot = new lib.exercise();
    exportRoot.isExercise = true;
    exportRoot.isBatExercise = true;
    exportRoot.isCheckAnswerEnabled = false;
    exportRoot.isNewExerciseEnabled = false;

    exportRoot.isAnswersAvailable = true;
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
}


var extras = function() {};
(function(lib, img, cjs) {

    var p; // shortcut to reference prototypes

    // library properties:
    lib.properties = {
        width: 1219,
        height: 678,
        fps: 20,
        color: "#FFFFFF",
        isExercise: true,
        manifest: [{
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/viovar/images/pencil.png",
            id: "pen"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/viovar/images/player-buttons.png",
            id: "icons"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/viovar/images/limb.png",
            id: "limb"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/viovar/images/s4_bird1.png",
            id: "bird1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/viovar/images/s4_bird2.png",
            id: "bird2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/viovar/images/s4_bird3.png",
            id: "bird3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/viovar/images/s4_bird4.png",
            id: "bird4"
        }]
    };

    lib.init_Magic_Wand();

    var iconProperties = {
        x: 850 + 380,
        y: 350 - 140,
        scaleX: 0.5,
        scaleY: 0.5,
        wrongX: 750 + 150,
        wrongY: 345 - 15
    };

    (lib.pen = function() {
        this.initialize(img.pen);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.icons = function() {
        this.initialize(img.icons);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.limb = function() {
        this.initialize(img.limb);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.bird1 = function() {
        this.initialize(img.bird1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.bird2 = function() {
        this.initialize(img.bird2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.bird3 = function() {
        this.initialize(img.bird3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.bird4 = function() {
        this.initialize(img.bird4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    //Static Content
    (lib.Basement = function() {
        this.initialize();
        this.header = new lib.exerciseTitle();
        this.header.setTransform(0, -30, 1, 1, 0, 0, 0, 0, 0);
        this.addChild(this.header);
    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);
    var transformX = transformY = 0.181;
    var moveX = 480 + 70 + 270,
        moveY = 6;
    var startX = ((168.0000) * transformX) + moveX,
        startY = ((0.0000) * transformY) + moveY;
    var endX = ((976.0000) * transformX) + moveX + 10,
        endY = ((932.0000) * transformY) + moveY;

    var startX2 = ((864.0000) * transformX) + moveX,
        startY2 = ((0.0000) * transformY) + moveY,
        endX2 = ((628.0000) * transformX) + moveX,
        endY2 = ((1900.0000) * transformY) + moveY + 17;
    var altStartX2 = startX,
        altStartY2 = startY,
        altEndX2 = endX,
        altEndY2 = endY;
    var bar = {
        x: startX,
        y: startY,
        oldx: startX,
        oldy: startY
    };
    var bar2 = {
        x: startX2,
        y: startY2,
        oldx: startX2,
        oldy: startY2
    };
    var pencil = null;

    var points = [new createjs.Point(startX, startY),
        new createjs.Point(((48.0000 - 4) * transformX) + moveX, ((932.0000) * transformY + 4) + moveY),
        new createjs.Point(((48.0000) * transformX) + moveX, ((932.0000) * transformY) + moveY),
        new createjs.Point(endX, endY)
    ];

    var points2 = [
        new createjs.Point(startX2, startY2),
        new createjs.Point(endX2, endY2)
    ];
    var points1Final = [new createjs.Point(startX, startY),
        new createjs.Point(((48.0000) * transformX) + moveX, ((932.0000) * transformY) + moveY),
        new createjs.Point(endX - 18, endY)
    ];

    var points2Final = [
        new createjs.Point(startX2, startY2),
        new createjs.Point(endX2, endY2)
    ];
    var motionPaths = [],
        motionPathsFinal = [];
    var motionPath = getMotionPathFromPoints(points);
    var motionPath2 = getMotionPathFromPoints(points2);
    motionPaths.push(motionPath, motionPath2);
    motionPathsFinal.push(getMotionPathFromPoints(points1Final), getMotionPathFromPoints(points2Final));

    (lib.EndCharacter = function() {
        this.initialize();
        thisStage = this;
        var barFull = {
            x: startX,
            y: startY,
            oldx: startX,
            oldy: startY
        };
        for (var m = 0; m < motionPathsFinal.length; m++) {

            for (var i = 2; i < motionPathsFinal[m].length; i += 2) {
                var motionPathTemp = motionPathsFinal[m];
                //motionPath[i].x, motionPath[i].y
                var round = new cjs.Shape();
                round.graphics
                    .setStrokeStyle(10, 'round', 'round')
                    .beginStroke("#000") //.moveTo(bar.oldx, bar.oldy).lineTo(bar.x, bar.y)
                    .curveTo(motionPathTemp[i - 2], motionPathTemp[i - 1], motionPathTemp[i], motionPathTemp[i + 1])
                    .endStroke();
                thisStage.addChild(round);

            };
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);
    var currentMotionStep = 1;
    // stage content:
    (lib.drawPoints = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "start": 0,
            "end": 1
        }, true);
        thisStage = this;
        thisStage.pencil = new lib.pen();
        thisStage.pencil.regY = 0;
        thisStage.pencil.setTransform(0, 0, 0.8, 0.8);

        thisStage.tempElements = [];

        thisStage.addChild(thisStage.pencil);

        this.timeline.addTween(cjs.Tween.get(bar).wait(10).to({
            guide: {
                path: motionPath
            }
        }, 20)).on('change', (function(event) {

            if (currentMotionStep == 1) {
                bar = drawCharacter(thisStage, bar, true, event);
            }
        }));

        this.timeline.addTween(cjs.Tween.get(bar2).wait(40).to({
            guide: {
                path: motionPath2
            }
        }, 20).call(function() {
            LastStage = true;
            pause2();
        }).wait(50)).on('change', (function(event) {
            if (currentMotionStep == 2) {
                bar2 = drawCharacter(thisStage, bar2, true, event);
            }
        }));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-126.9, 130, 123, 123);
    var currentStepChanged = false;

    function drawCharacter(thisStage, thisbar, isVisible, event) {
        //console.log(currentMotionStep)
        var oldStep = currentMotionStep;
        if (currentStepChanged) {
            thisbar.x = startX2;
            thisbar.y = startY2;
            thisbar.oldx = startX2;
            thisbar.oldy = startY2;
            currentStepChanged = false;
        }
        if (thisbar.x == endX && thisbar.y == endY) {
            currentMotionStep = 2;
            thisbar.x = startX2;
            thisbar.y = startY2;
            thisbar.oldx = startX2;
            thisbar.oldy = startY2;
            currentStepChanged = true;
        }
        if (thisbar.x == endX2 && thisbar.y == endY2) {
            currentMotionStep = 1;
            thisbar.oldx = startX;
            thisbar.oldy = startY;
            thisbar.x = startX;
            thisbar.y = startY;
        }
        if (oldStep == currentMotionStep) {
            if (thisbar.x === startX && thisbar.y === startY) {
                thisbar.oldx = startX;
                thisbar.oldy = startY;
                thisbar.x = startX;
                thisbar.y = startY;
            }
            if ((thisbar.x === startX && thisbar.y === startY) || (thisbar.x === endX2 && thisbar.y === endY2)) {
                //thisStage.timeline.stop();
                for (var i = 0; i < thisStage.tempElements.length; i++) {
                    var e = thisStage.tempElements[i];

                    if (e) {
                        e.object.visible = false;
                        //thisStage.tempElements.pop(e);
                        thisStage.removeChild(e.object)
                    }
                }
                thisStage.tempElements = [];

                //thisStage.timeline.play();
            }

            var round = new cjs.Shape();

            round.graphics
                .setStrokeStyle(10, 'round', 'round')
                .beginStroke("#000") //.moveTo(thisbar.oldx, thisbar.oldy).lineTo(thisbar.x, thisbar.y)
                .curveTo(thisbar.oldx, thisbar.oldy, thisbar.x, thisbar.y)
                .endStroke();
            round.visible = isVisible;
            thisbar.oldx = thisbar.x;
            thisbar.oldy = thisbar.y;

            if (thisbar.x === endX && thisbar.y === endY) {
                thisbar.x = startX2;
                thisbar.y = startY2;
                thisbar.oldx = thisbar.x;
                thisbar.oldy = thisbar.y;
            } else {
                thisStage.addChild(round);
            }

            thisStage.pencil.x = thisbar.x, thisStage.pencil.y = thisbar.y - 145;
            ////console.log(thisStage.pencil.x, thisStage.pencil.y)
            thisStage.removeChild(thisStage.pencil);
            thisStage.addChild(thisStage.pencil);
            pencil = this.pencil;

            // console.log(thisbar.x, thisbar.y)
            if (thisbar.x === startX && thisbar.y === startY) {
                Stage1.shape.visible = true;
            } else if (thisbar.x === 863.7468856469824 && thisbar.y === 174.69199999999998) { // finish drawing 1/3 of line
                Stage1.shape.visible = false;
            } else if (thisbar.x == 935.8866288088643 && thisbar.y == 348.1551939058172) { // finished plotting 1/3 of line
                thisStage.removeChild(thisStage.pencil);
            }

            // thisStage.addChild(round);
            thisStage.tempElements.push({
                "object": round,
                "expired": false
            });
        }

        return thisbar;
    }

    var Stage1;
    (lib.Stage1 = function() {
        this.initialize();
        var thisStage = this;
        Stage1 = this;
        thisStage.buttonShadow = new cjs.Shadow("#000000", 0, 0, 2);
        // var measuredFramerate=createjs.Ticker.getMeasureFPS();

        thisStage.rectangle1 = new createjs.Shape();
        thisStage.rectangle1.graphics.f('').s('#00B4EA').ss(1.5).drawRoundRect(0, 0, 85 * 5, 68 * 5.2, 15)
        thisStage.rectangle1.setTransform(240, 0);

        thisStage.rectangle2 = new createjs.Shape();
        thisStage.rectangle2.graphics.f('').s('#00B4EA').ss(1.5).drawRoundRect(0, 0, 85 * 5, 68 * 5.2, 15)
        thisStage.rectangle2.setTransform(730, 0);

        thisStage.limb = new lib.limb();
        thisStage.limb.setTransform(260, 200);

        thisStage.bird1 = new lib.bird1();
        thisStage.bird1.setTransform(275, 124);
        thisStage.bird1.alpha = 0;

        thisStage.bird2 = new lib.bird2();
        thisStage.bird2.setTransform(340, 129);
        thisStage.bird2.alpha = 0;

        thisStage.bird3 = new lib.bird3();
        thisStage.bird3.setTransform(380, 143);
        thisStage.bird3.alpha = 0;

        thisStage.bird4 = new lib.bird4();
        thisStage.bird4.setTransform(510, 60);
        thisStage.bird4.alpha = 0;

        thisStage.shape = new createjs.Shape();
        thisStage.shape.graphics.beginFill("#ff00ff").drawCircle(startX, startY, 15);
        thisStage.circleShadow = new cjs.Shadow("#ff0000", 0, 0, 5);
        thisStage.shape.shadow = thisStage.circleShadow;
        thisStage.circleShadow.blur = 0;
        createjs.Tween.get(thisStage.circleShadow).to({
            blur: 50
        }, 500).wait(100).to({
            blur: 0
        }, 500).to({
            blur: 50
        }, 500).wait(10).to({
            blur: 5
        }, 500);
        var data = {
            images: [img.icons],
            frames: {
                width: 39,
                height: 40
            },
            animations: {
                trash: 0,
                male: 1,
                wait: 2,
                library: 3,
                female: 4,
                hanger: 5,
                stairs: 6,
                noparking: 7
            }
        }

        var spriteSheet = new createjs.SpriteSheet(data);

        thisStage.pause1 = new createjs.Sprite(spriteSheet);
        thisStage.pause1.gotoAndStop(1);
        thisStage.pause1.setTransform(0, 0, 2, 1.25);
        thisStage.pause1.x = 98 + 450 + 44 - 190;
        thisStage.pause1.y = 68 * 3.2 + 5 + 145;
        thisStage.pause1.shadow = thisStage.buttonShadow.clone();

        thisStage.play1 = thisStage.pause1.clone();
        thisStage.play1.gotoAndStop(3);
        thisStage.play1.x = 98 + 450 + 44 - 190;
        thisStage.play1.y = 68 * 3.2 + 5 + 145;
        thisStage.play1.visible = false;
        thisStage.play1.shadow = thisStage.buttonShadow.clone();

        thisStage.pause2 = thisStage.pause1.clone();
        thisStage.pause2.gotoAndStop(1);
        thisStage.pause2.x = 98 + 450 + 44 + 310;
        thisStage.pause2.y = 68 * 3.2 + 5 + 145;
        thisStage.pause2.shadow = thisStage.buttonShadow.clone();

        thisStage.play2 = thisStage.pause1.clone();
        thisStage.play2.gotoAndStop(3);
        thisStage.play2.x = 98 + 450 + 44 + 310;
        thisStage.play2.y = 68 * 3.2 + 5 + 145;
        thisStage.play2.visible = false;
        thisStage.play2.shadow = thisStage.buttonShadow.clone();

        var bar = {
            x: startX,
            y: startY,
            oldx: startX,
            oldy: startY
        };

        thisStage.tempElements = [];

        this.addChild(this.rectangle1, this.rectangle2, this.limb, this.bird1, this.bird2, this.bird3, this.bird4, thisStage.shape, thisStage.previousRect,
            thisStage.previousText, thisStage.pause1, thisStage.play1, thisStage.pause2, thisStage.play2);

        this.endCharacter = new lib.EndCharacter();

        thisStage.movie = new lib.drawPoints();
        thisStage.movie.setTransform(0, 0);
        this.addChild(thisStage.movie);

        createjs.Tween.get(bar).setPaused(false);
        thisStage.paused = false;
        thisStage.pause1.addEventListener("click", function(evt) {
            pause1();
        });
        thisStage.play1.addEventListener("click", function(evt) {
            thisStage.play1.visible = false;
            thisStage.pause1.visible = true;
            thisStage.paused = false;
            drawBirds(thisStage);
        });

        thisStage.pause2.addEventListener("click", function(evt) {
            pause2();
        });
        thisStage.play2.addEventListener("click", function(evt) {
            thisStage.currentSpeed = 40;
            createjs.Ticker.setFPS(thisStage.currentSpeed * lib.properties.fps / 100);
            gotoFirst(thisStage);
        });
        pause1();
        pause2();
    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);

    function pause1() {
        Stage1.pause1.visible = false;
        Stage1.play1.visible = true;
        Stage1.paused = true;
        stopDrawBirds(thisStage);
    }

    function pause2() {
        Stage1.removeChild(Stage1.endCharacter);
        Stage1.pause2.visible = false;
        Stage1.play2.visible = true;
        Stage1.paused = true;
        Stage1.movie.stop();
    }

    function gotoFirst(thisStage) {
        thisStage.removeChild(thisStage.endCharacter);
        thisStage.play2.visible = false;
        thisStage.pause2.visible = true;
        thisStage.paused = false;

        thisStage.movie.gotoAndStop("start");
        for (var i = 0; i < thisStage.movie.tempElements.length; i++) {
            var e = thisStage.movie.tempElements[i];
            if (e) {
                e.object.visible = false;
                thisStage.movie.removeChild(e.object)
            }
        }
        thisStage.movie.tempElements = [];
        thisStage.movie.gotoAndPlay("start");
        currentMotionStep = 1;
    }

    function drawBirds(thisStage) {

        thisStage.bird1.alpha = 0;
        thisStage.bird2.alpha = 0;
        thisStage.bird3.alpha = 0;
        thisStage.bird4.alpha = 0;

        cjs.Tween.get(thisStage.bird1).wait(1000).to({
            alpha: 1
        }, 500).call(function() {
            cjs.Tween.get(thisStage.bird2).wait(1500).to({
                alpha: 1
            }, 500).call(function() {
                cjs.Tween.get(thisStage.bird3).wait(1500).to({
                    alpha: 1
                }, 500).call(function() {
                    cjs.Tween.get(thisStage.bird4).wait(1500).to({
                        alpha: 1
                    }, 500).call(function() {
                        Stage1.pause1.visible = false;
                        Stage1.play1.visible = true;
                    });
                });
            });
        });
    }

    function stopDrawBirds(thisStage) {
        cjs.Tween.removeAllTweens();
    }

    (lib.exerciseTitle = function() {
        this.initialize();

        this.text = new cjs.Text("Siffran 4", "bold 24px 'Myriad Pro'", "#0B95D4");
        this.text.setTransform(96.5, 22);

        this.text_1 = new cjs.Text("14", "bold 28px 'Myriad Pro'", "#FFFFFF");
        this.text_1.setTransform(50, 22);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0B95D4").s().p("AmyDqIAAnTINlAAIAAGbQAAAjgcAOIgcAHg");
        this.shape.setTransform(43.6, 9.5);

        this.addChild(this.shape, this.text_1, this.text);
    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);

    // stage content:
    (lib.exercise = function() {
        this.initialize();
        this.other = new lib.Basement();
        this.other.setTransform(0, 40, 1, 1);

        this.stage1 = new lib.Stage1();
        this.stage1.visible = true;
        this.stage1.setTransform(100, 100, 1, 1, 0, 0, 0)

        this.addChild(this.other, this.stage1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});


var lib, images, createjs;
