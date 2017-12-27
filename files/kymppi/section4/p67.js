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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/images/p65_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p67_1.png",
            id: "p67_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p67_2.png",
            id: "p67_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p67_3.png",
            id: "p67_3"
        }, {
            src: "images/odd_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p67_1 = function() {
        this.initialize(img.p67_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p67_2 = function() {
        this.initialize(img.p67_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p67_3 = function() {
        this.initialize(img.p67_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("67", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Problemlösning", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(462, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

        this.headerCircle_1 = new cjs.Shape();
        this.headerCircle_1.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle_1.setTransform(67, 57);

        this.text_1 = new cjs.Text("Du handlar för 10 kr.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(77, 62);

        this.headerCircle_2 = new cjs.Shape();
        this.headerCircle_2.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle_2.setTransform(67, 97);

        this.text_2 = new cjs.Text("Vad kan du köpa?", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(77, 102);

        this.text_3 = new cjs.Text("Rita flera förslag.", "17px 'ElisarDTInfant-Regular'");
        this.text_3.setTransform(77, 123);

        this.instance_1 = new lib.p67_1();
        this.instance_1.setTransform(226, 37, 0.4, 0.4);

        this.addChild(this.headerCircle_1, this.text_1, this.headerCircle_2, this.text_2, this.text_3, this.instance_1);

        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 2; col++) {
                if (row == 0 && col == 1) {
                    continue;
                }
                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#D2E8F0").ss(1).drawRoundRect(0, 0, 219, 231, 12);
                this.Rect1.setTransform(80 + (col * 237), 140 + (row * 248));

                this.addChild(this.Rect1);
            }
        }

        this.instance_2 = new lib.p67_3();
        this.instance_2.setTransform(90, 151, 0.55, 0.55);

        this.instance_3 = new lib.p67_3();
        this.instance_3.setTransform(90, 400, 0.55, 0.55);

        this.instance_4 = new lib.p67_3();
        this.instance_4.setTransform(326, 400, 0.55, 0.55);

        this.addChild(this.instance_2, this.instance_3, this.instance_4);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    // (lib.Symbol2 = function() {
    //     this.initialize();

    //     this.headerCircle_1 = new cjs.Shape();
    //     this.headerCircle_1.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
    //     this.headerCircle_1.setTransform(19, 0);

    //     this.text_1 = new cjs.Text("Du handlar för 10 kr.", "17px 'ElisarDTInfant-Regular'");
    //     this.text_1.setTransform(29, 5);

    //     this.headerCircle_2 = new cjs.Shape();
    //     this.headerCircle_2.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
    //     this.headerCircle_2.setTransform(19, 40);

    //     this.text_2 = new cjs.Text("Vad kan du köpa?", "17px 'ElisarDTInfant-Regular'");
    //     this.text_2.setTransform(29, 45);

    //     this.text_3 = new cjs.Text("Rita flera förslag.", "17px 'ElisarDTInfant-Regular'");
    //     this.text_3.setTransform(29, 66);

    //     this.instance_1 = new lib.p67_1();
    //     this.instance_1.setTransform(178, -20, 0.4, 0.4);

    //     this.addChild(this.headerCircle_1, this.text_1, this.headerCircle_2, this.text_2, this.text_3, this.instance_1);

    //     for (var row = 0; row < 2; row++) {
    //         for (var col = 0; col < 2; col++) {
    //             if (row == 0 && col == 1) {
    //                 continue;
    //             }
    //             this.Rect1 = new cjs.Shape();
    //             this.Rect1.graphics.f("#ffffff").s("#D2E8F0").ss(1).drawRoundRect(0, 0, 219, 231, 12);
    //             this.Rect1.setTransform(32 + (col * 237), 83 + (row * 248));

    //             this.addChild(this.Rect1);
    //         }
    //     }

    //     this.instance_2 = new lib.p67_3();
    //     this.instance_2.setTransform(42, 94, 0.55, 0.55);

    //     this.instance_3 = new lib.p67_2();
    //     this.instance_3.setTransform(267, -7, 0.5, 0.5);

    //     this.instance_4 = new lib.p67_3();
    //     this.instance_4.setTransform(42, 343, 0.55, 0.55);

    //     this.instance_5 = new lib.p67_3();
    //     this.instance_5.setTransform(278, 343, 0.55, 0.55);

    //     this.addChild(this.instance_2,this.instance_3,this.instance_4,this.instance_5);

    // }).prototype = p = new cjs.Container();
    // p.virtualBounds = new cjs.Rectangle(0, 0, 500, 560);

    (lib.Symbol2 = function() {
        this.initialize();
       
        this.instance_1 = new lib.p67_2();
        this.instance_1.setTransform(0, 0, 0.5, 0.5);

        this.addChild(this.instance_1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 200, 320);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(570, 50, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
