var canvas, stage, exportRoot;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};

    var loader = new createjs.LoadQueue(true, null, true); // allow cross origin images
    loader.addEventListener("fileload", function(evt) {
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    });
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
    // mathviewer.setExerciseTabs(5, 1, ['Tiotal', 'Räkna antal', 'Tallinje', 'Skriva talet 11', 'Skriva talet 12']);
    // mathviewer.setExerciseTabs(1, 1, [''], 'modalViOvar');
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_11.png");
    mathviewer.setIconVisibility(true);
}

function handleComplete() {
    exportRoot = new lib.p6();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    //createjs.Ticker.addEventListener("tick", stage);
}

(function(lib, img, cjs) {

    // Basic implementation that could be added to CreateJS.Graphics
    (cjs.Graphics.Dash = function(instr) {
        if (instr == null) {
            instr = [0];
        }
        this.instr = instr;
    }).prototype.exec = function(ctx) {
        ctx.setLineDash(this.instr);
    };
    cjs.Graphics.prototype.dash = function(instr) {
        return this.append(new cjs.Graphics.Dash(instr));
    }

    var p;
    lib.properties = {
        width: 610,
        height: 678,
        fps: 20,
        color: "#FFFFFF",
        manifest: [{
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_1.png",
            id: "p10_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_2.png",
            id: "p10_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_3.png",
            id: "p10_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_4.png",
            id: "p10_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_5.png",
            id: "p10_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_6.png",
            id: "p10_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_7.png",
            id: "p10_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_8.png",
            id: "p10_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_9.png",
            id: "p10_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_10.png",
            id: "p10_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_11.png",
            id: "p10_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_12.png",
            id: "p10_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_3.png",
            id: "p10_13"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p10_13.png",
            id: "p10_14"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/even_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p10_1 = function() {
        this.initialize(img.p10_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p10_2 = function() {
        this.initialize(img.p10_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p10_3 = function() {
        this.initialize(img.p10_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p10_4 = function() {
        this.initialize(img.p10_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p10_5 = function() {
        this.initialize(img.p10_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p10_6 = function() {
        this.initialize(img.p10_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p10_7 = function() {
        this.initialize(img.p10_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p10_8 = function() {
        this.initialize(img.p10_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p10_9 = function() {
        this.initialize(img.p10_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p10_10 = function() {
        this.initialize(img.p10_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p10_11 = function() {
        this.initialize(img.p10_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p10_12 = function() {
        this.initialize(img.p10_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p10_13 = function() {
        this.initialize(img.p10_13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p10_14 = function() {
        this.initialize(img.p10_14);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.NumThree1 = function() {
        this.initialize();

        var NumThree = new createjs.Container();

        var NumberThree_Outer = new createjs.Shape();
        NumberThree_Outer.graphics.s('#31B1C9').ss(2).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(249, 201)
            .bezierCurveTo(298, 134, 382, 223, 294, 285)
            .bezierCurveTo(291, 287, 349, 282, 325, 367)
            .bezierCurveTo(321, 381, 269, 455, 207, 401);


        var NumberThree_upper = new createjs.Shape();
        NumberThree_upper.graphics.s('#31B1C9').ss(2).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(264, 211)
            .bezierCurveTo(299, 164, 353, 235, 264, 280);

        var NumberThree_lower = new createjs.Shape();
        NumberThree_lower.graphics.s('#31B1C9').ss(2).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(266, 301)
            .bezierCurveTo(360, 294, 290, 445, 220, 386);

        NumThree.addChild(NumberThree_Outer, NumberThree_upper, NumberThree_lower);
        NumThree.setTransform(0, 0, 0.5, 0.5);

        return NumThree;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.NumThree2 = function() {
        this.initialize();

        var NumThree = new createjs.Container();

        var NumberTwo_Outer = new createjs.Shape();
        NumberTwo_Outer.graphics.s('#DEDEDE').ss(15).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(249, 201)
            .bezierCurveTo(298, 134, 382, 223, 294, 285)
            .bezierCurveTo(291, 287, 349, 282, 325, 367)
            .bezierCurveTo(321, 381, 269, 455, 207, 401);

        NumThree.addChild(NumberTwo_Outer);
        NumThree.setTransform(0, 0, 0.25, 0.25);

        return NumThree;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Arrow = function() {
        this.initialize();

        var Arrow = new createjs.Container();

        var ArrowRight = new createjs.Shape();
        ArrowRight.graphics.s('#31B1C9').ss(2.5).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(230, 180)
            .bezierCurveTo(221, 180, 281, 115, 334, 163);

        Arrow.addChild(ArrowRight);
        return Arrow;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("10", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tal och antal 3", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, -10);

        this.text_1 = new cjs.Text("Skriv siffran. Måla kulor.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, -5);

        this.instance_1 = new lib.p10_1();
        this.instance_1.setTransform(114, -2, 0.58, 0.52);

        this.instance_2 = new lib.p10_13();
        this.instance_2.setTransform(322, 21, 0.58, 0.58);

        this.text_2 = new cjs.Text("1", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_2.setTransform(339, 43);

        this.text_3 = new cjs.Text("2", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_3.setTransform(369, 49.5);

        this.text_4 = new cjs.Text("3", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_4.setTransform(400, 52);

        this.text_5 = new cjs.Text("4", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_5.setTransform(431, 51);

        this.text_6 = new cjs.Text("5", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_6.setTransform(462, 43);

        this.text_7 = new cjs.Text("1", "13px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_7.setTransform(45, 25);

        // var ArrowContainer1 = new createjs.Container();

        // this.ArcLine2 = new lib.Arrow();
        // this.ArcLine2.setTransform(23, -45, 0.35, 0.35);

        // this.Arrow2 = new cjs.Shape();
        // this.Arrow2.graphics.f("#ffffff").s("#31B1C9").ss(1).moveTo(44, 6).lineTo(45.5, 12).moveTo(37, 12).lineTo(45.5, 12.25);
        // this.Arrow2.setTransform(95, 0);

        // ArrowContainer1.addChild(this.ArcLine2, this.Arrow2);
        // ArrowContainer1.setTransform(-54, 10);
        // ArrowContainer1.rotation = 5;

        // var textThreeContainer1 = new createjs.Container();

        // this.DigitThree1 = new lib.NumThree1();
        // this.DigitThree1.setTransform(0, 0, 0.5, 0.5);

        // this.textThree1 = new cjs.Shape();
        // this.textThree1.graphics.f("#ffffff").s("#31B1C9").ss(1).moveTo(35, 35).lineTo(42, 40).moveTo(42, 75).lineTo(43, 86)
        //     .moveTo(20, 128).lineTo(14, 136);
        // this.textThree1.setTransform(90, 65);

        // textThreeContainer1.addChild(this.DigitThree1, this.textThree1);
        // textThreeContainer1.setTransform(-35, -25, 0.7, 0.7);

        this.DigitThree_1 = new lib.p10_14();
        this.DigitThree_1.setTransform(15, 15, 0.65, 0.65);

        this.addChild(this.headerCircle, this.text_1, this.instance_1, this.instance_2, this.DigitThree_1,
            this.text_2, this.text_3, this.text_4, this.text_5, this.text_6, this.text_7);

        var col_X = 0;

        for (var col = 0; col < 10; col++) {

            if (col > 4) {
                col_X = 161;
            } else {
                col_X = 121;
            }

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(1).drawRect(0, 0, 33, 38);
            this.Rect1.setTransform(col_X + (col * 33), 80);

            this.addChild(this.Rect1);

        }

        var col_X = 0;

        for (var col = 0; col < 10; col++) {

            if (col < 5) {
                col_X = 135;
            } else if (col > 4) {
                col_X = 176;
            }

            this.dotShape_1 = new cjs.Shape();
            this.dotShape_1.graphics.f("#4EC0D3").s("#4EC0D3").ss(1, 0, 0, 4).arc(0, 0, 1, 0, 2 * Math.PI);
            this.dotShape_1.setTransform(col_X + (col * 33), 85);

            this.addChild(this.dotShape_1);

        }

        for (var col = 0; col < 5; col++) {

            if (col < 5) {
                col_X = 99;
            } else if (col > 4) {
                col_X = 139;
            }

            this.NumThreeShape_1 = new lib.NumThree2();
            this.NumThreeShape_1.setTransform(col_X + (col * 33), 54, 0.15, 0.15);

            this.addChild(this.NumThreeShape_1);
        }

        var dotThreeContainer_1 = new cjs.Container();

        this.threeDotShape_1 = new cjs.Shape();
        this.threeDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_1.setTransform(344.5, 82);

        this.threeDotShape_2 = new cjs.Shape();
        this.threeDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_2.setTransform(350, 81.5);

        this.threeDotShape_3 = new cjs.Shape();
        this.threeDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_3.setTransform(353, 85);

        this.threeDotShape_4 = new cjs.Shape();
        this.threeDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_4.setTransform(353, 89.25);

        this.threeDotShape_5 = new cjs.Shape();
        this.threeDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_5.setTransform(351.5, 93);

        this.threeDotShape_6 = new cjs.Shape();
        this.threeDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_6.setTransform(348, 96.25);

        this.threeDotShape_7 = new cjs.Shape();
        this.threeDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_7.setTransform(352, 99);

        this.threeDotShape_8 = new cjs.Shape();
        this.threeDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_8.setTransform(354, 103);

        this.threeDotShape_9 = new cjs.Shape();
        this.threeDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_9.setTransform(353.5, 107);

        this.threeDotShape_10 = new cjs.Shape();
        this.threeDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_10.setTransform(352, 111);

        this.threeDotShape_11 = new cjs.Shape();
        this.threeDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_11.setTransform(348.5, 114);

        this.threeDotShape_12 = new cjs.Shape();
        this.threeDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_12.setTransform(345, 116);

        this.threeDotShape_13 = new cjs.Shape();
        this.threeDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_13.setTransform(341, 116);

        this.threeDotShape_14 = new cjs.Shape();
        this.threeDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_14.setTransform(337, 114.5);

        dotThreeContainer_1.addChild(this.threeDotShape_1, this.threeDotShape_2, this.threeDotShape_3, this.threeDotShape_4, this.threeDotShape_5,
            this.threeDotShape_6, this.threeDotShape_7, this.threeDotShape_8, this.threeDotShape_9, this.threeDotShape_10, this.threeDotShape_11,
            this.threeDotShape_12, this.threeDotShape_13, this.threeDotShape_14);

        this.addChild(dotThreeContainer_1);

        var dotThreeContainer_2 = new cjs.Container();

        this.threeDotShape_1 = new cjs.Shape();
        this.threeDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_1.setTransform(344.5, 82);

        this.threeDotShape_2 = new cjs.Shape();
        this.threeDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_2.setTransform(350, 81.5);

        this.threeDotShape_3 = new cjs.Shape();
        this.threeDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_3.setTransform(353, 85);

        this.threeDotShape_4 = new cjs.Shape();
        this.threeDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_4.setTransform(353, 89.25);

        this.threeDotShape_5 = new cjs.Shape();
        this.threeDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_5.setTransform(351.5, 93);

        this.threeDotShape_6 = new cjs.Shape();
        this.threeDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_6.setTransform(348, 96.25);

        this.threeDotShape_7 = new cjs.Shape();
        this.threeDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_7.setTransform(352, 99);

        this.threeDotShape_8 = new cjs.Shape();
        this.threeDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_8.setTransform(354, 103);

        this.threeDotShape_9 = new cjs.Shape();
        this.threeDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_9.setTransform(353.5, 107);

        this.threeDotShape_10 = new cjs.Shape();
        this.threeDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_10.setTransform(352, 111);

        this.threeDotShape_11 = new cjs.Shape();
        this.threeDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_11.setTransform(348.5, 114);

        this.threeDotShape_12 = new cjs.Shape();
        this.threeDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_12.setTransform(345, 116);

        this.threeDotShape_13 = new cjs.Shape();
        this.threeDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_13.setTransform(341, 116);

        this.threeDotShape_14 = new cjs.Shape();
        this.threeDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_14.setTransform(337, 114.5);

        dotThreeContainer_2.addChild(this.threeDotShape_1, this.threeDotShape_2, this.threeDotShape_3, this.threeDotShape_4, this.threeDotShape_5,
            this.threeDotShape_6, this.threeDotShape_7, this.threeDotShape_8, this.threeDotShape_9, this.threeDotShape_10, this.threeDotShape_11,
            this.threeDotShape_12, this.threeDotShape_13, this.threeDotShape_14);

        dotThreeContainer_2.setTransform(33, 0);
        this.addChild(dotThreeContainer_2);

        var dotThreeContainer_3 = new cjs.Container();

        this.threeDotShape_1 = new cjs.Shape();
        this.threeDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_1.setTransform(344.5, 82);

        this.threeDotShape_2 = new cjs.Shape();
        this.threeDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_2.setTransform(350, 81.5);

        this.threeDotShape_3 = new cjs.Shape();
        this.threeDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_3.setTransform(353, 85);

        this.threeDotShape_4 = new cjs.Shape();
        this.threeDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_4.setTransform(353, 89.25);

        this.threeDotShape_5 = new cjs.Shape();
        this.threeDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_5.setTransform(351.5, 93);

        this.threeDotShape_6 = new cjs.Shape();
        this.threeDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_6.setTransform(348, 96.25);

        this.threeDotShape_7 = new cjs.Shape();
        this.threeDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_7.setTransform(352, 99);

        this.threeDotShape_8 = new cjs.Shape();
        this.threeDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_8.setTransform(354, 103);

        this.threeDotShape_9 = new cjs.Shape();
        this.threeDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_9.setTransform(353.5, 107);

        this.threeDotShape_10 = new cjs.Shape();
        this.threeDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_10.setTransform(352, 111);

        this.threeDotShape_11 = new cjs.Shape();
        this.threeDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_11.setTransform(348.5, 114);

        this.threeDotShape_12 = new cjs.Shape();
        this.threeDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_12.setTransform(345, 116);

        this.threeDotShape_13 = new cjs.Shape();
        this.threeDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_13.setTransform(341, 116);

        this.threeDotShape_14 = new cjs.Shape();
        this.threeDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_14.setTransform(337, 114.5);

        dotThreeContainer_3.addChild(this.threeDotShape_1, this.threeDotShape_2, this.threeDotShape_3, this.threeDotShape_4, this.threeDotShape_5,
            this.threeDotShape_6, this.threeDotShape_7, this.threeDotShape_8, this.threeDotShape_9, this.threeDotShape_10, this.threeDotShape_11,
            this.threeDotShape_12, this.threeDotShape_13, this.threeDotShape_14);

        dotThreeContainer_3.setTransform(66, 0);
        this.addChild(dotThreeContainer_3);

        var dotThreeContainer_4 = new cjs.Container();

        this.threeDotShape_1 = new cjs.Shape();
        this.threeDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_1.setTransform(344.5, 82);

        this.threeDotShape_2 = new cjs.Shape();
        this.threeDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_2.setTransform(350, 81.5);

        this.threeDotShape_3 = new cjs.Shape();
        this.threeDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_3.setTransform(353, 85);

        this.threeDotShape_4 = new cjs.Shape();
        this.threeDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_4.setTransform(353, 89.25);

        this.threeDotShape_5 = new cjs.Shape();
        this.threeDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_5.setTransform(351.5, 93);

        this.threeDotShape_6 = new cjs.Shape();
        this.threeDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_6.setTransform(348, 96.25);

        this.threeDotShape_7 = new cjs.Shape();
        this.threeDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_7.setTransform(352, 99);

        this.threeDotShape_8 = new cjs.Shape();
        this.threeDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_8.setTransform(354, 103);

        this.threeDotShape_9 = new cjs.Shape();
        this.threeDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_9.setTransform(353.5, 107);

        this.threeDotShape_10 = new cjs.Shape();
        this.threeDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_10.setTransform(352, 111);

        this.threeDotShape_11 = new cjs.Shape();
        this.threeDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_11.setTransform(348.5, 114);

        this.threeDotShape_12 = new cjs.Shape();
        this.threeDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_12.setTransform(345, 116);

        this.threeDotShape_13 = new cjs.Shape();
        this.threeDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_13.setTransform(341, 116);

        this.threeDotShape_14 = new cjs.Shape();
        this.threeDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_14.setTransform(337, 114.5);

        dotThreeContainer_4.addChild(this.threeDotShape_1, this.threeDotShape_2, this.threeDotShape_3, this.threeDotShape_4, this.threeDotShape_5,
            this.threeDotShape_6, this.threeDotShape_7, this.threeDotShape_8, this.threeDotShape_9, this.threeDotShape_10, this.threeDotShape_11,
            this.threeDotShape_12, this.threeDotShape_13, this.threeDotShape_14);

        dotThreeContainer_4.setTransform(99, 0);
        this.addChild(dotThreeContainer_4);

        var dotThreeContainer_5 = new cjs.Container();

        this.threeDotShape_1 = new cjs.Shape();
        this.threeDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_1.setTransform(344.5, 82);

        this.threeDotShape_2 = new cjs.Shape();
        this.threeDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_2.setTransform(350, 81.5);

        this.threeDotShape_3 = new cjs.Shape();
        this.threeDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_3.setTransform(353, 85);

        this.threeDotShape_4 = new cjs.Shape();
        this.threeDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_4.setTransform(353, 89.25);

        this.threeDotShape_5 = new cjs.Shape();
        this.threeDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_5.setTransform(351.5, 93);

        this.threeDotShape_6 = new cjs.Shape();
        this.threeDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_6.setTransform(348, 96.25);

        this.threeDotShape_7 = new cjs.Shape();
        this.threeDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_7.setTransform(352, 99);

        this.threeDotShape_8 = new cjs.Shape();
        this.threeDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_8.setTransform(354, 103);

        this.threeDotShape_9 = new cjs.Shape();
        this.threeDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_9.setTransform(353.5, 107);

        this.threeDotShape_10 = new cjs.Shape();
        this.threeDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_10.setTransform(352, 111);

        this.threeDotShape_11 = new cjs.Shape();
        this.threeDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_11.setTransform(348.5, 114);

        this.threeDotShape_12 = new cjs.Shape();
        this.threeDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_12.setTransform(345, 116);

        this.threeDotShape_13 = new cjs.Shape();
        this.threeDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_13.setTransform(341, 116);

        this.threeDotShape_14 = new cjs.Shape();
        this.threeDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.threeDotShape_14.setTransform(337, 114.5);

        dotThreeContainer_5.addChild(this.threeDotShape_1, this.threeDotShape_2, this.threeDotShape_3, this.threeDotShape_4, this.threeDotShape_5,
            this.threeDotShape_6, this.threeDotShape_7, this.threeDotShape_8, this.threeDotShape_9, this.threeDotShape_10, this.threeDotShape_11,
            this.threeDotShape_12, this.threeDotShape_13, this.threeDotShape_14);

        dotThreeContainer_5.setTransform(132, 0);
        this.addChild(dotThreeContainer_5);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 125);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_2 = new cjs.Text("Räkna i bilden. Skriv antal.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(28, 5);

        this.instance_1 = new lib.p10_2();
        this.instance_1.setTransform(17, 32, 0.53, 0.53);

        this.addChild(this.headerCircle, this.text_2, this.instance_1);

        for (var col = 0; col < 1; col++) {
            for (var row = 0; row < 53; row++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(384, 15 + (row * 7));

                this.addChild(this.vrline_1);
            }
        }

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 31; col++) {
                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(275 + (col * 7), 86 + (row * 75));

                this.addChild(this.hrline_1);
            }
        }

        for (var row = 0; row < 5; row++) {
            for (var col = 0; col < 2; col++) {
                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 30, 36);
                this.Rect1.setTransform(345 + (col * 115), 40 + (row * 75));

                this.addChild(this.Rect1);
            }
        }

        this.instance_2 = new lib.p10_3();
        this.instance_2.setTransform(267, 18, 0.52, 0.52);

        this.instance_3 = new lib.p10_4();
        this.instance_3.setTransform(408, 2, 0.5, 0.5);

        this.instance_4 = new lib.p10_5();
        this.instance_4.setTransform(255, 100, 0.55, 0.55);

        this.instance_5 = new lib.p10_6();
        this.instance_5.setTransform(410, 113, 0.52, 0.52);

        this.instance_6 = new lib.p10_7();
        this.instance_6.setTransform(294, 195, 0.55, 0.55);

        this.instance_7 = new lib.p10_8();
        this.instance_7.setTransform(410, 184, 0.52, 0.52);

        this.instance_8 = new lib.p10_9();
        this.instance_8.setTransform(268, 256, 0.55, 0.55);

        this.instance_9 = new lib.p10_10();
        this.instance_9.setTransform(392, 258, 0.52, 0.52);

        this.instance_10 = new lib.p10_11();
        this.instance_10.setTransform(280, 336, 0.55, 0.55);

        this.instance_11 = new lib.p10_12();
        this.instance_11.setTransform(400, 317, 0.52, 0.52);


        this.addChild(this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8, this.instance_9, this.instance_10, this.instance_11);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 390);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 67, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 232, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
