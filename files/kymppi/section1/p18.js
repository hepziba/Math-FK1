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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_1.png",
            id: "p18_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_2.png",
            id: "p18_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_3.png",
            id: "p18_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_4.png",
            id: "p18_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_5.png",
            id: "p18_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_6.png",
            id: "p18_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_7.png",
            id: "p18_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_8.png",
            id: "p18_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_9.png",
            id: "p18_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_3.png",
            id: "p18_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_10.png",
            id: "p18_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p18_11.png",
            id: "p18_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/even_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p18_1 = function() {
        this.initialize(img.p18_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p18_2 = function() {
        this.initialize(img.p18_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p18_3 = function() {
        this.initialize(img.p18_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p18_4 = function() {
        this.initialize(img.p18_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p18_5 = function() {
        this.initialize(img.p18_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p18_6 = function() {
        this.initialize(img.p18_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p18_7 = function() {
        this.initialize(img.p18_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p18_8 = function() {
        this.initialize(img.p18_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p18_9 = function() {
        this.initialize(img.p18_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p18_10 = function() {
        this.initialize(img.p18_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p18_11 = function() {
        this.initialize(img.p18_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p18_12 = function() {
        this.initialize(img.p18_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);
   
    (lib.smallFive = function() {
        this.initialize();

        var Fivecontainer = new createjs.Container();

        var innerFive = new createjs.Shape();
        innerFive.graphics.s('#DEDEDE').ss(12).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(116, 253)
            .bezierCurveTo(215, 350, 291, 103, 143, 170);

        Fivecontainer.addChild(innerFive);
        Fivecontainer.setTransform(0, 0, 0.4, 0.4);

        return Fivecontainer;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("18", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tal och antal 5", "9.5px 'ElisarDTInfant-SemiBold'");
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
     
        this.DigitFive = new lib.p18_11();
        this.DigitFive.setTransform(13, 29, 0.65, 0.65);

        this.instance_1 = new lib.p18_1();
        this.instance_1.setTransform(113, -9, 0.53, 0.53);

        this.instance_2 = new lib.p18_10();
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
        this.text_7.setTransform(24, 59);

        this.text_8 = new cjs.Text("2", "13px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_8.setTransform(45, 42);

        this.addChild(this.DigitFive, this.instance_1, this.instance_2, this.text_2, this.text_3, this.text_4, this.text_5,
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

        var col_X = 112;
        for (var col = 0; col < 5; col++) {

            var fiveContainer = new cjs.Container();

            this.DigitFive = new lib.p18_12();
            this.DigitFive.setTransform(20, 46, 0.67, 0.67);
           
            fiveContainer.setTransform(col_X + (col * 33), 67.25, 0.5, 0.5);
            fiveContainer.addChild(this.DigitFive);

            this.addChild(fiveContainer);
        }

        var dottedFiveContainer1 = new cjs.Container();

        var dot_X = 338,
            dot_Y = 92;
        for (var row = 0; row < 3; row++) {
            this.NumFiveDottedShape_1 = new cjs.Shape();
            this.NumFiveDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFiveDottedShape_1.setTransform(dot_X, dot_Y);

            dottedFiveContainer1.addChild(this.NumFiveDottedShape_1);
            dot_X = dot_X + 4.3;
        }

        var dot_X = 334,
            dot_Y = 92;
        for (var row = 0; row < 5; row++) {
            this.NumFiveDottedShape_2 = new cjs.Shape();
            this.NumFiveDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFiveDottedShape_2.setTransform(dot_X, dot_Y);

            dottedFiveContainer1.addChild(this.NumFiveDottedShape_2);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.2;
        }

        this.NumFiveDottedShape_3 = new cjs.Shape();
        this.NumFiveDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_3.setTransform(337, 107.5);

        this.NumFiveDottedShape_4 = new cjs.Shape();
        this.NumFiveDottedShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_4.setTransform(341, 109);

        this.NumFiveDottedShape_5 = new cjs.Shape();
        this.NumFiveDottedShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_5.setTransform(343.5, 112);

        this.NumFiveDottedShape_6 = new cjs.Shape();
        this.NumFiveDottedShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_6.setTransform(344, 116);

        this.NumFiveDottedShape_7 = new cjs.Shape();
        this.NumFiveDottedShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_7.setTransform(343, 120);

        this.NumFiveDottedShape_8 = new cjs.Shape();
        this.NumFiveDottedShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_8.setTransform(341, 124);

        this.NumFiveDottedShape_9 = new cjs.Shape();
        this.NumFiveDottedShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_9.setTransform(337, 126);

        this.NumFiveDottedShape_10 = new cjs.Shape();
        this.NumFiveDottedShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_10.setTransform(332, 127);

        this.NumFiveDottedShape_11 = new cjs.Shape();
        this.NumFiveDottedShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_11.setTransform(328, 125);

        dottedFiveContainer1.addChild(this.NumFiveDottedShape_3, this.NumFiveDottedShape_4, this.NumFiveDottedShape_5, this.NumFiveDottedShape_6,
            this.NumFiveDottedShape_7, this.NumFiveDottedShape_8, this.NumFiveDottedShape_9, this.NumFiveDottedShape_10, this.NumFiveDottedShape_11);

        this.addChild(dottedFiveContainer1);
        dottedFiveContainer1.setTransform(0, 0);

        var dottedFiveContainer2 = new cjs.Container();

        var dot_X = 338,
            dot_Y = 92;
        for (var row = 0; row < 3; row++) {
            this.NumFiveDottedShape_1 = new cjs.Shape();
            this.NumFiveDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFiveDottedShape_1.setTransform(dot_X, dot_Y);

            dottedFiveContainer2.addChild(this.NumFiveDottedShape_1);
            dot_X = dot_X + 4.3;
        }

        var dot_X = 334,
            dot_Y = 92;
        for (var row = 0; row < 5; row++) {
            this.NumFiveDottedShape_2 = new cjs.Shape();
            this.NumFiveDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFiveDottedShape_2.setTransform(dot_X, dot_Y);

            dottedFiveContainer2.addChild(this.NumFiveDottedShape_2);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.2;
        }

        this.NumFiveDottedShape_3 = new cjs.Shape();
        this.NumFiveDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_3.setTransform(337, 107.5);

        this.NumFiveDottedShape_4 = new cjs.Shape();
        this.NumFiveDottedShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_4.setTransform(341, 109);

        this.NumFiveDottedShape_5 = new cjs.Shape();
        this.NumFiveDottedShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_5.setTransform(343.5, 112);

        this.NumFiveDottedShape_6 = new cjs.Shape();
        this.NumFiveDottedShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_6.setTransform(344, 116);

        this.NumFiveDottedShape_7 = new cjs.Shape();
        this.NumFiveDottedShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_7.setTransform(343, 120);

        this.NumFiveDottedShape_8 = new cjs.Shape();
        this.NumFiveDottedShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_8.setTransform(341, 124);

        this.NumFiveDottedShape_9 = new cjs.Shape();
        this.NumFiveDottedShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_9.setTransform(337, 126);

        this.NumFiveDottedShape_10 = new cjs.Shape();
        this.NumFiveDottedShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_10.setTransform(332, 127);

        this.NumFiveDottedShape_11 = new cjs.Shape();
        this.NumFiveDottedShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_11.setTransform(328, 125);

        dottedFiveContainer2.addChild(this.NumFiveDottedShape_3, this.NumFiveDottedShape_4, this.NumFiveDottedShape_5, this.NumFiveDottedShape_6,
            this.NumFiveDottedShape_7, this.NumFiveDottedShape_8, this.NumFiveDottedShape_9, this.NumFiveDottedShape_10, this.NumFiveDottedShape_11);

        dottedFiveContainer2.setTransform(33, 0);
        this.addChild(dottedFiveContainer2);

        var dottedFiveContainer3 = new cjs.Container();

        var dot_X = 338,
            dot_Y = 92;
        for (var row = 0; row < 3; row++) {
            this.NumFiveDottedShape_1 = new cjs.Shape();
            this.NumFiveDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFiveDottedShape_1.setTransform(dot_X, dot_Y);

            dottedFiveContainer3.addChild(this.NumFiveDottedShape_1);
            dot_X = dot_X + 4.3;
        }

        var dot_X = 334,
            dot_Y = 92;
        for (var row = 0; row < 5; row++) {
            this.NumFiveDottedShape_2 = new cjs.Shape();
            this.NumFiveDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFiveDottedShape_2.setTransform(dot_X, dot_Y);

            dottedFiveContainer3.addChild(this.NumFiveDottedShape_2);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.2;
        }

        this.NumFiveDottedShape_3 = new cjs.Shape();
        this.NumFiveDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_3.setTransform(337, 107.5);

        this.NumFiveDottedShape_4 = new cjs.Shape();
        this.NumFiveDottedShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_4.setTransform(341, 109);

        this.NumFiveDottedShape_5 = new cjs.Shape();
        this.NumFiveDottedShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_5.setTransform(343.5, 112);

        this.NumFiveDottedShape_6 = new cjs.Shape();
        this.NumFiveDottedShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_6.setTransform(344, 116);

        this.NumFiveDottedShape_7 = new cjs.Shape();
        this.NumFiveDottedShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_7.setTransform(343, 120);

        this.NumFiveDottedShape_8 = new cjs.Shape();
        this.NumFiveDottedShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_8.setTransform(341, 124);

        this.NumFiveDottedShape_9 = new cjs.Shape();
        this.NumFiveDottedShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_9.setTransform(337, 126);

        this.NumFiveDottedShape_10 = new cjs.Shape();
        this.NumFiveDottedShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_10.setTransform(332, 127);

        this.NumFiveDottedShape_11 = new cjs.Shape();
        this.NumFiveDottedShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_11.setTransform(328, 125);

        dottedFiveContainer3.addChild(this.NumFiveDottedShape_3, this.NumFiveDottedShape_4, this.NumFiveDottedShape_5, this.NumFiveDottedShape_6,
            this.NumFiveDottedShape_7, this.NumFiveDottedShape_8, this.NumFiveDottedShape_9, this.NumFiveDottedShape_10, this.NumFiveDottedShape_11);

        dottedFiveContainer3.setTransform(66, 0);
        this.addChild(dottedFiveContainer3);

        var dottedFiveContainer4 = new cjs.Container();

        var dot_X = 338,
            dot_Y = 92;
        for (var row = 0; row < 3; row++) {
            this.NumFiveDottedShape_1 = new cjs.Shape();
            this.NumFiveDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFiveDottedShape_1.setTransform(dot_X, dot_Y);

            dottedFiveContainer4.addChild(this.NumFiveDottedShape_1);
            dot_X = dot_X + 4.3;
        }

        var dot_X = 334,
            dot_Y = 92;
        for (var row = 0; row < 5; row++) {
            this.NumFiveDottedShape_2 = new cjs.Shape();
            this.NumFiveDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFiveDottedShape_2.setTransform(dot_X, dot_Y);

            dottedFiveContainer4.addChild(this.NumFiveDottedShape_2);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.2;
        }

        this.NumFiveDottedShape_3 = new cjs.Shape();
        this.NumFiveDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_3.setTransform(337, 107.5);

        this.NumFiveDottedShape_4 = new cjs.Shape();
        this.NumFiveDottedShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_4.setTransform(341, 109);

        this.NumFiveDottedShape_5 = new cjs.Shape();
        this.NumFiveDottedShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_5.setTransform(343.5, 112);

        this.NumFiveDottedShape_6 = new cjs.Shape();
        this.NumFiveDottedShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_6.setTransform(344, 116);

        this.NumFiveDottedShape_7 = new cjs.Shape();
        this.NumFiveDottedShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_7.setTransform(343, 120);

        this.NumFiveDottedShape_8 = new cjs.Shape();
        this.NumFiveDottedShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_8.setTransform(341, 124);

        this.NumFiveDottedShape_9 = new cjs.Shape();
        this.NumFiveDottedShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_9.setTransform(337, 126);

        this.NumFiveDottedShape_10 = new cjs.Shape();
        this.NumFiveDottedShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_10.setTransform(332, 127);

        this.NumFiveDottedShape_11 = new cjs.Shape();
        this.NumFiveDottedShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_11.setTransform(328, 125);

        dottedFiveContainer4.addChild(this.NumFiveDottedShape_3, this.NumFiveDottedShape_4, this.NumFiveDottedShape_5, this.NumFiveDottedShape_6,
            this.NumFiveDottedShape_7, this.NumFiveDottedShape_8, this.NumFiveDottedShape_9, this.NumFiveDottedShape_10, this.NumFiveDottedShape_11);

        dottedFiveContainer4.setTransform(99, 0);
        this.addChild(dottedFiveContainer4);

        var dottedFiveContainer5 = new cjs.Container();

        var dot_X = 338,
            dot_Y = 92;
        for (var row = 0; row < 3; row++) {
            this.NumFiveDottedShape_1 = new cjs.Shape();
            this.NumFiveDottedShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFiveDottedShape_1.setTransform(dot_X, dot_Y);

            dottedFiveContainer5.addChild(this.NumFiveDottedShape_1);
            dot_X = dot_X + 4.3;
        }

        var dot_X = 334,
            dot_Y = 92;
        for (var row = 0; row < 5; row++) {
            this.NumFiveDottedShape_2 = new cjs.Shape();
            this.NumFiveDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumFiveDottedShape_2.setTransform(dot_X, dot_Y);

            dottedFiveContainer5.addChild(this.NumFiveDottedShape_2);
            dot_X = dot_X - 0.3;
            dot_Y = dot_Y + 4.2;
        }

        this.NumFiveDottedShape_3 = new cjs.Shape();
        this.NumFiveDottedShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_3.setTransform(337, 107.5);

        this.NumFiveDottedShape_4 = new cjs.Shape();
        this.NumFiveDottedShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_4.setTransform(341, 109);

        this.NumFiveDottedShape_5 = new cjs.Shape();
        this.NumFiveDottedShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_5.setTransform(343.5, 112);

        this.NumFiveDottedShape_6 = new cjs.Shape();
        this.NumFiveDottedShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_6.setTransform(344, 116);

        this.NumFiveDottedShape_7 = new cjs.Shape();
        this.NumFiveDottedShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_7.setTransform(343, 120);

        this.NumFiveDottedShape_8 = new cjs.Shape();
        this.NumFiveDottedShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_8.setTransform(341, 124);

        this.NumFiveDottedShape_9 = new cjs.Shape();
        this.NumFiveDottedShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_9.setTransform(337, 126);

        this.NumFiveDottedShape_10 = new cjs.Shape();
        this.NumFiveDottedShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_10.setTransform(332, 127);

        this.NumFiveDottedShape_11 = new cjs.Shape();
        this.NumFiveDottedShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
        this.NumFiveDottedShape_11.setTransform(328, 125);

        dottedFiveContainer5.addChild(this.NumFiveDottedShape_3, this.NumFiveDottedShape_4, this.NumFiveDottedShape_5, this.NumFiveDottedShape_6,
            this.NumFiveDottedShape_7, this.NumFiveDottedShape_8, this.NumFiveDottedShape_9, this.NumFiveDottedShape_10, this.NumFiveDottedShape_11);

        dottedFiveContainer5.setTransform(132, 0);
        this.addChild(dottedFiveContainer5);

        var col_X = 0;

        for (var col = 0; col < 10; col++) {

            if (col < 5) {
                col_X = 132;
            } else if (col > 4) {
                col_X = 169;
            }

            this.dotShape_1 = new cjs.Shape();
            this.dotShape_1.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 1, 0, 2 * Math.PI);
            this.dotShape_1.setTransform(col_X + (col * 33), 91.5);

            this.addChild(this.dotShape_1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 140);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Räkna i bilden. Måla lika många rutor.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.instance_1 = new lib.p18_2();
        this.instance_1.setTransform(11, 0, 0.53, 0.51);

        this.addChild(this.headerCircle, this.text_1, this.instance_1);

        var spl_Text = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
        var col_X = 53;
        var txtColor = "#000000";

        for (var row = 0; row < 5; row++) {
            for (var col = 0; col < 7; col++) {

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#31B1C9").ss(0.7).drawRect(0, 0, 25, 25);
                this.Rect1.setTransform(col_X + (col * 62), 210 + (row * 25));

                this.addChild(this.Rect1);
            }
        }

        this.instance_2 = new lib.p18_3();
        this.instance_2.setTransform(49, 340, 0.55, 0.55);

        this.instance_3 = new lib.p18_4();
        this.instance_3.setTransform(107, 348, 0.55, 0.55);

        this.instance_4 = new lib.p18_5();
        this.instance_4.setTransform(170, 345, 0.52, 0.52);

        this.instance_5 = new lib.p18_6();
        this.instance_5.setTransform(235, 352, 0.55, 0.55);

        this.instance_6 = new lib.p18_7();
        this.instance_6.setTransform(298, 333, 0.55, 0.55);

        this.instance_7 = new lib.p18_8();
        this.instance_7.setTransform(367, 360, 0.55, 0.55);

        this.instance_8 = new lib.p18_9();
        this.instance_8.setTransform(422, 347, 0.52, 0.52);

        this.addChild(this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7, this.instance_8);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 410);

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
