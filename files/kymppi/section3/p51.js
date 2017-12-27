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

            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/odd_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("51", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Symmetri", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(484, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Måla bilden färdig så att den blir symmetrisk.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        var rectContainer1 = new cjs.Container();

        for (var row = 1; row < 6; row++) {

            this.hrLine1 = new cjs.Shape();
            this.hrLine1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(218, 0);
            this.hrLine1.setTransform(30, 19 + (row * 25.5));

            rectContainer1.addChild(this.hrLine1);
        }

        for (var col = 1; col < 8; col++) {

            this.vrLine1 = new cjs.Shape();
            this.vrLine1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 153);
            this.vrLine1.setTransform(30 + (col * 27.25), 19);

            rectContainer1.addChild(this.vrLine1);
        }

        var fillColor = "#1885C6";
        for (var row = 0; row < 6; row++) {
            for (var col = 0; col < 8; col++) {

                if ((row == 1 && col == 2) || (row == 1 && col == 3) || (row == 2 && col == 2) || (row == 3 && col == 2) || (row == 3 && col == 3)) {

                    this.Rect1 = new cjs.Shape();
                    this.Rect1.graphics.f(fillColor).s("#9DD1DF").ss(1).drawRect(0, 0, 27.25, 25.5);
                    this.Rect1.setTransform(30 + (col * 27.25), 19 + (row * 25.5));

                    rectContainer1.addChild(this.Rect1);
                }
            }
        }

        this.Rect1 = new cjs.Shape();
        this.Rect1.graphics.f("").s("#31B1C9").ss(1).drawRect(0, 0, 218, 153);
        this.Rect1.setTransform(30, 19);

        rectContainer1.addChild(this.Rect1);
        rectContainer1.setTransform(0, 32);

        var rectContainer2 = new cjs.Container();

        for (var row = 1; row < 6; row++) {

            this.hrLine2 = new cjs.Shape();
            this.hrLine2.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(218, 0);
            this.hrLine2.setTransform(30, 19 + (row * 25.5));

            rectContainer2.addChild(this.hrLine2);
        }

        for (var col = 1; col < 8; col++) {

            this.vrLine2 = new cjs.Shape();
            this.vrLine2.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 153);
            this.vrLine2.setTransform(30 + (col * 27.25), 19);

            rectContainer2.addChild(this.vrLine2);
        }

        var fillColor = "#F4A327";
        for (var row = 0; row < 6; row++) {
            for (var col = 0; col < 8; col++) {

                if ((row == 1 && col == 2) || (row == 2 && col == 2) || (row == 3 && col == 2) || (row == 4 && col == 2) || (row == 5 && col == 2) || (row == 3 && col == 3)) {

                    this.Rect_2 = new cjs.Shape();
                    this.Rect_2.graphics.f(fillColor).s("#9DD1DF").ss(1).drawRect(0, 0, 27.25, 25.5);
                    this.Rect_2.setTransform(30 + (col * 27.25), 19 + (row * 25.5));

                    rectContainer2.addChild(this.Rect_2);
                }
            }
        }

        this.Rect_2 = new cjs.Shape();
        this.Rect_2.graphics.f("").s("#31B1C9").ss(1).drawRect(0, 0, 218, 153);
        this.Rect_2.setTransform(30, 19);

        rectContainer2.addChild(this.Rect_2);
        rectContainer2.setTransform(240, 32);

        this.addChild(rectContainer1, rectContainer2);

        for (var col = 0; col < 2; col++) {
            var verticalLineContainer1 = new cjs.Container();
            for (var lineCount = 0; lineCount < 22; lineCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#31B1C9").s("#31B1C9").ss(2.5).moveTo(0, 0).lineTo(0, 6);
                this.vrline_1.setTransform(30, 20 + (lineCount * 8));

                verticalLineContainer1.addChild(this.vrline_1);
            }
            verticalLineContainer1.setTransform(109 + (col * 240), 20);
            this.addChild(verticalLineContainer1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 210);

    (lib.Symbol3 = function() {
        this.initialize();        
       
        var rectContainer1 = new cjs.Container();

        for (var row = 1; row < 10; row++) {

            this.hrLine3 = new cjs.Shape();
            this.hrLine3.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(218, 0);
            this.hrLine3.setTransform(30, 19 + (row * 25.5));

            rectContainer1.addChild(this.hrLine3);
        }

        for (var col = 1; col < 8; col++) {

            this.vrLine3 = new cjs.Shape();
            this.vrLine3.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 255);
            this.vrLine3.setTransform(30 + (col * 27.25), 19);

            rectContainer1.addChild(this.vrLine3);
        }

        var fillColor = "#FFFFFF";
        for (var row = 0; row < 10; row++) {
            for (var col = 0; col < 8; col++) {

                //square
                if (row == 4 && col == 3) {
                    fillColor = "#33A344";
                    this.Rect3 = new cjs.Shape();
                    this.Rect3.graphics.f(fillColor).s("#9DD1DF").ss(1).drawRect(0, 0, 27.25, 25.5);
                    this.Rect3.setTransform(30 + (col * 27.25), 19 + (row * 25.5));
                    rectContainer1.addChild(this.Rect3);
                }

                if ((row == 6 && col == 3) || (row == 7 && col == 2) || (row == 7 && col == 3)) {
                    fillColor = "#207B3B";
                    this.Rect3 = new cjs.Shape();
                    this.Rect3.graphics.f(fillColor).s("#9DD1DF").ss(1).drawRect(0, 0, 27.25, 25.5);
                    this.Rect3.setTransform(30 + (col * 27.25), 19 + (row * 25.5));
                    rectContainer1.addChild(this.Rect3);
                }

                if (row == 8 && col == 3) {
                    fillColor = "#75573C";
                    this.Rect3 = new cjs.Shape();
                    this.Rect3.graphics.f(fillColor).s("#9DD1DF").ss(1).drawRect(0, 0, 13.7, 25.5);
                    this.Rect3.setTransform(43 + (col * 27.25), 19 + (row * 25.5));
                    rectContainer1.addChild(this.Rect3);
                }

                //triangle

                if ((row == 2 && col == 3)) {
                    fillColor = "#8CB93B";
                    this.triangle_3 = new cjs.Shape();
                    this.triangle_3.graphics.f(fillColor).s("#9DD1DF").ss(1).moveTo(0, 25.5).lineTo(27.25, 0).lineTo(27.25, 25.5).lineTo(0, 25.5);
                    this.triangle_3.setTransform(30 + (col * 27.25), 19 + (row * 25.5));
                    rectContainer1.addChild(this.triangle_3);
                }

                if ((row == 3 && col == 3) || (row == 4 && col == 2)) {
                    fillColor = "#33A344";
                    this.triangle_3 = new cjs.Shape();
                    this.triangle_3.graphics.f(fillColor).s("#9DD1DF").ss(1).moveTo(0, 25.5).lineTo(27.25, 0).lineTo(27.25, 25.5).lineTo(0, 25.5);
                    this.triangle_3.setTransform(30 + (col * 27.25), 19 + (row * 25.5));
                    rectContainer1.addChild(this.triangle_3);
                }

                if ((row == 5 && col == 3) || (row == 6 && col == 2) || (row == 7 && col == 1)) {
                    fillColor = "#207B3B";
                    this.triangle_3 = new cjs.Shape();
                    this.triangle_3.graphics.f(fillColor).s("#9DD1DF").ss(1).moveTo(0, 25.5).lineTo(27.25, 0).lineTo(27.25, 25.5).lineTo(0, 25.5);
                    this.triangle_3.setTransform(30 + (col * 27.25), 19 + (row * 25.5));
                    rectContainer1.addChild(this.triangle_3);
                }

            }
        }

        this.Rect_3 = new cjs.Shape();
        this.Rect_3.graphics.f("").s("#31B1C9").ss(1).drawRect(0, 0, 218, 255);
        this.Rect_3.setTransform(30, 19);

        rectContainer1.addChild(this.Rect_3);
        rectContainer1.setTransform(0, 13);

        var rectContainer2 = new cjs.Container();

        for (var row = 1; row < 10; row++) {

            this.hrLine4 = new cjs.Shape();
            this.hrLine4.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(218, 0);
            this.hrLine4.setTransform(30, 19 + (row * 25.5));

            rectContainer2.addChild(this.hrLine4);
        }

        for (var col = 1; col < 8; col++) {

            this.vrLine4 = new cjs.Shape();
            this.vrLine4.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 255);
            this.vrLine4.setTransform(30 + (col * 27.25), 19);

            rectContainer2.addChild(this.vrLine4);
        }

        this.Rect_4 = new cjs.Shape();
        this.Rect_4.graphics.f("").s("#31B1C9").ss(1).drawRect(0, 0, 218, 255);
        this.Rect_4.setTransform(30, 19);

        rectContainer2.addChild(this.Rect_4);
        rectContainer2.setTransform(240, 13);

        this.addChild(rectContainer1, rectContainer2);

        for (var col = 0; col < 2; col++) {
            var verticalLineContainer1 = new cjs.Container();
            for (var lineCount = 0; lineCount < 35; lineCount++) {

                this.vrline_2 = new cjs.Shape();
                this.vrline_2.graphics.f("#31B1C9").s("#31B1C9").ss(2.5).moveTo(0, 0).lineTo(0, 6);
                this.vrline_2.setTransform(30, 20 + (lineCount * 8));

                verticalLineContainer1.addChild(this.vrline_2);
            }
            verticalLineContainer1.setTransform(109 + (col * 240), 0);
            this.addChild(verticalLineContainer1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 310);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 56, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 286, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
