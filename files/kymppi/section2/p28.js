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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p28_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p28_1.png",
            id: "p28_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p24_3.png",
            id: "p28_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p28_2.png",
            id: "p28_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p28_3.png",
            id: "p28_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/even_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p28_1 = function() {
        this.initialize(img.p28_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p28_2 = function() {
        this.initialize(img.p28_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p28_3 = function() {
        this.initialize(img.p28_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p28_4 = function() {
        this.initialize(img.p28_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("28", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tal och antal 7", "9.5px 'ElisarDTInfant-SemiBold'");
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

        this.instance_1 = new lib.p28_1();
        this.instance_1.setTransform(118, -17, 0.55, 0.52);

        this.instance_2 = new lib.p28_2();
        this.instance_2.setTransform(320, -2, 0.55, 0.52);

        this.instance_3 = new lib.p28_2();
        this.instance_3.setTransform(320, 45, 0.55, 0.52);

        this.text_3 = new cjs.Text("1", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_3.setTransform(335, 18);

        this.text_4 = new cjs.Text("2", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_4.setTransform(364.5, 24.5);

        this.text_5 = new cjs.Text("3", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_5.setTransform(394, 27);

        this.text_6 = new cjs.Text("4", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_6.setTransform(423, 24);

        this.text_7 = new cjs.Text("5", "19px 'ElisarDTInfant-Regular'", "#31B1C9");
        this.text_7.setTransform(453, 18);

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
        this.text_13.setTransform(30, 48);

        this.Arrow = new cjs.Shape();
        this.Arrow.graphics.f("#ffffff").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(32, 0).moveTo(27, 4).lineTo(32, 0).lineTo(27, -4);
        this.Arrow.setTransform(40, 48);

        this.DigitSeven = new cjs.Shape();
        this.DigitSeven.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(41, 0).lineTo(41, 7).lineTo(9, 83).lineTo(1, 83).lineTo(34, 7)
            .lineTo(0, 7).lineTo(0, 0);
        this.DigitSeven.setTransform(40, 57);

        this.addChild(this.headerCircle, this.text_1, this.text_2, this.instance_1, this.instance_2, this.instance_3, this.instance_4,
            this.text_3, this.text_4, this.text_5, this.text_6, this.text_7, this.text_8, this.text_9, this.text_10, this.text_11,
            this.text_12, this.text_13, this.Arrow, this.DigitSeven);

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
                col_X = 131;
            } else if (col > 4) {
                col_X = 149;
            }

            this.NumSeven = new cjs.Shape();
            this.NumSeven.graphics.f("#ffffff").s("#DEDEDE").ss(2).moveTo(0, 0).lineTo(16, 0).lineTo(0, 35);
            this.NumSeven.setTransform(col_X + (col * 33), 100.5);

            this.addChild(this.NumSeven);
        }

        var col_X = 0;
        for (var col = 0; col < 10; col++) {

            if (col < 5) {
                col_X = 130;
            } else if (col > 4) {
                col_X = 166;
            }

            this.dotShape_1 = new cjs.Shape();
            this.dotShape_1.graphics.f("#4EC0D3").s("#4EC0D3").ss(1, 0, 0, 4).arc(0, 0, 1, 0, 2 * Math.PI);
            this.dotShape_1.setTransform(col_X + (col * 33), 100.5);

            this.addChild(this.dotShape_1);
        }

        var dotSevenContainer_1 = new cjs.Container();

        for (var col = 0; col < 3; col++) {
            this.SevenDotShape_1 = new cjs.Shape();
            this.SevenDotShape_1.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
            this.SevenDotShape_1.setTransform(336 + (col * 5.25), 100.5);

            dotSevenContainer_1.addChild(this.SevenDotShape_1);
        }

        for (var row = 0; row < 7; row++) {
            this.SevenDotShape_2 = new cjs.Shape();
            this.SevenDotShape_2.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
            this.SevenDotShape_2.setTransform(345 - (row * 2), 105 + (row * 5));

            dotSevenContainer_1.addChild(this.SevenDotShape_2);
        }

        dotSevenContainer_1.setTransform(0, 0);

        var dotSevenContainer_2 = new cjs.Container();

        for (var col = 0; col < 3; col++) {
            this.SevenDotShape_3 = new cjs.Shape();
            this.SevenDotShape_3.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
            this.SevenDotShape_3.setTransform(336 + (col * 5.25), 100.5);

            dotSevenContainer_2.addChild(this.SevenDotShape_3);
        }

        for (var row = 0; row < 7; row++) {
            this.SevenDotShape_4 = new cjs.Shape();
            this.SevenDotShape_4.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
            this.SevenDotShape_4.setTransform(345 - (row * 2), 105 + (row * 5));

            dotSevenContainer_2.addChild(this.SevenDotShape_4);
        }

        dotSevenContainer_2.setTransform(33, 0);

        var dotSevenContainer_3 = new cjs.Container();

        for (var col = 0; col < 3; col++) {
            this.SevenDotShape_5 = new cjs.Shape();
            this.SevenDotShape_5.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
            this.SevenDotShape_5.setTransform(336 + (col * 5.25), 100.5);

            dotSevenContainer_3.addChild(this.SevenDotShape_5);
        }

        for (var row = 0; row < 7; row++) {
            this.SevenDotShape_6 = new cjs.Shape();
            this.SevenDotShape_6.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
            this.SevenDotShape_6.setTransform(345 - (row * 2), 105 + (row * 5));

            dotSevenContainer_3.addChild(this.SevenDotShape_6);
        }

        dotSevenContainer_3.setTransform(66, 0);

        var dotSevenContainer_4 = new cjs.Container();

        for (var col = 0; col < 3; col++) {
            this.SevenDotShape_7 = new cjs.Shape();
            this.SevenDotShape_7.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
            this.SevenDotShape_7.setTransform(336 + (col * 5.25), 100.5);

            dotSevenContainer_4.addChild(this.SevenDotShape_7);
        }

        for (var row = 0; row < 7; row++) {
            this.SevenDotShape_8 = new cjs.Shape();
            this.SevenDotShape_8.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
            this.SevenDotShape_8.setTransform(345 - (row * 2), 105 + (row * 5));

            dotSevenContainer_4.addChild(this.SevenDotShape_8);
        }

        dotSevenContainer_4.setTransform(99, 0);

        var dotSevenContainer_5 = new cjs.Container();

        for (var col = 0; col < 3; col++) {
            this.SevenDotShape_9 = new cjs.Shape();
            this.SevenDotShape_9.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
            this.SevenDotShape_9.setTransform(336 + (col * 5.25), 100.5);

            dotSevenContainer_5.addChild(this.SevenDotShape_9);
        }

        for (var row = 0; row < 7; row++) {
            this.SevenDotShape_10 = new cjs.Shape();
            this.SevenDotShape_10.graphics.f("#DEDEDE").s("#DEDEDE").ss(1, 0, 0, 4).arc(0, 0, 0.75, 0, 2 * Math.PI);
            this.SevenDotShape_10.setTransform(345 - (row * 2), 105 + (row * 5));

            dotSevenContainer_5.addChild(this.SevenDotShape_10);
        }

        dotSevenContainer_5.setTransform(132, 0);

        this.addChild(dotSevenContainer_1, dotSevenContainer_2, dotSevenContainer_3, dotSevenContainer_4, dotSevenContainer_5);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 135);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Skriv siffrorna som saknas i talraden.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.instance_1 = new lib.p28_3();
        this.instance_1.setTransform(25, 26, 0.54, 0.53);

        this.addChild(this.instance_1);

        var splText = ['1', ' ', '3', ' ', ' ', '6', ' ', ' ', '2', ' ', '4', ' ', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' ',
            '6', ' ', ' ', ' ', ' ', ' ', '5', ' ', ' '
        ];

        var shape_X = [63, 105, 149, 193, 237, 282, 325,
            194, 234, 277, 320, 361, 396, 435,
            61, 99, 128, 158, 160, 197, 233, 270,
            148, 190, 233, 274, 318, 358, 398
        ];
        var shape_Y = [48, 55, 57, 57, 62, 56, 49,
            158, 137, 122, 124, 133, 157, 181,
            205, 213, 237, 260, 258, 260, 248.5, 229,
            331, 337, 351, 367, 370, 349, 320
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

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 390);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 65, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 240, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
