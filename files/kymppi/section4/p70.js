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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p70_1.png",
            id: "p70_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p70_2.png",
            id: "p70_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p70_3.png",
            id: "p70_3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p70_4.png",
            id: "p70_4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p70_5.png",
            id: "p70_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p70_6.png",
            id: "p70_6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p70_7.png",
            id: "p70_7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/odd_pageS4.png",
            id: "pg_num"
        }]
    };

    (lib.p70_1 = function() {
        this.initialize(img.p70_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p70_2 = function() {
        this.initialize(img.p70_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p70_3 = function() {
        this.initialize(img.p70_3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p70_4 = function() {
        this.initialize(img.p70_4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p70_5 = function() {
        this.initialize(img.p70_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p70_6 = function() {
        this.initialize(img.p70_6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.p70_7 = function() {
        this.initialize(img.p70_7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.pg_num = function() {
        this.initialize(img.pg_num);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

    (lib.Symbol1 = function() {

        this.instance_1 = new lib.pg_num();
        this.instance_1.setTransform(0, 645, 0.405, 0.405);

        this.pageNum_text = new cjs.Text("70", "12px 'ElisarDTInfant-SemiBold'");
        this.pageNum_text.setTransform(75, 665);

        this.pageBottomText = new cjs.Text("Tolka enkla koder", "9.5px 'ElisarDTInfant-SemiBold'");
        this.pageBottomText.pos = 'left';
        this.pageBottomText.setTransform(115, 665);

        this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

    (lib.Symbol2 = function() {
        this.initialize();

        this.headerCircle = new cjs.Shape();
        this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
        this.headerCircle.setTransform(18, 0);

        this.text_1 = new cjs.Text("Rita djurets väg. Rita en        i målrutan.", "17px 'ElisarDTInfant-Regular'");
        this.text_1.setTransform(28, 5);

        this.instance_1 = new lib.p70_1();
        this.instance_1.setTransform(196, -10, 0.54, 0.54);

        this.addChild(this.headerCircle, this.text_1, this.instance_1);

        var Box_X = 0;
        var Box_Y = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 8; col++) {
                if (col < 4) {
                    Box_X = 42;
                } else {
                    Box_X = 133;
                }
                if (row < 3) {
                    Box_Y = 31;
                } else if (row > 2 && row < 6) {
                    Box_Y = 105;
                } else if (row > 5) {
                    Box_Y = 178;
                }
                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(1).drawRect(0, 0, 40, 38);
                this.Rect1.setTransform(Box_X + (col * 40), Box_Y + (row * 38));

                this.addChild(this.Rect1);

            }
        }

        var Dot_X = 0;
        var Dot_Y = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 8; col++) {

                if ((row == 2 && col == 1) || (row == 2 && col == 7)) {
                    continue;
                }

                if (col < 4) {
                    Dot_X = 42;
                } else {
                    Dot_X = 133;
                }
                if (row < 3) {
                    Dot_Y = 51;
                } else if (row > 2 && row < 6) {
                    Dot_Y = 125;
                } else if (row > 5) {
                    Dot_Y = 198;
                }

                this.blueDot = new cjs.Shape();
                this.blueDot.graphics.f("#31B1C9").s("#31B1C9").ss(0.7, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
                this.blueDot.setTransform(Dot_X + 19 + (col * 40), Dot_Y + (row * 38));

                this.addChild(this.blueDot);
            }
        }

        this.instance_2 = new lib.p70_2();
        this.instance_2.setTransform(85, 110, 0.4, 0.4);

        this.instance_3 = new lib.p70_3();
        this.instance_3.setTransform(417, 110, 0.4, 0.4);

        this.addChild(this.instance_2, this.instance_3);

        for (var lineCount = 0; lineCount < 26; lineCount++) {

            this.vrline_1 = new cjs.Shape();
            this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
            this.vrline_1.setTransform(248, 29 + (lineCount * 7));

            this.addChild(this.vrline_1);
        }


        var DottedArrowContainer1 = new cjs.Container();

        this.ArrowShape_1 = new cjs.Shape();
        this.ArrowShape_1.graphics.f("#ffffff").s("#1885C6").ss(0.7).moveTo(20, 3.5).lineTo(24, 0).lineTo(20, -3.5);
        this.ArrowShape_1.setTransform(112, 127);

        DottedArrowContainer1.addChild(this.ArrowShape_1);

        for (var col = 0; col < 5; col++) {

            this.DashedArrowLine_1 = new cjs.Shape();
            this.DashedArrowLine_1.graphics.f("#1885C6").s("#1885C6").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.DashedArrowLine_1.setTransform(113 + (col * 5), 127);

            DottedArrowContainer1.addChild(this.DashedArrowLine_1);
        }

        var DottedArrowContainer2 = new cjs.Container();

        this.ArrowShape_2 = new cjs.Shape();
        this.ArrowShape_2.graphics.f("#ffffff").s("#1885C6").ss(0.7).moveTo(20, 3.5).lineTo(24, 0).lineTo(20, -3.5);
        this.ArrowShape_2.setTransform(154, 127);

        DottedArrowContainer2.addChild(this.ArrowShape_2);

        for (var col = 0; col < 7; col++) {

            this.DashedArrowLine_2 = new cjs.Shape();
            this.DashedArrowLine_2.graphics.f("#1885C6").s("#1885C6").ss(0.7).moveTo(0, 0).lineTo(3, 0);
            this.DashedArrowLine_2.setTransform(143 + (col * 5), 127);

            DottedArrowContainer2.addChild(this.DashedArrowLine_2);
        }

        this.addChild(DottedArrowContainer1, DottedArrowContainer2);

        var Box_X = 0;
        var Box_Y = 0;
        for (var col = 0; col < 3; col++) {

            if (col == 0) {
                Box_X = 42;
            } else if (col == 1) {
                Box_X = 48;
            } else if (col == 2) {
                Box_X = 54;
            }

            this.BlueRoundedRect1 = new cjs.Shape();
            this.BlueRoundedRect1.graphics.f("#E9F4F8").s("#E9F4F8").ss(1).drawRoundRect(0, 0, 50, 28, 7);
            this.BlueRoundedRect1.setTransform(Box_X + (col * 49), 158);

            this.addChild(this.BlueRoundedRect1);
        }

        var Box_X = 0;
        var Box_Y = 0;
        for (var col = 0; col < 3; col++) {

            if (col == 0) {
                Box_X = 293;
            } else if (col == 1) {
                Box_X = 299;
            } else if (col == 2) {
                Box_X = 305;
            }

            this.greenRoundedRect1 = new cjs.Shape();
            this.greenRoundedRect1.graphics.f("#E1ECDA").s("#E1ECDA").ss(1).drawRoundRect(0, 0, 50, 28, 7);
            this.greenRoundedRect1.setTransform(Box_X + (col * 49), 158);

            this.addChild(this.greenRoundedRect1);
        }

        var spltext = ['2', '2', '3', '3', '2', '3'];
        var count = 0
        var text_X = 0;
        for (var col = 0; col < 6; col++) {
            var fillText = spltext[count];
            count = count + 1;

            if (col == 0) {
                text_X = 72;
            } else if (col == 1) {
                text_X = 76;
            } else if (col == 2) {
                text_X = 84;
            } else if (col == 3) {
                text_X = 176;
            } else if (col == 4) {
                text_X = 180;
            } else if (col == 5) {
                text_X = 188;
            }

            this.text_2 = new cjs.Text('' + fillText, "17px 'ElisarDTInfant-Regular'");
            this.text_2.setTransform(text_X + (col * 49), 178);

            this.addChild(this.text_2);
        }

        // for row---1

        this.arrow_1 = new cjs.Shape();
        this.arrow_1.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(17, 0).moveTo(13, 4).lineTo(17, 0).lineTo(13, -4);
        this.arrow_1.setTransform(50, 172);

        this.arrow_2 = new cjs.Shape();
        this.arrow_2.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(0, -17).moveTo(-4, -13).lineTo(0, -17).lineTo(4, -13);
        this.arrow_2.setTransform(117, 180);

        this.arrow_3 = new cjs.Shape();
        this.arrow_3.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(-17, 0).moveTo(-13, 4).lineTo(-17, 0).lineTo(-13, -4);
        this.arrow_3.setTransform(180, 172);

        this.arrow_4 = new cjs.Shape();
        this.arrow_4.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(-17, 0).moveTo(-13, 4).lineTo(-17, 0).lineTo(-13, -4);
        this.arrow_4.setTransform(320, 172);

        this.arrow_5 = new cjs.Shape();
        this.arrow_5.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(0, -17).moveTo(-4, -13).lineTo(0, -17).lineTo(4, -13);
        this.arrow_5.setTransform(368, 180);

        this.arrow_6 = new cjs.Shape();
        this.arrow_6.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(17, 0).moveTo(13, 4).lineTo(17, 0).lineTo(13, -4);
        this.arrow_6.setTransform(412, 172);

        this.addChild(this.arrow_1, this.arrow_2, this.arrow_3, this.arrow_4, this.arrow_5, this.arrow_6);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 180);

    (lib.Symbol3 = function() {
        this.initialize();

        var Box_X = 0;
        var Box_Y = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 8; col++) {
                if (col < 4) {
                    Box_X = 42;
                } else {
                    Box_X = 133;
                }
                if (row < 3) {
                    Box_Y = 8;
                } else if (row > 2 && row < 6) {
                    Box_Y = 82;
                } else if (row > 5) {
                    Box_Y = 155;
                }
                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(1).drawRect(0, 0, 40, 38);
                this.Rect1.setTransform(Box_X + (col * 40), Box_Y + (row * 38));

                this.addChild(this.Rect1);
            }
        }

        var Dot_X = 0;
        var Dot_Y = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 8; col++) {

                if ((row == 0 && col == 3) || (row == 0 && col == 4)) {
                    continue;
                }

                if (col < 4) {
                    Dot_X = 42;
                } else {
                    Dot_X = 133;
                }
                if (row < 3) {
                    Dot_Y = 28;
                } else if (row > 2 && row < 6) {
                    Dot_Y = 102;
                } else if (row > 5) {
                    Dot_Y = 175;
                }

                this.blueDot = new cjs.Shape();
                this.blueDot.graphics.f("#31B1C9").s("#31B1C9").ss(0.7, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
                this.blueDot.setTransform(Dot_X + 19 + (col * 40), Dot_Y + (row * 38));

                this.addChild(this.blueDot);
            }
        }

        this.instance_1 = new lib.p70_4();
        this.instance_1.setTransform(166, 10, 0.4, 0.4);

        this.instance_2 = new lib.p70_5();
        this.instance_2.setTransform(299, 11, 0.43, 0.43);

        this.addChild(this.instance_1, this.instance_2);

        for (var lineCount = 0; lineCount < 26; lineCount++) {

            this.vrline_1 = new cjs.Shape();
            this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
            this.vrline_1.setTransform(248, 0 + (lineCount * 7));

            this.addChild(this.vrline_1);
        }

        var Box_X = 0;
        var Box_Y = 0;
        for (var col = 0; col < 3; col++) {

            if (col == 0) {
                Box_X = 42;
            } else if (col == 1) {
                Box_X = 48;
            } else if (col == 2) {
                Box_X = 56;
            }

            this.greenRoundedRect1 = new cjs.Shape();
            this.greenRoundedRect1.graphics.f("#E1ECDA").s("#E1ECDA").ss(1).drawRoundRect(0, 0, 50, 28, 7);
            this.greenRoundedRect1.setTransform(Box_X + (col * 49), 136);

            this.addChild(this.greenRoundedRect1);
        }

        var Box_X = 0;
        var Box_Y = 0;
        for (var col = 0; col < 3; col++) {

            if (col == 0) {
                Box_X = 293;
            } else if (col == 1) {
                Box_X = 300;
            } else if (col == 2) {
                Box_X = 307;
            }

            this.BlueRoundedRect1 = new cjs.Shape();
            this.BlueRoundedRect1.graphics.f("#E9F4F8").s("#E9F4F8").ss(1).drawRoundRect(0, 0, 50, 28, 7);
            this.BlueRoundedRect1.setTransform(Box_X + (col * 49), 136);

            this.addChild(this.BlueRoundedRect1);
        }

        var spltext = ['3', '2', '2', '2', '2', '1'];
        var count = 0
        var text_X = 0;
        for (var col = 0; col < 6; col++) {
            var fillText = spltext[count];
            count = count + 1;

            if (col == 0) {
                text_X = 72;
            } else if (col == 1) {
                text_X = 76;
            } else if (col == 2) {
                text_X = 84;
            } else if (col == 3) {
                text_X = 175;
            } else if (col == 4) {
                text_X = 180;
            } else if (col == 5) {
                text_X = 188;
            }

            this.text_2 = new cjs.Text('' + fillText, "17px 'ElisarDTInfant-Regular'");
            this.text_2.setTransform(text_X + (col * 49), 156);

            this.addChild(this.text_2);
        }

        this.arrow_1 = new cjs.Shape();
        this.arrow_1.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(-17, 0).moveTo(-13, 4).lineTo(-17, 0).lineTo(-13, -4);
        this.arrow_1.setTransform(70, 151);

        this.arrow_2 = new cjs.Shape();
        this.arrow_2.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(0, 17).moveTo(-4, 13).lineTo(0, 17).lineTo(4, 13);
        this.arrow_2.setTransform(117, 142);

        this.arrow_3 = new cjs.Shape();
        this.arrow_3.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(17, 0).moveTo(13, 4).lineTo(17, 0).lineTo(13, -4);
        this.arrow_3.setTransform(160, 151);

        this.arrow_4 = new cjs.Shape();
        this.arrow_4.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(17, 0).moveTo(13, 4).lineTo(17, 0).lineTo(13, -4);
        this.arrow_4.setTransform(302, 151);

        this.arrow_5 = new cjs.Shape();
        this.arrow_5.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(0, 17).moveTo(-4, 13).lineTo(0, 17).lineTo(4, 13);
        this.arrow_5.setTransform(368, 142);

        this.arrow_6 = new cjs.Shape();
        this.arrow_6.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(17, 0).moveTo(13, 4).lineTo(17, 0).lineTo(13, -4);
        this.arrow_6.setTransform(414, 151);

        this.addChild(this.arrow_1, this.arrow_2, this.arrow_3, this.arrow_4, this.arrow_5, this.arrow_6);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 160);

    (lib.Symbol4 = function() {
        this.initialize();

        var Box_X = 0;
        var Box_Y = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 8; col++) {
                if (col < 4) {
                    Box_X = 42;
                } else {
                    Box_X = 133;
                }
                if (row < 3) {
                    Box_Y = 13;
                } else if (row > 2 && row < 6) {
                    Box_Y = 87;
                } else if (row > 5) {
                    Box_Y = 160;
                }
                this.Rect1 = new cjs.Shape();
                this.Rect1.graphics.f("#ffffff").s("#9DD1DF").ss(1).drawRect(0, 0, 40, 38);
                this.Rect1.setTransform(Box_X + (col * 40), Box_Y + (row * 38));

                this.addChild(this.Rect1);

            }
        }

        var Dot_X = 0;
        var Dot_Y = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 8; col++) {

                if ((row == 0 && col == 6) || (row == 2 && col == 2)) {
                    continue;
                }

                if (col < 4) {
                    Dot_X = 42;
                } else {
                    Dot_X = 133;
                }
                if (row < 3) {
                    Dot_Y = 33;
                } else if (row > 2 && row < 6) {
                    Dot_Y = 107;
                } else if (row > 5) {
                    Dot_Y = 180;
                }

                this.blueDot = new cjs.Shape();
                this.blueDot.graphics.f("#31B1C9").s("#31B1C9").ss(0.7, 0, 0, 4).arc(0, 0, 2, 0, 2 * Math.PI);
                this.blueDot.setTransform(Dot_X + 19 + (col * 40), Dot_Y + (row * 38));

                this.addChild(this.blueDot);
            }
        }

        this.instance_1 = new lib.p70_6();
        this.instance_1.setTransform(376, 17, 0.4, 0.4);

        this.instance_2 = new lib.p70_7();
        this.instance_2.setTransform(128, 91, 0.35, 0.35);

        this.addChild(this.instance_1, this.instance_2);

        for (var lineCount = 0; lineCount < 26; lineCount++) {

            this.vrline_1 = new cjs.Shape();
            this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
            this.vrline_1.setTransform(248, 0 + (lineCount * 7));

            this.addChild(this.vrline_1);
        }

        var Box_X = 0;
        var Box_Y = 0;
        for (var col = 0; col < 4; col++) {

            if (col == 0) {
                Box_X = 17;
            } else if (col == 1) {
                Box_X = 24;
            } else if (col == 2) {
                Box_X = 31;
            } else if (col == 3) {
                Box_X = 38;
            }

            this.BlueRoundedRect1 = new cjs.Shape();
            this.BlueRoundedRect1.graphics.f("#E9F4F8").s("#E9F4F8").ss(1).drawRoundRect(0, 0, 50, 28, 7);
            this.BlueRoundedRect1.setTransform(Box_X + (col * 49), 141);

            this.addChild(this.BlueRoundedRect1);
        }

        var Box_X = 0;
        var Box_Y = 0;
        for (var col = 0; col < 4; col++) {

            if (col == 0) {
                Box_X = 273;
            } else if (col == 1) {
                Box_X = 280;
            } else if (col == 2) {
                Box_X = 287;
            } else if (col == 3) {
                Box_X = 295;
            }

            this.greenRoundedRect1 = new cjs.Shape();
            this.greenRoundedRect1.graphics.f("#E1ECDA").s("#E1ECDA").ss(1).drawRoundRect(0, 0, 50, 28, 7);
            this.greenRoundedRect1.setTransform(Box_X + (col * 49), 141);

            this.addChild(this.greenRoundedRect1);
        }

        var spltext = ['1', '2', '3', '2', '2', '2', '3', '2'];
        var count = 0
        var text_X = 0;

        for (var col = 0; col < 8; col++) {
            var fillText = spltext[count];
            count = count + 1;

            if (col == 0) {
                text_X = 47;
            } else if (col == 1) {
                text_X = 51;
            } else if (col == 2) {
                text_X = 59;
            } else if (col == 3) {
                text_X = 63;
            } else if (col == 4) {
                text_X = 108;
            } else if (col == 5) {
                text_X = 111;
            } else if (col == 6) {
                text_X = 121;
            } else if (col == 7) {
                text_X = 124;
            }

            this.text_3 = new cjs.Text('' + fillText, "17px 'ElisarDTInfant-Regular'");
            this.text_3.setTransform(text_X + (col * 49), 160);

            this.addChild(this.text_3);
        }

        this.arrow_1 = new cjs.Shape();
        this.arrow_1.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(17, 0).moveTo(13, 4).lineTo(17, 0).lineTo(13, -4);
        this.arrow_1.setTransform(27, 155);

        this.arrow_2 = new cjs.Shape();
        this.arrow_2.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(0, -17).moveTo(-4, -13).lineTo(0, -17).lineTo(4, -13);
        this.arrow_2.setTransform(92, 162);

        this.arrow_3 = new cjs.Shape();
        this.arrow_3.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(-17, 0).moveTo(-13, 4).lineTo(-17, 0).lineTo(-13, -4);
        this.arrow_3.setTransform(154, 155);

        this.arrow_4 = new cjs.Shape();
        this.arrow_4.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(0, 17).moveTo(-4, 13).lineTo(0, 17).lineTo(4, 13);
        this.arrow_4.setTransform(203, 147);

        this.arrow_5 = new cjs.Shape();
        this.arrow_5.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(-17, 0).moveTo(-13, 4).lineTo(-17, 0).lineTo(-13, -4);
        this.arrow_5.setTransform(300, 155);

        this.arrow_6 = new cjs.Shape();
        this.arrow_6.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(0, 17).moveTo(-4, 13).lineTo(0, 17).lineTo(4, 13);
        this.arrow_6.setTransform(347, 147);

        this.arrow_7 = new cjs.Shape();
        this.arrow_7.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(17, 0).moveTo(13, 4).lineTo(17, 0).lineTo(13, -4);
        this.arrow_7.setTransform(393, 155);

        this.arrow_8 = new cjs.Shape();
        this.arrow_8.graphics.f("#ffffff").s("#68BFD2").ss(1.5).moveTo(0, 0).lineTo(0, -17).moveTo(-4, -13).lineTo(0, -17).lineTo(4, -13);
        this.arrow_8.setTransform(460, 162);

        this.addChild(this.arrow_1, this.arrow_2, this.arrow_3, this.arrow_4, this.arrow_5, this.arrow_6, this.arrow_7, this.arrow_8);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 480, 160);

    (lib.p6 = function() {
        this.initialize();

        this.v1 = new lib.Symbol2();
        this.v1.setTransform(307, 56, 1, 1, 0, 0, 0, 254.6, 0);

        this.v2 = new lib.Symbol3();
        this.v2.setTransform(307, 267, 1, 1, 0, 0, 0, 254.6, 0);

        this.v3 = new lib.Symbol4();
        this.v3.setTransform(307, 449, 1, 1, 0, 0, 0, 254.6, 0);

        this.other = new lib.Symbol1();
        this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

        this.addChild(this.other, this.v1, this.v2, this.v3);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
