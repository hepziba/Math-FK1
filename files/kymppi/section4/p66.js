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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p64_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p66_1.png",
            id: "p66_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p66_2.png",
            id: "p66_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p66_3.png",
            id: "p66_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p66_4.png",
            id: "p66_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p66_5.png",
            id: "p66_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p66_6.png",
            id: "p66_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p66_7.png",
            id: "p66_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p66_8.png",
            id: "p66_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/odd_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p66_1 = function() {
        this.initialize(img.p66_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p66_2 = function() {
        this.initialize(img.p66_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p66_3 = function() {
        this.initialize(img.p66_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p66_4 = function() {
        this.initialize(img.p66_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p66_5 = function() {
        this.initialize(img.p66_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p66_6 = function() {
        this.initialize(img.p66_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p66_7 = function() {
        this.initialize(img.p66_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p66_8 = function() {
        this.initialize(img.p66_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("66", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Våra mynt", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.instance_1 = new lib.p66_1();
        this.instance_1.setTransform(42, 14, 0.65, 0.65);

        this.instance_2 = new lib.p66_2();
        this.instance_2.setTransform(107, 10, 0.65, 0.65);

        this.instance_3 = new lib.p66_3();
        this.instance_3.setTransform(178, 10, 0.65, 0.65);

        this.instance_4 = new lib.p66_4();
        this.instance_4.setTransform(332, 0, 0.52, 0.52);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4);

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 84);

        this.text_1 = new cjs.Text("Hur mycket pengar?", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 89);

        this.addChild(this.headerCircle, this.text_1);

        this.instance_5 = new lib.p66_5();
        this.instance_5.setTransform(48, 113, 0.54, 0.54);

        this.instance_6 = new lib.p66_6();
        this.instance_6.setTransform(205, 113, 0.54, 0.54);

        this.instance_7 = new lib.p66_7();
        this.instance_7.setTransform(355, 113, 0.54, 0.54);

        this.addChild(this.instance_5, this.instance_6, this.instance_7);

        for (var col = 0; col < 3; col++) {

            this.box_1 = new cjs.Shape();
            this.box_1.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
            this.box_1.setTransform(75 + (col * 154), 236);

            this.text_2 = new cjs.Text("kr", "40px 'UusiTekstausMajema'");
            this.text_2.setTransform(109 + (col * 154), 266);

            this.addChild(this.box_1, this.text_2);
        }

        // Coins for image-1

        this.instance_8 = new lib.p66_1();
        this.instance_8.setTransform(78, 140, 0.42, 0.42);

        this.instance_9 = new lib.p66_1();
        this.instance_9.setTransform(112, 134, 0.42, 0.42);

        this.instance_10 = new lib.p66_1();
        this.instance_10.setTransform(98, 163, 0.42, 0.42);

        this.instance_11 = new lib.p66_1();
        this.instance_11.setTransform(67, 182, 0.42, 0.42);

        this.instance_12 = new lib.p66_1();
        this.instance_12.setTransform(123, 182, 0.42, 0.42);

        this.addChild(this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12);

        // Coins for image-2

        this.instance_13 = new lib.p66_2();
        this.instance_13.setTransform(248, 158, 0.45, 0.45);

        this.addChild(this.instance_13);

        // Coins for image-3

        this.instance_14 = new lib.p66_2();
        this.instance_14.setTransform(388, 144, 0.45, 0.45);

        this.instance_15 = new lib.p66_1();
        this.instance_15.setTransform(425, 176, 0.43, 0.43);

        this.addChild(this.instance_14, this.instance_15);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 285);

    (lib.Symbol3 = function() {
        this.initialize();

        this.instance_1 = new lib.p66_6();
        this.instance_1.setTransform(48, 0, 0.54, 0.54);

        this.instance_2 = new lib.p66_7();
        this.instance_2.setTransform(203, 0, 0.54, 0.54);

        this.instance_3 = new lib.p66_5();
        this.instance_3.setTransform(355, 0, 0.54, 0.54);

        this.addChild(this.instance_1, this.instance_2, this.instance_3);

        for (var col = 0; col < 3; col++) {

            this.box_1 = new cjs.Shape();
            this.box_1.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
            this.box_1.setTransform(75 + (col * 154), 123);

            this.text_1 = new cjs.Text("kr", "40px 'UusiTekstausMajema'");
            this.text_1.setTransform(109 + (col * 154), 153);

            this.addChild(this.box_1, this.text_1);
        }

        // Coins for image-1

        this.instance_4 = new lib.p66_3();
        this.instance_4.setTransform(92, 45, 0.45, 0.45);

        this.addChild(this.instance_4);

        // Coins for image-2

        this.instance_5 = new lib.p66_1();
        this.instance_5.setTransform(250, 29, 0.43, 0.43);

        this.instance_6 = new lib.p66_3();
        this.instance_6.setTransform(228, 57, 0.43, 0.43);

        this.instance_7 = new lib.p66_1();
        this.instance_7.setTransform(272, 60, 0.43, 0.43);

        this.addChild(this.instance_5, this.instance_6, this.instance_7);

        // Coins for image-3

        this.instance_8 = new lib.p66_3();
        this.instance_8.setTransform(405, 30, 0.43, 0.43);

        this.instance_9 = new lib.p66_2();
        this.instance_9.setTransform(375, 62, 0.43, 0.43);

        this.instance_10 = new lib.p66_1();
        this.instance_10.setTransform(423, 65, 0.43, 0.43);

        this.addChild(this.instance_8, this.instance_9, this.instance_10);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 150);

    (lib.Symbol4 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 47);

        this.text_1 = new cjs.Text("Rita pengar.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 52);

        this.text_2 = new cjs.Text("Skriv hur mycket.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(29, 72);

        this.addChild(this.headerCircle, this.text_1, this.text_2);

        this.instance_1 = new lib.p66_8();
        this.instance_1.setTransform(147, 0, 0.5, 0.48);

        this.addChild(this.instance_1);

        this.box_1 = new cjs.Shape();
        this.box_1.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
        this.box_1.setTransform(390, 72);

        this.text_3 = new cjs.Text("kr", "40px 'UusiTekstausMajema'");
        this.text_3.setTransform(422, 102);

        this.addChild(this.box_1, this.text_3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 120);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 36, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 337, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(303, 515, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
