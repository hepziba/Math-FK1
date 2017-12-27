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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p71_11.png");
    // mathviewer.setIconVisibility(true);
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p71_1.png",
            id: "p71_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p71_2.png",
            id: "p71_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p71_3.png",
            id: "p71_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p71_4.png",
            id: "p71_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p71_5.png",
            id: "p71_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p71_6.png",
            id: "p71_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p71_7.png",
            id: "p71_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p71_8.png",
            id: "p71_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p71_9.png",
            id: "p71_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/bgStrip_1.png",
            id: "bgStrip_1"
        }]
    };

    (lib.p71_1 = function() {
        this.initialize(img.p71_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p71_2 = function() {
        this.initialize(img.p71_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p71_3 = function() {
        this.initialize(img.p71_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p71_4 = function() {
        this.initialize(img.p71_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p71_5 = function() {
        this.initialize(img.p71_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p71_6 = function() {
        this.initialize(img.p71_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p71_7 = function() {
        this.initialize(img.p71_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p71_8 = function() {
        this.initialize(img.p71_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p71_9 = function() {
        this.initialize(img.p71_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.bgStrip_1 = function() {
        this.initialize(img.bgStrip_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.bgStrip_1();
        this.instance_1.setTransform(0, 0, 1, 1);

        this.pageNum_text = new cjs.Text("71", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(538, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#C7EBF2").s("#C7EBF2").ss(1).drawRoundRect(0, 0, 458, 175, 12);
        this.roundRect1.setTransform(72, 34);

        this.roundRect2 = new cjs.Shape();
        this.roundRect2.graphics.f("#ffffff").s("#ffffff").ss(1).drawRoundRect(0, 0, 452, 171, 12);
        this.roundRect2.setTransform(75, 36);

        this.text_1 = new cjs.Text("Spelregler", "19px 'Albus'", "#D03268");
        this.text_1.setTransform(281, 63);

        this.addChild(this.roundRect1, this.roundRect2, this.text_1);

        var horizontalDashedLineContainer1 = new cjs.Container();

        var dot_X = 105,
            dot_Y1 = 85,
            dot_Y2 = 252;
        for (var col = 0; col < 86; col++) {

            this.upperDashedLine_1 = new cjs.Shape();
            this.upperDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.upperDashedLine_1.setTransform(dot_X + (col * 5), dot_Y1);

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (col * 5), dot_Y2);

            horizontalDashedLineContainer1.addChild(this.upperDashedLine_1, this.lowerDashedLine_1);
            horizontalDashedLineContainer1.setTransform(-16, -47);

            this.addChild(horizontalDashedLineContainer1);
        }

        var verticalalDashedLineContainer1 = new cjs.Container();

        var dot_X1 = 93,
            dot_X2 = 541,
            dot_Y = 93;
        for (var row = 0; row < 30; row++) {

            this.leftDashedLine_1 = new cjs.Shape();
            this.leftDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3.1);
            this.leftDashedLine_1.setTransform(dot_X1, dot_Y + (row * 5.1));

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3.1);
            this.rightDashedLine_1.setTransform(dot_X2, dot_Y + (row * 5.1));

            verticalalDashedLineContainer1.addChild(this.leftDashedLine_1, this.rightDashedLine_1);
            verticalalDashedLineContainer1.setTransform(-16, -47);

            this.addChild(verticalalDashedLineContainer1);
        }

        var cornerDashedLineContainer1 = new cjs.Container();

        //upper Left Corner

        this.upperleftDashedLine_1 = new cjs.Shape();
        this.upperleftDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperleftDashedLine_1.setTransform(94, 88);
        this.upperleftDashedLine_1.rotation = 10;

        this.upperleftDashedLine_2 = new cjs.Shape();
        this.upperleftDashedLine_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperleftDashedLine_2.setTransform(97.5, 85);
        this.upperleftDashedLine_2.rotation = 50;

        this.upperleftDashedLine_3 = new cjs.Shape();
        this.upperleftDashedLine_3.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.upperleftDashedLine_3.setTransform(100, 85);

        //  upper Right Corner

        this.upperRightDashedLine_1 = new cjs.Shape();
        this.upperRightDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.upperRightDashedLine_1.setTransform(535, 85.5);
        this.upperRightDashedLine_1.rotation = 20;

        this.upperRightDashedLine_2 = new cjs.Shape();
        this.upperRightDashedLine_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperRightDashedLine_2.setTransform(539, 88);
        this.upperRightDashedLine_2.rotation = -10;

        //lower Left Corner

        this.lowerleftDashedLine_1 = new cjs.Shape();
        this.lowerleftDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerleftDashedLine_1.setTransform(93.5, 245.25);
        this.lowerleftDashedLine_1.rotation = -5;

        this.lowerleftDashedLine_2 = new cjs.Shape();
        this.lowerleftDashedLine_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerleftDashedLine_2.setTransform(94.5, 249.75);
        this.lowerleftDashedLine_2.rotation = -65;

        this.lowerleftDashedLine_3 = new cjs.Shape();
        this.lowerleftDashedLine_3.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.lowerleftDashedLine_3.setTransform(99.5, 251.25);

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerRightDashedLine_1.setTransform(540, 246);
        this.lowerRightDashedLine_1.rotation = 15;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(536, 252);
        this.lowerRightDashedLine_2.rotation = -30;

        cornerDashedLineContainer1.addChild(this.upperleftDashedLine_1, this.upperleftDashedLine_2, this.upperleftDashedLine_3, this.upperRightDashedLine_1,
            this.upperRightDashedLine_2, this.lowerleftDashedLine_1, this.lowerleftDashedLine_2, this.lowerleftDashedLine_3, this.lowerRightDashedLine_1,
            this.lowerRightDashedLine_2);
        cornerDashedLineContainer1.setTransform(-16, -47);

        this.addChild(cornerDashedLineContainer1);

        this.instance_1 = new lib.p71_1();
        this.instance_1.setTransform(91, 54, 0.5, 0.5);

        this.instance_2 = new lib.p71_2();
        this.instance_2.setTransform(296, 23, 0.35, 0.35);

        this.instance_3 = new lib.p71_3();
        this.instance_3.setTransform(452, 57, 0.45, 0.45);
        this.instance_3.rotation = 10;

        this.instance_4 = new lib.p71_4();
        this.instance_4.setTransform(468, 54, 0.45, 0.45);
        this.instance_4.rotation = -15;

        this.instance_5 = new lib.p71_5();
        this.instance_5.setTransform(491, 70, 0.5, 0.5);
        this.instance_5.rotation = 25;

        this.instance_6 = new lib.p71_5();
        this.instance_6.setTransform(481, 111, 0.5, 0.5);
        this.instance_6.rotation = -10;

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5,
            this.instance_6);

        var splText1 = ['Välj varsin orm i spel 1.', 'Turas om att slå båda tärningarna.', 'Räkna ihop antalet prickar och måla',
            'Blir det mer än 10 prickar får du måla', 'Gör på samma sätt med spel 2.'
        ];

        var splText2 = [' ', ' ', 'den delen på din orm.', 'vilken del du vill.', ' '];
        var count = 0;
        var row_X = 283;
        var row_Y = 0;
        var dot_X = 272;
        var dot_Y = 0;
        for (var row = 0; row < 5; row++) {

            if (row < 3) {
                dot_Y = 83;
                row_Y = 87;
            } else if (row > 2 && row < 4) {
                dot_Y = 95;
                row_Y = 99;
            } else {
                dot_Y = 107;
                row_Y = 111;
            }

            if (row == 4) {
                row_X = 281;
            } else {
                row_X = 283;
            }

            var fillText1 = splText1[count];
            var fillText2 = splText2[count];
            count = count + 1;

            this.headerCircle = new cjs.Shape();
            this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
            this.headerCircle.setTransform(dot_X, dot_Y + (row * 20));

            this.text_2 = new cjs.Text('' + fillText1, "11.5px 'ElisarDTInfant-Regular'");
            this.text_2.setTransform(row_X, row_Y + (row * 20));

            this.text_3 = new cjs.Text('' + fillText2, "11.5px 'ElisarDTInfant-Regular'");
            this.text_3.setTransform(row_X, row_Y + 13 + (row * 20));

            this.addChild(this.headerCircle, this.text_2, this.text_3);
        }

        this.roundRect3 = new cjs.Shape();
        this.roundRect3.graphics.f("#ffffff").s("#ffffff").ss(1).drawRoundRect(0, 0, 458, 192, 12);
        this.roundRect3.setTransform(72, 236);

        this.roundRect4 = new cjs.Shape();
        this.roundRect4.graphics.f("#ffffff").s("#ffffff").ss(1).drawRoundRect(0, 0, 458, 192, 12);
        this.roundRect4.setTransform(70, 443);

        this.text_4 = new cjs.Text("Spel 1", "19px 'Albus'", "#28A6BF");
        this.text_4.setTransform(81, 262);

        this.text_5 = new cjs.Text("Spel 2", "19px 'Albus'", "#EA6633");
        this.text_5.setTransform(81, 470);

        this.instance_7 = new lib.p71_6();
        this.instance_7.setTransform(91, 261, 0.5, 0.5);

        this.instance_8 = new lib.p71_7();
        this.instance_8.setTransform(94, 323, 0.5, 0.5);

        this.instance_9 = new lib.p71_8();
        this.instance_9.setTransform(94, 472, 0.5, 0.5);

        this.instance_10 = new lib.p71_9();
        this.instance_10.setTransform(102, 533, 0.5, 0.5);

        this.addChild(this.roundRect3, this.roundRect4, this.text_4, this.text_5, this.instance_7, this.instance_8, this.instance_9, this.instance_10);

        //For Image-1

        var Num_X = [161, 204, 237, 274, 304, 340, 378, 411, 444, 471];
        var Num_Y = [297, 288, 287, 298, 316, 325, 315, 300, 292, 298];

        var Count = 0;

        for (var i = 10; i > 0; i--) {
            var FillText = i;

            this.text_6 = new cjs.Text('' + FillText, "21px 'ElisarDTInfant-SemiBold'", "#9DD3E5");
            this.text_6.setTransform(Num_X[Count], Num_Y[Count]);

            this.addChild(this.text_6);
            Count = Count + 1;
        }

        //For Image-2

        var Num_X = [121, 154, 184, 217, 252, 282, 315, 353, 389, 409];
        var Num_Y = [393, 373, 358, 353, 360, 373, 392, 401, 391, 368];

        var Count = 0;

        for (var i = 1; i < 11; i++) {
            var FillText = i;

            this.text_7 = new cjs.Text('' + FillText, "21px 'ElisarDTInfant-SemiBold'", "#9DD3E5");
            this.text_7.setTransform(Num_X[Count], Num_Y[Count]);

            this.addChild(this.text_7);
            Count = Count + 1;
        }

        //For Image-3

        var Num_X = [164, 207, 240, 277, 307, 343, 381, 414, 447, 474];
        var Num_Y = [508, 499, 498, 509, 527, 536, 526, 511, 503, 509];

        var Count = 0;

        for (var i = 10; i > 0; i--) {
            var FillText = i;

            this.text_8 = new cjs.Text('' + FillText, "21px 'ElisarDTInfant-SemiBold'", "#9DD3E5");
            this.text_8.setTransform(Num_X[Count], Num_Y[Count]);

            this.addChild(this.text_8);
            Count = Count + 1;
        }

        //For Image-4

        var Num_X = [129, 160, 192, 225, 260, 293, 323, 361, 397, 417];
        var Num_Y = [603, 585, 568, 563, 570, 583, 602, 611, 601, 578];

        var Count = 0;

        for (var i = 1; i < 11; i++) {
            var FillText = i;

            this.text_9 = new cjs.Text('' + FillText, "21px 'ElisarDTInfant-SemiBold'", "#9DD3E5");
            this.text_9.setTransform(Num_X[Count], Num_Y[Count]);

            this.addChild(this.text_9);
            Count = Count + 1;
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 550);

    (lib.p6 = function() {
        this.initialize();

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
