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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p8_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p8_1.png",
            id: "p8_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p8_2.png",
            id: "p8_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p8_3.png",
            id: "p8_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p8_4.png",
            id: "p8_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p8_5.png",
            id: "p8_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p8_6.png",
            id: "p8_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p8_7.png",
            id: "p8_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p8_8.png",
            id: "p8_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p8_9.png",
            id: "p8_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/even_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p8_1 = function() {
        this.initialize(img.p8_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p8_2 = function() {
        this.initialize(img.p8_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p8_3 = function() {
        this.initialize(img.p8_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p8_4 = function() {
        this.initialize(img.p8_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p8_5 = function() {
        this.initialize(img.p8_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p8_6 = function() {
        this.initialize(img.p8_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p8_7 = function() {
        this.initialize(img.p8_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p8_8 = function() {
        this.initialize(img.p8_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p8_9 = function() {
        this.initialize(img.p8_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("8", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Mönster", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.instance_1 = new lib.p8_1();
        this.instance_1.setTransform(18, 0, 0.54, 0.54);

        this.addChild(this.instance_1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 170);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle1 = new cjs.Shape();
        this.headerCircle1.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle1.setTransform(18, 0);

        this.text_1 = new cjs.Text("Fortsätt att måla mönstret.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle1, this.text_1);

        for (var col = 0; col < 5; col++) {
            if (col == 2) {
                this.instance_1 = new lib.p8_3();
                this.instance_1.setTransform(37 + (col * 37), 26, 0.57, 0.57);
            } else {
                this.instance_1 = new lib.p8_2();
                this.instance_1.setTransform(37 + (col * 37), 26, 0.57, 0.57);
            }

            this.addChild(this.instance_1);
        }

        this.instance_2 = new lib.p8_8();
        this.instance_2.setTransform(222, 26, 0.55, 0.55);

        this.addChild(this.instance_2);

        this.headerCircle2 = new cjs.Shape();
        this.headerCircle2.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle2.setTransform(18, 100);

        this.text_2 = new cjs.Text("Måla ett likadant mönster med              .", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(28, 105);

        this.instance_3 = new lib.p8_4();
        this.instance_3.setTransform(246, 79, 0.55, 0.55);

        this.instance_4 = new lib.p8_5();
        this.instance_4.setTransform(276, 79, 0.55, 0.55);

        this.instance_5 = new lib.p8_9();
        this.instance_5.setTransform(35, 126, 0.55, 0.55);

        this.instance_6 = new lib.p8_8();
        this.instance_6.setTransform(222, 126, 0.55, 0.55);

        this.addChild(this.headerCircle2, this.text_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 450, 160);

    (lib.Symbol4 = function() {
        this.initialize();

        this.headerCircle1 = new cjs.Shape();
        this.headerCircle1.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle1.setTransform(18, 0);

        this.text_1 = new cjs.Text("Måla ett likadant mönster med              .", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.instance_1 = new lib.p8_6();
        this.instance_1.setTransform(246, -21, 0.55, 0.55);

        this.instance_2 = new lib.p8_7();
        this.instance_2.setTransform(276, -21, 0.55, 0.55);

        this.instance_3 = new lib.p8_9();
        this.instance_3.setTransform(35, 26, 0.55, 0.55);

        this.instance_4 = new lib.p8_8();
        this.instance_4.setTransform(222, 26, 0.55, 0.55);

        this.addChild(this.headerCircle1, this.text_1, this.instance_1, this.instance_2, this.instance_3, this.instance_4);

        this.headerCircle2 = new cjs.Shape();
        this.headerCircle2.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle2.setTransform(18, 97);

        this.text_2 = new cjs.Text("Måla ett eget mönster.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(28, 102);

        this.instance_5 = new lib.p8_9();
        this.instance_5.setTransform(35, 123, 0.55, 0.55);

        this.instance_6 = new lib.p8_8();
        this.instance_6.setTransform(222, 123, 0.55, 0.55);

        this.addChild(this.headerCircle2, this.text_2, this.instance_5, this.instance_6);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 450, 160);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(312, 45, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(312, 263, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(312, 465, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
