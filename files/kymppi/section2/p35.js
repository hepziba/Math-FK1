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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p35_1.png",
            id: "p35_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p35_2.png",
            id: "p35_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p35_3.png",
            id: "p35_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p35_4.png",
            id: "p35_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p35_5.png",
            id: "p35_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p35_6.png",
            id: "p35_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p35_7.png",
            id: "p35_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p35_8.png",
            id: "p35_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p35_9.png",
            id: "p35_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p35_10.png",
            id: "p35_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/odd_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p35_1 = function() {
        this.initialize(img.p35_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p35_2 = function() {
        this.initialize(img.p35_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p35_3 = function() {
        this.initialize(img.p35_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p35_4 = function() {
        this.initialize(img.p35_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p35_5 = function() {
        this.initialize(img.p35_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p35_6 = function() {
        this.initialize(img.p35_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p35_7 = function() {
        this.initialize(img.p35_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p35_8 = function() {
        this.initialize(img.p35_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p35_9 = function() {
        this.initialize(img.p35_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p35_10 = function() {
        this.initialize(img.p35_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("35", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Begreppet dela lika", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(445, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Dela lika mellan djuren. Rita. Skriv antalet.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var col = 0; col < 2; col++) {

            this.roundRect1 = new cjs.Shape();
            this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 218, 324, 12);
            this.roundRect1.setTransform(30 + (col * 237), 20);

            this.addChild(this.roundRect1);
        }

        this.instance_1 = new lib.p35_2();
        this.instance_1.setTransform(52, 32, 0.43, 0.43);

        this.instance_2 = new lib.p35_2();
        this.instance_2.setTransform(85, 32, 0.43, 0.43);

        this.instance_3 = new lib.p35_1();
        this.instance_3.setTransform(115, 32, 0.43, 0.43);

        this.instance_4 = new lib.p35_2();
        this.instance_4.setTransform(148, 32, 0.43, 0.43);

        this.instance_5 = new lib.p35_1();
        this.instance_5.setTransform(175, 32, 0.43, 0.43);

        this.instance_6 = new lib.p35_1();
        this.instance_6.setTransform(205, 34, 0.43, 0.43);
        this.instance_6.rotation = -15;

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6);

        this.instance_7 = new lib.p35_3();
        this.instance_7.setTransform(277, 38, 0.42, 0.42);

        this.instance_8 = new lib.p35_3();
        this.instance_8.setTransform(301, 30, 0.42, 0.42);

        this.instance_9 = new lib.p35_3();
        this.instance_9.setTransform(323, 38, 0.42, 0.42);

        this.instance_10 = new lib.p35_3();
        this.instance_10.setTransform(347, 30, 0.42, 0.42);

        this.instance_11 = new lib.p35_3();
        this.instance_11.setTransform(369, 38, 0.42, 0.42);

        this.instance_12 = new lib.p35_3();
        this.instance_12.setTransform(392, 30, 0.42, 0.42);

        this.instance_13 = new lib.p35_3();
        this.instance_13.setTransform(414, 38, 0.42, 0.42);

        this.instance_14 = new lib.p35_3();
        this.instance_14.setTransform(438, 30, 0.42, 0.42);

        this.instance_15 = new lib.p35_3();
        this.instance_15.setTransform(460, 38, 0.42, 0.42);

        this.addChild(this.instance_7, this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12,
            this.instance_13, this.instance_14, this.instance_15);

        var col_X = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 2; col++) {

                var horizontalLineContainer = new cjs.Container();

                if (col == 0) {
                    col_X = 39;
                } else if (col == 1) {
                    col_X = 40;
                }

                for (var lineCount = 0; lineCount < 29; lineCount++) {

                    this.hrline_1 = new cjs.Shape();
                    this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                    this.hrline_1.setTransform(0 + (lineCount * 7), 0);

                    horizontalLineContainer.addChild(this.hrline_1);
                }

                horizontalLineContainer.setTransform(col_X + (col * 235), 74 + (row * 91));
                this.addChild(horizontalLineContainer);
            }
        }

        var col_X = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 2; col++) {

                this.Rect2 = new cjs.Shape();
                this.Rect2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 35);
                this.Rect2.setTransform(205 + (col * 238), 105 + (row * 90));

                this.addChild(this.Rect2);
            }
        }

        this.instance_16 = new lib.p35_4();
        this.instance_16.setTransform(40, 87, 0.52, 0.52);

        this.instance_17 = new lib.p35_5();
        this.instance_17.setTransform(280, 85, 0.52, 0.52);

        this.instance_18 = new lib.p35_6();
        this.instance_18.setTransform(40, 172, 0.52, 0.52);

        this.instance_19 = new lib.p35_7();
        this.instance_19.setTransform(280, 177, 0.52, 0.52);

        this.instance_20 = new lib.p35_8();
        this.instance_20.setTransform(40, 257, 0.52, 0.52);

        this.instance_21 = new lib.p35_9();
        this.instance_21.setTransform(280, 270, 0.52, 0.52);

        this.addChild(this.instance_16, this.instance_17, this.instance_18, this.instance_19, this.instance_20, this.instance_21);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 370);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Dra streck från 1 till 10.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.instance_1 = new lib.p35_10();
        this.instance_1.setTransform(87, 7, 0.52, 0.5);

        this.addChild(this.headerCircle, this.text_1, this.instance_1);

        this.dot1 = new cjs.Shape();
        this.dot1.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot1.setTransform(213.5, 127);

        this.dot2 = new cjs.Shape();
        this.dot2.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot2.setTransform(168, 122);

        this.dot3 = new cjs.Shape();
        this.dot3.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot3.setTransform(154, 133);

        this.dot4 = new cjs.Shape();
        this.dot4.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot4.setTransform(152, 148);

        this.dot5 = new cjs.Shape();
        this.dot5.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot5.setTransform(164, 155);

        this.dot6 = new cjs.Shape();
        this.dot6.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot6.setTransform(192, 163);

        this.dot7 = new cjs.Shape();
        this.dot7.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot7.setTransform(285, 163);

        this.dot8 = new cjs.Shape();
        this.dot8.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot8.setTransform(305, 155);

        this.dot9 = new cjs.Shape();
        this.dot9.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot9.setTransform(308, 127);

        this.dot10 = new cjs.Shape();
        this.dot10.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot10.setTransform(268, 129);

        this.addChild(this.dot1, this.dot2, this.dot3, this.dot4, this.dot5, this.dot6, this.dot7, this.dot8, this.dot9, this.dot10);

        this.text_2 = new cjs.Text("1", "14px 'ElisarDTInfant-Bold'", "#00A3C0");
        this.text_2.setTransform(207, 123);

        this.text_3 = new cjs.Text("2", "14px 'ElisarDTInfant-Bold'", "#00A3C0");
        this.text_3.setTransform(162, 117);

        this.text_4 = new cjs.Text("3", "14px 'ElisarDTInfant-Bold'", "#00A3C0");
        this.text_4.setTransform(140, 138);

        this.text_5 = new cjs.Text("4", "14px 'ElisarDTInfant-Bold'", "#00A3C0");
        this.text_5.setTransform(140, 158);

        this.text_6 = new cjs.Text("5", "14px 'ElisarDTInfant-Bold'", "#00A3C0");
        this.text_6.setTransform(155, 169);

        this.text_7 = new cjs.Text("6", "14px 'ElisarDTInfant-Bold'", "#00A3C0");
        this.text_7.setTransform(193, 176);

        this.text_8 = new cjs.Text("7", "14px 'ElisarDTInfant-Bold'", "#00A3C0");
        this.text_8.setTransform(274, 160);

        this.text_9 = new cjs.Text("8", "14px 'ElisarDTInfant-Bold'", "#00A3C0");
        this.text_9.setTransform(308, 160);

        this.text_10 = new cjs.Text("9", "14px 'ElisarDTInfant-Bold'", "#00A3C0");
        this.text_10.setTransform(310, 128);

        this.text_11 = new cjs.Text("10", "14px 'ElisarDTInfant-Bold'", "#00A3C0");
        this.text_11.setTransform(270, 129);

        this.addChild(this.text_2, this.text_3, this.text_4, this.text_5, this.text_6, this.text_7, this.text_8, this.text_9,
            this.text_10, this.text_11);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 180);

    (lib.p6 = function() {
        this.initialize();

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 438, 1, 1, 0, 0, 0, 254.6, 0);

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 56, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
