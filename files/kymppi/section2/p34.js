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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_1.png",
            id: "p34_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_2.png",
            id: "p34_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_3.png",
            id: "p34_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_4.png",
            id: "p34_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_5.png",
            id: "p34_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_6.png",
            id: "p34_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_7.png",
            id: "p34_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_8.png",
            id: "p34_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_9.png",
            id: "p34_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_10.png",
            id: "p34_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_11.png",
            id: "p34_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_12.png",
            id: "p34_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_13.png",
            id: "p34_13"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_14.png",
            id: "p34_14"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p34_15.png",
            id: "p34_15"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/even_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p34_1 = function() {
        this.initialize(img.p34_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p34_2 = function() {
        this.initialize(img.p34_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p34_3 = function() {
        this.initialize(img.p34_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p34_4 = function() {
        this.initialize(img.p34_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p34_5 = function() {
        this.initialize(img.p34_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p34_6 = function() {
        this.initialize(img.p34_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p34_7 = function() {
        this.initialize(img.p34_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p34_8 = function() {
        this.initialize(img.p34_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p34_9 = function() {
        this.initialize(img.p34_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p34_10 = function() {
        this.initialize(img.p34_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p34_11 = function() {
        this.initialize(img.p34_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p34_12 = function() {
        this.initialize(img.p34_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p34_13 = function() {
        this.initialize(img.p34_13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p34_14 = function() {
        this.initialize(img.p34_14);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p34_15 = function() {
        this.initialize(img.p34_15);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("34", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Begreppet dela lika", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.instance_1 = new lib.p34_1();
        this.instance_1.setTransform(45, 0, 0.53, 0.512);

        this.addChild(this.instance_1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 140);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Dela kexen lika mellan barnen. Rita. Skriv antalet.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var col = 0; col < 2; col++) {

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#D2E8F0").ss(1).drawRoundRect(0, 0, 218, 200, 12);
            this.Rect1.setTransform(30 + (col * 238), 20);

            this.addChild(this.Rect1);
        }

        var col_X = 0;

        for (var col = 0; col < 2; col++) {

            var horizontalLineContainer = new cjs.Container();

            if (col == 0) {
                col_X = 39;
            } else if (col == 1) {
                col_X = 40;
            }

            for (var lineCount = 0; lineCount < 29; lineCount++) {

                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(0 + (lineCount * 7), 0);

                horizontalLineContainer.addChild(this.hrline_1);
            }

            horizontalLineContainer.setTransform(col_X + (col * 235), 72);
            this.addChild(horizontalLineContainer);
        }

        for (var col = 0; col < 2; col++) {

            var verticalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 20; lineCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(40, 7 + (lineCount * 7));

                verticalLineContainer.addChild(this.vrline_1);
            }
            verticalLineContainer.setTransform(100 + (col * 237), 70);
            this.addChild(verticalLineContainer);
        }

        var col_X = 0;
        for (var col = 0; col < 4; col++) {

            if (col < 2) {
                col_X = 101;
            } else {
                col_X = 128;
            }

            this.Rect2 = new cjs.Shape();
            this.Rect2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 35);
            this.Rect2.setTransform(col_X + (col * 105), 177);

            this.addChild(this.Rect2);
        }

        //row-1

        this.instance_1 = new lib.p34_2();
        this.instance_1.setTransform(40, 82, 0.53, 0.53);

        this.instance_2 = new lib.p34_3();
        this.instance_2.setTransform(182, 82, 0.53, 0.53);

        this.instance_3 = new lib.p34_4();
        this.instance_3.setTransform(278, 82, 0.53, 0.53);

        this.instance_4 = new lib.p34_5();
        this.instance_4.setTransform(430, 82, 0.53, 0.53);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4);

        //row-0 --- col-0

        this.instance_5 = new lib.p34_10();
        this.instance_5.setTransform(62, 35, 0.6, 0.6);

        this.instance_6 = new lib.p34_11();
        this.instance_6.setTransform(107, 47, 0.55, 0.55);

        this.instance_7 = new lib.p34_12();
        this.instance_7.setTransform(155, 39, 0.6, 0.6);

        this.instance_8 = new lib.p34_13();
        this.instance_8.setTransform(198, 43, 0.55, 0.55);

        this.addChild(this.instance_5, this.instance_6, this.instance_7, this.instance_8);

        //row-0 --- col-1

        this.instance_9 = new lib.p34_12();
        this.instance_9.setTransform(275, 34, 0.5, 0.5);

        this.instance_10 = new lib.p34_13();
        this.instance_10.setTransform(300, 50, 0.42, 0.42);
        this.instance_10.rotation = -15;

        this.instance_11 = new lib.p34_12();
        this.instance_11.setTransform(320, 32, 0.57, 0.57);

        this.instance_12 = new lib.p34_11();
        this.instance_12.setTransform(347, 47, 0.55, 0.55);

        this.instance_13 = new lib.p34_10();
        this.instance_13.setTransform(385, 26, 0.55, 0.55);
        this.instance_13.rotation = 25;

        this.instance_14 = new lib.p34_12();
        this.instance_14.setTransform(407, 50, 0.55, 0.55);

        this.instance_15 = new lib.p34_13();
        this.instance_15.setTransform(425, 32, 0.55, 0.55);

        this.instance_16 = new lib.p34_11();
        this.instance_16.setTransform(455, 47, 0.55, 0.55);

        this.addChild(this.instance_9, this.instance_10, this.instance_11, this.instance_12, this.instance_13,
            this.instance_14, this.instance_15, this.instance_16);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 230);

    (lib.Symbol4 = function() {
        this.initialize();

        for (var col = 0; col < 2; col++) {

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#D2E8F0").ss(1).drawRoundRect(0, 0, 218, 200, 12);
            this.Rect1.setTransform(30 + (col * 238), 0);

            this.addChild(this.Rect1);
        }

        var col_X = 0;

        for (var col = 0; col < 2; col++) {
            var horizontalLineContainer = new cjs.Container();

            if (col == 0) {
                col_X = 39;
            } else if (col == 1) {
                col_X = 40;
            }

            for (var lineCount = 0; lineCount < 29; lineCount++) {

                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(0 + (lineCount * 7), 0);

                horizontalLineContainer.addChild(this.hrline_1);
            }

            horizontalLineContainer.setTransform(col_X + (col * 235), 52);
            this.addChild(horizontalLineContainer);
        }

        for (var col = 0; col < 2; col++) {

            var verticalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 20; lineCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(40, 7 + (lineCount * 7));

                verticalLineContainer.addChild(this.vrline_1);
            }
            verticalLineContainer.setTransform(100 + (col * 237), 50);
            this.addChild(verticalLineContainer);
        }

        var col_X = 0;
        for (var col = 0; col < 4; col++) {

            if (col < 2) {
                col_X = 101;
            } else {
                col_X = 128;
            }

            this.Rect2 = new cjs.Shape();
            this.Rect2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 35);
            this.Rect2.setTransform(col_X + (col * 105), 157);

            this.addChild(this.Rect2);
        }

        this.instance_1 = new lib.p34_6();
        this.instance_1.setTransform(40, 62, 0.53, 0.53);

        this.instance_2 = new lib.p34_7();
        this.instance_2.setTransform(195, 62, 0.53, 0.53);

        this.instance_3 = new lib.p34_8();
        this.instance_3.setTransform(278, 62, 0.53, 0.53);

        this.instance_4 = new lib.p34_9();
        this.instance_4.setTransform(437, 62, 0.53, 0.53);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4);

        //row-1 --- col-0

        this.instance_5 = new lib.p34_12();
        this.instance_5.setTransform(43, 25, 0.5, 0.5);

        this.instance_6 = new lib.p34_11();
        this.instance_6.setTransform(84, 10, 0.5, 0.5);
        this.instance_6.rotation = 20;

        this.instance_7 = new lib.p34_13();
        this.instance_7.setTransform(98, 28, 0.57, 0.57);

        this.instance_8 = new lib.p34_14();
        this.instance_8.setTransform(142, 17, 0.55, 0.55);
        this.instance_8.rotation = -15;

        this.instance_9 = new lib.p34_12();
        this.instance_9.setTransform(177, 28, 0.55, 0.55);

        this.instance_10 = new lib.p34_11();
        this.instance_10.setTransform(217, 19, 0.55, 0.55);

        this.addChild(this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9, this.instance_10);

        //row-1 --- col-0

        this.instance_11 = new lib.p34_11();
        this.instance_11.setTransform(283, 8, 0.55, 0.55);
        this.instance_11.rotation = 40;

        this.instance_12 = new lib.p34_10();
        this.instance_12.setTransform(302, 23, 0.55, 0.55);
        this.instance_12.rotation = 20;

        this.instance_13 = new lib.p34_13();
        this.instance_13.setTransform(315, 8, 0.57, 0.57);

        this.instance_14 = new lib.p34_11();
        this.instance_14.setTransform(362, 5, 0.55, 0.55);
        this.instance_14.rotation = 30;

        this.instance_15 = new lib.p34_12();
        this.instance_15.setTransform(348, 30, 0.5, 0.5);

        this.instance_16 = new lib.p34_13();
        this.instance_16.setTransform(390, 10, 0.57, 0.57);

        this.instance_17 = new lib.p34_12();
        this.instance_17.setTransform(382, 34, 0.45, 0.45);

        this.instance_18 = new lib.p34_11();
        this.instance_18.setTransform(432, 7, 0.55, 0.55);

        this.instance_19 = new lib.p34_11();
        this.instance_19.setTransform(417, 25, 0.55, 0.55);

        this.instance_20 = new lib.p34_10();
        this.instance_20.setTransform(457, 25, 0.55, 0.55);

        this.addChild(this.instance_11, this.instance_12, this.instance_13, this.instance_14, this.instance_15, this.instance_16,
            this.instance_17, this.instance_18, this.instance_19, this.instance_20);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 200);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 18, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 185, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(303, 420, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
