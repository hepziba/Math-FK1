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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p62_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p62_1.png",
            id: "p62_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p62_2.png",
            id: "p62_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p62_3.png",
            id: "p62_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p62_4.png",
            id: "p62_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p62_5.png",
            id: "p62_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p62_6.png",
            id: "p62_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p62_7.png",
            id: "p62_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p62_8.png",
            id: "p62_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p62_9.png",
            id: "p62_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/odd_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p62_1 = function() {
        this.initialize(img.p62_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p62_2 = function() {
        this.initialize(img.p62_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p62_3 = function() {
        this.initialize(img.p62_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p62_4 = function() {
        this.initialize(img.p62_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p62_5 = function() {
        this.initialize(img.p62_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p62_6 = function() {
        this.initialize(img.p62_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p62_7 = function() {
        this.initialize(img.p62_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p62_8 = function() {
        this.initialize(img.p62_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p62_9 = function() {
        this.initialize(img.p62_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("62", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Mäta längd", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Hur många klossar lång?", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.instance_1 = new lib.p62_1();
        this.instance_1.setTransform(67, 63, 0.52, 0.52);

        this.instance_2 = new lib.p62_2();
        this.instance_2.setTransform(242, 9, 0.52, 0.52);

        this.instance_3 = new lib.p62_3();
        this.instance_3.setTransform(392, 42, 0.52, 0.52);

        this.addChild(this.instance_1, this.instance_2, this.instance_3);

        this.box_1 = new cjs.Shape();
        this.box_1.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
        this.box_1.setTransform(60, 155);

        this.box_3 = new cjs.Shape();
        this.box_3.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
        this.box_3.setTransform(384, 117);

        this.addChild(this.box_1, this.box_3);

        for (var col = 0; col < 2; col++) {

            this.box_2 = new cjs.Shape();
            this.box_2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
            this.box_2.setTransform(225 + (col * 27), 182);

            this.addChild(this.box_2);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 190);

    (lib.Symbol3 = function() {
        this.initialize();

        this.instance_1 = new lib.p62_4();
        this.instance_1.setTransform(52, 16, 0.52, 0.52);

        this.instance_2 = new lib.p62_5();
        this.instance_2.setTransform(263, 74, 0.52, 0.52);

        this.instance_3 = new lib.p62_6();
        this.instance_3.setTransform(347, 0, 0.52, 0.52);

        this.addChild(this.instance_1, this.instance_2, this.instance_3);

        this.box_1 = new cjs.Shape();
        this.box_1.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
        this.box_1.setTransform(103, 109);

        this.box_2 = new cjs.Shape();
        this.box_2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
        this.box_2.setTransform(260, 125);

        this.box_3 = new cjs.Shape();
        this.box_3.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
        this.box_3.setTransform(388, 88);

        this.addChild(this.box_1, this.box_2, this.box_3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 160);

    (lib.Symbol4 = function() {
        this.initialize();

        this.instance_1 = new lib.p62_7();
        this.instance_1.setTransform(63, 0, 0.52, 0.52);

        this.instance_2 = new lib.p62_8();
        this.instance_2.setTransform(198, 18, 0.52, 0.52);

        this.instance_3 = new lib.p62_9();
        this.instance_3.setTransform(395, -30, 0.52, 0.52);

        this.addChild(this.instance_1, this.instance_2, this.instance_3);

        this.box_1 = new cjs.Shape();
        this.box_1.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
        this.box_1.setTransform(77, 70);

        this.box_2 = new cjs.Shape();
        this.box_2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
        this.box_2.setTransform(242, 108);

        this.box_3 = new cjs.Shape();
        this.box_3.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
        this.box_3.setTransform(390, 109);

        this.addChild(this.box_1, this.box_2, this.box_3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 140);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 57, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 267, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(303, 467, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
