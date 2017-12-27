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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_1.png",
            id: "p29_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_2.png",
            id: "p29_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_3.png",
            id: "p29_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_4.png",
            id: "p29_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_5.png",
            id: "p29_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_6.png",
            id: "p29_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_7.png",
            id: "p29_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_8.png",
            id: "p29_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_9.png",
            id: "p29_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_10.png",
            id: "p29_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_11.png",
            id: "p29_11"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_12.png",
            id: "p29_12"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_13.png",
            id: "p29_13"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_14.png",
            id: "p29_14"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_15.png",
            id: "p29_15"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_16.png",
            id: "p29_16"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_17.png",
            id: "p29_17"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p29_18.png",
            id: "p29_18"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/odd_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p29_1 = function() {
        this.initialize(img.p29_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_2 = function() {
        this.initialize(img.p29_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_3 = function() {
        this.initialize(img.p29_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_4 = function() {
        this.initialize(img.p29_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_5 = function() {
        this.initialize(img.p29_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_6 = function() {
        this.initialize(img.p29_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_7 = function() {
        this.initialize(img.p29_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_8 = function() {
        this.initialize(img.p29_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_9 = function() {
        this.initialize(img.p29_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_10 = function() {
        this.initialize(img.p29_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_11 = function() {
        this.initialize(img.p29_11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_12 = function() {
        this.initialize(img.p29_12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_13 = function() {
        this.initialize(img.p29_13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_14 = function() {
        this.initialize(img.p29_14);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_15 = function() {
        this.initialize(img.p29_15);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_16 = function() {
        this.initialize(img.p29_16);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_17 = function() {
        this.initialize(img.p29_17);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p29_18 = function() {
        this.initialize(img.p29_18);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("29", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Siffra – antal", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(470, 665);

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
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 106, 12);
        this.roundRect1.setTransform(30, 20);

        this.addChild(this.roundRect1);

        //row-1

        this.instance_1 = new lib.p29_1();
        this.instance_1.setTransform(48, 27, 0.53, 0.53);

        this.instance_2 = new lib.p29_4();
        this.instance_2.setTransform(121, 39, 0.38, 0.38);

        this.instance_3 = new lib.p29_5();
        this.instance_3.setTransform(155, 34, 0.38, 0.38);

        this.instance_4 = new lib.p29_6();
        this.instance_4.setTransform(200, 34, 0.38, 0.38);

        this.instance_5 = new lib.p29_7();
        this.instance_5.setTransform(248, 44, 0.38, 0.38);

        this.instance_6 = new lib.p29_5();
        this.instance_6.setTransform(303, 35, 0.38, 0.38);

        this.instance_7 = new lib.p29_6();
        this.instance_7.setTransform(348, 34, 0.38, 0.38);

        this.instance_8 = new lib.p29_16();
        this.instance_8.setTransform(393, 36, 0.38, 0.38);

        this.instance_9 = new lib.p29_17();
        this.instance_9.setTransform(437, 49, 0.38, 0.38);

        this.instance_10 = new lib.p29_7();
        this.instance_10.setTransform(126, 78, 0.38, 0.38);

        this.instance_11 = new lib.p29_5();
        this.instance_11.setTransform(183, 68, 0.38, 0.38);

        this.instance_12 = new lib.p29_4();
        this.instance_12.setTransform(223, 80, 0.38, 0.38);

        this.instance_13 = new lib.p29_18();
        this.instance_13.setTransform(262, 88, 0.38, 0.38);

        this.instance_14 = new lib.p29_4();
        this.instance_14.setTransform(306, 65, 0.38, 0.38);

        this.instance_15 = new lib.p29_17();
        this.instance_15.setTransform(352, 83, 0.38, 0.38);

        this.instance_16 = new lib.p29_18();
        this.instance_16.setTransform(405, 80, 0.38, 0.38);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9, this.instance_10,
            this.instance_11, this.instance_12, this.instance_13, this.instance_14, this.instance_15, this.instance_16);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 120);

    (lib.Symbol3 = function() {
        this.initialize();

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 106, 12);
        this.roundRect1.setTransform(30, 0);

        this.addChild(this.roundRect1);

        this.instance_1 = new lib.p29_2();
        this.instance_1.setTransform(46, 10, 0.53, 0.53);

        this.instance_2 = new lib.p29_8();
        this.instance_2.setTransform(131, 15, 0.38, 0.38);

        this.instance_3 = new lib.p29_9();
        this.instance_3.setTransform(174, 10, 0.38, 0.38);

        this.instance_4 = new lib.p29_10();
        this.instance_4.setTransform(155, 42, 0.38, 0.38);

        this.instance_5 = new lib.p29_11();
        this.instance_5.setTransform(125, 73, 0.38, 0.38);

        this.instance_6 = new lib.p29_11();
        this.instance_6.setTransform(190, 53, 0.38, 0.38);

        this.instance_7 = new lib.p29_10();
        this.instance_7.setTransform(223, 29, 0.38, 0.38);

        this.instance_8 = new lib.p29_9();
        this.instance_8.setTransform(224, 70, 0.38, 0.38);

        this.instance_9 = new lib.p29_8();
        this.instance_9.setTransform(260, 20, 0.38, 0.38);

        this.instance_10 = new lib.p29_10();
        this.instance_10.setTransform(260, 63, 0.38, 0.38);

        this.instance_11 = new lib.p29_11();
        this.instance_11.setTransform(299, 13, 0.38, 0.38);

        this.instance_12 = new lib.p29_9();
        this.instance_12.setTransform(302, 53, 0.38, 0.38);

        this.instance_13 = new lib.p29_9();
        this.instance_13.setTransform(343, 16, 0.38, 0.38);

        this.instance_14 = new lib.p29_8();
        this.instance_14.setTransform(343, 57, 0.38, 0.38);

        this.instance_15 = new lib.p29_8();
        this.instance_15.setTransform(383, 21, 0.38, 0.38);

        this.instance_16 = new lib.p29_11();
        this.instance_16.setTransform(383, 67, 0.38, 0.38);

        this.instance_17 = new lib.p29_10();
        this.instance_17.setTransform(422, 11, 0.38, 0.38);

        this.instance_18 = new lib.p29_9();
        this.instance_18.setTransform(417, 49, 0.38, 0.38);

        this.instance_19 = new lib.p29_11();
        this.instance_19.setTransform(452, 42, 0.38, 0.38);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12, this.instance_13, this.instance_14,
            this.instance_15, this.instance_16, this.instance_17, this.instance_18, this.instance_19);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 100);

    (lib.Symbol4 = function() {
        this.initialize();

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 106, 12);
        this.roundRect1.setTransform(30, 0);

        this.addChild(this.roundRect1);

        this.instance_1 = new lib.p29_3();
        this.instance_1.setTransform(48, 10, 0.53, 0.53);

        this.instance_2 = new lib.p29_12();
        this.instance_2.setTransform(143, 17, 0.38, 0.38);

        this.instance_3 = new lib.p29_14();
        this.instance_3.setTransform(145, 66, 0.38, 0.38);

        this.instance_4 = new lib.p29_13();
        this.instance_4.setTransform(188, 38, 0.38, 0.38);

        this.instance_5 = new lib.p29_12();
        this.instance_5.setTransform(194, 69, 0.38, 0.38);

        this.instance_6 = new lib.p29_14();
        this.instance_6.setTransform(233, 14, 0.38, 0.38);

        this.instance_7 = new lib.p29_15();
        this.instance_7.setTransform(238, 69, 0.38, 0.38);

        this.instance_8 = new lib.p29_13();
        this.instance_8.setTransform(279, 26, 0.38, 0.38);

        this.instance_9 = new lib.p29_12();
        this.instance_9.setTransform(287, 68, 0.38, 0.38);

        this.instance_10 = new lib.p29_15();
        this.instance_10.setTransform(318, 22, 0.38, 0.38);

        this.instance_11 = new lib.p29_13();
        this.instance_11.setTransform(339, 64, 0.38, 0.38);

        this.instance_12 = new lib.p29_14();
        this.instance_12.setTransform(362, 14, 0.38, 0.38);

        this.instance_13 = new lib.p29_14();
        this.instance_13.setTransform(388, 53, 0.38, 0.38);

        this.instance_14 = new lib.p29_15();
        this.instance_14.setTransform(418, 14, 0.38, 0.38);

        this.instance_15 = new lib.p29_12();
        this.instance_15.setTransform(439, 63, 0.38, 0.38);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7, this.instance_8, this.instance_9, this.instance_10,
            this.instance_11, this.instance_12, this.instance_13, this.instance_14, this.instance_15);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 100);

    (lib.Symbol5 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Rita till så att det är 7 tillsammans.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var col = 0; col < 3; col++) {

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#31B1C9").ss(0.7).drawRoundRect(0, 0, 142, 139, 12);
            this.Rect1.setTransform(30 + (col * 158), 21);

            this.addChild(this.Rect1);
        }

        this.circleShape1 = new cjs.Shape();
        this.circleShape1.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape1.setTransform(60, 67);

        this.circleShape2 = new cjs.Shape();
        this.circleShape2.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape2.setTransform(90, 45);

        this.circleShape3 = new cjs.Shape();
        this.circleShape3.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape3.setTransform(125, 72);

        this.circleShape4 = new cjs.Shape();
        this.circleShape4.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape4.setTransform(117, 135);

        this.triangleShape1 = new cjs.Shape();
        this.triangleShape1.graphics.f("#908EC1").s("#908EC1").ss(0.5).moveTo(0, 0).lineTo(20, 0).lineTo(10, -17).lineTo(0, 0);
        this.triangleShape1.setTransform(285, 58);

        this.triangleShape2 = new cjs.Shape();
        this.triangleShape2.graphics.f("#908EC1").s("#908EC1").ss(0.5).moveTo(0, 0).lineTo(20, 0).lineTo(10, -17).lineTo(0, 0);
        this.triangleShape2.setTransform(235, 92);

        this.triangleShape3 = new cjs.Shape();
        this.triangleShape3.graphics.f("#908EC1").s("#908EC1").ss(0.5).moveTo(0, 0).lineTo(20, 0).lineTo(10, -17).lineTo(0, 0);
        this.triangleShape3.setTransform(270, 130);

        this.squareShape1 = new cjs.Shape();
        this.squareShape1.graphics.f("#8CB93B").s("#8CB93B").ss(1).drawRect(0, 0, 21, 21);
        this.squareShape1.setTransform(370, 37);

        this.squareShape2 = new cjs.Shape();
        this.squareShape2.graphics.f("#8CB93B").s("#8CB93B").ss(1).drawRect(0, 0, 21, 21);
        this.squareShape2.setTransform(415, 45);

        this.squareShape3 = new cjs.Shape();
        this.squareShape3.graphics.f("#8CB93B").s("#8CB93B").ss(1).drawRect(0, 0, 21, 21);
        this.squareShape3.setTransform(380, 85);

        this.squareShape4 = new cjs.Shape();
        this.squareShape4.graphics.f("#8CB93B").s("#8CB93B").ss(1).drawRect(0, 0, 21, 21);
        this.squareShape4.setTransform(435, 80);

        this.squareShape5 = new cjs.Shape();
        this.squareShape5.graphics.f("#8CB93B").s("#8CB93B").ss(1).drawRect(0, 0, 21, 21);
        this.squareShape5.setTransform(360, 122);

        this.addChild(this.circleShape1, this.circleShape2, this.circleShape3, this.circleShape4, this.triangleShape1, this.triangleShape2,
            this.triangleShape3, this.squareShape1, this.squareShape2, this.squareShape3, this.squareShape4, this.squareShape5);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 160);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 57, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 199, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(307, 321, 1, 1, 0, 0, 0, 254.6, 0);

        this.v4 = new lib.Symbol5();
        this.v4.setTransform(307, 463, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3, this.v4);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
