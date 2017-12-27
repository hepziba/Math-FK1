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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p58_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p58_1.png",
            id: "p58_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p58_2.png",
            id: "p58_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p58_3.png",
            id: "p58_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p58_4.png",
            id: "p58_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p58_5.png",
            id: "p58_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p58_6.png",
            id: "p58_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/even_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p58_1 = function() {
        this.initialize(img.p58_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p58_2 = function() {
        this.initialize(img.p58_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p58_3 = function() {
        this.initialize(img.p58_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p58_4 = function() {
        this.initialize(img.p58_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p58_5 = function() {
        this.initialize(img.p58_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p58_6 = function() {
        this.initialize(img.p58_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("58", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Jämföra tid", "9.5px 'ElisarDTInfant-SemiBold'");
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

        this.text_1 = new cjs.Text("Vad händer först, sedan och till sist?", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.text_2 = new cjs.Text("Skriv 1, 2 och 3.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(29, 24);

        this.addChild(this.headerCircle, this.text_1, this.text_2);

        for (var col = 0; col < 3; col++) {
            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#D2E8F0").ss(1).drawRoundRect(0, 0, 135, 117, 12);
            this.Rect1.setTransform(32 + (col * 152), 45);

            this.addChild(this.Rect1);
        }

        for (var col = 0; col < 3; col++) {

            this.Rect2 = new cjs.Shape();
            this.Rect2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
            this.Rect2.setTransform(143 + (col * 152), 132);

            this.addChild(this.Rect2);
        }

        this.instance_1 = new lib.p58_1();
        this.instance_1.setTransform(47, 65, 0.45, 0.45);

        this.instance_2 = new lib.p58_2();
        this.instance_2.setTransform(198, 60, 0.4, 0.4);

        this.instance_3 = new lib.p58_3();
        this.instance_3.setTransform(357, 72, 0.42, 0.42);

        this.addChild(this.instance_1, this.instance_2, this.instance_3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 160);

    (lib.Symbol3 = function() {
        this.initialize();

        for (var col = 0; col < 3; col++) {
            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#D2E8F0").ss(1).drawRoundRect(0, 0, 135, 117, 12);
            this.Rect1.setTransform(32 + (col * 152), 0);

            this.addChild(this.Rect1);
        }

        this.instance_1 = new lib.p58_4();
        this.instance_1.setTransform(37, 16, 0.47, 0.47);

        this.instance_2 = new lib.p58_5();
        this.instance_2.setTransform(218, 22, 0.52, 0.52);

        this.instance_3 = new lib.p58_6();
        this.instance_3.setTransform(370, 25, 0.54, 0.54);

        this.addChild(this.instance_1, this.instance_2, this.instance_3);


        for (var col = 0; col < 3; col++) {

            this.Rect2 = new cjs.Shape();
            this.Rect2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
            this.Rect2.setTransform(143 + (col * 152), 87);

            this.addChild(this.Rect2);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 120);

    (lib.Symbol4 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Rita något du gör som tar …", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        var fillText = " ";
        for (var col = 0; col < 2; col++) {
            if (col == 0) {
                fillText = "kort tid";
            } else {
                fillText = "lång tid";
            }

            this.roundRect1 = new cjs.Shape();
            this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 208, 195, 12);
            this.roundRect1.setTransform(30 + (col * 235), 24);

            this.text_2 = new cjs.Text('' + fillText, "17px 'ElisarDTInfant-Regular'");
            this.text_2.setTransform(52 + (col * 235), 50);

            this.addChild(this.roundRect1, this.text_2);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 230);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 57, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 234, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(303, 400, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
