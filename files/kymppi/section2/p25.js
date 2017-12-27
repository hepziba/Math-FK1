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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p25_1.png",
            id: "p25_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p25_2.png",
            id: "p25_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/odd_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p25_1 = function() {
        this.initialize(img.p25_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p25_2 = function() {
        this.initialize(img.p25_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);
 
    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("25", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Siffra – antal  Mönster", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(432, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Rita till så att det är 6 tillsammans.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 2; col++) {

                this.roundRect1 = new cjs.Shape();
                this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 222, 88, 12);
                this.roundRect1.setTransform(30 + (col * 240), 20 + (row * 103));

                this.addChild(this.roundRect1);
            }
        }

        this.instance_1 = new lib.p25_1();
        this.instance_1.setTransform(360, -28, 0.5, 0.5);

        this.circleShape1 = new cjs.Shape();
        this.circleShape1.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape1.setTransform(70, 52);

        this.circleShape2 = new cjs.Shape();
        this.circleShape2.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape2.setTransform(130, 55);

        this.circleShape3 = new cjs.Shape();
        this.circleShape3.graphics.f("#D03268").s("#D03268").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape3.setTransform(100, 80);

        this.triangleShape1 = new cjs.Shape();
        this.triangleShape1.graphics.f("#908EC1").s("#908EC1").ss(0.5).moveTo(0, 0).lineTo(20, 0).lineTo(10, -17).lineTo(0, 0);
        this.triangleShape1.setTransform(320, 58);

        this.triangleShape2 = new cjs.Shape();
        this.triangleShape2.graphics.f("#908EC1").s("#908EC1").ss(0.5).moveTo(0, 0).lineTo(20, 0).lineTo(10, -17).lineTo(0, 0);
        this.triangleShape2.setTransform(300, 92);

        this.rectShape1 = new cjs.Shape();
        this.rectShape1.graphics.f("#8CB93B").s("#8CB93B").ss(1).drawRect(0, 0, 22, 22);
        this.rectShape1.setTransform(65, 152);

               this.addChild(this.instance_1, this.circleShape1, this.circleShape2, this.circleShape3, this.triangleShape1, this.triangleShape2, 
            this.rectShape1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 515, 180);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Måla olika mönster med 6 rutor.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.Rect1 = new cjs.Shape();
        this.Rect1.graphics.f("#ffffff").s("#31B1C9").ss(1).drawRect(0, 0, 450, 286);
        this.Rect1.setTransform(30, 19);

        this.addChild(this.headerCircle, this.text_1, this.Rect1);

        for (var row = 1; row < 13; row++) {

            this.hrLine1 = new cjs.Shape();
            this.hrLine1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(450, 0);
            this.hrLine1.setTransform(30, 19 + (row * 22));

            this.addChild(this.hrLine1);
        }

        for (var col = 1; col < 18; col++) {

            this.vrLine1 = new cjs.Shape();
            this.vrLine1.graphics.f("#9DD1DF").s("#9DD1DF").ss(1).moveTo(0, 0).lineTo(0, 286);
            this.vrLine1.setTransform(30 + (col * 25), 19);

            this.addChild(this.vrLine1);
        }

        this.instance_1 = new lib.p25_2();
        this.instance_1.setTransform(479, 190, 0.5, 0.5);

        this.addChild(this.instance_1);

        var fillColor = "#ffffff";
        for (var row = 0; row < 13; row++) {
            for (var col = 0; col < 18; col++) {

                if ((row == 0 && col == 1) || (row == 0 && col == 2) || (row == 1 && col == 0) || (row == 1 && col == 1) || (row == 1 && col == 2) || (row == 1 && col == 3)) {

                    this.Rect1 = new cjs.Shape();
                    this.Rect1.graphics.f("#1885C6").s("#9DD1DF").ss(1).drawRect(0, 0, 25, 22);
                    this.Rect1.setTransform(30 + (col * 25), 19 + (row * 22));
                    this.addChild(this.Rect1);
                }
            }
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 500, 315);

    (lib.p6 = function() {
        this.initialize();

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 305, 1, 1, 0, 0, 0, 254.6, 0);

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 56, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
