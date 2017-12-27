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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p19_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_1.png",
            id: "p47_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_2.png",
            id: "p47_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_3.png",
            id: "p47_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_4.png",
            id: "p47_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_5.png",
            id: "p47_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_6.png",
            id: "p47_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_7.png",
            id: "p47_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_8.png",
            id: "p47_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_9.png",
            id: "p47_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_10.png",
            id: "p47_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_11.png",
            id: "p47_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_12.png",
            id: "p47_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_13.png",
            id: "p47_13"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_14.png",
            id: "p47_14"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_15.png",
            id: "p47_15"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p47_16.png",
            id: "p47_16"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/odd_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.p47_1 = function() {
        this.initialize(img.p47_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p47_2 = function() {
        this.initialize(img.p47_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p47_3 = function() {
        this.initialize(img.p47_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p47_4 = function() {
        this.initialize(img.p47_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p47_5 = function() {
        this.initialize(img.p47_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p47_6 = function() {
        this.initialize(img.p47_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p47_7 = function() {
        this.initialize(img.p47_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p47_8 = function() {
        this.initialize(img.p47_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p47_9 = function() {
        this.initialize(img.p47_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p47_10 = function() {
        this.initialize(img.p47_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p47_11 = function() {
        this.initialize(img.p47_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p47_12 = function() {
        this.initialize(img.p47_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p47_13 = function() {
        this.initialize(img.p47_13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p47_14 = function() {
        this.initialize(img.p47_14);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p47_15 = function() {
        this.initialize(img.p47_15);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p47_16 = function() {
        this.initialize(img.p47_16);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("47", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Ordningstal", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(475, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Skriv i vilken vagn de sitter.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.instance_1 = new lib.p47_1();
        this.instance_1.setTransform(30, 7, 0.565, 0.55);

        this.addChild(this.instance_1);

        this.instance_2 = new lib.p47_2();
        this.instance_2.setTransform(7, 202, 0.55, 0.55);

        this.instance_3 = new lib.p47_3();
        this.instance_3.setTransform(72, 194, 0.52, 0.52);

        this.instance_4 = new lib.p47_4();
        this.instance_4.setTransform(125, 202, 0.52, 0.52);

        this.instance_5 = new lib.p47_5();
        this.instance_5.setTransform(168, 205, 0.52, 0.52);

        this.instance_6 = new lib.p47_6();
        this.instance_6.setTransform(219, 203, 0.52, 0.52);

        this.instance_7 = new lib.p47_7();
        this.instance_7.setTransform(265, 198, 0.55, 0.55);

        this.instance_8 = new lib.p47_8();
        this.instance_8.setTransform(300, 198, 0.55, 0.55);

        this.instance_9 = new lib.p47_9();
        this.instance_9.setTransform(355, 198, 0.55, 0.55);

        this.instance_10 = new lib.p47_10();
        this.instance_10.setTransform(403, 196, 0.55, 0.55);

        this.instance_11 = new lib.p47_11();
        this.instance_11.setTransform(432, 172, 0.55, 0.55);

        this.addChild(this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8, this.instance_9, this.instance_10, this.instance_11);

        for (var col = 0; col < 10; col++) {

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
            this.Rect1.setTransform(30 + (col * 47), 241);

            this.addChild(this.Rect1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 305);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Måla vagnarna.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 222, 12);
        this.roundRect1.setTransform(30, 20);

        this.addChild(this.roundRect1);

        this.instance_1 = new lib.p47_1();
        this.instance_1.setTransform(38, 68, 0.57, 0.555);

        this.addChild(this.instance_1);

        var horizontalLineContainer = new cjs.Container();

        for (var lineCount = 0; lineCount < 63; lineCount++) {

            this.hrline_1 = new cjs.Shape();
            this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
            this.hrline_1.setTransform(0 + (lineCount * 7), 0);

            horizontalLineContainer.addChild(this.hrline_1);
        }
        horizontalLineContainer.setTransform(40, 63);
        this.addChild(horizontalLineContainer);

        var splText = ['2:a', '4:e', '1:a', '9:e', '6:e'];
        var count = 0;

        for (var col = 0; col < 5; col++) {
            var fillText = splText[count];
            count = count + 1;

            this.text_2 = new cjs.Text('' + fillText, "21px 'ElisarDTInfant-SemiBold'");
            this.text_2.setTransform(70 + (col * 94), 48);

            this.addChild(this.text_2);
        }

        this.instance_2 = new lib.p47_12();
        this.instance_2.setTransform(45, 34, 0.6, 0.6);

        this.instance_3 = new lib.p47_13();
        this.instance_3.setTransform(138, 32, 0.58, 0.58);

        this.instance_4 = new lib.p47_14();
        this.instance_4.setTransform(232, 32, 0.57, 0.57);

        this.instance_5 = new lib.p47_15();
        this.instance_5.setTransform(326, 32, 0.57, 0.57);

        this.instance_6 = new lib.p47_16();
        this.instance_6.setTransform(423, 32, 0.57, 0.57);

        this.addChild(this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 270);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 56, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 372, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
