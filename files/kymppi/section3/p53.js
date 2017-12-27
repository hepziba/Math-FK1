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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p53_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p53_1.png",
            id: "p53_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p53_2.png",
            id: "p53_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p53_3.png",
            id: "p53_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p53_4.png",
            id: "p53_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/bgStrip_1.png",
            id: "bgStrip_1"
        }]
    };

    (lib.p53_1 = function() {
        this.initialize(img.p53_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p53_2 = function() {
        this.initialize(img.p53_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p53_3 = function() {
        this.initialize(img.p53_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p53_4 = function() {
        this.initialize(img.p53_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.bgStrip_1 = function() {
        this.initialize(img.bgStrip_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.bgStrip_1();
        this.instance_1.setTransform(0, 0, 1, 1);

        this.pageNum_text = new cjs.Text("53", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(538, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#C7EBF2").s("#C7EBF2").ss(1).drawRoundRect(0, 0, 456, 167, 12);
        this.roundRect1.setTransform(72, 34);

        this.roundRect2 = new cjs.Shape();
        this.roundRect2.graphics.f("#ffffff").s("#ffffff").ss(1).drawRoundRect(0, 0, 450, 161, 12);
        this.roundRect2.setTransform(75, 37);

        this.text_1 = new cjs.Text("Spelregler", "19px 'Albus'", "#D03268");
        this.text_1.setTransform(301, 62);

        this.addChild(this.roundRect1, this.roundRect2, this.text_1);

        var horizontalDashedLineContainer1 = new cjs.Container();

        var dot_X = 105,
            dot_Y1 = 85,
            dot_Y2 = 245;
        for (var col = 0; col < 86; col++) {

            this.upperDashedLine_1 = new cjs.Shape();
            this.upperDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.upperDashedLine_1.setTransform(dot_X + (col * 5), dot_Y1);

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (col * 5), dot_Y2);

            horizontalDashedLineContainer1.addChild(this.upperDashedLine_1, this.lowerDashedLine_1);
            horizontalDashedLineContainer1.setTransform(-17, -47);

            this.addChild(horizontalDashedLineContainer1);
        }

        var verticalalDashedLineContainer1 = new cjs.Container();

        var dot_X1 = 93,
            dot_X2 = 541,
            dot_Y = 93;
        for (var row = 0; row < 29; row++) {

            this.leftDashedLine_1 = new cjs.Shape();
            this.leftDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
            this.leftDashedLine_1.setTransform(dot_X1, dot_Y + (row * 5));

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
            this.rightDashedLine_1.setTransform(dot_X2, dot_Y + (row * 5));

            verticalalDashedLineContainer1.addChild(this.leftDashedLine_1, this.rightDashedLine_1);
            verticalalDashedLineContainer1.setTransform(-17, -47);

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
        this.lowerleftDashedLine_1.setTransform(93.5, 238.25);
        this.lowerleftDashedLine_1.rotation = -5;

        this.lowerleftDashedLine_2 = new cjs.Shape();
        this.lowerleftDashedLine_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerleftDashedLine_2.setTransform(94.5, 242.75);
        this.lowerleftDashedLine_2.rotation = -65;

        this.lowerleftDashedLine_3 = new cjs.Shape();
        this.lowerleftDashedLine_3.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.lowerleftDashedLine_3.setTransform(99.5, 244.25);

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerRightDashedLine_1.setTransform(540, 239);
        this.lowerRightDashedLine_1.rotation = 15;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(536, 245);
        this.lowerRightDashedLine_2.rotation = -30;

        cornerDashedLineContainer1.addChild(this.upperleftDashedLine_1, this.upperleftDashedLine_2, this.upperleftDashedLine_3, this.upperRightDashedLine_1,
            this.upperRightDashedLine_2, this.lowerleftDashedLine_1, this.lowerleftDashedLine_2, this.lowerleftDashedLine_3, this.lowerRightDashedLine_1,
            this.lowerRightDashedLine_2);
        cornerDashedLineContainer1.setTransform(-17, -47);

        this.addChild(cornerDashedLineContainer1);

        this.instance_1 = new lib.p53_1();
        this.instance_1.setTransform(96, 78, 0.42, 0.42);

        this.instance_2 = new lib.p53_2();
        this.instance_2.setTransform(83, 71, 0.4, 0.4);
        this.instance_2.rotation = -20;

        this.instance_3 = new lib.p53_3();
        this.instance_3.setTransform(288, 24, 0.35, 0.35);

        this.instance_4 = new lib.p53_4();
        this.instance_4.setTransform(458, 54, 0.4, 0.4);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4);

        var splText1 = ['Välj varsin spelplan i spel 1.', 'Turas om att slå tärningen.', 'Båda ringar in talet tärningen visar,',
            'Den som först får 4 tal i rad vinner.', 'Gör på samma sätt med spel 2.'
        ];

        var splText2 = [' ', ' ', 'på sin spelplan. Ringa in ett tal per gång.', ' ', ' '];

        var count = 0;
        var row_X = 282;
        var row_Y = 0;
        var dot_X = 296;
        var dot_Y = 0;
        for (var row = 0; row < 5; row++) {

            if (row < 3) {
                dot_Y = 79;
                row_Y = 83;
            } else {
                dot_Y = 94;
                row_Y = 98;
            }

            if (row == 4) {
                row_X = 306;
            } else {
                row_X = 308;
            }

            var fillText1 = splText1[count];
            var fillText2 = splText2[count];
            count = count + 1;

            this.headerCircle = new cjs.Shape();
            this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
            this.headerCircle.setTransform(dot_X, dot_Y + (row * 21));

            this.text_2 = new cjs.Text('' + fillText1, "11.5px 'ElisarDTInfant-Regular'");
            this.text_2.setTransform(row_X, row_Y + (row * 21));

            this.text_3 = new cjs.Text('' + fillText2, "11.5px 'ElisarDTInfant-Regular'");
            this.text_3.setTransform(row_X, row_Y + 14 + (row * 21));

            this.addChild(this.headerCircle, this.text_2, this.text_3);
        }

        this.roundRect2 = new cjs.Shape();
        this.roundRect2.graphics.f("#ffffff").s("#ffffff").ss(1).drawRoundRect(0, 0, 458, 205, 12);
        this.roundRect2.setTransform(71, 216);

        this.text_4 = new cjs.Text("Spel 1", "19px 'Albus'", "#5F4AAF");
        this.text_4.setTransform(116, 238);

        this.addChild(this.roundRect2, this.text_4);

        var spl_Txt = [4, 1, 4, 1, 1, 5, 1, 3, 2, 5, 2, 5, 3, 2, 6, 2, 6, 3, 6, 2, 5, 4, 3, 4, 4, 1, 3, 3, 1, 6, 2, 4];
        var spl_Count = 0;

        var col_X = 0,
            col_Y = 0;
        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 8; col++) {
                var FillText = spl_Txt[spl_Count];
                spl_Count = spl_Count + 1;

                if (col > 3) {
                    col_X = 183;
                    col_Y = 253;
                } else {
                    col_X = 123;
                    col_Y = 253;
                }

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#E9E7F4").s("#ffffff").ss(1).drawRect(0, 0, 37, 37);
                this.Rect1.setTransform(col_X + (col * 37), col_Y + (row * 37));

                this.text_5 = new cjs.Text('' + FillText, "30px 'ElisarDTInfant-Regular'", "#5F4AAF");
                this.text_5.setTransform(col_X + 10 + (col * 37), col_Y + 27 + (row * 37));

                this.addChild(this.Rect1, this.text_5);
            }
        }

        this.roundRect3 = new cjs.Shape();
        this.roundRect3.graphics.f("#ffffff").s("#ffffff").ss(1).drawRoundRect(0, 0, 458, 205, 12);
        this.roundRect3.setTransform(69, 438);

        this.text_5 = new cjs.Text("Spel 2", "19px 'Albus'", "#33A667");
        this.text_5.setTransform(116, 461);

        this.addChild(this.roundRect3, this.text_5);

        var spl_Txt = [1, 5, 1, 3, 4, 1, 4, 1, 3, 2, 6, 2, 2, 5, 2, 5, 5, 4, 3, 4, 6, 3, 6, 2, 1, 6, 2, 4, 4, 1, 3, 3];
        var spl_Count = 0;

        var col_X = 0,
            col_Y = 0;
        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 8; col++) {
                var FillText = spl_Txt[spl_Count];
                spl_Count = spl_Count + 1;

                if (col > 3) {
                    col_X = 183;
                    col_Y = 473;
                } else {
                    col_X = 123;
                    col_Y = 473;
                }

                this.Rect2 = new cjs.Shape();
                this.Rect2.graphics.f("#EBF1DB").s("#ffffff").ss(1).drawRect(0, 0, 37, 37);
                this.Rect2.setTransform(col_X + (col * 37), col_Y + (row * 37));

                this.text_7 = new cjs.Text('' + FillText, "30px 'ElisarDTInfant-Regular'", "#33A667");
                this.text_7.setTransform(col_X + 10 + (col * 37), col_Y + 27 + (row * 37));

                this.addChild(this.Rect2, this.text_7);
            }
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
