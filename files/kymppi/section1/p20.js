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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_1.png",
            id: "p20_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_2.png",
            id: "p20_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_3.png",
            id: "p20_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_4.png",
            id: "p20_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_5.png",
            id: "p20_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_6.png",
            id: "p20_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_7.png",
            id: "p20_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_8.png",
            id: "p20_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_9.png",
            id: "p20_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_10.png",
            id: "p20_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_11.png",
            id: "p20_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_12.png",
            id: "p20_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_13.png",
            id: "p20_13"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_14.png",
            id: "p20_14"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_15.png",
            id: "p20_15"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_16.png",
            id: "p20_16"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p20_17.png",
            id: "p20_17"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/even_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p20_1 = function() {
        this.initialize(img.p20_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p20_2 = function() {
        this.initialize(img.p20_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p20_3 = function() {
        this.initialize(img.p20_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p20_4 = function() {
        this.initialize(img.p20_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p20_5 = function() {
        this.initialize(img.p20_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p20_6 = function() {
        this.initialize(img.p20_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p20_7 = function() {
        this.initialize(img.p20_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p20_8 = function() {
        this.initialize(img.p20_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p20_9 = function() {
        this.initialize(img.p20_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p20_10 = function() {
        this.initialize(img.p20_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p20_11 = function() {
        this.initialize(img.p20_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p20_12 = function() {
        this.initialize(img.p20_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p20_13 = function() {
        this.initialize(img.p20_13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p20_14 = function() {
        this.initialize(img.p20_14);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p20_15 = function() {
        this.initialize(img.p20_15);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p20_16 = function() {
        this.initialize(img.p20_16);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p20_17 = function() {
        this.initialize(img.p20_17);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("20", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tolka enkla koder", "9.5px 'ElisarDTInfant-SemiBold'");
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

        this.text_1 = new cjs.Text("Dra streck mellan bilderna så som koden visar.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(0.8).drawRoundRect(0, 0, 458, 60, 12);
        this.roundRect1.setTransform(33, 20);

        this.addChild(this.headerCircle, this.text_1, this.roundRect1);

        this.instance_1 = new lib.p20_1();
        this.instance_1.setTransform(45, 190, 0.53, 0.53);

        this.instance_2 = new lib.p20_2();
        this.instance_2.setTransform(40, 50, 0.47, 0.47);
        this.instance_2.rotation = -40;

        this.instance_3 = new lib.p20_3();
        this.instance_3.setTransform(118, 35, 0.5, 0.5);

        this.instance_4 = new lib.p20_4();
        this.instance_4.setTransform(180, 30, 0.47, 0.47);

        this.instance_5 = new lib.p20_5();
        this.instance_5.setTransform(252, 35, 0.5, 0.5);

        this.instance_6 = new lib.p20_6();
        this.instance_6.setTransform(322, 38, 0.5, 0.5);

        this.instance_7 = new lib.p20_7();
        this.instance_7.setTransform(392, 30, 0.47, 0.47);

        this.instance_8 = new lib.p20_2();
        this.instance_8.setTransform(438, 50, 0.47, 0.47);
        this.instance_8.rotation = -40;

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8);

        for (var i = 0; i < 6; i++) {
            this.Arrow1 = new cjs.Shape();
            this.Arrow1.graphics.f("#ffffff").s("#14B5C9").ss(1.5).moveTo(0, 0).lineTo(15, 0).moveTo(10, 4).lineTo(15, 0).lineTo(10, -4);
            this.Arrow1.setTransform(88 + (i * 68), 50);

            this.addChild(this.Arrow1);
        }

        //circle-1
        this.circleShape_1 = new cjs.Shape();
        this.circleShape_1.graphics.f("#ffffff").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 72, 0, 2 * Math.PI);
        this.circleShape_1.setTransform(265, 198);

        this.circlePoint_1 = new cjs.Shape();
        this.circlePoint_1.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_1.setTransform(193, 198);

        this.circlePoint_2 = new cjs.Shape();
        this.circlePoint_2.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_2.setTransform(337, 198);

        this.circlePoint_3 = new cjs.Shape();
        this.circlePoint_3.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_3.setTransform(265, 126);

        this.circlePoint_4 = new cjs.Shape();
        this.circlePoint_4.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_4.setTransform(265, 270);

        this.circlePoint_5 = new cjs.Shape();
        this.circlePoint_5.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_5.setTransform(214, 147);

        this.circlePoint_6 = new cjs.Shape();
        this.circlePoint_6.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_6.setTransform(316, 147);

        this.circlePoint_7 = new cjs.Shape();
        this.circlePoint_7.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_7.setTransform(214, 249);

        this.circlePoint_8 = new cjs.Shape();
        this.circlePoint_8.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_8.setTransform(316, 249);

        this.addChild(this.circleShape_1, this.circlePoint_1, this.circlePoint_2, this.circlePoint_3, this.circlePoint_4, this.circlePoint_5,
            this.circlePoint_6, this.circlePoint_7, this.circlePoint_8);

        this.instance_9 = new lib.p20_2();
        this.instance_9.setTransform(248, 91, 0.47, 0.47);

        this.instance_10 = new lib.p20_7();
        this.instance_10.setTransform(322, 115, 0.47, 0.47);

        this.instance_11 = new lib.p20_9();
        this.instance_11.setTransform(345, 180, 0.4, 0.4);

        this.instance_12 = new lib.p20_6();
        this.instance_12.setTransform(318, 243, 0.5, 0.5);

        this.instance_13 = new lib.p20_5();
        this.instance_13.setTransform(250, 277, 0.47, 0.47);

        this.instance_14 = new lib.p20_4();
        this.instance_14.setTransform(180, 252, 0.47, 0.47);

        this.instance_15 = new lib.p20_8();
        this.instance_15.setTransform(155, 197, 0.5, 0.5);
        this.instance_15.rotation = -35

        this.instance_16 = new lib.p20_3();
        this.instance_16.setTransform(183, 122, 0.5, 0.5);

        this.addChild(this.instance_9, this.instance_10, this.instance_11, this.instance_12, this.instance_13, this.instance_14,
            this.instance_15, this.instance_16);

        var dot_X = 260,
            dot_Y = 128;
        for (var col = 0; col < 9; col++) {

            this.dottedLine_1 = new cjs.Shape();
            this.dottedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3.5, -1);
            this.dottedLine_1.setTransform(dot_X, dot_Y);

            this.addChild(this.dottedLine_1);
            dot_X = dot_X - 5.5;
            dot_Y = dot_Y + 2.4;
        }

        for (var col = 0; col < 61; col++) {

            this.hrline_1 = new cjs.Shape();
            this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
            this.hrline_1.setTransform(45 + (col * 7), 318);

            this.addChild(this.hrline_1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 350);

    (lib.Symbol3 = function() {
        this.initialize();

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(0.8).drawRoundRect(0, 0, 75, 240, 12);
        this.roundRect1.setTransform(33, 0);

        this.roundRect2 = new cjs.Shape();
        this.roundRect2.graphics.f("#ffffff").s("#C2E2EA").ss(0.8).drawRoundRect(0, 0, 75, 240, 12);
        this.roundRect2.setTransform(416, 0);

        //circle-1       

        this.circleShape_1 = new cjs.Shape();
        this.circleShape_1.graphics.f("#ffffff").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 72, 0, 2 * Math.PI);
        this.circleShape_1.setTransform(265, 120);

        this.circlePoint_1 = new cjs.Shape();
        this.circlePoint_1.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_1.setTransform(265, 48);

        this.circlePoint_2 = new cjs.Shape();
        this.circlePoint_2.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_2.setTransform(265, 192);

        this.circlePoint_3 = new cjs.Shape();
        this.circlePoint_3.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_3.setTransform(203, 84);

        this.circlePoint_4 = new cjs.Shape();
        this.circlePoint_4.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_4.setTransform(327, 84);

        this.circlePoint_5 = new cjs.Shape();
        this.circlePoint_5.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_5.setTransform(203, 156);

        this.circlePoint_6 = new cjs.Shape();
        this.circlePoint_6.graphics.f("#14B5C9").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
        this.circlePoint_6.setTransform(327, 156);

        this.addChild(this.roundRect1, this.roundRect2, this.circleShape_1, this.circlePoint_1, this.circlePoint_2, this.circlePoint_3,
            this.circlePoint_4, this.circlePoint_5, this.circlePoint_6);

        this.instance_1 = new lib.p20_10();
        this.instance_1.setTransform(60, 25, 0.52, 0.52);

        this.instance_2 = new lib.p20_11();
        this.instance_2.setTransform(60, 80, 0.52, 0.52);

        this.instance_3 = new lib.p20_16();
        this.instance_3.setTransform(58, 140, 0.55, 0.55);
        this.instance_3.rotation = -10;

        this.instance_4 = new lib.p20_10();
        this.instance_4.setTransform(60, 202, 0.52, 0.52);

        this.instance_5 = new lib.p20_10();
        this.instance_5.setTransform(250, 15, 0.52, 0.52);

        this.instance_6 = new lib.p20_14();
        this.instance_6.setTransform(335, 60, 0.52, 0.52);

        this.instance_7 = new lib.p20_12();
        this.instance_7.setTransform(332, 143, 0.55, 0.55);

        this.instance_8 = new lib.p20_15();
        this.instance_8.setTransform(250, 205, 0.52, 0.52);

        this.instance_9 = new lib.p20_11();
        this.instance_9.setTransform(175, 153, 0.52, 0.52);

        this.instance_10 = new lib.p20_17();
        this.instance_10.setTransform(160, 61, 0.52, 0.52);

        this.instance_11 = new lib.p20_13();
        this.instance_11.setTransform(433, 23, 0.52, 0.52);

        this.instance_12 = new lib.p20_14();
        this.instance_12.setTransform(432, 90, 0.52, 0.52);
        this.instance_12.rotation = -40;

        this.instance_13 = new lib.p20_15();
        this.instance_13.setTransform(442, 140, 0.52, 0.52);

        this.instance_14 = new lib.p20_13();
        this.instance_14.setTransform(433, 200, 0.52, 0.52);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12, this.instance_13, this.instance_14);

        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 2; col++) {
                this.Arrow1 = new cjs.Shape();
                this.Arrow1.graphics.f("#ffffff").s("#14B5C9").ss(1.5).moveTo(0, 0).lineTo(0, 15).moveTo(-5, 10).lineTo(0, 15).lineTo(5, 10);
                this.Arrow1.setTransform(70 + (col * 385), 55 + (row * 62));

                this.addChild(this.Arrow1);
            }
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 515, 330);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 57, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 392, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
