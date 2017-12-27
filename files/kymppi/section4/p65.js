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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p65_1.png",
            id: "p65_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p65_2.png",
            id: "p65_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p65_3.png",
            id: "p65_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p65_4.png",
            id: "p65_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p65_5.png",
            id: "p65_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p65_6.png",
            id: "p65_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/odd_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p65_1 = function() {
        this.initialize(img.p65_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p65_2 = function() {
        this.initialize(img.p65_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p65_3 = function() {
        this.initialize(img.p65_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p65_4 = function() {
        this.initialize(img.p65_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p65_5 = function() {
        this.initialize(img.p65_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 633, 542);

    (lib.p65_6 = function() {
        this.initialize(img.p65_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("65", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Begreppet subtraktion", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(432, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 0);

        this.text_1 = new cjs.Text("Skriv antal till bilderna.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.Rect1 = new cjs.Shape();
        this.Rect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 155, 12);
        this.Rect1.setTransform(32, 20);

        this.addChild(this.Rect1);

        for (var col = 0; col < 2; col++) {
            var verticalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 20; lineCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(40, 14 + (lineCount * 7));

                verticalLineContainer.addChild(this.vrline_1);
            }
            verticalLineContainer.setTransform(143 + (col * 154), 15);
            this.addChild(verticalLineContainer);
        }

        this.instance_1 = new lib.p65_1();
        this.instance_1.setTransform(47, 37, 0.47, 0.47);

        this.instance_2 = new lib.p65_2();
        this.instance_2.setTransform(221, 59, 0.47, 0.47);

        this.instance_3 = new lib.p65_3();
        this.instance_3.setTransform(352, 42, 0.5, 0.5);

        this.addChild(this.instance_1, this.instance_2, this.instance_3);

        var fillText = " ";
        var text_X = 0;
        for (var col = 0; col < 3; col++) {

            if (col == 0) {
                fillText = "först";
                text_X = 103;
            } else if (col == 1) {
                fillText = "går bort";
                text_X = 103;
            } else {
                fillText = "kvar";
                text_X = 154;
            }

            this.Rect2 = new cjs.Shape();
            this.Rect2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
            this.Rect2.setTransform(140 + (col * 155), 132);

            this.text_2 = new cjs.Text('' + fillText, "17px 'ElisarDTInfant-Regular'");
            this.text_2.setTransform(text_X + (col * 130), 164);

            this.addChild(this.Rect2, this.text_2);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 160);

    (lib.Symbol3 = function() {
        this.initialize();

        this.Rect1 = new cjs.Shape();
        this.Rect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 155, 12);
        this.Rect1.setTransform(32, 0);

        this.addChild(this.Rect1);

        for (var col = 0; col < 2; col++) {
            var verticalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 20; lineCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(40, 14 + (lineCount * 7));

                verticalLineContainer.addChild(this.vrline_1);
            }
            verticalLineContainer.setTransform(143 + (col * 154), -5);
            this.addChild(verticalLineContainer);
        }

        this.instance_1 = new lib.p65_4();
        this.instance_1.setTransform(38, 11, 0.34, 0.34);

        this.instance_2 = new lib.p65_5();
        this.instance_2.setTransform(221, 16, 0.37, 0.37);

        this.instance_3 = new lib.p65_6();
        this.instance_3.setTransform(345, 14, 0.32, 0.32);

        this.addChild(this.instance_1, this.instance_2, this.instance_3);

        var fillText = " ";
        var text_X = 0;
        for (var col = 0; col < 3; col++) {

            if (col == 0) {
                fillText = "först";
                text_X = 103;
            } else if (col == 1) {
                fillText = "går bort";
                text_X = 103;
            } else {
                fillText = "kvar";
                text_X = 154;
            }

            this.Rect2 = new cjs.Shape();
            this.Rect2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
            this.Rect2.setTransform(140 + (col * 155), 112);

            this.text_1 = new cjs.Text('' + fillText, "17px 'ElisarDTInfant-Regular'");
            this.text_1.setTransform(text_X + (col * 130), 144);

            this.addChild(this.Rect2, this.text_1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 150);

    (lib.Symbol4 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Rita och skriv antal.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 163, 12);
        this.roundRect1.setTransform(30, 20);

        this.addChild(this.roundRect1);

        for (var col = 0; col < 2; col++) {

            var verticalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 22; lineCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(40, 22 + (lineCount * 7));

                verticalLineContainer.addChild(this.vrline_1);
            }
            verticalLineContainer.setTransform(143 + (col * 154), 3);
            this.addChild(verticalLineContainer);
        }

        var fillText = " ";
        var text_X = 0;
        for (var col = 0; col < 3; col++) {

            if (col == 0) {
                fillText = "först";
                text_X = 103;
            } else if (col == 1) {
                fillText = "går bort";
                text_X = 103;
            } else {
                fillText = "kvar";
                text_X = 154;
            }

            this.Rect2 = new cjs.Shape();
            this.Rect2.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 27, 33);
            this.Rect2.setTransform(140 + (col * 155), 140);

            this.text_2 = new cjs.Text('' + fillText, "17px 'ElisarDTInfant-Regular'");
            this.text_2.setTransform(text_X + (col * 130), 172);

            this.addChild(this.Rect2, this.text_2);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 170);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 57, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(303, 246, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(303, 437, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
