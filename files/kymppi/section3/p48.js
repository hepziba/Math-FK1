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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p48_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p48_1.png",
            id: "p48_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p48_2.png",
            id: "p48_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p48_3.png",
            id: "p48_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p48_4.png",
            id: "p48_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p48_5.png",
            id: "p48_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p48_6.png",
            id: "p48_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p48_7.png",
            id: "p48_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p48_8.png",
            id: "p48_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p48_9.png",
            id: "p48_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p48_10.png",
            id: "p48_10"     
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/even_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.p48_1 = function() {
        this.initialize(img.p48_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p48_2 = function() {
        this.initialize(img.p48_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p48_3 = function() {
        this.initialize(img.p48_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p48_4 = function() {
        this.initialize(img.p48_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p48_5 = function() {
        this.initialize(img.p48_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p48_6 = function() {
        this.initialize(img.p48_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p48_7 = function() {
        this.initialize(img.p48_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p48_8 = function() {
        this.initialize(img.p48_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p48_9 = function() {
        this.initialize(img.p48_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p48_10 = function() {
        this.initialize(img.p48_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("48", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Jämföra volym", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.instance_1 = new lib.p48_1();
        this.instance_1.setTransform(20, 0, 0.49, 0.49);

        this.addChild(this.instance_1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 210);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Sortera efter volym. Skriv 1, 2 och 3.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 2; col++) {

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#D2E8F0").ss(1).drawRoundRect(0, 0, 218, 160, 12);
                this.Rect1.setTransform(30 + (col * 238), 21 + (row * 177));

                this.addChild(this.Rect1);
            }
        }

        var col_X = 0;
        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 6; col++) {

                if (col < 3) {
                    col_X = 57;
                } else {
                    col_X = 92;
                }

                this.Rect2 = new cjs.Shape();
                this.Rect2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
                this.Rect2.setTransform(col_X + (col * 68), 135 + (row * 177.5));

                this.addChild(this.Rect2);
            }
        }

        //row-1

        this.instance_1 = new lib.p48_2();
        this.instance_1.setTransform(50, 40, 0.52, 0.52);

        this.instance_2 = new lib.p48_3();
        this.instance_2.setTransform(110, 50, 0.43, 0.43);

        this.instance_3 = new lib.p48_4();
        this.instance_3.setTransform(184, 60, 0.47, 0.47);

        this.instance_4 = new lib.p48_5();
        this.instance_4.setTransform(298, 81, 0.52, 0.52);

        this.instance_5 = new lib.p48_6();
        this.instance_5.setTransform(360, 7, 0.45, 0.45);

        this.instance_6 = new lib.p48_7();
        this.instance_6.setTransform(432, 47, 0.42, 0.42);

        //row-2

        this.instance_7 = new lib.p48_8();
        this.instance_7.setTransform(20, 242, 0.42, 0.42);

        this.instance_8 = new lib.p48_3();
        this.instance_8.setTransform(108, 227, 0.43, 0.43);

        this.instance_9 = new lib.p48_5();
        this.instance_9.setTransform(195, 257, 0.52, 0.52);

        this.instance_10 = new lib.p48_4();
        this.instance_10.setTransform(284, 237, 0.47, 0.47);

        this.instance_11 = new lib.p48_9();
        this.instance_11.setTransform(350, 278, 0.45, 0.45);

        this.instance_12 = new lib.p48_10();
        this.instance_12.setTransform(415, 245, 0.52, 0.52);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 375);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 25, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 263, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
