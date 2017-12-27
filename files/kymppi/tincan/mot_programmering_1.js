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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/p50_1.png",
            id: "p50_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/p50_2.png",
            id: "p50_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/p50_3.png",
            id: "p50_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/p50_4.png",
            id: "p50_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/hundrakamrater_3.png",
            id: "dustbin"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/tallinje_1.png",
            id: "dustbinPaper"
        }]
    };



    (lib.dustbinPaper = function() {
        this.initialize(img.dustbinPaper);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.dustbin = function() {
        this.initialize(img.dustbin);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.p50_1 = function() {
        this.initialize(img.p50_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.p50_2 = function() {
        this.initialize(img.p50_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.p50_3 = function() {
        this.initialize(img.p50_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.p50_4 = function() {
        this.initialize(img.p50_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);



    //Static Content
    (lib.Basement = function() {
        this.initialize();
    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);

    // code for drag & drop starts here


    var get_color = "";
    var currentImg = "img1_2";
    var lastimage1 = 1;
    var lastimage2 = 1;
    var lastimage3 = 1;
    var finalRandomNumber = [];
    var viewed_lastImg = 1;
    var dustbinX = -110;
    var dustbinY = 440;

    var isEdge = navigator.userAgent.indexOf(' Edge/') >= 0 || navigator.userAgent.indexOf(' edge/') >= 0;
    var isIE = /*@@cc_on!@@*/ false || !!document.documentMode;
    var IEVersion = document.documentMode;
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isiPad = (navigator.userAgent.match(/iPad/i) != null);
    if (isFirefox == true) {
        if (screen.width == 1920 && screen.height == 1080) {
            dustbinX = -120;
            dustbinY = 420;
        }
        if (screen.width == 1680 && screen.height == 1050) {
            dustbinX = -140;
            dustbinY = 490;
        } else if (screen.width == 1600 && screen.height == 900) {
            dustbinX = -160;
            dustbinY = 425;

        } else if (screen.width == 1440 && screen.height == 900) {
            dustbinX = -135;
            dustbinY = 430;

        } else if (screen.width == 1366 && screen.height == 768) {
            dustbinX = -225;
            dustbinY = 430;

        } else if (screen.width == 1280 && screen.height == 1024) {
            dustbinX = -50;
            dustbinY = 600;

        } else if (screen.width == 1280 && screen.height == 960) {
            dustbinX = -75;
            dustbinY = 570;

        } else if (screen.width == 1280 && screen.height == 800) {
            dustbinX = -145;
            dustbinY = 450;

        } else if (screen.width == 1280 && screen.height == 720) {
            dustbinX = -265;
            dustbinY = 435;

        } else if (screen.width == 1024 && screen.height == 768) {
            dustbinX = -60;
            dustbinY = 475;

        } else if (screen.width == 1600 && screen.height == 1200) {
            dustbinX = -130;
            dustbinY = 640;

        } else if (screen.width == 1600 && screen.height == 1024) {
            dustbinX = -130;
            dustbinY = 440;

        } else if (screen.width == 1280 && screen.height == 1050) {
            dustbinX = -100;
            dustbinY = 610;

        } else if (screen.width == 1920 && screen.height == 1200) {
            dustbinX = -130;
            dustbinY = 505;

        } else if (screen.width == 2560 && screen.height == 1440) {
            dustbinX = -160;
            dustbinY = 465;

        }
    } else if (isEdge == true) {
        if (screen.width == 1920 && screen.height == 1080) {
            dustbinX = -160;
            dustbinY = 430;

        } else if (screen.width == 1680 && screen.height == 1050) {
            dustbinX = -140;
            dustbinY = 475;

        } else if (screen.width == 1600 && screen.height == 900) {
            dustbinX = -230;
            dustbinY = 435;


        } else if (screen.width == 1440 && screen.height == 900) {
            dustbinX = -90;
            dustbinY = 430;


        } else if (screen.width == 1366 && screen.height == 768) {
            dustbinX = -275;
            dustbinY = 430;

        } else if (screen.width == 1280 && screen.height == 1024) {
            dustbinX = -80;
            dustbinY = 600;

        } else if (screen.width == 1280 && screen.height == 960) {
            dustbinX = -80;
            dustbinY = 540;

        } else if (screen.width == 1280 && screen.height == 800) {
            dustbinX = -160;
            dustbinY = 430;

        } else if (screen.width == 1280 && screen.height == 720) {
            dustbinX = -245;
            dustbinY = 445;

        } else if (screen.width == 1024 && screen.height == 768) {
            dustbinX = -60;
            dustbinY = 475;

        } else if (screen.width == 1600 && screen.height == 1200) {
            dustbinX = -130;
            dustbinY = 630;

        } else if (screen.width == 1600 && screen.height == 1024) {
            dustbinX = -130;
            dustbinY = 450;

        } else if (screen.width == 1280 && screen.height == 1050) {
            dustbinX = -120;
            dustbinY = 580;

        } else if (screen.width == 1920 && screen.height == 1200) {
            dustbinX = -110;
            dustbinY = 480;

        } else if (screen.width == 2560 && screen.height == 1440) {
            dustbinX = -160;
            dustbinY = 455;

        }
    } else if (isIE == true) {
        if (IEVersion == 11 || IEVersion == 10) {
            if (screen.width == 1920 && screen.height == 1080) {
                dustbinX = -180;
            dustbinY = 410;

            } else if (screen.width == 1680 && screen.height == 1050) {
                dustbinX = -100;
                dustbinY = 440;

            } else if (screen.width == 1600 && screen.height == 900) {
                dustbinX = -220;
                dustbinY = 460;

            } else if (screen.width == 1440 && screen.height == 900) {
                dustbinX = -100;
                dustbinY = 430;


            } else if (screen.width == 1366 && screen.height == 768) {
                dustbinX = -275;
                dustbinY = 430;

            } else if (screen.width == 1280 && screen.height == 1024) {
                dustbinX = -80;
                dustbinY = 615;

            } else if (screen.width == 1280 && screen.height == 960) {
                dustbinX = -80;
                dustbinY = 560;

            } else if (screen.width == 1280 && screen.height == 800) {
                dustbinX = -100;
                dustbinY = 390;

            } else if (screen.width == 1280 && screen.height == 720) {
                dustbinX = -260;
                dustbinY = 435;

            } else if (screen.width == 1024 && screen.height == 768) {
                dustbinX = -60;
                dustbinY = 465;

            } else if (screen.width == 1600 && screen.height == 1024) {
                dustbinX = -130;
                dustbinY = 470;

            } else if (screen.width == 1600 && screen.height == 1200) {
                dustbinX = -130;
                dustbinY = 625;

            } else if (screen.width == 1280 && screen.height == 1050) {
                dustbinX = -120;
                dustbinY = 610;

            } else if (screen.width == 1920 && screen.height == 1200) {
                dustbinX = -130;
                dustbinY = 505;

            } else if (screen.width == 2560 && screen.height == 1440) {
                dustbinX = -160;
                dustbinY = 465;

            }
        }
    } else if (isiPad) {
        if ((screen.width == 768 && screen.height == 1024) && (Math.abs(window.orientation) === 90)) { //landscape
            dustbinX = -120;
            dustbinY = 610;

        } else if (screen.width == 768 && screen.height == 1024) { //portrait
            dustbinX = -85;
            dustbinY = 670;

        }
    } else if (screen.width == 1920 && screen.height == 1080) {
        dustbinX = -110;
        dustbinY = 430;

    } else if (screen.width == 1680 && screen.height == 1050) {
        dustbinX = -140;
        dustbinY = 490;

    } else if (screen.width == 1600 && screen.height == 900) {
        dustbinX = -185;
        dustbinY = 425;

    } else if (screen.width == 1440 && screen.height == 900) {
        dustbinX = -120;
        dustbinY = 430;

    } else if (screen.width == 1366 && screen.height == 768) {
        dustbinX = -235;
        dustbinY = 430;

    } else if (screen.width == 1280 && screen.height == 1024) {
        dustbinX = -80;
        dustbinY = 555;

    } else if (screen.width == 1280 && screen.height == 960) {
        dustbinX = -80;
        dustbinY = 545;

    } else if (screen.width == 1280 && screen.height == 800) {
        dustbinX = -120;
        dustbinY = 450;

    } else if (screen.width == 1280 && screen.height == 720) {
        dustbinX = -220;
        dustbinY = 435;

    } else if (screen.width == 1024 && screen.height == 768) {
        dustbinX = -60;
        dustbinY = 475;

    } else if (screen.width == 1600 && screen.height == 1024) {
        dustbinX = -130;
        dustbinY = 470;

    } else if (screen.width == 1600 && screen.height == 1200) {
        dustbinX = -130;
        dustbinY = 610;

    } else if (screen.width == 1280 && screen.height == 1050) {
        dustbinX = -120;
        dustbinY = 610;

    } else if (screen.width == 1920 && screen.height == 1200) {
        dustbinX = -130;
        dustbinY = 505;


    } else if (screen.width == 2560 && screen.height == 1440) {
        dustbinX = -160;
        dustbinY = 465;

    }




    var img1_1_fillColor = ["#14B5C9", "#24B24B", "#FFD303", "#DA3A71", "#DA3A71", "#FFD303", "#FFD303"];
    var img2_1_fillColor = ["#DA3A71", "#DA3A71", "#DA3A71", "#DA3A71", "#FFD303", "#FFD303", "#DA3A71", "#14B5C9", "#24B24B", "#DA3A71", "#14B5C9", "#24B24B", "#DA3A71", "#14B5C9", "#24B24B", "#DA3A71", "#14B5C9", "#24B24B"];
    var img3_1_fillColor = ["#24B24B", "#24B24B", "#24B24B", "#14B5C9", "#FFD303", "#FFD303", "#FFD303", "#DA3A71", "#14B5C9", "#FFD303", "#FFD303", "#FFD303", "#DA3A71", "#FFD303", "#FFD303", "#DA3A71", "#DA3A71", "#FFD303", "#DA3A71", "#DA3A71"];

    //var img1_1_fillColor = ["#14B5C9", "#24B24B", "#FFD303", "#DA3A71", "#DA3A71", "#FFD303", "#FFD303"];
    // var img1_2_fillColor = ["#24B24B", "#FFD303", "#DA3A71", "#FFD303", "#FFD303", "#14B5C9", "#14B5C9"];
    // var img1_3_fillColor = ["#FFD303", "#DA3A71", "#14B5C9", "#14B5C9", "#14B5C9", "#24B24B", "#24B24B"];
    // var img1_4_fillColor = ["#DA3A71", "#14B5C9", "#FFD303", "#24B24B", "#24B24B", "#DA3A71", "#DA3A71"];

    // var img2_1_fillColor = ["#DA3A71", "#DA3A71", "#DA3A71", "#DA3A71", "#FFD303", "#FFD303", "#DA3A71", "#14B5C9", "#24B24B", "#DA3A71", "#14B5C9", "#24B24B", "#DA3A71", "#14B5C9", "#24B24B", "#DA3A71", "#14B5C9", "#24B24B"];
    // var img2_2_fillColor = ["#FFD303", "#FFD303", "#FFD303", "#FFD303", "#DA3A71", "#DA3A71", "#FFD303", "#14B5C9", "#24B24B", "#DA3A71", "#14B5C9", "#24B24B", "#FFD303", "#14B5C9", "#24B24B", "#DA3A71", "#14B5C9", "#24B24B"];
    // var img2_3_fillColor = ["#24B24B", "#24B24B", "#24B24B", "#24B24B", "#14B5C9", "#14B5C9", "#FFD303", "#DA3A71", "#24B24B", "#FFD303", "#DA3A71", "#24B24B", "#FFD303", "#DA3A71", "#24B24B", "#FFD303", "#DA3A71", "#24B24B"];
    // var img2_4_fillColor = ["#14B5C9", "#14B5C9", "#14B5C9", "#14B5C9", "#14B5C9", "#24B24B", "#DA3A71", "#FFD303", "#24B24B", "#DA3A71", "#FFD303", "#24B24B", "#DA3A71", "#FFD303", "#24B24B", "#DA3A71", "#FFD303", "#24B24B"];


    // var img3_1_fillColor = ["#24B24B", "#24B24B", "#24B24B", "#14B5C9", "#FFD303", "#FFD303", "#FFD303", "#DA3A71", "#14B5C9", "#FFD303", "#FFD303", "#FFD303", "#DA3A71", "#FFD303", "#FFD303", "#DA3A71", "#DA3A71"];
    // var img3_2_fillColor = ["#DA3A71", "#DA3A71", "#DA3A71", "#24B24B", "#14B5C9", "#14B5C9", "#14B5C9", "#DA3A71", "#24B24B", "#14B5C9", "#14B5C9", "#14B5C9", "#FFD303", "#14B5C9", "#14B5C9", "#FFD303", "#FFD303", "#DA3A71", "#DA3A71", "#DA3A71"];
    // var img3_3_fillColor = ["#FFD303", "#FFD303", "#FFD303", "#DA3A71", "#24B24B", "#24B24B", "#24B24B", "#14B5C9", "#DA3A71", "#24B24B", "#24B24B", "#24B24B", "#14B5C9", "#DA3A71", "#DA3A71", "#FFD303", "#FFD303", "#FFD303", "#FFD303", "#FFD303"];
    // var img3_4_fillColor = ["#14B5C9", "#14B5C9", "#14B5C9", "#DA3A71", "#24B24B", "#24B24B", "#24B24B", "#24B24B", "#DA3A71", "#24B24B", "#24B24B", "#24B24B", "#FFD303", "#14B5C9", "#14B5C9", "#24B24B", "#24B24B", "#14B5C9", "#14B5C9", "#14B5C9"];



    // text key functionality for dropbox  ------------ END

    (lib.DottedcircleCurve = function() {
        this.initialize();

        var dotcircleCurve = new cjs.Container();

        var circleCurve = new cjs.Shape();
        circleCurve.graphics.s('#000000').ss(1.5).beginRadialGradientFill(["#F19081", "#F19081"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(119.25, 177.5)
            .bezierCurveTo(123, 210, 284, 214, 286, 176);

        dotcircleCurve.addChild(circleCurve);

        return circleCurve;

    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);


    (lib.Arrow = function() {
        this.Arrow1_1 = new createjs.Shape();
        this.Arrow1_1.graphics.s('#64AECF').ss(2.5).moveTo(0, 0).lineTo(30, 0);
        this.Arrow1_1.setTransform(614, -133);
        this.Arrow1_2 = new createjs.Shape();
        this.Arrow1_2.graphics.s('#64AECF').ss(2.5).moveTo(0, 0).lineTo(10, 10).lineTo(0, 20);
        this.Arrow1_2.setTransform(634, -143);
        this.addChild(this.Arrow1_1, this.Arrow1_2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);



    var dropBoxes = [];
    var allDraggables = [];
    (lib.Stage1 = function() {
        this.initialize();
        thisStage = this;

        currentStage = this;
        var myStage = this;

        this.img_dustbin = new lib.dustbin();
        this.img_dustbin.setTransform(dustbinX, dustbinY, 0.7, 0.7);
        // this.img_dustbin.type = 'toTransform';

        this.img_dustbinPaper = new lib.dustbinPaper();
        this.img_dustbinPaper.setTransform(dustbinX, dustbinY, 0.7, 0.7);
        // this.img_dustbinPaper.type = 'toTransform';
        this.img_dustbinPaper.visible = false;
        img1color_create();

        this.img_dustbinPaper.on('click', function() {
            resetAll();
        });

        this.Arrow1 = new lib.Arrow();
        this.Arrow1.setTransform(0, 0);

        this.Arrow2 = new lib.Arrow();
        this.Arrow2.setTransform(550, -722);
        this.Arrow2.rotation = 90;

        this.Arrow3 = new lib.Arrow();
        this.Arrow3.setTransform(1261, -180);
        this.Arrow3.rotation = 180;

        this.Arrow4 = new lib.Arrow();
        this.Arrow4.setTransform(714, 536);
        this.Arrow4.rotation = -90;

        this.addChild(this.img_dustbin, this.img_dustbinPaper, this.Arrow1, this.Arrow2, this.Arrow3, this.Arrow4);

        this.p50_1 = new lib.p50_1();
        this.p50_1.name = "img1";
        this.p50_1.value = "#DA3A71";
        this.p50_1.setTransform(560, -155, 0.8, 0.8);
        this.p50_2 = new lib.p50_2();
        this.p50_2.name = "img2";
        this.p50_2.value = "#14B5C9";
        this.p50_2.setTransform(655, -155, 0.8, 0.8);
        this.p50_3 = new lib.p50_3();
        this.p50_3.name = "img3";
        this.p50_3.value = "#24B24B";
        this.p50_3.setTransform(560, -70, 0.8, 0.8);
        this.p50_4 = new lib.p50_4();
        this.p50_4.name = "img4";
        this.p50_4.value = "#FFD303";
        this.p50_4.setTransform(655, -70, 0.8, 0.8);


        this.p50_1.on('click', ChangeOptions);
        this.p50_2.on('click', ChangeOptions);
        this.p50_3.on('click', ChangeOptions);
        this.p50_4.on('click', ChangeOptions);
        this.addChild(this.p50_1, this.p50_2, this.p50_3, this.p50_4);

        // Img 1 

        this.img1_1_RoundRectOut = new createjs.Shape()
        this.img1_1_RoundRectOut.graphics.f(img1_1_fillColor[0]).s('#0F0F0F').ss(2).drawRoundRect(0, 0, 444, 404, 260);
        this.img1_1_RoundRectOut.name = "img1_1";
        this.img1_1_RoundRectOut.value = 0;
        this.img1_1_RoundRectOut.visible = true;
        this.img1_1_RoundRectOut.setTransform(94, 86 - 5);

        this.img1_1_RoundRectIn1 = new createjs.Shape()
        this.img1_1_RoundRectIn1.graphics.f(img1_1_fillColor[1]).s('#0F0F0F').ss(2).drawRoundRect(0, 0, 230, 210, 260);
        this.img1_1_RoundRectIn1.name = "img1_1";
        this.img1_1_RoundRectIn1.value = 1;
        this.img1_1_RoundRectIn1.visible = true;
        this.img1_1_RoundRectIn1.setTransform(200.5, 210 - 5);

        this.img1_1_RoundRectIn2 = new createjs.Shape()
        this.img1_1_RoundRectIn2.graphics.f(img1_1_fillColor[2]).s('#0F0F0F').ss(2.5).drawRoundRect(0, 0, 75, 57, 260);
        this.img1_1_RoundRectIn2.name = "img1_1";
        this.img1_1_RoundRectIn2.value = 2;
        this.img1_1_RoundRectIn2.visible = true;
        this.img1_1_RoundRectIn2.setTransform(278, 244 - 5);

        this.img1_1_EarOutLeft = new createjs.Shape();
        this.img1_1_EarOutLeft.graphics.f(img1_1_fillColor[3]).s('#0F0F0F').ss(1).moveTo(194, 143)
            .bezierCurveTo(168, 20, 22, 148, 136, 196)
            .bezierCurveTo(151, 182, 133, 182, 194, 143);
        this.img1_1_EarOutLeft.name = "img1_1";
        this.img1_1_EarOutLeft.value = 3;
        this.img1_1_EarOutLeft.visible = true;
        this.img1_1_EarOutLeft.setTransform(-91, -113 - 5, 1.55, 1.53);

        this.img1_1_EarOutRight = new createjs.Shape();
        this.img1_1_EarOutRight.graphics.f(img1_1_fillColor[4]).s('#0F0F0F').ss(1).moveTo(194, 143)
            .bezierCurveTo(168, 20, 22, 148, 136, 196)
            .bezierCurveTo(151, 182, 133, 182, 194, 143);
        this.img1_1_EarOutRight.name = "img1_1";
        this.img1_1_EarOutRight.value = 4;
        this.img1_1_EarOutRight.visible = true;
        this.img1_1_EarOutRight.setTransform(689, -144 - 5, 1.55, 1.53);
        this.img1_1_EarOutRight.rotation = 83;

        this.img1_1_EarInLeft = new createjs.Shape();
        this.img1_1_EarInLeft.graphics.f(img1_1_fillColor[5]).s('#0F0F0F').ss(1).moveTo(172, 155)
            .bezierCurveTo(144, 88, 104, 154, 155, 169)
            .bezierCurveTo(157, 170, 174, 151, 174, 155);
        this.img1_1_EarInLeft.name = "img1_1";
        this.img1_1_EarInLeft.value = 5;
        this.img1_1_EarInLeft.visible = true;
        this.img1_1_EarInLeft.setTransform(-91, -113 - 5, 1.55, 1.55);

        this.img1_1_EarInRight = new createjs.Shape();
        this.img1_1_EarInRight.graphics.f(img1_1_fillColor[6]).s('#0F0F0F').ss(1).moveTo(172, 155)
            .bezierCurveTo(144, 88, 104, 154, 155, 169)
            .bezierCurveTo(157, 170, 174, 151, 174, 155);
        this.img1_1_EarInRight.name = "img1_1";
        this.img1_1_EarInRight.value = 6;
        this.img1_1_EarInRight.visible = true;
        this.img1_1_EarInRight.setTransform(689, -144 - 5, 1.55, 1.55);
        this.img1_1_EarInRight.rotation = 83;

        this.img1_1_RoundRectDot1 = new createjs.Shape()
        this.img1_1_RoundRectDot1.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 8, 13.5, 450);
        this.img1_1_RoundRectDot1.name = "img1_1";
        this.img1_1_RoundRectDot1.value = "empty";
        this.img1_1_RoundRectDot1.visible = true;
        this.img1_1_RoundRectDot1.setTransform(226, 194 - 5);
        this.img1_1_RoundRectDot1.rotation = 8;

        this.img1_1_RoundRectDot2 = new createjs.Shape()
        this.img1_1_RoundRectDot2.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 8, 13.5, 450);
        this.img1_1_RoundRectDot2.name = "img1_1";
        this.img1_1_RoundRectDot2.value = "empty";
        this.img1_1_RoundRectDot2.visible = true;
        this.img1_1_RoundRectDot2.setTransform(398, 194.5 - 5);
        this.img1_1_RoundRectDot2.rotation = -8;

        this.img1_1_LS1 = new createjs.Shape();
        this.img1_1_LS1.graphics.s('#0F0F0F').ss(3).moveTo(405, 384).bezierCurveTo(355, 454, 270, 419, 256, 384);
        this.img1_1_LS1.name = "img1_1";
        this.img1_1_LS1.value = "empty";
        this.img1_1_LS1.visible = true;
        this.img1_1_LS1.setTransform(59, -25 - 5, 0.775, 0.89);

        this.img1_1_LS2 = new createjs.Shape()
        this.img1_1_LS2.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 4.5, 10, 450);
        this.img1_1_LS2.name = "img1_1";
        this.img1_1_LS2.value = "empty";
        this.img1_1_LS2.visible = true;
        this.img1_1_LS2.setTransform(371, 315.5 - 5);
        this.img1_1_LS2.rotation = 34;

        this.img1_1_LS3 = new createjs.Shape()
        this.img1_1_LS3.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 4.5, 10, 450);
        this.img1_1_LS3.name = "img1_1";
        this.img1_1_LS3.value = "empty";
        this.img1_1_LS3.visible = true;
        this.img1_1_LS3.setTransform(253.5, 316.5 - 5);
        this.img1_1_LS3.rotation = -33;

        this.addChild(this.img1_1_RoundRectOut, this.img1_1_RoundRectIn1, this.img1_1_RoundRectIn2, this.img1_1_EarOutLeft, this.img1_1_EarOutRight, this.img1_1_EarInLeft, this.img1_1_EarInRight, this.img1_1_RoundRectDot1, this.img1_1_RoundRectDot2, this.img1_1_LS1, this.img1_1_LS2, this.img1_1_LS3);


        this.img1_2_RoundRectOut = new createjs.Shape()
        this.img1_2_RoundRectOut.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 444, 404, 260);
        this.img1_2_RoundRectOut.name = "img1_2";
        this.img1_2_RoundRectOut.value = 0;
        this.img1_2_RoundRectOut.visible = true;
        this.img1_2_RoundRectOut.setTransform(766, 86 - 5);
        this.img1_2_RoundRectOut.on('click', FillColor);

        this.img1_2_RoundRectIn1 = new createjs.Shape()
        this.img1_2_RoundRectIn1.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 230, 210, 260);
        this.img1_2_RoundRectIn1.name = "img1_2";
        this.img1_2_RoundRectIn1.value = 0;
        this.img1_2_RoundRectIn1.visible = true;
        this.img1_2_RoundRectIn1.setTransform(872.5, 210 - 5);
        this.img1_2_RoundRectIn1.on('click', FillColor);

        this.img1_2_RoundRectIn2 = new createjs.Shape()
        this.img1_2_RoundRectIn2.graphics.f('#ffffff').s('#0F0F0F').ss(2.5).drawRoundRect(0, 0, 75, 57, 260);
        this.img1_2_RoundRectIn2.name = "img1_2";
        this.img1_2_RoundRectIn2.value = 0;
        this.img1_2_RoundRectIn2.visible = true;
        this.img1_2_RoundRectIn2.setTransform(950, 244 - 5);
        this.img1_2_RoundRectIn2.on('click', FillColor);


        this.img1_2_EarOutLeft = new createjs.Shape();
        this.img1_2_EarOutLeft.graphics.f('#ffffff').s('#0F0F0F').ss(1).moveTo(194, 143)
            .bezierCurveTo(168, 20, 22, 148, 136, 196)
            .bezierCurveTo(151, 182, 133, 182, 194, 143);
        this.img1_2_EarOutLeft.name = "img1_2";
        this.img1_2_EarOutLeft.value = 0;
        this.img1_2_EarOutLeft.visible = true;
        this.img1_2_EarOutLeft.setTransform(581, -113 - 5, 1.55, 1.53);
        this.img1_2_EarOutLeft.on('click', FillColor);

        this.img1_2_EarOutRight = new createjs.Shape();
        this.img1_2_EarOutRight.graphics.f('#ffffff').s('#0F0F0F').ss(1).moveTo(194, 143)
            .bezierCurveTo(168, 20, 22, 148, 136, 196)
            .bezierCurveTo(151, 182, 133, 182, 194, 143);
        this.img1_2_EarOutRight.name = "img1_2";
        this.img1_2_EarOutRight.value = 0;
        this.img1_2_EarOutRight.visible = true;
        this.img1_2_EarOutRight.setTransform(1361, -144 - 5, 1.55, 1.53);
        this.img1_2_EarOutRight.rotation = 83;
        this.img1_2_EarOutRight.on('click', FillColor);

        this.img1_2_EarInLeft = new createjs.Shape();
        this.img1_2_EarInLeft.graphics.f('#ffffff').s('#0F0F0F').ss(1).moveTo(172, 155)
            .bezierCurveTo(144, 88, 104, 154, 155, 169)
            .bezierCurveTo(157, 170, 174, 151, 174, 155);
        this.img1_2_EarInLeft.name = "img1_2";
        this.img1_2_EarInLeft.value = 0;
        this.img1_2_EarInLeft.visible = true;
        this.img1_2_EarInLeft.setTransform(581, -113 - 5, 1.55, 1.55);
        this.img1_2_EarInLeft.on('click', FillColor);

        this.img1_2_EarInRight = new createjs.Shape();
        this.img1_2_EarInRight.graphics.f('#ffffff').s('#0F0F0F').ss(1).moveTo(172, 155)
            .bezierCurveTo(144, 88, 104, 154, 155, 169)
            .bezierCurveTo(157, 170, 174, 151, 174, 155);
        this.img1_2_EarInRight.name = "img1_2";
        this.img1_2_EarInRight.value = 0;
        this.img1_2_EarInRight.visible = true;
        this.img1_2_EarInRight.setTransform(1361, -144 - 5, 1.55, 1.55);
        this.img1_2_EarInRight.rotation = 83;
        this.img1_2_EarInRight.on('click', FillColor);

        this.img1_2_RoundRectDot1 = new createjs.Shape()
        this.img1_2_RoundRectDot1.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 8, 13.5, 450);
        this.img1_2_RoundRectDot1.name = "img1_2";
        this.img1_2_RoundRectDot1.value = "empty";
        this.img1_2_RoundRectDot1.visible = true;
        this.img1_2_RoundRectDot1.setTransform(898, 194 - 5);
        this.img1_2_RoundRectDot1.rotation = 8;
        this.img1_2_RoundRectDot1.on('click', FillColorEmpty);

        this.img1_2_RoundRectDot2 = new createjs.Shape()
        this.img1_2_RoundRectDot2.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 8, 13.5, 450);
        this.img1_2_RoundRectDot2.name = "img1_2";
        this.img1_2_RoundRectDot2.value = "empty";
        this.img1_2_RoundRectDot2.visible = true;
        this.img1_2_RoundRectDot2.setTransform(1070, 194.5 - 5);
        this.img1_2_RoundRectDot2.rotation = -8;
        this.img1_2_RoundRectDot2.on('click', FillColorEmpty);

        this.img1_2_LS1 = new createjs.Shape();
        this.img1_2_LS1.graphics.s('#0F0F0F').ss(3).moveTo(405, 384).bezierCurveTo(355, 454, 270, 419, 256, 384);
        this.img1_2_LS1.name = "img1_2";
        this.img1_2_LS1.value = "empty";
        this.img1_2_LS1.visible = true;
        this.img1_2_LS1.setTransform(731, -25 - 5, 0.775, 0.89);
        this.img1_2_LS1.on('click', FillColorEmpty);

        this.img1_2_LS2 = new createjs.Shape()
        this.img1_2_LS2.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 4.5, 10, 450);
        this.img1_2_LS2.name = "img1_2";
        this.img1_2_LS2.value = "empty";
        this.img1_2_LS2.visible = true;
        this.img1_2_LS2.setTransform(1043, 315.5 - 5);
        this.img1_2_LS2.rotation = 34;
        this.img1_2_LS2.on('click', FillColorEmpty);

        this.img1_2_LS3 = new createjs.Shape()
        this.img1_2_LS3.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 4.5, 10, 450);
        this.img1_2_LS3.name = "img1_2";
        this.img1_2_LS3.value = "empty";
        this.img1_2_LS3.visible = true;
        this.img1_2_LS3.setTransform(925.5, 316.5 - 5);
        this.img1_2_LS3.rotation = -33;
        this.img1_2_LS3.on('click', FillColorEmpty);

        this.addChild(this.img1_2_RoundRectOut, this.img1_2_RoundRectIn1, this.img1_2_RoundRectIn2, this.img1_2_EarOutLeft, this.img1_2_EarOutRight, this.img1_2_EarInLeft, this.img1_2_EarInRight, this.img1_2_RoundRectDot1, this.img1_2_RoundRectDot2, this.img1_2_LS1, this.img1_2_LS2, this.img1_2_LS3);


        /// img2  

        this.img2_1_topLeftline = new createjs.Shape()
        this.img2_1_topLeftline.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(250, 110)
            .bezierCurveTo(247, 96, 226, 43, 198, 30)
            .bezierCurveTo(184, 24, 250, 52, 257, 102);
        this.img2_1_topLeftline.name = "img2_1";
        this.img2_1_topLeftline.value = 0;
        this.img2_1_topLeftline.visible = false;
        this.img2_1_topLeftline.setTransform(50, 10 - 25, 1, 1.14);

        this.img2_1_topRightline = new createjs.Shape()
        this.img2_1_topRightline.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(270, 104)
            .bezierCurveTo(277, 76, 333, 22, 340, 28)
            .bezierCurveTo(343, 33, 315, 18, 279, 107);
        this.img2_1_topRightline.name = "img2_1";
        this.img2_1_topRightline.value = 1;
        this.img2_1_topRightline.visible = false;
        this.img2_1_topRightline.setTransform(65, 10 - 25, 1, 1.14);

        this.img2_1_topLeftcircle = new createjs.Shape()
        this.img2_1_topLeftcircle.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 18, 18, 450);
        this.img2_1_topLeftcircle.name = "img2_1";
        this.img2_1_topLeftcircle.value = 2;
        this.img2_1_topLeftcircle.visible = false;
        this.img2_1_topLeftcircle.setTransform(230, 28 - 25);
        this.img2_1_topLeftcircle.rotation = 8;

        this.img2_1_topRightcircle = new createjs.Shape()
        this.img2_1_topRightcircle.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 18, 18, 450);
        this.img2_1_topRightcircle.name = "img2_1";
        this.img2_1_topRightcircle.value = 3;
        this.img2_1_topRightcircle.visible = false;
        this.img2_1_topRightcircle.setTransform(396, 32 - 25);
        this.img2_1_topRightcircle.rotation = -8;


        this.img2_1_butterflyHead = new createjs.Shape()
        this.img2_1_butterflyHead.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 103, 103, 260);
        this.img2_1_butterflyHead.name = "img2_1";
        this.img2_1_butterflyHead.value = 4;
        this.img2_1_butterflyHead.visible = false;
        this.img2_1_butterflyHead.setTransform(271, 125 - 25);

        this.img2_1_butterflyBody = new createjs.Shape();
        this.img2_1_butterflyBody.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(255, 193)
            .bezierCurveTo(195, 500, 336, 502, 277, 194)
            .bezierCurveTo(275, 190, 271, 195, 254, 193);
        this.img2_1_butterflyBody.name = "img2_1";
        this.img2_1_butterflyBody.value = 5;
        this.img2_1_butterflyBody.visible = false;
        this.img2_1_butterflyBody.setTransform(-7, 3 - 25, 1.24, 1.16);

        this.img2_1_wingleft1 = new createjs.Shape();
        this.img2_1_wingleft1.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(238, 291)
            .bezierCurveTo(83, 329, 78, 188, 79, 197)
            .bezierCurveTo(81, 213, 73, 145, 71, 151)
            .bezierCurveTo(78, 161, 44, 106, 79, 96)
            .bezierCurveTo(81, 95, 106, 115, 108, 115)
            .bezierCurveTo(107, 115, 180, 138, 186, 142)
            .bezierCurveTo(193, 146, 253, 216, 249, 218)
            .bezierCurveTo(246, 225, 238, 298, 237, 290);
        this.img2_1_wingleft1.name = "img2_1";
        this.img2_1_wingleft1.value = 6;
        this.img2_1_wingleft1.visible = false;
        this.img2_1_wingleft1.setTransform(27, 16 - 25, 1.11, 1.1);

        this.img2_1_wingleft2 = new createjs.Shape();
        this.img2_1_wingleft2.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(236, 290)
            .bezierCurveTo(219, 293, 138, 329, 114, 232)
            .bezierCurveTo(112, 224, 84, 128, 178, 144)
            .bezierCurveTo(198, 147, 252, 216, 248, 217)
            .bezierCurveTo(248, 219, 240, 298, 240, 284);
        this.img2_1_wingleft2.name = "img2_1";
        this.img2_1_wingleft2.value = 7;
        this.img2_1_wingleft2.visible = false;
        this.img2_1_wingleft2.setTransform(27, 16 - 25, 1.11, 1.1);

        this.img2_1_wingleft3 = new createjs.Shape()
        this.img2_1_wingleft3.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 80, 62, 260);
        this.img2_1_wingleft3.name = "img2_1";
        this.img2_1_wingleft3.value = 8;
        this.img2_1_wingleft3.visible = false;
        this.img2_1_wingleft3.setTransform(223, 197.5 - 25);
        this.img2_1_wingleft3.rotation = 60;

        this.img2_1_wingleft4 = new createjs.Shape();
        this.img2_1_wingleft4.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(235, 290)
            .bezierCurveTo(19, 364, 127, 469, 167, 449)
            .bezierCurveTo(215, 425, 218, 407, 236, 359)
            .bezierCurveTo(240, 335, 236, 289, 236, 290);
        this.img2_1_wingleft4.name = "img2_1";
        this.img2_1_wingleft4.value = 9;
        this.img2_1_wingleft4.visible = false;
        this.img2_1_wingleft4.setTransform(28, 16 - 25, 1.11, 1.1);

        this.img2_1_wingleft5 = new createjs.Shape();
        this.img2_1_wingleft5.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(236, 290)
            .bezierCurveTo(2, 360, 207, 487, 235, 359)
            .bezierCurveTo(243, 324, 233, 297, 240, 290);
        this.img2_1_wingleft5.name = "img2_1";
        this.img2_1_wingleft5.value = 10;
        this.img2_1_wingleft5.visible = false;
        this.img2_1_wingleft5.setTransform(27, 16 - 25, 1.11, 1.1);

        this.img2_1_wingleft6 = new createjs.Shape()
        this.img2_1_wingleft6.graphics.f('#ffffff').s('#0F0F0F').ss(2.5).drawRoundRect(0, 0, 45, 46, 100);
        this.img2_1_wingleft6.name = "img2_1";
        this.img2_1_wingleft6.value = 11;
        this.img2_1_wingleft6.visible = false;
        this.img2_1_wingleft6.setTransform(200, 396 - 25);

        this.img2_1_wingright1 = new createjs.Shape();
        this.img2_1_wingright1.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(287, 214)
            .bezierCurveTo(285, 206, 297, 285, 298, 289)
            .bezierCurveTo(299, 292, 364, 302, 373, 298)
            .bezierCurveTo(454, 276, 457, 169, 456.5, 172)
            .bezierCurveTo(455, 186, 456, 144, 471, 121)
            .bezierCurveTo(473, 118, 463, 97, 456, 97)
            .bezierCurveTo(446, 97, 419, 124, 414, 122)
            .bezierCurveTo(400, 123, 361, 141, 357, 143)
            .bezierCurveTo(344, 151, 325, 151, 287, 213);
        this.img2_1_wingright1.name = "img2_1";
        this.img2_1_wingright1.value = 12;
        this.img2_1_wingright1.visible = false;
        this.img2_1_wingright1.setTransform(23, 20 - 25, 1.11, 1.1);

        this.img2_1_wingright2 = new createjs.Shape();
        this.img2_1_wingright2.graphics.f('#ffffff').s('#0F0F0F').ss(1.5)
            .moveTo(285, 218)
            .bezierCurveTo(282, 203, 297, 297, 295, 290)
            .bezierCurveTo(291, 281, 322, 311, 371, 288)
            .bezierCurveTo(446, 258, 424, 164, 397, 146)
            .bezierCurveTo(373, 129, 309, 154, 285, 215);
        this.img2_1_wingright2.name = "img2_1";
        this.img2_1_wingright2.value = 13;
        this.img2_1_wingright2.visible = false;
        this.img2_1_wingright2.setTransform(26, 20 - 25, 1.11, 1.1);

        this.img2_1_wingright3 = new createjs.Shape()
        this.img2_1_wingright3.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 80, 62, 260);
        this.img2_1_wingright3.name = "img2_1";
        this.img2_1_wingright3.value = 14;
        this.img2_1_wingright3.visible = false;
        this.img2_1_wingright3.setTransform(380, 262 - 25);
        this.img2_1_wingright3.rotation = -53;

        this.img2_1_wingright4 = new createjs.Shape();
        this.img2_1_wingright4.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(297, 292)
            .bezierCurveTo(341, 296, 394, 335, 402, 347)
            .bezierCurveTo(434, 404, 413, 441, 408, 443)
            .bezierCurveTo(323, 480, 299, 359, 296, 361)
            .bezierCurveTo(294, 376, 298, 277, 296, 292);
        this.img2_1_wingright4.name = "img2_1";
        this.img2_1_wingright4.value = 15;
        this.img2_1_wingright4.visible = false;
        this.img2_1_wingright4.setTransform(25, 19 - 25, 1.11, 1.1);

        this.img2_1_wingright5 = new createjs.Shape();
        this.img2_1_wingright5.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(296, 290)
            .bezierCurveTo(291, 282, 393, 324, 399, 347)
            .bezierCurveTo(429, 440, 328, 417, 312, 396)
            .bezierCurveTo(303, 387, 297, 351, 297, 358)
            .bezierCurveTo(296, 373, 297, 275, 296, 290);
        this.img2_1_wingright5.name = "img2_1";
        this.img2_1_wingright5.value = 16;
        this.img2_1_wingright5.visible = false;
        this.img2_1_wingright5.setTransform(25, 19 - 25, 1.11, 1.1);

        this.img2_1_wingright6 = new createjs.Shape()
        this.img2_1_wingright6.graphics.f('#ffffff').s('#0F0F0F').ss(2.5).drawRoundRect(0, 0, 45, 46, 100);
        this.img2_1_wingright6.name = "img2_1";
        this.img2_1_wingright6.value = 17;
        this.img2_1_wingright6.visible = false;
        this.img2_1_wingright6.setTransform(398.5, 396 - 25);

        this.img2_1_RoundRectDot1 = new createjs.Shape()
        this.img2_1_RoundRectDot1.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 3, 6.5, 450);
        this.img2_1_RoundRectDot1.name = "img2_1";
        this.img2_1_RoundRectDot1.value = "empty";
        this.img2_1_RoundRectDot1.visible = false;
        this.img2_1_RoundRectDot1.setTransform(304.5, 165 - 25);
        this.img2_1_RoundRectDot1.rotation = 8;

        this.img2_1_RoundRectDot2 = new createjs.Shape()
        this.img2_1_RoundRectDot2.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 3, 6.5, 450);
        this.img2_1_RoundRectDot2.name = "img2_1";
        this.img2_1_RoundRectDot2.value = "empty";
        this.img2_1_RoundRectDot2.visible = false;
        this.img2_1_RoundRectDot2.setTransform(337, 165 - 25);
        this.img2_1_RoundRectDot2.rotation = -8;

        this.img2_1_LS1 = new createjs.Shape();
        this.img2_1_LS1.graphics.s('#0F0F0F').ss(7).moveTo(405, 384).bezierCurveTo(355, 454, 270, 419, 256, 384);
        this.img2_1_LS1.name = "img2_1";
        this.img2_1_LS1.value = "empty";
        this.img2_1_LS1.visible = false;
        this.img2_1_LS1.setTransform(223.5, 20 - 25, 0.3, 0.43);

        this.img2_1_line1 = new createjs.Shape();
        this.img2_1_line1.graphics.s('#0F0F0F').ss(2).moveTo(244, 243).bezierCurveTo(238, 242, 218, 228, 217, 229);
        this.img2_1_line1.name = "img2_1";
        this.img2_1_line1.value = "empty";
        this.img2_1_line1.visible = false;
        this.img2_1_line1.setTransform(55, 38 - 25);

        this.img2_1_line2 = new createjs.Shape();
        this.img2_1_line2.graphics.s('#0F0F0F').ss(2).moveTo(242, 253).bezierCurveTo(218, 246, 214, 248, 214, 248);
        this.img2_1_line2.name = "img2_1";
        this.img2_1_line2.value = "empty";
        this.img2_1_line2.visible = false;
        this.img2_1_line2.setTransform(55, 40 - 25);

        this.img2_1_line3 = new createjs.Shape();
        this.img2_1_line3.graphics.s('#0F0F0F').ss(2).moveTo(240, 267).bezierCurveTo(222, 264, 211, 270, 212, 271);
        this.img2_1_line3.name = "img2_1";
        this.img2_1_line3.value = "empty";
        this.img2_1_line3.visible = false;
        this.img2_1_line3.setTransform(55, 40 - 25);

        this.img2_1_line4 = new createjs.Shape();
        this.img2_1_line4.graphics.s('#0F0F0F').ss(2).moveTo(292, 243).bezierCurveTo(288, 234, 328, 222, 317, 228);
        this.img2_1_line4.name = "img2_1";
        this.img2_1_line4.value = "empty";
        this.img2_1_line4.visible = false;
        this.img2_1_line4.setTransform(55, 41 - 25);

        this.img2_1_line5 = new createjs.Shape();
        this.img2_1_line5.graphics.s('#0F0F0F').ss(2).moveTo(295, 252).bezierCurveTo(283, 248, 336, 249, 321, 249);
        this.img2_1_line5.name = "img2_1";
        this.img2_1_line5.value = "empty";
        this.img2_1_line5.visible = false;
        this.img2_1_line5.setTransform(55, 40 - 25);

        this.img2_1_line6 = new createjs.Shape();
        this.img2_1_line6.graphics.s('#0F0F0F').ss(2).moveTo(296, 267).bezierCurveTo(290, 265, 326, 268, 324, 272);
        this.img2_1_line6.name = "img2_1";
        this.img2_1_line6.value = "empty";
        this.img2_1_line6.visible = false;
        this.img2_1_line6.setTransform(55, 40 - 25);

        this.img2_1_line7 = new createjs.Shape();
        this.img2_1_line7.graphics.s('#0F0F0F').ss(2).moveTo(237, 304).bezierCurveTo(234, 302, 208, 336, 205, 340);
        this.img2_1_line7.name = "img2_1";
        this.img2_1_line7.value = "empty";
        this.img2_1_line7.visible = false;
        this.img2_1_line7.setTransform(55, 40 - 25);

        this.img2_1_line8 = new createjs.Shape();
        this.img2_1_line8.graphics.s('#0F0F0F').ss(2).moveTo(237, 314).bezierCurveTo(233, 305, 219, 344, 218, 347);
        this.img2_1_line8.name = "img2_1";
        this.img2_1_line8.value = "empty";
        this.img2_1_line8.visible = false;
        this.img2_1_line8.setTransform(55, 43 - 25);

        this.img2_1_line9 = new createjs.Shape();
        this.img2_1_line9.graphics.s('#0F0F0F').ss(2).moveTo(299, 304).bezierCurveTo(289, 293, 332, 346, 328, 338);
        this.img2_1_line9.name = "img2_1";
        this.img2_1_line9.value = "empty";
        this.img2_1_line9.visible = false;
        this.img2_1_line9.setTransform(56, 40 - 25);

        this.img2_1_line10 = new createjs.Shape();
        this.img2_1_line10.graphics.s('#0F0F0F').ss(2).moveTo(299, 314).bezierCurveTo(292, 301, 318, 350, 315, 343);
        this.img2_1_line10.name = "img2_1";
        this.img2_1_line10.value = "empty";
        this.img2_1_line10.visible = false;
        this.img2_1_line10.setTransform(56, 40 - 25);


        this.addChild(this.img2_1_topLeftline, this.img2_1_topRightline, this.img2_1_topLeftcircle, this.img2_1_topRightcircle, this.img2_1_butterflyHead, this.img2_1_butterflyBody, this.img2_1_wingleft1, this.img2_1_wingleft2, this.img2_1_wingleft3, this.img2_1_wingleft4, this.img2_1_wingleft5, this.img2_1_wingleft6, this.img2_1_wingright1, this.img2_1_wingright2, this.img2_1_wingright3, this.img2_1_wingright4, this.img2_1_wingright5, this.img2_1_wingright6, this.img2_1_RoundRectDot1, this.img2_1_RoundRectDot2, this.img2_1_LS1, this.img2_1_line1, this.img2_1_line2, this.img2_1_line3, this.img2_1_line4, this.img2_1_line5, this.img2_1_line6, this.img2_1_line7, this.img2_1_line8, this.img2_1_line9, this.img2_1_line10);

        this.img2_2_topLeftcircle = new createjs.Shape()
        this.img2_2_topLeftcircle.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 18, 18, 450);
        this.img2_2_topLeftcircle.name = "img2_2";
        this.img2_2_topLeftcircle.value = 0;
        this.img2_2_topLeftcircle.visible = false;
        this.img2_2_topLeftcircle.setTransform(640 + 230, 28 - 25);
        this.img2_2_topLeftcircle.rotation = 8;
        this.img2_2_topLeftcircle.on('click', FillColor);

        this.img2_2_topRightcircle = new createjs.Shape()
        this.img2_2_topRightcircle.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 18, 18, 450);
        this.img2_2_topRightcircle.name = "img2_2";
        this.img2_2_topRightcircle.value = 0;
        this.img2_2_topRightcircle.visible = false;
        this.img2_2_topRightcircle.setTransform(640 + 396, 32 - 25);
        this.img2_2_topRightcircle.rotation = -8;
        this.img2_2_topRightcircle.on('click', FillColor);

        this.img2_2_topLeftline = new createjs.Shape()
        this.img2_2_topLeftline.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(250, 110)
            .bezierCurveTo(247, 96, 226, 43, 198, 30)
            .bezierCurveTo(184, 24, 250, 52, 257, 102);
        this.img2_2_topLeftline.name = "img2_2";
        this.img2_2_topLeftline.value = 0;
        this.img2_2_topLeftline.visible = false;
        this.img2_2_topLeftline.setTransform(640 + 50, 10 - 25, 1, 1.14);
        this.img2_2_topLeftline.on('click', FillColor);

        this.img2_2_topRightline = new createjs.Shape()
        this.img2_2_topRightline.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(270, 104)
            .bezierCurveTo(277, 76, 333, 22, 340, 28)
            .bezierCurveTo(343, 33, 315, 18, 279, 107);
        this.img2_2_topRightline.name = "img2_2";
        this.img2_2_topRightline.value = 0;
        this.img2_2_topRightline.visible = false;
        this.img2_2_topRightline.setTransform(640 + 65, 10 - 25, 1, 1.14);
        this.img2_2_topRightline.on('click', FillColor);


        this.img2_2_butterflyHead = new createjs.Shape()
        this.img2_2_butterflyHead.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 103, 103, 260);
        this.img2_2_butterflyHead.name = "img2_2";
        this.img2_2_butterflyHead.value = 0;
        this.img2_2_butterflyHead.visible = false;
        this.img2_2_butterflyHead.setTransform(640 + 271, 125 - 25);
        this.img2_2_butterflyHead.on('click', FillColor);

        this.img2_2_butterflyBody = new createjs.Shape();
        this.img2_2_butterflyBody.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(255, 193)
            .bezierCurveTo(195, 500, 336, 502, 277, 194)
            .bezierCurveTo(275, 190, 271, 195, 254, 193);
        this.img2_2_butterflyBody.name = "img2_2";
        this.img2_2_butterflyBody.value = 0;
        this.img2_2_butterflyBody.visible = false;
        this.img2_2_butterflyBody.setTransform(640 + -7, 3 - 25, 1.24, 1.16);
        this.img2_2_butterflyBody.on('click', FillColor);

        this.img2_2_wingleft1 = new createjs.Shape();
        this.img2_2_wingleft1.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(238, 291)
            .bezierCurveTo(83, 329, 78, 188, 79, 197)
            .bezierCurveTo(81, 213, 73, 145, 71, 151)
            .bezierCurveTo(78, 161, 44, 106, 79, 96)
            .bezierCurveTo(81, 95, 106, 115, 108, 115)
            .bezierCurveTo(107, 115, 180, 138, 186, 142)
            .bezierCurveTo(193, 146, 253, 216, 249, 218)
            .bezierCurveTo(246, 225, 238, 298, 237, 290);
        this.img2_2_wingleft1.name = "img2_2";
        this.img2_2_wingleft1.value = 0;
        this.img2_2_wingleft1.visible = false;
        this.img2_2_wingleft1.setTransform(640 + 27, 16 - 25, 1.11, 1.1);
        this.img2_2_wingleft1.on('click', FillColor);

        this.img2_2_wingleft2 = new createjs.Shape();
        this.img2_2_wingleft2.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(236, 290)
            .bezierCurveTo(219, 293, 138, 329, 114, 232)
            .bezierCurveTo(112, 224, 84, 128, 178, 144)
            .bezierCurveTo(198, 147, 252, 216, 248, 217)
            .bezierCurveTo(248, 219, 240, 298, 240, 284);
        this.img2_2_wingleft2.name = "img2_2";
        this.img2_2_wingleft2.value = 0;
        this.img2_2_wingleft2.visible = false;
        this.img2_2_wingleft2.setTransform(640 + 27, 16 - 25, 1.11, 1.1);
        this.img2_2_wingleft2.on('click', FillColor);

        this.img2_2_wingleft3 = new createjs.Shape()
        this.img2_2_wingleft3.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 80, 62, 260);
        this.img2_2_wingleft3.name = "img2_2";
        this.img2_2_wingleft3.value = 0;
        this.img2_2_wingleft3.visible = false;
        this.img2_2_wingleft3.setTransform(640 + 223, 197.5 - 25);
        this.img2_2_wingleft3.rotation = 60;
        this.img2_2_wingleft3.on('click', FillColor);

        this.img2_2_wingleft4 = new createjs.Shape();
        this.img2_2_wingleft4.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(235, 290)
            .bezierCurveTo(19, 364, 127, 469, 167, 449)
            .bezierCurveTo(215, 425, 218, 407, 236, 359)
            .bezierCurveTo(240, 335, 236, 289, 236, 290);
        this.img2_2_wingleft4.name = "img2_2";
        this.img2_2_wingleft4.value = 0;
        this.img2_2_wingleft4.visible = false;
        this.img2_2_wingleft4.setTransform(640 + 28, 16 - 25, 1.11, 1.1);
        this.img2_2_wingleft4.on('click', FillColor);

        this.img2_2_wingleft5 = new createjs.Shape();
        this.img2_2_wingleft5.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(236, 290)
            .bezierCurveTo(2, 360, 207, 487, 235, 359)
            .bezierCurveTo(243, 324, 233, 297, 240, 290);
        this.img2_2_wingleft5.name = "img2_2";
        this.img2_2_wingleft5.value = 0;
        this.img2_2_wingleft5.visible = false;
        this.img2_2_wingleft5.setTransform(640 + 27, 16 - 25, 1.11, 1.1);
        this.img2_2_wingleft5.on('click', FillColor);

        this.img2_2_wingleft6 = new createjs.Shape()
        this.img2_2_wingleft6.graphics.f('#ffffff').s('#0F0F0F').ss(2.5).drawRoundRect(0, 0, 45, 46, 100);
        this.img2_2_wingleft6.name = "img2_2";
        this.img2_2_wingleft6.value = 0;
        this.img2_2_wingleft6.visible = false;
        this.img2_2_wingleft6.setTransform(640 + 200, 396 - 25);
        this.img2_2_wingleft6.on('click', FillColor);

        this.img2_2_wingright1 = new createjs.Shape();
        this.img2_2_wingright1.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(287, 214)
            .bezierCurveTo(285, 206, 297, 285, 298, 289)
            .bezierCurveTo(299, 292, 364, 302, 373, 298)
            .bezierCurveTo(454, 276, 457, 169, 456.5, 172)
            .bezierCurveTo(455, 186, 456, 144, 471, 121)
            .bezierCurveTo(473, 118, 463, 97, 456, 97)
            .bezierCurveTo(446, 97, 419, 124, 414, 122)
            .bezierCurveTo(400, 123, 361, 141, 357, 143)
            .bezierCurveTo(344, 151, 325, 151, 287, 213);
        this.img2_2_wingright1.name = "img2_2";
        this.img2_2_wingright1.value = 0;
        this.img2_2_wingright1.visible = false;
        this.img2_2_wingright1.setTransform(640 + 23, 20 - 25, 1.11, 1.1);
        this.img2_2_wingright1.on('click', FillColor);

        this.img2_2_wingright2 = new createjs.Shape();
        this.img2_2_wingright2.graphics.f('#ffffff').s('#0F0F0F').ss(1.5)
            .moveTo(285, 218)
            .bezierCurveTo(282, 203, 297, 297, 295, 290)
            .bezierCurveTo(291, 281, 322, 311, 371, 288)
            .bezierCurveTo(446, 258, 424, 164, 397, 146)
            .bezierCurveTo(373, 129, 309, 154, 285, 215);
        this.img2_2_wingright2.name = "img2_2";
        this.img2_2_wingright2.value = 0;
        this.img2_2_wingright2.visible = false;
        this.img2_2_wingright2.setTransform(640 + 26, 20 - 25, 1.11, 1.1);
        this.img2_2_wingright2.on('click', FillColor);

        this.img2_2_wingright3 = new createjs.Shape()
        this.img2_2_wingright3.graphics.f('#ffffff').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 80, 62, 260);
        this.img2_2_wingright3.name = "img2_2";
        this.img2_2_wingright3.value = 0;
        this.img2_2_wingright3.visible = false;
        this.img2_2_wingright3.setTransform(640 + 380, 262 - 25);
        this.img2_2_wingright3.rotation = -53;
        this.img2_2_wingright3.on('click', FillColor);

        this.img2_2_wingright4 = new createjs.Shape();
        this.img2_2_wingright4.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(297, 292)
            .bezierCurveTo(341, 296, 394, 335, 402, 347)
            .bezierCurveTo(434, 404, 413, 441, 408, 443)
            .bezierCurveTo(323, 480, 299, 359, 296, 361)
            .bezierCurveTo(294, 376, 298, 277, 296, 292);
        this.img2_2_wingright4.name = "img2_2";
        this.img2_2_wingright4.value = 0;
        this.img2_2_wingright4.visible = false;
        this.img2_2_wingright4.setTransform(640 + 25, 19 - 25, 1.11, 1.1);
        this.img2_2_wingright4.on('click', FillColor);

        this.img2_2_wingright5 = new createjs.Shape();
        this.img2_2_wingright5.graphics.f('#ffffff').s('#0F0F0F').ss(1.5).moveTo(296, 290)
            .bezierCurveTo(291, 282, 393, 324, 399, 347)
            .bezierCurveTo(429, 440, 328, 417, 312, 396)
            .bezierCurveTo(303, 387, 297, 351, 297, 358)
            .bezierCurveTo(296, 373, 297, 275, 296, 290);
        this.img2_2_wingright5.name = "img2_2";
        this.img2_2_wingright5.value = 0;
        this.img2_2_wingright5.visible = false;
        this.img2_2_wingright5.setTransform(640 + 25, 19 - 25, 1.11, 1.1);
        this.img2_2_wingright5.on('click', FillColor);

        this.img2_2_wingright6 = new createjs.Shape()
        this.img2_2_wingright6.graphics.f('#ffffff').s('#0F0F0F').ss(2.5).drawRoundRect(0, 0, 45, 46, 100);
        this.img2_2_wingright6.name = "img2_2";
        this.img2_2_wingright6.value = 0;
        this.img2_2_wingright6.visible = false;
        this.img2_2_wingright6.setTransform(640 + 398.5, 396 - 25);
        this.img2_2_wingright6.on('click', FillColor);


        this.img2_2_RoundRectDot1 = new createjs.Shape()
        this.img2_2_RoundRectDot1.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 3, 6.5, 450);
        this.img2_2_RoundRectDot1.name = "img2_2";
        this.img2_2_RoundRectDot1.value = "empty";
        this.img2_2_RoundRectDot1.visible = false;
        this.img2_2_RoundRectDot1.setTransform(640 + 304.5, 165 - 25);
        this.img2_2_RoundRectDot1.rotation = 8;
        this.img2_2_RoundRectDot1.on('click', FillColorEmpty);

        this.img2_2_RoundRectDot2 = new createjs.Shape()
        this.img2_2_RoundRectDot2.graphics.f('#0F0F0F').s('#0F0F0F').ss(1).drawRoundRect(0, 0, 3, 6.5, 450);
        this.img2_2_RoundRectDot2.name = "img2_2";
        this.img2_2_RoundRectDot2.value = "empty";
        this.img2_2_RoundRectDot2.visible = false;
        this.img2_2_RoundRectDot2.setTransform(640 + 337, 165 - 25);
        this.img2_2_RoundRectDot2.rotation = -8;
        this.img2_2_RoundRectDot2.on('click', FillColorEmpty);

        this.img2_2_LS1 = new createjs.Shape();
        this.img2_2_LS1.graphics.s('#0F0F0F').ss(7).moveTo(405, 384).bezierCurveTo(355, 454, 270, 419, 256, 384);
        this.img2_2_LS1.name = "img2_2";
        this.img2_2_LS1.value = "empty";
        this.img2_2_LS1.visible = false;
        this.img2_2_LS1.setTransform(640 + 223.5, 20 - 25, 0.3, 0.43);
        this.img2_2_LS1.on('click', FillColorEmpty);

        this.img2_2_line1 = new createjs.Shape();
        this.img2_2_line1.graphics.s('#0F0F0F').ss(2).moveTo(244, 243).bezierCurveTo(238, 242, 218, 228, 217, 229);
        this.img2_2_line1.name = "img2_2";
        this.img2_2_line1.value = "empty";
        this.img2_2_line1.visible = false;
        this.img2_2_line1.setTransform(640 + 55, 38 - 25);
        this.img2_2_line1.on('click', FillColorEmpty);

        this.img2_2_line2 = new createjs.Shape();
        this.img2_2_line2.graphics.s('#0F0F0F').ss(2).moveTo(242, 253).bezierCurveTo(218, 246, 214, 248, 214, 248);
        this.img2_2_line2.name = "img2_2";
        this.img2_2_line2.value = "empty";
        this.img2_2_line2.visible = false;
        this.img2_2_line2.setTransform(640 + 55, 40 - 25);
        this.img2_2_line2.on('click', FillColorEmpty);

        this.img2_2_line3 = new createjs.Shape();
        this.img2_2_line3.graphics.s('#0F0F0F').ss(2).moveTo(240, 267).bezierCurveTo(222, 264, 211, 270, 212, 271);
        this.img2_2_line3.name = "img2_2";
        this.img2_2_line3.value = "empty";
        this.img2_2_line3.visible = false;
        this.img2_2_line3.setTransform(640 + 55, 40 - 25);
        this.img2_2_line3.on('click', FillColorEmpty);

        this.img2_2_line4 = new createjs.Shape();
        this.img2_2_line4.graphics.s('#0F0F0F').ss(2).moveTo(292, 243).bezierCurveTo(288, 234, 328, 222, 317, 228);
        this.img2_2_line4.name = "img2_2";
        this.img2_2_line4.value = "empty";
        this.img2_2_line4.visible = false;
        this.img2_2_line4.setTransform(640 + 55, 41 - 25);
        this.img2_2_line4.on('click', FillColorEmpty);

        this.img2_2_line5 = new createjs.Shape();
        this.img2_2_line5.graphics.s('#0F0F0F').ss(2).moveTo(295, 252).bezierCurveTo(283, 248, 336, 249, 321, 249);
        this.img2_2_line5.name = "img2_2";
        this.img2_2_line5.value = "empty";
        this.img2_2_line5.visible = false;
        this.img2_2_line5.setTransform(640 + 55, 40 - 25);
        this.img2_2_line5.on('click', FillColorEmpty);

        this.img2_2_line6 = new createjs.Shape();
        this.img2_2_line6.graphics.s('#0F0F0F').ss(2).moveTo(296, 267).bezierCurveTo(290, 265, 326, 268, 324, 272);
        this.img2_2_line6.name = "img2_2";
        this.img2_2_line6.value = "empty";
        this.img2_2_line6.visible = false;
        this.img2_2_line6.setTransform(640 + 55, 40 - 25);
        this.img2_2_line6.on('click', FillColorEmpty);

        this.img2_2_line7 = new createjs.Shape();
        this.img2_2_line7.graphics.s('#0F0F0F').ss(2).moveTo(237, 304).bezierCurveTo(234, 302, 208, 336, 205, 340);
        this.img2_2_line7.name = "img2_2";
        this.img2_2_line7.value = "empty";
        this.img2_2_line7.visible = false;
        this.img2_2_line7.setTransform(640 + 55, 40 - 25);
        this.img2_2_line7.on('click', FillColorEmpty);

        this.img2_2_line8 = new createjs.Shape();
        this.img2_2_line8.graphics.s('#0F0F0F').ss(2).moveTo(237, 314).bezierCurveTo(233, 305, 219, 344, 218, 347);
        this.img2_2_line8.name = "img2_2";
        this.img2_2_line8.value = "empty";
        this.img2_2_line8.visible = false;
        this.img2_2_line8.setTransform(640 + 55, 43 - 25);
        this.img2_2_line8.on('click', FillColorEmpty);

        this.img2_2_line9 = new createjs.Shape();
        this.img2_2_line9.graphics.s('#0F0F0F').ss(2).moveTo(299, 304).bezierCurveTo(289, 293, 332, 346, 328, 338);
        this.img2_2_line9.name = "img2_2";
        this.img2_2_line9.value = "empty";
        this.img2_2_line9.visible = false;
        this.img2_2_line9.setTransform(640 + 56, 40 - 25);
        this.img2_2_line9.on('click', FillColorEmpty);

        this.img2_2_line10 = new createjs.Shape();
        this.img2_2_line10.graphics.s('#0F0F0F').ss(2).moveTo(299, 314).bezierCurveTo(292, 301, 318, 350, 315, 343);
        this.img2_2_line10.name = "img2_2";
        this.img2_2_line10.value = "empty";
        this.img2_2_line10.visible = false;
        this.img2_2_line10.setTransform(640 + 56, 40 - 25);
        this.img2_2_line10.on('click', FillColorEmpty);

        this.addChild(this.img2_2_topLeftline, this.img2_2_topRightline, this.img2_2_topLeftcircle, this.img2_2_topRightcircle, this.img2_2_butterflyHead, this.img2_2_butterflyBody, this.img2_2_wingleft1, this.img2_2_wingleft2, this.img2_2_wingleft3, this.img2_2_wingleft4, this.img2_2_wingleft5, this.img2_2_wingleft6, this.img2_2_wingright1, this.img2_2_wingright2, this.img2_2_wingright3, this.img2_2_wingright4, this.img2_2_wingright5, this.img2_2_wingright6, this.img2_2_RoundRectDot1, this.img2_2_RoundRectDot2, this.img2_2_LS1, this.img2_2_line1, this.img2_2_line2, this.img2_2_line3, this.img2_2_line4, this.img2_2_line5, this.img2_2_line6, this.img2_2_line7, this.img2_2_line8, this.img2_2_line9, this.img2_2_line10);


        // Img 3        
        this.img3_1_Topleg1 = new createjs.Shape();
        this.img3_1_Topleg1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(111, 60)
            .bezierCurveTo(112.5, 67, 175, 17, 160, 91)
            .bezierCurveTo(160, 90, 150, 95, 140, 96)
            .bezierCurveTo(157.8, 47, 128, 84, 110, 60);
        this.img3_1_Topleg1.name = "img3_1";
        this.img3_1_Topleg1.value = 0;
        this.img3_1_Topleg1.visible = false;
        this.img3_1_Topleg1.setTransform(41, -0.8 - 50, 1.111, 1.111);


        this.img3_1_Topleg2 = new createjs.Shape();
        this.img3_1_Topleg2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(233, 87)
            .bezierCurveTo(239, 80, 250, 85, 260, 87)
            .bezierCurveTo(255, 86, 275, 63, 276, 57)
            .bezierCurveTo(265, 45, 250, 30, 255, 24)
            .bezierCurveTo(248, 12, 242, 41, 256, 54)
            .bezierCurveTo(257, 64, 228, 86, 237, 85);
        this.img3_1_Topleg2.name = "img3_1";
        this.img3_1_Topleg2.value = 1;
        this.img3_1_Topleg2.visible = false;
        this.img3_1_Topleg2.setTransform(41, 0.5 - 50, 1.1, 1.11);


        this.img3_1_Topleg3 = new createjs.Shape();
        this.img3_1_Topleg3.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(347, 122)
            .bezierCurveTo(360, 115, 373, 84, 359, 83)
            .bezierCurveTo(345, 82, 351, 56, 343, 54)
            .bezierCurveTo(343, 53, 318, 69, 343, 91)
            .bezierCurveTo(351, 98, 338, 114, 335, 113)
            .bezierCurveTo(315, 107, 357, 132, 346, 121);
        this.img3_1_Topleg3.name = "img3_1";
        this.img3_1_Topleg3.value = 2;
        this.img3_1_Topleg3.visible = false;
        this.img3_1_Topleg3.setTransform(39.5, -0.8 - 50, 1.1, 1.1);


        this.img3_1_wingTop = new createjs.Shape();
        this.img3_1_wingTop.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(54, 169)
            .bezierCurveTo(191, 2, 379, 139, 356, 134)
            .bezierCurveTo(361, 117, 308, 215, 321, 253)
            .bezierCurveTo(319, 255, 161, 265, 54, 169);
        this.img3_1_wingTop.name = "img3_1";
        this.img3_1_wingTop.value = 3;
        this.img3_1_wingTop.visible = false;
        this.img3_1_wingTop.setTransform(38, -2 - 50, 1.1, 1.1);


        this.img3_1_topwing1 = new createjs.Shape();
        this.img3_1_topwing1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(113, 171)
            .bezierCurveTo(102, 171, 128, 99, 170, 160)
            .bezierCurveTo(181, 176, 144, 214, 113, 171);
        this.img3_1_topwing1.name = "img3_1";
        this.img3_1_topwing1.value = 4;
        this.img3_1_topwing1.visible = false;
        this.img3_1_topwing1.setTransform(38.5, -0.8 - 50, 1.1, 1.1);


        this.img3_1_topwing2 = new createjs.Shape();
        this.img3_1_topwing2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(211, 143)
            .bezierCurveTo(200, 140, 240, 90, 275, 147)
            .bezierCurveTo(280, 170, 220, 210, 209, 143);
        this.img3_1_topwing2.name = "img3_1";
        this.img3_1_topwing2.value = 5;
        this.img3_1_topwing2.visible = false;
        this.img3_1_topwing2.setTransform(38.5, -0.8 - 50, 1.1, 1.1);


        this.img3_1_topwing3 = new createjs.Shape();
        this.img3_1_topwing3.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(247, 205)
            .bezierCurveTo(242, 195, 276, 164, 301, 205)
            .bezierCurveTo(313, 225, 262, 252, 247, 204);
        this.img3_1_topwing3.name = "img3_1";
        this.img3_1_topwing3.value = 6;
        this.img3_1_topwing3.visible = false;
        this.img3_1_topwing3.setTransform(38.5, -0.8 - 50, 1.1, 1.1);


        this.img3_1_body = new createjs.Shape();
        this.img3_1_body.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(59, 172)
            .bezierCurveTo(23, 209, 36, 306, 60, 330)
            .bezierCurveTo(67, 340, 76, 278, 268, 252)
            .bezierCurveTo(283, 250, 143, 250, 57, 173);
        this.img3_1_body.name = "img3_1";
        this.img3_1_body.value = 7;
        this.img3_1_body.visible = false;
        this.img3_1_body.setTransform(38.5, -0.8 - 50, 1.1, 1.1);


        this.img3_1_buttomwing = new createjs.Shape();
        this.img3_1_buttomwing.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(318, 243)
            .bezierCurveTo(255, 240, 106, 264, 51, 338)
            .bezierCurveTo(45, 345, 193, 490, 340, 380)
            .bezierCurveTo(372, 360, 320, 383, 315, 240);
        this.img3_1_buttomwing.name = "img3_1";
        this.img3_1_buttomwing.value = 8;
        this.img3_1_buttomwing.visible = false;
        this.img3_1_buttomwing.setTransform(40, 21 - 50, 1.11, 1.05);


        this.img3_1_buttomwing1 = new createjs.Shape();
        this.img3_1_buttomwing1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(115, 353)
            .bezierCurveTo(107, 298, 169, 312, 171, 331)
            .bezierCurveTo(173, 355, 136, 386, 114, 351);
        this.img3_1_buttomwing1.name = "img3_1";
        this.img3_1_buttomwing1.value = 9;
        this.img3_1_buttomwing1.visible = false;
        this.img3_1_buttomwing1.setTransform(38.5, -0.8 - 50, 1.1, 1.1);


        this.img3_1_buttomwing2 = new createjs.Shape();
        this.img3_1_buttomwing2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(209, 367)
            .bezierCurveTo(215, 299, 271, 336, 271, 352)
            .bezierCurveTo(271, 363, 245, 420, 208, 367);
        this.img3_1_buttomwing2.name = "img3_1";
        this.img3_1_buttomwing2.value = 10;
        this.img3_1_buttomwing2.visible = false;
        this.img3_1_buttomwing2.setTransform(38.5, -0.8 - 50, 1.1, 1.1);


        this.img3_1_buttomwing3 = new createjs.Shape();
        this.img3_1_buttomwing3.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(250, 297)
            .bezierCurveTo(240, 299, 289, 245, 303, 297)
            .bezierCurveTo(307, 307, 257, 339, 248, 297);
        this.img3_1_buttomwing3.name = "img3_1";
        this.img3_1_buttomwing3.value = 11;
        this.img3_1_buttomwing3.visible = false;
        this.img3_1_buttomwing3.setTransform(38.5, -0.8 - 50, 1.1, 1.1);


        this.img3_1_head = new createjs.Shape();
        this.img3_1_head.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(349, 138)
            .bezierCurveTo(273, 251, 339, 372, 353, 368)
            .bezierCurveTo(429, 344, 509, 214, 349, 136);
        this.img3_1_head.name = "img3_1";
        this.img3_1_head.value = 12;
        this.img3_1_head.visible = false;
        this.img3_1_head.setTransform(57, -0.8 - 50, 1.06, 1.1);


        this.img3_1_eye1 = new createjs.Shape();
        this.img3_1_eye1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(358, 209)
            .bezierCurveTo(382, 164, 418, 223, 408, 229)
            .bezierCurveTo(392, 239, 360, 238, 358, 209);
        this.img3_1_eye1.name = "img3_1";
        this.img3_1_eye1.value = 13;
        this.img3_1_eye1.visible = false;
        this.img3_1_eye1.setTransform(38.5, -0.8 - 50, 1.1, 1.1);


        this.img3_1_eye2 = new createjs.Shape();
        this.img3_1_eye2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(359, 297)
            .bezierCurveTo(355, 254, 409, 267, 409, 278)
            .bezierCurveTo(409, 300, 368, 326, 359, 297);
        this.img3_1_eye2.name = "img3_1";
        this.img3_1_eye2.value = 14;
        this.img3_1_eye2.visible = false;
        this.img3_1_eye2.setTransform(38.5, -0.8 - 50, 1.1, 1.1);


        this.img3_1_head1 = new createjs.Shape();
        this.img3_1_head1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(433, 220)
            .bezierCurveTo(474, 211, 484, 188, 488, 191)
            .bezierCurveTo(511, 205, 432, 244, 433, 219);
        this.img3_1_head1.name = "img3_1";
        this.img3_1_head1.value = 15;
        this.img3_1_head1.visible = false;
        this.img3_1_head1.setTransform(45, -0.8 - 50, 1.09, 1.09);


        this.img3_1_head2 = new createjs.Shape();
        this.img3_1_head2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(434, 288)
            .bezierCurveTo(443, 280, 485, 314, 489, 312)
            .bezierCurveTo(503, 304, 436, 257, 434, 286);
        this.img3_1_head2.name = "img3_1";
        this.img3_1_head2.value = 16;
        this.img3_1_head2.visible = false;
        this.img3_1_head2.setTransform(43.5, 1 - 50, 1.091, 1.1);


        this.img3_1_buttomleg1 = new createjs.Shape();
        this.img3_1_buttomleg1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(141, 404)
            .bezierCurveTo(167, 454, 115, 422, 117, 438)
            .bezierCurveTo(124, 447, 180, 478, 164, 413)
            .bezierCurveTo(165, 407, 134, 406, 148, 406);
        this.img3_1_buttomleg1.name = "img3_1";
        this.img3_1_buttomleg1.value = 17;
        this.img3_1_buttomleg1.visible = false;
        this.img3_1_buttomleg1.setTransform(38, -0.9 - 50, 1.1, 1.1);


        this.img3_1_buttomleg2 = new createjs.Shape();
        this.img3_1_buttomleg2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(259, 415)
            .bezierCurveTo(292, 460, 264, 459, 256, 479)
            .bezierCurveTo(250, 495, 238, 466, 256, 449)
            .bezierCurveTo(265, 441, 214, 413, 259, 415);
        this.img3_1_buttomleg2.name = "img3_1";
        this.img3_1_buttomleg2.value = 18;
        this.img3_1_buttomleg2.visible = false;
        this.img3_1_buttomleg2.setTransform(37.5, 1 - 50, 1.11, 1.11);


        this.img3_1_buttomleg3 = new createjs.Shape();
        this.img3_1_buttomleg3.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(347, 381)
            .bezierCurveTo(390, 422, 349, 422, 350, 428)
            .bezierCurveTo(355, 473, 314, 444, 342, 412)
            .bezierCurveTo(354, 399, 313, 393, 347, 380);
        this.img3_1_buttomleg3.name = "img3_1";
        this.img3_1_buttomleg3.value = 19;
        this.img3_1_buttomleg3.visible = false;
        this.img3_1_buttomleg3.setTransform(38.5, 3 - 50, 1.1, 1.1);


        this.img3_1_dot1 = new createjs.Shape()
        this.img3_1_dot1.graphics.f('#0F0F0F').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 8, 6, 450);
        this.img3_1_dot1.name = "img3_1";
        this.img3_1_dot1.value = "empty";
        this.img3_1_dot1.visible = false;
        this.img3_1_dot1.setTransform(467, 237.5 - 50);

        this.img3_1_dot2 = new createjs.Shape()
        this.img3_1_dot2.graphics.f('#0F0F0F').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 8, 6, 450);
        this.img3_1_dot2.name = "img3_1";
        this.img3_1_dot2.value = "empty";
        this.img3_1_dot2.rotation = -10;
        this.img3_1_dot2.visible = false;
        this.img3_1_dot2.setTransform(467, 310.5 - 50);

        this.img3_1_eyebrow1 = new createjs.Shape();
        this.img3_1_eyebrow1.graphics.s('#0F0F0F').ss(2).moveTo(371, 189)
            .bezierCurveTo(382, 182, 407, 201, 400, 200);
        this.img3_1_eyebrow1.name = "img3_1";
        this.img3_1_eyebrow1.value = "empty";
        this.img3_1_eyebrow1.visible = false;
        this.img3_1_eyebrow1.setTransform(38.5, -1 - 50, 1.1, 1.1);


        this.img3_1_eyebrow2 = new createjs.Shape();
        this.img3_1_eyebrow2.graphics.s('#0F0F0F').ss(2).moveTo(374, 314)
            .bezierCurveTo(371, 322, 404, 309, 403, 304);
        this.img3_1_eyebrow2.name = "img3_1";
        this.img3_1_eyebrow2.value = "empty";
        this.img3_1_eyebrow2.visible = false;
        this.img3_1_eyebrow2.setTransform(38.5, 1 - 50, 1.1, 1.1);


        this.img3_1_topLine1 = new createjs.Shape();
        this.img3_1_topLine1.graphics.s('#0F0F0F').ss(2).moveTo(0, -1).lineTo(-0.8, 15).moveTo(17, -5).lineTo(11, 16).moveTo(12, 21.7).lineTo(30, 16).moveTo(12, 28.7).lineTo(29, 28);
        this.img3_1_topLine1.name = "img3_1";
        this.img3_1_topLine1.value = "empty";
        this.img3_1_topLine1.visible = false;
        this.img3_1_topLine1.setTransform(189, 60 - 50, 1.1, 1.1);


        this.img3_1_topLine2 = new createjs.Shape();
        this.img3_1_topLine2.graphics.s('#0F0F0F').ss(2).moveTo(12, 18).lineTo(25, 13).moveTo(16, 25).lineTo(35, 26).moveTo(29, 40).lineTo(12, 35).moveTo(23, 50).lineTo(7, 44);
        this.img3_1_topLine2.name = "img3_1";
        this.img3_1_topLine2.value = "empty";
        this.img3_1_topLine2.visible = false;
        this.img3_1_topLine2.setTransform(303, 33 - 50, 1.1, 1.1);


        this.img3_1_topLine3 = new createjs.Shape();
        this.img3_1_topLine3.graphics.s('#0F0F0F').ss(2).moveTo(14, 18).lineTo(32, 13).moveTo(26, 32).lineTo(40, 22).moveTo(26, 38).lineTo(43, 41).moveTo(24, 45).lineTo(37, 53);
        this.img3_1_topLine3.name = "img3_1";
        this.img3_1_topLine3.value = "empty";
        this.img3_1_topLine3.visible = false;
        this.img3_1_topLine3.setTransform(390, 66 - 50, 1.1, 1.1);



        this.img3_1_headLine1 = new createjs.Shape();
        this.img3_1_headLine1.graphics.s('#0F0F0F').ss(2).moveTo(29, 14).lineTo(30, 25).moveTo(40, 10).lineTo(45, 20).moveTo(52, 3).lineTo(57, 13);
        this.img3_1_headLine1.name = "img3_1";
        this.img3_1_headLine1.value = "empty";
        this.img3_1_headLine1.visible = false;
        this.img3_1_headLine1.setTransform(500, 220 - 50, 1.1, 1.1);


        this.img3_1_headLine2 = new createjs.Shape();
        this.img3_1_headLine2.graphics.s('#0F0F0F').ss(2).moveTo(30, 14).lineTo(28, 25).moveTo(46, 20).lineTo(42, 33).moveTo(58, 28).lineTo(54, 40);
        this.img3_1_headLine2.name = "img3_1";
        this.img3_1_headLine2.value = "empty";
        this.img3_1_headLine2.visible = false;
        this.img3_1_headLine2.setTransform(500, 290 - 50, 1.1, 1.1);

        this.img3_1_buttomLine1 = new createjs.Shape();
        this.img3_1_buttomLine1.graphics.s('#0F0F0F').ss(2).moveTo(45, 30).lineTo(27, 28).moveTo(45, 43).lineTo(29, 38).moveTo(35, 60).lineTo(25, 41).moveTo(18, 60).lineTo(16, 42);
        this.img3_1_buttomLine1.name = "img3_1";
        this.img3_1_buttomLine1.value = "empty";
        this.img3_1_buttomLine1.visible = false;
        this.img3_1_buttomLine1.setTransform(170, 430 - 50, 1.1, 1.1);

        this.img3_1_buttomLine2 = new createjs.Shape();
        this.img3_1_buttomLine2.graphics.s('#0F0F0F').ss(2).moveTo(50, 30).lineTo(29, 37).moveTo(55, 39).lineTo(40, 48).moveTo(60, 55).lineTo(44, 57).moveTo(55, 71).lineTo(38, 66);
        this.img3_1_buttomLine2.name = "img3_1";
        this.img3_1_buttomLine2.value = "empty";
        this.img3_1_buttomLine2.visible = false;
        this.img3_1_buttomLine2.setTransform(275, 435 - 50, 1.1, 1.1);

        this.img3_1_buttomLine3 = new createjs.Shape();
        this.img3_1_buttomLine3.graphics.s('#0F0F0F').ss(2).moveTo(48, 24).lineTo(31, 33).moveTo(57, 35).lineTo(38, 41).moveTo(58, 56).lineTo(38, 46).moveTo(45, 64).lineTo(28, 60);
        this.img3_1_buttomLine3.name = "img3_1";
        this.img3_1_buttomLine3.value = "empty";
        this.img3_1_buttomLine3.visible = false;
        this.img3_1_buttomLine3.setTransform(375, 403 - 50, 1.1, 1.1);

        this.addChild(this.img3_1_Topleg1, this.img3_1_Topleg2, this.img3_1_Topleg3, this.img3_1_wingTop, this.img3_1_topwing1, this.img3_1_topwing2, this.img3_1_topwing3, this.img3_1_body, this.img3_1_buttomwing, this.img3_1_buttomwing1, this.img3_1_buttomwing2, this.img3_1_buttomwing3, this.img3_1_head, this.img3_1_eye1, this.img3_1_eye2, this.img3_1_head1, this.img3_1_head2, this.img3_1_buttomleg1, this.img3_1_buttomleg2, this.img3_1_buttomleg3, this.img3_1_dot1, this.img3_1_dot2, this.img3_1_eyebrow1, this.img3_1_eyebrow2, this.img3_1_topLine1, this.img3_1_topLine2, this.img3_1_topLine3, this.img3_1_headLine1, this.img3_1_headLine2, this.img3_1_buttomLine1, this.img3_1_buttomLine2, this.img3_1_buttomLine3);

        this.img3_2_Topleg1 = new createjs.Shape();
        this.img3_2_Topleg1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(111, 60)
            .bezierCurveTo(112.5, 67, 175, 17, 160, 91)
            .bezierCurveTo(160, 90, 150, 95, 140, 96)
            .bezierCurveTo(157.8, 47, 128, 84, 110, 60);
        this.img3_2_Topleg1.name = "img3_2";
        this.img3_2_Topleg1.value = 0;
        this.img3_2_Topleg1.visible = false;
        this.img3_2_Topleg1.setTransform(680, -0.8 - 50, 1.111, 1.111);
        this.img3_2_Topleg1.on('click', FillColor);

        this.img3_2_Topleg2 = new createjs.Shape();
        this.img3_2_Topleg2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(233, 87)
            .bezierCurveTo(239, 80, 250, 85, 260, 87)
            .bezierCurveTo(255, 86, 275, 63, 276, 57)
            .bezierCurveTo(265, 45, 250, 30, 255, 24)
            .bezierCurveTo(248, 12, 242, 41, 256, 54)
            .bezierCurveTo(257, 64, 228, 86, 237, 85);
        this.img3_2_Topleg2.name = "img3_2";
        this.img3_2_Topleg2.value = 0;
        this.img3_2_Topleg2.visible = false;
        this.img3_2_Topleg2.setTransform(680, 0.5 - 50, 1.1, 1.11);
        this.img3_2_Topleg2.on('click', FillColor);

        this.img3_2_Topleg3 = new createjs.Shape();
        this.img3_2_Topleg3.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(347, 122)
            .bezierCurveTo(360, 115, 373, 84, 359, 83)
            .bezierCurveTo(345, 82, 351, 56, 343, 54)
            .bezierCurveTo(343, 53, 318, 69, 343, 91)
            .bezierCurveTo(351, 98, 338, 114, 335, 113)
            .bezierCurveTo(315, 107, 357, 132, 346, 121);
        this.img3_2_Topleg3.name = "img3_2";
        this.img3_2_Topleg3.value = 0;
        this.img3_2_Topleg3.visible = false;
        this.img3_2_Topleg3.setTransform(678.5, -0.8 - 50, 1.1, 1.1);
        this.img3_2_Topleg3.on('click', FillColor);

        this.img3_2_wingTop = new createjs.Shape();
        this.img3_2_wingTop.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(54, 169)
            .bezierCurveTo(191, 2, 379, 139, 356, 134)
            .bezierCurveTo(361, 117, 308, 215, 321, 253)
            .bezierCurveTo(319, 255, 161, 265, 54, 169);
        this.img3_2_wingTop.name = "img3_2";
        this.img3_2_wingTop.value = 0;
        this.img3_2_wingTop.visible = false;
        this.img3_2_wingTop.setTransform(677, -2 - 50, 1.1, 1.1);
        this.img3_2_wingTop.on('click', FillColor);

        this.img3_2_topwing1 = new createjs.Shape();
        this.img3_2_topwing1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(113, 171)
            .bezierCurveTo(102, 171, 128, 99, 170, 160)
            .bezierCurveTo(181, 176, 144, 214, 113, 171);
        this.img3_2_topwing1.name = "img3_2";
        this.img3_2_topwing1.value = 0;
        this.img3_2_topwing1.visible = false;
        this.img3_2_topwing1.setTransform(677.5, -0.8 - 50, 1.1, 1.1);
        this.img3_2_topwing1.on('click', FillColor);

        this.img3_2_topwing2 = new createjs.Shape();
        this.img3_2_topwing2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(211, 143)
            .bezierCurveTo(200, 140, 240, 90, 275, 147)
            .bezierCurveTo(280, 170, 220, 210, 209, 143);
        this.img3_2_topwing2.name = "img3_2";
        this.img3_2_topwing2.value = 0;
        this.img3_2_topwing2.visible = false;
        this.img3_2_topwing2.setTransform(677.5, -0.8 - 50, 1.1, 1.1);
        this.img3_2_topwing2.on('click', FillColor);

        this.img3_2_topwing3 = new createjs.Shape();
        this.img3_2_topwing3.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(247, 205)
            .bezierCurveTo(242, 195, 276, 164, 301, 205)
            .bezierCurveTo(313, 225, 262, 252, 247, 204);
        this.img3_2_topwing3.name = "img3_2";
        this.img3_2_topwing3.value = 0;
        this.img3_2_topwing3.visible = false;
        this.img3_2_topwing3.setTransform(677.5, -0.8 - 50, 1.1, 1.1);
        this.img3_2_topwing3.on('click', FillColor);

        this.img3_2_body = new createjs.Shape();
        this.img3_2_body.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(59, 172)
            .bezierCurveTo(23, 209, 36, 306, 60, 330)
            .bezierCurveTo(67, 340, 76, 278, 268, 252)
            .bezierCurveTo(283, 250, 143, 250, 57, 173);
        this.img3_2_body.name = "img3_2";
        this.img3_2_body.value = 0;
        this.img3_2_body.visible = false;
        this.img3_2_body.setTransform(677.5, -0.8 - 50, 1.1, 1.1);
        this.img3_2_body.on('click', FillColor);

        this.img3_2_buttomwing = new createjs.Shape();
        this.img3_2_buttomwing.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(318, 243)
            .bezierCurveTo(255, 240, 106, 264, 51, 338)
            .bezierCurveTo(45, 345, 193, 490, 340, 380)
            .bezierCurveTo(372, 360, 320, 383, 315, 240);
        this.img3_2_buttomwing.name = "img3_2";
        this.img3_2_buttomwing.value = 0;
        this.img3_2_buttomwing.visible = false;
        this.img3_2_buttomwing.setTransform(679, 21 - 50, 1.11, 1.05);
        this.img3_2_buttomwing.on('click', FillColor);

        this.img3_2_buttomwing1 = new createjs.Shape();
        this.img3_2_buttomwing1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(115, 353)
            .bezierCurveTo(107, 298, 169, 312, 171, 331)
            .bezierCurveTo(173, 355, 136, 386, 114, 351);
        this.img3_2_buttomwing1.name = "img3_2";
        this.img3_2_buttomwing1.value = 0;
        this.img3_2_buttomwing1.visible = false;
        this.img3_2_buttomwing1.setTransform(677.5, -0.8 - 50, 1.1, 1.1);
        this.img3_2_buttomwing1.on('click', FillColor);

        this.img3_2_buttomwing2 = new createjs.Shape();
        this.img3_2_buttomwing2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(209, 367)
            .bezierCurveTo(215, 299, 271, 336, 271, 352)
            .bezierCurveTo(271, 363, 245, 420, 208, 367);
        this.img3_2_buttomwing2.name = "img3_2";
        this.img3_2_buttomwing2.value = 0;
        this.img3_2_buttomwing2.visible = false;
        this.img3_2_buttomwing2.setTransform(677.5, -0.8 - 50, 1.1, 1.1);
        this.img3_2_buttomwing2.on('click', FillColor);

        this.img3_2_buttomwing3 = new createjs.Shape();
        this.img3_2_buttomwing3.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(250, 297)
            .bezierCurveTo(240, 299, 289, 245, 303, 297)
            .bezierCurveTo(307, 307, 257, 339, 248, 297);
        this.img3_2_buttomwing3.name = "img3_2";
        this.img3_2_buttomwing3.value = 0;
        this.img3_2_buttomwing3.visible = false;
        this.img3_2_buttomwing3.setTransform(677.5, -0.8 - 50, 1.1, 1.1);
        this.img3_2_buttomwing3.on('click', FillColor);

        this.img3_2_head = new createjs.Shape();
        this.img3_2_head.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(349, 138)
            .bezierCurveTo(273, 251, 339, 372, 353, 368)
            .bezierCurveTo(429, 344, 509, 214, 349, 136);
        this.img3_2_head.name = "img3_2";
        this.img3_2_head.value = 0;
        this.img3_2_head.visible = false;
        this.img3_2_head.setTransform(696, -0.8 - 50, 1.06, 1.1);
        this.img3_2_head.on('click', FillColor);

        this.img3_2_eye1 = new createjs.Shape();
        this.img3_2_eye1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(358, 209)
            .bezierCurveTo(382, 164, 418, 223, 408, 229)
            .bezierCurveTo(392, 239, 360, 238, 358, 209);
        this.img3_2_eye1.name = "img3_2";
        this.img3_2_eye1.value = 0;
        this.img3_2_eye1.visible = false;
        this.img3_2_eye1.setTransform(677.5, -0.8 - 50, 1.1, 1.1);
        this.img3_2_eye1.on('click', FillColor);

        this.img3_2_eye2 = new createjs.Shape();
        this.img3_2_eye2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(359, 297)
            .bezierCurveTo(355, 254, 409, 267, 409, 278)
            .bezierCurveTo(409, 300, 368, 326, 359, 297);
        this.img3_2_eye2.name = "img3_2";
        this.img3_2_eye2.value = 0;
        this.img3_2_eye2.visible = false;
        this.img3_2_eye2.setTransform(677.5, -0.8 - 50, 1.1, 1.1);
        this.img3_2_eye2.on('click', FillColor);

        this.img3_2_head1 = new createjs.Shape();
        this.img3_2_head1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(433, 220)
            .bezierCurveTo(474, 211, 484, 188, 488, 191)
            .bezierCurveTo(511, 205, 432, 244, 433, 219);
        this.img3_2_head1.name = "img3_2";
        this.img3_2_head1.value = 0;
        this.img3_2_head1.visible = false;
        this.img3_2_head1.setTransform(684, -0.8 - 50, 1.09, 1.09);
        this.img3_2_head1.on('click', FillColor);

        this.img3_2_head2 = new createjs.Shape();
        this.img3_2_head2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(434, 288)
            .bezierCurveTo(443, 280, 485, 314, 489, 312)
            .bezierCurveTo(503, 304, 436, 257, 434, 286);
        this.img3_2_head2.name = "img3_2";
        this.img3_2_head2.value = 0;
        this.img3_2_head2.visible = false;
        this.img3_2_head2.setTransform(682.5, 1 - 50, 1.091, 1.1);
        this.img3_2_head2.on('click', FillColor);

        this.img3_2_buttomleg1 = new createjs.Shape();
        this.img3_2_buttomleg1.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(141, 404)
            .bezierCurveTo(167, 454, 115, 422, 117, 438)
            .bezierCurveTo(124, 447, 180, 478, 164, 413)
            .bezierCurveTo(165, 407, 134, 406, 148, 406);
        this.img3_2_buttomleg1.name = "img3_2";
        this.img3_2_buttomleg1.value = 0;
        this.img3_2_buttomleg1.visible = false;
        this.img3_2_buttomleg1.setTransform(677, -0.9 - 50, 1.1, 1.1);
        this.img3_2_buttomleg1.on('click', FillColor);

        this.img3_2_buttomleg2 = new createjs.Shape();
        this.img3_2_buttomleg2.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(259, 415)
            .bezierCurveTo(292, 460, 264, 459, 256, 479)
            .bezierCurveTo(250, 495, 238, 466, 256, 449)
            .bezierCurveTo(265, 441, 214, 413, 259, 415);
        this.img3_2_buttomleg2.name = "img3_2";
        this.img3_2_buttomleg2.value = 0;
        this.img3_2_buttomleg2.visible = false;
        this.img3_2_buttomleg2.setTransform(676.5, 1 - 50, 1.11, 1.11);
        this.img3_2_buttomleg2.on('click', FillColor);

        this.img3_2_buttomleg3 = new createjs.Shape();
        this.img3_2_buttomleg3.graphics.f('#ffffff').s('#0F0F0F').ss(2).moveTo(347, 381)
            .bezierCurveTo(390, 422, 349, 422, 350, 428)
            .bezierCurveTo(355, 473, 314, 444, 342, 412)
            .bezierCurveTo(354, 399, 313, 393, 347, 380);
        this.img3_2_buttomleg3.name = "img3_2";
        this.img3_2_buttomleg3.value = 0;
        this.img3_2_buttomleg3.visible = false;
        this.img3_2_buttomleg3.setTransform(677.5, 3 - 50, 1.1, 1.1);
        this.img3_2_buttomleg3.on('click', FillColor);

        this.img3_2_dot1 = new createjs.Shape()
        this.img3_2_dot1.graphics.f('#0F0F0F').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 8, 6, 450);
        this.img3_2_dot1.name = "img3_2";
        this.img3_2_dot1.value = "empty";
        this.img3_2_dot1.visible = false;
        this.img3_2_dot1.setTransform(1106, 237.5 - 50);

        this.img3_2_dot2 = new createjs.Shape()
        this.img3_2_dot2.graphics.f('#0F0F0F').s('#0F0F0F').ss(2).drawRoundRect(0, 0, 8, 6, 450);
        this.img3_2_dot2.name = "img3_2";
        this.img3_2_dot2.value = "empty";
        this.img3_2_dot2.rotation = -10;
        this.img3_2_dot2.visible = false;
        this.img3_2_dot2.setTransform(1106, 310.5 - 50);

        this.img3_2_eyebrow1 = new createjs.Shape();
        this.img3_2_eyebrow1.graphics.s('#0F0F0F').ss(2).moveTo(370, 189)
            .bezierCurveTo(382, 182, 407, 201, 400, 200);
        this.img3_2_eyebrow1.name = "img3_2";
        this.img3_2_eyebrow1.value = "empty";
        this.img3_2_eyebrow1.visible = false;
        this.img3_2_eyebrow1.setTransform(38.5 + 639, -1 - 50, 1.1, 1.1);

        this.img3_2_eyebrow2 = new createjs.Shape();
        this.img3_2_eyebrow2.graphics.s('#0F0F0F').ss(2).moveTo(374, 314)
            .bezierCurveTo(371, 322, 404, 309, 403, 304);
        this.img3_2_eyebrow2.name = "img3_2";
        this.img3_2_eyebrow2.value = "empty";
        this.img3_2_eyebrow2.visible = false;
        this.img3_2_eyebrow2.setTransform(38.5 + 639, 1 - 50, 1.1, 1.1);

        this.img3_2_topLine1 = new createjs.Shape();
        this.img3_2_topLine1.graphics.s('#0F0F0F').ss(2).moveTo(0, -1).lineTo(-0.8, 15).moveTo(17, -5).lineTo(11, 16).moveTo(12, 21.7).lineTo(30, 16).moveTo(12, 28.7).lineTo(29, 28);
        this.img3_2_topLine1.name = "img3_2";
        this.img3_2_topLine1.value = "empty";
        this.img3_2_topLine1.visible = false;
        this.img3_2_topLine1.setTransform(189 + 639, 60 - 50, 1.1, 1.1);

        this.img3_2_topLine2 = new createjs.Shape();
        this.img3_2_topLine2.graphics.s('#0F0F0F').ss(2).moveTo(12, 18).lineTo(25, 13).moveTo(16, 25).lineTo(35, 26).moveTo(29, 40).lineTo(12, 35).moveTo(23, 50).lineTo(7, 44);
        this.img3_2_topLine2.name = "img3_2";
        this.img3_2_topLine2.value = "empty";
        this.img3_2_topLine2.visible = false;
        this.img3_2_topLine2.setTransform(303 + 639, 33 - 50, 1.1, 1.1);

        this.img3_2_topLine3 = new createjs.Shape();
        this.img3_2_topLine3.graphics.s('#0F0F0F').ss(2).moveTo(14, 18).lineTo(32, 13).moveTo(26, 32).lineTo(40, 22).moveTo(26, 38).lineTo(43, 41).moveTo(24, 45).lineTo(37, 53);
        this.img3_2_topLine3.name = "img3_2";
        this.img3_2_topLine3.value = "empty";
        this.img3_2_topLine3.visible = false;
        this.img3_2_topLine3.setTransform(390 + 639, 66 - 50, 1.1, 1.1);

        this.img3_2_headLine1 = new createjs.Shape();
        this.img3_2_headLine1.graphics.s('#0F0F0F').ss(2).moveTo(29, 14).lineTo(30, 25).moveTo(40, 10).lineTo(45, 20).moveTo(52, 3).lineTo(57, 13);
        this.img3_2_headLine1.name = "img3_2";
        this.img3_2_headLine1.value = "empty";
        this.img3_2_headLine1.visible = false;
        this.img3_2_headLine1.setTransform(500 + 639, 220 - 50, 1.1, 1.1);


        this.img3_2_headLine2 = new createjs.Shape();
        this.img3_2_headLine2.graphics.s('#0F0F0F').ss(2).moveTo(30, 14).lineTo(28, 25).moveTo(46, 20).lineTo(42, 33).moveTo(58, 28).lineTo(54, 40);
        this.img3_2_headLine2.name = "img3_2";
        this.img3_2_headLine2.value = "empty";
        this.img3_2_headLine2.visible = false;
        this.img3_2_headLine2.setTransform(500 + 639, 290 - 50, 1.1, 1.1);

        this.img3_2_buttomLine1 = new createjs.Shape();
        this.img3_2_buttomLine1.graphics.s('#0F0F0F').ss(2).moveTo(45, 30).lineTo(27, 28).moveTo(45, 43).lineTo(29, 38).moveTo(35, 60).lineTo(25, 41).moveTo(18, 60).lineTo(16, 42);
        this.img3_2_buttomLine1.name = "img3_2";
        this.img3_2_buttomLine1.value = "empty";
        this.img3_2_buttomLine1.visible = false;
        this.img3_2_buttomLine1.setTransform(170 + 639, 430 - 50, 1.1, 1.1);

        this.img3_2_buttomLine2 = new createjs.Shape();
        this.img3_2_buttomLine2.graphics.s('#0F0F0F').ss(2).moveTo(50, 30).lineTo(29, 37).moveTo(55, 39).lineTo(40, 48).moveTo(60, 55).lineTo(44, 57).moveTo(55, 71).lineTo(38, 66);
        this.img3_2_buttomLine2.name = "img3_2";
        this.img3_2_buttomLine2.value = "empty";
        this.img3_2_buttomLine2.visible = false;
        this.img3_2_buttomLine2.setTransform(275 + 639, 435 - 50, 1.1, 1.1);

        this.img3_2_buttomLine3 = new createjs.Shape();
        this.img3_2_buttomLine3.graphics.s('#0F0F0F').ss(2).moveTo(48, 24).lineTo(31, 33).moveTo(57, 35).lineTo(38, 41).moveTo(58, 56).lineTo(38, 46).moveTo(45, 64).lineTo(28, 60);
        this.img3_2_buttomLine3.name = "img3_2";
        this.img3_2_buttomLine3.value = "empty";
        this.img3_2_buttomLine3.visible = false;
        this.img3_2_buttomLine3.setTransform(375 + 639, 403 - 50, 1.1, 1.1);

        this.addChild(this.img3_2_Topleg1, this.img3_2_Topleg2, this.img3_2_Topleg3, this.img3_2_wingTop, this.img3_2_topwing1, this.img3_2_topwing2, this.img3_2_topwing3, this.img3_2_body, this.img3_2_buttomwing, this.img3_2_buttomwing1, this.img3_2_buttomwing2, this.img3_2_buttomwing3, this.img3_2_head, this.img3_2_eye1, this.img3_2_eye2, this.img3_2_head1, this.img3_2_head2, this.img3_2_buttomleg1, this.img3_2_buttomleg2, this.img3_2_buttomleg3, this.img3_2_dot1, this.img3_2_dot2, this.img3_2_eyebrow1, this.img3_2_eyebrow2, this.img3_2_topLine1, this.img3_2_topLine2, this.img3_2_topLine3, this.img3_2_headLine1, this.img3_2_headLine2, this.img3_2_buttomLine1, this.img3_2_buttomLine2, this.img3_2_buttomLine3);


        this.nastaContainer = new cjs.Container();
        this.nasta = new createjs.Shape()
        this.nasta.graphics.f('#ffffff').s('#ffffff').ss(0.5).drawRoundRect(0, 0, 102, 36, 5);
        this.nastaContainer.visible = false;
        this.nastaContainer.name = "nastaText";
        this.nastaContainer.value = 0;
        this.nastaContainer.setTransform(1360, 424);

        this.incorrectAnswer = new createjs.Shape()
        this.incorrectAnswer.graphics.f('#ffffff').s('#ffffff').ss(0.5).drawRoundRect(0, 0, 0.5, 0.5, 5);
        this.incorrectAnswer.visible = false;
        this.incorrectAnswer.setTransform(1360, 424);

        this.incorrectIcon = new createjs.Shape()
        this.incorrectIcon.graphics.f('#ffffff').s('#ffffff').ss(0.5).drawRoundRect(0, 0, 0.5, 0.5, 5);
        this.incorrectIcon.visible = false;
        this.incorrectIcon.setTransform(1360, 424);

        this.correctIcon = new createjs.Shape()
        this.correctIcon.graphics.f('#ffffff').s('#ffffff').ss(0.5).drawRoundRect(0, 0, 0.5, 0.5, 5);
        this.correctIcon.visible = false;
        this.correctIcon.setTransform(1360, 424);


        this.nastaContainer.addChild(this.nasta, this.nastaText, this.incorrectAnswer, this.incorrectIcon, this.correctIcon);
        this.addChild(this.nastaContainer);

        setTimeout(function() {
            if (typeof btn_newExercise != 'undefined') {
                $(btn_newExercise).removeClass('disabled');
                $(btn_newExercise).show();
            }
        }, 500)

        this.onNewExercise = function(e) {
            if (typeof btn_newExercise != 'undefined') {
                $(btn_newExercise).show();
            }
            resetAll();
        };


    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);

    function ChangeOptions(evt) {
        var obj = evt.target;
        get_color = obj.value;

    }

    function FillColor(evt) {
        var obj = evt.target;
        if (get_color != "") {
            obj.graphics._fillInstructions[0].params[1] = get_color;
            currentStage.img_dustbinPaper.visible = true;
        }
    }

    function FillColorEmpty(evt) {

    }

    function resetAll() {        
        currentStage.img_dustbinPaper.visible = false;
        get_color = "";
        var tempCount = 0;
        for (var i = 0; i < currentStage.children.length; i++) {
            if (viewed_lastImg == 1) {
                if (currentStage.children[i].name == "img1_1") {
                    currentStage.children[i].visible = false;
                    tempCount++;
                } else if (currentStage.children[i].name == "img1_2") {
                    if (currentStage.children[i].value == 0) {
                        currentStage.children[i].graphics._fillInstructions[0].params[1] = "#ffffff";
                    }
                    currentStage.children[i].visible = false;
                    tempCount++;
                }
                if (tempCount == 24) {
                    break;
                }
            } else if (viewed_lastImg == 2) {
                if (currentStage.children[i].name == "img2_1") {
                    currentStage.children[i].visible = false;
                    tempCount++;
                } else if (currentStage.children[i].name == "img2_2") {
                    if (currentStage.children[i].value == 0) {
                        currentStage.children[i].graphics._fillInstructions[0].params[1] = "#ffffff";
                    }
                    currentStage.children[i].visible = false;
                    tempCount++;
                }
                if (tempCount == 62) {
                    break;
                }
            } else if (viewed_lastImg == 3) {
                if (currentStage.children[i].name == "img3_1") {
                    currentStage.children[i].visible = false;
                    tempCount++;
                } else if (currentStage.children[i].name == "img3_2") {
                    if (currentStage.children[i].value == 0) {
                        currentStage.children[i].graphics._fillInstructions[0].params[1] = "#ffffff";
                    }
                    currentStage.children[i].visible = false;
                    tempCount++;
                }
                if (tempCount == 64) {
                    break;
                }
            }
        };


        // randomNumber();
        viewed_lastImages();
        img1color_create();
        Img1_autoFillColor();

        // currentStage.img_dustbinPaper.x = -110;
        // currentStage.img_dustbinPaper.y = 440;

        // currentStage.img_dustbin.x = -110;
        // currentStage.img_dustbin.y = 440;
        stage.update();
        
    }

    function Img1_autoFillColor() {

        // for (var i = 0; i < finalRandomNumber.length; i++) {
        //     if (viewed_lastImg == 1 && lastimage1 != finalRandomNumber[i]) {
        //         lastimage1 = finalRandomNumber[i];
        //         break;
        //     } else if (viewed_lastImg == 2 && lastimage2 != finalRandomNumber[i]) {
        //         lastimage2 = finalRandomNumber[i];
        //         break;
        //     } else if (viewed_lastImg == 3 && lastimage3 != finalRandomNumber[i]) {
        //         lastimage3 = finalRandomNumber[i];
        //         break;
        //     }
        // };


        var tempCount = 0;
        var break_count = 0;
        for (var i = 0; i < currentStage.children.length; i++) {

            if (viewed_lastImg == 1) {
                if (currentStage.children[i].name == "img1_1" || currentStage.children[i].name == "img1_2") {
                    currentStage.children[i].visible = true;
                    break_count++;
                }

                if (currentStage.children[i].name == "img1_1" && currentStage.children[i].value == tempCount) {
                    currentStage.children[i].graphics._fillInstructions[0].params[1] = img1_1_fillColor[tempCount];
                    tempCount++;
                }

                // if (currentStage.children[i].name == "img1_1" && currentStage.children[i].value == tempCount && lastimage1 == 1) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img1_1_fillColor[tempCount];
                //     tempCount++;
                // } else if (currentStage.children[i].name == "img1_1" && currentStage.children[i].value == tempCount && lastimage1 == 2) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img1_1_fillColor[tempCount];
                //     tempCount++;
                // } else if (currentStage.children[i].name == "img1_1" && currentStage.children[i].value == tempCount && lastimage1 == 3) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img1_1_fillColor[tempCount];
                //     tempCount++;
                // } else if (currentStage.children[i].name == "img1_1" && currentStage.children[i].value == tempCount && lastimage1 == 4) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img1_1_fillColor[tempCount];
                //     tempCount++;
                // }
                if (break_count == 24) {
                    break;
                }
            } else if (viewed_lastImg == 2) {


                if (currentStage.children[i].name == "img2_1" || currentStage.children[i].name == "img2_2") {
                    currentStage.children[i].visible = true;
                    break_count++;
                }

                if (currentStage.children[i].name == "img2_1" && currentStage.children[i].value == tempCount) {
                    currentStage.children[i].graphics._fillInstructions[0].params[1] = img2_1_fillColor[tempCount];
                    tempCount++;
                }

                // if (currentStage.children[i].name == "img2_1" && currentStage.children[i].value == tempCount && lastimage2 == 1) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img2_1_fillColor[tempCount];
                //     tempCount++;
                // } else if (currentStage.children[i].name == "img2_1" && currentStage.children[i].value == tempCount && lastimage2 == 2) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img2_1_fillColor[tempCount];
                //     tempCount++;
                // } else if (currentStage.children[i].name == "img2_1" && currentStage.children[i].value == tempCount && lastimage2 == 3) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img2_1_fillColor[tempCount];
                //     tempCount++;
                // } else if (currentStage.children[i].name == "img2_1" && currentStage.children[i].value == tempCount && lastimage2 == 4) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img2_1_fillColor[tempCount];
                //     tempCount++;
                // }
                if (break_count == 62) {
                    break;
                }
            } else if (viewed_lastImg == 3) {


                if (currentStage.children[i].name == "img3_1" || currentStage.children[i].name == "img3_2") {
                    currentStage.children[i].visible = true;
                    break_count++;
                }

                if (currentStage.children[i].name == "img3_1" && currentStage.children[i].value == tempCount) {
                    currentStage.children[i].graphics._fillInstructions[0].params[1] = img3_1_fillColor[tempCount];
                    tempCount++;
                }

                // if (currentStage.children[i].name == "img3_1" && currentStage.children[i].value == tempCount && lastimage3 == 1) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img3_1_fillColor[tempCount];
                //     tempCount++;
                // } else if (currentStage.children[i].name == "img3_1" && currentStage.children[i].value == tempCount && lastimage3 == 2) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img3_1_fillColor[tempCount];
                //     tempCount++;
                // } else if (currentStage.children[i].name == "img3_1" && currentStage.children[i].value == tempCount && lastimage3 == 3) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img3_1_fillColor[tempCount];
                //     tempCount++;
                // } else if (currentStage.children[i].name == "img3_1" && currentStage.children[i].value == tempCount && lastimage3 == 4) {
                //     currentStage.children[i].graphics._fillInstructions[0].params[1] = img3_1_fillColor[tempCount];
                //     tempCount++;
                // }

                if (break_count == 64) {
                    break;
                }
            }
        };

    }

    // function randomNumber() {

    //     var arrRandom = [];
    //     for (var i = 1; i < 5; i++) {
    //         arrRandom.push(i);
    //     }
    //     var returnArr = shuffle(arrRandom);
    //     finalRandomNumber = returnArr;

    // }

    function viewed_lastImages() {
        var arrRandom = [];
        for (var i = 1; i < 4; i++) {
            arrRandom.push(i);
        }
        var returnArr = shuffle(arrRandom);
        for (var j = 0; j < returnArr.length; j++) {
            if (viewed_lastImg != returnArr[j]) {
                viewed_lastImg = returnArr[j];
                break;
            }
        }

    }


    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    var color_code = ['#14B5C9', '#24B24B', '#FFD303', '#DA3A71'];

    function img1color_create() {

        if (viewed_lastImg == 1) {
            for (var j = 0; j < 7; j++) {
                var arrRandom = [];
                for (var i = 1; i < 5; i++) {
                    arrRandom.push(i);
                }
                var returnArr = shuffle(arrRandom);
                img1_1_fillColor[j] = color_code[returnArr[0] - 1];
            }
        } else if (viewed_lastImg == 2) {
            for (var j = 0; j < 18; j++) {
                var arrRandom = [];
                for (var i = 1; i < 5; i++) {
                    arrRandom.push(i);
                }
                var returnArr = shuffle(arrRandom);
                img2_1_fillColor[j] = color_code[returnArr[0] - 1];
            }
        } else if (viewed_lastImg == 3) {
            for (var j = 0; j < 20; j++) {
                var arrRandom = [];
                for (var i = 1; i < 5; i++) {
                    arrRandom.push(i);
                }
                var returnArr = shuffle(arrRandom);
                img3_1_fillColor[j] = color_code[returnArr[0] - 1];
            }
        }

    }


    // stage content:
    (lib.exercise = function() {
        this.initialize();
        this.other = new lib.Basement();
        this.other.setTransform(0, 40, 1, 1);

        this.stage1 = new lib.Stage1();

        this.addChild(this.other, this.stage1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});

var lib, images, createjs;
