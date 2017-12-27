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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p37_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p37_1.png",
            id: "p37_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p37_2.png",
            id: "p37_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p37_3.png",
            id: "p37_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p37_4.png",
            id: "p37_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p37_5.png",
            id: "p37_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p37_6.png",
            id: "p37_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/bgStrip_1.png",
            id: "bgStrip_1"
        }]
    };

    (lib.p37_1 = function() {
        this.initialize(img.p37_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p37_2 = function() {
        this.initialize(img.p37_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p37_3 = function() {
        this.initialize(img.p37_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p37_4 = function() {
        this.initialize(img.p37_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p37_5 = function() {
        this.initialize(img.p37_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p37_6 = function() {
        this.initialize(img.p37_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.bgStrip_1 = function() {
        this.initialize(img.bgStrip_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.bgStrip_1();
        this.instance_1.setTransform(0, 0, 1, 1);

        this.pageNum_text = new cjs.Text("37", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(538, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#C7EBF2").s("#C7EBF2").ss(1).drawRoundRect(0, 0, 458, 144, 12);
        this.roundRect1.setTransform(70, 32);

        this.roundRect2 = new cjs.Shape();
        this.roundRect2.graphics.f("#ffffff").s("#ffffff").ss(1).drawRoundRect(0, 0, 448, 134, 12);
        this.roundRect2.setTransform(75, 37);

        this.text_1 = new cjs.Text("Spelregler", "19px 'Albus'", "#D03268");
        this.text_1.setTransform(277, 62);

        this.addChild(this.roundRect1, this.roundRect2, this.text_1);

        var horizontalDashedLineContainer1 = new cjs.Container();

        var dot_X = 105,
            dot_Y1 = 83,
            dot_Y2 = 219;
        for (var col = 0; col < 86; col++) {

            this.upperDashedLine_1 = new cjs.Shape();
            this.upperDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.upperDashedLine_1.setTransform(dot_X + (col * 5), dot_Y1);

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (col * 5), dot_Y2);

            horizontalDashedLineContainer1.addChild(this.upperDashedLine_1, this.lowerDashedLine_1);
            horizontalDashedLineContainer1.setTransform(-18, -47);

            this.addChild(horizontalDashedLineContainer1);
        }

        var verticalalDashedLineContainer1 = new cjs.Container();

        var dot_X1 = 93,
            dot_X2 = 541,
            dot_Y = 93;
        for (var row = 0; row < 24; row++) {

            this.leftDashedLine_1 = new cjs.Shape();
            this.leftDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
            this.leftDashedLine_1.setTransform(dot_X1, dot_Y + (row * 5));

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
            this.rightDashedLine_1.setTransform(dot_X2, dot_Y + (row * 5));

            verticalalDashedLineContainer1.addChild(this.leftDashedLine_1, this.rightDashedLine_1);
            verticalalDashedLineContainer1.setTransform(-18, -47);

            this.addChild(verticalalDashedLineContainer1);
        }

        var cornerDashedLineContainer1 = new cjs.Container();

        //upper Left Corner

        this.upperleftDashedLine_1 = new cjs.Shape();
        this.upperleftDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperleftDashedLine_1.setTransform(94, 86);
        this.upperleftDashedLine_1.rotation = 10;

        this.upperleftDashedLine_2 = new cjs.Shape();
        this.upperleftDashedLine_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperleftDashedLine_2.setTransform(97.5, 83);
        this.upperleftDashedLine_2.rotation = 50;

        this.upperleftDashedLine_3 = new cjs.Shape();
        this.upperleftDashedLine_3.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.upperleftDashedLine_3.setTransform(100, 83);

        //  upper Right Corner

        this.upperRightDashedLine_1 = new cjs.Shape();
        this.upperRightDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.upperRightDashedLine_1.setTransform(535, 83.5);
        this.upperRightDashedLine_1.rotation = 20;

        this.upperRightDashedLine_2 = new cjs.Shape();
        this.upperRightDashedLine_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperRightDashedLine_2.setTransform(539, 86);
        this.upperRightDashedLine_2.rotation = -10;

        //lower Left Corner

        this.lowerleftDashedLine_1 = new cjs.Shape();
        this.lowerleftDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerleftDashedLine_1.setTransform(93.5, 212.25);
        this.lowerleftDashedLine_1.rotation = -5;

        this.lowerleftDashedLine_2 = new cjs.Shape();
        this.lowerleftDashedLine_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerleftDashedLine_2.setTransform(94.5, 216.75);
        this.lowerleftDashedLine_2.rotation = -65;

        this.lowerleftDashedLine_3 = new cjs.Shape();
        this.lowerleftDashedLine_3.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.lowerleftDashedLine_3.setTransform(99.5, 218.25);

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerRightDashedLine_1.setTransform(540, 213);
        this.lowerRightDashedLine_1.rotation = 15;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(536, 219);
        this.lowerRightDashedLine_2.rotation = -30;

        cornerDashedLineContainer1.addChild(this.upperleftDashedLine_1, this.upperleftDashedLine_2, this.upperleftDashedLine_3, this.upperRightDashedLine_1,
            this.upperRightDashedLine_2, this.lowerleftDashedLine_1, this.lowerleftDashedLine_2, this.lowerleftDashedLine_3, this.lowerRightDashedLine_1,
            this.lowerRightDashedLine_2);
        cornerDashedLineContainer1.setTransform(-18, -47);

        this.addChild(cornerDashedLineContainer1);

        this.instance_1 = new lib.p37_1();
        this.instance_1.setTransform(89, 46, 0.35, 0.35);

        this.instance_2 = new lib.p37_2();
        this.instance_2.setTransform(289, 24, 0.35, 0.35);

        this.instance_3 = new lib.p37_3();
        this.instance_3.setTransform(472, 57, 0.4, 0.4);

        this.instance_4 = new lib.p37_4();
        this.instance_4.setTransform(487, 44, 0.4, 0.4);

        this.instance_5 = new lib.p37_5();
        this.instance_5.setTransform(482, 83, 0.5, 0.5);
        this.instance_5.rotation = 15;

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5);

        var splText1 = ['Börja på START och turas om att slå', 'När du landar på en snöboll med en', 'Först i mål vinner.'];
        var splText2 = ['med tärningen.', 'siffra, ska du gå så många steg åt det', ' '];
        var splText3 = [' ', 'håll pilen visar.', ' '];

        var count = 0;
        var row_X = 0;
        var row_Y = 0;
        var dot_X = 267;
        var dot_Y = 0;
        for (var row = 0; row < 3; row++) {

            if (row == 0) {
                dot_Y = 79;
                row_Y = 83;
            } else if (row == 1) {
                dot_Y = 93;
                row_Y = 97;
            } else if (row == 2) {
                dot_Y = 119;
                row_Y = 123;
            }

            if (row == 2) {
                row_X = 277;
            } else {
                row_X = 279;
            }

            var fillText1 = splText1[count];
            var fillText2 = splText2[count];
            var fillText3 = splText3[count];
            count = count + 1;

            this.headerCircle = new cjs.Shape();
            this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
            this.headerCircle.setTransform(dot_X, dot_Y + (row * 18));

            this.text_2 = new cjs.Text('' + fillText1, "11.5px 'ElisarDTInfant-Regular'");
            this.text_2.setTransform(row_X, row_Y + (row * 18));

            this.text_3 = new cjs.Text('' + fillText2, "11.5px 'ElisarDTInfant-Regular'");
            this.text_3.setTransform(row_X, row_Y + 13 + (row * 18));

            this.text_4 = new cjs.Text('' + fillText3, "11.5px 'ElisarDTInfant-Regular'");
            this.text_4.setTransform(row_X, row_Y + 26 + (row * 18));

            this.addChild(this.headerCircle, this.text_2, this.text_3, this.text_4);
        }

        this.roundRect3 = new cjs.Shape();
        this.roundRect3.graphics.f("#ffffff").s("#ffffff").ss(1).drawRoundRect(0, 0, 455, 425, 12);
        this.roundRect3.setTransform(71.5, 205);

        this.instance_7 = new lib.p37_6();
        this.instance_7.setTransform(79, 223, 0.49, 0.48);

        this.addChild(this.roundRect3, this.instance_7);

        this.text_5 = new cjs.Text("2", "25px 'ElisarDTInfant-SemiBold'", "#EC672D");
        this.text_5.setTransform(292, 311);

        this.text_6 = new cjs.Text("2", "25px 'ElisarDTInfant-SemiBold'", "#EC672D");
        this.text_6.setTransform(452, 268);

        this.text_7 = new cjs.Text("3", "25px 'ElisarDTInfant-SemiBold'", "#EC672D");
        this.text_7.setTransform(174, 442);

        this.text_8 = new cjs.Text("2", "25px 'ElisarDTInfant-SemiBold'", "#EC672D");
        this.text_8.setTransform(124, 498);

        this.text_9 = new cjs.Text("3", "25px 'ElisarDTInfant-SemiBold'", "#EC672D");
        this.text_9.setTransform(330, 582);

        this.text_10 = new cjs.Text("3", "25px 'ElisarDTInfant-SemiBold'", "#EC672D");
        this.text_10.setTransform(452, 581);

        this.addChild(this.text_5, this.text_6, this.text_7, this.text_8, this.text_9, this.text_10);

        // left
        this.Arrow_1 = new cjs.Shape();
        this.Arrow_1.graphics.f("").s("#EC672D").ss(2.5).moveTo(0, 0).lineTo(-15, 0).moveTo(-10, -5).lineTo(-15, 0).lineTo(-10, 5);
        this.Arrow_1.setTransform(294, 303);

        // down
        this.Arrow_2 = new cjs.Shape();
        this.Arrow_2.graphics.f("").s("#EC672D").ss(2.5).moveTo(0, 0).lineTo(0, 15).moveTo(-5, 10).lineTo(0, 15).lineTo(5, 10);
        this.Arrow_2.setTransform(461, 273);

        // down
        this.Arrow_3 = new cjs.Shape();
        this.Arrow_3.graphics.f("").s("#EC672D").ss(2.5).moveTo(0, 0).lineTo(0, 15).moveTo(-5, 10).lineTo(0, 15).lineTo(5, 10);
        this.Arrow_3.setTransform(182, 446);

        // up 
        this.Arrow_4 = new cjs.Shape();
        this.Arrow_4.graphics.f("").s("#EC672D").ss(2.5).moveTo(0, 0).lineTo(0, -15).moveTo(-5, -10).lineTo(0, -15).lineTo(5, -10);
        this.Arrow_4.setTransform(132, 478);

        // left
        this.Arrow_5 = new cjs.Shape();
        this.Arrow_5.graphics.f("").s("#EC672D").ss(2.5).moveTo(0, 0).lineTo(-15, 0).moveTo(-10, -5).lineTo(-15, 0).lineTo(-10, 5);
        this.Arrow_5.setTransform(331, 574);

        // up 
        this.Arrow_6 = new cjs.Shape();
        this.Arrow_6.graphics.f("").s("#EC672D").ss(2.5).moveTo(0, 0).lineTo(0, -15).moveTo(-5, -10).lineTo(0, -15).lineTo(5, -10);
        this.Arrow_6.setTransform(461, 562);

        this.addChild(this.Arrow_1, this.Arrow_2, this.Arrow_3, this.Arrow_4, this.Arrow_5, this.Arrow_6);

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
