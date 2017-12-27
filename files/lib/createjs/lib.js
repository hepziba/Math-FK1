(function(lib, img, cjs) {
    (lib.DottedCircle = function(dotCount, gap) {
        this.initialize();
        for (var i = 0; i < dotCount; i++) {
            var text = new createjs.TextArc("–", 'bold 24pt Arial Black', '#000', 100);
            text.textAlign = "center";
            text.rotation = 0 + (gap * i);
            text.x = 0;
            text.y = 0;
            this.addChild(text);
        }
    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);

    (lib.Symbolclock = function() {
        this.initialize();

        this.shape_group1 = new cjs.Shape();
        this.shape_group1.graphics.f("#C8C9CB").s("#000000").ss(0.6, 0, 0, 4).arc(0, 0, 42, 0, 2 * Math.PI);
        this.shape_group1.setTransform(0, 0);

        this.shape_group2 = new cjs.Shape();
        this.shape_group2.graphics.f("#ffffff").s("#000000").ss(0.4, 0, 0, 4).arc(0, 0, 37.7, 0, 2 * Math.PI);
        this.shape_group2.setTransform(0, 0);

        this.Line_1 = new cjs.Shape();
        this.Line_1.graphics.s("#000000").setStrokeStyle(0.7).moveTo(0, -38).lineTo(0, -35).moveTo(0, 35).lineTo(0, 38).moveTo(35, 0).lineTo(38, 0).moveTo(-35, 0).lineTo(-38, 0).moveTo(18, -33).lineTo(16.5, -30).moveTo(33, -19).lineTo(30, -17).moveTo(-30, 17.5).lineTo(-32.5, 19).moveTo(-17, 30).lineTo(-19, 32.5).moveTo(-31, -16).lineTo(-33.5, -18).moveTo(-19, -33).lineTo(-17, -30).moveTo(33, 17.5).lineTo(30.5, 16).moveTo(20, 31.5).lineTo(18.2, 29);
        this.Line_1.setTransform(0, 0);

        this.text_1 = new cjs.Text("1", "10px 'Myriad Pro'");
        this.text_1.setTransform(10, -23.3);
        this.text_2 = new cjs.Text("2", "10px 'Myriad Pro'");
        this.text_2.setTransform(21.8, -12.3);
        this.text_3 = new cjs.Text("3", "10px 'Myriad Pro'");
        this.text_3.setTransform(27, 1.7);
        this.text_4 = new cjs.Text("4", "10px 'Myriad Pro'");
        this.text_4.setTransform(21.8, 17.7);
        this.text_5 = new cjs.Text("5", "10px 'Myriad Pro'");
        this.text_5.setTransform(10, 27.7);
        this.text_6 = new cjs.Text("6", "10px 'Myriad Pro'");
        this.text_6.setTransform(-4.5, 32.7);
        this.text_7 = new cjs.Text("7", "10px 'Myriad Pro'");
        this.text_7.setTransform(-19, 27.7);
        this.text_8 = new cjs.Text("8", "10px 'Myriad Pro'");
        this.text_8.setTransform(-31, 17.7);
        this.text_9 = new cjs.Text("9", "10px 'Myriad Pro'");
        this.text_9.setTransform(-36, 1.7);
        this.text_10 = new cjs.Text("10", "10px 'Myriad Pro'");
        this.text_10.setTransform(-32, -12.3);
        this.text_11 = new cjs.Text("11", "10px 'Myriad Pro'");
        this.text_11.setTransform(-20, -23.3);
        this.text_12 = new cjs.Text("12", "10px 'Myriad Pro'");
        this.text_12.setTransform(-7, -27.8);
        //center dot
        this.text_dot = new cjs.Text(".", "40px 'Myriad Pro'");
        this.text_dot.setTransform(-6.5, -1);

        this.addChild(this.shape_group1, this.shape_group2, this.Line_1);
        this.addChild(this.text_1, this.text_2, this.text_3, this.text_4, this.text_5, this.text_6, this.text_7, this.text_8, this.text_9, this.text_10, this.text_11, this.text_12, this.text_dot)

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 511.3, 143.6);
    (lib.Symboldottedclock = function() {
        this.initialize();

        this.shape_group1 = new cjs.Shape();
        this.shape_group1.graphics.f("#C8C9CB").s("#000000").ss(0.6, 0, 0, 4).arc(0, 0, 42, 0, 2 * Math.PI);
        this.shape_group1.setTransform(0, 0);

        this.shape_group2 = new cjs.Shape();
        this.shape_group2.graphics.f("#ffffff").s("#000000").ss(0.4, 0, 0, 4).arc(0, 0, 37.7, 0, 2 * Math.PI);
        this.shape_group2.setTransform(0, 0);

        this.Line_1 = new cjs.Shape();
        this.Line_1.graphics.s("#000000").setStrokeStyle(0.7).moveTo(0, -38).lineTo(0, -35).moveTo(0, 35).lineTo(0, 38).moveTo(35, 0).lineTo(38, 0).moveTo(-35, 0).lineTo(-38, 0).moveTo(18, -33).lineTo(16.5, -30).moveTo(33, -19).lineTo(30, -17).moveTo(-30, 17.5).lineTo(-32.5, 19).moveTo(-17, 30).lineTo(-19, 32.5).moveTo(-31, -16).lineTo(-33.5, -18).moveTo(-19, -33).lineTo(-17, -30).moveTo(33, 17.5).lineTo(30.5, 16).moveTo(20, 31.5).lineTo(18.2, 29);
        this.Line_1.setTransform(0, 0);

        this.text_1 = new cjs.Text("1", "10px 'Myriad Pro'");
        this.text_1.setTransform(10, -23.3);
        this.text_2 = new cjs.Text("2", "10px 'Myriad Pro'");
        this.text_2.setTransform(21.8, -12.3);
        this.text_3 = new cjs.Text("3", "10px 'Myriad Pro'");
        this.text_3.setTransform(27, 1.7);
        this.text_4 = new cjs.Text("4", "10px 'Myriad Pro'");
        this.text_4.setTransform(21.8, 17.7);
        this.text_5 = new cjs.Text("5", "10px 'Myriad Pro'");
        this.text_5.setTransform(10, 27.7);
        this.text_6 = new cjs.Text("6", "10px 'Myriad Pro'");
        this.text_6.setTransform(-4.5, 32.7);
        this.text_7 = new cjs.Text("7", "10px 'Myriad Pro'");
        this.text_7.setTransform(-19, 27.7);
        this.text_8 = new cjs.Text("8", "10px 'Myriad Pro'");
        this.text_8.setTransform(-31, 17.7);
        this.text_9 = new cjs.Text("9", "10px 'Myriad Pro'");
        this.text_9.setTransform(-36, 1.7);
        this.text_10 = new cjs.Text("10", "10px 'Myriad Pro'");
        this.text_10.setTransform(-32, -12.3);
        this.text_11 = new cjs.Text("11", "10px 'Myriad Pro'");
        this.text_11.setTransform(-20, -23.3);
        this.text_12 = new cjs.Text("12", "10px 'Myriad Pro'");
        this.text_12.setTransform(-7, -27.8);
        //center dot
        this.text_dot = new cjs.Text(".", "40px 'Myriad Pro'");
        this.text_dot.setTransform(-6.5, -1);
        //center dotted circle
        this.dotted = new lib.DottedCircle(30, 12);
        this.dotted.setTransform(0, 0, 0.18, 0.18);

        this.addChild(this.shape_group1, this.shape_group2, this.Line_1);
        this.addChild(this.text_1, this.text_2, this.text_3, this.text_4, this.text_5, this.text_6, this.text_7, this.text_8, this.text_9, this.text_10, this.text_11, this.text_12, this.text_dot, this.dotted)

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 511.3, 143.6);

    (lib.Symboldotclock = function() {
        this.initialize();

        this.shape_group1 = new cjs.Shape();
        this.shape_group1.graphics.f("#C8C9CB").s("#000000").ss(0.6, 0, 0, 4).arc(0, 0, 42, 0, 2 * Math.PI);
        this.shape_group1.setTransform(0, 0);

        this.shape_group2 = new cjs.Shape();
        this.shape_group2.graphics.f("#ffffff").s("#000000").ss(0.4, 0, 0, 4).arc(0, 0, 37.7, 0, 2 * Math.PI);
        this.shape_group2.setTransform(0, 0);

        this.Line_1 = new cjs.Shape();
        this.Line_1.graphics.s("#000000").setStrokeStyle(0.7).moveTo(0, -38).lineTo(0, -35).moveTo(0, 35).lineTo(0, 38).moveTo(35, 0).lineTo(38, 0).moveTo(-35, 0).lineTo(-38, 0).moveTo(18, -33).lineTo(16.5, -30).moveTo(33, -19).lineTo(30, -17).moveTo(-30, 17.5).lineTo(-32.5, 19).moveTo(-17, 30).lineTo(-19, 32.5).moveTo(-31, -16).lineTo(-33.5, -18).moveTo(-19, -33).lineTo(-17, -30).moveTo(33, 17.5).lineTo(30.5, 16).moveTo(20, 31.5).lineTo(18.2, 29);
        this.Line_1.setTransform(0, 0);

        this.text_1 = new cjs.Text("1", "10px 'Myriad Pro'");
        this.text_1.setTransform(10, -23.3);
        this.text_2 = new cjs.Text("2", "10px 'Myriad Pro'");
        this.text_2.setTransform(21.8, -12.3);
        this.text_3 = new cjs.Text("3", "10px 'Myriad Pro'");
        this.text_3.setTransform(27, 1.7);
        this.text_4 = new cjs.Text("4", "10px 'Myriad Pro'");
        this.text_4.setTransform(21.8, 17.7);
        this.text_5 = new cjs.Text("5", "10px 'Myriad Pro'");
        this.text_5.setTransform(10, 27.7);
        this.text_6 = new cjs.Text("6", "10px 'Myriad Pro'");
        this.text_6.setTransform(-4.5, 32.7);
        this.text_7 = new cjs.Text("7", "10px 'Myriad Pro'");
        this.text_7.setTransform(-19, 27.7);
        this.text_8 = new cjs.Text("8", "10px 'Myriad Pro'");
        this.text_8.setTransform(-31, 17.7);
        this.text_9 = new cjs.Text("9", "10px 'Myriad Pro'");
        this.text_9.setTransform(-36, 1.7);
        this.text_10 = new cjs.Text("10", "10px 'Myriad Pro'");
        this.text_10.setTransform(-32, -12.3);
        this.text_11 = new cjs.Text("11", "10px 'Myriad Pro'");
        this.text_11.setTransform(-20, -23.3);
        this.text_12 = new cjs.Text("12", "10px 'Myriad Pro'");
        this.text_12.setTransform(-7, -27.8);
        //center dot
        this.text_dot = new cjs.Text(".", "40px 'Myriad Pro'");
        this.text_dot.setTransform(-6.5, -1);

        this.addChild(this.shape_group1, this.shape_group2, this.Line_1);
        this.addChild(this.text_1, this.text_2, this.text_3, this.text_4, this.text_5, this.text_6, this.text_7, this.text_8, this.text_9, this.text_10, this.text_11, this.text_12, this.text_dot, this.dotted)

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 511.3, 143.6);

    (lib.spiral = function(count, springColor, holeFillColor, holeBorderColor) {
        this.initialize();
        var ToBeAdded = [];
        var springColorTemp = "#818888";
        if (springColor) {
            springColorTemp = springColor;
        }
        for (var col = 0; col < count; col++) {

            var spring = new cjs.Shape();
            spring.graphics.f().s(springColorTemp).ss(1.5, 1, 0, 4).p("AgmgVQAWgaATABQATAAALATQAKASgHAUQgIAYgbAM");
            spring.setTransform(0 + (col * 15.80), 0);

            var hole = new cjs.Shape();
            hole.graphics.f("#FFF173").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg").f().s("#959C9D").ss(0.5, 0, 0, 4).p("AAAAbQALAAAIgIQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIQgIAIAAAKQAAALAIAIQAJAIAJAAg");
            hole.setTransform(0 + (col * 15.9), 5.5);

            this.addChild(hole, spring);
        }
    }).prototype = p = new cjs.Container();
    // (lib.ShapeCloud = function(fillStyle,strokeStyle,lineWidth) {
    //   this.initialize();

    //   this.cloud=new cjs.Shape();
    //   this.cloud.graphics.f(fillStyle).s(strokeStyle).ss(lineWidth).moveTo(185 , 305 ).bezierCurveTo(114 , 326 , 76 , 101 , 243 , 130 ).bezierCurveTo(266 , 134 , 205 , 98 , 321 , 77 ).bezierCurveTo(336 , 74 , 457 , 74 , 446 , 130 ).bezierCurveTo(440 , 162 , 475 , 70 , 550 , 155 ).bezierCurveTo(574 , 182 , 544 , 207 , 528 , 215 ).bezierCurveTo(518 , 220 , 587 , 203 , 592 , 270 ).bezierCurveTo(595 , 307 , 578 , 323 , 566 , 328 ).bezierCurveTo(552 , 334 , 529 , 327 , 514 , 324 ).bezierCurveTo(499 , 321 , 540 , 346 , 495 , 390 ).bezierCurveTo(466 , 418 , 386 , 427 , 365 , 415 ).bezierCurveTo(352 , 408 , 327 , 397 , 322 , 379 ).bezierCurveTo(320 , 373 , 304 , 404 , 266 , 407 ).bezierCurveTo(251 , 408 , 213 , 395 , 202 , 385 ).bezierCurveTo(147 , 332 , 199 , 301 , 185 , 305 );
    //   this.addChild(this.cloud)
    //  }).prototype = p = new cjs.Container();

    (lib.ShapeCloud = function(fillStyle, strokeStyle, lineWidth) {
        this.initialize();
        var xoff = -185,
            yoff = -305;
        this.cloud = new cjs.Shape();
        this.cloud.graphics.f(fillStyle).s(strokeStyle).ss(lineWidth).mt(185 + xoff, 305 + yoff).bezierCurveTo(114 + xoff, 326 + yoff, 76 + xoff, 101 + yoff, 243 + xoff, 130 + yoff).bezierCurveTo(266 + xoff, 134 + yoff, 205 + xoff, 98 + yoff, 321 + xoff, 77 + yoff).bezierCurveTo(336 + xoff, 74 + yoff, 457 + xoff, 74 + yoff, 446 + xoff, 130 + yoff).bezierCurveTo(440 + xoff, 162 + yoff, 475 + xoff, 70 + yoff, 550 + xoff, 155 + yoff).bezierCurveTo(574 + xoff, 182 + yoff, 544 + xoff, 207 + yoff, 528 + xoff, 215 + yoff).bezierCurveTo(518 + xoff, 220 + yoff, 587 + xoff, 203 + yoff, 592 + xoff, 270 + yoff).bezierCurveTo(595 + xoff, 307 + yoff, 578 + xoff, 323 + yoff, 566 + xoff, 328 + yoff).bezierCurveTo(552 + xoff, 334 + yoff, 529 + xoff, 327 + yoff, 514 + xoff, 324 + yoff).bezierCurveTo(499 + xoff, 321 + yoff, 540 + xoff, 346 + yoff, 495 + xoff, 390 + yoff).bezierCurveTo(466 + xoff, 418 + yoff, 386 + xoff, 427 + yoff, 365 + xoff, 415 + yoff).bezierCurveTo(352 + xoff, 408 + yoff, 327 + xoff, 397 + yoff, 322 + xoff, 379 + yoff).bezierCurveTo(320 + xoff, 373 + yoff, 304 + xoff, 404 + yoff, 266 + xoff, 407 + yoff).bezierCurveTo(251 + xoff, 408 + yoff, 213 + xoff, 395 + yoff, 202 + xoff, 385 + yoff).bezierCurveTo(147 + xoff, 332 + yoff, 199 + xoff, 301 + yoff, 185 + xoff, 305 + yoff);
        this.addChild(this.cloud)
    }).prototype = p = new cjs.Container();

    (lib.init_Magic_Wand = function() {
        for (var i = 0; i < 18; i++) {
            lib.properties.manifest.push({
                src: "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/viovar/images/magic_wand/magic_wand" + i + ".png",
                id: "magic_wand" + i
            })
        };
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.magic_wand0 = function() {
        this.initialize(img.magic_wand0);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand1 = function() {
        this.initialize(img.magic_wand1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand2 = function() {
        this.initialize(img.magic_wand2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand3 = function() {
        this.initialize(img.magic_wand3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand4 = function() {
        this.initialize(img.magic_wand4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand5 = function() {
        this.initialize(img.magic_wand5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand6 = function() {
        this.initialize(img.magic_wand6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand7 = function() {
        this.initialize(img.magic_wand7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand8 = function() {
        this.initialize(img.magic_wand8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand9 = function() {
        this.initialize(img.magic_wand9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand10 = function() {
        this.initialize(img.magic_wand10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand11 = function() {
        this.initialize(img.magic_wand11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand12 = function() {
        this.initialize(img.magic_wand12);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand13 = function() {
        this.initialize(img.magic_wand13);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand14 = function() {
        this.initialize(img.magic_wand14);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand15 = function() {
        this.initialize(img.magic_wand15);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand16 = function() {
        this.initialize(img.magic_wand16);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.magic_wand17 = function() {
        this.initialize(img.magic_wand17);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

     var whiteBackground, magic_wand0, magic_wand1, magic_wand2, magic_wand3, magic_wand4, magic_wand5, magic_wand6, magic_wand7, magic_wand8,
        magic_wand9, magic_wand10, magic_wand11, magic_wand12, magic_wand13, magic_wand14, magic_wand15, magic_wand16, magic_wand17;
        lib.isShowAnsBtn = false;

    (lib.Magic_Wand = function(myStage, isShowAnsBtn) {
        this.initialize();
        $('#toggleEditor', parent.document).hide();
        if (isShowAnsBtn == null) {
            isShowAnsBtn = true;
             lib.isShowAnsBtn = isShowAnsBtn;
        }
        whiteBackground = new cjs.Shape();
        whiteBackground.graphics.f('#ffffff').drawRect(-135, -120, 1920, 1080);
        var xPos = 430,
            yPos = -130,
            scaleX = 1.2,
            scaleY = 1.2;

        magic_wand0 = new lib.magic_wand0();
        magic_wand0.setTransform(xPos, yPos, scaleX, scaleY);
        magic_wand1 = new lib.magic_wand1();
        magic_wand1.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand1.visible = false;
        magic_wand2 = new lib.magic_wand2();
        magic_wand2.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand2.visible = false;
        magic_wand3 = new lib.magic_wand3();
        magic_wand3.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand3.visible = false;
        magic_wand4 = new lib.magic_wand4();
        magic_wand4.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand4.visible = false;
        magic_wand5 = new lib.magic_wand5();
        magic_wand5.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand5.visible = false;
        magic_wand6 = new lib.magic_wand6();
        magic_wand6.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand6.visible = false;
        magic_wand7 = new lib.magic_wand7();
        magic_wand7.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand7.visible = false;
        magic_wand8 = new lib.magic_wand8();
        magic_wand8.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand8.visible = false;
        magic_wand9 = new lib.magic_wand9();
        magic_wand9.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand9.visible = false;
        magic_wand10 = new lib.magic_wand10();
        magic_wand10.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand2.visible = false;
        magic_wand11 = new lib.magic_wand11();
        magic_wand11.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand11.visible = false;
        magic_wand12 = new lib.magic_wand12();
        magic_wand12.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand12.visible = false;
        magic_wand13 = new lib.magic_wand13();
        magic_wand13.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand13.visible = false;
        magic_wand14 = new lib.magic_wand14();
        magic_wand14.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand14.visible = false;
        magic_wand15 = new lib.magic_wand15();
        magic_wand15.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand15.visible = false;
        magic_wand16 = new lib.magic_wand16();
        magic_wand16.setTransform(xPos, yPos, scaleX, scaleY);
        // magic_wand16.visible = false;
        magic_wand17 = new lib.magic_wand17();
        magic_wand17.setTransform(xPos + 216, yPos + 360, scaleX, scaleY);
        magic_wand17.regX = 180, magic_wand17.regY = 300;

        myStage.addChild(whiteBackground, magic_wand17, magic_wand16, magic_wand15, magic_wand14, magic_wand13, magic_wand12, magic_wand11, magic_wand10, magic_wand9, magic_wand8, magic_wand7, magic_wand6, magic_wand5, magic_wand4, magic_wand3, magic_wand2, magic_wand1, magic_wand0);

        magic_wand0.cursor = 'pointer';
        magic_wand0.addEventListener('click', lib.playMagicWand) ;

            }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);

 (lib.playMagicWand = function() {
        cjs.Tween.get(magic_wand0).to({
            alphaFrom: 1,
            alphaTo: 1
        }, 1000).call(function() {

            magic_wand0.visible = false;
            cjs.Tween.get(magic_wand1).to({
                alphaFrom: 1,
                alphaTo: 1
            }, 0).call(function() {
                magic_wand1.visible = false;
                cjs.Tween.get(magic_wand2).to({
                    alphaFrom: 1,
                    alphaTo: 1
                }, 0).call(function() {
                    magic_wand2.visible = false;
                    cjs.Tween.get(magic_wand3).to({
                        alphaFrom: 1,
                        alphaTo: 1
                    }, 0).call(function() {
                        magic_wand3.visible = false;
                        cjs.Tween.get(magic_wand4).to({
                            alphaFrom: 1,
                            alphaTo: 1
                        }, 0).call(function() {
                            magic_wand4.visible = false;
                            cjs.Tween.get(magic_wand5).to({
                                alphaFrom: 1,
                                alphaTo: 1
                            }, 0).call(function() {
                                magic_wand5.visible = false;
                                cjs.Tween.get(magic_wand6).to({
                                    alphaFrom: 1,
                                    alphaTo: 1
                                }, 0).call(function() {
                                    magic_wand6.visible = false;
                                    cjs.Tween.get(magic_wand7).to({
                                        alphaFrom: 1,
                                        alphaTo: 1
                                    }, 0).call(function() {
                                        magic_wand7.visible = false;
                                        cjs.Tween.get(magic_wand8).to({
                                            alphaFrom: 1,
                                            alphaTo: 1
                                        }, 0).call(function() {
                                            magic_wand8.visible = false;
                                            cjs.Tween.get(magic_wand9).to({
                                                alphaFrom: 1,
                                                alphaTo: 1
                                            }, 0).call(function() {
                                                magic_wand9.visible = false;
                                                cjs.Tween.get(magic_wand10).to({
                                                    alphaFrom: 1,
                                                    alphaTo: 1
                                                }, 0).call(function() {
                                                    magic_wand10.visible = false;
                                                    cjs.Tween.get(magic_wand11).to({
                                                        alphaFrom: 1,
                                                        alphaTo: 1
                                                    }, 0).call(function() {
                                                        magic_wand11.visible = false;
                                                        cjs.Tween.get(magic_wand12).to({
                                                            alphaFrom: 1,
                                                            alphaTo: 1
                                                        }, 200).call(function() {
                                                            magic_wand12.visible = false;
                                                            cjs.Tween.get(magic_wand13).to({
                                                                alphaFrom: 1,
                                                                alphaTo: 1
                                                            }, 100).call(function() {
                                                                magic_wand13.visible = false;
                                                                cjs.Tween.get(magic_wand14).to({
                                                                    alphaFrom: 1,
                                                                    alphaTo: 1
                                                                }, 200).call(function() {
                                                                    magic_wand14.visible = false;
                                                                    cjs.Tween.get(magic_wand15).to({
                                                                        alphaFrom: 1,
                                                                        alphaTo: 1
                                                                    }, 200).call(function() {
                                                                        magic_wand15.visible = false;
                                                                        cjs.Tween.get(magic_wand16).to({
                                                                            alphaFrom: 1,
                                                                            alphaTo: 1
                                                                        }, 200).call(function() {
                                                                            magic_wand16.visible = false;
                                                                            cjs.Tween.get(magic_wand17).to({
                                                                                alphaFrom: 1,
                                                                                alphaTo: 1
                                                                            }, 1000).call(function() {
                                                                                // magic_wand17.visible = false;

                                                                                cjs.Tween.get(magic_wand17).to({
                                                                                    scaleX: 0,
                                                                                    scaleY: 0
                                                                                }, 700).call(function() {
                                                                                    magic_wand17.visible = false;
                                                                                    $('#toggleEditor', parent.document).show();
                                                                                    whiteBackground.visible = false;
                                                                                    if (lib.isShowAnsBtn == true) {
                                                                                        $(btn_answers).show();
                                                                                        $(btn_answers).removeClass('disabled');
                                                                                    }
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.NumberLine = function(dots, spacingX, xPos, yPos, scaleX, scaleY) {
        this.initialize();

        var startPosX = 0,
            startPosY = 10,
            spacingY = 1;
        extraSpaceRatio = 1 / 2, numberLineType = "circle"; //bar|circle
        var arrowStartX = startPosX + (spacingX * dots) - (spacingX * extraSpaceRatio);
        var arrowWidth = 5,
            arrowHeight = 5;
        var textArr = [];
        this.texts = [];
        this.numberLine = new cjs.Shape();
        this.numberLine.graphics.ss(1.5).f("#000000").s("#000000").moveTo(startPosX - (spacingX * extraSpaceRatio), startPosY).lineTo(arrowStartX, startPosY);
        this.numberLine.graphics.ss(1.5).moveTo(arrowStartX, startPosY);
        this.numberLine.graphics.lineTo(arrowStartX, startPosY - (arrowHeight / 2));
        this.numberLine.graphics.lineTo(arrowStartX + arrowWidth, startPosY);
        this.numberLine.graphics.lineTo(arrowStartX, startPosY + (arrowHeight / 2));
        this.numberLine.graphics.lineTo(arrowStartX, startPosY);
        var numberLineLimit = dots;

        for (var dot = 0; dot < dots; dot++) {
            var strokeColor = "#000000";
            this.numberLine.graphics.f("#000000").ss(1.5).s(strokeColor).rect(startPosX + (spacingX * dot), startPosY - 5, 0.4, 10);
        }
        this.numberLine.setTransform(xPos, yPos, scaleX, scaleY);

        this.addChild(this.numberLine);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);



    (lib.tallinje_1b = function(N_count, dots, spacingX, xPos, yPos, scaleX, scaleY) {
        this.initialize();

        var startPosX = 0,
            startPosY = 10,
            spacingY = 1;
        extraSpaceRatio = 1 / 2, numberLineType = "circle"; //bar|circle
        var arrowStartX = startPosX + (spacingX * dots) - (spacingX * extraSpaceRatio);
        var arrowWidth = 5,
            arrowHeight = 5;
        var textArr = [];
        this.texts = [];
        this.tallinje_1b = new cjs.Shape();
        this.textContainer = new cjs.Container();
        this.Line_2 = new cjs.Shape();


        this.tallinje_1b.graphics.ss(1.5).f("#000000").s("#000000").moveTo(startPosX - (spacingX * extraSpaceRatio), startPosY).lineTo(arrowStartX, startPosY);
        this.tallinje_1b.graphics.ss(1.5).moveTo(arrowStartX, startPosY);
        this.tallinje_1b.graphics.lineTo(arrowStartX, startPosY - (arrowHeight / 2));
        this.tallinje_1b.graphics.lineTo(arrowStartX + arrowWidth, startPosY);
        this.tallinje_1b.graphics.lineTo(arrowStartX, startPosY + (arrowHeight / 2));
        this.tallinje_1b.graphics.lineTo(arrowStartX, startPosY);
        var numberLineLimit = dots;
        var textValues = 5;
        for (var dot = 0; dot < dots; dot++) {
            var strokeColor = "#000000";
            this.tallinje_1b.graphics.f("#000000").ss(1.5).s(strokeColor).rect(startPosX + (spacingX * dot), startPosY - 5, 0.4, 10);



            if (dot != 4 && dots == 5) {

                this.Line_2.graphics.f("#000000").s("#000000").setStrokeStyle(5.5).moveTo((208 * dot) + 200 + (42 * 1), 219).lineTo((208 * dot) + 200 + (42 * 1), 240);
                this.Line_2.graphics.f("#000000").s("#000000").setStrokeStyle(5.5).moveTo((208 * dot) + 200 + (42 * 2), 219).lineTo((208 * dot) + 200 + (42 * 2), 240);
                this.Line_2.graphics.f("#000000").s("#000000").setStrokeStyle(5.5).moveTo((208 * dot) + 200 + (42 * 3), 219).lineTo((208 * dot) + 200 + (42 * 3), 240);
                this.Line_2.graphics.f("#000000").s("#000000").setStrokeStyle(5.5).moveTo((208 * dot) + 200 + (42 * 4), 219).lineTo((208 * dot) + 200 + (42 * 4), 240);

                // this.tallinje_1b.graphics.f("#000000").ss(1.5).s(strokeColor).rect(startPosX + 10.5 + (spacingX * dot), startPosY - 2.5, 0, 5);
                // this.tallinje_1b.graphics.f("#000000").ss(1.5).s(strokeColor).rect(startPosX + 21 + (spacingX * dot), startPosY - 2.5, 0, 5);
                // this.tallinje_1b.graphics.f("#000000").ss(1.5).s(strokeColor).rect(startPosX + 31.5 + (spacingX * dot), startPosY - 2.5, 0, 5);
                // this.tallinje_1b.graphics.f("#000000").ss(1.5).s(strokeColor).rect(startPosX + 42 + (spacingX * dot), startPosY - 2.5, 0, 5);

                if (dot == 2 || dot == 3) {
                    var NText = new createjs.Text(' ' + (textValues * dot), "40px 'Myriad Pro'");
                    NText.lineHeight=-10;
                    NText.setTransform(171 + (208 * dot), 290);
                    this.textContainer.addChild(NText);
                } else {
                    var NText = new createjs.Text(' ' + (textValues * dot), "40px 'Myriad Pro'");
                    NText.lineHeight=-10;
                    NText.setTransform(181 + (208 * dot), 290);
                    this.textContainer.addChild(NText);
                }
                if (dot == 3) {
                    var NText = new createjs.Text(' ' + (textValues * (dot + 1)), "40px 'Myriad Pro'");
                    NText.lineHeight=-10;
                    NText.setTransform(171 + (208 * (dot + 1)), 290);
                    this.textContainer.addChild(NText);
                }
            }

            if (dot != 10 && dots == 11) {

                this.Line_2.graphics.f("#000000").s("#000000").setStrokeStyle(5.5).moveTo((128 * dot) + (25.8 * 1), 219).lineTo((128 * dot) + (25.8 * 1), 240);
                this.Line_2.graphics.f("#000000").s("#000000").setStrokeStyle(5.5).moveTo((128 * dot) + (25.8 * 2), 219).lineTo((128 * dot) + (25.8 * 2), 240);
                this.Line_2.graphics.f("#000000").s("#000000").setStrokeStyle(5.5).moveTo((128 * dot) + (25.8 * 3), 219).lineTo((128 * dot) + (25.8 * 3), 240);
                this.Line_2.graphics.f("#000000").s("#000000").setStrokeStyle(5.5).moveTo((128 * dot) + (25.8 * 4), 219).lineTo((128 * dot) + (25.8 * 4), 240);

                // this.tallinje_1b.graphics.f("#000000").ss(1.5).s(strokeColor).rect(startPosX + 6.43 + (spacingX * dot), startPosY - 2.5, 0, 5);
                // this.tallinje_1b.graphics.f("#000000").ss(1.5).s(strokeColor).rect(startPosX + 12.86 + (spacingX * dot), startPosY - 2.5, 0, 5);
                // this.tallinje_1b.graphics.f("#000000").ss(1.5).s(strokeColor).rect(startPosX + 19.29 + (spacingX * dot), startPosY - 2.5, 0, 5);
                // this.tallinje_1b.graphics.f("#000000").ss(1.5).s(strokeColor).rect(startPosX + 25.72 + (spacingX * dot), startPosY - 2.5, 0, 5);

                if (N_count == 100) {

                    var NText = new createjs.Text(' ' + (50 + (textValues * dot)), "40px 'Myriad Pro'");
                    NText.lineHeight=-10;
                    NText.setTransform(-28 + (128 * dot), 290);
                    this.textContainer.addChild(NText);

                    if (dot == 9) {
                        var NText = new createjs.Text(' ' + (50 + (textValues * (dot + 1))), "40px 'Myriad Pro'");
                        NText.lineHeight=-10;
                        NText.setTransform(-38 + (128 * (dot + 1)), 290);
                        this.textContainer.addChild(NText);
                    }

                } else {
                    if (dot > 1) {
                        var NText = new createjs.Text(' ' + (textValues * dot), "40px 'Myriad Pro'");
                        NText.lineHeight=-10;
                        NText.setTransform(-28 + (128 * dot), 290);
                        this.textContainer.addChild(NText);
                    } else {
                        var NText = new createjs.Text(' ' + (textValues * dot), "40px 'Myriad Pro'");
                        NText.lineHeight=-10;
                        NText.setTransform(-18 + (128 * dot), 290);
                        this.textContainer.addChild(NText);
                    }
                    if (dot == 9) {
                        var NText = new createjs.Text(' ' + (textValues * (dot + 1)), "40px 'Myriad Pro'");
                        NText.lineHeight=-10;
                        NText.setTransform(-28 + (128 * (dot + 1)), 290);
                        this.textContainer.addChild(NText);
                    }
                }
            }


        }
        this.tallinje_1b.setTransform(xPos, yPos + 150, scaleX, scaleY);

        this.addChild(this.tallinje_1b, this.Line_2, this.textContainer);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);
})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
