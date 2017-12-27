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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_1.png",
            id: "p19_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_2.png",
            id: "p19_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_3.png",
            id: "p19_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_4.png",
            id: "p19_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_5.png",
            id: "p19_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_6.png",
            id: "p19_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_7.png",
            id: "p19_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_8.png",
            id: "p19_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_9.png",
            id: "p19_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_10.png",
            id: "p19_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_11.png",
            id: "p19_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_12.png",
            id: "p19_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_13.png",
            id: "p19_13"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_14.png",
            id: "p19_14"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_15.png",
            id: "p19_15"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_16.png",
            id: "p19_16"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_17.png",
            id: "p19_17"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_18.png",
            id: "p19_18"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_19.png",
            id: "p19_19"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p19_20.png",
            id: "p19_20"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/odd_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p19_1 = function() {
        this.initialize(img.p19_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_2 = function() {
        this.initialize(img.p19_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_3 = function() {
        this.initialize(img.p19_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p19_4 = function() {
        this.initialize(img.p19_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_5 = function() {
        this.initialize(img.p19_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_6 = function() {
        this.initialize(img.p19_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p19_7 = function() {
        this.initialize(img.p19_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_8 = function() {
        this.initialize(img.p19_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_9 = function() {
        this.initialize(img.p19_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p19_10 = function() {
        this.initialize(img.p19_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_11 = function() {
        this.initialize(img.p19_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_12 = function() {
        this.initialize(img.p19_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p19_13 = function() {
        this.initialize(img.p19_13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_14 = function() {
        this.initialize(img.p19_14);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_15 = function() {
        this.initialize(img.p19_15);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p19_16 = function() {
        this.initialize(img.p19_16);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_17 = function() {
        this.initialize(img.p19_17);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_18 = function() {
        this.initialize(img.p19_18);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p19_19 = function() {
        this.initialize(img.p19_19);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p19_20 = function() {
        this.initialize(img.p19_20);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("19", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Uppdelning av antal", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(445, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("De vita knapparna visar hur många det är tillsammans.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.text_2 = new cjs.Text("Skriv antalet knappar som är kvar i påsen.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(28, 25);

        this.addChild(this.headerCircle, this.text_1, this.text_2);

        for (var row = 0; row < 1; row++) {

            this.roundRect1 = new cjs.Shape();
            this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 163, 12);
            this.roundRect1.setTransform(30, 37);

            this.addChild(this.roundRect1);
        }

        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 61; col++) {

                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(45 + (col * 7), 72);

                this.addChild(this.hrline_1);
            }
        }

        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 2; col++) {

                var verticalLineContainer = new cjs.Container();

                for (var lineCount = 0; lineCount < 22; lineCount++) {

                    this.vrline_1 = new cjs.Shape();
                    this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                    this.vrline_1.setTransform(40, 0 + (lineCount * 7));

                    verticalLineContainer.addChild(this.vrline_1);
                }
                verticalLineContainer.setTransform(142 + (col * 152), 43);
                this.addChild(verticalLineContainer);
            }
        }

        for (var col = 0; col < 3; col++) {

            this.instance_1 = new lib.p19_10();
            this.instance_1.setTransform(72 + (col * 150), 43, 0.57, 0.57);

            this.addChild(this.instance_1);
        }

        this.instance_2 = new lib.p19_1();
        this.instance_2.setTransform(75, 88, 0.53, 0.53);

        this.instance_3 = new lib.p19_2();
        this.instance_3.setTransform(220, 82, 0.53, 0.53);

        this.instance_4 = new lib.p19_3();
        this.instance_4.setTransform(370, 88, 0.53, 0.53);

        this.text_3 = new cjs.Text("2", "46px 'UusiTekstausMajema'");
        this.text_3.setTransform(107, 163);

        this.addChild(this.instance_2, this.instance_3, this.instance_4, this.text_3);

        this.instance_5 = new lib.p19_13();
        this.instance_5.setTransform(52, 161, 0.57, 0.57);

        this.instance_6 = new lib.p19_14();
        this.instance_6.setTransform(200, 83, 0.57, 0.57);

        this.instance_7 = new lib.p19_14();
        this.instance_7.setTransform(191, 111, 0.57, 0.57);

        this.addChild(this.instance_5, this.instance_6, this.instance_7);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 190);

    (lib.Symbol3 = function() {
        this.initialize();

        for (var row = 0; row < 3; row++) {

            this.roundRect1 = new cjs.Shape();
            this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 163, 12);
            this.roundRect1.setTransform(30, 0);

            this.addChild(this.roundRect1);
        }

        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 61; col++) {

                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(45 + (col * 7), 35);

                this.addChild(this.hrline_1);
            }
        }

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

        for (var col = 0; col < 3; col++) {

            this.instance_1 = new lib.p19_11();
            this.instance_1.setTransform(56 + (col * 150), 7, 0.57, 0.57);

            this.addChild(this.instance_1);
        }

        this.instance_2 = new lib.p19_4();
        this.instance_2.setTransform(72, 47, 0.53, 0.53);

        this.instance_3 = new lib.p19_5();
        this.instance_3.setTransform(220, 52, 0.53, 0.53);

        this.instance_4 = new lib.p19_6();
        this.instance_4.setTransform(378, 47, 0.53, 0.53);

        this.addChild(this.instance_2, this.instance_3, this.instance_4);

        this.instance_5 = new lib.p19_15();
        this.instance_5.setTransform(60, 51, 0.57, 0.57);

        this.instance_6 = new lib.p19_15();
        this.instance_6.setTransform(50, 79, 0.57, 0.57);

        this.instance_7 = new lib.p19_16();
        this.instance_7.setTransform(205, 63, 0.57, 0.57);

        this.instance_8 = new lib.p19_17();
        this.instance_8.setTransform(345, 50, 0.57, 0.57);

        this.instance_9 = new lib.p19_17();
        this.instance_9.setTransform(345, 88, 0.57, 0.57);

        this.instance_10 = new lib.p19_17();
        this.instance_10.setTransform(368, 65, 0.57, 0.57);

        this.addChild(this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9, this.instance_10);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 160);

    (lib.Symbol4 = function() {
        this.initialize();

        for (var row = 0; row < 3; row++) {

            this.roundRect1 = new cjs.Shape();
            this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 163, 12);
            this.roundRect1.setTransform(30, 0);

            this.addChild(this.roundRect1);
        }

        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 61; col++) {

                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(45 + (col * 7), 35);

                this.addChild(this.hrline_1);
            }
        }

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

        for (var col = 0; col < 3; col++) {

            this.instance_1 = new lib.p19_12();
            this.instance_1.setTransform(46 + (col * 150), 6, 0.57, 0.57);

            this.addChild(this.instance_1);
        }

        this.instance_2 = new lib.p19_7();
        this.instance_2.setTransform(72, 47, 0.53, 0.53);

        this.instance_3 = new lib.p19_8();
        this.instance_3.setTransform(220, 47, 0.53, 0.53);

        this.instance_4 = new lib.p19_9();
        this.instance_4.setTransform(378, 47, 0.53, 0.53);

        this.addChild(this.instance_2, this.instance_3, this.instance_4);

        this.instance_5 = new lib.p19_18();
        this.instance_5.setTransform(62, 59, 0.57, 0.57);

        this.instance_6 = new lib.p19_19();
        this.instance_6.setTransform(195, 42, 0.57, 0.57);

        this.instance_7 = new lib.p19_19();
        this.instance_7.setTransform(210, 67, 0.57, 0.57);

        this.instance_8 = new lib.p19_19();
        this.instance_8.setTransform(192, 92, 0.57, 0.57);

        this.instance_9 = new lib.p19_20();
        this.instance_9.setTransform(355, 45, 0.57, 0.57);

        this.instance_10 = new lib.p19_20();
        this.instance_10.setTransform(350, 77, 0.57, 0.57);

        this.instance_11 = new lib.p19_20();
        this.instance_11.setTransform(438, 57, 0.57, 0.57);

        this.instance_12 = new lib.p19_20();
        this.instance_12.setTransform(452, 85, 0.57, 0.57);

        this.addChild(this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9, this.instance_10,
            this.instance_11, this.instance_12);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 160);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 58, 1, 1, 0, 0, 0, 254.6, 0);

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
