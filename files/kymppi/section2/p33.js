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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_1.png",
            id: "p33_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_2.png",
            id: "p33_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_3.png",
            id: "p33_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_4.png",
            id: "p33_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_5.png",
            id: "p33_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_6.png",
            id: "p33_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_7.png",
            id: "p33_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_8.png",
            id: "p33_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_9.png",
            id: "p33_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_10.png",
            id: "p33_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_11.png",
            id: "p33_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_12.png",
            id: "p33_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_13.png",
            id: "p33_13"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_14.png",
            id: "p33_14"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_15.png",
            id: "p33_15"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_16.png",
            id: "p33_16"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_17.png",
            id: "p33_17"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p33_18.png",
            id: "p33_18"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/odd_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p33_1 = function() {
        this.initialize(img.p33_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_2 = function() {
        this.initialize(img.p33_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_3 = function() {
        this.initialize(img.p33_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p33_4 = function() {
        this.initialize(img.p33_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_5 = function() {
        this.initialize(img.p33_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_6 = function() {
        this.initialize(img.p33_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p33_7 = function() {
        this.initialize(img.p33_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_8 = function() {
        this.initialize(img.p33_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_9 = function() {
        this.initialize(img.p33_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p33_10 = function() {
        this.initialize(img.p33_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_11 = function() {
        this.initialize(img.p33_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_12 = function() {
        this.initialize(img.p33_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p33_13 = function() {
        this.initialize(img.p33_13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_14 = function() {
        this.initialize(img.p33_14);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_15 = function() {
        this.initialize(img.p33_15);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p33_16 = function() {
        this.initialize(img.p33_16);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_17 = function() {
        this.initialize(img.p33_17);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p33_18 = function() {
        this.initialize(img.p33_18);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("33", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Uppdelning av antal", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(442, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 42);

        this.text_1 = new cjs.Text("Siffran visar hur många det är tillsammans.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 47);

        this.text_2 = new cjs.Text("Skriv antalet knappar som är kvar i påsen.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(28, 67);

        this.instance_1 = new lib.p33_10();
        this.instance_1.setTransform(355, 0, 0.5, 0.5);

        this.addChild(this.headerCircle, this.text_1, this.text_2, this.instance_1);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 163, 12);
        this.roundRect1.setTransform(30, 79);

        this.addChild(this.roundRect1);

        for (var col = 0; col < 2; col++) {

            var verticalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 22; lineCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(40, 0 + (lineCount * 7));

                verticalLineContainer.addChild(this.vrline_1);
            }
            verticalLineContainer.setTransform(142 + (col * 152), 85);
            this.addChild(verticalLineContainer);
        }

        var fillText = 0;
        for (var col = 0; col < 3; col++) {

            fillText = 6;

            this.text_3 = new cjs.Text('' + fillText, "30px 'ElisarDTInfant-SemiBold'", "#00A3C0");
            this.text_3.setTransform(52 + (col * 152), 114);

            this.addChild(this.text_3);
        }

        this.instance_2 = new lib.p33_1();
        this.instance_2.setTransform(75, 130, 0.53, 0.53);

        this.instance_3 = new lib.p33_2();
        this.instance_3.setTransform(220, 124, 0.53, 0.53);

        this.instance_4 = new lib.p33_3();
        this.instance_4.setTransform(370, 130, 0.53, 0.53);

        this.addChild(this.instance_2, this.instance_3, this.instance_4);

        this.instance_5 = new lib.p33_11();
        this.instance_5.setTransform(110, 92, 0.57, 0.57);

        this.instance_6 = new lib.p33_11();
        this.instance_6.setTransform(148, 97, 0.57, 0.57);

        this.instance_7 = new lib.p33_11();
        this.instance_7.setTransform(140, 132, 0.57, 0.57);

        this.instance_8 = new lib.p33_12();
        this.instance_8.setTransform(260, 90, 0.57, 0.57);

        this.instance_9 = new lib.p33_12();
        this.instance_9.setTransform(305, 94, 0.57, 0.57);
        this.instance_9.rotation = 35;

        this.instance_10 = new lib.p33_12();
        this.instance_10.setTransform(290, 129, 0.57, 0.57);

        this.instance_11 = new lib.p33_12();
        this.instance_11.setTransform(295, 170, 0.57, 0.57);
        this.instance_11.rotation = -25;

        this.instance_12 = new lib.p33_13();
        this.instance_12.setTransform(427, 96, 0.57, 0.57);

        this.instance_13 = new lib.p33_13();
        this.instance_13.setTransform(440, 137, 0.57, 0.57);
        this.instance_13.rotation = -30;

        this.addChild(this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9,
            this.instance_10, this.instance_11, this.instance_12, this.instance_13);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0,490, 250);

    (lib.Symbol3 = function() {
        this.initialize();

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 163, 12);
        this.roundRect1.setTransform(30, 0);

        this.addChild(this.roundRect1);

        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 2; col++) {

                var verticalLineContainer = new cjs.Container();

                for (var lineCount = 0; lineCount < 22; lineCount++) {

                    this.vrline_1 = new cjs.Shape();
                    this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                    this.vrline_1.setTransform(40, 0 + (lineCount * 7));

                    verticalLineContainer.addChild(this.vrline_1);
                }
                verticalLineContainer.setTransform(142 + (col * 152), 6);
                this.addChild(verticalLineContainer);
            }
        }

        var fillText = 0;
        for (var col = 0; col < 3; col++) {

            fillText = 7;

            this.text_1 = new cjs.Text('' + fillText, "30px 'ElisarDTInfant-SemiBold'", "#00A3C0");
            this.text_1.setTransform(52 + (col * 152), 37);

            this.addChild(this.text_1);
        }

        this.instance_1 = new lib.p33_4();
        this.instance_1.setTransform(72, 47, 0.53, 0.53);

        this.instance_2 = new lib.p33_5();
        this.instance_2.setTransform(220, 52, 0.53, 0.53);

        this.instance_3 = new lib.p33_6();
        this.instance_3.setTransform(378, 47, 0.53, 0.53);

        this.addChild(this.instance_1, this.instance_2, this.instance_3);

        this.instance_4 = new lib.p33_14();
        this.instance_4.setTransform(100, 10, 0.57, 0.57);
        this.instance_4.rotation = -15;

        this.instance_5 = new lib.p33_14();
        this.instance_5.setTransform(133, 22, 0.57, 0.57);
        this.instance_5.rotation = -30;

        this.instance_6 = new lib.p33_14();
        this.instance_6.setTransform(150, 43, 0.57, 0.57);

        this.instance_7 = new lib.p33_14();
        this.instance_7.setTransform(55, 72, 0.57, 0.57);

        this.instance_8 = new lib.p33_15();
        this.instance_8.setTransform(240, 12, 0.57, 0.57);

        this.instance_9 = new lib.p33_15();
        this.instance_9.setTransform(270, 22, 0.57, 0.57);
        this.instance_9.rotation = -30;

        this.instance_10 = new lib.p33_15();
        this.instance_10.setTransform(292, 39, 0.57, 0.57);

        this.instance_11 = new lib.p33_15();
        this.instance_11.setTransform(210, 55, 0.57, 0.57);

        this.instance_12 = new lib.p33_15();
        this.instance_12.setTransform(198, 85, 0.57, 0.57);

        this.instance_13 = new lib.p33_16();
        this.instance_13.setTransform(417, 15, 0.57, 0.57);

        this.instance_14 = new lib.p33_16();
        this.instance_14.setTransform(438, 43, 0.57, 0.57);
        this.instance_14.rotation = -30;

        this.addChild(this.instance_4, this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9,
            this.instance_10, this.instance_11, this.instance_12, this.instance_13, this.instance_14);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 160);

    (lib.Symbol4 = function() {
        this.initialize();

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 163, 12);
        this.roundRect1.setTransform(30, 0);

        this.addChild(this.roundRect1);

        for (var col = 0; col < 2; col++) {

            var verticalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 22; lineCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(40, 0 + (lineCount * 7));

                verticalLineContainer.addChild(this.vrline_1);
            }
            verticalLineContainer.setTransform(142 + (col * 152), 6);
            this.addChild(verticalLineContainer);
        }

        var fillText = 0;
        for (var col = 0; col < 3; col++) {

            fillText = 8;

            this.text_1 = new cjs.Text('' + fillText, "30px 'ElisarDTInfant-SemiBold'", "#00A3C0");
            this.text_1.setTransform(52 + (col * 152), 39);

            this.addChild(this.text_1);
        }

        this.instance_1 = new lib.p33_7();
        this.instance_1.setTransform(72, 47, 0.53, 0.53);

        this.instance_2 = new lib.p33_8();
        this.instance_2.setTransform(225, 47, 0.53, 0.53);

        this.instance_3 = new lib.p33_9();
        this.instance_3.setTransform(378, 47, 0.53, 0.53);

        this.addChild(this.instance_1, this.instance_2, this.instance_3);

        this.instance_4 = new lib.p33_17();
        this.instance_4.setTransform(90, 9, 0.57, 0.57);

        this.instance_5 = new lib.p33_17();
        this.instance_5.setTransform(113, 33, 0.57, 0.57);
        this.instance_5.rotation = -35;

        this.instance_6 = new lib.p33_17();
        this.instance_6.setTransform(148, 7, 0.57, 0.57);

        this.instance_7 = new lib.p33_17();
        this.instance_7.setTransform(155, 37, 0.57, 0.57);
        this.instance_7.rotation = 35;

        this.instance_8 = new lib.p33_17();
        this.instance_8.setTransform(50, 70, 0.57, 0.57);
        this.instance_8.rotation = -35;

        this.instance_9 = new lib.p33_13();
        this.instance_9.setTransform(247, 19, 0.57, 0.57);
        this.instance_9.rotation = -30;

        this.instance_10 = new lib.p33_13();
        this.instance_10.setTransform(293, 10, 0.57, 0.57);

        this.instance_11 = new lib.p33_13();
        this.instance_11.setTransform(287, 39, 0.57, 0.57);
        this.instance_11.rotation = -10;

        this.instance_12 = new lib.p33_13();
        this.instance_12.setTransform(310, 65, 0.57, 0.57);
        this.instance_12.rotation = 25;

        this.instance_13 = new lib.p33_18();
        this.instance_13.setTransform(418, 10, 0.57, 0.57);
        this.instance_13.rotation = 19;

        this.instance_14 = new lib.p33_18();
        this.instance_14.setTransform(478, 24, 0.57, 0.57);
        this.instance_14.rotation = 130;

        this.instance_15 = new lib.p33_18();
        this.instance_15.setTransform(454, 45, 0.57, 0.57);
        this.instance_15.rotation = 35;

        this.addChild(this.instance_4, this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9,
            this.instance_10, this.instance_11, this.instance_12, this.instance_13, this.instance_14, this.instance_15);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 160);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 16, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 273, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(307, 451, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
