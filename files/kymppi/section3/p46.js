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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p46_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p46_1.png",
            id: "p46_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p46_2.png",
            id: "p46_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p46_3.png",
            id: "p46_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p46_4.png",
            id: "p46_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p46_5.png",
            id: "p46_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p46_6.png",
            id: "p46_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p46_7.png",
            id: "p46_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p46_8.png",
            id: "p46_8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p46_9.png",
            id: "p46_9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/p46_10.png",
            id: "p46_10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section3/images/even_pageS3.png",
            id: "pg_num"
        }]
    };

    (lib.p46_1 = function() {
        this.initialize(img.p46_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p46_1 = function() {
        this.initialize(img.p46_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p46_2 = function() {
        this.initialize(img.p46_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p46_3 = function() {
        this.initialize(img.p46_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p46_4 = function() {
        this.initialize(img.p46_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p46_5 = function() {
        this.initialize(img.p46_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p46_6 = function() {
        this.initialize(img.p46_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p46_7 = function() {
        this.initialize(img.p46_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p46_8 = function() {
        this.initialize(img.p46_8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p46_9 = function() {
        this.initialize(img.p46_9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p46_10 = function() {
        this.initialize(img.p46_10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("46", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Ordningstal", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle_1 = new cjs.Shape();
        this.headerCircle_1.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle_1.setTransform(19, 0);

        this.text_1 = new cjs.Text("Skriv våningen vid varje djur.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(29, 5);

        this.addChild(this.headerCircle_1, this.text_1);

        this.instance_1 = new lib.p46_1();
        this.instance_1.setTransform(25, 37, 0.45, 0.45);

        this.instance_2 = new lib.p46_2();
        this.instance_2.setTransform(25, 85, 0.42, 0.42);

        this.instance_3 = new lib.p46_3();
        this.instance_3.setTransform(25, 145, 0.45, 0.45);

        this.instance_4 = new lib.p46_4();
        this.instance_4.setTransform(25, 210, 0.45, 0.45);

        this.instance_5 = new lib.p46_5();
        this.instance_5.setTransform(30, 267, 0.4, 0.4);

        this.instance_6 = new lib.p46_6();
        this.instance_6.setTransform(20, 335, 0.45, 0.45);

        this.instance_7 = new lib.p46_7();
        this.instance_7.setTransform(30, 400, 0.45, 0.45);

        this.instance_8 = new lib.p46_8();
        this.instance_8.setTransform(25, 460, 0.45, 0.45);

        this.instance_9 = new lib.p46_9();
        this.instance_9.setTransform(25, 522, 0.45, 0.45);

        this.instance_10 = new lib.p46_10();
        this.instance_10.setTransform(305, -5, 0.5, 0.5);

        this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4, this.instance_5, this.instance_6, this.instance_7,
            this.instance_8, this.instance_9, this.instance_10);

        var fillText = " ";

        for (var row = 0; row < 9; row++) {
            if ((row == 2) || (row == 8)) {
                fillText = 'a';
            } else {
                fillText = 'e';
            }

            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#ffffff").s("#97CDD9").ss(1).drawRect(0, 0, 30, 35);
            this.Rect1.setTransform(88, 35 + (row * 61));

            this.text_2 = new cjs.Text(":", "40px 'UusiTekstausMajema'");
            this.text_2.setTransform(118, 67 + (row * 60.5));

            this.text_3 = new cjs.Text('' + fillText, "40px 'UusiTekstausMajema'");
            this.text_3.setTransform(129, 67 + (row * 60.5));

            this.addChild(this.Rect1, this.text_2, this.text_3);

        }

        var verticalLineContainer = new cjs.Container();

        for (var lineCount = 0; lineCount < 77; lineCount++) {

            this.vrline_1 = new cjs.Shape();
            this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
            this.vrline_1.setTransform(27, 7 + (lineCount * 7));

            verticalLineContainer.addChild(this.vrline_1);
        }
        verticalLineContainer.setTransform(143, 21);
        this.addChild(verticalLineContainer);

        var splText = ['9:e nionde', '8:e åttonde', '7:e sjunde', '6:e sjätte', '5:e femte', '4:e fjärde', '3:e tredje', '2:a andra', '1:a första'];
        var count = 0;
        var fillColor = "#ffffff";
        for (var row = 0; row < 9; row++) {
            var fillText = splText[count];
            count = count + 1;

            if (row == 0) {
                fillColor = "#2BA2C0";
            } else if (row == 1) {
                fillColor = "#E3562B";
            } else if (row == 2) {
                fillColor = "#2B8E34";
            } else if (row == 3) {
                fillColor = "#7772A9";
            } else if (row == 4) {
                fillColor = "#106FB2";
            } else if (row == 5) {
                fillColor = "#CC046B";
            } else if (row == 6) {
                fillColor = "#F8B62D";
            } else if (row == 7) {
                fillColor = "#2BA3C1";
            } else if (row == 8) {
                fillColor = "#77AE36";
            }

            this.Shape1 = new cjs.Shape();
            this.Shape1.graphics.f(fillColor).s(fillColor).ss(1).moveTo(0, 0).lineTo(103, 0).lineTo(123, 15).lineTo(103, 30).lineTo(0, 30).lineTo(0, 0);
            this.Shape1.setTransform(200, 52 + (row * 52.5));

            this.text_4 = new cjs.Text('' + fillText, "18px 'ElisarDTInfant-Regular'", "#ffffff");
            this.text_4.setTransform(211, 72 + (row * 52.5));

            this.addChild(this.Shape1, this.text_4);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 580);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 57, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
