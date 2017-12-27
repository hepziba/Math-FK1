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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p57_1.png",
            id: "p57_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p57_2.png",
            id: "p57_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p57_3.png",
            id: "p57_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p57_4.png",
            id: "p57_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p57_5.png",
            id: "p57_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p57_6.png",
            id: "p57_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p57_7.png",
            id: "p57_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p57_8.png",
            id: "p57_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/odd_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p57_1 = function() {
        this.initialize(img.p57_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p57_2 = function() {
        this.initialize(img.p57_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p57_3 = function() {
        this.initialize(img.p57_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p57_4 = function() {
        this.initialize(img.p57_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p57_5 = function() {
        this.initialize(img.p57_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p57_6 = function() {
        this.initialize(img.p57_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p57_7 = function() {
        this.initialize(img.p57_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p57_8 = function() {
        this.initialize(img.p57_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("57", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Begreppet hälften så många", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(410, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

        // this.roundRect1 = new cjs.Shape();
        // this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 495, 12);
        // this.roundRect1.setTransform(82, 124);

        // this.addChild(this.roundRect1);

        // for (var col = 0; col < 63; col++) {

        //     this.hrline_1 = new cjs.Shape();
        //     this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
        //     this.hrline_1.setTransform(92 + (col * 7), 371);

        //     this.addChild(this.hrline_1);
        // }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Igelkotten har hälften så många. Rita.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 495, 12);
        this.roundRect1.setTransform(30, 66);

        this.addChild(this.roundRect1);
       
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 63; col++) {

                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(40 + (col * 7), 148 + (row * 82.5));

                this.addChild(this.hrline_1);
            }
        }

        for (var row = 0; row < 3; row++) {

            var verticalLineContainer = new cjs.Container();

            for (var loneCount = 0; loneCount < 10; loneCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(9, 72 + (loneCount * 7));

                verticalLineContainer.addChild(this.vrline_1);
            }
            verticalLineContainer.setTransform(180, 3 + (row * 82));
            this.addChild(verticalLineContainer);
        }

        this.instance_1 = new lib.p57_1();
        this.instance_1.setTransform(81, 15, 0.52, 0.52);

        this.instance_2 = new lib.p57_2();
        this.instance_2.setTransform(384, 13, 0.52, 0.52);

        this.instance_3 = new lib.p57_3();
        this.instance_3.setTransform(78, 95, 0.45, 0.45);

        this.instance_4 = new lib.p57_4();
        this.instance_4.setTransform(63, 158, 0.42, 0.42);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4);

        this.instance_5 = new lib.p57_5();
        this.instance_5.setTransform(45, 255, 0.5, 0.5);
        this.instance_5.rotation = -30;

        this.instance_6 = new lib.p57_5();
        this.instance_6.setTransform(78, 248, 0.5, 0.5);
        this.instance_6.rotation = 10;

        this.instance_7 = new lib.p57_5();
        this.instance_7.setTransform(105, 248, 0.5, 0.5);
        this.instance_7.rotation = 10;

        this.instance_8 = new lib.p57_5();
        this.instance_8.setTransform(129, 251, 0.5, 0.5);

        this.instance_9 = new lib.p57_5();
        this.instance_9.setTransform(154, 253, 0.5, 0.5);
        this.instance_9.rotation = -10;

        this.instance_10 = new lib.p57_5();
        this.instance_10.setTransform(52, 275, 0.5, 0.5);
        this.instance_10.rotation = 20;

        this.instance_11 = new lib.p57_5();
        this.instance_11.setTransform(75, 278, 0.5, 0.5);
        this.instance_11.rotation = 5;

        this.instance_12 = new lib.p57_5();
        this.instance_12.setTransform(100, 280, 0.5, 0.5);
        this.instance_12.rotation = -15;

        this.instance_13 = new lib.p57_5();
        this.instance_13.setTransform(132, 275, 0.5, 0.5);
        this.instance_13.rotation = 20;

        this.instance_14 = new lib.p57_5();
        this.instance_14.setTransform(155, 278, 0.5, 0.5);
        this.instance_14.rotation = 5;

        this.addChild(this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9, this.instance_10, this.instance_11,
            this.instance_12, this.instance_13, this.instance_14);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 580);

    (lib.Symbol3 = function() {
        this.initialize();

        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 63; col++) {

                this.hrline_1 = new cjs.Shape();
                this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                this.hrline_1.setTransform(40 + (col * 7), 74.5 + (row * 82.5));

                this.addChild(this.hrline_1);
            }
        }

        for (var row = 0; row < 3; row++) {

            var verticalLineContainer = new cjs.Container();

            for (var loneCount = 0; loneCount < 10; loneCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(9, 0 + (loneCount * 7));

                verticalLineContainer.addChild(this.vrline_1);
            }
            verticalLineContainer.setTransform(180, 0 + (row * 82));
            this.addChild(verticalLineContainer);
        }

        this.instance_1 = new lib.p57_6();
        this.instance_1.setTransform(67, 0, 0.4, 0.4);

        this.addChild(this.instance_1);

        this.instance_2 = new lib.p57_7();
        this.instance_2.setTransform(52, 86, 0.52, 0.52);

        this.instance_3 = new lib.p57_7();
        this.instance_3.setTransform(82, 83, 0.52, 0.52);

        this.instance_4 = new lib.p57_8();
        this.instance_4.setTransform(115, 86, 0.52, 0.52);

        this.instance_5 = new lib.p57_7();
        this.instance_5.setTransform(148, 86, 0.52, 0.52);

        this.instance_6 = new lib.p57_8();
        this.instance_6.setTransform(52, 119, 0.52, 0.52);

        this.instance_7 = new lib.p57_7();
        this.instance_7.setTransform(88, 116, 0.52, 0.52);
        this.instance_7.rotation = 15;

        this.instance_8 = new lib.p57_7();
        this.instance_8.setTransform(117, 120, 0.52, 0.52);

        this.instance_9 = new lib.p57_7();
        this.instance_9.setTransform(154, 116, 0.52, 0.52);
        this.instance_9.rotation = 15;

        this.addChild(this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 300);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 58, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 379, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
