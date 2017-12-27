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
    // mathviewer.setExerciseTabs(1, 6, [''], 'modalViOvar');
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_1.png",
            id: "p6_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_2.png",
            id: "p6_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_3.png",
            id: "p6_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_4.png",
            id: "p6_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_5.png",
            id: "p6_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_6.png",
            id: "p6_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_7.png",
            id: "p6_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_8.png",
            id: "p6_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_9.png",
            id: "p6_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_10.png",
            id: "p6_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_11.png",
            id: "p6_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/even_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p6_1 = function() {
        this.initialize(img.p6_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p6_2 = function() {
        this.initialize(img.p6_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p6_3 = function() {
        this.initialize(img.p6_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p6_4 = function() {
        this.initialize(img.p6_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p6_5 = function() {
        this.initialize(img.p6_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p6_6 = function() {
        this.initialize(img.p6_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p6_7 = function() {
        this.initialize(img.p6_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p6_8 = function() {
        this.initialize(img.p6_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p6_9 = function() {
        this.initialize(img.p6_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p6_10 = function() {
        this.initialize(img.p6_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p6_11 = function() {
        this.initialize(img.p6_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.NumTwo = function() {
        this.initialize();

        var NumTwo = new createjs.Container();

        var NumberTwo_Outer = new createjs.Shape();
        NumberTwo_Outer.graphics.s('#DEDEDE').ss(5).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(122, 100)
            .bezierCurveTo(129, 72, 199, 85, 165, 142);

        NumTwo.addChild(NumberTwo_Outer);
        return NumTwo;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Arrow = function() {
        this.initialize();

        var Arrow = new createjs.Container();

        var ArrowRight = new createjs.Shape();
        ArrowRight.graphics.s('#31B1C9').ss(1).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(113, 94)
            .bezierCurveTo(113, 90, 149, 46, 185, 94);

        Arrow.addChild(ArrowRight);
        return Arrow;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("6", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tal och antal 1 och 2", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Skriv siffran. Måla kulor.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.instance_1 = new lib.p6_1();
        this.instance_1.setTransform(112, 27, 0.52, 0.52);

        this.instance_2 = new lib.p6_3();
        this.instance_2.setTransform(322, 33, 0.58, 0.58);

        this.text_2 = new cjs.Text("1", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_2.setTransform(339, 55);

        this.text_3 = new cjs.Text("2", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_3.setTransform(369, 61.5);

        this.text_4 = new cjs.Text("3", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_4.setTransform(400, 64);

        this.text_5 = new cjs.Text("4", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_5.setTransform(431, 63);

        this.text_6 = new cjs.Text("5", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_6.setTransform(462, 55);

        this.text_7 = new cjs.Text("1", "13px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_7.setTransform(29, 79);

        var ArrowContainer1 = new createjs.Container();

        this.ArcLine1 = new cjs.Shape();
        this.ArcLine1.graphics.f("#ffffff").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(0, 26);
        this.ArcLine1.setTransform(48, 33);

        this.Arrow1 = new cjs.Shape();
        this.Arrow1.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(4, 5).lineTo(8, 0);
        this.Arrow1.setTransform(44, 56);

        ArrowContainer1.addChild(this.ArcLine1, this.Arrow1);
        ArrowContainer1.setTransform(5, 30);
        ArrowContainer1.rotation = 10;

        this.DigitOne = new cjs.Shape();
        this.DigitOne.graphics.f("#ffffff").s("#31B1C9").ss(1).moveTo(10, 0).lineTo(17, 0).lineTo(7, 80).lineTo(0, 80).lineTo(10, 0);
        this.DigitOne.setTransform(52, 70);

        this.addChild(this.headerCircle, this.text_1, this.instance_1, this.instance_2, this.text_2, this.text_3, this.text_4, this.text_5,
            this.text_6, this.text_7, this.text_8, ArrowContainer1, this.DigitOne, this.text_7);

        var col_X = 0;
        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 10; col++) {

                if (col > 4) {
                    col_X = 161;
                } else {
                    col_X = 121;
                }

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(1).drawRect(0, 0, 33, 38);
                this.Rect1.setTransform(col_X + (col * 33), 89);

                this.addChild(this.Rect1);
            }
        }

        var col_X = 0;
        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 10; col++) {

                if (row == 0 && col < 5) {
                    col_X = 140;
                } else if (row == 0 && col > 4) {
                    col_X = 180;
                } else if (row == 1 && col < 5) {
                    col_X = 132;
                } else if (row == 1 && col > 4) {
                    col_X = 172;
                }

                this.dotShape_1 = new cjs.Shape();
                this.dotShape_1.graphics.f("#4EC0D3").s("#4EC0D3").ss(1, 0, 0, 4).arc(0, 0, 1, 0, 2 * Math.PI);
                this.dotShape_1.setTransform(col_X + (col * 33), 91);

                this.addChild(this.dotShape_1);
            }
        }

        for (var col = 0; col < 5; col++) {

            this.NumOneShape_1 = new cjs.Shape();
            this.NumOneShape_1.graphics.f("#ffffff").s("#DEDEDE").ss(2).moveTo(5, 0).lineTo(0, 34);
            this.NumOneShape_1.setTransform(135 + (col * 33), 92.5);

            this.addChild(this.NumOneShape_1);
        }

        var dottedOneContainer1 = new cjs.Container();

        var dot_X = 344,
            dot_Y = 95;
        for (var row = 0; row < 8; row++) {
            this.NumOneDottedShape_1 = new cjs.Shape();
            this.NumOneDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumOneDottedShape_1.setTransform(dot_X, dot_Y);

            dottedOneContainer1.addChild(this.NumOneDottedShape_1);
            this.addChild(dottedOneContainer1);
            dot_X = dot_X - 0.75;
            dot_Y = dot_Y + 4.3;
        }

        var dottedOneContainer2 = new cjs.Container();

        var dot_X = 377,
            dot_Y = 95;
        for (var row = 0; row < 8; row++) {
            this.NumOneDottedShape_2 = new cjs.Shape();
            this.NumOneDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumOneDottedShape_2.setTransform(dot_X, dot_Y);

            dottedOneContainer2.addChild(this.NumOneDottedShape_2);
            this.addChild(dottedOneContainer2);
            dot_X = dot_X - 0.75;
            dot_Y = dot_Y + 4.3;
        }

        var dottedOneContainer3 = new cjs.Container();

        var dot_X = 410,
            dot_Y = 95;
        for (var row = 0; row < 8; row++) {
            this.NumOneDottedShape_3 = new cjs.Shape();
            this.NumOneDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumOneDottedShape_3.setTransform(dot_X, dot_Y);

            dottedOneContainer3.addChild(this.NumOneDottedShape_3);
            this.addChild(dottedOneContainer3);
            dot_X = dot_X - 0.75;
            dot_Y = dot_Y + 4.3;
        }

        var dottedOneContainer4 = new cjs.Container();

        var dot_X = 443,
            dot_Y = 95;
        for (var row = 0; row < 8; row++) {
            this.NumOneDottedShape_4 = new cjs.Shape();
            this.NumOneDottedShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumOneDottedShape_4.setTransform(dot_X, dot_Y);

            dottedOneContainer4.addChild(this.NumOneDottedShape_4);
            this.addChild(dottedOneContainer4);
            dot_X = dot_X - 0.75;
            dot_Y = dot_Y + 4.3;
        }

        var dottedOneContainer5 = new cjs.Container();

        var dot_X = 476,
            dot_Y = 95;
        for (var row = 0; row < 8; row++) {
            this.NumOneDottedShape_5 = new cjs.Shape();
            this.NumOneDottedShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumOneDottedShape_5.setTransform(dot_X, dot_Y);

            dottedOneContainer5.addChild(this.NumOneDottedShape_5);
            this.addChild(dottedOneContainer5);
            dot_X = dot_X - 0.75;
            dot_Y = dot_Y + 4.3;
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 180);


    (lib.Symbol3 = function() {
        this.initialize();

        this.instance_1 = new lib.p6_2();
        this.instance_1.setTransform(112, 0, 0.52, 0.52);

        this.instance_2 = new lib.p6_3();
        this.instance_2.setTransform(322, 41, 0.58, 0.58);

        this.text_1 = new cjs.Text("1", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_1.setTransform(339, 63);

        this.text_2 = new cjs.Text("2", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_2.setTransform(369, 69);

        this.text_3 = new cjs.Text("3", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_3.setTransform(400, 72);

        this.text_4 = new cjs.Text("4", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_4.setTransform(431, 71);

        this.text_5 = new cjs.Text("5", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_5.setTransform(462, 63);

        this.text_6 = new cjs.Text("1", "13px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_6.setTransform(30, 45);

        this.DigitTwo_1 = new lib.p6_10();
        this.DigitTwo_1.setTransform(0, 28, 0.65, 0.65);

        this.addChild(this.instance_1, this.instance_2, this.text_1, this.text_2, this.text_3, this.text_4, this.text_5, this.DigitTwo_1, this.text_6);

        var col_X = 0;
        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 10; col++) {

                if (col > 4) {
                    col_X = 161;
                } else {
                    col_X = 121;
                }

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(1).drawRect(0, 0, 33, 38);
                this.Rect1.setTransform(col_X + (col * 33), 99);

                this.addChild(this.Rect1);
            }
        }

        for (var col = 0; col < 5; col++) {

            var textTwoContainer2 = new createjs.Container();

            this.DigitTwo2 = new lib.p6_11();
            this.DigitTwo2.setTransform(25, 67, 0.665, 0.665);

            textTwoContainer2.addChild(this.DigitTwo2);
            textTwoContainer2.setTransform(115 + (col * 33), 66, 0.5, 0.5);

            this.addChild(textTwoContainer2);
        }

        var dottedTwoContainer1 = new cjs.Container();

        this.NumTwoDottedShape_1 = new cjs.Shape();
        this.NumTwoDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_1.setTransform(339, 236);

        this.NumTwoDottedShape_2 = new cjs.Shape();
        this.NumTwoDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_2.setTransform(342.5, 233.75);

        this.NumTwoDottedShape_3 = new cjs.Shape();
        this.NumTwoDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_3.setTransform(347, 234);

        this.NumTwoDottedShape_4 = new cjs.Shape();
        this.NumTwoDottedShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_4.setTransform(351, 236);

        this.NumTwoDottedShape_5 = new cjs.Shape();
        this.NumTwoDottedShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_5.setTransform(352, 240);

        this.NumTwoDottedShape_6 = new cjs.Shape();
        this.NumTwoDottedShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_6.setTransform(351, 244);

        this.NumTwoDottedShape_7 = new cjs.Shape();
        this.NumTwoDottedShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_7.setTransform(349, 248);

        dottedTwoContainer1.addChild(this.NumTwoDottedShape_1, this.NumTwoDottedShape_2, this.NumTwoDottedShape_3, this.NumTwoDottedShape_4,
            this.NumTwoDottedShape_5, this.NumTwoDottedShape_6, this.NumTwoDottedShape_7);

        var dot_X = 346,
            dot_Y = 252;

        for (var row = 0; row < 4; row++) {
            this.NumTwoDottedShape_8 = new cjs.Shape();
            this.NumTwoDottedShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumTwoDottedShape_8.setTransform(dot_X, dot_Y);

            dottedTwoContainer1.addChild(this.NumTwoDottedShape_8);

            dot_X = dot_X - 3;
            dot_Y = dot_Y + 4;

            this.addChild(dottedTwoContainer1);
        }

        var dot_X = 335,
            dot_Y = 268;

        for (var col = 0; col < 5; col++) {
            this.NumTwoDottedShape9 = new cjs.Shape();
            this.NumTwoDottedShape9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumTwoDottedShape9.setTransform(dot_X, dot_Y);

            dottedTwoContainer1.addChild(this.NumTwoDottedShape9);

            dot_X = dot_X + 4;

            this.addChild(dottedTwoContainer1);
        }

        dottedTwoContainer1.setTransform(0, -133);

        var dottedTwoContainer2 = new cjs.Container();

        this.NumTwoDottedShape_1 = new cjs.Shape();
        this.NumTwoDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_1.setTransform(339, 236);

        this.NumTwoDottedShape_2 = new cjs.Shape();
        this.NumTwoDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_2.setTransform(342.5, 233.75);

        this.NumTwoDottedShape_3 = new cjs.Shape();
        this.NumTwoDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_3.setTransform(347, 234);

        this.NumTwoDottedShape_4 = new cjs.Shape();
        this.NumTwoDottedShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_4.setTransform(351, 236);

        this.NumTwoDottedShape_5 = new cjs.Shape();
        this.NumTwoDottedShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_5.setTransform(352, 240);

        this.NumTwoDottedShape_6 = new cjs.Shape();
        this.NumTwoDottedShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_6.setTransform(351, 244);

        this.NumTwoDottedShape_7 = new cjs.Shape();
        this.NumTwoDottedShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_7.setTransform(349, 248);

        dottedTwoContainer2.addChild(this.NumTwoDottedShape_1, this.NumTwoDottedShape_2, this.NumTwoDottedShape_3, this.NumTwoDottedShape_4,
            this.NumTwoDottedShape_5, this.NumTwoDottedShape_6, this.NumTwoDottedShape_7);

        var dot_X = 346,
            dot_Y = 252;

        for (var row = 0; row < 4; row++) {
            this.NumTwoDottedShape_8 = new cjs.Shape();
            this.NumTwoDottedShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumTwoDottedShape_8.setTransform(dot_X, dot_Y);

            dottedTwoContainer2.addChild(this.NumTwoDottedShape_8);

            dot_X = dot_X - 3;
            dot_Y = dot_Y + 4;

            this.addChild(dottedTwoContainer2);
        }

        var dot_X = 335,
            dot_Y = 268;

        for (var col = 0; col < 5; col++) {
            this.NumTwoDottedShape9 = new cjs.Shape();
            this.NumTwoDottedShape9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumTwoDottedShape9.setTransform(dot_X, dot_Y);

            dottedTwoContainer2.addChild(this.NumTwoDottedShape9);

            dot_X = dot_X + 4;

            this.addChild(dottedTwoContainer2);
        }

        dottedTwoContainer2.setTransform(33, -133);

        var dottedTwoContainer3 = new cjs.Container();

        this.NumTwoDottedShape_1 = new cjs.Shape();
        this.NumTwoDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_1.setTransform(339, 236);

        this.NumTwoDottedShape_2 = new cjs.Shape();
        this.NumTwoDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_2.setTransform(342.5, 233.75);

        this.NumTwoDottedShape_3 = new cjs.Shape();
        this.NumTwoDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_3.setTransform(347, 234);

        this.NumTwoDottedShape_4 = new cjs.Shape();
        this.NumTwoDottedShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_4.setTransform(351, 236);

        this.NumTwoDottedShape_5 = new cjs.Shape();
        this.NumTwoDottedShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_5.setTransform(352, 240);

        this.NumTwoDottedShape_6 = new cjs.Shape();
        this.NumTwoDottedShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_6.setTransform(351, 244);

        this.NumTwoDottedShape_7 = new cjs.Shape();
        this.NumTwoDottedShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_7.setTransform(349, 248);

        dottedTwoContainer3.addChild(this.NumTwoDottedShape_1, this.NumTwoDottedShape_2, this.NumTwoDottedShape_3, this.NumTwoDottedShape_4,
            this.NumTwoDottedShape_5, this.NumTwoDottedShape_6, this.NumTwoDottedShape_7);

        var dot_X = 346,
            dot_Y = 252;

        for (var row = 0; row < 4; row++) {
            this.NumTwoDottedShape_8 = new cjs.Shape();
            this.NumTwoDottedShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumTwoDottedShape_8.setTransform(dot_X, dot_Y);

            dottedTwoContainer3.addChild(this.NumTwoDottedShape_8);

            dot_X = dot_X - 3;
            dot_Y = dot_Y + 4;

            this.addChild(dottedTwoContainer3);
        }

        var dot_X = 335,
            dot_Y = 268;

        for (var col = 0; col < 5; col++) {
            this.NumTwoDottedShape9 = new cjs.Shape();
            this.NumTwoDottedShape9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumTwoDottedShape9.setTransform(dot_X, dot_Y);

            dottedTwoContainer3.addChild(this.NumTwoDottedShape9);

            dot_X = dot_X + 4;

            this.addChild(dottedTwoContainer3);
        }

        dottedTwoContainer3.setTransform(66, -133);

        var dottedTwoContainer4 = new cjs.Container();

        this.NumTwoDottedShape_1 = new cjs.Shape();
        this.NumTwoDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_1.setTransform(339, 236);

        this.NumTwoDottedShape_2 = new cjs.Shape();
        this.NumTwoDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_2.setTransform(342.5, 233.75);

        this.NumTwoDottedShape_3 = new cjs.Shape();
        this.NumTwoDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_3.setTransform(347, 234);

        this.NumTwoDottedShape_4 = new cjs.Shape();
        this.NumTwoDottedShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_4.setTransform(351, 236);

        this.NumTwoDottedShape_5 = new cjs.Shape();
        this.NumTwoDottedShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_5.setTransform(352, 240);

        this.NumTwoDottedShape_6 = new cjs.Shape();
        this.NumTwoDottedShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_6.setTransform(351, 244);

        this.NumTwoDottedShape_7 = new cjs.Shape();
        this.NumTwoDottedShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_7.setTransform(349, 248);

        dottedTwoContainer4.addChild(this.NumTwoDottedShape_1, this.NumTwoDottedShape_2, this.NumTwoDottedShape_3, this.NumTwoDottedShape_4,
            this.NumTwoDottedShape_5, this.NumTwoDottedShape_6, this.NumTwoDottedShape_7);

        var dot_X = 346,
            dot_Y = 252;

        for (var row = 0; row < 4; row++) {
            this.NumTwoDottedShape_8 = new cjs.Shape();
            this.NumTwoDottedShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumTwoDottedShape_8.setTransform(dot_X, dot_Y);

            dottedTwoContainer4.addChild(this.NumTwoDottedShape_8);

            dot_X = dot_X - 3;
            dot_Y = dot_Y + 4;

            this.addChild(dottedTwoContainer4);
        }

        var dot_X = 335,
            dot_Y = 268;

        for (var col = 0; col < 5; col++) {
            this.NumTwoDottedShape9 = new cjs.Shape();
            this.NumTwoDottedShape9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumTwoDottedShape9.setTransform(dot_X, dot_Y);

            dottedTwoContainer4.addChild(this.NumTwoDottedShape9);

            dot_X = dot_X + 4;

            this.addChild(dottedTwoContainer4);
        }

        dottedTwoContainer4.setTransform(99, -133);

        var dottedTwoContainer5 = new cjs.Container();

        this.NumTwoDottedShape_1 = new cjs.Shape();
        this.NumTwoDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_1.setTransform(339, 236);

        this.NumTwoDottedShape_2 = new cjs.Shape();
        this.NumTwoDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_2.setTransform(342.5, 233.75);

        this.NumTwoDottedShape_3 = new cjs.Shape();
        this.NumTwoDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_3.setTransform(347, 234);

        this.NumTwoDottedShape_4 = new cjs.Shape();
        this.NumTwoDottedShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_4.setTransform(351, 236);

        this.NumTwoDottedShape_5 = new cjs.Shape();
        this.NumTwoDottedShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_5.setTransform(352, 240);

        this.NumTwoDottedShape_6 = new cjs.Shape();
        this.NumTwoDottedShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_6.setTransform(351, 244);

        this.NumTwoDottedShape_7 = new cjs.Shape();
        this.NumTwoDottedShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumTwoDottedShape_7.setTransform(349, 248);

        dottedTwoContainer5.addChild(this.NumTwoDottedShape_1, this.NumTwoDottedShape_2, this.NumTwoDottedShape_3, this.NumTwoDottedShape_4,
            this.NumTwoDottedShape_5, this.NumTwoDottedShape_6, this.NumTwoDottedShape_7);

        var dot_X = 346,
            dot_Y = 252;

        for (var row = 0; row < 4; row++) {
            this.NumTwoDottedShape_8 = new cjs.Shape();
            this.NumTwoDottedShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumTwoDottedShape_8.setTransform(dot_X, dot_Y);

            dottedTwoContainer5.addChild(this.NumTwoDottedShape_8);

            dot_X = dot_X - 3;
            dot_Y = dot_Y + 4;

            this.addChild(dottedTwoContainer5);
        }

        var dot_X = 335,
            dot_Y = 268;

        for (var col = 0; col < 5; col++) {
            this.NumTwoDottedShape9 = new cjs.Shape();
            this.NumTwoDottedShape9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumTwoDottedShape9.setTransform(dot_X, dot_Y);

            dottedTwoContainer5.addChild(this.NumTwoDottedShape9);

            dot_X = dot_X + 4;

            this.addChild(dottedTwoContainer5);
        }

        var col_X = 0;
        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 10; col++) {

                if (row == 0 && col < 5) {
                    col_X = 133;
                } else if (row == 0 && col > 4) {
                    col_X = 173;
                } else if (row == 1 && col < 5) {
                    col_X = 125;
                } else if (row == 1 && col > 4) {
                    col_X = 165;
                }

                this.dotShape_1 = new cjs.Shape();
                this.dotShape_1.graphics.f("#4EC0D3").s("#4EC0D3").ss(1, 0, 0, 4).arc(0, 0, 1, 0, 2 * Math.PI);
                this.dotShape_1.setTransform(col_X + (col * 33), 103);

                this.addChild(this.dotShape_1);
            }
        }

        dottedTwoContainer5.setTransform(132, -133);
    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 140);


    (lib.Symbol4 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_2 = new cjs.Text("Rita i bilden.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(28, 5);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 100, 213, 12);
        this.roundRect1.setTransform(33, 20);

        this.instance_1 = new lib.p6_4();
        this.instance_1.setTransform(80, 26, 0.52, 0.52);

        this.instance_2 = new lib.p6_5();
        this.instance_2.setTransform(80, 70, 0.52, 0.52);

        this.instance_3 = new lib.p6_6();
        this.instance_3.setTransform(80, 117, 0.52, 0.52);

        this.instance_4 = new lib.p6_7();
        this.instance_4.setTransform(80, 157, 0.52, 0.52);

        this.instance_5 = new lib.p6_8();
        this.instance_5.setTransform(80, 198, 0.52, 0.52);

        this.instance_6 = new lib.p6_9();
        this.instance_6.setTransform(260, 37, 0.55, 0.55);

        this.addChild(this.headerCircle, this.text_2, this.roundRect1, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5,
            this.instance_6);

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 15; col++) {

                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(4.75, 0);
                this.hrline_1.setTransform(33 + (col * 6.75), 63 + (row * 43));

                this.addChild(this.hrline_1);
            }
        }

        var num = [2, 1, 1, 2, 1];
        var count = 0;
        for (var row = 0; row < 5; row++) {
            var fillText = num[count];
            count = count + 1;

            this.text_3 = new cjs.Text('' + fillText, "30px 'ElisarDTInfant-Regular'", "#31B1C9");
            this.text_3.setTransform(53, 51 + (row * 43));

            this.addChild(this.text_3);
        }
    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 250);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 57, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 200, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(303, 384, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
