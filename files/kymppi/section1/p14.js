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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p14_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p14_1.png",
            id: "p14_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p14_2.png",
            id: "p14_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p14_3.png",
            id: "p14_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p14_4.png",
            id: "p14_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p14_5.png",
            id: "p14_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p14_6.png",
            id: "p14_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p14_7.png",
            id: "p14_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p14_8.png",
            id: "p14_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p14_9.png",
            id: "p14_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p14_10.png",
            id: "p14_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_3.png",
            id: "p14_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/even_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p14_1 = function() {
        this.initialize(img.p14_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p14_2 = function() {
        this.initialize(img.p14_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p14_3 = function() {
        this.initialize(img.p14_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p14_4 = function() {
        this.initialize(img.p14_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p14_5 = function() {
        this.initialize(img.p14_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p14_6 = function() {
        this.initialize(img.p14_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p14_7 = function() {
        this.initialize(img.p14_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p14_8 = function() {
        this.initialize(img.p14_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p14_9 = function() {
        this.initialize(img.p14_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p14_10 = function() {
        this.initialize(img.p14_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p14_11 = function() {
        this.initialize(img.p14_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("14", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tal och antal 4", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Skriv siffran. Måla kulor.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.Arrow1 = new cjs.Shape();
        this.Arrow1.graphics.f("").s("#31B1C9").ss(1).moveTo(5, 0).lineTo(0, 30).lineTo(-3, 58).lineTo(20, 58).moveTo(16, 61).lineTo(20, 58).lineTo(16, 55);
        this.Arrow1.setTransform(24, 47);

        this.DigitFour = new cjs.Shape();
        this.DigitFour.graphics.f("#ffffff").s("#31B1C9").ss(1.1).moveTo(7, 0).lineTo(0, 48).lineTo(33, 48).lineTo(28, 83).lineTo(36, 83).lineTo(41, 48)
            .lineTo(51, 48).lineTo(52, 40).lineTo(42, 40).lineTo(47, 0).lineTo(39, 0).lineTo(34, 40).lineTo(10, 40).lineTo(16, 0).lineTo(7, 0);
        this.DigitFour.setTransform(30, 47);

        this.Arrow2 = new cjs.Shape();
        this.Arrow2.graphics.f("#ffffff").s("#31B1C9").ss(1.1).moveTo(5, 0).lineTo(0, 30).moveTo(-3, 25).lineTo(0, 30).lineTo(4, 25);
        this.Arrow2.setTransform(85, 47);

        this.instance_1 = new lib.p14_1();
        this.instance_1.setTransform(113, -9, 0.53, 0.53);

        this.instance_2 = new lib.p14_11();
        this.instance_2.setTransform(315, 31, 0.53, 0.53);

        this.text_2 = new cjs.Text("1", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_2.setTransform(330, 51);

        this.text_3 = new cjs.Text("2", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_3.setTransform(358, 57.5);

        this.text_4 = new cjs.Text("3", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_4.setTransform(386, 60);

        this.text_5 = new cjs.Text("4", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_5.setTransform(414, 57);

        this.text_6 = new cjs.Text("5", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_6.setTransform(443, 52);

        this.text_7 = new cjs.Text("1", "13px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_7.setTransform(13, 52);

        this.text_8 = new cjs.Text("2", "13px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_8.setTransform(93, 52);

        this.addChild(this.Arrow1, this.DigitFour, this.Arrow2, this.instance_1, this.instance_2, this.text_2, this.text_3, this.text_4, this.text_5,
            this.text_6, this.text_7, this.text_8);

        var col_X = 0;
        for (var col = 0; col < 10; col++) {

            if (col > 4) {
                col_X = 155;
            } else {
                col_X = 118;
            }

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(1).drawRect(0, 0, 33, 38);
            this.Rect1.setTransform(col_X + (col * 33), 90);

            this.addChild(this.Rect1);
        }

        var col_X = 0;

        for (var col = 0; col < 10; col++) {

            if (col < 5) {
                col_X = 129;
            } else if (col > 4) {
                col_X = 166;
            }

            this.dotShape_1 = new cjs.Shape();
            this.dotShape_1.graphics.f("#4EC0D3").s("#4EC0D3").ss(1, 0, 0, 4).arc(0, 0, 1, 0, 2 * Math.PI);
            this.dotShape_1.setTransform(col_X + (col * 33), 92);

            this.addChild(this.dotShape_1);
        }

        for (var col = 0; col < 5; col++) {

            this.NumOneShape_1 = new cjs.Shape();
            this.NumOneShape_1.graphics.f("#ffffff").s("#DEDEDE").ss(2).moveTo(4, 0).lineTo(0, 18).lineTo(19, 18).moveTo(16, 0).lineTo(12, 34);
            this.NumOneShape_1.setTransform(125 + (col * 33), 93.5);

            this.addChild(this.NumOneShape_1);
        }


        var dottedFourContainer1 = new cjs.Container();

        var dot_X = 330,
            dot_Y = 96;
        for (var row = 0; row < 4; row++) {
            this.NumFourDottedShape_1 = new cjs.Shape();
            this.NumFourDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_1.setTransform(dot_X, dot_Y);

            dottedFourContainer1.addChild(this.NumFourDottedShape_1);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.3;
        }

        var dot_X = 333,
            dot_Y = 109;
        for (var row = 0; row < 4; row++) {
            this.NumFourDottedShape_2 = new cjs.Shape();
            this.NumFourDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_2.setTransform(dot_X, dot_Y);

            dottedFourContainer1.addChild(this.NumFourDottedShape_2);
            dot_X = dot_X + 4.3;
        }

        var dot_X = 343,
            dot_Y = 96;
        for (var row = 0; row < 8; row++) {
            this.NumFourDottedShape_3 = new cjs.Shape();
            this.NumFourDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_3.setTransform(dot_X, dot_Y);

            dottedFourContainer1.addChild(this.NumFourDottedShape_3);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.3;
        }

        dottedFourContainer1.setTransform(0, 0);
        this.addChild(dottedFourContainer1);

        var dottedFourContainer2 = new cjs.Container();

        var dot_X = 330,
            dot_Y = 96;
        for (var row = 0; row < 4; row++) {
            this.NumFourDottedShape_1 = new cjs.Shape();
            this.NumFourDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_1.setTransform(dot_X, dot_Y);

            dottedFourContainer2.addChild(this.NumFourDottedShape_1);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.3;
        }

        var dot_X = 333,
            dot_Y = 109;
        for (var row = 0; row < 4; row++) {
            this.NumFourDottedShape_2 = new cjs.Shape();
            this.NumFourDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_2.setTransform(dot_X, dot_Y);

            dottedFourContainer2.addChild(this.NumFourDottedShape_2);
            dot_X = dot_X + 4.3;
        }

        var dot_X = 343,
            dot_Y = 96;
        for (var row = 0; row < 8; row++) {
            this.NumFourDottedShape_3 = new cjs.Shape();
            this.NumFourDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_3.setTransform(dot_X, dot_Y);

            dottedFourContainer2.addChild(this.NumFourDottedShape_3);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.3;
        }

        dottedFourContainer2.setTransform(33.5, 0);
        this.addChild(dottedFourContainer2);

        var dottedFourContainer3 = new cjs.Container();

        var dot_X = 330,
            dot_Y = 96;
        for (var row = 0; row < 4; row++) {
            this.NumFourDottedShape_1 = new cjs.Shape();
            this.NumFourDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_1.setTransform(dot_X, dot_Y);

            dottedFourContainer3.addChild(this.NumFourDottedShape_1);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.3;
        }

        var dot_X = 333,
            dot_Y = 109;
        for (var row = 0; row < 4; row++) {
            this.NumFourDottedShape_2 = new cjs.Shape();
            this.NumFourDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_2.setTransform(dot_X, dot_Y);
            dottedFourContainer3.addChild(this.NumFourDottedShape_2);

            dot_X = dot_X + 4.3;
        }

        var dot_X = 343,
            dot_Y = 96;
        for (var row = 0; row < 8; row++) {
            this.NumFourDottedShape_3 = new cjs.Shape();
            this.NumFourDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_3.setTransform(dot_X, dot_Y);

            dottedFourContainer3.addChild(this.NumFourDottedShape_3);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.3;
        }

        dottedFourContainer3.setTransform(67, 0);
        this.addChild(dottedFourContainer3);

        var dottedFourContainer4 = new cjs.Container();

        var dot_X = 330,
            dot_Y = 96;
        for (var row = 0; row < 4; row++) {
            this.NumFourDottedShape_1 = new cjs.Shape();
            this.NumFourDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_1.setTransform(dot_X, dot_Y);

            dottedFourContainer4.addChild(this.NumFourDottedShape_1);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.3;
        }

        var dot_X = 333,
            dot_Y = 109;
        for (var row = 0; row < 4; row++) {
            this.NumFourDottedShape_2 = new cjs.Shape();
            this.NumFourDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_2.setTransform(dot_X, dot_Y);
            dottedFourContainer4.addChild(this.NumFourDottedShape_2);

            dot_X = dot_X + 4.3;
        }

        var dot_X = 343,
            dot_Y = 96;
        for (var row = 0; row < 8; row++) {
            this.NumFourDottedShape_3 = new cjs.Shape();
            this.NumFourDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_3.setTransform(dot_X, dot_Y);

            dottedFourContainer4.addChild(this.NumFourDottedShape_3);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.3;
        }

        dottedFourContainer4.setTransform(100, 0);
        this.addChild(dottedFourContainer4);

        var dottedFourContainer5 = new cjs.Container();

        var dot_X = 330,
            dot_Y = 96;
        for (var row = 0; row < 4; row++) {
            this.NumFourDottedShape_1 = new cjs.Shape();
            this.NumFourDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_1.setTransform(dot_X, dot_Y);

            dottedFourContainer5.addChild(this.NumFourDottedShape_1);

            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.3;
        }

        var dot_X = 333,
            dot_Y = 109;
        for (var row = 0; row < 4; row++) {
            this.NumFourDottedShape_2 = new cjs.Shape();
            this.NumFourDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_2.setTransform(dot_X, dot_Y);

            dottedFourContainer5.addChild(this.NumFourDottedShape_2);
            dot_X = dot_X + 4.3;
        }

        var dot_X = 343,
            dot_Y = 96;
        for (var row = 0; row < 8; row++) {
            this.NumFourDottedShape_3 = new cjs.Shape();
            this.NumFourDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFourDottedShape_3.setTransform(dot_X, dot_Y);

            dottedFourContainer5.addChild(this.NumFourDottedShape_3);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.3;
        }

        dottedFourContainer5.setTransform(133, 0);
        this.addChild(dottedFourContainer5);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 140);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Räkna i bilden. Ringa in antalet.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.instance_1 = new lib.p14_2();
        this.instance_1.setTransform(13, -18, 0.535, 0.515);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#D2E8F0").ss(1.25).drawRoundRect(0, 0, 218, 190, 12);
        this.roundRect1.setTransform(29, 200);

        this.roundRect2 = new cjs.Shape();
        this.roundRect2.graphics.f("#ffffff").s("#D2E8F0").ss(1.25).drawRoundRect(0, 0, 218, 190, 12);
        this.roundRect2.setTransform(267, 200);

        this.addChild(this.headerCircle, this.text_1, this.instance_1, this.roundRect1, this.roundRect2);

        this.instance_2 = new lib.p14_3();
        this.instance_2.setTransform(39, 204, 0.51, 0.51);

        this.instance_3 = new lib.p14_4();
        this.instance_3.setTransform(294, 196, 0.53, 0.53);

        this.instance_4 = new lib.p14_5();
        this.instance_4.setTransform(48, 261, 0.53, 0.53);

        this.instance_5 = new lib.p14_6();
        this.instance_5.setTransform(280, 261, 0.51, 0.51);

        this.instance_6 = new lib.p14_7();
        this.instance_6.setTransform(45, 301, 0.53, 0.53);

        this.instance_7 = new lib.p14_8();
        this.instance_7.setTransform(280, 301, 0.53, 0.53);

        this.instance_8 = new lib.p14_9();
        this.instance_8.setTransform(40, 341, 0.50, 0.50);

        this.instance_9 = new lib.p14_10();
        this.instance_9.setTransform(278, 341, 0.53, 0.53);

        this.addChild(this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8, this.instance_9);

        var spl_Text = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
        var col_X = 0;
        var txtColor = "#000000";

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 10; col++) {

                var fillText = spl_Text[col];

                if (row == 0) {
                    txtColor = "#F4A330";
                } else if (row == 1) {
                    txtColor = "#8CB93B";
                } else if (row == 2) {
                    txtColor = "#44B1C9";
                } else if (row == 3) {
                    txtColor = "#908EC2";
                }

                if (col < 5) {
                    col_X = 92;
                } else if (col > 4) {
                    col_X = 182;
                }

                this.text_2 = new cjs.Text('' + fillText, "21px 'ElisarDTInfant-Bold'", txtColor);
                this.text_2.setTransform(col_X + (col * 30), 235 + (row * 48));

                this.addChild(this.text_2);
            }
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 500);

    (lib.p6 = function() {
        this.initialize();

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 229, 1, 1, 0, 0, 0, 254.6, 0);

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 57, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
