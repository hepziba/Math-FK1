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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_1.png",
            id: "p11_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_2.png",
            id: "p11_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_3.png",
            id: "p11_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_4.png",
            id: "p11_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_5.png",
            id: "p11_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_6.png",
            id: "p11_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_7.png",
            id: "p11_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_8.png",
            id: "p11_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_9.png",
            id: "p11_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_10.png",
            id: "p11_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_11.png",
            id: "p11_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_12.png",
            id: "p11_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p11_13.png",
            id: "p11_13"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/odd_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p11_1 = function() {
        this.initialize(img.p11_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p11_2 = function() {
        this.initialize(img.p11_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p11_3 = function() {
        this.initialize(img.p11_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p11_4 = function() {
        this.initialize(img.p11_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p11_5 = function() {
        this.initialize(img.p11_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p11_6 = function() {
        this.initialize(img.p11_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p11_7 = function() {
        this.initialize(img.p11_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p11_8 = function() {
        this.initialize(img.p11_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p11_9 = function() {
        this.initialize(img.p11_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p11_10 = function() {
        this.initialize(img.p11_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p11_11 = function() {
        this.initialize(img.p11_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p11_12 = function() {
        this.initialize(img.p11_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p11_13 = function() {
        this.initialize(img.p11_13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("11", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Siffra – antal   Talraden", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(435, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Ringa in antalet.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 167, 12);
        this.roundRect1.setTransform(30, 18);

        this.instance_1 = new lib.p11_1();
        this.instance_1.setTransform(42, 75, 0.57, 0.57);

        //Banana

        this.instance_2 = new lib.p11_8();
        this.instance_2.setTransform(78, 28, 0.57, 0.57);

        this.instance_3 = new lib.p11_8();
        this.instance_3.setTransform(196, 52, 0.57, 0.57);
        this.instance_3.rotation = -5;

        this.instance_4 = new lib.p11_8();
        this.instance_4.setTransform(362, 52, 0.57, 0.57);

        this.instance_5 = new lib.p11_8();
        this.instance_5.setTransform(424, 60, 0.57, 0.57);

        this.instance_6 = new lib.p11_8();
        this.instance_6.setTransform(135, 112, 0.57, 0.57);

        this.instance_7 = new lib.p11_8();
        this.instance_7.setTransform(200, 133, 0.57, 0.57);
        this.instance_7.rotation = -45;

        this.instance_8 = new lib.p11_8();
        this.instance_8.setTransform(328, 142, 0.57, 0.57);
        this.instance_8.rotation = -40;

        this.instance_9 = new lib.p11_8();
        this.instance_9.setTransform(441, 138, 0.57, 0.57);
        this.instance_9.rotation = -5;

        //--------//

        this.instance_10 = new lib.p11_7();
        this.instance_10.setTransform(99, 48, 0.57, 0.57);

        this.instance_11 = new lib.p11_7();
        this.instance_11.setTransform(247, 31, 0.57, 0.57);
        this.instance_11.rotation = 5;

        this.instance_12 = new lib.p11_7();
        this.instance_12.setTransform(162, 94, 0.57, 0.57);
        this.instance_12.rotation = 5;

        this.instance_13 = new lib.p11_7();
        this.instance_13.setTransform(257, 91, 0.57, 0.57);
        this.instance_13.rotation = 72;

        //--------//

        this.instance_14 = new lib.p11_6();
        this.instance_14.setTransform(154, 35, 0.57, 0.57);
        this.instance_14.rotation = 5;

        this.instance_15 = new lib.p11_6();
        this.instance_15.setTransform(284, 45, 0.57, 0.57);
        this.instance_15.rotation = 15;

        this.instance_16 = new lib.p11_6();
        this.instance_16.setTransform(282, 110, 0.57, 0.57);
        this.instance_16.rotation = -20;

        this.instance_17 = new lib.p11_6();
        this.instance_17.setTransform(354, 98, 0.57, 0.57);
        this.instance_17.rotation = 7;

        this.instance_18 = new lib.p11_6();
        this.instance_18.setTransform(400, 114, 0.57, 0.57);

        //--------//

        this.instance_19 = new lib.p11_9();
        this.instance_19.setTransform(431, 32, 0.57, 0.57);

        this.instance_20 = new lib.p11_10();
        this.instance_20.setTransform(344, 31, 0.57, 0.57);
        this.instance_20.rotation = 17;

        this.instance_21 = new lib.p11_11();
        this.instance_21.setTransform(256, 144, 0.57, 0.57);
        this.instance_21.rotation = -15;

        this.addChild(this.roundRect1, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5,
            this.instance_6, this.instance_7, this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12, this.instance_13,
            this.instance_14, this.instance_15, this.instance_16, this.instance_17, this.instance_18, this.instance_19, this.instance_20, this.instance_21);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 170);

    (lib.Symbol3 = function() {
        this.initialize();

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 167, 12);
        this.roundRect1.setTransform(30, 0);

        this.instance_1 = new lib.p11_2();
        this.instance_1.setTransform(42, 64, 0.57, 0.57);

        //---Apple---//

        this.instance_2 = new lib.p11_5();
        this.instance_2.setTransform(80, 19, 0.57, 0.57);

        this.instance_3 = new lib.p11_5();
        this.instance_3.setTransform(220, 27, 0.57, 0.57);
        this.instance_3.rotation = -15;

        this.instance_4 = new lib.p11_5();
        this.instance_4.setTransform(340, 50, 0.57, 0.57);
        this.instance_4.rotation = -15;

        this.instance_5 = new lib.p11_5();
        this.instance_5.setTransform(411, 22, 0.57, 0.57);
        this.instance_5.rotation = -15;

        this.instance_6 = new lib.p11_5();
        this.instance_6.setTransform(185, 84, 0.57, 0.57);
        this.instance_6.rotation = -40;

        this.instance_7 = new lib.p11_5();
        this.instance_7.setTransform(326, 82, 0.57, 0.57);
        this.instance_7.rotation = 5;

        this.instance_8 = new lib.p11_5();
        this.instance_8.setTransform(289, 144, 0.57, 0.57);
        this.instance_8.rotation = -55;

        //---Apple with leaf---//

        this.instance_9 = new lib.p11_3();
        this.instance_9.setTransform(119, 43, 0.57, 0.57);

        this.instance_10 = new lib.p11_3();
        this.instance_10.setTransform(171, 125, 0.57, 0.57);
        this.instance_10.rotation = -35;

        this.instance_11 = new lib.p11_3();
        this.instance_11.setTransform(245, 103, 0.57, 0.57);

        this.instance_12 = new lib.p11_3();
        this.instance_12.setTransform(415, 123, 0.57, 0.57);

        //---mirror Apple with leaf---//

        this.instance_13 = new lib.p11_12();
        this.instance_13.setTransform(157, 76, 0.57, 0.57);
        this.instance_13.rotation = 25;

        this.instance_14 = new lib.p11_12();
        this.instance_14.setTransform(266, 38, 0.57, 0.57);

        this.instance_15 = new lib.p11_12();
        this.instance_15.setTransform(372, 10, 0.57, 0.57);

        //--------------//

        this.instance_16 = new lib.p11_4();
        this.instance_16.setTransform(159, 26, 0.57, 0.57);

        this.instance_17 = new lib.p11_4();
        this.instance_17.setTransform(302, 51, 0.57, 0.57);
        this.instance_17.rotation = -85;

        this.instance_18 = new lib.p11_4();
        this.instance_18.setTransform(127, 145, 0.57, 0.57);
        this.instance_18.rotation = -50;

        this.instance_19 = new lib.p11_4();
        this.instance_19.setTransform(278, 102, 0.57, 0.57);
        this.instance_19.rotation = -50;

        this.instance_20 = new lib.p11_4();
        this.instance_20.setTransform(362, 126, 0.57, 0.57);

        this.instance_21 = new lib.p11_4();
        this.instance_21.setTransform(402, 85, 0.57, 0.57);

        this.instance_22 = new lib.p11_13();
        this.instance_22.setTransform(436, 57, 0.57, 0.57);

        this.addChild(this.roundRect1, this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6,
            this.instance_7, this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12, this.instance_13, this.instance_14,
            this.instance_15, this.instance_16, this.instance_17, this.instance_18, this.instance_19, this.instance_20, this.instance_21, this.instance_22);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 160);

    (lib.Symbol4 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Skriv siffrorna som saknas i talraden.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 136, 12);
        this.roundRect1.setTransform(30, 20);

        this.addChild(this.headerCircle, this.text_1, this.roundRect1);

        var spl_Text = ['1', '2', ' ', ' ', '2', ' ', ' ', ' ', '3', '1', ' ', ' ', '1', ' ', '3']
        var count = 0;

        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 9; col++) {

                if (row == 1 && col > 5) {
                    continue
                }

                var fillText = spl_Text[count];
                count = count + 1;

                if (row == 0 && col < 3) {
                    col_X = 56;
                } else if ((row == 0 && col > 2) && (row == 0 && col < 6)) {
                    col_X = 119;
                } else if (row == 0 && col > 5) {
                    col_X = 182;
                } else if (row == 1 && col < 3) {
                    col_X = 133;
                } else if ((row == 1 && col > 2) && (row == 1 && col < 6)) {
                    col_X = 196;
                }

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(1).drawRect(0, 0, 30, 36);
                this.Rect1.setTransform(col_X + (col * 30), 40 + (row * 63));

                this.text_2 = new cjs.Text('' + fillText, "40px 'UusiTekstausMajema'");
                this.text_2.setTransform(col_X + 7 + (col * 30), 71 + (row * 63));

                this.addChild(this.Rect1, this.text_2);
            }
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 136);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 58, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 258, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(307, 460, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
