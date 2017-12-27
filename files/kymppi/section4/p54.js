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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_1.png",
            id: "p54_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_2.png",
            id: "p54_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_3.png",
            id: "p54_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_4.png",
            id: "p54_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_5.png",
            id: "p54_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_6.png",
            id: "p54_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_7.png",
            id: "p54_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_8.png",
            id: "p54_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_9.png",
            id: "p54_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_10.png",
            id: "p54_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_11.png",
            id: "p54_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p54_12.png",
            id: "p54_12"
              }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/even_pageS4.png",
            id: "pg_num"
        }]
    };


    (lib.p54_1 = function() {
        this.initialize(img.p54_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p54_2 = function() {
        this.initialize(img.p54_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p54_3 = function() {
        this.initialize(img.p54_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p54_4 = function() {
        this.initialize(img.p54_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p54_5 = function() {
        this.initialize(img.p54_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p54_6 = function() {
        this.initialize(img.p54_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p54_7 = function() {
        this.initialize(img.p54_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p54_8 = function() {
        this.initialize(img.p54_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p54_9 = function() {
        this.initialize(img.p54_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p54_10 = function() {
        this.initialize(img.p54_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p54_11 = function() {
        this.initialize(img.p54_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p54_12 = function() {
        this.initialize(img.p54_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("54", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Antal 1–10", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.instance_2 = new lib.p54_1();
        this.instance_2.setTransform(60, 29, 0.56, 0.56);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText, this.instance_2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.instance_1 = new lib.p54_2();
        this.instance_1.setTransform(30, 0, 0.47, 0.47);

        this.addChild(this.instance_1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 300);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Räkna i bilden. Skriv antalet.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.Rect1 = new cjs.Shape();
        this.Rect1.graphics.f("#ffffff").s("#D2E8F0").ss(1).drawRoundRect(0, 0, 458, 263, 12);
        this.Rect1.setTransform(30, 21);

        this.addChild(this.Rect1);

        for (var lineCount = 0; lineCount < 61; lineCount++) {

            this.hrline_1 = new cjs.Shape();
            this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
            this.hrline_1.setTransform(45 + (lineCount * 7), 152);

            this.addChild(this.hrline_1);
        }

        var col_X = 57;
        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 5; col++) {
                if (row == 1 && col == 3) {
                    continue;
                }

                this.Rect2 = new cjs.Shape();
                this.Rect2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
                this.Rect2.setTransform(col_X + (col * 90), 103 + (row * 131));

                this.addChild(this.Rect2);
            }
        }

        for (var col = 0; col < 2; col++) {
            this.Rect3 = new cjs.Shape();
            this.Rect3.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
            this.Rect3.setTransform(315 + (col * 27), 234);

            this.addChild(this.Rect3);
        }


        //row-1

        this.instance_1 = new lib.p54_3();
        this.instance_1.setTransform(57, 55, 0.55, 0.55);

        this.instance_2 = new lib.p54_4();
        this.instance_2.setTransform(138, 60, 0.55, 0.55);

        this.instance_3 = new lib.p54_5();
        this.instance_3.setTransform(223, 45, 0.5, 0.5);

        this.instance_4 = new lib.p54_6();
        this.instance_4.setTransform(325, 42, 0.55, 0.55);

        this.instance_5 = new lib.p54_7();
        this.instance_5.setTransform(410, 63, 0.6, 0.6);

        //row-2

        this.instance_6 = new lib.p54_8();
        this.instance_6.setTransform(52, 171, 0.54, 0.54);

        this.instance_7 = new lib.p54_9();
        this.instance_7.setTransform(142, 185, 0.54, 0.54);

        this.instance_8 = new lib.p54_10();
        this.instance_8.setTransform(228, 192, 0.55, 0.55);

        this.instance_9 = new lib.p54_11();
        this.instance_9.setTransform(327, 185, 0.54, 0.54);

        this.instance_10 = new lib.p54_12();
        this.instance_10.setTransform(409, 194, 0.55, 0.55);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8, this.instance_9, this.instance_10);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 300);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 19, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 333, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
