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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p19_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p41_1.png",
            id: "p41_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p41_2.png",
            id: "p41_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p41_3.png",
            id: "p41_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p41_4.png",
            id: "p41_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p41_5.png",
            id: "p41_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p41_6.png",
            id: "p41_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p41_7.png",
            id: "p41_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p41_8.png",
            id: "p41_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p41_9.png",
            id: "p41_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p41_10.png",
            id: "p41_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/odd_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.p41_1 = function() {
        this.initialize(img.p41_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p41_2 = function() {
        this.initialize(img.p41_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p41_3 = function() {
        this.initialize(img.p41_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p41_4 = function() {
        this.initialize(img.p41_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p41_5 = function() {
        this.initialize(img.p41_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p41_6 = function() {
        this.initialize(img.p41_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p41_7 = function() {
        this.initialize(img.p41_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p41_8 = function() {
        this.initialize(img.p41_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p41_9 = function() {
        this.initialize(img.p41_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p41_10 = function() {
        this.initialize(img.p41_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("41", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Begreppet tillsammans", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(430, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Dra streck mellan 2 tallrikar så att det är 9 tillsammans.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 242, 12);
        this.roundRect1.setTransform(30, 20);

        this.addChild(this.roundRect1);

        this.instance_1 = new lib.p41_1();
        this.instance_1.setTransform(58, 110, 0.55, 0.55);

        this.instance_2 = new lib.p41_2();
        this.instance_2.setTransform(98, 42, 0.55, 0.55);

        this.instance_3 = new lib.p41_3();
        this.instance_3.setTransform(205, 31, 0.55, 0.55);

        this.instance_4 = new lib.p41_4();
        this.instance_4.setTransform(317, 44, 0.55, 0.55);

        this.instance_5 = new lib.p41_5();
        this.instance_5.setTransform(363, 111, 0.55, 0.55);

        this.instance_6 = new lib.p41_6();
        this.instance_6.setTransform(310, 177, 0.55, 0.55);

        this.instance_7 = new lib.p41_7();
        this.instance_7.setTransform(205, 188, 0.55, 0.55);

        this.instance_8 = new lib.p41_8();
        this.instance_8.setTransform(99, 175, 0.55, 0.55);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 280);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Dra streck från 1 till 10.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var col = 0; col < 2; col++) {

            this.roundRect1 = new cjs.Shape();
            this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 235, 242, 12);
            this.roundRect1.setTransform(15 + (col * 255), 20);

            this.addChild(this.roundRect1);
        }

        this.instance_1 = new lib.p41_9();
        this.instance_1.setTransform(38, 34, 0.47, 0.47);

        this.dot1 = new cjs.Shape();
        this.dot1.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot1.setTransform(167, 232);

        this.dot2 = new cjs.Shape();
        this.dot2.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot2.setTransform(210, 232);

        this.dot3 = new cjs.Shape();
        this.dot3.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot3.setTransform(210, 130);

        this.dot4 = new cjs.Shape();
        this.dot4.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot4.setTransform(121, 56);

        this.dot5 = new cjs.Shape();
        this.dot5.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot5.setTransform(42, 132);

        this.dot6 = new cjs.Shape();
        this.dot6.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot6.setTransform(42, 232);

        this.dot7 = new cjs.Shape();
        this.dot7.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot7.setTransform(90, 232);

        this.dot8 = new cjs.Shape();
        this.dot8.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot8.setTransform(90, 178);

        this.dot9 = new cjs.Shape();
        this.dot9.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot9.setTransform(150, 178);

        this.dot10 = new cjs.Shape();
        this.dot10.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot10.setTransform(150, 232);

        this.addChild(this.instance_1, this.dot1, this.dot2, this.dot3, this.dot4, this.dot5, this.dot6, this.dot7, this.dot8,
            this.dot9, this.dot10);

        this.text1 = new cjs.Text("1", "14px 'ElisarDTInfant-SemiBold'");
        this.text1.setTransform(163, 247);

        this.text2 = new cjs.Text("2", "14px 'ElisarDTInfant-SemiBold'");
        this.text2.setTransform(205, 247);

        this.text3 = new cjs.Text("3", "14px 'ElisarDTInfant-SemiBold'");
        this.text3.setTransform(205, 125);

        this.text4 = new cjs.Text("4", "14px 'ElisarDTInfant-SemiBold'");
        this.text4.setTransform(115, 50);

        this.text5 = new cjs.Text("5", "14px 'ElisarDTInfant-SemiBold'");
        this.text5.setTransform(32, 126);

        this.text6 = new cjs.Text("6", "14px 'ElisarDTInfant-SemiBold'");
        this.text6.setTransform(36, 247);

        this.text7 = new cjs.Text("7", "14px 'ElisarDTInfant-SemiBold'");
        this.text7.setTransform(84, 247);

        this.text8 = new cjs.Text("8", "14px 'ElisarDTInfant-SemiBold'");
        this.text8.setTransform(75, 183);

        this.text9 = new cjs.Text("9", "14px 'ElisarDTInfant-SemiBold'");
        this.text9.setTransform(155, 181);

        this.text10 = new cjs.Text("10", "14px 'ElisarDTInfant-SemiBold'");
        this.text10.setTransform(140, 247);

        this.hrline_1 = new cjs.Shape();
        this.hrline_1.graphics.f("#000000").s("#000000").ss(0.7).moveTo(0, 0).lineTo(9, 0);
        this.hrline_1.setTransform(154, 232);

        this.addChild(this.text1, this.text2, this.text3, this.text4, this.text5, this.text6, this.text7, this.text8,
            this.text9, this.text10, this.hrline_1);

        this.instance_2 = new lib.p41_10();
        this.instance_2.setTransform(300, 35, 0.5, 0.5);

        this.dot11 = new cjs.Shape();
        this.dot11.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot11.setTransform(372, 167);

        this.dot12 = new cjs.Shape();
        this.dot12.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot12.setTransform(305, 167);

        this.dot13 = new cjs.Shape();
        this.dot13.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot13.setTransform(317, 198);

        this.dot14 = new cjs.Shape();
        this.dot14.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot14.setTransform(467, 198);

        this.dot15 = new cjs.Shape();
        this.dot15.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot15.setTransform(478, 167);

        this.dot16 = new cjs.Shape();
        this.dot16.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot16.setTransform(387, 167);

        this.dot17 = new cjs.Shape();
        this.dot17.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot17.setTransform(387, 69);

        this.dot18 = new cjs.Shape();
        this.dot18.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot18.setTransform(320, 142);

        this.dot19 = new cjs.Shape();
        this.dot19.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot19.setTransform(430, 142);

        this.dot20 = new cjs.Shape();
        this.dot20.graphics.f("#000000").s("#000000").ss(0.7, 0, 0, 4).arc(0, 0, 2.25, 0, 2 * Math.PI);
        this.dot20.setTransform(396, 77);

        this.addChild(this.instance_2, this.dot11, this.dot12, this.dot13, this.dot14, this.dot15, this.dot16, this.dot17, this.dot18,
            this.dot19, this.dot20);

        this.text11 = new cjs.Text("1", "14px 'ElisarDTInfant-SemiBold'");
        this.text11.setTransform(364, 161);

        this.text12 = new cjs.Text("2", "14px 'ElisarDTInfant-SemiBold'");
        this.text12.setTransform(299, 161);

        this.text13 = new cjs.Text("3", "14px 'ElisarDTInfant-SemiBold'");
        this.text13.setTransform(319, 195);

        this.text14 = new cjs.Text("4", "14px 'ElisarDTInfant-SemiBold'");
        this.text14.setTransform(470, 198);

        this.text15 = new cjs.Text("5", "14px 'ElisarDTInfant-SemiBold'");
        this.text15.setTransform(468, 161);

        this.text16 = new cjs.Text("6", "14px 'ElisarDTInfant-SemiBold'");
        this.text16.setTransform(377, 161);

        this.text17 = new cjs.Text("7", "14px 'ElisarDTInfant-SemiBold'");
        this.text17.setTransform(382, 64);

        this.text18 = new cjs.Text("8", "14px 'ElisarDTInfant-SemiBold'");
        this.text18.setTransform(307, 140);

        this.text19 = new cjs.Text("9", "14px 'ElisarDTInfant-SemiBold'");
        this.text19.setTransform(432, 144);

        this.text20 = new cjs.Text("10", "14px 'ElisarDTInfant-SemiBold'");
        this.text20.setTransform(397, 81);

        this.hrline_2 = new cjs.Shape();
        this.hrline_2.graphics.f("#000000").s("#000000").ss(0.7).moveTo(0, 0).lineTo(7.5, 0);
        this.hrline_2.setTransform(375.5, 167);

        this.addChild(this.text11, this.text12, this.text13, this.text14, this.text15, this.text16, this.text17, this.text18,
            this.text19, this.text20, this.hrline_2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 285);

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
