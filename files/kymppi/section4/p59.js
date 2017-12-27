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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p57_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p59_1.png",
            id: "p59_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p59_2.png",
            id: "p59_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/dummy.png",
            id: "p59_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/odd_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p59_1 = function() {
        this.initialize(img.p59_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p59_2 = function() {
        this.initialize(img.p59_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p59_3 = function() {
        this.initialize(img.p59_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("59", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Klockan", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(492, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Skriv siffror på klockan.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.text_2 = new cjs.Text("Rita den lilla visaren.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(29, 24);

        this.addChild(this.headerCircle, this.text_1, this.text_2);

        this.instance_1 = new lib.p59_1();
        this.instance_1.setTransform(335, -25, 0.42, 0.42);

        this.instance_2 = new lib.p59_2();
        this.instance_2.setTransform(45, 57, 0.532, 0.532);

        this.addChild(this.instance_1, this.instance_2);

        this.box_1 = new cjs.Shape();
        this.box_1.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
        this.box_1.setTransform(324, 102);

        this.box_2 = new cjs.Shape();
        this.box_2.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
        this.box_2.setTransform(390, 164);

        this.box_3 = new cjs.Shape();
        this.box_3.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
        this.box_3.setTransform(416, 244);

        this.box_4 = new cjs.Shape();
        this.box_4.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
        this.box_4.setTransform(390, 333);

        this.box_5 = new cjs.Shape();
        this.box_5.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
        this.box_5.setTransform(325, 396);

        this.box_6 = new cjs.Shape();
        this.box_6.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
        this.box_6.setTransform(240, 422);

        this.box_7 = new cjs.Shape();
        this.box_7.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
        this.box_7.setTransform(152, 396);

        this.box_8 = new cjs.Shape();
        this.box_8.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
        this.box_8.setTransform(88, 333);

        this.box_9 = new cjs.Shape();
        this.box_9.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
        this.box_9.setTransform(63, 244);

        this.addChild(this.box_1, this.box_2, this.box_3, this.box_4, this.box_5, this.box_6, this.box_7, this.box_8, this.box_9);

        for (var col = 0; col < 2; col++) {

            this.box_10 = new cjs.Shape();
            this.box_10.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
            this.box_10.setTransform(89 + (col * 25), 164);

            this.addChild(this.box_10);
        }

        for (var col = 0; col < 2; col++) {

            this.box_11 = new cjs.Shape();
            this.box_11.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
            this.box_11.setTransform(153 + (col * 25), 102);

            this.addChild(this.box_11);
        }

        for (var col = 0; col < 2; col++) {

            this.box_12 = new cjs.Shape();
            this.box_12.graphics.f("").s("#97CDD9").ss(1).drawRect(0, 0, 25, 33);
            this.box_12.setTransform(227 + (col * 25), 77);

            this.addChild(this.box_12);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 550);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 23);

        this.text_1 = new cjs.Text("Vad är din klocka?", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 28);

        this.addChild(this.headerCircle, this.text_1);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 124, 47, 12);
        this.roundRect1.setTransform(167, 0);

        this.addChild(this.roundRect1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 50);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 58, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 567, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
