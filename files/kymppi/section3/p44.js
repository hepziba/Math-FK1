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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p44_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p44_1.png",
            id: "p44_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p44_2.png",
            id: "p44_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p44_3.png",
            id: "p44_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p40_2.png",
            id: "p44_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p44_4.png",
            id: "p44_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p44_5.png",
            id: "p44_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p44_6.png",
            id: "p44_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/even_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.p44_1 = function() {
        this.initialize(img.p44_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p44_2 = function() {
        this.initialize(img.p44_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p44_3 = function() {
        this.initialize(img.p44_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p44_4 = function() {
        this.initialize(img.p44_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p44_5 = function() {
        this.initialize(img.p44_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p44_6 = function() {
        this.initialize(img.p44_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p44_7 = function() {
        this.initialize(img.p44_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.NumZero = function() {
        this.initialize();

        var NumZero = new createjs.Container();

        var NumberZero_Shape = new createjs.Shape();
        NumberZero_Shape.graphics.s('#DEDEDE').ss(7).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(91, 176)
            .bezierCurveTo(39, 157, 75, 37, 117, 49)
            .bezierCurveTo(171, 64, 137, 189, 90, 176);

        NumZero.addChild(NumberZero_Shape);
        NumZero.setTransform(0, 0);

        return NumZero;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("44", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tal och antal 0 och 10", "9.5px 'ElisarDTInfant-SemiBold'");
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

        this.instance_1 = new lib.p44_1();
        this.instance_1.setTransform(118, 28, 0.55, 0.52);

        this.instance_2 = new lib.p44_2();
        this.instance_2.setTransform(320, 16, 0.55, 0.52);

        this.text_2 = new cjs.Text("1", "13px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_2.setTransform(40, 34);

        this.DigitZero = new lib.p44_6();
        this.DigitZero.setTransform(40, 25, 0.4, 0.4);

        this.addChild(this.headerCircle, this.text_1, this.instance_1, this.instance_2, this.instance_4,
            this.text_2, this.DigitZero);

        var col_X = 0;

        for (var col = 0; col < 10; col++) {

            if (col > 4) {
                col_X = 158;
            } else {
                col_X = 121;
            }

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(1).drawRect(0, 0, 33, 38);
            this.Rect1.setTransform(col_X + (col * 33), 66);

            this.addChild(this.Rect1);

        }

        var col_X = 0;
        for (var col = 0; col < 5; col++) {

            if (col < 5) {
                col_X = 108;
            } else if (col > 4) {
                col_X = 143.5;
            }

            this.NumZero = new lib.NumZero();
            this.NumZero.setTransform(col_X + (col * 33), 53.7, 0.277, 0.277);

            this.addChild(this.NumZero);
        }

        var dotZeroContainer_1 = new cjs.Container();

        this.ZeroDotShape_1 = new cjs.Shape();
        this.ZeroDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_1.setTransform(343, 70.5);

        this.ZeroDotShape_2 = new cjs.Shape();
        this.ZeroDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_2.setTransform(346, 73);

        this.ZeroDotShape_3 = new cjs.Shape();
        this.ZeroDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_3.setTransform(348, 77.5);

        this.ZeroDotShape_4 = new cjs.Shape();
        this.ZeroDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_4.setTransform(349, 82);

        this.ZeroDotShape_5 = new cjs.Shape();
        this.ZeroDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_5.setTransform(349, 86.5);

        this.ZeroDotShape_6 = new cjs.Shape();
        this.ZeroDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_6.setTransform(348.5, 91);

        this.ZeroDotShape_7 = new cjs.Shape();
        this.ZeroDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_7.setTransform(347, 95.5);

        this.ZeroDotShape_8 = new cjs.Shape();
        this.ZeroDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_8.setTransform(345, 99.25);

        this.ZeroDotShape_9 = new cjs.Shape();
        this.ZeroDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_9.setTransform(342.5, 102);

        this.ZeroDotShape_10 = new cjs.Shape();
        this.ZeroDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_10.setTransform(339, 104.5);

        this.ZeroDotShape_11 = new cjs.Shape();
        this.ZeroDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_11.setTransform(334.5, 104.5);

        this.ZeroDotShape_12 = new cjs.Shape();
        this.ZeroDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_12.setTransform(331, 102);

        this.ZeroDotShape_13 = new cjs.Shape();
        this.ZeroDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_13.setTransform(328.5, 98.5);

        this.ZeroDotShape_14 = new cjs.Shape();
        this.ZeroDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_14.setTransform(326.75, 94);

        this.ZeroDotShape_15 = new cjs.Shape();
        this.ZeroDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_15.setTransform(326.75, 89.5);

        this.ZeroDotShape_16 = new cjs.Shape();
        this.ZeroDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_16.setTransform(327, 85.25);

        this.ZeroDotShape_17 = new cjs.Shape();
        this.ZeroDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_17.setTransform(328, 81);

        this.ZeroDotShape_18 = new cjs.Shape();
        this.ZeroDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_18.setTransform(330, 77);

        this.ZeroDotShape_19 = new cjs.Shape();
        this.ZeroDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_19.setTransform(332, 73.5);

        this.ZeroDotShape_20 = new cjs.Shape();
        this.ZeroDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_20.setTransform(335.25, 71);

        this.ZeroDotShape_21 = new cjs.Shape();
        this.ZeroDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_21.setTransform(339.5, 70);

        dotZeroContainer_1.addChild(this.ZeroDotShape_1, this.ZeroDotShape_2, this.ZeroDotShape_3, this.ZeroDotShape_4, this.ZeroDotShape_5,
            this.ZeroDotShape_6, this.ZeroDotShape_7, this.ZeroDotShape_8, this.ZeroDotShape_9, this.ZeroDotShape_10, this.ZeroDotShape_11,
            this.ZeroDotShape_12, this.ZeroDotShape_13, this.ZeroDotShape_14, this.ZeroDotShape_15, this.ZeroDotShape_16, this.ZeroDotShape_17,
            this.ZeroDotShape_18, this.ZeroDotShape_19, this.ZeroDotShape_20, this.ZeroDotShape_21);
        dotZeroContainer_1.setTransform(0, -3);

        var dotZeroContainer_2 = new cjs.Container();

        this.ZeroDotShape_1 = new cjs.Shape();
        this.ZeroDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_1.setTransform(343, 70.5);

        this.ZeroDotShape_2 = new cjs.Shape();
        this.ZeroDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_2.setTransform(346, 73);

        this.ZeroDotShape_3 = new cjs.Shape();
        this.ZeroDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_3.setTransform(348, 77.5);

        this.ZeroDotShape_4 = new cjs.Shape();
        this.ZeroDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_4.setTransform(349, 82);

        this.ZeroDotShape_5 = new cjs.Shape();
        this.ZeroDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_5.setTransform(349, 86.5);

        this.ZeroDotShape_6 = new cjs.Shape();
        this.ZeroDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_6.setTransform(348.5, 91);

        this.ZeroDotShape_7 = new cjs.Shape();
        this.ZeroDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_7.setTransform(347, 95.5);

        this.ZeroDotShape_8 = new cjs.Shape();
        this.ZeroDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_8.setTransform(345, 99.25);

        this.ZeroDotShape_9 = new cjs.Shape();
        this.ZeroDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_9.setTransform(342.5, 102);

        this.ZeroDotShape_10 = new cjs.Shape();
        this.ZeroDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_10.setTransform(339, 104.5);

        this.ZeroDotShape_11 = new cjs.Shape();
        this.ZeroDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_11.setTransform(334.5, 104.5);

        this.ZeroDotShape_12 = new cjs.Shape();
        this.ZeroDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_12.setTransform(331, 102);

        this.ZeroDotShape_13 = new cjs.Shape();
        this.ZeroDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_13.setTransform(328.5, 98.5);

        this.ZeroDotShape_14 = new cjs.Shape();
        this.ZeroDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_14.setTransform(326.75, 94);

        this.ZeroDotShape_15 = new cjs.Shape();
        this.ZeroDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_15.setTransform(326.75, 89.5);

        this.ZeroDotShape_16 = new cjs.Shape();
        this.ZeroDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_16.setTransform(327, 85.25);

        this.ZeroDotShape_17 = new cjs.Shape();
        this.ZeroDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_17.setTransform(328, 81);

        this.ZeroDotShape_18 = new cjs.Shape();
        this.ZeroDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_18.setTransform(330, 77);

        this.ZeroDotShape_19 = new cjs.Shape();
        this.ZeroDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_19.setTransform(332, 73.5);

        this.ZeroDotShape_20 = new cjs.Shape();
        this.ZeroDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_20.setTransform(335.25, 71);

        this.ZeroDotShape_21 = new cjs.Shape();
        this.ZeroDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_21.setTransform(339.5, 70);

        dotZeroContainer_2.addChild(this.ZeroDotShape_1, this.ZeroDotShape_2, this.ZeroDotShape_3, this.ZeroDotShape_4, this.ZeroDotShape_5,
            this.ZeroDotShape_6, this.ZeroDotShape_7, this.ZeroDotShape_8, this.ZeroDotShape_9, this.ZeroDotShape_10, this.ZeroDotShape_11,
            this.ZeroDotShape_12, this.ZeroDotShape_13, this.ZeroDotShape_14, this.ZeroDotShape_15, this.ZeroDotShape_16, this.ZeroDotShape_17,
            this.ZeroDotShape_18, this.ZeroDotShape_19, this.ZeroDotShape_20, this.ZeroDotShape_21);
        dotZeroContainer_2.setTransform(33, -3);

        var dotZeroContainer_3 = new cjs.Container();

        this.ZeroDotShape_1 = new cjs.Shape();
        this.ZeroDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_1.setTransform(343, 70.5);

        this.ZeroDotShape_2 = new cjs.Shape();
        this.ZeroDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_2.setTransform(346, 73);

        this.ZeroDotShape_3 = new cjs.Shape();
        this.ZeroDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_3.setTransform(348, 77.5);

        this.ZeroDotShape_4 = new cjs.Shape();
        this.ZeroDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_4.setTransform(349, 82);

        this.ZeroDotShape_5 = new cjs.Shape();
        this.ZeroDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_5.setTransform(349, 86.5);

        this.ZeroDotShape_6 = new cjs.Shape();
        this.ZeroDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_6.setTransform(348.5, 91);

        this.ZeroDotShape_7 = new cjs.Shape();
        this.ZeroDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_7.setTransform(347, 95.5);

        this.ZeroDotShape_8 = new cjs.Shape();
        this.ZeroDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_8.setTransform(345, 99.25);

        this.ZeroDotShape_9 = new cjs.Shape();
        this.ZeroDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_9.setTransform(342.5, 102);

        this.ZeroDotShape_10 = new cjs.Shape();
        this.ZeroDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_10.setTransform(339, 104.5);

        this.ZeroDotShape_11 = new cjs.Shape();
        this.ZeroDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_11.setTransform(334.5, 104.5);

        this.ZeroDotShape_12 = new cjs.Shape();
        this.ZeroDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_12.setTransform(331, 102);

        this.ZeroDotShape_13 = new cjs.Shape();
        this.ZeroDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_13.setTransform(328.5, 98.5);

        this.ZeroDotShape_14 = new cjs.Shape();
        this.ZeroDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_14.setTransform(326.75, 94);

        this.ZeroDotShape_15 = new cjs.Shape();
        this.ZeroDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_15.setTransform(326.75, 89.5);

        this.ZeroDotShape_16 = new cjs.Shape();
        this.ZeroDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_16.setTransform(327, 85.25);

        this.ZeroDotShape_17 = new cjs.Shape();
        this.ZeroDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_17.setTransform(328, 81);

        this.ZeroDotShape_18 = new cjs.Shape();
        this.ZeroDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_18.setTransform(330, 77);

        this.ZeroDotShape_19 = new cjs.Shape();
        this.ZeroDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_19.setTransform(332, 73.5);

        this.ZeroDotShape_20 = new cjs.Shape();
        this.ZeroDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_20.setTransform(335.25, 71);

        this.ZeroDotShape_21 = new cjs.Shape();
        this.ZeroDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_21.setTransform(339.5, 70);

        dotZeroContainer_3.addChild(this.ZeroDotShape_1, this.ZeroDotShape_2, this.ZeroDotShape_3, this.ZeroDotShape_4, this.ZeroDotShape_5,
            this.ZeroDotShape_6, this.ZeroDotShape_7, this.ZeroDotShape_8, this.ZeroDotShape_9, this.ZeroDotShape_10, this.ZeroDotShape_11,
            this.ZeroDotShape_12, this.ZeroDotShape_13, this.ZeroDotShape_14, this.ZeroDotShape_15, this.ZeroDotShape_16, this.ZeroDotShape_17,
            this.ZeroDotShape_18, this.ZeroDotShape_19, this.ZeroDotShape_20, this.ZeroDotShape_21);
        dotZeroContainer_3.setTransform(66, -3);

        var dotZeroContainer_4 = new cjs.Container();

        this.ZeroDotShape_1 = new cjs.Shape();
        this.ZeroDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_1.setTransform(343, 70.5);

        this.ZeroDotShape_2 = new cjs.Shape();
        this.ZeroDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_2.setTransform(346, 73);

        this.ZeroDotShape_3 = new cjs.Shape();
        this.ZeroDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_3.setTransform(348, 77.5);

        this.ZeroDotShape_4 = new cjs.Shape();
        this.ZeroDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_4.setTransform(349, 82);

        this.ZeroDotShape_5 = new cjs.Shape();
        this.ZeroDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_5.setTransform(349, 86.5);

        this.ZeroDotShape_6 = new cjs.Shape();
        this.ZeroDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_6.setTransform(348.5, 91);

        this.ZeroDotShape_7 = new cjs.Shape();
        this.ZeroDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_7.setTransform(347, 95.5);

        this.ZeroDotShape_8 = new cjs.Shape();
        this.ZeroDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_8.setTransform(345, 99.25);

        this.ZeroDotShape_9 = new cjs.Shape();
        this.ZeroDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_9.setTransform(342.5, 102);

        this.ZeroDotShape_10 = new cjs.Shape();
        this.ZeroDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_10.setTransform(339, 104.5);

        this.ZeroDotShape_11 = new cjs.Shape();
        this.ZeroDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_11.setTransform(334.5, 104.5);

        this.ZeroDotShape_12 = new cjs.Shape();
        this.ZeroDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_12.setTransform(331, 102);

        this.ZeroDotShape_13 = new cjs.Shape();
        this.ZeroDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_13.setTransform(328.5, 98.5);

        this.ZeroDotShape_14 = new cjs.Shape();
        this.ZeroDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_14.setTransform(326.75, 94);

        this.ZeroDotShape_15 = new cjs.Shape();
        this.ZeroDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_15.setTransform(326.75, 89.5);

        this.ZeroDotShape_16 = new cjs.Shape();
        this.ZeroDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_16.setTransform(327, 85.25);

        this.ZeroDotShape_17 = new cjs.Shape();
        this.ZeroDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_17.setTransform(328, 81);

        this.ZeroDotShape_18 = new cjs.Shape();
        this.ZeroDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_18.setTransform(330, 77);

        this.ZeroDotShape_19 = new cjs.Shape();
        this.ZeroDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_19.setTransform(332, 73.5);

        this.ZeroDotShape_20 = new cjs.Shape();
        this.ZeroDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_20.setTransform(335.25, 71);

        this.ZeroDotShape_21 = new cjs.Shape();
        this.ZeroDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_21.setTransform(339.5, 70);

        dotZeroContainer_4.addChild(this.ZeroDotShape_1, this.ZeroDotShape_2, this.ZeroDotShape_3, this.ZeroDotShape_4, this.ZeroDotShape_5,
            this.ZeroDotShape_6, this.ZeroDotShape_7, this.ZeroDotShape_8, this.ZeroDotShape_9, this.ZeroDotShape_10, this.ZeroDotShape_11,
            this.ZeroDotShape_12, this.ZeroDotShape_13, this.ZeroDotShape_14, this.ZeroDotShape_15, this.ZeroDotShape_16, this.ZeroDotShape_17,
            this.ZeroDotShape_18, this.ZeroDotShape_19, this.ZeroDotShape_20, this.ZeroDotShape_21);
        dotZeroContainer_4.setTransform(99, -3);

        var dotZeroContainer_5 = new cjs.Container();

        this.ZeroDotShape_1 = new cjs.Shape();
        this.ZeroDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_1.setTransform(343, 70.5);

        this.ZeroDotShape_2 = new cjs.Shape();
        this.ZeroDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_2.setTransform(346, 73);

        this.ZeroDotShape_3 = new cjs.Shape();
        this.ZeroDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_3.setTransform(348, 77.5);

        this.ZeroDotShape_4 = new cjs.Shape();
        this.ZeroDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_4.setTransform(349, 82);

        this.ZeroDotShape_5 = new cjs.Shape();
        this.ZeroDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_5.setTransform(349, 86.5);

        this.ZeroDotShape_6 = new cjs.Shape();
        this.ZeroDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_6.setTransform(348.5, 91);

        this.ZeroDotShape_7 = new cjs.Shape();
        this.ZeroDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_7.setTransform(347, 95.5);

        this.ZeroDotShape_8 = new cjs.Shape();
        this.ZeroDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_8.setTransform(345, 99.25);

        this.ZeroDotShape_9 = new cjs.Shape();
        this.ZeroDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_9.setTransform(342.5, 102);

        this.ZeroDotShape_10 = new cjs.Shape();
        this.ZeroDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_10.setTransform(339, 104.5);

        this.ZeroDotShape_11 = new cjs.Shape();
        this.ZeroDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_11.setTransform(334.5, 104.5);

        this.ZeroDotShape_12 = new cjs.Shape();
        this.ZeroDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_12.setTransform(331, 102);

        this.ZeroDotShape_13 = new cjs.Shape();
        this.ZeroDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_13.setTransform(328.5, 98.5);

        this.ZeroDotShape_14 = new cjs.Shape();
        this.ZeroDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_14.setTransform(326.75, 94);

        this.ZeroDotShape_15 = new cjs.Shape();
        this.ZeroDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_15.setTransform(326.75, 89.5);

        this.ZeroDotShape_16 = new cjs.Shape();
        this.ZeroDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_16.setTransform(327, 85.25);

        this.ZeroDotShape_17 = new cjs.Shape();
        this.ZeroDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_17.setTransform(328, 81);

        this.ZeroDotShape_18 = new cjs.Shape();
        this.ZeroDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_18.setTransform(330, 77);

        this.ZeroDotShape_19 = new cjs.Shape();
        this.ZeroDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_19.setTransform(332, 73.5);

        this.ZeroDotShape_20 = new cjs.Shape();
        this.ZeroDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_20.setTransform(335.25, 71);

        this.ZeroDotShape_21 = new cjs.Shape();
        this.ZeroDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_21.setTransform(339.5, 70);

        dotZeroContainer_5.addChild(this.ZeroDotShape_1, this.ZeroDotShape_2, this.ZeroDotShape_3, this.ZeroDotShape_4, this.ZeroDotShape_5,
            this.ZeroDotShape_6, this.ZeroDotShape_7, this.ZeroDotShape_8, this.ZeroDotShape_9, this.ZeroDotShape_10, this.ZeroDotShape_11,
            this.ZeroDotShape_12, this.ZeroDotShape_13, this.ZeroDotShape_14, this.ZeroDotShape_15, this.ZeroDotShape_16, this.ZeroDotShape_17,
            this.ZeroDotShape_18, this.ZeroDotShape_19, this.ZeroDotShape_20, this.ZeroDotShape_21);
        dotZeroContainer_5.setTransform(132, -3);

        this.addChild(dotZeroContainer_1, dotZeroContainer_2, dotZeroContainer_3, dotZeroContainer_4, dotZeroContainer_5);

        var col_X = 0;
        for (var col = 0; col < 10; col++) {

            if (col < 5) {
                col_X = 140;
            } else if (col > 4) {
                col_X = 176;
            }

            this.dotShape_1 = new cjs.Shape();
            this.dotShape_1.graphics.f("#4EC0D3").s("#4EC0D3").ss(1, 0, 0, 4).arc(0, 0, 1, 0, 2 * Math.PI);
            this.dotShape_1.setTransform(col_X + (col * 33), 67.5);

            this.addChild(this.dotShape_1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 105);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, -10);

        this.text_1 = new cjs.Text("Skriv siffran.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, -5);

        this.text_2 = new cjs.Text("Måla kulor.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(28, 14);

        this.instance_1 = new lib.p44_3();
        this.instance_1.setTransform(118, -27, 0.55, 0.52);

        this.instance_2 = new lib.p44_4();
        this.instance_2.setTransform(320, -12, 0.55, 0.52);

        this.instance_3 = new lib.p44_4();
        this.instance_3.setTransform(320, 35, 0.55, 0.52);

        this.text_3 = new cjs.Text("1", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_3.setTransform(335, 8);

        this.text_4 = new cjs.Text("2", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_4.setTransform(364.5, 14.5);

        this.text_5 = new cjs.Text("3", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_5.setTransform(394, 17);

        this.text_6 = new cjs.Text("4", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_6.setTransform(423, 14);

        this.text_7 = new cjs.Text("5", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_7.setTransform(453, 8);

        this.text_8 = new cjs.Text("6", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_8.setTransform(335, 55);

        this.text_9 = new cjs.Text("7", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_9.setTransform(364.5, 61.5);

        this.text_10 = new cjs.Text("8", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_10.setTransform(394, 64);

        this.text_11 = new cjs.Text("9", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_11.setTransform(423, 61);

        this.text_12 = new cjs.Text("10", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_12.setTransform(446, 56);

        this.text_13 = new cjs.Text("1", "13px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_13.setTransform(15, 72);

        this.DigitTen = new lib.p44_7();
        this.DigitTen.setTransform(24, 57, 0.42, 0.42);

        this.addChild(this.headerCircle, this.text_1, this.text_2, this.instance_1, this.instance_2, this.instance_3, this.instance_4,
            this.text_3, this.text_4, this.text_5, this.text_6, this.text_7, this.text_8, this.text_9, this.text_10, this.text_11,
            this.text_12, this.DigitTen, this.text_13);

        var col_X = 0;

        for (var col = 0; col < 8; col++) {
            if (col < 2) {
                col_X = 121;
            } else if (col > 1 && col < 4) {
                col_X = 130;
            } else if (col > 3 && col < 6) {
                col_X = 191;
            } else if (col > 5) {
                col_X = 200;
            }

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(1).drawRect(0, 0, 33, 38);
            this.Rect1.setTransform(col_X + (col * 33), 93);

            this.addChild(this.Rect1);
        }

        var col_X = 0;
        for (var col = 0; col < 2; col++) {

            if (col == 0) {
                col_X = 135;
            } else if (col == 1) {
                col_X = 177;
            }

            this.NumOne = new cjs.Shape();
            this.NumOne.graphics.f("#ffffff").s("#DEDEDE").ss(2).moveTo(4, 0).lineTo(0, 35);
            this.NumOne.setTransform(col_X + (col * 33), 95.5);

            this.addChild(this.NumOne);
        }

        var col_X = 0;
        for (var col = 0; col < 2; col++) {

            if (col == 0) {
                col_X = 141;
            } else if (col == 1) {
                col_X = 183;
            }

            this.NumZero = new lib.NumZero();
            this.NumZero.setTransform(col_X + (col * 33), 80.7, 0.277, 0.277);

            this.addChild(this.NumZero);
        }

        var dottedOneContainer1 = new cjs.Container();

        var dot_X = 339,
            dot_Y = 99;
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

        var dot_X = 414,
            dot_Y = 99;
        for (var row = 0; row < 8; row++) {
            this.NumOneDottedShape_2 = new cjs.Shape();
            this.NumOneDottedShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.7, 0, 2 * Math.PI);
            this.NumOneDottedShape_2.setTransform(dot_X, dot_Y);

            dottedOneContainer2.addChild(this.NumOneDottedShape_2);
            this.addChild(dottedOneContainer2);
            dot_X = dot_X - 0.75;
            dot_Y = dot_Y + 4.3;
        }

        this.addChild(dottedOneContainer1, dottedOneContainer2);

        var dotZeroContainer_1 = new cjs.Container();

         this.ZeroDotShape_1 = new cjs.Shape();
        this.ZeroDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_1.setTransform(343, 70.5);

        this.ZeroDotShape_2 = new cjs.Shape();
        this.ZeroDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_2.setTransform(346, 73);

        this.ZeroDotShape_3 = new cjs.Shape();
        this.ZeroDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_3.setTransform(348, 77.5);

        this.ZeroDotShape_4 = new cjs.Shape();
        this.ZeroDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_4.setTransform(349, 82);

        this.ZeroDotShape_5 = new cjs.Shape();
        this.ZeroDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_5.setTransform(349, 86.5);

        this.ZeroDotShape_6 = new cjs.Shape();
        this.ZeroDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_6.setTransform(348.5, 91);

        this.ZeroDotShape_7 = new cjs.Shape();
        this.ZeroDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_7.setTransform(347, 95.5);

        this.ZeroDotShape_8 = new cjs.Shape();
        this.ZeroDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_8.setTransform(345, 99.25);

        this.ZeroDotShape_9 = new cjs.Shape();
        this.ZeroDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_9.setTransform(342.5, 102);

        this.ZeroDotShape_10 = new cjs.Shape();
        this.ZeroDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_10.setTransform(339, 104.5);

        this.ZeroDotShape_11 = new cjs.Shape();
        this.ZeroDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_11.setTransform(334.5, 104.5);

        this.ZeroDotShape_12 = new cjs.Shape();
        this.ZeroDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_12.setTransform(331, 102);

        this.ZeroDotShape_13 = new cjs.Shape();
        this.ZeroDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_13.setTransform(328.5, 98.5);

        this.ZeroDotShape_14 = new cjs.Shape();
        this.ZeroDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_14.setTransform(326.75, 94);

        this.ZeroDotShape_15 = new cjs.Shape();
        this.ZeroDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_15.setTransform(326.75, 89.5);

        this.ZeroDotShape_16 = new cjs.Shape();
        this.ZeroDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_16.setTransform(327, 85.25);

        this.ZeroDotShape_17 = new cjs.Shape();
        this.ZeroDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_17.setTransform(328, 81);

        this.ZeroDotShape_18 = new cjs.Shape();
        this.ZeroDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_18.setTransform(330, 77);

        this.ZeroDotShape_19 = new cjs.Shape();
        this.ZeroDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_19.setTransform(332, 73.5);

        this.ZeroDotShape_20 = new cjs.Shape();
        this.ZeroDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_20.setTransform(335.25, 71);

        this.ZeroDotShape_21 = new cjs.Shape();
        this.ZeroDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_21.setTransform(339.5, 70);

        dotZeroContainer_1.addChild(this.ZeroDotShape_1, this.ZeroDotShape_2, this.ZeroDotShape_3, this.ZeroDotShape_4, this.ZeroDotShape_5,
            this.ZeroDotShape_6, this.ZeroDotShape_7, this.ZeroDotShape_8, this.ZeroDotShape_9, this.ZeroDotShape_10, this.ZeroDotShape_11,
            this.ZeroDotShape_12, this.ZeroDotShape_13, this.ZeroDotShape_14, this.ZeroDotShape_15, this.ZeroDotShape_16, this.ZeroDotShape_17,
            this.ZeroDotShape_18, this.ZeroDotShape_19, this.ZeroDotShape_20, this.ZeroDotShape_21);
        dotZeroContainer_1.setTransform(34, 24);

        var dotZeroContainer_2 = new cjs.Container();

         this.ZeroDotShape_1 = new cjs.Shape();
        this.ZeroDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_1.setTransform(343, 70.5);

        this.ZeroDotShape_2 = new cjs.Shape();
        this.ZeroDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_2.setTransform(346, 73);

        this.ZeroDotShape_3 = new cjs.Shape();
        this.ZeroDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_3.setTransform(348, 77.5);

        this.ZeroDotShape_4 = new cjs.Shape();
        this.ZeroDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_4.setTransform(349, 82);

        this.ZeroDotShape_5 = new cjs.Shape();
        this.ZeroDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_5.setTransform(349, 86.5);

        this.ZeroDotShape_6 = new cjs.Shape();
        this.ZeroDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_6.setTransform(348.5, 91);

        this.ZeroDotShape_7 = new cjs.Shape();
        this.ZeroDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_7.setTransform(347, 95.5);

        this.ZeroDotShape_8 = new cjs.Shape();
        this.ZeroDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_8.setTransform(345, 99.25);

        this.ZeroDotShape_9 = new cjs.Shape();
        this.ZeroDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_9.setTransform(342.5, 102);

        this.ZeroDotShape_10 = new cjs.Shape();
        this.ZeroDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_10.setTransform(339, 104.5);

        this.ZeroDotShape_11 = new cjs.Shape();
        this.ZeroDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_11.setTransform(334.5, 104.5);

        this.ZeroDotShape_12 = new cjs.Shape();
        this.ZeroDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_12.setTransform(331, 102);

        this.ZeroDotShape_13 = new cjs.Shape();
        this.ZeroDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_13.setTransform(328.5, 98.5);

        this.ZeroDotShape_14 = new cjs.Shape();
        this.ZeroDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_14.setTransform(326.75, 94);

        this.ZeroDotShape_15 = new cjs.Shape();
        this.ZeroDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_15.setTransform(326.75, 89.5);

        this.ZeroDotShape_16 = new cjs.Shape();
        this.ZeroDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_16.setTransform(327, 85.25);

        this.ZeroDotShape_17 = new cjs.Shape();
        this.ZeroDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_17.setTransform(328, 81);

        this.ZeroDotShape_18 = new cjs.Shape();
        this.ZeroDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_18.setTransform(330, 77);

        this.ZeroDotShape_19 = new cjs.Shape();
        this.ZeroDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_19.setTransform(332, 73.5);

        this.ZeroDotShape_20 = new cjs.Shape();
        this.ZeroDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_20.setTransform(335.25, 71);

        this.ZeroDotShape_21 = new cjs.Shape();
        this.ZeroDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.ZeroDotShape_21.setTransform(339.5, 70);

        dotZeroContainer_2.addChild(this.ZeroDotShape_1, this.ZeroDotShape_2, this.ZeroDotShape_3, this.ZeroDotShape_4, this.ZeroDotShape_5,
            this.ZeroDotShape_6, this.ZeroDotShape_7, this.ZeroDotShape_8, this.ZeroDotShape_9, this.ZeroDotShape_10, this.ZeroDotShape_11,
            this.ZeroDotShape_12, this.ZeroDotShape_13, this.ZeroDotShape_14, this.ZeroDotShape_15, this.ZeroDotShape_16, this.ZeroDotShape_17,
            this.ZeroDotShape_18, this.ZeroDotShape_19, this.ZeroDotShape_20, this.ZeroDotShape_21);
        dotZeroContainer_2.setTransform(109, 24);

        this.addChild(dotZeroContainer_1, dotZeroContainer_2);

        var col_X = 0;
        for (var col = 0; col < 8; col++) {
            if (col < 2) {
                col_X = 139;
            } else if (col > 1 && col < 4) {
                col_X = 148;
            } else if (col > 3 && col < 6) {
                col_X = 209;
            } else if (col > 5) {
                col_X = 218;
            }

            this.dotShape_1 = new cjs.Shape();
            this.dotShape_1.graphics.f("#4EC0D3").s("#4EC0D3").ss(1, 0, 0, 4).arc(0, 0, 1, 0, 2 * Math.PI);
            this.dotShape_1.setTransform(col_X + (col * 33), 94.5);

            this.addChild(this.dotShape_1);
        }


    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 135);

    (lib.Symbol4 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Skriv siffrorna som saknas i talraden.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.instance_1 = new lib.p44_5();
        this.instance_1.setTransform(32, 32, 0.52, 0.5);

        this.addChild(this.instance_1);

        var splText = [' ', '2', ' ', ' ', '5', ' ', ' ', '8', '9', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

        var shape_X = [60, 104, 148, 191, 235, 272, 315, 354, 396, 437,
            102, 131, 169, 208, 248, 293, 336, 376, 408, 437
        ];
        var shape_Y = [66, 54, 53, 56, 71, 93, 92, 79, 68, 63,
            126, 156, 183, 197, 205, 203, 195, 178, 149, 121
        ];

        for (var i = 0; i < shape_X.length; i++) {
            var fillText = splText[i];

            this.circleShape1 = new cjs.Shape();
            this.circleShape1.graphics.f("#ffffff").s("#ffffff").ss(1, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
            this.circleShape1.setTransform(shape_X[i], shape_Y[i]);

            this.text_2 = new cjs.Text('' + fillText, "24px 'ElisarDTInfant-SemiBold'", "#28A6BF");
            this.text_2.setTransform(shape_X[i] - 6, shape_Y[i] + 8);

            this.addChild(this.circleShape1, this.text_2);
        }

        this.text_3 = new cjs.Text("1", "24px 'ElisarDTInfant-SemiBold'", "#28A6BF");
        this.text_3.setTransform(422, 129);

        this.text_4 = new cjs.Text("0", "24px 'ElisarDTInfant-SemiBold'", "#28A6BF");
        this.text_4.setTransform(432, 129);

        this.addChild(this.text_3, this.text_4);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 210);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 65, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 230, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(303, 400, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
