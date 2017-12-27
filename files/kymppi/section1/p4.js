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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p6_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p4_1.png",
            id: "p4_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p4_11.png",
            id: "p4_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p4_2.png",
            id: "p4_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p4_3.png",
            id: "p4_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p4_4.png",
            id: "p4_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p4_5.png",
            id: "p4_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p4_6.png",
            id: "p4_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p4_7.png",
            id: "p4_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/even_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p4_1 = function() {
        this.initialize(img.p4_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p4_11 = function() {
        this.initialize(img.p4_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p4_2 = function() {
        this.initialize(img.p4_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p4_3 = function() {
        this.initialize(img.p4_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p4_4 = function() {
        this.initialize(img.p4_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p4_5 = function() {
        this.initialize(img.p4_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p4_6 = function() {
        this.initialize(img.p4_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p4_7 = function() {
        this.initialize(img.p4_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.p4_1();
        this.instance_1.setTransform(70.5, 22.5, 0.47, 0.47);

        this.instance_2 = new lib.pg_num();
        this.instance_2.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("4", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Antal 1–5", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.instance_2, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.instance_2 = new lib.p4_11();
        this.instance_2.setTransform(20, 18, 0.47, 0.47);

        this.addChild(this.instance_2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 340);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(36, 0);

        this.text_2 = new cjs.Text("Räkna i bilden. Måla lika många cirklar.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(46, 5);

        this.instance_1 = new lib.p4_2();
        this.instance_1.setTransform(36, 22, 0.52, 0.52);

        this.instance_2 = new lib.p4_3();
        this.instance_2.setTransform(285, 28, 0.52, 0.52);

        this.instance_3 = new lib.p4_4();
        this.instance_3.setTransform(32, 110, 0.52, 0.52);

        this.instance_4 = new lib.p4_5();
        this.instance_4.setTransform(263, 92, 0.47, 0.47);

        this.instance_5 = new lib.p4_6();
        this.instance_5.setTransform(11, 192, 0.52, 0.52);

        this.instance_6 = new lib.p4_7();
        this.instance_6.setTransform(269, 192, 0.52, 0.52);

        this.addChild(this.headerCircle, this.text_2, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5,
            this.instance_6);
        var col_X = 0;
        var row_X = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 10; col++) {

                if (col < 5) {
                    col_X = 105;
                } else {
                    col_X = 192;
                }
                if (row == 2) {
                    row_X = 53;
                } else {
                    row_X = 48;
                }
                this.circleShape_1 = new cjs.Shape();
                this.circleShape_1.graphics.f("#ffffff").s("#42AFC2").ss(1, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
                this.circleShape_1.setTransform(col_X + (col * 30), row_X + (row * 80));

                this.addChild(this.circleShape_1);
            }
        }

        var verticalLineContainer = new cjs.Container();
        for (var lineCount = 0; lineCount < 42; lineCount++) {

            this.vrline_1 = new cjs.Shape();
            this.vrline_1.graphics.f("#BBDEE6").s("#BBDEE6").ss(1).moveTo(0, 0).lineTo(0, 4.5);
            this.vrline_1.setTransform(248, 20 + (lineCount * 5.5));

            verticalLineContainer.addChild(this.vrline_1);
        }
        this.addChild(verticalLineContainer);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 265);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 0, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 367, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
