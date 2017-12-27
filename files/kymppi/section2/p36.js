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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p36_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p36_1.png",
            id: "p36_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p36_2.png",
            id: "p36_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p36_3.png",
            id: "p36_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p36_4.png",
            id: "p36_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p36_5.png",
            id: "p36_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p36_6.png",
            id: "p36_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/even_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p36_1 = function() {
        this.initialize(img.p36_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p36_2 = function() {
        this.initialize(img.p36_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p36_3 = function() {
        this.initialize(img.p36_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p36_4 = function() {
        this.initialize(img.p36_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p36_5 = function() {
        this.initialize(img.p36_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p36_6 = function() {
        this.initialize(img.p36_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("36", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tolka enkla koder", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

        for (var lineCount = 0; lineCount < 66; lineCount++) {

            this.hrline_1 = new cjs.Shape();
            this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
            this.hrline_1.setTransform(80 + (lineCount * 7), 302);

            this.addChild(this.hrline_1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle_1 = new cjs.Shape();
        this.headerCircle_1.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle_1.setTransform(19, 0);

        this.text_1 = new cjs.Text("Byt färger så här:", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.headerCircle_2 = new cjs.Shape();
        this.headerCircle_2.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle_2.setTransform(310, 0);

        this.text_2 = new cjs.Text("Måla.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(320, 5);

        this.addChild(this.headerCircle_1, this.text_1, this.headerCircle_2, this.text_2);

        this.instance_1 = new lib.p36_5();
        this.instance_1.setTransform(140, -15, 0.35, 0.35);

        this.addChild(this.instance_1);

        this.Arrow_1 = new cjs.Shape();
        this.Arrow_1.graphics.f("").s("#31B1C9").ss(1.5).moveTo(0, 0).lineTo(12, 0).moveTo(8, -4).lineTo(12, 0).lineTo(8, 4);
        this.Arrow_1.setTransform(182, 3);
        this.Arrow_1.rotation = 45;

        this.Arrow_2 = new cjs.Shape();
        this.Arrow_2.graphics.f("").s("#31B1C9").ss(1.5).moveTo(0, 0).lineTo(-12, 0).moveTo(-8, -4).lineTo(-12, 0).lineTo(-8, 4);
        this.Arrow_2.setTransform(180, 23);

        this.Arrow_3 = new cjs.Shape();
        this.Arrow_3.graphics.f("").s("#31B1C9").ss(1.5).moveTo(0, 0).lineTo(0, -12).moveTo(-4, -8).lineTo(0, -12).lineTo(4, -8);
        this.Arrow_3.setTransform(159, 12);
        this.Arrow_3.rotation = 35;

        this.addChild(this.Arrow_1, this.Arrow_2, this.Arrow_3);

        // var pinkCircleContainer = new cjs.Container();

        // this.PinkCircle_1 = new cjs.Shape();
        // this.PinkCircle_1.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 4.5, 0, 2 * Math.PI);
        // this.PinkCircle_1.setTransform(4, 0);

        // this.PinkCircle_2 = new cjs.Shape();
        // this.PinkCircle_2.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.PinkCircle_2.setTransform(0, 5);

        // this.PinkCircle_3 = new cjs.Shape();
        // this.PinkCircle_3.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.PinkCircle_3.setTransform(7, 6);

        // pinkCircleContainer.addChild(this.PinkCircle_1, this.PinkCircle_2, this.PinkCircle_3);
        // pinkCircleContainer.setTransform(170, -12);

        // var blueCircleContainer = new cjs.Container();

        // this.blueCircle_1 = new cjs.Shape();
        // this.blueCircle_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.blueCircle_1.setTransform(0, 5);

        // this.blueCircle_2 = new cjs.Shape();
        // this.blueCircle_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.blueCircle_2.setTransform(8, 2);

        // this.blueCircle_3 = new cjs.Shape();
        // this.blueCircle_3.graphics.f("#31B1C9").s("#31B1C9").ss(0.7, 0, 0, 4).arc(0, 0, 4.5, 0, 2 * Math.PI);
        // this.blueCircle_3.setTransform(7, 9);

        // blueCircleContainer.addChild(this.blueCircle_1, this.blueCircle_2, this.blueCircle_3);
        // blueCircleContainer.setTransform(193, 17);

        // var yellowCircleContainer = new cjs.Container();

        // this.yellowCircle_1 = new cjs.Shape();
        // this.yellowCircle_1.graphics.f("#FDCF34").s("#FDCF34").ss(0.7, 0, 0, 4).arc(0, 0, 4.5, 0, 2 * Math.PI);
        // this.yellowCircle_1.setTransform(5, 0);

        // this.yellowCircle_2 = new cjs.Shape();
        // this.yellowCircle_2.graphics.f("#FDCF34").s("#FDCF34").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.yellowCircle_2.setTransform(0, 5);

        // this.yellowCircle_3 = new cjs.Shape();
        // this.yellowCircle_3.graphics.f("#FDCF34").s("#FDCF34").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.yellowCircle_3.setTransform(9, 6);

        // this.yellowCircle_4 = new cjs.Shape();
        // this.yellowCircle_4.graphics.f("#FDCF34").s("#FDCF34").ss(0.7, 0, 0, 4).arc(0, 0, 4.5, 0, 2 * Math.PI);
        // this.yellowCircle_4.setTransform(3, 11);

        // yellowCircleContainer.addChild(this.yellowCircle_1, this.yellowCircle_2, this.yellowCircle_3, this.yellowCircle_4);
        // yellowCircleContainer.setTransform(147, 17);

        // this.addChild(pinkCircleContainer, blueCircleContainer, yellowCircleContainer);

        this.instance_2 = new lib.p36_1();
        this.instance_2.setTransform(30, 45, 0.5, 0.5);

        this.instance_3 = new lib.p36_2();
        this.instance_3.setTransform(278, 45, 0.5, 0.5);

        this.addChild(this.instance_2, this.instance_3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 260);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle_1 = new cjs.Shape();
        this.headerCircle_1.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle_1.setTransform(19, 0);

        this.text_1 = new cjs.Text("Byt färger så här:", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.headerCircle_2 = new cjs.Shape();
        this.headerCircle_2.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle_2.setTransform(310, 0);

        this.text_2 = new cjs.Text("Måla.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(320, 5);

        this.addChild(this.headerCircle_1, this.text_1, this.headerCircle_2, this.text_2);

        this.instance_1 = new lib.p36_6();
        this.instance_1.setTransform(157, -7, 0.35, 0.35);

        this.addChild(this.instance_1);

        // right
        this.Arrow_1 = new cjs.Shape();
        this.Arrow_1.graphics.f("").s("#31B1C9").ss(1.5).moveTo(0, 0).lineTo(12, 0).moveTo(8, -4).lineTo(12, 0).lineTo(8, 4);
        this.Arrow_1.setTransform(180, 2);

        // down
        this.Arrow_2 = new cjs.Shape();
        this.Arrow_2.graphics.f("").s("#31B1C9").ss(1.5).moveTo(0, 0).lineTo(0, 12).moveTo(-4, 8).lineTo(0, 12).lineTo(4, 8);
        this.Arrow_2.setTransform(207, 12);

        // left
        this.Arrow_3 = new cjs.Shape();
        this.Arrow_3.graphics.f("").s("#31B1C9").ss(1.5).moveTo(0, 0).lineTo(-12, 0).moveTo(-8, -4).lineTo(-12, 0).lineTo(-8, 4);
        this.Arrow_3.setTransform(192, 35);

        // up 
        this.Arrow_4 = new cjs.Shape();
        this.Arrow_4.graphics.f("").s("#31B1C9").ss(1.5).moveTo(0, 0).lineTo(0, -12).moveTo(-4, -8).lineTo(0, -12).lineTo(4, -8);
        this.Arrow_4.setTransform(167, 25);

        this.addChild(this.Arrow_1, this.Arrow_2, this.Arrow_3, this.Arrow_4);

        // var pinkCircleContainer = new cjs.Container();

        // this.PinkCircle_1 = new cjs.Shape();
        // this.PinkCircle_1.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 4.5, 0, 2 * Math.PI);
        // this.PinkCircle_1.setTransform(4, 1);

        // this.PinkCircle_2 = new cjs.Shape();
        // this.PinkCircle_2.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.PinkCircle_2.setTransform(0, 5);

        // this.PinkCircle_3 = new cjs.Shape();
        // this.PinkCircle_3.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.PinkCircle_3.setTransform(7, 7);

        // pinkCircleContainer.addChild(this.PinkCircle_1, this.PinkCircle_2, this.PinkCircle_3);
        // pinkCircleContainer.setTransform(163.5, -3);

        // var blueCircleContainer = new cjs.Container();

        // this.blueCircle_1 = new cjs.Shape();
        // this.blueCircle_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.blueCircle_1.setTransform(0, 5);

        // this.blueCircle_2 = new cjs.Shape();
        // this.blueCircle_2.graphics.f("#31B1C9").s("#31B1C9").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.blueCircle_2.setTransform(8, 2);

        // this.blueCircle_3 = new cjs.Shape();
        // this.blueCircle_3.graphics.f("#31B1C9").s("#31B1C9").ss(0.7, 0, 0, 4).arc(0, 0, 4.5, 0, 2 * Math.PI);
        // this.blueCircle_3.setTransform(7, 9);

        // blueCircleContainer.addChild(this.blueCircle_1, this.blueCircle_2, this.blueCircle_3);
        // blueCircleContainer.setTransform(203, -4);

        // var yellowCircleContainer = new cjs.Container();

        // this.yellowCircle_1 = new cjs.Shape();
        // this.yellowCircle_1.graphics.f("#FDCF34").s("#FDCF34").ss(0.7, 0, 0, 4).arc(0, 0, 4.5, 0, 2 * Math.PI);
        // this.yellowCircle_1.setTransform(3.5, 0);

        // this.yellowCircle_2 = new cjs.Shape();
        // this.yellowCircle_2.graphics.f("#FDCF34").s("#FDCF34").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.yellowCircle_2.setTransform(0, 6);

        // this.yellowCircle_3 = new cjs.Shape();
        // this.yellowCircle_3.graphics.f("#FDCF34").s("#FDCF34").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.yellowCircle_3.setTransform(8, 6);

        // yellowCircleContainer.addChild(this.yellowCircle_1, this.yellowCircle_2, this.yellowCircle_3);
        // yellowCircleContainer.setTransform(203, 30);

        // var greenCircleContainer = new cjs.Container();

        // this.greenCircle_1 = new cjs.Shape();
        // this.greenCircle_1.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 4.5, 0, 2 * Math.PI);
        // this.greenCircle_1.setTransform(4, 1);

        // this.greenCircle_2 = new cjs.Shape();
        // this.greenCircle_2.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.greenCircle_2.setTransform(0, 5);

        // this.greenCircle_3 = new cjs.Shape();
        // this.greenCircle_3.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 5.5, 0, 2 * Math.PI);
        // this.greenCircle_3.setTransform(8, 5);

        // this.greenCircle_4 = new cjs.Shape();
        // this.greenCircle_4.graphics.f("#33A344").s("#33A344").ss(0.7, 0, 0, 4).arc(0, 0, 5, 0, 2 * Math.PI);
        // this.greenCircle_4.setTransform(4, 9);

        // greenCircleContainer.addChild(this.greenCircle_1, this.greenCircle_2, this.greenCircle_3, this.greenCircle_4);
        // greenCircleContainer.setTransform(164, 31);

        // this.addChild(pinkCircleContainer, blueCircleContainer, yellowCircleContainer, greenCircleContainer);

        this.instance_2 = new lib.p36_3();
        this.instance_2.setTransform(5, 85, 0.5, 0.5);

        this.instance_3 = new lib.p36_4();
        this.instance_3.setTransform(243, 85, 0.5, 0.5);

        this.addChild(this.instance_2, this.instance_3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 310);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 57, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 338, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
