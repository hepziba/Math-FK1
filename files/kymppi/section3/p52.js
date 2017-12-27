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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p52_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p52_1.png",
            id: "p52_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/even_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.p52_1 = function() {
        this.initialize(img.p52_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.DashedRectangle = function() {
        this.initialize();

        var DashedRectContainer1 = new cjs.Container();
        var horizontalDashedLineContainer1 = new cjs.Container();

        var dot_X = 109,
            dot_Y1 = 85,
            dot_Y2 = 139;
        for (var col = 0; col < 26; col++) {

            this.upperDashedLine_1 = new cjs.Shape();
            this.upperDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(3, 0);
            this.upperDashedLine_1.setTransform(dot_X + (col * 5), dot_Y1);

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (col * 5), dot_Y2);

            horizontalDashedLineContainer1.addChild(this.upperDashedLine_1, this.lowerDashedLine_1);
            horizontalDashedLineContainer1.setTransform(-55, -80);
        }

        var verticalalDashedLineContainer1 = new cjs.Container();

        var dot_X1 = 93,
            dot_X2 = 250,
            dot_Y = 93;
        for (var row = 0; row < 8; row++) {

            this.leftDashedLine_1 = new cjs.Shape();
            this.leftDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 3);
            this.leftDashedLine_1.setTransform(dot_X1, dot_Y + (row * 5));

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 3);
            this.rightDashedLine_1.setTransform(dot_X2, dot_Y + (row * 5));

            verticalalDashedLineContainer1.addChild(this.leftDashedLine_1, this.rightDashedLine_1);
            verticalalDashedLineContainer1.setTransform(-55, -80);

        }

        var cornerDashedLineContainer1 = new cjs.Container();

        //upper Left Corner

        this.upperleftDashedLine_1 = new cjs.Shape();
        this.upperleftDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 3);
        this.upperleftDashedLine_1.setTransform(94.5, 8.5);
        this.upperleftDashedLine_1.rotation = 20;

        this.upperleftDashedLine_2 = new cjs.Shape();
        this.upperleftDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 3);
        this.upperleftDashedLine_2.setTransform(98.5, 6);
        this.upperleftDashedLine_2.rotation = 60;

        this.upperleftDashedLine_3 = new cjs.Shape();
        this.upperleftDashedLine_3.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(3, 0);
        this.upperleftDashedLine_3.setTransform(100.5, 5.5);
        this.upperleftDashedLine_3.rotation = -3;

        this.upperleftDashedLine_4 = new cjs.Shape();
        this.upperleftDashedLine_4.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(3, 0);
        this.upperleftDashedLine_4.setTransform(105, 5.25);
        this.upperleftDashedLine_4.rotation = -3;

        //  upper Right Corner

        this.upperRightDashedLine_1 = new cjs.Shape();
        this.upperRightDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(3, 0);
        this.upperRightDashedLine_1.setTransform(238.5, 5);
        this.upperRightDashedLine_1.rotation = 8;

        this.upperRightDashedLine_2 = new cjs.Shape();
        this.upperRightDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(2.5, 0);
        this.upperRightDashedLine_2.setTransform(243, 5.5);
        this.upperRightDashedLine_2.rotation = 13;

        this.upperRightDashedLine_3 = new cjs.Shape();
        this.upperRightDashedLine_3.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 2.5);
        this.upperRightDashedLine_3.setTransform(246.75, 6.75);
        this.upperRightDashedLine_3.rotation = -40;

        this.upperRightDashedLine_4 = new cjs.Shape();
        this.upperRightDashedLine_4.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 2.5);
        this.upperRightDashedLine_4.setTransform(249, 9.5);
        this.upperRightDashedLine_4.rotation = -15;

        //lower Left Corner

        this.lowerleftDashedLine_1 = new cjs.Shape();
        this.lowerleftDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 3);
        this.lowerleftDashedLine_1.setTransform(93, 53);
        this.lowerleftDashedLine_1.rotation = -15;

        this.lowerleftDashedLine_2 = new cjs.Shape();
        this.lowerleftDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(3, 0);
        this.lowerleftDashedLine_2.setTransform(94.5, 57.25);
        this.lowerleftDashedLine_2.rotation = 25;

        this.lowerleftDashedLine_3 = new cjs.Shape();
        this.lowerleftDashedLine_3.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 3.5);
        this.lowerleftDashedLine_3.setTransform(99, 58.7);
        this.lowerleftDashedLine_3.rotation = -85;

        this.lowerleftDashedLine_4 = new cjs.Shape();
        this.lowerleftDashedLine_4.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(3.5, 0);
        this.lowerleftDashedLine_4.setTransform(104.25, 58.9);
        this.lowerleftDashedLine_4.rotation = 3;

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_1.setTransform(238.5, 59);
        this.lowerRightDashedLine_1.rotation = -5;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(242.75, 59);
        this.lowerRightDashedLine_2.rotation = -10;

        this.lowerRightDashedLine_3 = new cjs.Shape();
        this.lowerRightDashedLine_3.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_3.setTransform(247, 58);
        this.lowerRightDashedLine_3.rotation = -50;

        this.lowerRightDashedLine_4 = new cjs.Shape();
        this.lowerRightDashedLine_4.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 2.5);
        this.lowerRightDashedLine_4.setTransform(250, 52);
        this.lowerRightDashedLine_4.rotation = 15;

        cornerDashedLineContainer1.addChild(this.upperleftDashedLine_1, this.upperleftDashedLine_2, this.upperleftDashedLine_3, this.upperleftDashedLine_4,
            this.upperRightDashedLine_1, this.upperRightDashedLine_2, this.upperRightDashedLine_3, this.upperRightDashedLine_4,
            this.lowerleftDashedLine_1, this.lowerleftDashedLine_2, this.lowerleftDashedLine_3, this.lowerleftDashedLine_4,
            this.lowerRightDashedLine_1, this.lowerRightDashedLine_2, this.lowerRightDashedLine_3, this.lowerRightDashedLine_4);
        cornerDashedLineContainer1.setTransform(-55, 0);

        DashedRectContainer1.addChild(horizontalDashedLineContainer1, verticalalDashedLineContainer1, cornerDashedLineContainer1);

        return DashedRectContainer1;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("52", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tolka enkla koder", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

        for (var lineCount = 0; lineCount < 66; lineCount++) {

            this.hrline_1 = new cjs.Shape();
            this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
            this.hrline_1.setTransform(80 + (lineCount * 7), 346);

            this.addChild(this.hrline_1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle_1 = new cjs.Shape();
        this.headerCircle_1.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle_1.setTransform(19, 0);

        this.text_1 = new cjs.Text("Klura ut bollrobotens kod. Rita bollar som kommer ut.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.addChild(this.headerCircle_1, this.text_1);

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 2; col++) {
                this.DashedRect1 = new lib.DashedRectangle();
                this.DashedRect1.setTransform(0 + (col * 277), 23 + (row * 64));

                this.addChild(this.DashedRect1);
            }
        }

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 2; col++) {
                this.Arrow_1 = new cjs.Shape();
                this.Arrow_1.graphics.f("").s("#31B1C9").ss(1.5).moveTo(0, 0).lineTo(17, 0).moveTo(12, -4).lineTo(17, 0).lineTo(12, 4);
                this.Arrow_1.setTransform(203 + (col * 85), 57 + (row * 64));

                this.addChild(this.Arrow_1);
            }
        }

        for (var row = 0; row < 4; row++) {

            this.instance_1 = new lib.p52_1();
            this.instance_1.setTransform(227, 29 + (row * 64), 0.5, 0.5);

            this.addChild(this.instance_1);
        }

        //pink circle

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 6; col++) {

                if ((row == 0 && col > 0) || (row == 1 && col > 2) || (row == 2 && col > 1)) {
                    continue;
                }

                this.PinkCircle_1 = new cjs.Shape();
                this.PinkCircle_1.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 9, 0, 2 * Math.PI);
                this.PinkCircle_1.setTransform(56 + (col * 24), 55 + (row * 64));

                this.addChild(this.PinkCircle_1);
            }
        }

        //Orange circle

        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 4; col++) {

                if (row == 0 && col > 1) {
                    continue;
                }

                this.OrangeCircle_1 = new cjs.Shape();
                this.OrangeCircle_1.graphics.f("#F4A327").s("#F4A327").ss(0.7, 0, 0, 4).arc(0, 0, 9, 0, 2 * Math.PI);
                this.OrangeCircle_1.setTransform(333 + (col * 24), 55 + (row * 64));

                this.addChild(this.OrangeCircle_1);
            }
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 305);

    (lib.Symbol3 = function() {
        this.initialize();

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 2; col++) {
                this.DashedRect1 = new lib.DashedRectangle();
                this.DashedRect1.setTransform(0 + (col * 277), 0 + (row * 64));

                this.addChild(this.DashedRect1);
            }
        }

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 2; col++) {
                this.Arrow_1 = new cjs.Shape();
                this.Arrow_1.graphics.f("").s("#31B1C9").ss(1.5).moveTo(0, 0).lineTo(17, 0).moveTo(12, -4).lineTo(17, 0).lineTo(12, 4);
                this.Arrow_1.setTransform(203 + (col * 85), 34 + (row * 64));

                this.addChild(this.Arrow_1);
            }
        }

        for (var row = 0; row < 4; row++) {

            this.instance_1 = new lib.p52_1();
            this.instance_1.setTransform(227, 6 + (row * 64), 0.5, 0.5);

            this.addChild(this.instance_1);
        }

        //vilot circle

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 6; col++) {

                if ((row == 0 && col > 2) || (row == 1 && col > 1) || (row == 2 && col > 3)) {
                    continue;
                }

                this.vilotCircle_1 = new cjs.Shape();
                this.vilotCircle_1.graphics.f("#908EC1").s("#908EC1").ss(0.7, 0, 0, 4).arc(0, 0, 9, 0, 2 * Math.PI);
                this.vilotCircle_1.setTransform(56 + (col * 24), 33 + (row * 64));

                this.addChild(this.vilotCircle_1);
            }
        }

        //green circle

        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 2; col++) {

                this.GreenCircle_1 = new cjs.Shape();
                this.GreenCircle_1.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 9, 0, 2 * Math.PI);
                this.GreenCircle_1.setTransform(333 + (col * 24), 33 + (row * 64));

                this.addChild(this.GreenCircle_1);
            }
        }
    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 275);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 57, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 359, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
