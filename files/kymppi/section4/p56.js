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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_1.png",
            id: "p56_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_2.png",
            id: "p56_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_3.png",
            id: "p56_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_4.png",
            id: "p56_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_5.png",
            id: "p56_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_6.png",
            id: "p56_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_7.png",
            id: "p56_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_8.png",
            id: "p56_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_9.png",
            id: "p56_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_10.png",
            id: "p56_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_11.png",
            id: "p56_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_12.png",
            id: "p56_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_13.png",
            id: "p56_13"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_14.png",
            id: "p56_14"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_15.png",
            id: "p56_15"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_16.png",
            id: "p56_16"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_17.png",
            id: "p56_17"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_18.png",
            id: "p56_18"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_19.png",
            id: "p56_19"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_20.png",
            id: "p56_20"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_21.png",
            id: "p56_21"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_22.png",
            id: "p56_22"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_23.png",
            id: "p56_23"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_24.png",
            id: "p56_24"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_25.png",
            id: "p56_25"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_26.png",
            id: "p56_26"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_27.png",
            id: "p56_27"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_28.png",
            id: "p56_28"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_29.png",
            id: "p56_29"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_30.png",
            id: "p56_30"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_31.png",
            id: "p56_31"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_32.png",
            id: "p56_32"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_33.png",
            id: "p56_33"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p56_34.png",
            id: "p56_34"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/even_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p56_1 = function() {
        this.initialize(img.p56_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p56_2 = function() {
        this.initialize(img.p56_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p56_3 = function() {
        this.initialize(img.p56_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_4 = function() {
        this.initialize(img.p56_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_5 = function() {
        this.initialize(img.p56_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_6 = function() {
        this.initialize(img.p56_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p56_7 = function() {
        this.initialize(img.p56_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p56_8 = function() {
        this.initialize(img.p56_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_9 = function() {
        this.initialize(img.p56_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_10 = function() {
        this.initialize(img.p56_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_11 = function() {
        this.initialize(img.p56_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_12 = function() {
        this.initialize(img.p56_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_13 = function() {
        this.initialize(img.p56_13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_14 = function() {
        this.initialize(img.p56_14);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_15 = function() {
        this.initialize(img.p56_15);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_16 = function() {
        this.initialize(img.p56_16);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p56_17 = function() {
        this.initialize(img.p56_17);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p56_18 = function() {
        this.initialize(img.p56_18);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_19 = function() {
        this.initialize(img.p56_19);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_20 = function() {
        this.initialize(img.p56_20);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_21 = function() {
        this.initialize(img.p56_21);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p56_22 = function() {
        this.initialize(img.p56_22);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p56_23 = function() {
        this.initialize(img.p56_23);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_24 = function() {
        this.initialize(img.p56_24);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_25 = function() {
        this.initialize(img.p56_25);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_26 = function() {
        this.initialize(img.p56_26);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_27 = function() {
        this.initialize(img.p56_27);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_28 = function() {
        this.initialize(img.p56_28);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_29 = function() {
        this.initialize(img.p56_29);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_30 = function() {
        this.initialize(img.p56_30);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_31 = function() {
        this.initialize(img.p56_31);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_32 = function() {
        this.initialize(img.p56_32);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_33 = function() {
        this.initialize(img.p56_33);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p56_34 = function() {
        this.initialize(img.p56_34);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("56", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Begreppet hälften av antal", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

        this.Rect1 = new cjs.Shape();
        this.Rect1.graphics.f("#ffffff").s("#D2E8F0").ss(1).drawRoundRect(0, 0, 458, 540, 12);
        this.Rect1.setTransform(78, 78);

        this.addChild(this.Rect1);

        for (var col = 0; col < 1; col++) {

            var horizontalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 63; lineCount++) {

                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(0 + (lineCount * 7), 0);

                horizontalLineContainer.addChild(this.hrline_1);
            }

            horizontalLineContainer.setTransform(88 + (col * 145), 346);
            this.addChild(horizontalLineContainer);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Måla hälften av antalet.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var col = 0; col < 1; col++) {

            var horizontalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 63; lineCount++) {

                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(0 + (lineCount * 7), 0);

                horizontalLineContainer.addChild(this.hrline_1);
            }

            horizontalLineContainer.setTransform(40 + (col * 145), 154);
            this.addChild(horizontalLineContainer);
        }

        for (var lineCount = 0; lineCount < 37; lineCount++) {

            this.vrline_1 = new cjs.Shape();
            this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
            this.vrline_1.setTransform(259, 28 + (lineCount * 7));

            this.addChild(this.vrline_1);
        }

        // row---0&&col---0

        this.instance_1 = new lib.p56_1();
        this.instance_1.setTransform(67, 82, 0.57, 0.57);

        this.instance_2 = new lib.p56_2();
        this.instance_2.setTransform(147, 55, 0.57, 0.57);

        this.addChild(this.instance_1, this.instance_2);

        // row---0&&col---1

        this.instance_3 = new lib.p56_3();
        this.instance_3.setTransform(292, 40, 0.55, 0.55);

        this.instance_4 = new lib.p56_3();
        this.instance_4.setTransform(372, 52, 0.55, 0.55);

        this.instance_5 = new lib.p56_3();
        this.instance_5.setTransform(312, 101, 0.55, 0.55);

        this.instance_6 = new lib.p56_3();
        this.instance_6.setTransform(405, 108, 0.55, 0.55);

        this.addChild(this.instance_3, this.instance_4, this.instance_5, this.instance_6);

        // row---1&&col---0

        this.instance_7 = new lib.p56_4();
        this.instance_7.setTransform(78, 165, 0.55, 0.55);

        this.instance_8 = new lib.p56_5();
        this.instance_8.setTransform(137, 175, 0.55, 0.55);

        this.instance_9 = new lib.p56_6();
        this.instance_9.setTransform(190, 165, 0.55, 0.55);

        this.instance_10 = new lib.p56_7();
        this.instance_10.setTransform(55, 223, 0.55, 0.55);

        this.instance_11 = new lib.p56_8();
        this.instance_11.setTransform(109, 227, 0.55, 0.55);

        this.instance_12 = new lib.p56_9();
        this.instance_12.setTransform(182, 225, 0.55, 0.55);

        this.addChild(this.instance_7, this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12);

        // row---1&&col---1

        this.instance_13 = new lib.p56_10();
        this.instance_13.setTransform(272, 161, 0.55, 0.55);

        this.instance_14 = new lib.p56_11();
        this.instance_14.setTransform(324, 167, 0.55, 0.55);

        this.instance_15 = new lib.p56_12();
        this.instance_15.setTransform(375, 167, 0.55, 0.55);

        this.instance_16 = new lib.p56_13();
        this.instance_16.setTransform(432, 165, 0.55, 0.55);

        this.instance_17 = new lib.p56_14();
        this.instance_17.setTransform(275, 225, 0.55, 0.55);

        this.instance_18 = new lib.p56_12();
        this.instance_18.setTransform(324, 227, 0.55, 0.55);

        this.instance_19 = new lib.p56_11();
        this.instance_19.setTransform(374, 225, 0.55, 0.55);

        this.instance_20 = new lib.p56_15();
        this.instance_20.setTransform(417, 225, 0.55, 0.55);

        this.addChild(this.instance_13, this.instance_14, this.instance_15, this.instance_16, this.instance_17, this.instance_18,
            this.instance_19, this.instance_20);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 300);

    (lib.Symbol3 = function() {
        this.initialize();

        for (var col = 0; col < 1; col++) {
            var horizontalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 63; lineCount++) {

                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(0 + (lineCount * 7), 0);

                horizontalLineContainer.addChild(this.hrline_1);
            }

            horizontalLineContainer.setTransform(40 + (col * 145), 135);
            this.addChild(horizontalLineContainer);
        }


        for (var lineCount = 0; lineCount < 38; lineCount++) {

            this.vrline_1 = new cjs.Shape();
            this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
            this.vrline_1.setTransform(259, 0 + (lineCount * 7));

            this.addChild(this.vrline_1);
        }

        // row---0&&col---0

        this.instance_1 = new lib.p56_16();
        this.instance_1.setTransform(47, 32, 0.54, 0.54);

        this.instance_2 = new lib.p56_17();
        this.instance_2.setTransform(98, 13, 0.54, 0.54);

        this.instance_3 = new lib.p56_18();
        this.instance_3.setTransform(154, 20, 0.54, 0.54);

        this.instance_4 = new lib.p56_19();
        this.instance_4.setTransform(204, 20, 0.54, 0.54);

        this.instance_5 = new lib.p56_20();
        this.instance_5.setTransform(52, 88, 0.54, 0.54);

        this.instance_6 = new lib.p56_21();
        this.instance_6.setTransform(103, 67, 0.54, 0.54);

        this.instance_7 = new lib.p56_16();
        this.instance_7.setTransform(157, 85, 0.54, 0.54);

        this.instance_8 = new lib.p56_17();
        this.instance_8.setTransform(203, 65, 0.55, 0.55);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7, this.instance_8);

        // row---0&&col---1

        this.instance_9 = new lib.p56_22();
        this.instance_9.setTransform(272, 25, 0.42, 0.42);

        this.instance_10 = new lib.p56_23();
        this.instance_10.setTransform(323, 13, 0.42, 0.42);

        this.instance_11 = new lib.p56_24();
        this.instance_11.setTransform(373, 17, 0.42, 0.42);

        this.instance_12 = new lib.p56_25();
        this.instance_12.setTransform(424, 31, 0.42, 0.42);

        this.instance_13 = new lib.p56_26();
        this.instance_13.setTransform(272, 58, 0.42, 0.42);

        this.instance_14 = new lib.p56_27();
        this.instance_14.setTransform(325, 53, 0.42, 0.42);

        this.instance_15 = new lib.p56_24();
        this.instance_15.setTransform(382, 63, 0.42, 0.42);

        this.instance_16 = new lib.p56_23();
        this.instance_16.setTransform(290, 101, 0.42, 0.42);

        this.instance_17 = new lib.p56_25();
        this.instance_17.setTransform(345, 97, 0.42, 0.42);

        this.instance_18 = new lib.p56_26();
        this.instance_18.setTransform(421, 88, 0.42, 0.42);

        this.addChild(this.instance_9, this.instance_10, this.instance_11, this.instance_12, this.instance_13, this.instance_14, this.instance_15, this.instance_16,
            this.instance_17, this.instance_18);

        // row---1&&col---0

        this.instance_19 = new lib.p56_28();
        this.instance_19.setTransform(57, 150, 0.55, 0.55);

        this.instance_20 = new lib.p56_29();
        this.instance_20.setTransform(127, 148, 0.55, 0.55);

        this.instance_21 = new lib.p56_30();
        this.instance_21.setTransform(190, 148, 0.55, 0.55);

        this.instance_22 = new lib.p56_31();
        this.instance_22.setTransform(55, 208, 0.55, 0.55);

        this.instance_23 = new lib.p56_32();
        this.instance_23.setTransform(125, 208, 0.55, 0.55);

        this.instance_24 = new lib.p56_33();
        this.instance_24.setTransform(190, 208, 0.55, 0.55);

        this.addChild(this.instance_19, this.instance_20, this.instance_21, this.instance_22, this.instance_23, this.instance_24);

        // row---1&&col---1

        this.instance_25 = new lib.p56_34();
        this.instance_25.setTransform(312, 163, 0.55, 0.55);

        this.addChild(this.instance_25);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 270);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 58, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 345, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
