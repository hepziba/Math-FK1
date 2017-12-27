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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p32_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p32_1.png",
            id: "p32_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_3.png",
            id: "p32_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p32_2.png",
            id: "p32_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p32_3.png",
            id: "p32_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/even_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p32_1 = function() {
        this.initialize(img.p32_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p32_2 = function() {
        this.initialize(img.p32_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p32_3 = function() {
        this.initialize(img.p32_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p32_4 = function() {
        this.initialize(img.p32_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.NumEight1 = function() {
        this.initialize();

        var NumEight = new createjs.Container();

        var NumberEight_OuterShape = new createjs.Shape();
        NumberEight_OuterShape.graphics.s('#DEDEDE').ss(10).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(137, 162)
            .bezierCurveTo(45, 81, 165, 29, 188, 74)
            .bezierCurveTo(198, 93, 214, 125, 138, 162)
            .bezierCurveTo(147, 165, 226, 210, 161, 283)
            .bezierCurveTo(102, 349, -2, 225, 137, 162);

        NumEight.addChild(NumberEight_OuterShape);
        NumEight.setTransform(0, 0);

        return NumEight;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("32", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tal och antal 8", "9.5px 'ElisarDTInfant-SemiBold'");
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

        this.instance_1 = new lib.p32_1();
        this.instance_1.setTransform(118, -17, 0.55, 0.52);

        this.instance_2 = new lib.p32_2();
        this.instance_2.setTransform(320, 5, 0.55, 0.52);

        this.instance_3 = new lib.p32_2();
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
        this.text_13.setTransform(75, 37);

        this.DigitEight = new lib.p32_4();
        this.DigitEight.setTransform(20, 26, 0.35, 0.35);

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

            if (col < 5) {
                col_X = 117;
            } else if (col > 4) {
                col_X = 154;
            }

            this.NumEight = new lib.NumEight1();
            this.NumEight.setTransform(col_X + (col * 33), 92.7, 0.14, 0.14);

            this.addChild(this.NumEight);
        }

        var dotEightContainer_1 = new cjs.Container();

        this.EightDotShape_1 = new cjs.Shape();
        this.EightDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_1.setTransform(338, 115);

        this.EightDotShape_2 = new cjs.Shape();
        this.EightDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_2.setTransform(335, 112);

        this.EightDotShape_3 = new cjs.Shape();
        this.EightDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_3.setTransform(333, 108.5);

        this.EightDotShape_4 = new cjs.Shape();
        this.EightDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_4.setTransform(333.5, 104.5);

        this.EightDotShape_5 = new cjs.Shape();
        this.EightDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_5.setTransform(336, 101.5);

        this.EightDotShape_6 = new cjs.Shape();
        this.EightDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_6.setTransform(342, 101);

        this.EightDotShape_7 = new cjs.Shape();
        this.EightDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_7.setTransform(345, 103);

        this.EightDotShape_8 = new cjs.Shape();
        this.EightDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_8.setTransform(346, 107);

        this.EightDotShape_9 = new cjs.Shape();
        this.EightDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_9.setTransform(345, 111);

        this.EightDotShape_10 = new cjs.Shape();
        this.EightDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_10.setTransform(342, 114);

        this.EightDotShape_11 = new cjs.Shape();
        this.EightDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_11.setTransform(342, 118);

        this.EightDotShape_12 = new cjs.Shape();
        this.EightDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_12.setTransform(345, 121);

        this.EightDotShape_13 = new cjs.Shape();
        this.EightDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_13.setTransform(345, 125);

        this.EightDotShape_14 = new cjs.Shape();
        this.EightDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_14.setTransform(344, 129);

        this.EightDotShape_15 = new cjs.Shape();
        this.EightDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_15.setTransform(341.5, 132);

        this.EightDotShape_16 = new cjs.Shape();
        this.EightDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_16.setTransform(338, 134.5);

        this.EightDotShape_17 = new cjs.Shape();
        this.EightDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_17.setTransform(333.5, 134);

        this.EightDotShape_18 = new cjs.Shape();
        this.EightDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_18.setTransform(330.5, 131);

        this.EightDotShape_19 = new cjs.Shape();
        this.EightDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_19.setTransform(329, 127);

        this.EightDotShape_20 = new cjs.Shape();
        this.EightDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_20.setTransform(329.5, 123);

        this.EightDotShape_21 = new cjs.Shape();
        this.EightDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_21.setTransform(331.5, 119.5);

        this.EightDotShape_22 = new cjs.Shape();
        this.EightDotShape_22.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_22.setTransform(334.5, 117);

        dotEightContainer_1.addChild(this.EightDotShape_1, this.EightDotShape_2, this.EightDotShape_3, this.EightDotShape_4, this.EightDotShape_5,
            this.EightDotShape_6, this.EightDotShape_7, this.EightDotShape_8, this.EightDotShape_9, this.EightDotShape_10, this.EightDotShape_11,
            this.EightDotShape_12, this.EightDotShape_13, this.EightDotShape_14, this.EightDotShape_15, this.EightDotShape_16, this.EightDotShape_17,
            this.EightDotShape_18, this.EightDotShape_19, this.EightDotShape_20, this.EightDotShape_21, this.EightDotShape_22);
        dotEightContainer_1.setTransform(1, 0);

        var dotEightContainer_2 = new cjs.Container();

        this.EightDotShape_1 = new cjs.Shape();
        this.EightDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_1.setTransform(338, 115);

        this.EightDotShape_2 = new cjs.Shape();
        this.EightDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_2.setTransform(335, 112);

        this.EightDotShape_3 = new cjs.Shape();
        this.EightDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_3.setTransform(333, 108.5);

        this.EightDotShape_4 = new cjs.Shape();
        this.EightDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_4.setTransform(333.5, 104.5);

        this.EightDotShape_5 = new cjs.Shape();
        this.EightDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_5.setTransform(336, 101.5);

        this.EightDotShape_6 = new cjs.Shape();
        this.EightDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_6.setTransform(342, 101);

        this.EightDotShape_7 = new cjs.Shape();
        this.EightDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_7.setTransform(345, 103);

        this.EightDotShape_8 = new cjs.Shape();
        this.EightDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_8.setTransform(346, 107);

        this.EightDotShape_9 = new cjs.Shape();
        this.EightDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_9.setTransform(345, 111);

        this.EightDotShape_10 = new cjs.Shape();
        this.EightDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_10.setTransform(342, 114);

        this.EightDotShape_11 = new cjs.Shape();
        this.EightDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_11.setTransform(342, 118);

        this.EightDotShape_12 = new cjs.Shape();
        this.EightDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_12.setTransform(345, 121);

        this.EightDotShape_13 = new cjs.Shape();
        this.EightDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_13.setTransform(345, 125);

        this.EightDotShape_14 = new cjs.Shape();
        this.EightDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_14.setTransform(344, 129);

        this.EightDotShape_15 = new cjs.Shape();
        this.EightDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_15.setTransform(341.5, 132);

        this.EightDotShape_16 = new cjs.Shape();
        this.EightDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_16.setTransform(338, 134.5);

        this.EightDotShape_17 = new cjs.Shape();
        this.EightDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_17.setTransform(333.5, 134);

        this.EightDotShape_18 = new cjs.Shape();
        this.EightDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_18.setTransform(330.5, 131);

        this.EightDotShape_19 = new cjs.Shape();
        this.EightDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_19.setTransform(329, 127);

        this.EightDotShape_20 = new cjs.Shape();
        this.EightDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_20.setTransform(329.5, 123);

        this.EightDotShape_21 = new cjs.Shape();
        this.EightDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_21.setTransform(331.5, 119.5);

        this.EightDotShape_22 = new cjs.Shape();
        this.EightDotShape_22.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_22.setTransform(334.5, 117);

        dotEightContainer_2.addChild(this.EightDotShape_1, this.EightDotShape_2, this.EightDotShape_3, this.EightDotShape_4, this.EightDotShape_5,
            this.EightDotShape_6, this.EightDotShape_7, this.EightDotShape_8, this.EightDotShape_9, this.EightDotShape_10, this.EightDotShape_11,
            this.EightDotShape_12, this.EightDotShape_13, this.EightDotShape_14, this.EightDotShape_15, this.EightDotShape_16, this.EightDotShape_17,
            this.EightDotShape_18, this.EightDotShape_19, this.EightDotShape_20, this.EightDotShape_21, this.EightDotShape_22);
        dotEightContainer_2.setTransform(34, 0);

        var dotEightContainer_3 = new cjs.Container();

        this.EightDotShape_1 = new cjs.Shape();
        this.EightDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_1.setTransform(338, 115);

        this.EightDotShape_2 = new cjs.Shape();
        this.EightDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_2.setTransform(335, 112);

        this.EightDotShape_3 = new cjs.Shape();
        this.EightDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_3.setTransform(333, 108.5);

        this.EightDotShape_4 = new cjs.Shape();
        this.EightDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_4.setTransform(333.5, 104.5);

        this.EightDotShape_5 = new cjs.Shape();
        this.EightDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_5.setTransform(336, 101.5);

        this.EightDotShape_6 = new cjs.Shape();
        this.EightDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_6.setTransform(342, 101);

        this.EightDotShape_7 = new cjs.Shape();
        this.EightDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_7.setTransform(345, 103);

        this.EightDotShape_8 = new cjs.Shape();
        this.EightDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_8.setTransform(346, 107);

        this.EightDotShape_9 = new cjs.Shape();
        this.EightDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_9.setTransform(345, 111);

        this.EightDotShape_10 = new cjs.Shape();
        this.EightDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_10.setTransform(342, 114);

        this.EightDotShape_11 = new cjs.Shape();
        this.EightDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_11.setTransform(342, 118);

        this.EightDotShape_12 = new cjs.Shape();
        this.EightDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_12.setTransform(345, 121);

        this.EightDotShape_13 = new cjs.Shape();
        this.EightDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_13.setTransform(345, 125);

        this.EightDotShape_14 = new cjs.Shape();
        this.EightDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_14.setTransform(344, 129);

        this.EightDotShape_15 = new cjs.Shape();
        this.EightDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_15.setTransform(341.5, 132);

        this.EightDotShape_16 = new cjs.Shape();
        this.EightDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_16.setTransform(338, 134.5);

        this.EightDotShape_17 = new cjs.Shape();
        this.EightDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_17.setTransform(333.5, 134);

        this.EightDotShape_18 = new cjs.Shape();
        this.EightDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_18.setTransform(330.5, 131);

        this.EightDotShape_19 = new cjs.Shape();
        this.EightDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_19.setTransform(329, 127);

        this.EightDotShape_20 = new cjs.Shape();
        this.EightDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_20.setTransform(329.5, 123);

        this.EightDotShape_21 = new cjs.Shape();
        this.EightDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_21.setTransform(331.5, 119.5);

        this.EightDotShape_22 = new cjs.Shape();
        this.EightDotShape_22.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_22.setTransform(334.5, 117);

        dotEightContainer_3.addChild(this.EightDotShape_1, this.EightDotShape_2, this.EightDotShape_3, this.EightDotShape_4, this.EightDotShape_5,
            this.EightDotShape_6, this.EightDotShape_7, this.EightDotShape_8, this.EightDotShape_9, this.EightDotShape_10, this.EightDotShape_11,
            this.EightDotShape_12, this.EightDotShape_13, this.EightDotShape_14, this.EightDotShape_15, this.EightDotShape_16, this.EightDotShape_17,
            this.EightDotShape_18, this.EightDotShape_19, this.EightDotShape_20, this.EightDotShape_21, this.EightDotShape_22);
        dotEightContainer_3.setTransform(67, 0);

        var dotEightContainer_4 = new cjs.Container();

        this.EightDotShape_1 = new cjs.Shape();
        this.EightDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_1.setTransform(338, 115);

        this.EightDotShape_2 = new cjs.Shape();
        this.EightDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_2.setTransform(335, 112);

        this.EightDotShape_3 = new cjs.Shape();
        this.EightDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_3.setTransform(333, 108.5);

        this.EightDotShape_4 = new cjs.Shape();
        this.EightDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_4.setTransform(333.5, 104.5);

        this.EightDotShape_5 = new cjs.Shape();
        this.EightDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_5.setTransform(336, 101.5);

        this.EightDotShape_6 = new cjs.Shape();
        this.EightDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_6.setTransform(342, 101);

        this.EightDotShape_7 = new cjs.Shape();
        this.EightDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_7.setTransform(345, 103);

        this.EightDotShape_8 = new cjs.Shape();
        this.EightDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_8.setTransform(346, 107);

        this.EightDotShape_9 = new cjs.Shape();
        this.EightDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_9.setTransform(345, 111);

        this.EightDotShape_10 = new cjs.Shape();
        this.EightDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_10.setTransform(342, 114);

        this.EightDotShape_11 = new cjs.Shape();
        this.EightDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_11.setTransform(342, 118);

        this.EightDotShape_12 = new cjs.Shape();
        this.EightDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_12.setTransform(345, 121);

        this.EightDotShape_13 = new cjs.Shape();
        this.EightDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_13.setTransform(345, 125);

        this.EightDotShape_14 = new cjs.Shape();
        this.EightDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_14.setTransform(344, 129);

        this.EightDotShape_15 = new cjs.Shape();
        this.EightDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_15.setTransform(341.5, 132);

        this.EightDotShape_16 = new cjs.Shape();
        this.EightDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_16.setTransform(338, 134.5);

        this.EightDotShape_17 = new cjs.Shape();
        this.EightDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_17.setTransform(333.5, 134);

        this.EightDotShape_18 = new cjs.Shape();
        this.EightDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_18.setTransform(330.5, 131);

        this.EightDotShape_19 = new cjs.Shape();
        this.EightDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_19.setTransform(329, 127);

        this.EightDotShape_20 = new cjs.Shape();
        this.EightDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_20.setTransform(329.5, 123);

        this.EightDotShape_21 = new cjs.Shape();
        this.EightDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_21.setTransform(331.5, 119.5);

        this.EightDotShape_22 = new cjs.Shape();
        this.EightDotShape_22.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_22.setTransform(334.5, 117);

        dotEightContainer_4.addChild(this.EightDotShape_1, this.EightDotShape_2, this.EightDotShape_3, this.EightDotShape_4, this.EightDotShape_5,
            this.EightDotShape_6, this.EightDotShape_7, this.EightDotShape_8, this.EightDotShape_9, this.EightDotShape_10, this.EightDotShape_11,
            this.EightDotShape_12, this.EightDotShape_13, this.EightDotShape_14, this.EightDotShape_15, this.EightDotShape_16, this.EightDotShape_17,
            this.EightDotShape_18, this.EightDotShape_19, this.EightDotShape_20, this.EightDotShape_21, this.EightDotShape_22);
        dotEightContainer_4.setTransform(100, 0);

        var dotEightContainer_5 = new cjs.Container();

        this.EightDotShape_1 = new cjs.Shape();
        this.EightDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_1.setTransform(338, 115);

        this.EightDotShape_2 = new cjs.Shape();
        this.EightDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_2.setTransform(335, 112);

        this.EightDotShape_3 = new cjs.Shape();
        this.EightDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_3.setTransform(333, 108.5);

        this.EightDotShape_4 = new cjs.Shape();
        this.EightDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_4.setTransform(333.5, 104.5);

        this.EightDotShape_5 = new cjs.Shape();
        this.EightDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_5.setTransform(336, 101.5);

        this.EightDotShape_6 = new cjs.Shape();
        this.EightDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_6.setTransform(342, 101);

        this.EightDotShape_7 = new cjs.Shape();
        this.EightDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_7.setTransform(345, 103);

        this.EightDotShape_8 = new cjs.Shape();
        this.EightDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_8.setTransform(346, 107);

        this.EightDotShape_9 = new cjs.Shape();
        this.EightDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_9.setTransform(345, 111);

        this.EightDotShape_10 = new cjs.Shape();
        this.EightDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_10.setTransform(342, 114);

        this.EightDotShape_11 = new cjs.Shape();
        this.EightDotShape_11.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_11.setTransform(342, 118);

        this.EightDotShape_12 = new cjs.Shape();
        this.EightDotShape_12.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_12.setTransform(345, 121);

        this.EightDotShape_13 = new cjs.Shape();
        this.EightDotShape_13.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_13.setTransform(345, 125);

        this.EightDotShape_14 = new cjs.Shape();
        this.EightDotShape_14.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_14.setTransform(344, 129);

        this.EightDotShape_15 = new cjs.Shape();
        this.EightDotShape_15.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_15.setTransform(341.5, 132);

        this.EightDotShape_16 = new cjs.Shape();
        this.EightDotShape_16.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_16.setTransform(338, 134.5);

        this.EightDotShape_17 = new cjs.Shape();
        this.EightDotShape_17.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_17.setTransform(333.5, 134);

        this.EightDotShape_18 = new cjs.Shape();
        this.EightDotShape_18.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_18.setTransform(330.5, 131);

        this.EightDotShape_19 = new cjs.Shape();
        this.EightDotShape_19.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_19.setTransform(329, 127);

        this.EightDotShape_20 = new cjs.Shape();
        this.EightDotShape_20.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_20.setTransform(329.5, 123);

        this.EightDotShape_21 = new cjs.Shape();
        this.EightDotShape_21.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_21.setTransform(331.5, 119.5);

        this.EightDotShape_22 = new cjs.Shape();
        this.EightDotShape_22.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
        this.EightDotShape_22.setTransform(334.5, 117);

        dotEightContainer_5.addChild(this.EightDotShape_1, this.EightDotShape_2, this.EightDotShape_3, this.EightDotShape_4, this.EightDotShape_5,
            this.EightDotShape_6, this.EightDotShape_7, this.EightDotShape_8, this.EightDotShape_9, this.EightDotShape_10, this.EightDotShape_11,
            this.EightDotShape_12, this.EightDotShape_13, this.EightDotShape_14, this.EightDotShape_15, this.EightDotShape_16, this.EightDotShape_17,
            this.EightDotShape_18, this.EightDotShape_19, this.EightDotShape_20, this.EightDotShape_21, this.EightDotShape_22);
        dotEightContainer_5.setTransform(133, 0);

        this.addChild(dotEightContainer_1, dotEightContainer_2, dotEightContainer_3, dotEightContainer_4, dotEightContainer_5);



        var col_X = 0;
        for (var col = 0; col < 10; col++) {

            if (col < 5) {
                col_X = 139;
            } else if (col > 4) {
                col_X = 175;
            }

            this.dotShape_1 = new cjs.Shape();
            this.dotShape_1.graphics.f("#4EC0D3").s("#4EC0D3").ss(1, 0, 0, 4).arc(0, 0, 1, 0, 2 * Math.PI);
            this.dotShape_1.setTransform(col_X + (col * 33), 100);

            this.addChild(this.dotShape_1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 135);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Skriv talens grannar.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.instance_1 = new lib.p32_3();
        this.instance_1.setTransform(43, 18, 0.57, 0.57);

        this.addChild(this.headerCircle, this.text_1, this.instance_1);

        var splText = [' ', '2', ' ', ' ', '3', ' ', ' ', '7', ' ', ' ', '5', ' ', ' ', '4', ' ', ' ', '6', ' ', ' ', ' ', '3', ' ', ' ', '5', ' ', ' ', '8'];
        var count = 0;
        var shape_X = 0;
        var shape_Y = 0;
        var Text_X = 0;
        var Text_Y = 0;

        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 9; col++) {
                var fillText = splText[count];
                count = count + 1;

                if (row == 0 && col < 3) {
                    shape_X = 65;
                    shape_Y = 52;
                } else if (row == 0 && col > 2 && col < 6) {
                    shape_X = 93;
                    shape_Y = 52;
                } else if (row == 0 && col > 5) {
                    shape_X = 121;
                    shape_Y = 52;
                } else if (row == 1 && col < 3) {
                    shape_X = 65;
                    shape_Y = 128;
                } else if (row == 1 && col > 2 && col < 6) {
                    shape_X = 93;
                    shape_Y = 127.5;
                } else if (row == 1 && col > 5) {
                    shape_X = 121;
                    shape_Y = 127;
                } else if (row == 2 && col < 3) {
                    shape_X = 65;
                    shape_Y = 202;
                } else if (row == 2 && col > 2 && col < 6) {
                    shape_X = 93;
                    shape_Y = 202;
                } else if (row == 2 && col > 5) {
                    shape_X = 121;
                    shape_Y = 202;
                }
                if (row == 2 && col == 8) {
                    Text_X = shape_X + 2.5;
                    Text_Y = shape_Y + 22;
                } else {
                    Text_X = shape_X + 4;
                    Text_Y = shape_Y + 22;
                }

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#ffffff").ss(1).drawRect(0, 0, 22, 26);
                this.Rect1.setTransform(shape_X + (col * 38), shape_Y);

                this.text_2 = new cjs.Text('' + fillText, "24px 'ElisarDTInfant-SemiBold'", "#28A6BF");
                this.text_2.setTransform(Text_X + (col * 38), Text_Y);

                this.addChild(this.Rect1, this.text_2);
            }
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 260);

    (lib.Symbol4 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Rita till så att det är 8 tillsammans.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var col = 0; col < 2; col++) {

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#D2E8F0").ss(1).drawRoundRect(0, 0, 219, 88, 12);
            this.Rect1.setTransform(30 + (col * 238), 20);

            this.addChild(this.Rect1);
        }

        this.circleShape1 = new cjs.Shape();
        this.circleShape1.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape1.setTransform(60, 47);

        this.circleShape2 = new cjs.Shape();
        this.circleShape2.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape2.setTransform(103, 59);

        this.circleShape3 = new cjs.Shape();
        this.circleShape3.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape3.setTransform(70, 82);

        this.circleShape4 = new cjs.Shape();
        this.circleShape4.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape4.setTransform(140, 42);

        this.triangleShape1 = new cjs.Shape();
        this.triangleShape1.graphics.f("#28A6BF").s("#28A6BF").ss(0.5).moveTo(0, 0).lineTo(18, 0).lineTo(9, -18).lineTo(0, 0);
        this.triangleShape1.setTransform(312, 52);

        this.triangleShape2 = new cjs.Shape();
        this.triangleShape2.graphics.f("#28A6BF").s("#28A6BF").ss(0.5).moveTo(0, 0).lineTo(18, 0).lineTo(9, -18).lineTo(0, 0);
        this.triangleShape2.setTransform(290, 92);

        this.triangleShape3 = new cjs.Shape();
        this.triangleShape3.graphics.f("#28A6BF").s("#28A6BF").ss(0.5).moveTo(0, 0).lineTo(18, 0).lineTo(9, -18).lineTo(0, 0);
        this.triangleShape3.setTransform(340, 80);

        this.addChild(this.circleShape1, this.circleShape2, this.circleShape3, this.circleShape4, this.triangleShape1, this.triangleShape2,
            this.triangleShape3)

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 140);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 65, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 240, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(303, 515, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
