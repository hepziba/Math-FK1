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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/p23_1.png",
            id: "p23_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section2/images/odd_pageS2.png",
            id: "pg_num"
        }]
    };

    (lib.p23_1 = function() {
        this.initialize(img.p23_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.DottedCircle = function(dotCount, gap) {
        this.initialize();
        for (var i = 0; i < dotCount; i++) {
            var text = new cjs.TextArc("–", 'bold 40pt Arial Black', '#DEDEDE', 100);
            text.textAlign = "center";
            text.rotation = 0 + (gap * i);
            text.x = 0;
            text.y = 0;
            this.addChild(text);
        }
    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("23", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Siffra – antal   Talraden", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(433, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Rita antalet som siffran visar.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.roundRect1 = new cjs.Shape();
        this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 242, 12);
        this.roundRect1.setTransform(30, 21);

        this.addChild(this.roundRect1);

        var max_lineCount = 0,
            col_X = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 4; col++) {

                var horizontalLineContainer = new cjs.Container();

                if (col == 0) {
                    max_lineCount = 13;
                    col_X = 37;
                } else if (col == 1) {
                    max_lineCount = 15;
                    col_X = 40;
                } else if (col == 2) {
                    max_lineCount = 15;
                    col_X = 57;
                } else if (col == 3) {
                    max_lineCount = 15;
                    col_X = 75;
                }

                for (var lineCount = 0; lineCount < max_lineCount; lineCount++) {

                    this.hrline_1 = new cjs.Shape();
                    this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                    this.hrline_1.setTransform(0 + (lineCount * 7), 0);

                    horizontalLineContainer.addChild(this.hrline_1);
                }

                horizontalLineContainer.setTransform(col_X + (col * 100), 56 + (row * 69));
                this.addChild(horizontalLineContainer);
            }
        }

        for (var col = 0; col < 3; col++) {

            var verticalLineContainer = new cjs.Container();

            for (var lineCount = 0; lineCount < 33; lineCount++) {

                this.vrline_1 = new cjs.Shape();
                this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                this.vrline_1.setTransform(40, 7 + (lineCount * 7));

                verticalLineContainer.addChild(this.vrline_1);
            }
            verticalLineContainer.setTransform(94 + (col * 117), 21);
            this.addChild(verticalLineContainer);
        }

        this.text_2 = new cjs.Text("2", "75px 'UusiTekstausMajemaBold'", "#31B1C9");
        this.text_2.setTransform(63, 113);

        this.text_3 = new cjs.Text("4", "75px 'UusiTekstausMajemaBold'", "#31B1C9");
        this.text_3.setTransform(63, 182);

        this.text_4 = new cjs.Text("5", "75px 'UusiTekstausMajemaBold'", "#31B1C9");
        this.text_4.setTransform(63, 250);

        this.circleShape1 = new cjs.Shape();
        this.circleShape1.graphics.f("#31B1C9").s("#31B1C9").ss(0.7, 0, 0, 4).arc(0, 0, 10, 0, 2 * Math.PI);
        this.circleShape1.setTransform(195, 38);

        this.triangleShape1 = new cjs.Shape();
        this.triangleShape1.graphics.f("#31B1C9").s("#31B1C9").ss(0.5).moveTo(0, 0).lineTo(25, 0).lineTo(12.5, -22).lineTo(0, 0);
        this.triangleShape1.setTransform(300, 49);

        this.rectShape1 = new cjs.Shape();
        this.rectShape1.graphics.f("#31B1C9").s("#31B1C9").ss(1).drawRect(0, 0, 22, 22);
        this.rectShape1.setTransform(415, 28);

        this.shape1 = new lib.DottedCircle(20, 24);
        this.shape1.setTransform(167, 85, 0.12, 0.12);

        this.shape2 = new lib.DottedCircle(20, 24);
        this.shape2.setTransform(220, 95, 0.12, 0.12);

        this.addChild(this.text_2, this.text_3, this.text_4, this.circleShape1, this.triangleShape1, this.rectShape1, this.shape1, this.shape2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 280);

    (lib.Symbol3 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Skriv siffrorna som saknas i talraden.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.addChild(this.headerCircle, this.text_1);

        this.instance_1 = new lib.p23_1();
        this.instance_1.setTransform(21, 0, 0.5, 0.5);

        this.addChild(this.instance_1);

        this.circle_1 = new cjs.Shape();
        this.circle_1.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_1.setTransform(105, 75);

        this.circle_2 = new cjs.Shape();
        this.circle_2.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_2.setTransform(163, 73);

        this.circle_3 = new cjs.Shape();
        this.circle_3.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_3.setTransform(229, 65);

        this.circle_4 = new cjs.Shape();
        this.circle_4.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_4.setTransform(293, 65);

        this.circle_5 = new cjs.Shape();
        this.circle_5.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_5.setTransform(367, 44);

        this.circle_6 = new cjs.Shape();
        this.circle_6.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_6.setTransform(159.5, 146);

        this.circle_7 = new cjs.Shape();
        this.circle_7.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_7.setTransform(204, 141);

        this.circle_8 = new cjs.Shape();
        this.circle_8.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_8.setTransform(266, 163);

        this.circle_9 = new cjs.Shape();
        this.circle_9.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_9.setTransform(325, 135);

        this.circle_10 = new cjs.Shape();
        this.circle_10.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_10.setTransform(382, 152);

        this.circle_11 = new cjs.Shape();
        this.circle_11.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_11.setTransform(102, 221);

        this.circle_12 = new cjs.Shape();
        this.circle_12.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_12.setTransform(157, 230);

        this.circle_13 = new cjs.Shape();
        this.circle_13.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_13.setTransform(225, 238);

        this.circle_14 = new cjs.Shape();
        this.circle_14.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_14.setTransform(309, 222);

        this.circle_15 = new cjs.Shape();
        this.circle_15.graphics.f("#ffffff").s("#ffffff").ss(0.7, 0, 0, 4).arc(0, 0, 12, 0, 2 * Math.PI);
        this.circle_15.setTransform(359, 225.5);

        this.addChild(this.circle_1, this.circle_2, this.circle_3, this.circle_4, this.circle_5, this.circle_6, this.circle_7,
            this.circle_8, this.circle_9, this.circle_10, this.circle_11, this.circle_12, this.circle_13, this.circle_14, this.circle_15);

        this.text_1 = new cjs.Text("1", "24px 'ElisarDTInfant-SemiBold'", "#31B1C9");
        this.text_1.setTransform(97, 83);

        this.text_2 = new cjs.Text("2", "24px 'ElisarDTInfant-SemiBold'", "#31B1C9");
        this.text_2.setTransform(195, 149);

        this.text_3 = new cjs.Text("3", "24px 'ElisarDTInfant-SemiBold'", "#31B1C9");
        this.text_3.setTransform(221, 73);

        this.text_4 = new cjs.Text("4", "24px 'ElisarDTInfant-SemiBold'", "#31B1C9");
        this.text_4.setTransform(301, 229);

        this.text_5 = new cjs.Text("5", "24px 'ElisarDTInfant-SemiBold'", "#31B1C9");
        this.text_5.setTransform(373, 160);

        this.addChild(this.text_1, this.text_2, this.text_3, this.text_4, this.text_5);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 315);

    (lib.p6 = function() {
        this.initialize();

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 356, 1, 1, 0, 0, 0, 254.6, 0);

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 56, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
