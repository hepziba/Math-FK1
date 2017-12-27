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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p22_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p22_1.png",
            id: "p22_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p22_2.png",
            id: "p22_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p22_3.png",
            id: "p22_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p22_4.png",
            id: "p22_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p22_5.png",
            id: "p22_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p22_6.png",
            id: "p22_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p22_7.png",
            id: "p22_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p22_8.png",
            id: "p22_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p22_9.png",
            id: "p22_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p22_10.png",
            id: "p22_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/even_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p22_1 = function() {
        this.initialize(img.p22_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p22_2 = function() {
        this.initialize(img.p22_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p22_3 = function() {
        this.initialize(img.p22_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p22_4 = function() {
        this.initialize(img.p22_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p22_5 = function() {
        this.initialize(img.p22_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p22_6 = function() {
        this.initialize(img.p22_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p22_7 = function() {
        this.initialize(img.p22_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p22_8 = function() {
        this.initialize(img.p22_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p22_9 = function() {
        this.initialize(img.p22_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p22_10 = function() {
        this.initialize(img.p22_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("22", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Antal 1–8", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.instance_2 = new lib.p22_1();
        this.instance_2.setTransform(60, 27, 0.55, 0.55);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText, this.instance_2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.instance_1 = new lib.p22_2();
        this.instance_1.setTransform(18, 0, 0.52, 0.5);

        this.addChild(this.instance_1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 450);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Räkna i bilden. Ringa in antalet.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        for (var lineCount = 0; lineCount < 30; lineCount++) {

            this.vrline_1 = new cjs.Shape();
            this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
            this.vrline_1.setTransform(236, 38 + (lineCount * 7));

            this.addChild(this.vrline_1);
        }

        this.addChild(this.headerCircle, this.text_1);

        this.instance_1 = new lib.p22_3();
        this.instance_1.setTransform(20, 40, 0.55, 0.55);

        this.instance_2 = new lib.p22_4();
        this.instance_2.setTransform(255, 35, 0.57, 0.57);

        this.instance_3 = new lib.p22_5();
        this.instance_3.setTransform(14, 90, 0.55, 0.55);

        this.instance_4 = new lib.p22_6();
        this.instance_4.setTransform(260, 95, 0.52, 0.52);

        this.instance_5 = new lib.p22_7();
        this.instance_5.setTransform(24, 158, 0.55, 0.55);

        this.instance_6 = new lib.p22_8();
        this.instance_6.setTransform(260, 155, 0.52, 0.52);

        this.instance_7 = new lib.p22_9();
        this.instance_7.setTransform(11, 195, 0.52, 0.52);

        this.instance_8 = new lib.p22_10();
        this.instance_8.setTransform(258, 200, 0.55, 0.55);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8);

        var spl_Text = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
        var col_X = 0;
        var txtColor = "#000000";

        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 16; col++) {

                var fillText = spl_Text[col];

                if (row == 0) {
                    txtColor = "#F4A330";
                } else if (row == 1) {
                    txtColor = "#8CB93B";
                } else if (row == 2) {
                    txtColor = "#44B1C9";
                } else if (row == 3) {
                    txtColor = "#908EC2";
                }

                if (col < 8) {
                    col_X = 60;
                } else if (col > 7) {
                    col_X = 142;
                }

                this.text_2 = new cjs.Text('' + fillText, "18px 'ElisarDTInfant-Bold'", txtColor);
                this.text_2.setTransform(col_X + (col * 21), 57 + (row * 56));

                this.addChild(this.text_2);
            }
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 275);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(309, 40, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(309, 380, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
