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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p19_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_1.png",
            id: "p27_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_2.png",
            id: "p27_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_3.png",
            id: "p27_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_4.png",
            id: "p27_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_5.png",
            id: "p27_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_6.png",
            id: "p27_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_7.png",
            id: "p27_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_8.png",
            id: "p27_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_9.png",
            id: "p27_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_10.png",
            id: "p27_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_11.png",
            id: "p27_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_12.png",
            id: "p27_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_13.png",
            id: "p27_13"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_14.png",
            id: "p27_14"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_15.png",
            id: "p27_15"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_16.png",
            id: "p27_16"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_17.png",
            id: "p27_17"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_18.png",
            id: "p27_18"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_19.png",
            id: "p27_19"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_20.png",
            id: "p27_20"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_21.png",
            id: "p27_21"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_22.png",
            id: "p27_22"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_23.png",
            id: "p27_23"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p27_24.png",
            id: "p27_24"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/odd_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p27_1 = function() {
        this.initialize(img.p27_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_2 = function() {
        this.initialize(img.p27_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_3 = function() {
        this.initialize(img.p27_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_4 = function() {
        this.initialize(img.p27_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_5 = function() {
        this.initialize(img.p27_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_6 = function() {
        this.initialize(img.p27_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_7 = function() {
        this.initialize(img.p27_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_8 = function() {
        this.initialize(img.p27_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_9 = function() {
        this.initialize(img.p27_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_10 = function() {
        this.initialize(img.p27_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_11 = function() {
        this.initialize(img.p27_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_12 = function() {
        this.initialize(img.p27_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_13 = function() {
        this.initialize(img.p27_13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_14 = function() {
        this.initialize(img.p27_14);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_15 = function() {
        this.initialize(img.p27_15);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_16 = function() {
        this.initialize(img.p27_16);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_17 = function() {
        this.initialize(img.p27_17);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_18 = function() {
        this.initialize(img.p27_18);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_19 = function() {
        this.initialize(img.p27_19);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_20 = function() {
        this.initialize(img.p27_20);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_21 = function() {
        this.initialize(img.p27_21);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_22 = function() {
        this.initialize(img.p27_22);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_23 = function() {
        this.initialize(img.p27_23);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p27_24 = function() {
        this.initialize(img.p27_24);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("27", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Geometriska kroppar", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(439, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 14);

        this.text_1 = new cjs.Text("Ringa in de kroppar som hör ihop, med samma färg.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 19);

        this.instance_1 = new lib.p27_1();
        this.instance_1.setTransform(390, 0, 0.47, 0.47);

        this.instance_2 = new lib.p27_2();
        this.instance_2.setTransform(415, 0, 0.47, 0.47);

        this.instance_3 = new lib.p27_3();
        this.instance_3.setTransform(440, 0, 0.47, 0.5);

        this.instance_4 = new lib.p27_4();
        this.instance_4.setTransform(465, 0, 0.47, 0.47);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 295, 12);
        this.roundRect1.setTransform(30, 34);

        this.addChild(this.headerCircle, this.text_1, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.roundRect1);

        //row-1
        this.instance_5 = new lib.p27_5();
        this.instance_5.setTransform(70, 74, 0.5, 0.5);

        this.instance_6 = new lib.p27_6();
        this.instance_6.setTransform(155, 62, 0.5, 0.5);

        this.instance_7 = new lib.p27_7();
        this.instance_7.setTransform(235, 59, 0.47, 0.47);

        this.instance_8 = new lib.p27_8();
        this.instance_8.setTransform(320, 51, 0.5, 0.5);

        this.instance_9 = new lib.p27_9();
        this.instance_9.setTransform(380, 59, 0.5, 0.5);

        //row-2

        this.instance_10 = new lib.p27_10();
        this.instance_10.setTransform(75, 159, 0.55, 0.55);

        this.instance_11 = new lib.p27_11();
        this.instance_11.setTransform(140, 152, 0.5, 0.5);

        this.instance_12 = new lib.p27_12();
        this.instance_12.setTransform(223, 144, 0.5, 0.5);

        this.instance_13 = new lib.p27_13();
        this.instance_13.setTransform(295, 136, 0.47, 0.47);

        this.instance_14 = new lib.p27_14();
        this.instance_14.setTransform(380, 184, 0.5, 0.5);

        this.instance_15 = new lib.p27_15();
        this.instance_15.setTransform(415, 139, 0.5, 0.5);

        //row-3

        this.instance_16 = new lib.p27_16();
        this.instance_16.setTransform(67, 219, 0.47, 0.47);

        this.instance_17 = new lib.p27_17();
        this.instance_17.setTransform(130, 252, 0.5, 0.5);

        this.instance_18 = new lib.p27_18();
        this.instance_18.setTransform(227, 256, 0.5, 0.5);

        this.instance_19 = new lib.p27_19();
        this.instance_19.setTransform(305, 231, 0.5, 0.5);

        this.instance_20 = new lib.p27_20();
        this.instance_20.setTransform(403, 229, 0.5, 0.5);

        this.addChild(this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9, this.instance_10,
            this.instance_11, this.instance_12, this.instance_13, this.instance_14, this.instance_15, this.instance_16, this.instance_17,
            this.instance_18, this.instance_19, this.instance_20);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 515, 440);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Räkna i bilden. Måla lika många rutor.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var row = 0; row < 3; row++) {
            this.bgRect1 = new cjs.Shape();
            this.bgRect1.graphics.f("#DFEDF5").s("#DFEDF5").ss(1).drawRect(0, 0, 355, 25);
            this.bgRect1.setTransform(48, 21 + (row * 50));

            this.addChild(this.bgRect1);
        }

        var Text_X = 80;
        for (var row = 0; row < 6; row++) {

            if (row == 5) {
                Text_X = 78;
            } else {
                Text_X = 80;
            }
            var fillDigit = row + 1;

            this.text_2 = new cjs.Text('' + fillDigit, "18px 'ElisarDTInfant-Bold'", "#12A537");
            this.text_2.setTransform(Text_X, 165 + (row * (-25.3)));

            this.addChild(this.text_2);

            for (var col = 0; col < 4; col++) {

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#31B1C9").ss(0.7).drawRect(0, 0, 27, 25);
                this.Rect1.setTransform(115 + (col * 96), 21 + (row * 25));

                this.addChild(this.Rect1);
            }
        }

        this.hrLine1 = new cjs.Shape();
        this.hrLine1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(412, 0);
        this.hrLine1.setTransform(48, 171);

        this.instance_1 = new lib.p27_21();
        this.instance_1.setTransform(118, 187, 0.7, 0.7);

        this.instance_2 = new lib.p27_22();
        this.instance_2.setTransform(212, 186, 0.65, 0.65);

        this.instance_3 = new lib.p27_23();
        this.instance_3.setTransform(310, 178, 0.65, 0.65);

        this.instance_4 = new lib.p27_24();
        this.instance_4.setTransform(407, 177, 0.65, 0.65);

        this.addChild(this.hrLine1, this.instance_1, this.instance_2, this.instance_3, this.instance_4);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 200);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 43, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 409, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
