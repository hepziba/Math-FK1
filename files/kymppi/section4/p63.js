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
    // mathviewer.setImageAudios(1, "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/section1/p19_11.png");
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p63_1.png",
            id: "p63_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p63_2.png",
            id: "p63_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p63_3.png",
            id: "p63_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p63_4.png",
            id: "p63_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/odd_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p63_1 = function() {
        this.initialize(img.p63_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p63_2 = function() {
        this.initialize(img.p63_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p63_3 = function() {
        this.initialize(img.p63_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p63_4 = function() {
        this.initialize(img.p63_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);   

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("63", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Uppskatta och mäta längd", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(415, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Mät sakerna med till exempel gem.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.text_2 = new cjs.Text("Gissa längden innan du mäter. Rita och skriv.", "17px 'ElisarDTInfant-Regular'");
        this.text_2.setTransform(28, 25);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 520, 12);
        this.roundRect1.setTransform(30, 40);

        this.addChild(this.headerCircle, this.text_1, this.text_2 ,this.roundRect1);

        for (var col = 0; col < 3; col++) {
            this.instance_1 = new lib.p63_1();
            this.instance_1.setTransform(288 + (col * 52), -12, 0.45, 0.45);

            this.addChild(this.instance_1);
        }

        var col_X = 0;
        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 3; col++) {

                var horizontalLineContainer = new cjs.Container();

                if (col == 0) {
                    col_X = 37;
                } else if (col == 1) {
                    col_X = 45;
                } else if (col == 2) {
                    col_X = 53;
                }

                for (var lineCount = 0; lineCount < 20; lineCount++) {

                    this.hrline_1 = new cjs.Shape();
                    this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                    this.hrline_1.setTransform(0 + (lineCount * 7), 0);

                    horizontalLineContainer.addChild(this.hrline_1);
                }

                horizontalLineContainer.setTransform(col_X + (col * 145), 72 + (row * 122));
                this.addChild(horizontalLineContainer);
            }
        }

        for (var col = 0; col < 2; col++) {

            var verticalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 73; lineCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(40, 7 + (lineCount * 7));

                verticalLineContainer.addChild(this.vrline_1);
            }
            verticalLineContainer.setTransform(143 + (col * 154), 39);
            this.addChild(verticalLineContainer);
        }

        this.text_3 = new cjs.Text("SAK ATT MÄTA", "15px 'Albus'", "#D03268");
        this.text_3.setTransform(50, 61);

        this.text_4 = new cjs.Text("JAG GISSAR", "15px 'Albus'", "#8DB93B");
        this.text_4.setTransform(220, 61);

        this.text_5 = new cjs.Text("JAG MÄTER", "15px 'Albus'", "#31B1C9");
        this.text_5.setTransform(370, 61);

        this.instance_2 = new lib.p63_2();
        this.instance_2.setTransform(54, 124, 0.52, 0.52);

        this.instance_3 = new lib.p63_3();
        this.instance_3.setTransform(52, 234, 0.5, 0.5);

        this.instance_4 = new lib.p63_4();
        this.instance_4.setTransform(52, 372, 0.5, 0.5);

        this.addChild(this.text_3, this.text_4, this.text_5, this.instance_2, this.instance_3, this.instance_4);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 580);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 56, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
