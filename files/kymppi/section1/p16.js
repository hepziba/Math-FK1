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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p16_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/p16_1.png",
            id: "p16_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/images/even_pageS1.png",
            id: "pg_num"
        }]
    };

    (lib.p16_1 = function() {
        this.initialize(img.p16_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.heart = function() {
        this.initialize();

        var heartcontainer = new createjs.Container();

        var heart = new createjs.Shape();
        heart.graphics.s('#14B5C9').ss(2).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(201, 126)
            .bezierCurveTo(193, 107, 297, 40, 319, 151)
            .bezierCurveTo(323, 170, 295, 249, 202, 311)
            .bezierCurveTo(198, 314, 117, 246, 101, 214)
            .bezierCurveTo(29, 74, 186, 62, 201, 126);

        heartcontainer.addChild(heart);
        heartcontainer.setTransform(0, 0, 0.5, 0.5);

        return heartcontainer;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.halfCircle = function() {
        this.initialize();

        var halfCirclecontainer = new createjs.Container();

        var halfCircle = new createjs.Shape();
        halfCircle.graphics.s('#14B5C9').ss(2).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(44, 280)
            .bezierCurveTo(44, 89, 339, 46, 358, 280);

        halfCirclecontainer.addChild(halfCircle);
        halfCirclecontainer.setTransform(0, 0, 0.5, 0.5);

        return halfCirclecontainer;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.doubleHalfCircle = function() {
        this.initialize();

        var doubleHalfCirclecontainer = new createjs.Container();

        var outerHalfCircle = new createjs.Shape();
        outerHalfCircle.graphics.s('#14B5C9').ss(2).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(274, 303)
            .bezierCurveTo(76, 354, 77, 40, 274, 96);

        var innerHalfCircle = new createjs.Shape();
        innerHalfCircle.graphics.s('#14B5C9').ss(2).beginRadialGradientFill(["#ffffff", "#ffffff"], [0, 1], 75, 75, 0, 75, 75, 50)
            .moveTo(274, 303)
            .bezierCurveTo(196, 279, 154, 139, 274, 96);

        doubleHalfCirclecontainer.addChild(outerHalfCircle, innerHalfCircle);
        doubleHalfCirclecontainer.setTransform(0, 0, 0.5, 0.5);

        return doubleHalfCirclecontainer;
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 658, 248);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("16", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Begreppet hälften av helhet", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0+35);

        this.text_1 = new cjs.Text("Dela på hälften med ett streck.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5+35);

        this.text_2 = new cjs.Text("Måla ena halvan.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(29, 24+35);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 226, 12);
        this.roundRect1.setTransform(30, 40+35);

        this.instance_1 = new lib.p16_1();
        this.instance_1.setTransform(240, 0, 0.48, 0.48);

        this.addChild(this.headerCircle, this.text_1, this.text_2, this.roundRect1, this.instance_1);

        this.RectShape_1 = new cjs.Shape();
        this.RectShape_1.graphics.f("#ffffff").s("#14B5C9").ss(1).drawRect(0, 0, 74, 74);
        this.RectShape_1.setTransform(60, 60+35);

        this.circleShape_1 = new cjs.Shape();
        this.circleShape_1.graphics.f("#ffffff").s("#14B5C9").ss(1, 0, 0, 4).arc(0, 0, 40, 0, 2 * Math.PI);
        this.circleShape_1.setTransform(205, 99+35);

        this.heart = new lib.heart();
        this.heart.setTransform(235, 27+35, 0.35, 0.35);

        this.halfCircleContainer = new cjs.Container();

        this.halfCircle = new lib.halfCircle();
        this.halfCircle.setTransform(345, 39+35, 0.34, 0.34);

        this.halfCircleLine = new cjs.Shape();
        this.halfCircleLine.graphics.f("").s("#14B5C9").ss(0.7).moveTo(0, 0).lineTo(107, 0)
        this.halfCircleLine.setTransform(360, 134+35);

        this.halfCircleContainer.addChild(this.halfCircle, this.halfCircleLine);

        this.circleshape_2 = new cjs.Shape();
        this.circleshape_2.graphics.f('').s("#14B5C9").ss(0.7).arc(-13, -13, 15, Math.PI * 120 / 180, Math.PI * 330 / 180, false).arc(13, -13, 15, Math.PI * 210 / 180, Math.PI * 60 / 180, false).arc(13, 13, 15, Math.PI * 300 / 180, Math.PI * 150 / 180, false).arc(-13, 13, 15, Math.PI * 30 / 180, Math.PI * 240 / 180, false);
        this.circleshape_2.setTransform(96, 205+35, 1.3, 1.3);
        this.circleshape_2.rotation = 225;

        this.doubleHalfCircle = new lib.doubleHalfCircle
        this.doubleHalfCircle.setTransform(138, 145+35, 0.34, 0.34);

        this.squareShape_1 = new cjs.Shape();
        this.squareShape_1.graphics.f("").s("#14B5C9").ss(1).moveTo(0, 0).lineTo(15, -30).lineTo(46, -46).lineTo(15, -63)
            .lineTo(0, -91).lineTo(-15, -62).lineTo(-44, -46).lineTo(-15, -31).lineTo(0, 0);
        this.squareShape_1.setTransform(302, 250+35);

        this.triangleShape_1 = new cjs.Shape();
        this.triangleShape_1.graphics.f("#ffffff").s("#14B5C9").ss(1).moveTo(0, 0).lineTo(75, 0).lineTo(0, -75).lineTo(0, -0);
        this.triangleShape_1.setTransform(385, 250+35);

        this.addChild(this.RectShape_1, this.circleShape_1, this.heart, this.halfCircleContainer, this.circleshape_2, this.doubleHalfCircle,
            this.squareShape_1, this.triangleShape_1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 515,320);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Måla halvorna i samma färg som den hela.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 239, 12);
        this.roundRect1.setTransform(30, 18);

        this.addChild(this.headerCircle, this.text_1, this.roundRect1);

        this.Shape_1 = new cjs.Shape();
        this.Shape_1.graphics.f("#B0DCE6").s("#000000").ss(1).moveTo(0, 0).lineTo(110, 0).lineTo(110, -55).lineTo(0, -55).lineTo(0, 0)
            .moveTo(0, -55).lineTo(110, 0);
        this.Shape_1.setTransform(50, 82, 0.85, 0.85);

        this.Shape_2 = new cjs.Shape();
        this.Shape_2.graphics.f("#B8AED6").s("#000000").ss(1).moveTo(0, 0).lineTo(80, 0).lineTo(60, -55).lineTo(20, -55).lineTo(0, 0)
            .moveTo(40, -55).lineTo(40, 0);
        this.Shape_2.setTransform(200, 82, 0.85, 0.85);

        this.Shape_3 = new cjs.Shape();
        this.Shape_3.graphics.f("#F8A57B").s("#000000").ss(1).moveTo(0, 0).lineTo(53, 0).lineTo(26, -54).lineTo(0, 0).moveTo(26, 0).lineTo(26, -54);
        this.Shape_3.setTransform(322, 82, 0.85, 0.85);

        this.Shape_4 = new cjs.Shape();
        this.Shape_4.graphics.f("#BDDD9B").s("#000000").ss(1).moveTo(0, 0).lineTo(55, 0).lineTo(55, -55).lineTo(0, -55).lineTo(0, -0)
            .moveTo(0, -55).lineTo(55, 0);
        this.Shape_4.setTransform(415, 82, 0.85, 0.85);

        this.addChild(this.Shape_1, this.Shape_2, this.Shape_3, this.Shape_4);

        for (var col = 0; col < 61; col++) {

            this.hrline_1 = new cjs.Shape();
            this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
            this.hrline_1.setTransform(45 + (col * 7), 101);

            this.addChild(this.hrline_1);
        }

        this.Shape_5 = new cjs.Shape();
        this.Shape_5.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(27, 0).lineTo(0, -50).lineTo(0, 0);
        this.Shape_5.setTransform(70, 165, 0.9, 0.9);

        this.Shape_6 = new cjs.Shape();
        this.Shape_6.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(107, 0).lineTo(0, -53).lineTo(0, 0);
        this.Shape_6.setTransform(145, 165, 0.9, 0.9);

        this.Shape_7 = new cjs.Shape();
        this.Shape_7.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(54, 0).lineTo(0, -53).lineTo(0, 0);
        this.Shape_7.setTransform(291, 165, 0.9, 0.9);

        this.Shape_8 = new cjs.Shape();
        this.Shape_8.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(40, 0).lineTo(20, -53).lineTo(0, -53).lineTo(0, 0);
        this.Shape_8.setTransform(409, 165, 0.9, 0.9);

        this.Shape_9 = new cjs.Shape();
        this.Shape_9.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(0, -53).lineTo(-53, -53).lineTo(0, 0);
        this.Shape_9.setTransform(105, 240, 0.9, 0.9);

        this.Shape_10 = new cjs.Shape();
        this.Shape_10.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(25, 0).lineTo(25, -52).lineTo(0, 0);
        this.Shape_10.setTransform(182, 240, 0.9, 0.9);

        this.Shape_11 = new cjs.Shape();
        this.Shape_11.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(39, 0).lineTo(39, -54).lineTo(18, -54).lineTo(0, 0);
        this.Shape_11.setTransform(273, 240, 0.9, 0.9);

        this.Shape_12 = new cjs.Shape();
        this.Shape_12.graphics.f("").s("#31B1C9").ss(1).moveTo(0, 0).lineTo(0, -55).lineTo(-108, -55).lineTo(0, 0);
        this.Shape_12.setTransform(463, 240, 0.9, 0.9);

        this.addChild(this.Shape_5, this.Shape_6, this.Shape_7, this.Shape_8,
            this.Shape_9, this.Shape_10, this.Shape_11, this.Shape_12);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 515, 320);

    (lib.p6 = function() {
        this.initialize();

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 360, 1, 1, 0, 0, 0, 254.6, 0);

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 22, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
