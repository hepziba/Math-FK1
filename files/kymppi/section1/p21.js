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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p21_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p21_1.png",
            id: "p21_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p21_2.png",
            id: "p21_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p21_3.png",
            id: "p21_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p21_4.png",
            id: "p21_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p21_5.png",
            id: "p21_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p21_6.png",
            id: "p21_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p21_7.png",
            id: "p21_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p21_8.png",
            id: "p21_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p21_9.png",
            id: "p21_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/bgStrip_1.png",
            id: "bgStrip_1"
        }]
    };

    (lib.p21_1 = function() {
        this.initialize(img.p21_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p21_2 = function() {
        this.initialize(img.p21_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p21_3 = function() {
        this.initialize(img.p21_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p21_4 = function() {
        this.initialize(img.p21_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p21_5 = function() {
        this.initialize(img.p21_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p21_6 = function() {
        this.initialize(img.p21_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p21_7 = function() {
        this.initialize(img.p21_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p21_8 = function() {
        this.initialize(img.p21_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p21_9 = function() {
        this.initialize(img.p21_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.bgStrip_1 = function() {
        this.initialize(img.bgStrip_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.bgStrip_1();
        this.instance_1.setTransform(0, 0, 1, 1);

        this.pageNum_text = new cjs.Text("21", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(538, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);        

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#C7EBF2").s("#C7EBF2").ss(1).drawRoundRect(0, 0, 458, 170, 12);
        this.roundRect1.setTransform(70, 33);

        this.roundRect2 = new cjs.Shape();
        this.roundRect2.graphics.f("#ffffff").s("#ffffff").ss(1).drawRoundRect(0, 0, 450, 159, 12);
        this.roundRect2.setTransform(74, 38);

        this.text_1 = new cjs.Text("Spelregler", "19px 'Albus'", "#D03268");
        this.text_1.setTransform(275, 62);

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
            horizontalDashedLineContainer1.setTransform(-18, -47);

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
            verticalalDashedLineContainer1.setTransform(-18, -47);

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
        cornerDashedLineContainer1.setTransform(-18, -47);

        this.addChild(cornerDashedLineContainer1);

        this.instance_1 = new lib.p21_1();
        this.instance_1.setTransform(98, 77, 0.41, 0.41);

        this.instance_2 = new lib.p21_2();
        this.instance_2.setTransform(55, 68, 0.47, 0.47);
        this.instance_2.rotation = -30;

        this.instance_3 = new lib.p21_3();
        this.instance_3.setTransform(107, 12, 0.4, 0.4);

        this.instance_4 = new lib.p21_9();
        this.instance_4.setTransform(294, 23, 0.35, 0.35);

        this.instance_5 = new lib.p21_4();
        this.instance_5.setTransform(437, 61, 0.4, 0.4);
        this.instance_5.rotation = 10;

        this.instance_6 = new lib.p21_5();
        this.instance_6.setTransform(452, 58, 0.4, 0.4);
        this.instance_6.rotation = -15;

        this.instance_7 = new lib.p21_6();
        this.instance_7.setTransform(479, 62, 0.5, 0.5);
        this.instance_7.rotation = 25;

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5,
            this.instance_6, this.instance_7);

        var splText1 = ['Välj varsin spelplan.', 'Turas om att slå tärningen.', 'Måla lika många ränder som tärningen visar,',
            'När ett helt tält är målat, målar du vimpeln.', 'Först med tre målade vimplar vinner.'
        ];

        var splText2 = [' ', ' ', 'på ett tält.', 'Det måste gå jämnt ut.', ' '];
        var count = 0;
        var row_X = 281;
        var row_Y = 0;
        var dot_X = 270;
        var dot_Y = 0;
        for (var row = 0; row < 5; row++) {

            if (row < 3) {
                dot_Y = 79;
                row_Y = 83;
            } else if (row > 2 && row < 4) {
                dot_Y = 91;
                row_Y = 95;
            } else {
                dot_Y = 103;
                row_Y = 107;
            }

            if (row == 4) {
                row_X = 279;
            } else {
                row_X = 281;
            }

            var fillText1 = splText1[count];
            var fillText2 = splText2[count];
            count = count + 1;

            this.headerCircle = new cjs.Shape();
            this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
            this.headerCircle.setTransform(dot_X, dot_Y + (row * 18));

            this.text_2 = new cjs.Text('' + fillText1, "11.5px 'ElisarDTInfant-Regular'");
            this.text_2.setTransform(row_X, row_Y + (row * 18));

            this.text_3 = new cjs.Text('' + fillText2, "11.5px 'ElisarDTInfant-Regular'");
            this.text_3.setTransform(row_X, row_Y + 13 + (row * 18));

            this.addChild(this.headerCircle, this.text_2, this.text_3);
        }

        this.roundRect3 = new cjs.Shape();
        this.roundRect3.graphics.f("#E5F4D7").s("#E5F4D7").ss(1).drawRoundRect(0, 0, 220, 410, 12);
        this.roundRect3.setTransform(70, 228);

        this.roundRect4 = new cjs.Shape();
        this.roundRect4.graphics.f("#E5F4D7").s("#E5F4D7").ss(1).drawRoundRect(0, 0, 220, 410, 12);
        this.roundRect4.setTransform(308, 228);

        this.instance_8 = new lib.p21_7();
        this.instance_8.setTransform(72, 242, 0.43, 0.43);

        this.instance_9 = new lib.p21_8();
        this.instance_9.setTransform(311, 238, 0.44, 0.44);

        this.addChild(this.roundRect3, this.roundRect4, this.instance_8, this.instance_9);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 580);

    (lib.p6 = function() {
        this.initialize();

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
