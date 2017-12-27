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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_1.png",
            id: "p9_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_2.png",
            id: "p9_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_3.png",
            id: "p9_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_4.png",
            id: "p9_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_5.png",
            id: "p9_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_6.png",
            id: "p9_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_7.png",
            id: "p9_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_8.png",
            id: "p9_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_9.png",
            id: "p9_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_10.png",
            id: "p9_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_11.png",
            id: "p9_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_12.png",
            id: "p9_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_13.png",
            id: "p9_13"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_14.png",
            id: "p9_14"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_15.png",
            id: "p9_15"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_16.png",
            id: "p9_16"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p9_17.png",
            id: "p9_17"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/odd_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p9_1 = function() {
        this.initialize(img.p9_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p9_2 = function() {
        this.initialize(img.p9_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p9_3 = function() {
        this.initialize(img.p9_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_4 = function() {
        this.initialize(img.p9_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_5 = function() {
        this.initialize(img.p9_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_6 = function() {
        this.initialize(img.p9_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_7 = function() {
        this.initialize(img.p9_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_8 = function() {
        this.initialize(img.p9_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_9 = function() {
        this.initialize(img.p9_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_10 = function() {
        this.initialize(img.p9_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_11 = function() {
        this.initialize(img.p9_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p9_12 = function() {
        this.initialize(img.p9_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p9_13 = function() {
        this.initialize(img.p9_13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_14 = function() {
        this.initialize(img.p9_14);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_15 = function() {
        this.initialize(img.p9_15);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_16 = function() {
        this.initialize(img.p9_16);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p9_17 = function() {
        this.initialize(img.p9_17);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("9", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Likheter och skillnader", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(432, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Ringa in det som inte hör ihop.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 92, 12);
        this.roundRect1.setTransform(11, 18);

        this.instance_1 = new lib.p9_1();
        this.instance_1.setTransform(38, 35, 0.43, 0.43);

        this.instance_2 = new lib.p9_2();
        this.instance_2.setTransform(145, 38, 0.42, 0.42);

        this.instance_3 = new lib.p9_3();
        this.instance_3.setTransform(240, 35, 0.42, 0.42);

        this.instance_4 = new lib.p9_4();
        this.instance_4.setTransform(315, 45, 0.42, 0.42);

        this.instance_5 = new lib.p9_5();
        this.instance_5.setTransform(400, 26, 0.42, 0.42);

        this.addChild(this.roundRect1, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 100);

    (lib.Symbol3 = function() {
        this.initialize();       

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 92, 12);
        this.roundRect1.setTransform(11, 0);

        this.instance_1 = new lib.p9_6();
        this.instance_1.setTransform(38, 26, 0.43, 0.43);

        this.instance_2 = new lib.p9_7();
        this.instance_2.setTransform(135, 22, 0.43, 0.43);

        this.instance_3 = new lib.p9_8();
        this.instance_3.setTransform(240, 6, 0.4, 0.4);

        this.instance_4 = new lib.p9_9();
        this.instance_4.setTransform(315, 24, 0.43, 0.43);

        this.instance_5 = new lib.p9_10();
        this.instance_5.setTransform(380, 29, 0.43, 0.43);

        this.addChild(this.roundRect1, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 80);

    (lib.Symbol4 = function() {
        this.initialize();        

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 92, 12);
        this.roundRect1.setTransform(11, 0);

        this.instance_1 = new lib.p9_11();
        this.instance_1.setTransform(45, 20, 0.42, 0.42);

        this.instance_2 = new lib.p9_12();
        this.instance_2.setTransform(135, 29, 0.42, 0.42);

        this.instance_3 = new lib.p9_13();
        this.instance_3.setTransform(230, 26, 0.42, 0.42);

        this.instance_4 = new lib.p9_14();
        this.instance_4.setTransform(315, 26, 0.42, 0.42);

        this.instance_5 = new lib.p9_15();
        this.instance_5.setTransform(400, 21, 0.42, 0.42);

        this.addChild(this.roundRect1, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 80);

    (lib.Symbol5 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Rita något som hör ihop.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 218, 184, 12);
        this.roundRect1.setTransform(11, 20);

        this.roundRect2 = new cjs.Shape();
        this.roundRect2.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 218, 184, 12);
        this.roundRect2.setTransform(248, 20);

        this.instance_1 = new lib.p9_16();
        this.instance_1.setTransform(28, 32, 0.52, 0.52);

        this.instance_2 = new lib.p9_17();
        this.instance_2.setTransform(276, 32, 0.52, 0.52);

        this.addChild(this.headerCircle, this.text_1, this.roundRect1, this.roundRect2, this.instance_1, this.instance_2);

        var horizontalDashedLineContainer1 = new cjs.Container();

        var dot_X = 105,
            dot_Y1 = 85,
            dot_Y2 = 184;
        for (var col = 0; col < 21; col++) {

            this.upperDashedLine_1 = new cjs.Shape();
            this.upperDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.upperDashedLine_1.setTransform(dot_X + (col * 5), dot_Y1);

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (col * 5), dot_Y2);

            horizontalDashedLineContainer1.addChild(this.upperDashedLine_1, this.lowerDashedLine_1);
            horizontalDashedLineContainer1.setTransform(3, 10);

            this.addChild(horizontalDashedLineContainer1);
        }

        var verticalalDashedLineContainer1 = new cjs.Container();

        var dot_X1 = 93,
            dot_X2 = 215,
            dot_Y = 93;
        for (var row = 0; row < 17; row++) {

            this.leftDashedLine_1 = new cjs.Shape();
            this.leftDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
            this.leftDashedLine_1.setTransform(dot_X1, dot_Y + (row * 5));

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
            this.rightDashedLine_1.setTransform(dot_X2, dot_Y + (row * 5));

            verticalalDashedLineContainer1.addChild(this.leftDashedLine_1, this.rightDashedLine_1);
            verticalalDashedLineContainer1.setTransform(3, 10);

            this.addChild(verticalalDashedLineContainer1);
        }

        var cornerDashedLineContainer1 = new cjs.Container();

        //upper Left Corner

        this.upperleftDashedLine_1 = new cjs.Shape();
        this.upperleftDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperleftDashedLine_1.setTransform(94, 88);
        this.upperleftDashedLine_1.rotation = 10;

        this.upperleftDashedLine_2 = new cjs.Shape();
        this.upperleftDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperleftDashedLine_2.setTransform(97.5, 85);
        this.upperleftDashedLine_2.rotation = 50;

        this.upperleftDashedLine_3 = new cjs.Shape();
        this.upperleftDashedLine_3.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.upperleftDashedLine_3.setTransform(100, 85);

        //  upper Right Corner

        this.upperRightDashedLine_1 = new cjs.Shape();
        this.upperRightDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.upperRightDashedLine_1.setTransform(210, 85.5);
        this.upperRightDashedLine_1.rotation = 20;

        this.upperRightDashedLine_2 = new cjs.Shape();
        this.upperRightDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperRightDashedLine_2.setTransform(214, 88);
        this.upperRightDashedLine_2.rotation = -10;

        //lower Left Corner

        this.lowerleftDashedLine_1 = new cjs.Shape();
        this.lowerleftDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerleftDashedLine_1.setTransform(93, 178);
        this.lowerleftDashedLine_1.rotation = -5;

        this.lowerleftDashedLine_2 = new cjs.Shape();
        this.lowerleftDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerleftDashedLine_2.setTransform(94, 182.5);
        this.lowerleftDashedLine_2.rotation = -65;

        this.lowerleftDashedLine_3 = new cjs.Shape();
        this.lowerleftDashedLine_3.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.lowerleftDashedLine_3.setTransform(99, 184);

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerRightDashedLine_1.setTransform(215, 178.25);
        this.lowerRightDashedLine_1.rotation = 15;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(210.5, 184.25);
        this.lowerRightDashedLine_2.rotation = -30;

        cornerDashedLineContainer1.addChild(this.upperleftDashedLine_1, this.upperleftDashedLine_2, this.upperleftDashedLine_3, this.upperRightDashedLine_1,
            this.upperRightDashedLine_2, this.lowerleftDashedLine_1, this.lowerleftDashedLine_2, this.lowerleftDashedLine_3, this.lowerRightDashedLine_1,
            this.lowerRightDashedLine_2);
        cornerDashedLineContainer1.setTransform(3, 10);

        this.addChild(cornerDashedLineContainer1);

        var horizontalDashedLineContainer2 = new cjs.Container();

        var dot_X = 105,
            dot_Y1 = 85,
            dot_Y2 = 184;
        for (var col = 0; col < 21; col++) {

            this.upperDashedLine_1 = new cjs.Shape();
            this.upperDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.upperDashedLine_1.setTransform(dot_X + (col * 5), dot_Y1);

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (col * 5), dot_Y2);

            horizontalDashedLineContainer2.addChild(this.upperDashedLine_1, this.lowerDashedLine_1);
            horizontalDashedLineContainer2.setTransform(240, 10);

            this.addChild(horizontalDashedLineContainer2);
        }

        var verticalalDashedLineContainer2 = new cjs.Container();

        var dot_X1 = 93,
            dot_X2 = 215,
            dot_Y = 93;
        for (var row = 0; row < 17; row++) {

            this.leftDashedLine_1 = new cjs.Shape();
            this.leftDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
            this.leftDashedLine_1.setTransform(dot_X1, dot_Y + (row * 5));

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
            this.rightDashedLine_1.setTransform(dot_X2, dot_Y + (row * 5));

            verticalalDashedLineContainer2.addChild(this.leftDashedLine_1, this.rightDashedLine_1);
            verticalalDashedLineContainer2.setTransform(240, 10);

            this.addChild(verticalalDashedLineContainer2);
        }

        var cornerDashedLineContainer2 = new cjs.Container();

        //upper Left Corner

        this.upperleftDashedLine_1 = new cjs.Shape();
        this.upperleftDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperleftDashedLine_1.setTransform(94, 88);
        this.upperleftDashedLine_1.rotation = 10;

        this.upperleftDashedLine_2 = new cjs.Shape();
        this.upperleftDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperleftDashedLine_2.setTransform(97.5, 85);
        this.upperleftDashedLine_2.rotation = 50;

        this.upperleftDashedLine_3 = new cjs.Shape();
        this.upperleftDashedLine_3.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.upperleftDashedLine_3.setTransform(100, 85);

        //  upper Right Corner

        this.upperRightDashedLine_1 = new cjs.Shape();
        this.upperRightDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.upperRightDashedLine_1.setTransform(210, 85.5);
        this.upperRightDashedLine_1.rotation = 20;

        this.upperRightDashedLine_2 = new cjs.Shape();
        this.upperRightDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.upperRightDashedLine_2.setTransform(214, 88);
        this.upperRightDashedLine_2.rotation = -10;

        //lower Left Corner

        this.lowerleftDashedLine_1 = new cjs.Shape();
        this.lowerleftDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerleftDashedLine_1.setTransform(93, 178);
        this.lowerleftDashedLine_1.rotation = -5;

        this.lowerleftDashedLine_2 = new cjs.Shape();
        this.lowerleftDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerleftDashedLine_2.setTransform(94, 182.5);
        this.lowerleftDashedLine_2.rotation = -65;

        this.lowerleftDashedLine_3 = new cjs.Shape();
        this.lowerleftDashedLine_3.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.lowerleftDashedLine_3.setTransform(99, 184);

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(0, 3);
        this.lowerRightDashedLine_1.setTransform(215, 178.25);
        this.lowerRightDashedLine_1.rotation = 15;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#9DD1DF").s("#9DD1DF").ss(0.7).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(210.5, 184.25);
        this.lowerRightDashedLine_2.rotation = -30;

        cornerDashedLineContainer2.addChild(this.upperleftDashedLine_1, this.upperleftDashedLine_2, this.upperleftDashedLine_3, this.upperRightDashedLine_1,
            this.upperRightDashedLine_2, this.lowerleftDashedLine_1, this.lowerleftDashedLine_2, this.lowerleftDashedLine_3, this.lowerRightDashedLine_1,
            this.lowerRightDashedLine_2);

        cornerDashedLineContainer2.setTransform(240, 10);

        this.addChild(cornerDashedLineContainer2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 240);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(319, 56, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(319, 182, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(319, 290, 1, 1, 0, 0, 0, 254.6, 0);

        this.v4 = new lib.Symbol5();
        this.v4.setTransform(319, 416, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3, this.v4);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
