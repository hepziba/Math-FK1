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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p17_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p17_1.png",
            id: "p17_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p17_2.png",
            id: "p17_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p17_3.png",
            id: "p17_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/odd_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p17_1 = function() {
        this.initialize(img.p17_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p17_2 = function() {
        this.initialize(img.p17_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p17_3 = function() {
        this.initialize(img.p17_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("17", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(554, 665);

        this.pageBottomText = new cjs.Text("Begreppet hälften av helhet", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(415, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Rita andra halvan. Måla.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 2; col++) {

                this.roundRect1 = new cjs.Shape();
                this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 220, 246, 12);
                this.roundRect1.setTransform(30 + (col * 240), 18);

                this.addChild(this.roundRect1);
            }
        }

        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 2; col++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#31B1C9").s("#31B1C9").ss(3).moveTo(0, 0).lineTo(0, 237);
                this.vrline_1.setTransform(140 + (col * 240), 23);

                this.addChild(this.vrline_1);
            }
        }

        this.instance_1 = new lib.p17_1();
        this.instance_1.setTransform(72.5, 68, 0.46, 0.46);

        this.instance_2 = new lib.p17_2();
        this.instance_2.setTransform(307.5, 62, 0.53, 0.53);

        this.addChild(this.instance_1, this.instance_2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 285);

    (lib.Symbol3 = function() {
        this.initialize();

        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 2; col++) {

                this.roundRect1 = new cjs.Shape();
                this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 220, 246, 12);
                this.roundRect1.setTransform(30 + (col * 240), 0);

                this.addChild(this.roundRect1);
            }
        }

        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 2; col++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#31B1C9").s("#31B1C9").ss(3).moveTo(0, 0).lineTo(0, 237);
                this.vrline_1.setTransform(140 + (col * 240), 5);

                this.addChild(this.vrline_1);
            }
        }

        this.instance_1 = new lib.p17_3();
        this.instance_1.setTransform(78.5, 59, 0.52, 0.52);

        this.addChild(this.instance_1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 330);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 58, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 371, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
