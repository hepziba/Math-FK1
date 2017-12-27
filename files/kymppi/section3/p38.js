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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p38_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p38_1.png",
            id: "p38_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p38_2.png",
            id: "p38_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p38_3.png",
            id: "p38_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p38_4.png",
            id: "p38_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p38_5.png",
            id: "p38_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p38_6.png",
            id: "p38_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p38_7.png",
            id: "p38_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p38_8.png",
            id: "p38_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p38_9.png",
            id: "p38_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/even_pageS3.png",
            id: "pg_num"
        }]
    };

    // https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/

    (lib.p38_1 = function() {
        this.initialize(img.p38_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p38_2 = function() {
        this.initialize(img.p38_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p38_3 = function() {
        this.initialize(img.p38_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p38_4 = function() {
        this.initialize(img.p38_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p38_5 = function() {
        this.initialize(img.p38_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p38_6 = function() {
        this.initialize(img.p38_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p38_7 = function() {
        this.initialize(img.p38_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p38_8 = function() {
        this.initialize(img.p38_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p38_9 = function() {
        this.initialize(img.p38_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("38", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Antal 1–9", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.instance_2 = new lib.p38_1();
        this.instance_2.setTransform(60, 27, 0.55, 0.55);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText, this.instance_2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.instance_1 = new lib.p38_2();
        this.instance_1.setTransform(40, 0, 0.47, 0.45);

        this.addChild(this.instance_1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 515, 160);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Räkna i bilden. Måla lika många rutor. Skriv antalet.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.addChild(this.headerCircle, this.text_1);

        var Text_X = 0;
        for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 7; col++) {
                if (row == 8 && col == 6) {
                    Text_X = 26.5;
                } else {
                    Text_X = 28;
                }

                var fillDigit = row + 1;

                this.text_2 = new cjs.Text('' + fillDigit, "14px 'ElisarDTInfant-Bold'", "#3BCCEB");
                this.text_2.setTransform(Text_X + (col * 69), 258 + (row * (-25)));

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#31B1C9").ss(0.7).drawRect(0, 0, 27, 25);
                this.Rect1.setTransform(42 + (col * 69), 42 + (row * 25));

                this.addChild(this.text_2, this.Rect1);
            }
        }

        this.hrLine1 = new cjs.Shape();
        this.hrLine1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(455, 0);
        this.hrLine1.setTransform(29, 266.5);

        this.instance_1 = new lib.p38_3();
        this.instance_1.setTransform(40, 283, 0.55, 0.55);

        this.instance_2 = new lib.p38_4();
        this.instance_2.setTransform(98, 292, 0.55, 0.55);

        this.instance_3 = new lib.p38_5();
        this.instance_3.setTransform(178, 295, 0.55, 0.55);

        this.instance_4 = new lib.p38_6();
        this.instance_4.setTransform(252, 299, 0.55, 0.55);

        this.instance_5 = new lib.p38_7();
        this.instance_5.setTransform(312, 283, 0.65, 0.65);

        this.instance_6 = new lib.p38_8();
        this.instance_6.setTransform(380, 281, 0.65, 0.65);

        this.instance_7 = new lib.p38_9();
        this.instance_7.setTransform(452, 275, 0.5, 0.5);

        this.addChild(this.hrLine1, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5,
            this.instance_6, this.instance_7);

        for (var col = 0; col < 7; col++) {

            this.hrline_2 = new cjs.Shape();
            this.hrline_2.graphics.f("#71C1D4").s("#71C1D4").ss(0.7).moveTo(0, 0).lineTo(42, 0);
            this.hrline_2.setTransform(32 + (col * 70), 345);

            this.addChild(this.hrline_2);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 375);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 25, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 270, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
