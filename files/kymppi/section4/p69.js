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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p69_1.png",
            id: "p69_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/odd_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p69_1 = function() {
        this.initialize(img.p69_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 647, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("69", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(555, 665);

        this.pageBottomText = new cjs.Text("Problemlösning", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'right';
        this.pageBottomText.setTransform(462, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

        for (var row = 0; row < 2; row++) {
            for (var col = 0; col < 2; col++) {
                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#FFFFFF").s("#C2E2EA").ss(0.7).drawRoundRect(0, 0, 219, 124, 12);
                this.Rect1.setTransform(80 + (col * 237), 353 + (row * 140));

                this.addChild(this.Rect1);
            }
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(19, 17);

        this.instance_1 = new lib.p69_1();
        this.instance_1.setTransform(288, 0, 0.5, 0.5);

        this.addChild(this.headerCircle, this.instance_1);

        var splText1 = ['I en påse finns enkronor, tvåkronor,', 'Du sticker ner handen och', 'Vilka mynt kan det bli?'];
        var splText2 = ['femkronor och tiokronor.', 'tar upp 3 mynt.', 'Rita flera förslag.'];

        var count = 0;
        for (var row = 0; row < 3; row++) {

            var fillText1 = splText1[count];
            var fillText2 = splText2[count];
            count = count + 1;

            this.text_1 = new cjs.Text('' + fillText1, "17px 'ElisarDTInfant-Regular'");
            this.text_1.setTransform(29, 22 + (row * 54));

            this.text_2 = new cjs.Text('' + fillText2, "17px 'ElisarDTInfant-Regular'");
            this.text_2.setTransform(29, 42 + (row * 54));

            this.addChild(this.text_1, this.text_2);
        }

        for (var col = 0; col < 2; col++) {
            this.Rect1 = new cjs.Shape();
            this.Rect1.graphics.f("#FFFFFF").s("#C2E2EA").ss(0.7).drawRoundRect(0, 0, 219, 124, 12);
            this.Rect1.setTransform(32 + (col * 237), 174);

            this.addChild(this.Rect1);
        }

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 490, 315);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(303, 40, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
