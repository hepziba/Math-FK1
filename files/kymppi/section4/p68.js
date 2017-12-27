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
                  src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p68_1.png",
                  id: "p68_1"
              }, {
                  src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p68_2.png",
                  id: "p68_2"
              }, {
                  src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p68_3.png",
                  id: "p68_3"
              }, {
                  src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p68_4.png",
                  id: "p68_4"
              }, {
                  src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p68_5.png",
                  id: "p68_5"
              }, {
                  src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p68_6.png",
                  id: "p68_6"
              }, {
                  src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p68_7.png",
                  id: "p68_7"
              }, {
                  src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p68_8.png",
                  id: "p68_8"
              }, {
                  src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/p68_9.png",
                  id: "p68_9"
              }, {
                  src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section4/images/odd_pageS4.png",
                  id: "pg_num"
              }]
          };

          (lib.p68_1 = function() {
              this.initialize(img.p68_1);
          }).prototype = p = new cjs.Bitmap();
          p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

          (lib.p68_2 = function() {
              this.initialize(img.p68_2);
          }).prototype = p = new cjs.Bitmap();
          p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

          (lib.p68_3 = function() {
              this.initialize(img.p68_3);
          }).prototype = p = new cjs.Bitmap();
          p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

          (lib.p68_4 = function() {
              this.initialize(img.p68_4);
          }).prototype = p = new cjs.Bitmap();
          p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

          (lib.p68_5 = function() {
              this.initialize(img.p68_5);
          }).prototype = p = new cjs.Bitmap();
          p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

          (lib.p68_6 = function() {
              this.initialize(img.p68_6);
          }).prototype = p = new cjs.Bitmap();
          p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

          (lib.p68_7 = function() {
              this.initialize(img.p68_7);
          }).prototype = p = new cjs.Bitmap();
          p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

          (lib.p68_8 = function() {
              this.initialize(img.p68_8);
          }).prototype = p = new cjs.Bitmap();
          p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

          (lib.p68_9 = function() {
              this.initialize(img.p68_9);
          }).prototype = p = new cjs.Bitmap();
          p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

          (lib.pg_num = function() {
              this.initialize(img.pg_num);
          }).prototype = p = new cjs.Bitmap();
          p.virtualBounds = new cjs.Rectangle(0, 0, 350, 350);

          (lib.Symbol1 = function() {

              this.instance_1 = new lib.pg_num();
              this.instance_1.setTransform(0, 645, 0.405, 0.405);

              this.pageNum_text = new cjs.Text("68", "12px 'ElisarDTInfant-SemiBold'");
              this.pageNum_text.setTransform(75, 665);

              this.pageBottomText = new cjs.Text("Våra mynt", "9.5px 'ElisarDTInfant-SemiBold'");
              this.pageBottomText.pos = 'left';
              this.pageBottomText.setTransform(115, 665);

              this.addChild(this.instance_1, this.pageNum_text, this.pageBottomText);

              this.roundRect1 = new cjs.Shape();
              this.roundRect1.graphics.f("#ffffff").s("#C2E2EA").ss(1).drawRoundRect(0, 0, 458, 540, 12);
              this.roundRect1.setTransform(82, 77);

              this.addChild(this.roundRect1);

              var horizontalLineContainer = new cjs.Container();

              for (var lineCount = 0; lineCount < 63; lineCount++) {

                  this.hrline_1 = new cjs.Shape();
                  this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                  this.hrline_1.setTransform(0 + (lineCount * 7), 0);

                  horizontalLineContainer.addChild(this.hrline_1);
              }

              horizontalLineContainer.setTransform(92, 346);
              this.addChild(horizontalLineContainer);

          }).prototype = p = new cjs.Container();
          p.virtualBounds = new cjs.Rectangle(0, 0, 1218.9, 677.5);

          (lib.Symbol2 = function() {
              this.initialize();

              this.headerCircle = new cjs.Shape();
              this.headerCircle.graphics.f("#89C9D9").s("#89C9D9").ss(0.7, 0, 0, 4).arc(0, 0, 4, 0, 2 * Math.PI);
              this.headerCircle.setTransform(18, 0);

              this.text_1 = new cjs.Text("Rita pengar som du behöver för att handla.", "17px 'ElisarDTInfant-Regular'");
              this.text_1.setTransform(28, 5);

              this.addChild(this.headerCircle, this.text_1);

              var horizontalLineContainer = new cjs.Container();

              for (var lineCount = 0; lineCount < 63; lineCount++) {

                  this.hrline_1 = new cjs.Shape();
                  this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                  this.hrline_1.setTransform(0 + (lineCount * 7), 0);

                  horizontalLineContainer.addChild(this.hrline_1);
              }

              horizontalLineContainer.setTransform(39, 155);
              this.addChild(horizontalLineContainer);

              for (var lineCount = 0; lineCount < 37; lineCount++) {

                  this.vrline_1 = new cjs.Shape();
                  this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                  this.vrline_1.setTransform(259, 29 + (lineCount * 7));

                  this.addChild(this.vrline_1);
              }

              var spltext = ['3 kr', '4 kr', '6 kr', '5 kr'];
              var count = 0
              var text_X = 0;
              for (var row = 0; row < 2; row++) {
                  for (var col = 0; col < 2; col++) {
                      var fillText = spltext[count];
                      count = count + 1;

                      if (row == 3 && col == 0) {
                          text_X = 53;
                      } else {
                          text_X = 58;
                      }

                      this.roundRect2 = new lib.p68_9();
                      this.roundRect2.setTransform(45 + (col * 225), 33.5 + (row * 134.5), 0.47, 0.43);

                      this.text_2 = new cjs.Text('' + fillText, "15px 'ElisarDTInfant-SemiBold'");
                      this.text_2.setTransform(text_X + (col * 225), 52 + (row * 134.5));

                      this.addChild(this.roundRect2, this.text_2);

                  }
              }

              this.instance_1 = new lib.p68_1();
              this.instance_1.setTransform(54, 107, 0.42, 0.42);

              this.instance_2 = new lib.p68_2();
              this.instance_2.setTransform(282, 107, 0.4, 0.4);

              this.instance_3 = new lib.p68_3();
              this.instance_3.setTransform(52, 210, 0.4, 0.4);

              this.instance_4 = new lib.p68_4();
              this.instance_4.setTransform(282, 228, 0.4, 0.4);

              this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4);

          }).prototype = p = new cjs.Container();
          p.virtualBounds = new cjs.Rectangle(0, 0, 490, 305);

          (lib.Symbol3 = function() {
              this.initialize();

              var horizontalLineContainer = new cjs.Container();

              for (var lineCount = 0; lineCount < 63; lineCount++) {

                  this.hrline_1 = new cjs.Shape();
                  this.hrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1).moveTo(0, 0).lineTo(5, 0);
                  this.hrline_1.setTransform(0 + (lineCount * 7), 0);

                  horizontalLineContainer.addChild(this.hrline_1);
              }

              horizontalLineContainer.setTransform(39, 137);
              this.addChild(horizontalLineContainer);

              for (var lineCount = 0; lineCount < 38; lineCount++) {

                  this.vrline_1 = new cjs.Shape();
                  this.vrline_1.graphics.f("#C2E2EA").s("#C2E2EA").ss(1.25).moveTo(0, 0).lineTo(0, 5);
                  this.vrline_1.setTransform(259, 0 + (lineCount * 7));

                  this.addChild(this.vrline_1);
              }

              var spltext = ['8 kr', '7 kr', '10 kr', '9 kr'];
              var count = 0
              var text_X = 0;
              for (var row = 0; row < 2; row++) {
                  for (var col = 0; col < 2; col++) {
                      var fillText = spltext[count];
                      count = count + 1;

                      if (row == 1 && col == 0) {
                          text_X = 54;
                      } else {
                          text_X = 58;
                      }

                      this.roundRect2 = new lib.p68_9();
                      this.roundRect2.setTransform(45 + (col * 225), 14.5 + (row * 134.5), 0.47, 0.43);

                      this.text_2 = new cjs.Text('' + fillText, "15px 'ElisarDTInfant-SemiBold'");
                      this.text_2.setTransform(text_X + (col * 225), 33 + (row * 134.5));

                      this.addChild(this.roundRect2, this.text_2);

                  }
              }

              this.instance_1 = new lib.p68_5();
              this.instance_1.setTransform(54, 64, 0.4, 0.4);

              this.instance_2 = new lib.p68_6();
              this.instance_2.setTransform(278, 62, 0.4, 0.4);

              this.instance_3 = new lib.p68_7();
              this.instance_3.setTransform(42, 195, 0.4, 0.4);

              this.instance_4 = new lib.p68_8();
              this.instance_4.setTransform(272, 214, 0.4, 0.4);

              this.addChild(this.instance_1, this.instance_2, this.instance_3, this.instance_4);

          }).prototype = p = new cjs.Container();
          p.virtualBounds = new cjs.Rectangle(0, 0, 490, 305);

          (lib.p6 = function() {
              this.initialize();

              this.v1 = new lib.Symbol2();
              this.v1.setTransform(307, 56, 1, 1, 0, 0, 0, 254.6, 0);

              this.v2 = new lib.Symbol3();
              this.v2.setTransform(307, 344, 1, 1, 0, 0, 0, 254.6, 0);

              this.other = new lib.Symbol1();
              this.other.setTransform(609.5, 339, 1, 1, 0, 0, 0, 609.5, 338.7);

              this.addChild(this.other, this.v1, this.v2);

          }).prototype = p = new cjs.Container();
          p.virtualBounds = new cjs.Rectangle(609.5, 339.3, 1218.9, 677.5);

      })(lib = lib || {}, images = images || {}, createjs = createjs || {});
      var lib, images, createjs;
