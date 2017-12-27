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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p19_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p55_1.png",
            id: "p55_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p55_1.png",
            id: "p55_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p55_2.png",
            id: "p55_2"      
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p55_3.png",
            id: "p55_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p55_4.png",
            id: "p55_4"       
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/odd_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p55_11 = function() {
        this.initialize(img.p55_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p55_1 = function() {
        this.initialize(img.p55_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p55_2 = function() {
        this.initialize(img.p55_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p55_22 = function() {
        this.initialize(img.p55_22);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p55_3 = function() {
        this.initialize(img.p55_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p55_4 = function() {
        this.initialize(img.p55_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p55_44 = function() {
        this.initialize(img.p55_44);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("55", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Talraden", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(490, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Dra streck från 1 till 12.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.instance_1 = new lib.p55_1();
        this.instance_1.setTransform(44, 15, 0.42, 0.42);

        this.addChild(this.headerCircle, this.text_1, this.instance_1);

        //blue dots

        var dot_X = [96, 96, 96, 194, 119, 145, 313, 345, 380, 390, 353, 329];
        var dot_Y = [314, 212, 121, 168, 168, 235, 235, 152, 168, 145, 129, 168];

        for (var i = 0; i < dot_X.length; i++) {
            this.dot1 = new cjs.Shape();
            this.dot1.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
            this.dot1.setTransform(dot_X[i], dot_Y[i]);

            this.addChild(this.dot1);
        }

        //blue dot Nos

        var Num_X = [84, 83, 84, 194, 107, 137, 318, 341, 382, 393, 335, 315];
        var Num_Y = [317, 215, 126, 180, 167, 250, 240, 167, 181, 149, 130, 163];

        for (var j = 0; j < dot_X.length; j++) {
            fillNum = j + 1;

            this.text1 = new cjs.Text('' + fillNum, "14px 'ElisarDTInfant-SemiBold'", "#00A3C0");
            this.text1.setTransform(Num_X[j], Num_Y[j]);

            this.addChild(this.text1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 350);

    (lib.Symbol3 = function() {
        this.initialize();

        this.instance_1 = new lib.p55_2();
        this.instance_1.setTransform(0, 0, 0.42, 0.42);

        this.addChild(this.instance_1);

        //green dots

        var dot_X = [75, 113, 145, 194, 221, 237, 223, 211, 172, 143, 113, 83];
        var dot_Y = [385, 404, 371, 369, 392, 415, 419, 432, 448, 442, 424, 448];

        for (var i = 0; i < dot_X.length; i++) {
            this.dot1 = new cjs.Shape();
            this.dot1.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
            this.dot1.setTransform(dot_X[i]-72, dot_Y[i] - 300);

            this.addChild(this.dot1);
        }

        //green dot Nos

        var Num_X = [71, 107, 138, 193, 224, 243, 225, 208, 169, 135, 105, 73];
        var Num_Y = [380, 398, 384, 365, 388, 419, 431, 446, 443, 457, 439, 463];

        for (var j = 0; j < dot_X.length; j++) {
            fillNum = j + 1;

            this.text1 = new cjs.Text('' + fillNum, "14px 'ElisarDTInfant-SemiBold'", "#35A345");
            this.text1.setTransform(Num_X[j]-72, Num_Y[j] - 300);

            this.addChild(this.text1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 250, 250);

    (lib.Symbol4 = function() {
        this.initialize();

        this.instance_1 = new lib.p55_3();
        this.instance_1.setTransform(0, 0, 0.42, 0.42);

        this.addChild(this.instance_1);

        //red dots

        var dot_X = [322.5, 310, 317, 267, 289, 303.5, 317, 349, 380, 388, 376, 413];
        var dot_Y = [403, 368, 336, 362, 336, 315, 257, 238, 243, 281, 321, 354];

        for (var i = 0; i < dot_X.length; i++) {
            this.dot1 = new cjs.Shape();
            this.dot1.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
            this.dot1.setTransform(dot_X[i] - 257, dot_Y[i] - 215);

            this.addChild(this.dot1);
        }

        //red dot Nos

        var Num_X = [319, 314, 320, 256, 276, 307, 305, 349, 383, 391, 365, 414];
        var Num_Y = [417, 371, 335, 370, 340, 322, 261, 234.5, 243, 285, 335, 356];

        for (var j = 0; j < dot_X.length; j++) {
            fillNum = j + 1;

            this.text1 = new cjs.Text('' + fillNum, "14px 'ElisarDTInfant-SemiBold'", "#E13C2A");
            this.text1.setTransform(Num_X[j] - 257, Num_Y[j] - 215);

            this.addChild(this.text1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 180, 200);

    (lib.Symbol5 = function() {
        this.initialize();

        this.instance_1 = new lib.p55_4();
        this.instance_1.setTransform(38, 0 - 20, 0.42, 0.42);

        this.addChild(this.instance_1);

        //vilot dots

        var dot_X = [314, 344, 433, 433, 425, 411, 399, 399, 357, 258, 268, 362];
        var dot_Y = [457, 431, 465, 483, 494, 498, 488, 543, 552, 530, 470, 496];

        for (var i = 0; i < dot_X.length; i++) {
            this.dot1 = new cjs.Shape();
            this.dot1.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
            this.dot1.setTransform(dot_X[i], dot_Y[i] - 432 - 20);

            this.addChild(this.dot1);
        }

        //vilot dot Nos

        var Num_X = [308, 337, 437, 438, 428, 400, 393, 395, 356, 251, 250, 339];
        var Num_Y = [452, 426, 463, 485, 504, 507, 484, 557, 567, 544, 469, 508];

        for (var j = 0; j < dot_X.length; j++) {
            fillNum = j + 1;

            this.text2 = new cjs.Text('' + fillNum, "14px 'ElisarDTInfant-SemiBold'", "#908EC5");
            this.text2.setTransform(Num_X[j], Num_Y[j] - 432 - 20);

            this.addChild(this.text2);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 110);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 52, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(379, 348, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(567, 271, 1, 1, 0, 0, 0, 254.6, 0);

        this.v4 = new lib.Symbol5();
        this.v4.setTransform(307, 488 + 30, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3, this.v4);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
