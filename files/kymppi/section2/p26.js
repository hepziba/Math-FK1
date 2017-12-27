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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p26_11.png");
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
    }).prototype.exec = function() {
        setLineDash(this.instr);
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p26_1.png",
            id: "p26_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p26_2.png",
            id: "p26_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p26_3.png",
            id: "p26_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p26_4.png",
            id: "p26_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p26_5.png",
            id: "p26_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p26_6.png",
            id: "p26_6"       
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/even_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p26_1 = function() {
        this.initialize(img.p26_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p26_2 = function() {
        this.initialize(img.p26_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p26_3 = function() {
        this.initialize(img.p26_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p26_4 = function() {
        this.initialize(img.p26_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p26_5 = function() {
        this.initialize(img.p26_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p26_6 = function() {
        this.initialize(img.p26_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("26", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Geometriska kroppar", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 32);

        this.text_1 = new cjs.Text("Måla likadana kroppar i samma färg.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 37);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 109, 12);
        this.roundRect1.setTransform(30, 62);

        this.instance_1 = new lib.p26_1();
        this.instance_1.setTransform(350, 0, 0.55, 0.52);

        this.instance_2 = new lib.p26_2();
        this.instance_2.setTransform(65, 102, 0.85, 0.85);

        this.instance_3 = new lib.p26_3();
        this.instance_3.setTransform(190, 94, 0.85, 0.85);

        this.instance_4 = new lib.p26_4();
        this.instance_4.setTransform(312, 77, 0.8, 0.8);

        this.instance_5 = new lib.p26_5();
        this.instance_5.setTransform(415, 77, 0.85, 0.85);

        this.instance_6 = new lib.p26_6();
        this.instance_6.setTransform(0, 500, 0.41, 0.41);

        this.addChild(this.headerCircle, this.text_1, this.roundRect1, this.instance_1, this.instance_2, this.instance_3, this.instance_4,
            this.instance_5, this.instance_6);

        this.circleShape1 = new cjs.Shape();
        this.circleShape1.graphics.f("#ffffff").s("#31B1C9").ss(1, 0, 0, 4).arc(0, 0, 34, 0, 2 * Math.PI);
        this.circleShape1.setTransform(67, 437);

        this.circleShape2 = new cjs.Shape();
        this.circleShape2.graphics.f("#ffffff").s("#31B1C9").ss(1, 0, 0, 4).arc(0, 0, 47, 0, 2 * Math.PI);
        this.circleShape2.setTransform(435, 337);

        this.circleShape3 = new cjs.Shape();
        this.circleShape3.graphics.f("#ffffff").s("#31B1C9").ss(1, 0, 0, 4).arc(0, 0, 22, 0, 2 * Math.PI);
        this.circleShape3.setTransform(355, 545);

        this.addChild(this.circleShape1, this.circleShape2, this.circleShape3);

        this.CubeShape1 = new cjs.Shape();
        this.CubeShape1.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(48, -15).lineTo(48, -72).lineTo(10, -80).lineTo(-30, -75)
            .lineTo(-30, -20).lineTo(0, 0).moveTo(0, 0).lineTo(0, -65).lineTo(48, -72).moveTo(0, -65).lineTo(-30, -75);
        this.CubeShape1.setTransform(242, 287);

        this.CubeShape2 = new cjs.Shape();
        this.CubeShape2.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(25, -15).lineTo(25, -57).lineTo(-10, -62).lineTo(-35, -55)
            .lineTo(-35, -10).lineTo(0, 0).moveTo(0, 0).lineTo(0, -50).lineTo(25, -57).moveTo(0, -50).lineTo(-35, -55);
        this.CubeShape2.setTransform(184, 566);

        this.CubeShape3 = new cjs.Shape();
        this.CubeShape3.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(28, -8).lineTo(28, -40).lineTo(9, -45).lineTo(-16, -42)
            .lineTo(-16, -10).lineTo(0, 0).moveTo(0, 0).lineTo(0, -37).lineTo(28, -40).moveTo(0, -37).lineTo(-16, -42);
        this.CubeShape3.setTransform(448, 522);

        this.addChild(this.CubeShape1, this.CubeShape2, this.CubeShape3);

        var pyramidContainer1 = new cjs.Container();

        this.ellipse_1 = new cjs.Shape();
        this.ellipse_1.graphics.f("").s("#31B1C9").ss(1, 0, 0, 4).arc(0, 0, 23, 0, 2 * Math.PI);
        this.ellipse_1.setTransform(80, 237, 2, 0.85);

        this.shapeGroup_1 = new cjs.Shape();
        this.shapeGroup_1.graphics.f("").s("#31B1C9").ss(1).moveTo(43, 0).lineTo(0, 114).lineTo(-47, 0);
        this.shapeGroup_1.setTransform(82, 242);

        pyramidContainer1.addChild(this.ellipse_1, this.shapeGroup_1);

        var pyramidContainer2 = new cjs.Container();

        this.ellipse_2 = new cjs.Shape();
        this.ellipse_2.graphics.f("").s("#31B1C9").ss(1.5, 0, 0, 4).arc(0, 0, 23, 0, 2 * Math.PI);
        this.ellipse_2.setTransform(296, 367, 1.65, 0.48);

        this.shapeGroup_2 = new cjs.Shape();
        this.shapeGroup_2.graphics.f("").s("#31B1C9").ss(1).moveTo(-35, 58).lineTo(0, 0).lineTo(38, 58);
        this.shapeGroup_2.setTransform(294, 305);

        pyramidContainer2.addChild(this.ellipse_2, this.shapeGroup_2);

        var pyramidContainer3 = new cjs.Container();

        this.ellipse_3 = new cjs.Shape();
        this.ellipse_3.graphics.f("").s("#31B1C9").ss(1.5, 0, 0, 4).arc(0, 0, 23, 0, 2 * Math.PI);
        this.ellipse_3.setTransform(280, 499, 1.4, 0.6);

        this.shapeGroup_3 = new cjs.Shape();
        this.shapeGroup_3.graphics.f("").s("#31B1C9").ss(1).moveTo(-32, 82).lineTo(0, 0).lineTo(31, 80);
        this.shapeGroup_3.setTransform(280, 414);

        pyramidContainer3.addChild(this.ellipse_3, this.shapeGroup_3);

        this.addChild(pyramidContainer1, pyramidContainer2, pyramidContainer3);

        var CylinderContainer1 = new cjs.Container();

        this.ellipse_4 = new cjs.Shape();
        this.ellipse_4.graphics.f("").s("#31B1C9").ss(1.5, 0, 0, 4).arc(0, 0, 23, 0, 2 * Math.PI);
        this.ellipse_4.setTransform(180, 332, 1.15, 0.5);

        this.vrLine_1 = new cjs.Shape();
        this.vrLine_1.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(0, 117).moveTo(54, 0).lineTo(54, 117);
        this.vrLine_1.setTransform(153, 332);

        var Arc_1 = new createjs.Shape();
        Arc_1.graphics.s('#31B1C9').ss(1).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(203, 304)
            .bezierCurveTo(174, 321, 157, 322, 137, 304);

        Arc_1.setTransform(41.25, 201, 0.815, 0.815);

        CylinderContainer1.addChild(this.ellipse_4, this.vrLine_1, Arc_1);

        var CylinderContainer2 = new cjs.Container();

        this.ellipse_5 = new cjs.Shape();
        this.ellipse_5.graphics.f("").s("#31B1C9").ss(2, 0, 0, 4).arc(0, 0, 23, 0, 2 * Math.PI);
        this.ellipse_5.setTransform(372, 245, 0.35, 0.75);

        this.hrLine_1 = new cjs.Shape();
        this.hrLine_1.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(100, 0).moveTo(0, 35).lineTo(100, 35);
        this.hrLine_1.setTransform(373, 227);

        var Arc_2 = new createjs.Shape();
        Arc_2.graphics.s('#31B1C9').ss(1.2).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(482, 25)
            .bezierCurveTo(490, 30, 494, 58, 482, 69);
        Arc_2.setTransform(-8.5, 206.5, 1, 0.813);

        CylinderContainer2.addChild(this.ellipse_5, this.hrLine_1, Arc_2);

        var CylinderContainer3 = new cjs.Container();

        this.ellipse_6 = new cjs.Shape();
        this.ellipse_6.graphics.f("").s("#31B1C9").ss(2, 0, 0, 4).arc(0, 0, 23, 0, 2 * Math.PI);
        this.ellipse_6.setTransform(370, 414, 1.4, 0.3);

        this.vrLine_2 = new cjs.Shape();
        this.vrLine_2.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(0, 34).moveTo(65.5, 0).lineTo(65.5, 34);
        this.vrLine_2.setTransform(337, 416);

        var Arc_3 = new createjs.Shape();
        Arc_3.graphics.s('#31B1C9').ss(1).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(203, 304)
            .bezierCurveTo(184, 321, 157, 322, 137, 304);

        Arc_3.setTransform(199.5, 201, 1, 0.815);

        CylinderContainer3.addChild(this.ellipse_6, this.vrLine_2, Arc_3);

        this.addChild(CylinderContainer1, CylinderContainer2, CylinderContainer3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 515, 630);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 15, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
