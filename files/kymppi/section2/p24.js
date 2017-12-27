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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_11.png");
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
    }).prototype.exec = function() {
        setLineDash(this.instr);
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_1.png",
            id: "p24_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_2.png",
            id: "p24_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_3.png",
            id: "p24_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_4.png",
            id: "p24_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_5.png",
            id: "p24_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_6.png",
            id: "p24_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_7.png",
            id: "p24_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_8.png",
            id: "p24_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_9.png",
            id: "p24_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_10.png",
            id: "p24_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_11.png",
            id: "p24_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_12.png",
            id: "p24_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/even_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p24_1 = function() {
        this.initialize(img.p24_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p24_2 = function() {
        this.initialize(img.p24_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p24_3 = function() {
        this.initialize(img.p24_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p24_4 = function() {
        this.initialize(img.p24_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p24_5 = function() {
        this.initialize(img.p24_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p24_6 = function() {
        this.initialize(img.p24_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p24_7 = function() {
        this.initialize(img.p24_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p24_8 = function() {
        this.initialize(img.p24_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p24_9 = function() {
        this.initialize(img.p24_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p24_10 = function() {
        this.initialize(img.p24_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p24_11 = function() {
        this.initialize(img.p24_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p24_12 = function() {
        this.initialize(img.p24_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.NumSix1 = function() {
        this.initialize();

        var NumSix = new createjs.Container();

        var NumberSix_OuterShape = new createjs.Shape();
        NumberSix_OuterShape.graphics.s('#31B1C9').ss(2).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(150, 46)
            .bezierCurveTo(145, 48, 90, 109, 88, 177)
            .bezierCurveTo(87, 214, 122, 255, 167, 209)
            .bezierCurveTo(177, 199, 192, 152, 171, 130)
            .bezierCurveTo(143, 101, 112, 130, 113, 127)
            .bezierCurveTo(136, 69, 176, 47, 171, 53);

        var NumberSix_innerShape = new createjs.Shape();
        NumberSix_innerShape.graphics.s('#31B1C9').ss(2).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(105, 165)
            .bezierCurveTo(95, 206, 134, 240, 160, 188)
            .bezierCurveTo(179, 159, 158, 113, 124, 139)
            .bezierCurveTo(113, 147, 112, 146, 106, 164);

        NumSix.addChild(NumberSix_OuterShape, NumberSix_innerShape);
        NumSix.setTransform(0, 0, 0.5, 0.5);

        return NumSix;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.NumSix2 = function() {
        this.initialize();

        var NumSix = new createjs.Container();

        var NumberSix_Outer = new createjs.Shape();
        NumberSix_Outer.graphics.s('#DEDEDE').ss(10).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(154, 46)
            .bezierCurveTo(146, 45, 88, 99, 90, 187)
            .bezierCurveTo(91, 211, 134, 264, 173, 201)
            .bezierCurveTo(203, 152, 161, 111, 148, 117)
            .bezierCurveTo(139, 121, 137, 109, 95, 141);

        NumSix.addChild(NumberSix_Outer);
        NumSix.setTransform(0, 0, 0.25, 0.25);

        return NumSix;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Arrow = function() {
        this.initialize();

        var Arrow = new createjs.Container();

        var ArrowRight = new createjs.Shape();
        ArrowRight.graphics.s('#31B1C9').ss(2.5).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(137, 38)
            .bezierCurveTo(126, 50, 94, 79, 82, 115);

        Arrow.addChild(ArrowRight);
        return Arrow;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("24", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tal och antal 6", "9.5px 'ElisarDTInfant-SemiBold'");
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

        this.text_1 = new cjs.Text("Skriv siffran.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, -5);

        this.text_2 = new cjs.Text("Måla kulor.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(28, 14);

        this.instance_1 = new lib.p24_1();
        this.instance_1.setTransform(118, -10, 0.55, 0.52);

        this.instance_2 = new lib.p24_2();
        this.instance_2.setTransform(118, 21, 0.55, 0.52);

        this.instance_3 = new lib.p24_3();
        this.instance_3.setTransform(330, 5, 0.52, 0.52);

        this.instance_4 = new lib.p24_3();
        this.instance_4.setTransform(330, 52, 0.52, 0.52);

        this.text_3 = new cjs.Text("1", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_3.setTransform(344, 25);

        this.text_4 = new cjs.Text("2", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_4.setTransform(371.5, 31.5);

        this.text_5 = new cjs.Text("3", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_5.setTransform(400, 34);

        this.text_6 = new cjs.Text("4", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_6.setTransform(427, 31);

        this.text_7 = new cjs.Text("5", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_7.setTransform(455, 25);

        this.text_8 = new cjs.Text("6", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_8.setTransform(344, 72);

        this.text_9 = new cjs.Text("7", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_9.setTransform(371.5, 78.5);

        this.text_10 = new cjs.Text("8", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_10.setTransform(400, 81);

        this.text_11 = new cjs.Text("9", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_11.setTransform(427, 78);

        this.text_12 = new cjs.Text("10", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_12.setTransform(448, 73);

        this.text_13 = new cjs.Text("1", "13px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_13.setTransform(42, 52);

       
        this.DigitSix1 = new lib.p24_12();
        this.DigitSix1.setTransform(-5, 38, 0.43, 0.43);

        this.addChild(this.headerCircle, this.text_1, this.text_2, this.instance_1, this.instance_2, this.instance_3, this.instance_4,
            this.text_3, this.text_4, this.text_5, this.text_6, this.text_7, this.text_8, this.text_9, this.text_10, this.text_11,
            this.text_12, this.DigitSix1, this.text_13);

        var col_X = 0;

        for (var col = 0; col < 10; col++) {

            if (col > 4) {
                col_X = 161;
            } else {
                col_X = 121;
            }

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(1).drawRect(0, 0, 33, 38);
            this.Rect1.setTransform(col_X + (col * 33), 98);

            this.addChild(this.Rect1);

        }

        var col_X = 0;
        for (var col = 0; col < 5; col++) {

            if (col < 5) {
                col_X = 113;
            } else if (col > 4) {
                col_X = 152;
            }

            this.NumSixShape_1 = new lib.NumSix2();
            this.NumSixShape_1.setTransform(col_X + (col * 33), 92.5, 0.182, 0.182);

            this.addChild(this.NumSixShape_1);
        }

        var col_X = 0;
        for (var col = 0; col < 10; col++) {

            if (col < 5) {
                col_X = 142;
            } else if (col > 4) {
                col_X = 181;
            }

            this.dotShape_1 = new cjs.Shape();
            this.dotShape_1.graphics.f("#4EC0D3").s("#4EC0D3").ss(1, 0, 0, 4).arc(0, 0, 1, 0, 2 * Math.PI);
            this.dotShape_1.setTransform(col_X + (col * 33), 99);

            this.addChild(this.dotShape_1);
        }

        var dotSixContainer_1 = new cjs.Container();

        this.sixDotShape_1 = new cjs.Shape();
        this.sixDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_1.setTransform(343, 102);

        this.sixDotShape_2 = new cjs.Shape();
        this.sixDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_2.setTransform(340.5, 104.5);

        this.sixDotShape_3 = new cjs.Shape();
        this.sixDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_3.setTransform(338, 108);

        this.sixDotShape_4 = new cjs.Shape();
        this.sixDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_4.setTransform(336, 112);

        this.sixDotShape_5 = new cjs.Shape();
        this.sixDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_5.setTransform(335, 116.5);

        this.sixDotShape_6 = new cjs.Shape();
        this.sixDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_6.setTransform(334, 121);

        this.sixDotShape_7 = new cjs.Shape();
        this.sixDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_7.setTransform(333, 125);

        this.sixDotShape_8 = new cjs.Shape();
        this.sixDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_8.setTransform(334, 129);

        this.sixDotShape_9 = new cjs.Shape();
        this.sixDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_9.setTransform(337, 132);

        this.sixDotShape_10 = new cjs.Shape();
        this.sixDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_10.setTransform(341, 134);

        this.sixDotShape_11 = new cjs.Shape();
        this.sixDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_11.setTransform(346, 132.5);

        this.sixDotShape_12 = new cjs.Shape();
        this.sixDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_12.setTransform(349, 128);

        this.sixDotShape_13 = new cjs.Shape();
        this.sixDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_13.setTransform(351, 124);

        this.sixDotShape_14 = new cjs.Shape();
        this.sixDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_14.setTransform(350, 119);

        this.sixDotShape_15 = new cjs.Shape();
        this.sixDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_15.setTransform(348, 115);

        this.sixDotShape_16 = new cjs.Shape();
        this.sixDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_16.setTransform(343, 113);

        this.sixDotShape_17 = new cjs.Shape();
        this.sixDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_17.setTransform(339, 115);

        dotSixContainer_1.addChild(this.sixDotShape_1, this.sixDotShape_2, this.sixDotShape_3, this.sixDotShape_4, this.sixDotShape_5,
            this.sixDotShape_6, this.sixDotShape_7, this.sixDotShape_8, this.sixDotShape_9, this.sixDotShape_10, this.sixDotShape_11,
            this.sixDotShape_12, this.sixDotShape_13, this.sixDotShape_14, this.sixDotShape_15, this.sixDotShape_16,
            this.sixDotShape_17);
        dotSixContainer_1.setTransform(0, 0);

        this.addChild(dotSixContainer_1);

        var dotSixContainer_2 = new cjs.Container();

        this.sixDotShape_1 = new cjs.Shape();
        this.sixDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_1.setTransform(343, 102);

        this.sixDotShape_2 = new cjs.Shape();
        this.sixDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_2.setTransform(340.5, 104.5);

        this.sixDotShape_3 = new cjs.Shape();
        this.sixDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_3.setTransform(338, 108);

        this.sixDotShape_4 = new cjs.Shape();
        this.sixDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_4.setTransform(336, 112);

        this.sixDotShape_5 = new cjs.Shape();
        this.sixDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_5.setTransform(335, 116.5);

        this.sixDotShape_6 = new cjs.Shape();
        this.sixDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_6.setTransform(334, 121);

        this.sixDotShape_7 = new cjs.Shape();
        this.sixDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_7.setTransform(333, 125);

        this.sixDotShape_8 = new cjs.Shape();
        this.sixDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_8.setTransform(334, 129);

        this.sixDotShape_9 = new cjs.Shape();
        this.sixDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_9.setTransform(337, 132);

        this.sixDotShape_10 = new cjs.Shape();
        this.sixDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_10.setTransform(341, 134);

        this.sixDotShape_11 = new cjs.Shape();
        this.sixDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_11.setTransform(346, 132.5);

        this.sixDotShape_12 = new cjs.Shape();
        this.sixDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_12.setTransform(349, 128);

        this.sixDotShape_13 = new cjs.Shape();
        this.sixDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_13.setTransform(351, 124);

        this.sixDotShape_14 = new cjs.Shape();
        this.sixDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_14.setTransform(350, 119);

        this.sixDotShape_15 = new cjs.Shape();
        this.sixDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_15.setTransform(348, 115);

        this.sixDotShape_16 = new cjs.Shape();
        this.sixDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_16.setTransform(343, 113);

        this.sixDotShape_17 = new cjs.Shape();
        this.sixDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_17.setTransform(339, 115);

        dotSixContainer_2.addChild(this.sixDotShape_1, this.sixDotShape_2, this.sixDotShape_3, this.sixDotShape_4, this.sixDotShape_5,
            this.sixDotShape_6, this.sixDotShape_7, this.sixDotShape_8, this.sixDotShape_9, this.sixDotShape_10, this.sixDotShape_11,
            this.sixDotShape_12, this.sixDotShape_13, this.sixDotShape_14, this.sixDotShape_15, this.sixDotShape_16,
            this.sixDotShape_17);
        dotSixContainer_2.setTransform(33, 0);

        this.addChild(dotSixContainer_2);

        var dotSixContainer_3 = new cjs.Container();

        this.sixDotShape_1 = new cjs.Shape();
        this.sixDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_1.setTransform(343, 102);

        this.sixDotShape_2 = new cjs.Shape();
        this.sixDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_2.setTransform(340.5, 104.5);

        this.sixDotShape_3 = new cjs.Shape();
        this.sixDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_3.setTransform(338, 108);

        this.sixDotShape_4 = new cjs.Shape();
        this.sixDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_4.setTransform(336, 112);

        this.sixDotShape_5 = new cjs.Shape();
        this.sixDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_5.setTransform(335, 116.5);

        this.sixDotShape_6 = new cjs.Shape();
        this.sixDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_6.setTransform(334, 121);

        this.sixDotShape_7 = new cjs.Shape();
        this.sixDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_7.setTransform(333, 125);

        this.sixDotShape_8 = new cjs.Shape();
        this.sixDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_8.setTransform(334, 129);

        this.sixDotShape_9 = new cjs.Shape();
        this.sixDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_9.setTransform(337, 132);

        this.sixDotShape_10 = new cjs.Shape();
        this.sixDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_10.setTransform(341, 134);

        this.sixDotShape_11 = new cjs.Shape();
        this.sixDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_11.setTransform(346, 132.5);

        this.sixDotShape_12 = new cjs.Shape();
        this.sixDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_12.setTransform(349, 128);

        this.sixDotShape_13 = new cjs.Shape();
        this.sixDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_13.setTransform(351, 124);

        this.sixDotShape_14 = new cjs.Shape();
        this.sixDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_14.setTransform(350, 119);

        this.sixDotShape_15 = new cjs.Shape();
        this.sixDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_15.setTransform(348, 115);

        this.sixDotShape_16 = new cjs.Shape();
        this.sixDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_16.setTransform(343, 113);

        this.sixDotShape_17 = new cjs.Shape();
        this.sixDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_17.setTransform(339, 115);

        dotSixContainer_3.addChild(this.sixDotShape_1, this.sixDotShape_2, this.sixDotShape_3, this.sixDotShape_4, this.sixDotShape_5,
            this.sixDotShape_6, this.sixDotShape_7, this.sixDotShape_8, this.sixDotShape_9, this.sixDotShape_10, this.sixDotShape_11,
            this.sixDotShape_12, this.sixDotShape_13, this.sixDotShape_14, this.sixDotShape_15, this.sixDotShape_16,
            this.sixDotShape_17);
        dotSixContainer_3.setTransform(65.5, 0);

        this.addChild(dotSixContainer_3);

        var dotSixContainer_4 = new cjs.Container();

        this.sixDotShape_1 = new cjs.Shape();
        this.sixDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_1.setTransform(343, 102);

        this.sixDotShape_2 = new cjs.Shape();
        this.sixDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_2.setTransform(340.5, 104.5);

        this.sixDotShape_3 = new cjs.Shape();
        this.sixDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_3.setTransform(338, 108);

        this.sixDotShape_4 = new cjs.Shape();
        this.sixDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_4.setTransform(336, 112);

        this.sixDotShape_5 = new cjs.Shape();
        this.sixDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_5.setTransform(335, 116.5);

        this.sixDotShape_6 = new cjs.Shape();
        this.sixDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_6.setTransform(334, 121);

        this.sixDotShape_7 = new cjs.Shape();
        this.sixDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_7.setTransform(333, 125);

        this.sixDotShape_8 = new cjs.Shape();
        this.sixDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_8.setTransform(334, 129);

        this.sixDotShape_9 = new cjs.Shape();
        this.sixDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_9.setTransform(337, 132);

        this.sixDotShape_10 = new cjs.Shape();
        this.sixDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_10.setTransform(341, 134);

        this.sixDotShape_11 = new cjs.Shape();
        this.sixDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_11.setTransform(346, 132.5);

        this.sixDotShape_12 = new cjs.Shape();
        this.sixDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_12.setTransform(349, 128);

        this.sixDotShape_13 = new cjs.Shape();
        this.sixDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_13.setTransform(351, 124);

        this.sixDotShape_14 = new cjs.Shape();
        this.sixDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_14.setTransform(350, 119);

        this.sixDotShape_15 = new cjs.Shape();
        this.sixDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_15.setTransform(348, 115);

        this.sixDotShape_16 = new cjs.Shape();
        this.sixDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_16.setTransform(343, 113);

        this.sixDotShape_17 = new cjs.Shape();
        this.sixDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_17.setTransform(339, 115);

        dotSixContainer_4.addChild(this.sixDotShape_1, this.sixDotShape_2, this.sixDotShape_3, this.sixDotShape_4, this.sixDotShape_5,
            this.sixDotShape_6, this.sixDotShape_7, this.sixDotShape_8, this.sixDotShape_9, this.sixDotShape_10, this.sixDotShape_11,
            this.sixDotShape_12, this.sixDotShape_13, this.sixDotShape_14, this.sixDotShape_15, this.sixDotShape_16,
            this.sixDotShape_17);
        dotSixContainer_4.setTransform(99.5, 0);

        this.addChild(dotSixContainer_4);

        var dotSixContainer_5 = new cjs.Container();

        this.sixDotShape_1 = new cjs.Shape();
        this.sixDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_1.setTransform(343, 102);

        this.sixDotShape_2 = new cjs.Shape();
        this.sixDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_2.setTransform(340.5, 104.5);

        this.sixDotShape_3 = new cjs.Shape();
        this.sixDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_3.setTransform(338, 108);

        this.sixDotShape_4 = new cjs.Shape();
        this.sixDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_4.setTransform(336, 112);

        this.sixDotShape_5 = new cjs.Shape();
        this.sixDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_5.setTransform(335, 116.5);

        this.sixDotShape_6 = new cjs.Shape();
        this.sixDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_6.setTransform(334, 121);

        this.sixDotShape_7 = new cjs.Shape();
        this.sixDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_7.setTransform(333, 125);

        this.sixDotShape_8 = new cjs.Shape();
        this.sixDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_8.setTransform(334, 129);

        this.sixDotShape_9 = new cjs.Shape();
        this.sixDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_9.setTransform(337, 132);

        this.sixDotShape_10 = new cjs.Shape();
        this.sixDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_10.setTransform(341, 134);

        this.sixDotShape_11 = new cjs.Shape();
        this.sixDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_11.setTransform(346, 132.5);

        this.sixDotShape_12 = new cjs.Shape();
        this.sixDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_12.setTransform(349, 128);

        this.sixDotShape_13 = new cjs.Shape();
        this.sixDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_13.setTransform(351, 124);

        this.sixDotShape_14 = new cjs.Shape();
        this.sixDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_14.setTransform(350, 119);

        this.sixDotShape_15 = new cjs.Shape();
        this.sixDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_15.setTransform(348, 115);

        this.sixDotShape_16 = new cjs.Shape();
        this.sixDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_16.setTransform(343, 113);

        this.sixDotShape_17 = new cjs.Shape();
        this.sixDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.sixDotShape_17.setTransform(339, 115);

        dotSixContainer_5.addChild(this.sixDotShape_1, this.sixDotShape_2, this.sixDotShape_3, this.sixDotShape_4, this.sixDotShape_5,
            this.sixDotShape_6, this.sixDotShape_7, this.sixDotShape_8, this.sixDotShape_9, this.sixDotShape_10, this.sixDotShape_11,
            this.sixDotShape_12, this.sixDotShape_13, this.sixDotShape_14, this.sixDotShape_15, this.sixDotShape_16,
            this.sixDotShape_17);
        dotSixContainer_5.setTransform(132, 0);

        this.addChild(dotSixContainer_5);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 150);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Rita i bilden.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.Rect1 = new cjs.Shape();
        this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(0.7).drawRoundRect(0, 0, 100, 369, 12);
        this.Rect1.setTransform(32, 21);

        this.addChild(this.headerCircle, this.text_1, this.Rect1);

        for (var row = 0; row < 6; row++) {
            for (var col = 0; col < 14; col++) {
                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(34 + (col * 7), 74 + (row * 53));

                this.addChild(this.hrline_1);
            }
        }

        var splText = [6, 4, 3, 5, 2, 1, 2];
        var count = 0;
        var col_X = 0;
        for (var row = 0; row < 7; row++) {
            var fillText = splText[count];
            count = count + 1;

            if (row == 6) {
                col_X = 40;
            } else {
                col_X = 42;
            }

            this.text_2 = new cjs.Text('' + fillText, "30px 'ElisarDTInfant-Regular'", "#31B1C9");
            this.text_2.setTransform(col_X, 59 + (row * 52.5));

            this.addChild(this.text_2);
        }

        this.instance_3 = new lib.p24_4();
        this.instance_3.setTransform(83, 35, 0.5, 0.5);

        this.instance_4 = new lib.p24_5();
        this.instance_4.setTransform(82, 85, 0.52, 0.52);

        this.instance_5 = new lib.p24_6();
        this.instance_5.setTransform(82, 143, 0.52, 0.52);

        this.instance_6 = new lib.p24_7();
        this.instance_6.setTransform(84, 191, 0.49, 0.49);

        this.instance_7 = new lib.p24_8();
        this.instance_7.setTransform(82, 239, 0.47, 0.47);

        this.instance_8 = new lib.p24_9();
        this.instance_8.setTransform(75, 291, 0.47, 0.47);

        this.instance_9 = new lib.p24_10();
        this.instance_9.setTransform(80, 351, 0.5, 0.5);

        this.instance_10 = new lib.p24_11();
        this.instance_10.setTransform(155, 21, 0.53, 0.53);

        this.addChild(this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8, this.instance_9, this.instance_10);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 410);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 67, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 240, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
