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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p39_1.png",
            id: "p39_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p39_2.png",
            id: "p39_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p39_3.png",
            id: "p39_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p39_4.png",
            id: "p39_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p39_5.png",
            id: "p39_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p39_6.png",
            id: "p39_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/odd_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.p39_1 = function() {
        this.initialize(img.p39_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p39_2 = function() {
        this.initialize(img.p39_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p39_3 = function() {
        this.initialize(img.p39_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p39_4 = function() {
        this.initialize(img.p39_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p39_5 = function() {
        this.initialize(img.p39_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p39_6 = function() {
        this.initialize(img.p39_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("39", "12px 'ElisarDTInfant-SemiBold'");
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

        this.text_1 = new cjs.Text("Rita.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        var spltext = ['4', '6'];
        var count = 0;

        for (var col = 0; col < 2; col++) {
            var fillText = spltext[count];
            count = count + 1;

            this.roundRect1 = new cjs.Shape();
            this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 218, 170, 12);
            this.roundRect1.setTransform(30 + (col * 237), 20);

            this.text_2 = new cjs.Text('' + fillText, "30px 'ElisarDTInfant-SemiBold'", "#00A3C0");
            this.text_2.setTransform(48 + (col * 237), 58);

            this.addChild(this.roundRect1, this.text_2);
        }

        this.instance_1 = new lib.p39_1();
        this.instance_1.setTransform(72, 34, 0.55, 0.55);

        this.instance_2 = new lib.p39_2();
        this.instance_2.setTransform(315, 35, 0.52, 0.52);

        this.addChild(this.instance_1, this.instance_2);

        var DashedLineContainer1 = new cjs.Container();

        var dot_X = 36,
            dot_Y1 = 76;
        for (var hline = 0; hline < 21; hline++) {

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (hline * 5), dot_Y1);

            DashedLineContainer1.addChild(this.lowerDashedLine_1);
        }

        var dot_X1 = 146,
            dot_Y = 25;
        for (var vline = 0; vline < 9; vline++) {

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
            this.rightDashedLine_1.setTransform(dot_X1, dot_Y + (vline * 5));

            DashedLineContainer1.addChild(this.rightDashedLine_1);
        }

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
        this.lowerRightDashedLine_1.setTransform(146, 70);
        this.lowerRightDashedLine_1.rotation = 15;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(142, 76);
        this.lowerRightDashedLine_2.rotation = -30;

        DashedLineContainer1.addChild(this.lowerRightDashedLine_1, this.lowerRightDashedLine_2);

        DashedLineContainer1.setTransform(0, 0);
        this.addChild(DashedLineContainer1);

        var DashedLineContainer2 = new cjs.Container();

        var dot_X = 36,
            dot_Y1 = 76;
        for (var hline = 0; hline < 21; hline++) {

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (hline * 5), dot_Y1);

            DashedLineContainer2.addChild(this.lowerDashedLine_1);
        }

        var dot_X1 = 146,
            dot_Y = 25;
        for (var vline = 0; vline < 9; vline++) {

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
            this.rightDashedLine_1.setTransform(dot_X1, dot_Y + (vline * 5));

            DashedLineContainer2.addChild(this.rightDashedLine_1);
        }

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
        this.lowerRightDashedLine_1.setTransform(146, 70);
        this.lowerRightDashedLine_1.rotation = 15;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(142, 76);
        this.lowerRightDashedLine_2.rotation = -30;

        DashedLineContainer2.addChild(this.lowerRightDashedLine_1, this.lowerRightDashedLine_2);

        DashedLineContainer2.setTransform(238, 0);
        this.addChild(DashedLineContainer2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 190);

    (lib.Symbol3 = function() {
        this.initialize();

        var spltext = ['8', '7'];
        var count = 0;

        for (var col = 0; col < 2; col++) {
            var fillText = spltext[count];
            count = count + 1;

            this.roundRect1 = new cjs.Shape();
            this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 218, 170, 12);
            this.roundRect1.setTransform(30 + (col * 237), 0);

            this.text_2 = new cjs.Text('' + fillText, "30px 'ElisarDTInfant-SemiBold'", "#00A3C0");
            this.text_2.setTransform(48 + (col * 237), 40);

            this.addChild(this.roundRect1, this.text_2);
        }

        this.instance_1 = new lib.p39_3();
        this.instance_1.setTransform(75, 16, 0.55, 0.55);

        this.instance_2 = new lib.p39_4();
        this.instance_2.setTransform(312, 21, 0.55, 0.55);

        this.addChild(this.instance_1, this.instance_2);

        var DashedLineContainer1 = new cjs.Container();

        var dot_X = 36,
            dot_Y1 = 76;
        for (var hline = 0; hline < 21; hline++) {

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (hline * 5), dot_Y1);

            DashedLineContainer1.addChild(this.lowerDashedLine_1);
        }

        var dot_X1 = 146,
            dot_Y = 25;
        for (var vline = 0; vline < 9; vline++) {

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
            this.rightDashedLine_1.setTransform(dot_X1, dot_Y + (vline * 5));

            DashedLineContainer1.addChild(this.rightDashedLine_1);
        }

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
        this.lowerRightDashedLine_1.setTransform(146, 70);
        this.lowerRightDashedLine_1.rotation = 15;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(142, 76);
        this.lowerRightDashedLine_2.rotation = -30;

        DashedLineContainer1.addChild(this.lowerRightDashedLine_1, this.lowerRightDashedLine_2);

        DashedLineContainer1.setTransform(0, -20);
        this.addChild(DashedLineContainer1);

        var DashedLineContainer2 = new cjs.Container();

        var dot_X = 36,
            dot_Y1 = 76;
        for (var hline = 0; hline < 21; hline++) {

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (hline * 5), dot_Y1);

            DashedLineContainer2.addChild(this.lowerDashedLine_1);

        }

        var dot_X1 = 146,
            dot_Y = 25;
        for (var vline = 0; vline < 9; vline++) {

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
            this.rightDashedLine_1.setTransform(dot_X1, dot_Y + (vline * 5));

            DashedLineContainer2.addChild(this.rightDashedLine_1);

        }

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
        this.lowerRightDashedLine_1.setTransform(146, 70);
        this.lowerRightDashedLine_1.rotation = 15;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(142, 76);
        this.lowerRightDashedLine_2.rotation = -30;

        DashedLineContainer2.addChild(this.lowerRightDashedLine_1, this.lowerRightDashedLine_2);

        DashedLineContainer2.setTransform(238, -20);
        this.addChild(DashedLineContainer2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 160);

    (lib.Symbol4 = function() {
        this.initialize();

        var spltext = ['5', ' '];
        var count = 0;

        for (var col = 0; col < 2; col++) {
            var fillText = spltext[count];
            count = count + 1;

            this.roundRect1 = new cjs.Shape();
            this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 218, 170, 12);
            this.roundRect1.setTransform(30 + (col * 237), 0);

            this.text_2 = new cjs.Text('' + fillText, "30px 'ElisarDTInfant-SemiBold'", "#00A3C0");
            this.text_2.setTransform(48 + (col * 237), 42);

            this.addChild(this.roundRect1, this.text_2);
        }

        this.hrline_1 = new cjs.Shape();
        this.hrline_1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(37, 0);
        this.hrline_1.setTransform(288, 48);

        this.addChild(this.hrline_1);

        this.instance_1 = new lib.p39_5();
        this.instance_1.setTransform(75, 8, 0.5, 0.5);

        this.instance_2 = new lib.p39_6();
        this.instance_2.setTransform(335, 22, 0.55, 0.55);

        this.addChild(this.instance_1, this.instance_2);

        var DashedLineContainer1 = new cjs.Container();

        var dot_X = 36,
            dot_Y1 = 80;
        for (var hline = 0; hline < 21; hline++) {

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (hline * 5), dot_Y1);

            DashedLineContainer1.addChild(this.lowerDashedLine_1);

        }

        var dot_X1 = 146,
            dot_Y = 25;
        for (var vline = 0; vline < 10; vline++) {

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
            this.rightDashedLine_1.setTransform(dot_X1, dot_Y + (vline * 5));

            DashedLineContainer1.addChild(this.rightDashedLine_1);
        }

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
        this.lowerRightDashedLine_1.setTransform(146, 74);
        this.lowerRightDashedLine_1.rotation = 15;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(142, 80);
        this.lowerRightDashedLine_2.rotation = -30;

        DashedLineContainer1.addChild(this.lowerRightDashedLine_1, this.lowerRightDashedLine_2);

        DashedLineContainer1.setTransform(0, -20);
        this.addChild(DashedLineContainer1);

        var DashedLineContainer2 = new cjs.Container();

        var dot_X = 36,
            dot_Y1 = 80;
        for (var hline = 0; hline < 21; hline++) {

            this.lowerDashedLine_1 = new cjs.Shape();
            this.lowerDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
            this.lowerDashedLine_1.setTransform(dot_X + (hline * 5), dot_Y1);

            DashedLineContainer2.addChild(this.lowerDashedLine_1);

        }

        var dot_X1 = 146,
            dot_Y = 25;
        for (var vline = 0; vline < 10; vline++) {

            this.rightDashedLine_1 = new cjs.Shape();
            this.rightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
            this.rightDashedLine_1.setTransform(dot_X1, dot_Y + (vline * 5));

            DashedLineContainer2.addChild(this.rightDashedLine_1);

        }

        //lower Right Corner

        this.lowerRightDashedLine_1 = new cjs.Shape();
        this.lowerRightDashedLine_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(0, 3);
        this.lowerRightDashedLine_1.setTransform(146, 74);
        this.lowerRightDashedLine_1.rotation = 15;

        this.lowerRightDashedLine_2 = new cjs.Shape();
        this.lowerRightDashedLine_2.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.5).moveTo(0, 0).lineTo(3, 0);
        this.lowerRightDashedLine_2.setTransform(142, 80);
        this.lowerRightDashedLine_2.rotation = -30;

        DashedLineContainer2.addChild(this.lowerRightDashedLine_1, this.lowerRightDashedLine_2);

        DashedLineContainer2.setTransform(238, -20);
        this.addChild(DashedLineContainer2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 160);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 56, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 261, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(307, 446, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3); 

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
