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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/images/p19_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p45_1.png",
            id: "p45_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p45_2.png",
            id: "p45_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p45_3.png",
            id: "p45_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p45_4.png",
            id: "p45_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p45_5.png",
            id: "p45_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p45_6.png",
            id: "p45_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p45_7.png",
            id: "p45_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p45_8.png",
            id: "p45_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p45_9.png",
            id: "p45_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/dummy2.png",
            id: "p45_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/odd_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.p45_1 = function() {
        this.initialize(img.p45_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p45_2 = function() {
        this.initialize(img.p45_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p45_3 = function() {
        this.initialize(img.p45_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p45_4 = function() {
        this.initialize(img.p45_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p45_5 = function() {
        this.initialize(img.p45_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p45_6 = function() {
        this.initialize(img.p45_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p45_7 = function() {
        this.initialize(img.p45_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p45_8 = function() {
        this.initialize(img.p45_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p45_9 = function() {
        this.initialize(img.p45_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p45_10 = function() {
        this.initialize(img.p45_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("45", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Begreppet tillsammans", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(432, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Dra streck mellan 2 tallrikar så att det är 10 tillsammans.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 261, 12);
        this.roundRect1.setTransform(30, 20);

        this.addChild(this.roundRect1);

        this.instance_1 = new lib.p45_1();
        this.instance_1.setTransform(58, 75, 0.55, 0.55);

        this.instance_2 = new lib.p45_2();
        this.instance_2.setTransform(153, 30, 0.55, 0.55);

        this.instance_3 = new lib.p45_3();
        this.instance_3.setTransform(270, 32, 0.55, 0.55);

        this.instance_4 = new lib.p45_4();
        this.instance_4.setTransform(366, 77, 0.55, 0.55);

        this.instance_5 = new lib.p45_5();
        this.instance_5.setTransform(366, 156, 0.55, 0.55);

        this.instance_6 = new lib.p45_6();
        this.instance_6.setTransform(271, 198, 0.55, 0.55);

        this.instance_7 = new lib.p45_7();
        this.instance_7.setTransform(155, 198, 0.55, 0.55);

        this.instance_8 = new lib.p45_8();
        this.instance_8.setTransform(58, 156, 0.55, 0.55);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6,
            this.instance_7, this.instance_8);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 315);

    (lib.Symbol3 = function() {
        this.initialize();

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 261, 12);
        this.roundRect1.setTransform(30, 0);

        this.addChild(this.roundRect1);

        this.instance_1 = new lib.p45_9();
        this.instance_1.setTransform(58, 62, 0.55, 0.55);

        this.instance_2 = new lib.p45_9();
        this.instance_2.setTransform(152, 18, 0.55, 0.55);

        this.instance_3 = new lib.p45_9();
        this.instance_3.setTransform(267, 19, 0.55, 0.55);

        this.instance_4 = new lib.p45_9();
        this.instance_4.setTransform(360, 62, 0.55, 0.55);

        this.instance_5 = new lib.p45_9();
        this.instance_5.setTransform(361, 139, 0.55, 0.55);

        this.instance_6 = new lib.p45_9();
        this.instance_6.setTransform(267, 181, 0.55, 0.55);

        this.instance_7 = new lib.p45_9();
        this.instance_7.setTransform(154, 181, 0.55, 0.55);

        this.instance_8 = new lib.p45_9();
        this.instance_8.setTransform(58, 139, 0.55, 0.55);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6,
            this.instance_7, this.instance_8);

        this.text1 = new cjs.Text("6", "30px 'ElisarDTInfant-SemiBold'", "#F4A327");
        this.text1.setTransform(95, 104);

        this.text2 = new cjs.Text("8", "30px 'ElisarDTInfant-SemiBold'", "#D03268");
        this.text2.setTransform(190, 62);

        this.text3 = new cjs.Text("5", "30px 'ElisarDTInfant-SemiBold'", "#8CB93B");
        this.text3.setTransform(305, 62);

        this.text4 = new cjs.Text("9", "30px 'ElisarDTInfant-SemiBold'", "#908EC1");
        this.text4.setTransform(400, 107);

        this.text5 = new cjs.Text("4", "30px 'ElisarDTInfant-SemiBold'", "#E76433");
        this.text5.setTransform(397, 181);

        this.text6 = new cjs.Text("5", "30px 'ElisarDTInfant-SemiBold'", "#33A344");
        this.text6.setTransform(306, 225);

        this.text7 = new cjs.Text("1", "30px 'ElisarDTInfant-SemiBold'", "#000000");
        this.text7.setTransform(192, 225);

        this.text8 = new cjs.Text("2", "30px 'ElisarDTInfant-SemiBold'", "#31B1C9");
        this.text8.setTransform(95, 182);

        this.addChild(this.text1, this.text2, this.text3, this.text4, this.text5, this.text6, this.text7, this.text8);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 330);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 56, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 352, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
