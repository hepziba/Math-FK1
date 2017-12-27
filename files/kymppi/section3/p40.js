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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p40_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p40_1.png",
            id: "p40_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p40_2.png",
            id: "p40_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p40_3.png",
            id: "p40_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p40_4.png",
            id: "p40_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p40_5.png",
            id: "p40_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/even_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.p40_1 = function() {
        this.initialize(img.p40_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p40_2 = function() {
        this.initialize(img.p40_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p40_3 = function() {
        this.initialize(img.p40_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p40_4 = function() {
        this.initialize(img.p40_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p40_5 = function() {
        this.initialize(img.p40_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.NumNine = function() {
        this.initialize();

        var NumNine = new createjs.Container();

        var NumberNine_OuterShape = new createjs.Shape();
        NumberNine_OuterShape.graphics.s('#DEDEDE').ss(7).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(68, 23)
            .bezierCurveTo(37, 18, 14, 70, 36, 77)
            .bezierCurveTo(49, 81, 65, 65, 68, 23);

        NumNine.addChild(NumberNine_OuterShape);
        NumNine.setTransform(0, 0);

        return NumNine;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("40", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tal och antal 9", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, -5);

        this.text_1 = new cjs.Text("Skriv siffran.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 0);

        this.text_2 = new cjs.Text("Måla kulor.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(28, 19);

        this.instance_1 = new lib.p40_1();
        this.instance_1.setTransform(118, -17, 0.5, 0.5);

        this.instance_2 = new lib.p40_2();
        this.instance_2.setTransform(320, 5, 0.55, 0.52);

        this.instance_3 = new lib.p40_2();
        this.instance_3.setTransform(320, 45, 0.55, 0.52);

        this.text_3 = new cjs.Text("1", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_3.setTransform(335, 25);

        this.text_4 = new cjs.Text("2", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_4.setTransform(364.5, 31.5);

        this.text_5 = new cjs.Text("3", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_5.setTransform(394, 34);

        this.text_6 = new cjs.Text("4", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_6.setTransform(423, 31);

        this.text_7 = new cjs.Text("5", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_7.setTransform(453, 25);

        this.text_8 = new cjs.Text("6", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_8.setTransform(335, 65);

        this.text_9 = new cjs.Text("7", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_9.setTransform(364.5, 71.5);

        this.text_10 = new cjs.Text("8", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_10.setTransform(394, 74);

        this.text_11 = new cjs.Text("9", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_11.setTransform(423, 71);

        this.text_12 = new cjs.Text("10", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_12.setTransform(446, 66);

        this.text_13 = new cjs.Text("1", "13px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_13.setTransform(65, 48);

        this.DigitEight = new lib.p40_3();
        this.DigitEight.setTransform(25, 45, 0.65, 0.65);

        this.addChild(this.headerCircle, this.text_1, this.text_2, this.instance_1, this.instance_2, this.instance_3, this.instance_4,
            this.text_3, this.text_4, this.text_5, this.text_6, this.text_7, this.text_8, this.text_9, this.text_10, this.text_11,
            this.text_12, this.DigitEight, this.text_13);

        var col_X = 0;

        for (var col = 0; col < 10; col++) {

            if (col > 4) {
                col_X = 158;
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
            var textNineContainer = new createjs.Container();
            if (col < 5) {
                col_X = 122;
            } else if (col > 4) {
                col_X = 152;
            }

            // this.NumNine = new lib.NumNine();
            // this.NumNine.setTransform(col_X + (col * 33), 92, 0.35, 0.35);

            // this.NumNineLine = new cjs.Shape();
            // this.NumNineLine.graphics.f("#DEDEDE").s("#DEDEDE").ss(2).moveTo(0, 0).lineTo(-5, 24);
            // this.NumNineLine.setTransform(col_X + 22 + (col * 33), 112);

            // this.addChild(this.NumNine, this.NumNineLine);

            this.DigitNine = new lib.p40_5();
            this.DigitNine.setTransform(25, 65.5, 0.67, 0.67);

            textNineContainer.addChild(this.DigitNine);
            textNineContainer.setTransform(115 + (col * 33), 65.5, 0.5, 0.5);

            this.addChild(textNineContainer);
        }

        var dotNineContainer_1 = new cjs.Container();

        this.NineDotShape_1 = new cjs.Shape();
        this.NineDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_1.setTransform(340, 118);

        this.NineDotShape_2 = new cjs.Shape();
        this.NineDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_2.setTransform(335.5, 120);

        this.NineDotShape_3 = new cjs.Shape();
        this.NineDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_3.setTransform(331, 119);

        this.NineDotShape_4 = new cjs.Shape();
        this.NineDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_4.setTransform(330, 114.5);

        this.NineDotShape_5 = new cjs.Shape();
        this.NineDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_5.setTransform(330, 110);

        this.NineDotShape_6 = new cjs.Shape();
        this.NineDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_6.setTransform(331, 105.5);

        this.NineDotShape_7 = new cjs.Shape();
        this.NineDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_7.setTransform(334, 103);

        this.NineDotShape_8 = new cjs.Shape();
        this.NineDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_8.setTransform(338, 101);

        this.NineDotShape_9 = new cjs.Shape();
        this.NineDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_9.setTransform(342, 100);

        this.NineDotShape_10 = new cjs.Shape();
        this.NineDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_10.setTransform(346, 100);

        this.NineDotShape_11 = new cjs.Shape();
        this.NineDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_11.setTransform(346, 104.5);

        this.NineDotShape_12 = new cjs.Shape();
        this.NineDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_12.setTransform(345.75, 109);

        this.NineDotShape_13 = new cjs.Shape();
        this.NineDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_13.setTransform(345.5, 113.5);

        this.NineDotShape_14 = new cjs.Shape();
        this.NineDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_14.setTransform(345.25, 118);

        this.NineDotShape_15 = new cjs.Shape();
        this.NineDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_15.setTransform(345, 122.25);

        this.NineDotShape_16 = new cjs.Shape();
        this.NineDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_16.setTransform(344.75, 126.5);

        this.NineDotShape_17 = new cjs.Shape();
        this.NineDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_17.setTransform(344.5, 130.75);

        this.NineDotShape_18 = new cjs.Shape();
        this.NineDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_18.setTransform(344.25, 135);

        dotNineContainer_1.addChild(this.NineDotShape_1, this.NineDotShape_2, this.NineDotShape_3, this.NineDotShape_4, this.NineDotShape_5,
            this.NineDotShape_6, this.NineDotShape_7, this.NineDotShape_8, this.NineDotShape_9, this.NineDotShape_10, this.NineDotShape_11,
            this.NineDotShape_12, this.NineDotShape_13, this.NineDotShape_14, this.NineDotShape_15, this.NineDotShape_16, this.NineDotShape_17,
            this.NineDotShape_18);
        dotNineContainer_1.setTransform(0, 0);

        var dotNineContainer_2 = new cjs.Container();

        this.NineDotShape_1 = new cjs.Shape();
        this.NineDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_1.setTransform(340, 118);

        this.NineDotShape_2 = new cjs.Shape();
        this.NineDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_2.setTransform(335.5, 120);

        this.NineDotShape_3 = new cjs.Shape();
        this.NineDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_3.setTransform(331, 119);

        this.NineDotShape_4 = new cjs.Shape();
        this.NineDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_4.setTransform(330, 114.5);

        this.NineDotShape_5 = new cjs.Shape();
        this.NineDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_5.setTransform(330, 110);

        this.NineDotShape_6 = new cjs.Shape();
        this.NineDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_6.setTransform(331, 105.5);

        this.NineDotShape_7 = new cjs.Shape();
        this.NineDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_7.setTransform(334, 103);

        this.NineDotShape_8 = new cjs.Shape();
        this.NineDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_8.setTransform(338, 101);

        this.NineDotShape_9 = new cjs.Shape();
        this.NineDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_9.setTransform(342, 100);

        this.NineDotShape_10 = new cjs.Shape();
        this.NineDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_10.setTransform(346, 100);

        this.NineDotShape_11 = new cjs.Shape();
        this.NineDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_11.setTransform(346, 104.5);

        this.NineDotShape_12 = new cjs.Shape();
        this.NineDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_12.setTransform(345.75, 109);

        this.NineDotShape_13 = new cjs.Shape();
        this.NineDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_13.setTransform(345.5, 113.5);

        this.NineDotShape_14 = new cjs.Shape();
        this.NineDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_14.setTransform(345.25, 118);

        this.NineDotShape_15 = new cjs.Shape();
        this.NineDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_15.setTransform(345, 122.25);

        this.NineDotShape_16 = new cjs.Shape();
        this.NineDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_16.setTransform(344.75, 126.5);

        this.NineDotShape_17 = new cjs.Shape();
        this.NineDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_17.setTransform(344.5, 130.75);

        this.NineDotShape_18 = new cjs.Shape();
        this.NineDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_18.setTransform(344.25, 135);

        dotNineContainer_2.addChild(this.NineDotShape_1, this.NineDotShape_2, this.NineDotShape_3, this.NineDotShape_4, this.NineDotShape_5,
            this.NineDotShape_6, this.NineDotShape_7, this.NineDotShape_8, this.NineDotShape_9, this.NineDotShape_10, this.NineDotShape_11,
            this.NineDotShape_12, this.NineDotShape_13, this.NineDotShape_14, this.NineDotShape_15, this.NineDotShape_16, this.NineDotShape_17,
            this.NineDotShape_18);
        dotNineContainer_2.setTransform(33, 0);

        var dotNineContainer_3 = new cjs.Container();

        this.NineDotShape_1 = new cjs.Shape();
        this.NineDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_1.setTransform(340, 118);

        this.NineDotShape_2 = new cjs.Shape();
        this.NineDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_2.setTransform(335.5, 120);

        this.NineDotShape_3 = new cjs.Shape();
        this.NineDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_3.setTransform(331, 119);

        this.NineDotShape_4 = new cjs.Shape();
        this.NineDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_4.setTransform(330, 114.5);

        this.NineDotShape_5 = new cjs.Shape();
        this.NineDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_5.setTransform(330, 110);

        this.NineDotShape_6 = new cjs.Shape();
        this.NineDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_6.setTransform(331, 105.5);

        this.NineDotShape_7 = new cjs.Shape();
        this.NineDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_7.setTransform(334, 103);

        this.NineDotShape_8 = new cjs.Shape();
        this.NineDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_8.setTransform(338, 101);

        this.NineDotShape_9 = new cjs.Shape();
        this.NineDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_9.setTransform(342, 100);

        this.NineDotShape_10 = new cjs.Shape();
        this.NineDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_10.setTransform(346, 100);

        this.NineDotShape_11 = new cjs.Shape();
        this.NineDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_11.setTransform(346, 104.5);

        this.NineDotShape_12 = new cjs.Shape();
        this.NineDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_12.setTransform(345.75, 109);

        this.NineDotShape_13 = new cjs.Shape();
        this.NineDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_13.setTransform(345.5, 113.5);

        this.NineDotShape_14 = new cjs.Shape();
        this.NineDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_14.setTransform(345.25, 118);

        this.NineDotShape_15 = new cjs.Shape();
        this.NineDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_15.setTransform(345, 122.25);

        this.NineDotShape_16 = new cjs.Shape();
        this.NineDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_16.setTransform(344.75, 126.5);

        this.NineDotShape_17 = new cjs.Shape();
        this.NineDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_17.setTransform(344.5, 130.75);

        this.NineDotShape_18 = new cjs.Shape();
        this.NineDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_18.setTransform(344.25, 135);

        dotNineContainer_3.addChild(this.NineDotShape_1, this.NineDotShape_2, this.NineDotShape_3, this.NineDotShape_4, this.NineDotShape_5,
            this.NineDotShape_6, this.NineDotShape_7, this.NineDotShape_8, this.NineDotShape_9, this.NineDotShape_10, this.NineDotShape_11,
            this.NineDotShape_12, this.NineDotShape_13, this.NineDotShape_14, this.NineDotShape_15, this.NineDotShape_16, this.NineDotShape_17,
            this.NineDotShape_18);
        dotNineContainer_3.setTransform(66, 0);

        var dotNineContainer_4 = new cjs.Container();

        this.NineDotShape_1 = new cjs.Shape();
        this.NineDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_1.setTransform(340, 118);

        this.NineDotShape_2 = new cjs.Shape();
        this.NineDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_2.setTransform(335.5, 120);

        this.NineDotShape_3 = new cjs.Shape();
        this.NineDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_3.setTransform(331, 119);

        this.NineDotShape_4 = new cjs.Shape();
        this.NineDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_4.setTransform(330, 114.5);

        this.NineDotShape_5 = new cjs.Shape();
        this.NineDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_5.setTransform(330, 110);

        this.NineDotShape_6 = new cjs.Shape();
        this.NineDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_6.setTransform(331, 105.5);

        this.NineDotShape_7 = new cjs.Shape();
        this.NineDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_7.setTransform(334, 103);

        this.NineDotShape_8 = new cjs.Shape();
        this.NineDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_8.setTransform(338, 101);

        this.NineDotShape_9 = new cjs.Shape();
        this.NineDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_9.setTransform(342, 100);

        this.NineDotShape_10 = new cjs.Shape();
        this.NineDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_10.setTransform(346, 100);

        this.NineDotShape_11 = new cjs.Shape();
        this.NineDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_11.setTransform(346, 104.5);

        this.NineDotShape_12 = new cjs.Shape();
        this.NineDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_12.setTransform(345.75, 109);

        this.NineDotShape_13 = new cjs.Shape();
        this.NineDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_13.setTransform(345.5, 113.5);

        this.NineDotShape_14 = new cjs.Shape();
        this.NineDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_14.setTransform(345.25, 118);

        this.NineDotShape_15 = new cjs.Shape();
        this.NineDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_15.setTransform(345, 122.25);

        this.NineDotShape_16 = new cjs.Shape();
        this.NineDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_16.setTransform(344.75, 126.5);

        this.NineDotShape_17 = new cjs.Shape();
        this.NineDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_17.setTransform(344.5, 130.75);

        this.NineDotShape_18 = new cjs.Shape();
        this.NineDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_18.setTransform(344.25, 135);

        dotNineContainer_4.addChild(this.NineDotShape_1, this.NineDotShape_2, this.NineDotShape_3, this.NineDotShape_4, this.NineDotShape_5,
            this.NineDotShape_6, this.NineDotShape_7, this.NineDotShape_8, this.NineDotShape_9, this.NineDotShape_10, this.NineDotShape_11,
            this.NineDotShape_12, this.NineDotShape_13, this.NineDotShape_14, this.NineDotShape_15, this.NineDotShape_16, this.NineDotShape_17,
            this.NineDotShape_18);
        dotNineContainer_4.setTransform(99, 0);

        var dotNineContainer_5 = new cjs.Container();

        this.NineDotShape_1 = new cjs.Shape();
        this.NineDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_1.setTransform(340, 118);

        this.NineDotShape_2 = new cjs.Shape();
        this.NineDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_2.setTransform(335.5, 120);

        this.NineDotShape_3 = new cjs.Shape();
        this.NineDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_3.setTransform(331, 119);

        this.NineDotShape_4 = new cjs.Shape();
        this.NineDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_4.setTransform(330, 114.5);

        this.NineDotShape_5 = new cjs.Shape();
        this.NineDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_5.setTransform(330, 110);

        this.NineDotShape_6 = new cjs.Shape();
        this.NineDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_6.setTransform(331, 105.5);

        this.NineDotShape_7 = new cjs.Shape();
        this.NineDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_7.setTransform(334, 103);

        this.NineDotShape_8 = new cjs.Shape();
        this.NineDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_8.setTransform(338, 101);

        this.NineDotShape_9 = new cjs.Shape();
        this.NineDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_9.setTransform(342, 100);

        this.NineDotShape_10 = new cjs.Shape();
        this.NineDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_10.setTransform(346, 100);

        this.NineDotShape_11 = new cjs.Shape();
        this.NineDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_11.setTransform(346, 104.5);

        this.NineDotShape_12 = new cjs.Shape();
        this.NineDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_12.setTransform(345.75, 109);

        this.NineDotShape_13 = new cjs.Shape();
        this.NineDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_13.setTransform(345.5, 113.5);

        this.NineDotShape_14 = new cjs.Shape();
        this.NineDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_14.setTransform(345.25, 118);

        this.NineDotShape_15 = new cjs.Shape();
        this.NineDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_15.setTransform(345, 122.25);

        this.NineDotShape_16 = new cjs.Shape();
        this.NineDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_16.setTransform(344.75, 126.5);

        this.NineDotShape_17 = new cjs.Shape();
        this.NineDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_17.setTransform(344.5, 130.75);

        this.NineDotShape_18 = new cjs.Shape();
        this.NineDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.NineDotShape_18.setTransform(344.25, 135);

        dotNineContainer_5.addChild(this.NineDotShape_1, this.NineDotShape_2, this.NineDotShape_3, this.NineDotShape_4, this.NineDotShape_5,
            this.NineDotShape_6, this.NineDotShape_7, this.NineDotShape_8, this.NineDotShape_9, this.NineDotShape_10, this.NineDotShape_11,
            this.NineDotShape_12, this.NineDotShape_13, this.NineDotShape_14, this.NineDotShape_15, this.NineDotShape_16, this.NineDotShape_17,
            this.NineDotShape_18);
        dotNineContainer_5.setTransform(132, 0);

        this.addChild(dotNineContainer_1, dotNineContainer_2, dotNineContainer_3, dotNineContainer_4, dotNineContainer_5);

        var col_X = 0;
        for (var col = 0; col < 10; col++) {

            if (col < 5) {
                col_X = 145;
            } else if (col > 4) {
                col_X = 181;
            }

            this.dotShape_1 = new cjs.Shape();
            this.dotShape_1.graphics.f("#4EC0D3").s("#4EC0D3").ss(1, 0, 0, 4).arc(0, 0, 1, 0, 2 * Math.PI);
            this.dotShape_1.setTransform(col_X + (col * 33), 99.5);

            this.addChild(this.dotShape_1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 155);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Skriv talens grannar.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.instance_1 = new lib.p40_4();
        this.instance_1.setTransform(43, 8, 0.57, 0.57);

        this.addChild(this.headerCircle, this.text_1, this.instance_1);

        var splText = [' ', '2', ' ', ' ', '3', ' ', ' ', '7', ' ', ' ', '5', ' ', ' ', '4', ' ', ' ', '6', ' '];
        var count = 0;
        var shape_X = 0;
        var shape_Y = 0;

        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 9; col++) {
                var fillText = splText[count];
                count = count + 1;

                if (row == 0 && col < 3) {
                    shape_X = 55;
                    shape_Y = 52;
                } else if (row == 0 && col > 2 && col < 6) {
                    shape_X = 83;
                    shape_Y = 52;
                } else if (row == 0 && col > 5) {
                    shape_X = 111;
                    shape_Y = 52;
                } else if (row == 1 && col < 3) {
                    shape_X = 55;
                    shape_Y = 128;
                } else if (row == 1 && col > 2 && col < 6) {
                    shape_X = 83;
                    shape_Y = 127.5;
                } else if (row == 1 && col > 5) {
                    shape_X = 111;
                    shape_Y = 127;
                }

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#ffffff").ss(1).drawRect(0, 0, 22, 26);
                this.Rect1.setTransform(shape_X + (col * 38), shape_Y);

                this.text_2 = new cjs.Text('' + fillText, "24px 'ElisarDTInfant-SemiBold'", "#28A6BF");
                this.text_2.setTransform(shape_X + 4 + (col * 38), shape_Y + 22);

                this.addChild(this.Rect1, this.text_2);
            }
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 180);

    (lib.Symbol4 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Rita till så att det är 9 tillsammans.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var col = 0; col < 2; col++) {

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#D2E8F0").ss(1).drawRoundRect(0, 0, 217, 167, 12);
            this.Rect1.setTransform(30 + (col * 238), 20);

            this.addChild(this.Rect1);
        }

        this.circleShape1 = new cjs.Shape();
        this.circleShape1.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape1.setTransform(120, 55);

        this.circleShape2 = new cjs.Shape();
        this.circleShape2.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape2.setTransform(60, 85);

        this.circleShape3 = new cjs.Shape();
        this.circleShape3.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape3.setTransform(110, 115);

        this.circleShape4 = new cjs.Shape();
        this.circleShape4.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape4.setTransform(70, 145);

        this.triangleShape1 = new cjs.Shape();
        this.triangleShape1.graphics.f("#908EC1").s("#908EC1").ss(0.5).moveTo(0, 0).lineTo(18, 0).lineTo(9, -18).lineTo(0, 0);
        this.triangleShape1.setTransform(312, 72);

        this.triangleShape2 = new cjs.Shape();
        this.triangleShape2.graphics.f("#908EC1").s("#908EC1").ss(0.5).moveTo(0, 0).lineTo(18, 0).lineTo(9, -18).lineTo(0, 0);
        this.triangleShape2.setTransform(300, 140);

        this.triangleShape3 = new cjs.Shape();
        this.triangleShape3.graphics.f("#908EC1").s("#908EC1").ss(0.5).moveTo(0, 0).lineTo(18, 0).lineTo(9, -18).lineTo(0, 0);
        this.triangleShape3.setTransform(340, 105);

        this.triangleShape4 = new cjs.Shape();
        this.triangleShape4.graphics.f("#908EC1").s("#908EC1").ss(0.5).moveTo(0, 0).lineTo(18, 0).lineTo(9, -18).lineTo(0, 0);
        this.triangleShape4.setTransform(415, 90);

        this.addChild(this.circleShape1, this.circleShape2, this.circleShape3, this.circleShape4, this.triangleShape1, this.triangleShape2,
            this.triangleShape3, this.triangleShape4)

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 110);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 58, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 238, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(303, 437, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
