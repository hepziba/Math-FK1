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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p5_1.png",
            id: "p5_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p5_2.png",
            id: "p5_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p5_3.png",
            id: "p5_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p5_4.png",
            id: "p5_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p5_5.png",
            id: "p5_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p5_6.png",
            id: "p5_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p5_7.png",
            id: "p5_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/odd_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p5_1 = function() {
        this.initialize(img.p5_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p5_2 = function() {
        this.initialize(img.p5_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p5_3 = function() {
        this.initialize(img.p5_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p5_4 = function() {
        this.initialize(img.p5_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p5_5 = function() {
        this.initialize(img.p5_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p5_6 = function() {
        this.initialize(img.p5_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p5_7 = function() {
        this.initialize(img.p5_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("5", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Begreppet lika många", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(435, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(0, 0);

        this.text_2 = new cjs.Text("Rita lika många kex          som djur.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(10, 5);

        this.instance_1 = new lib.p5_1();
        this.instance_1.setTransform(151, -11, 0.51, 0.51);

        this.addChild(this.headerCircle, this.text_2, this.instance_1);

        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 2; col++) {

                this.roundRect1 = new cjs.Shape();
                this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 218, 170, 12);
                this.roundRect1.setTransform(11 + (col * 235), 18 + (row * 185));

                this.addChild(this.roundRect1);

                for (var i = 0; i < 1; i++) {
                    for (var j = 0; j < 33; j++) {
                        this.dottedLine_1 = new cjs.Shape();
                        this.dottedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(3, 0);
                        this.dottedLine_1.setTransform((j * 6) + 25 + (col * 232), 132 + (i * 185));

                        this.addChild(this.dottedLine_1);
                    }
                }
            }
        }

        this.instance_2 = new lib.p5_2();
        this.instance_2.setTransform(62, 57, 0.5, 0.5);

        this.instance_3 = new lib.p5_3();
        this.instance_3.setTransform(278, 27, 0.39, 0.39);
   
        this.addChild(this.instance_2, this.instance_3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 465, 140);

    (lib.Symbol3 = function() {
        this.initialize();
        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 2; col++) {

                this.roundRect1 = new cjs.Shape();
                this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 218, 170, 12);
                this.roundRect1.setTransform(11 + (col * 235), 0);

                this.addChild(this.roundRect1);

                for (var i = 0; i < 1; i++) {
                    for (var j = 0; j < 33; j++) {
                        this.dottedLine_1 = new cjs.Shape();
                        this.dottedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(3, 0);
                        this.dottedLine_1.setTransform((j * 6) + 25 + (col * 232), 114);

                        this.addChild(this.dottedLine_1);
                    }
                }
            }
        }

        this.instance_4 = new lib.p5_4();
        this.instance_4.setTransform(70, 21, 0.4, 0.4);

        this.instance_5 = new lib.p5_5();
        this.instance_5.setTransform(280, 11, 0.39, 0.39);

        this.addChild(this.instance_4, this.instance_5);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 465, 140);

    (lib.Symbol4 = function() {
        this.initialize();
        for (var row = 0; row < 1; row++) {
            for (var col = 0; col < 2; col++) {

                this.roundRect1 = new cjs.Shape();
                this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 218, 170, 12);
                this.roundRect1.setTransform(11 + (col * 235), 0);

                this.addChild(this.roundRect1);

                for (var i = 0; i < 1; i++) {
                    for (var j = 0; j < 33; j++) {
                        this.dottedLine_1 = new cjs.Shape();
                        this.dottedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(3, 0);
                        this.dottedLine_1.setTransform((j * 6) + 25 + (col * 232), 114);

                        this.addChild(this.dottedLine_1);
                    }
                }
            }
        }
      
        this.instance_6 = new lib.p5_6();
        this.instance_6.setTransform(55, 25, 0.4, 0.4);

        this.instance_7 = new lib.p5_7();
        this.instance_7.setTransform(286, 17, 0.39, 0.39);

        this.addChild(            this.instance_6, this.instance_7);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 465, 140);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(328, 57, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(328, 260, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(328, 445, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
