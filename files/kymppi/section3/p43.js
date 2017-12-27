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
            src: "images/p43_1.png",
            id: "p43_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/odd_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.p43_1 = function() {
        this.initialize(img.p43_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("43", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Geometriska figurer", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(445, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Vilka saker, inne och ute, ser ut som de här figurerna? Leta och rita.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 2; col++) {
                if (row == 1 && col == 1) {
                    continue;
                }

                this.roundRect1 = new cjs.Shape();
                this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 218, 163, 12);
                this.roundRect1.setTransform(30 + (col * 237), 20 + (row * 181));

                this.addChild(this.roundRect1);
            }
        }

        this.circleShape1 = new cjs.Shape();
        this.circleShape1.graphics.f("#ffffff").s("#31B1C9").ss(1, 0, 0, 4).arc(0, 0, 11, 0, 2 * Math.PI);
        this.circleShape1.setTransform(59, 42);

        this.triangleShape1 = new cjs.Shape();
        this.triangleShape1.graphics.f("#ffffff").s("#31B1C9").ss(0.7).moveTo(0, 0).lineTo(20, 0).lineTo(10, -20).lineTo(0, 0);
        this.triangleShape1.setTransform(288, 50);

        this.Rect1 = new cjs.Shape();
        this.Rect1.graphics.f("#ffffff").s("#31B1C9").ss(0.7).drawRect(0, 0, 20, 20);
        this.Rect1.setTransform(50, 220);

        this.Rect2 = new cjs.Shape();
        this.Rect2.graphics.f("#ffffff").s("#31B1C9").ss(0.7).drawRect(0, 0, 45, 20);
        this.Rect2.setTransform(80, 220);

        this.instance_1 = new lib.p43_1();
        this.instance_1.setTransform(265, 198, 0.47, 0.47);

        this.addChild(this.circleShape1, this.triangleShape1, this.Rect1, this.Rect2, this.instance_1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 515, 415);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Fortsätt att rita och måla mönstret.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 12; col++) {

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 38, 35);
                this.Rect1.setTransform(30 + (col * 38), 20 + (row * 52));

                this.addChild(this.Rect1);
            }
        }
        //circle
        var fillColor = "#ffffff";
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 6; col++) {
                if (row == 0) {
                    fillColor = "#F4A327";
                } else if (row == 1) {
                    fillColor = "#D03268";
                } else if (row == 2) {
                    fillColor = "#33A344";
                }

                if ((row == 0 && col == 0) || (row == 0 && col == 2) || (row == 0 && col == 4)) {
                    continue;
                }
                if ((row == 1 && col == 2) || (row == 1 && col == 5)) {
                    continue;
                }
                if ((row == 2 && col == 0) || (row == 2 && col == 3)) {
                    continue;
                }

                this.circleShape1 = new cjs.Shape();
                this.circleShape1.graphics.f(fillColor).s("#ffffff").ss(1, 0, 0, 4).arc(0, 0, 11, 0, 2 * Math.PI);
                this.circleShape1.setTransform(49 + (col * 38), 38 + (row * 52));

                this.addChild(this.circleShape1);
            }
        }

        //rectangle

        var fillColor = "#ffffff";
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 5; col++) {
                if (row == 0) {
                    fillColor = "#31B1C9";
                } else if (row == 2) {
                    fillColor = "#F4A327";
                }

                if ((row == 0 && col == 1) || (row == 0 && col == 3) || (row == 0 && col == 5)) {
                    continue;
                }
                if (row == 1) {
                    continue;
                }
                if ((row == 2 && col == 1) || (row == 2 && col == 2) || (row == 2 && col == 4)) {
                    continue;
                }

                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f(fillColor).s("#ffffff").ss(1).drawRect(0, 0, 22, 22);
                this.Rect1.setTransform(38 + (col * 38), 27 + (row * 52));

                this.addChild(this.Rect1);
            }
        }

        //triangle

        var fillColor = "#908EC1";

        for (var col = 0; col < 6; col++) {
            if (col == 0 || col == 1 || col == 3 || col == 4) {
                continue;
            }

            this.triangleShape1 = new cjs.Shape();
            this.triangleShape1.graphics.f(fillColor).s("#ffffff").ss(0.7).moveTo(0, 0).lineTo(20, 0).lineTo(10, -20).lineTo(0, 0);
            this.triangleShape1.setTransform(39 + (col * 38), 98);

            this.addChild(this.triangleShape1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 160);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 56, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 455, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
