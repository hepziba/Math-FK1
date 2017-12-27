var canvas, stage, exportRoot, EnterKey;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};

    var loader = new createjs.LoadQueue(true, null, true); // allow cross origin images
    loader.addEventListener("fileload", function(evt) {
        if (evt.item.type == "image") {
            images[evt.item.id] = evt.result;
        }
    });
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
    // mathviewer.setExerciseTabs(1, 1, ['Vi reptererar addition – först upp till helt tiotal']);
    // mathviewer.setIconVisibility(true);
}

function handleComplete() {
    addEnterKeyEvent();
    exportRoot = new lib.exercise();
    exportRoot.isExercise = true;
    exportRoot.isBatExercise = true;
    exportRoot.isCheckAnswerEnabled = false;
    exportRoot.isNewExerciseEnabled = false;

    exportRoot.isAnswersAvailable = true;
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
}

var extras = function() {};
(function(lib, img, cjs) {

    var p; // shortcut to reference prototypes

    // library properties:
    lib.properties = {
        width: 1219,
        height: 678,
        fps: 20,
        color: "#FFFFFF",
        isExercise: true,
        manifest: [{
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/hundrakamrater_3.png",
            id: "dustbin"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/tallinje_1.png",
            id: "dustbinPaper"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/exercises/images/uppdelning_1.png",
            id: "uppdelning_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/exercises/images/imgblue.png",
            id: "Imgblue"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/exercises/images/imgred.png",
            id: "Imgred"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/exercises/images/imggreen.png",
            id: "Imggreen"
        }]
    };

    (lib.dustbinPaper = function() {
        this.initialize(img.dustbinPaper);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.dustbin = function() {
        this.initialize(img.dustbin);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.uppdelning_1 = function() {
        this.initialize(img.uppdelning_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Imgblue = function() {
        this.initialize(img.Imgblue);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Imgred = function() {
        this.initialize(img.Imgred);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Imggreen = function() {
        this.initialize(img.Imggreen);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);


    //Static Content
    (lib.Basement = function() {
        this.initialize();
        this.header = new lib.exerciseTitle();
        this.header.setTransform(0, -30, 1, 1, 0, 0, 0, 0, 0);
        this.addChild(this.header);
    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);



    // code for drag & drop starts here

    var dropBoxSpacing = {
        width: 0,
        height: 0
    };


    var cellSpacing = {
        width: 4,
        height: 6,
        cellSectionSpace: 16
    };

    var dropBox = {
        width: 85,
        height: 110
    };

    var draggableNumber = {
        x: 470,
        y: 260,
        width: 80,
        height: 80
    };

    var draggableNumberSpacing = {
        width: 0,
        height: 100
    };

    var dropBoxesProp = {
        x: 165,
        y: -150
    };

    var isDragging = false;
    var draggingNumber = null;
    var tempArrranNums = [];
    var lastrandomNums = 0;
    var currentChangeOptions = 1;
    var final_randomNums = 0;
    var left_imgCount = 0;
    var right_imgCount = 0;
    var imgXpositionChange = false;

    var leftImg1X = [500];
    var leftImg1Y = [100];
    var leftImg2X = [410, 510];
    var leftImg2Y = [100, 100];
    var leftImg3X = [410, 510, 460];
    var leftImg3Y = [60, 60, 150];
    var leftImg4X = [410, 510, 410, 510];
    var leftImg4Y = [60, 60, 150, 150];
    var leftImg5X = [410, 490, 455, 410, 490];
    var leftImg5Y = [25, 25, 115, 205, 205];
    var leftImg6X = [375, 455, 535, 375, 455, 535];
    var leftImg6Y = [50, 50, 50, 165, 165, 165];
    var leftImg7X = [375, 455, 535, 455, 375, 455, 535];
    var leftImg7Y = [25, 25, 25, 115, 205, 205, 205];
    var leftImg8X = [375, 455, 535, 405, 495, 375, 455, 535];
    var leftImg8Y = [25, 25, 25, 115, 115, 205, 205, 205];
    var leftImg9X = [375, 455, 535, 375, 455, 535, 375, 455, 535];
    var leftImg9Y = [25, 25, 25, 115, 115, 115, 205, 205, 205];


    var rightImg1X = [835];
    var rightImg1Y = [100];
    var rightImg2X = [790, 890];
    var rightImg2Y = [100, 100];
    var rightImg3X = [790, 890, 840];
    var rightImg3Y = [60, 60, 150];
    var rightImg4X = [790, 890, 790, 890];
    var rightImg4Y = [60, 60, 150, 150];
    var rightImg5X = [790, 870, 833, 790, 870];
    var rightImg5Y = [25, 25, 115, 205, 205];
    var rightImg6X = [755, 835, 915, 755, 835, 915];
    var rightImg6Y = [50, 50, 50, 165, 165, 165];
    var rightImg7X = [755, 835, 915, 835, 755, 835, 915];
    var rightImg7Y = [25, 25, 25, 115, 205, 205, 205];
    var rightImg8X = [755, 835, 915, 791, 871, 755, 835, 915];
    var rightImg8Y = [25, 25, 25, 115, 115, 205, 205, 205];
    var rightImg9X = [755, 835, 915, 755, 835, 915, 755, 835, 915];
    var rightImg9Y = [25, 25, 25, 115, 115, 115, 205, 205, 205];


    var tempArrranNumsX = 560;
    var tempArrranNumsY = 355;

    function handleOver(evt) {
        if (evt.currentTarget && evt.currentTarget.value >= 0) {
            var dragger = evt.currentTarget;
            dragger.value = evt.currentTarget.value;
            dragger.children[0].graphics.clear().s('#7d7d7d').beginLinearGradientFill(["#fff880", "#FFFFFF"], [0, 1], 0, 10, 0, 80).drawRoundRect(0, 0, draggableNumber.width, draggableNumber.height, 5);

        }

    }

    function handleOut(evt) {
        if (evt.currentTarget && evt.currentTarget.value >= 0) {
            var dragger = evt.currentTarget;
            dragger.value = evt.currentTarget.value;
            dragger.children[0].graphics.clear().s('#7d7d7d').beginLinearGradientFill(["#FFFFFF", "#fff880"], [0, 1], 0, 10, 0, 80).drawRoundRect(0, 0, draggableNumber.width, draggableNumber.height, 5);

        }

    }

    function dragging(event) {
        if (isDragging) {
            var isOver = false,
                targets = stage.getObjectsUnderPoint(stage.mouseX, stage.mouseY);
            if (stage.draggingShape) {
                stage.draggingShape.children[0].shadow = new createjs.Shadow('#7d7d7d', 0, 0.5, 4);

                var pt = stage.globalToLocal(stage.mouseX, stage.mouseY);
                stage.draggingShape.x = pt.x - (draggableNumber.width / 2),
                    stage.draggingShape.y = pt.y - (draggableNumber.height / 2);
                stage.update();
            }
        }

    }

    function dropping(event) {

        var completed = false;
        if (isDragging) {
            isDragging = false;
            var dropArea = null;

            if (stage.mouseInBounds) {
                for (var i = 0; i < dropBoxesBtn.length; i++) {
                    var pt = dropBoxesBtn[i].children[0].globalToLocal(stage.mouseX, stage.mouseY); // hittest check collision
                    if (dropBoxesBtn[i].children[0].hitTest(pt.x, pt.y) == true) {
                        dropArea = dropBoxesBtn[i];
                        break;
                    }
                };
            }

            if (dropArea != null && dropArea.value == event.currentTarget.draggingShape.children[1].text) {
                // currentStage.img_dustbinPaper.visible = true;
                dropArea.children[1].text = dropArea.value;
                dropArea.value = stage.draggingShape.value;
                dropArea.solved = true;
                stage.removeChild(stage.draggingShape);
                stage.draggingShape = null;
                completed = true;
            } else if (dropArea != null && dropArea.children[1].text == event.currentTarget.draggingShape.children[1].text) {
                //  currentStage.img_dustbinPaper.visible = true;
                dropArea.children[1].text = dropArea.children[1].text;
                dropArea.value = stage.draggingShape.value;
                dropArea.solved = true;
                stage.removeChild(stage.draggingShape);
                stage.draggingShape = null;
            } else {
                var arrCount = stage.draggingShape.value;
                // var xPos = tempArrranNumsX[arrCount],
                //     yPos = tempArrranNumsY[arrCount];
                var xPos = tempArrranNumsX,
                    yPos = tempArrranNumsY;

                cjs.Tween.get(stage.draggingShape).to({ x: xPos, y: yPos }, 1000);
                cjs.Tween.get(stage.draggingShape).to({ alpha: 0 }, 1000).call(function() {
                    stage.removeChild(stage.draggingShape);
                    stage.draggingShape = null;
                    stage.update();
                });

            }
        }


        if (completed == true) {
            completedAll();
            // TweenImages();
        }
        stage.update();
    }


    function completedAll() {
        cjs.Tween.get(currentStage.uppdelning_1).to({ alpha: 0 }, 2000);
        cjs.Tween.get(currentStage.imgBack_drawRect).to({ alpha: 0 }, 2500);

        for (var i = 0; i < currentStage.children.length; i++) {
            if (currentStage.children[i].name == "dropBox1") {
                cjs.Tween.get(currentStage.children[i]).to({ alpha: 0 }, 2500);
            }
        };

        stage.update();
    }

    function TweenImages() {

        for (var i = 0; i < currentStage.children.length; i++) {
            if ((currentStage.children[i].name == "ImgblueRight" && currentStage.children[i].text == true) || (currentStage.children[i].name == "ImgredRight" && currentStage.children[i].text == true) || (currentStage.children[i].name == "ImggreenRight" && currentStage.children[i].text == true)) {
                currentStage.children[i].visible = true;
                cjs.Tween.get(currentStage.children[i]).to({ alpha: 1 }, 5000);
            }
        };


        setTimeout(function() {
            currentStage.nastaContainer.visible = true;
            $(btn_newExercise).removeClass('disabled');
            $(btn_newExercise).show();
            EnterKey = 1;
        }, 2700);

    }


    function handlePress(evt) {

        if (evt.currentTarget && evt.currentTarget.value >= 0) {
            var dragger = new createjs.Container();
            dragger.value = evt.currentTarget.value;
            var tempCell = new createjs.Shape()
                //tempCell.graphics.s('#7d7d7d').beginLinearGradientFill(["#fff880", "#FFFFFF"], [0, 1], 0, 10, 0, 80);
            tempCell.graphics.drawRoundRect(0, 0, draggableNumber.width, draggableNumber.height, 5);
            var tempCellText = new createjs.Text("" + evt.currentTarget.value, "bold 60px 'Myriad Pro'", "#000000");
            tempCellText.textAlign = "center";
            tempCellText.lineHeight = -5;
            tempCellText.x = draggableNumber.width / 2;
            tempCellText.y = draggableNumber.height / 4 + 50;

            dragger.addChild(tempCell);
            dragger.addChild(tempCellText);

            dragger.scaleX = dragger.scaleY = currentStage.scaleX;

            stage.addChild(dragger);
            stage.draggingShape = dragger;
            // stage.draggingShape.x = stage.mouseX - (draggableNumber.width / 2), stage.draggingShape.y = stage.mouseY - (draggableNumber.height / 2);
            var pt = stage.globalToLocal(stage.mouseX, stage.mouseY);
            stage.draggingShape.x = pt.x - (draggableNumber.width / 2),
                stage.draggingShape.y = pt.y - (draggableNumber.height / 2);
            isDragging = true;
            stage.addEventListener("stagemousemove", dragging);
            stage.addEventListener("stagemouseup", dropping);

        }
        stage.update();
    }

    function checkHover(object) {
        object.on("mouseover", function(e) {

            for (var i = 0; i < dropBoxes.length; i++) {
                dropBoxes[i].isHover = false;
            };
            for (var i = 0; i < dropBoxesBtn.length; i++) {
                dropBoxesBtn[i].isHover = false;
            };

            e.currentTarget.isHover = true;
        });
        object.on("mouseout", function(e) {
            for (var i = 0; i < dropBoxes.length; i++) {
                dropBoxes[i].isHover = false;
            };
            for (var i = 0; i < dropBoxesBtn.length; i++) {
                dropBoxesBtn[i].isHover = false;
            };
            e.currentTarget.isHover = false;
        });
        object.on("mousedown", function(e) {
            for (var i = 0; i < dropBoxes.length; i++) {
                dropBoxes[i].isHover = false;
            };
            for (var i = 0; i < dropBoxesBtn.length; i++) {
                dropBoxesBtn[i].isHover = false;
            };
            e.currentTarget.isHover = true;
        });
    }


    function randomNumberbase() {

        var arrRandom = [];
        for (var i = 1; i < 6; i++) {
            arrRandom.push(i);
        }
        var returnArr = shuffle(arrRandom);

        for (var k = 0; k < returnArr.length; k++) {
            if (returnArr[k] != 1 && returnArr[k] != lastrandomNums) {
                final_randomNums = returnArr[k];
                lastrandomNums = returnArr[k];
                break;
            }
        }

        left_imgCount = 0;
        right_imgCount = 0;
        var tempCount = 0;
        for (var j = 0; j < returnArr.length; j++) {
            if (tempCount == 0 && returnArr[j] < final_randomNums) {
                tempCount = 1;
                left_imgCount = returnArr[j];
            }
            if (tempCount == 1 && (left_imgCount + returnArr[j] == final_randomNums)) {
                right_imgCount = returnArr[j];
                tempCount = 2;
            }
            if (tempCount == 2) {
                break;
            }
            if (j == returnArr.length - 1) {
                right_imgCount = 1;
            }
        };

    }

    function randomNumberTen() {

        var arrRandom = [];
        for (var i = 1; i < 11; i++) {
            arrRandom.push(i);
        }
        var returnArr = shuffle(arrRandom);

        for (var k = 0; k < returnArr.length; k++) {
            if (returnArr[k] != 1 && returnArr[k] != lastrandomNums) {
                final_randomNums = returnArr[k];
                lastrandomNums = returnArr[k];
                break;
            }
        }

        left_imgCount = 0;
        right_imgCount = 0;
        var tempCount = 0;
        for (var j = 0; j < returnArr.length; j++) {
            if (tempCount == 0 && returnArr[j] < final_randomNums) {
                tempCount = 1;
                left_imgCount = returnArr[j];
            }
            if (tempCount == 1 && (left_imgCount + returnArr[j] == final_randomNums)) {
                right_imgCount = returnArr[j];
                tempCount = 2;
            }
            if (tempCount == 2) {
                break;
            }
            if (j == returnArr.length - 1) {
                right_imgCount = 1;
            }
        };

    }



    function randomNumber1() {
        clearAlphaValue();
        randomNumberbase();
        setrandomValue();
    }


    function randomNumber2() {
        clearAlphaValue();
        randomNumberTen();
        setrandomValue();
    }


    function clearAlphaValue() {

        cjs.Tween.get(currentStage.uppdelning_1).to({ alpha: 1 }, 1);
        cjs.Tween.get(currentStage.imgBack_drawRect).to({ alpha: 1 }, 1);


        for (var i = 0; i < currentStage.children.length; i++) {
            if (currentStage.children[i].name == "ImgblueLeft" || currentStage.children[i].name == "ImgredLeft" || currentStage.children[i].name == "ImggreenLeft") {
                currentStage.children[i].visible = false;
            } else if ((currentStage.children[i].name == "ImgblueRight" && currentStage.children[i].text == true) || (currentStage.children[i].name == "ImgredRight" && currentStage.children[i].text == true) || (currentStage.children[i].name == "ImggreenRight" && currentStage.children[i].text == true)) {
                currentStage.children[i].visible = false;
                currentStage.children[i].text = false;
                //cjs.Tween.get(currentStage.children[i]).to({ alpha: 0 }, 1);
            }
        };
    }

    function setrandomValue() {
        currentStage.randomNumsTop.text = final_randomNums;
        currentStage.randomNumsTop.lineHeight = -2;

        if (final_randomNums > 9) {
            currentStage.randomNumsTop.x = 430;
            currentStage.randomNumsTop.y = -117;
        } else {
            currentStage.randomNumsTop.x = 460;
            currentStage.randomNumsTop.y = -117;
        }

        var arrRandom = [];
        for (var i = 1; i < 10; i++) {
            arrRandom.push(i);
        }
        var returnArr = shuffle(arrRandom);

        var imagedbagXvalueChange = 0;
        var imageRightXvalueChange = 0;
        var imageLefttXvalueChange = 0;

        if ((arrRandom[0] == 1 || arrRandom[0] == 2 || arrRandom[0] == 6 || arrRandom[0] == 9) && (imgXpositionChange == false)) {
            imagedbagXvalueChange = -370;
            imageRightXvalueChange = -370;
            imageLefttXvalueChange = 370;
            imgXpositionChange = true;
        } else if ((arrRandom[0] == 2 || arrRandom[0] == 6 || arrRandom[0] == 9) && (imgXpositionChange == true)) {
            imagedbagXvalueChange = 0;
            imageRightXvalueChange = -370;
            imageLefttXvalueChange = 370;
            imgXpositionChange = true;
        } else if (imgXpositionChange == true) {
            imagedbagXvalueChange = 370;
            imgXpositionChange = false;
        }


        currentStage.uppdelning_1.x = (currentStage.uppdelning_1.x + imagedbagXvalueChange);
        currentStage.imgBack_drawRect.x = (currentStage.imgBack_drawRect.x + imagedbagXvalueChange);

        for (var i = 0; i < currentStage.children.length; i++) {
            if (currentStage.children[i].name == "dropBox1") {
                currentStage.children[i].value = right_imgCount;
                currentStage.children[i].x = (currentStage.children[i].x + imagedbagXvalueChange);
                cjs.Tween.get(currentStage.children[i]).to({ alpha: 1 }, 1);
                break;
            }
        };

        for (var i = 0; i < dropBoxesBtn.length; i++) {
            dropBoxesBtn[i].children[1].text = "";
            dropBoxesBtn[i].value = right_imgCount;
            dropBoxesBtn[i].children[0].graphics._fillInstructions[0].params[1] = '#ffffff';
            dropBoxesBtn[i].children[0].alpha = 1;
            dropBoxesBtn[i].wrapper = 0;

        };



        var setDifferentButton1 = "";
        var setDifferentButton2 = "";
        if (returnArr[0] == 1 || returnArr[0] == 4 || returnArr[0] == 7) {
            setDifferentButton1 = "ImgblueLeft";
            setDifferentButton2 = "ImgblueRight";
        } else if (returnArr[0] == 2 || returnArr[0] == 5 || returnArr[0] == 8) {
            setDifferentButton1 = "ImgredLeft";
            setDifferentButton2 = "ImgredRight";
        } else if (returnArr[0] == 3 || returnArr[0] == 6 || returnArr[0] == 9) {
            setDifferentButton1 = "ImggreenLeft";
            setDifferentButton2 = "ImggreenRight";
        }



        var Arr_countleft = 0;
        var Arr_countright = 0;
        for (var i = 0; i < currentStage.children.length; i++) {


            if (left_imgCount == 1 && currentStage.children[i].name == setDifferentButton1 && (currentStage.children[i].value == Arr_countleft + 1)) {

                currentStage.children[i].visible = true;
                currentStage.children[i].x = (leftImg1X[Arr_countleft] + imageLefttXvalueChange);
                currentStage.children[i].y = leftImg1Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }

            } else if (left_imgCount == 2 && currentStage.children[i].name == setDifferentButton1 && (currentStage.children[i].value == Arr_countleft + 1)) {
                currentStage.children[i].visible = true;
                currentStage.children[i].x = (leftImg2X[Arr_countleft] + imageLefttXvalueChange);
                currentStage.children[i].y = leftImg2Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 3 && currentStage.children[i].name == setDifferentButton1 && (currentStage.children[i].value == Arr_countleft + 1)) {
                currentStage.children[i].visible = true;
                currentStage.children[i].x = (leftImg3X[Arr_countleft] + imageLefttXvalueChange);
                currentStage.children[i].y = leftImg3Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 4 && currentStage.children[i].name == setDifferentButton1 && (currentStage.children[i].value == Arr_countleft + 1)) {
                currentStage.children[i].visible = true;
                currentStage.children[i].x = (leftImg4X[Arr_countleft] + imageLefttXvalueChange);
                currentStage.children[i].y = leftImg4Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 5 && currentStage.children[i].name == setDifferentButton1 && (currentStage.children[i].value == Arr_countleft + 1)) {
                currentStage.children[i].visible = true;
                currentStage.children[i].x = (leftImg5X[Arr_countleft] + imageLefttXvalueChange);
                currentStage.children[i].y = leftImg5Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 6 && currentStage.children[i].name == setDifferentButton1 && (currentStage.children[i].value == Arr_countleft + 1)) {
                currentStage.children[i].visible = true;
                currentStage.children[i].x = (leftImg6X[Arr_countleft] + imageLefttXvalueChange);
                currentStage.children[i].y = leftImg6Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 7 && currentStage.children[i].name == setDifferentButton1 && (currentStage.children[i].value == Arr_countleft + 1)) {
                currentStage.children[i].visible = true;
                currentStage.children[i].x = (leftImg7X[Arr_countleft] + imageLefttXvalueChange);
                currentStage.children[i].y = leftImg7Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 8 && currentStage.children[i].name == setDifferentButton1 && (currentStage.children[i].value == Arr_countleft + 1)) {
                currentStage.children[i].visible = true;
                currentStage.children[i].x = (leftImg8X[Arr_countleft] + imageLefttXvalueChange);
                currentStage.children[i].y = leftImg8Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 9 && currentStage.children[i].name == setDifferentButton1 && (currentStage.children[i].value == Arr_countleft + 1)) {
                currentStage.children[i].visible = true;
                currentStage.children[i].x = (leftImg9X[Arr_countleft] + imageLefttXvalueChange);
                currentStage.children[i].y = leftImg9Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            }


            if (right_imgCount == 1 && currentStage.children[i].name == setDifferentButton2 && (currentStage.children[i].value == Arr_countright + 1)) {
                currentStage.children[i].text = true;
                currentStage.children[i].x = (rightImg1X[Arr_countright] + imageRightXvalueChange);
                currentStage.children[i].y = rightImg1Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 2 && currentStage.children[i].name == setDifferentButton2 && (currentStage.children[i].value == Arr_countright + 1)) {
                currentStage.children[i].text = true;
                currentStage.children[i].x = (rightImg2X[Arr_countright] + imageRightXvalueChange);
                currentStage.children[i].y = rightImg2Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 3 && currentStage.children[i].name == setDifferentButton2 && (currentStage.children[i].value == Arr_countright + 1)) {
                currentStage.children[i].text = true;
                currentStage.children[i].x = (rightImg3X[Arr_countright] + imageRightXvalueChange);
                currentStage.children[i].y = rightImg3Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 4 && currentStage.children[i].name == setDifferentButton2 && (currentStage.children[i].value == Arr_countright + 1)) {
                currentStage.children[i].text = true;
                currentStage.children[i].x = (rightImg4X[Arr_countright] + imageRightXvalueChange);
                currentStage.children[i].y = rightImg4Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 5 && currentStage.children[i].name == setDifferentButton2 && (currentStage.children[i].value == Arr_countright + 1)) {
                currentStage.children[i].text = true;
                currentStage.children[i].x = (rightImg5X[Arr_countright] + imageRightXvalueChange);
                currentStage.children[i].y = rightImg5Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 6 && currentStage.children[i].name == setDifferentButton2 && (currentStage.children[i].value == Arr_countright + 1)) {
                currentStage.children[i].text = true;
                currentStage.children[i].x = (rightImg6X[Arr_countright] + imageRightXvalueChange);
                currentStage.children[i].y = rightImg6Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 7 && currentStage.children[i].name == setDifferentButton2 && (currentStage.children[i].value == Arr_countright + 1)) {
                currentStage.children[i].text = true;
                currentStage.children[i].x = (rightImg7X[Arr_countright] + imageRightXvalueChange);
                currentStage.children[i].y = rightImg7Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 8 && currentStage.children[i].name == setDifferentButton2 && (currentStage.children[i].value == Arr_countright + 1)) {
                currentStage.children[i].text = true;
                currentStage.children[i].x = (rightImg8X[Arr_countright] + imageRightXvalueChange);
                currentStage.children[i].y = rightImg8Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 9 && currentStage.children[i].name == setDifferentButton2 && (currentStage.children[i].value == Arr_countright + 1)) {
                currentStage.children[i].text = true;
                currentStage.children[i].x = (rightImg9X[Arr_countright] + imageRightXvalueChange);
                currentStage.children[i].y = rightImg9Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            }

        };

        stage.update();

    }


    function AnswerNumberView(evt) {

        if (currentStage.nastaContainer.value == 0) {
            var obj = evt.target;
            var objText;
            if (obj.name == "tempCell") {
                objText = parseInt(obj.value);
            } else {
                objText = parseInt(obj.text);
            }
            dropBoxesBtn[0].children[1].text = objText;
            if (right_imgCount == objText) {
                EnterKey = 2;
                currentStage.nastaContainer.value = 1;
                cjs.Tween.get(currentStage.uppdelning_1).to({ alpha: 0 }, 3000);
                cjs.Tween.get(currentStage.imgBack_drawRect).to({ alpha: 0 }, 2500);
                for (var i = 0; i < currentStage.children.length; i++) {
                    if (currentStage.children[i].name == "dropBox1") {
                        cjs.Tween.get(currentStage.children[i]).to({ alpha: 0 }, 3000);
                    }
                };
                TweenImages();

            } else {
                setTimeout(function() {
                    dropBoxesBtn[0].children[1].text = " ";
                }, 1100);
            }

            stage.update();
        }
    }


    function resetAll() {

        var loopIndex = 1;
        for (var i = 0; i < dropBoxesBtn.length; i++) {
            dropBoxesBtn[i].children[1].text = "";
            dropBoxesBtn[i].value = loopIndex;

            // dropBoxesBtn[i].children[1].text = dropBoxesBtn[i].value;
            dropBoxesBtn[i].children[0].graphics._fillInstructions[0].params[1] = '#ffffff';
            dropBoxesBtn[i].children[0].alpha = 1;
            dropBoxesBtn[i].wrapper = 0;
            loopIndex++;
            if (i == 2) {
                loopIndex = 1;
            }
        };

        wrapperIndex = 1;

    }

    function nastraRandomNumber(evt) {
        var obj = evt.target;
        currentStage.nastaContainer.value = 0;
        currentStage.nastaContainer.visible = false;
        EnterKey = 0;
        if (typeof btn_newExercise != 'undefined') {
            $(btn_newExercise).hide();
        }
        if (dropBoxesBtn[0].children[1].text != "" && dropBoxesBtn[0].children[1].text != " ") {
            resetAll();
            if (currentChangeOptions == 1) {
                randomNumber1();
            } else if (currentChangeOptions == 2) {
                randomNumber2();
            }

            setTimeout(function() {
                cjs.Tween.get(currentStage.uppdelning_1).to({ alpha: 1 }, 1);
                cjs.Tween.get(currentStage.imgBack_drawRect).to({ alpha: 1 }, 1);

            }, 2000);
            stage.update();
        }
    }


    function ChangeOptions(evt) {
        if (currentStage.nastaContainer.visible == true || dropBoxesBtn[0].children[1].text == "" || dropBoxesBtn[0].children[1].text == " ") {
            var obj = evt.target;
            resetAll();
            currentStage.nastaContainer.value = 0;
            currentStage.nastaContainer.visible = false;
            EnterKey = 0;

            if (typeof btn_newExercise != 'undefined') {
                $(btn_newExercise).hide();
            }

            if (evt.currentTarget.name == "tallinje1") {
                obj.parent.children[1].graphics._fillInstructions[0].params[1] = "grey";
                currentStage.option2.children[1].graphics._fillInstructions[0].params[1] = "#ffffff";
                currentChangeOptions = 1;
                randomNumber1();
            } else if (evt.currentTarget.name == "tallinje2") {
                obj.parent.children[1].graphics._fillInstructions[0].params[1] = "grey";
                currentStage.option1.children[1].graphics._fillInstructions[0].params[1] = "#ffffff";
                currentChangeOptions = 2;
                randomNumber2();
            }

            for (var i = 0; i < currentStage.children.length; i++) {
                if (currentStage.children[i].name == "dragger") {

                    if (evt.currentTarget.name == "tallinje1") {
                        if (currentStage.children[i].value == 6 || currentStage.children[i].value == 7 || currentStage.children[i].value == 8 || currentStage.children[i].value == 9 || currentStage.children[i].value == 10) {
                            currentStage.children[i].visible = false;
                        }
                    } else if (evt.currentTarget.name == "tallinje2") {
                        if (currentStage.children[i].value == 6 || currentStage.children[i].value == 7 || currentStage.children[i].value == 8 || currentStage.children[i].value == 9 || currentStage.children[i].value == 10) {
                            currentStage.children[i].visible = true;
                        }
                    }
                }
            };

            setTimeout(function() {
                cjs.Tween.get(currentStage.uppdelning_1).to({ alpha: 1 }, 1);
                cjs.Tween.get(currentStage.imgBack_drawRect).to({ alpha: 1 }, 1);
            }, 2000);

            stage.update();
        }
    }


    var currentStage;
    var dropBoxes = [];
    var dropBoxesBtn = [];
    var allDraggables = [];

    (lib.Stage1 = function() {
        this.initialize();
        thisStage = this;

        randomNumberbase();
        tempArrranNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        var sections = 1,
            cellBlocks = 10,
            rows = 1,
            X_height = 0,
            Y_height = 42,
            draggerVisible = true;
        for (var section = 0; section < sections; section++) {
            for (var cellBlock = 0; cellBlock < cellBlocks; cellBlock++) {
                for (var row = 0; row < rows; row++) {

                    var dragger = new createjs.Container();
                    dragger.value = cellBlock + 1;

                    if (cellBlock > 4) {
                        Y_height = 142;
                        X_height = -500;
                        draggerVisible = false;
                    }

                    dragger.x = (draggableNumber.x + (draggableNumber.width * cellBlock) + (draggableNumberSpacing.width * cellBlock)) + ((draggableNumber.width * cellBlocks) * section + cellSpacing.cellSectionSpace * section) + 20 * cellBlock;

                    dragger.y = draggableNumber.y + (draggableNumber.height * row) + (draggableNumberSpacing.height * row) + (draggableNumberSpacing.height * 0) + 40;


                    var tempCell = new createjs.Shape()
                    tempCell.graphics.s('#7d7d7d').beginLinearGradientFill(["#FFFFFF", "#fff880"], [0, 1], 0, 10, 0, 80).drawRoundRect(0, 0, draggableNumber.width, draggableNumber.height, 5);
                    tempCell.x = tempCell.x - 50 + X_height;
                    tempCell.y = tempCell.y + Y_height;
                    tempCell.name = "tempCell";
                    tempCell.value = tempArrranNums[cellBlock];


                    var tempCellText = new createjs.Text("" + tempArrranNums[cellBlock], "bold 60px 'Myriad Pro'", "#000000");
                    tempCellText.textAlign = "center";
                    tempCellText.lineHeight = -5;
                    tempCellText.x = -52 + X_height + draggableNumber.width / 2;
                    tempCellText.y = Y_height + 44 + draggableNumber.height / 4.5;
                    dragger.textBox = tempCellText;

                    dragger.addChild(tempCell);
                    dragger.addChild(tempCellText);
                    dragger.name = "dragger";
                    dragger.visible = draggerVisible;
                    dragger.on('click', AnswerNumberView);
                    this.addChild(dragger);
                    allDraggables.push(dragger);
                    // dragger.on("mouseover", handleOver);
                    // dragger.on("mouseout", handleOut);
                    // dragger.on("mousedown", handlePress);

                }
            }
        }




        this.titleText = new createjs.Text("knappar tillsammans.", "45px 'Myriad Pro'", "#000000");
        this.titleText.setTransform(510, -130);

        this.img_dustbin = new lib.dustbin();
        this.img_dustbin.setTransform(-110, 440, 0.7, 0.7);
        this.img_dustbin.type = 'toTransform';

        this.img_dustbinPaper = new lib.dustbinPaper();
        this.img_dustbinPaper.setTransform(-110, 440, 0.7, 0.7);
        this.img_dustbinPaper.type = 'toTransform';
        this.img_dustbinPaper.visible = false;

        this.img_dustbinPaper.on('click', function() {
            resetAll();
        });



        this.randomNumsTop = new createjs.Text("" + final_randomNums, "65px 'Myriad Pro'", "#29A6BF");
        if (final_randomNums > 9) {
            this.randomNumsTop.x = 430;
            this.randomNumsTop.y = -123;
        } else {
            this.randomNumsTop.x = 460;
            this.randomNumsTop.y = -123;
        }

        this.addChild(this.titleText, this.randomNumsTop);



        this.ImgblueLeft_1 = new lib.Imgblue();
        this.ImgblueLeft_1.name = "ImgblueLeft";
        this.ImgblueLeft_1.value = 1;
        this.ImgblueLeft_1.visible = false;
        this.ImgblueLeft_1.setTransform(375, 25, 1.1, 1.1);
        this.ImgblueLeft_2 = new lib.Imgblue();
        this.ImgblueLeft_2.name = "ImgblueLeft";
        this.ImgblueLeft_2.value = 2;
        this.ImgblueLeft_2.visible = false;
        this.ImgblueLeft_2.setTransform(455, 25, 1.1, 1.1);
        this.ImgblueLeft_3 = new lib.Imgblue();
        this.ImgblueLeft_3.name = "ImgblueLeft";
        this.ImgblueLeft_3.value = 3;
        this.ImgblueLeft_3.visible = false;
        this.ImgblueLeft_3.setTransform(535, 25, 1.1, 1.1);
        this.ImgblueLeft_4 = new lib.Imgblue();
        this.ImgblueLeft_4.name = "ImgblueLeft";
        this.ImgblueLeft_4.value = 4;
        this.ImgblueLeft_4.visible = false;
        this.ImgblueLeft_4.setTransform(375, 115, 1.1, 1.1);
        this.ImgblueLeft_5 = new lib.Imgblue();
        this.ImgblueLeft_5.name = "ImgblueLeft";
        this.ImgblueLeft_5.value = 5;
        this.ImgblueLeft_5.visible = false;
        this.ImgblueLeft_5.setTransform(455, 115, 1.1, 1.1);
        this.ImgblueLeft_6 = new lib.Imgblue();
        this.ImgblueLeft_6.name = "ImgblueLeft";
        this.ImgblueLeft_6.value = 6;
        this.ImgblueLeft_6.visible = false;
        this.ImgblueLeft_6.setTransform(535, 115, 1.1, 1.1);
        this.ImgblueLeft_7 = new lib.Imgblue();
        this.ImgblueLeft_7.name = "ImgblueLeft";
        this.ImgblueLeft_7.value = 7;
        this.ImgblueLeft_7.visible = false;
        this.ImgblueLeft_7.setTransform(375, 205, 1.1, 1.1);
        this.ImgblueLeft_8 = new lib.Imgblue();
        this.ImgblueLeft_8.name = "ImgblueLeft";
        this.ImgblueLeft_8.value = 8;
        this.ImgblueLeft_8.visible = false;
        this.ImgblueLeft_8.setTransform(455, 205, 1.1, 1.1);
        this.ImgblueLeft_9 = new lib.Imgblue();
        this.ImgblueLeft_9.name = "ImgblueLeft";
        this.ImgblueLeft_9.value = 9;
        this.ImgblueLeft_9.visible = false;
        this.ImgblueLeft_9.setTransform(535, 205, 1.1, 1.1);
        this.addChild(this.ImgblueLeft_1, this.ImgblueLeft_2, this.ImgblueLeft_3, this.ImgblueLeft_4, this.ImgblueLeft_5, this.ImgblueLeft_6, this.ImgblueLeft_7, this.ImgblueLeft_8, this.ImgblueLeft_9);


        this.ImgredLeft_1 = new lib.Imgred();
        this.ImgredLeft_1.name = "ImgredLeft";
        this.ImgredLeft_1.value = 1;
        this.ImgredLeft_1.visible = false;
        this.ImgredLeft_1.setTransform(375, 25, 1.1, 1.1);
        this.ImgredLeft_2 = new lib.Imgred();
        this.ImgredLeft_2.name = "ImgredLeft";
        this.ImgredLeft_2.value = 2;
        this.ImgredLeft_2.visible = false;
        this.ImgredLeft_2.setTransform(455, 25, 1.1, 1.1);
        this.ImgredLeft_3 = new lib.Imgred();
        this.ImgredLeft_3.name = "ImgredLeft";
        this.ImgredLeft_3.value = 3;
        this.ImgredLeft_3.visible = false;
        this.ImgredLeft_3.setTransform(535, 25, 1.1, 1.1);
        this.ImgredLeft_4 = new lib.Imgred();
        this.ImgredLeft_4.name = "ImgredLeft";
        this.ImgredLeft_4.value = 4;
        this.ImgredLeft_4.visible = false;
        this.ImgredLeft_4.setTransform(375, 115, 1.1, 1.1);
        this.ImgredLeft_5 = new lib.Imgred();
        this.ImgredLeft_5.name = "ImgredLeft";
        this.ImgredLeft_5.value = 5;
        this.ImgredLeft_5.visible = false;
        this.ImgredLeft_5.setTransform(455, 115, 1.1, 1.1);
        this.ImgredLeft_6 = new lib.Imgred();
        this.ImgredLeft_6.name = "ImgredLeft";
        this.ImgredLeft_6.value = 6;
        this.ImgredLeft_6.visible = false;
        this.ImgredLeft_6.setTransform(535, 115, 1.1, 1.1);
        this.ImgredLeft_7 = new lib.Imgred();
        this.ImgredLeft_7.name = "ImgredLeft";
        this.ImgredLeft_7.value = 7;
        this.ImgredLeft_7.visible = false;
        this.ImgredLeft_7.setTransform(375, 205, 1.1, 1.1);
        this.ImgredLeft_8 = new lib.Imgred();
        this.ImgredLeft_8.name = "ImgredLeft";
        this.ImgredLeft_8.value = 8;
        this.ImgredLeft_8.visible = false;
        this.ImgredLeft_8.setTransform(455, 205, 1.1, 1.1);
        this.ImgredLeft_9 = new lib.Imgred();
        this.ImgredLeft_9.name = "ImgredLeft";
        this.ImgredLeft_9.value = 9;
        this.ImgredLeft_9.visible = false;
        this.ImgredLeft_9.setTransform(535, 205, 1.1, 1.1);
        this.addChild(this.ImgredLeft_1, this.ImgredLeft_2, this.ImgredLeft_3, this.ImgredLeft_4, this.ImgredLeft_5, this.ImgredLeft_6, this.ImgredLeft_7, this.ImgredLeft_8, this.ImgredLeft_9);


        this.ImggreenLeft_1 = new lib.Imggreen();
        this.ImggreenLeft_1.name = "ImggreenLeft";
        this.ImggreenLeft_1.value = 1;
        this.ImggreenLeft_1.visible = false;
        this.ImggreenLeft_1.setTransform(375, 25, 1.1, 1.1);
        this.ImggreenLeft_2 = new lib.Imggreen();
        this.ImggreenLeft_2.name = "ImggreenLeft";
        this.ImggreenLeft_2.value = 2;
        this.ImggreenLeft_2.visible = false;
        this.ImggreenLeft_2.setTransform(455, 25, 1.1, 1.1);
        this.ImggreenLeft_3 = new lib.Imggreen();
        this.ImggreenLeft_3.name = "ImggreenLeft";
        this.ImggreenLeft_3.value = 3;
        this.ImggreenLeft_3.visible = false;
        this.ImggreenLeft_3.setTransform(535, 25, 1.1, 1.1);
        this.ImggreenLeft_4 = new lib.Imggreen();
        this.ImggreenLeft_4.name = "ImggreenLeft";
        this.ImggreenLeft_4.value = 4;
        this.ImggreenLeft_4.visible = false;
        this.ImggreenLeft_4.setTransform(375, 115, 1.1, 1.1);
        this.ImggreenLeft_5 = new lib.Imggreen();
        this.ImggreenLeft_5.name = "ImggreenLeft";
        this.ImggreenLeft_5.value = 5;
        this.ImggreenLeft_5.visible = false;
        this.ImggreenLeft_5.setTransform(455, 115, 1.1, 1.1);
        this.ImggreenLeft_6 = new lib.Imggreen();
        this.ImggreenLeft_6.name = "ImggreenLeft";
        this.ImggreenLeft_6.value = 6;
        this.ImggreenLeft_6.visible = false;
        this.ImggreenLeft_6.setTransform(535, 115, 1.1, 1.1);
        this.ImggreenLeft_7 = new lib.Imggreen();
        this.ImggreenLeft_7.name = "ImggreenLeft";
        this.ImggreenLeft_7.value = 7;
        this.ImggreenLeft_7.visible = false;
        this.ImggreenLeft_7.setTransform(375, 205, 1.1, 1.1);
        this.ImggreenLeft_8 = new lib.Imggreen();
        this.ImggreenLeft_8.name = "ImggreenLeft";
        this.ImggreenLeft_8.value = 8;
        this.ImggreenLeft_8.visible = false;
        this.ImggreenLeft_8.setTransform(455, 205, 1.1, 1.1);
        this.ImggreenLeft_9 = new lib.Imggreen();
        this.ImggreenLeft_9.name = "ImggreenLeft";
        this.ImggreenLeft_9.value = 9;
        this.ImggreenLeft_9.visible = false;
        this.ImggreenLeft_9.setTransform(535, 205, 1.1, 1.1);
        this.addChild(this.ImggreenLeft_1, this.ImggreenLeft_2, this.ImggreenLeft_3, this.ImggreenLeft_4, this.ImggreenLeft_5, this.ImggreenLeft_6, this.ImggreenLeft_7, this.ImggreenLeft_8, this.ImggreenLeft_9);


        this.ImgblueRight_1 = new lib.Imgblue();
        this.ImgblueRight_1.name = "ImgblueRight";
        this.ImgblueRight_1.value = 1;
        this.ImgblueRight_1.visible = false;
        this.ImgblueRight_1.text = false;
        this.ImgblueRight_1.setTransform(755, 25, 1.1, 1.1);
        this.ImgblueRight_2 = new lib.Imgblue();
        this.ImgblueRight_2.name = "ImgblueRight";
        this.ImgblueRight_2.value = 2;
        this.ImgblueRight_2.visible = false;
        this.ImgblueRight_2.text = false;
        this.ImgblueRight_2.setTransform(835, 25, 1.1, 1.1);
        this.ImgblueRight_3 = new lib.Imgblue();
        this.ImgblueRight_3.name = "ImgblueRight";
        this.ImgblueRight_3.value = 3;
        this.ImgblueRight_3.visible = false;
        this.ImgblueRight_3.text = false;
        this.ImgblueRight_3.setTransform(915, 25, 1.1, 1.1);
        this.ImgblueRight_4 = new lib.Imgblue();
        this.ImgblueRight_4.name = "ImgblueRight";
        this.ImgblueRight_4.value = 4;
        this.ImgblueRight_4.visible = false;
        this.ImgblueRight_4.text = false;
        this.ImgblueRight_4.setTransform(755, 115, 1.1, 1.1);
        this.ImgblueRight_5 = new lib.Imgblue();
        this.ImgblueRight_5.name = "ImgblueRight";
        this.ImgblueRight_5.value = 5;
        this.ImgblueRight_5.visible = false;
        this.ImgblueRight_5.text = false;
        this.ImgblueRight_5.setTransform(835, 115, 1.1, 1.1);
        this.ImgblueRight_6 = new lib.Imgblue();
        this.ImgblueRight_6.name = "ImgblueRight";
        this.ImgblueRight_6.value = 6;
        this.ImgblueRight_6.visible = false;
        this.ImgblueRight_6.text = false;
        this.ImgblueRight_6.setTransform(915, 115, 1.1, 1.1);
        this.ImgblueRight_7 = new lib.Imgblue();
        this.ImgblueRight_7.name = "ImgblueRight";
        this.ImgblueRight_7.value = 7;
        this.ImgblueRight_7.visible = false;
        this.ImgblueRight_7.text = false;
        this.ImgblueRight_7.setTransform(755, 205, 1.1, 1.1);
        this.ImgblueRight_8 = new lib.Imgblue();
        this.ImgblueRight_8.name = "ImgblueRight";
        this.ImgblueRight_8.value = 8;
        this.ImgblueRight_8.visible = false;
        this.ImgblueRight_8.text = false;
        this.ImgblueRight_8.setTransform(835, 205, 1.1, 1.1);
        this.ImgblueRight_9 = new lib.Imgblue();
        this.ImgblueRight_9.name = "ImgblueRight";
        this.ImgblueRight_9.value = 9;
        this.ImgblueRight_9.visible = false;
        this.ImgblueRight_9.text = false;
        this.ImgblueRight_9.setTransform(915, 205, 1.1, 1.1);
        this.addChild(this.ImgblueRight_1, this.ImgblueRight_2, this.ImgblueRight_3, this.ImgblueRight_4, this.ImgblueRight_5, this.ImgblueRight_6, this.ImgblueRight_7, this.ImgblueRight_8, this.ImgblueRight_9);


        this.ImgredRight_1 = new lib.Imgred();
        this.ImgredRight_1.name = "ImgredRight";
        this.ImgredRight_1.value = 1;
        this.ImgredRight_1.visible = false;
        this.ImgredRight_1.text = false;
        this.ImgredRight_1.setTransform(755, 25, 1.1, 1.1);
        this.ImgredRight_2 = new lib.Imgred();
        this.ImgredRight_2.name = "ImgredRight";
        this.ImgredRight_2.value = 2;
        this.ImgredRight_2.visible = false;
        this.ImgredRight_2.text = false;
        this.ImgredRight_2.setTransform(835, 25, 1.1, 1.1);
        this.ImgredRight_3 = new lib.Imgred();
        this.ImgredRight_3.name = "ImgredRight";
        this.ImgredRight_3.value = 3;
        this.ImgredRight_3.visible = false;
        this.ImgredRight_3.text = false;
        this.ImgredRight_3.setTransform(915, 25, 1.1, 1.1);
        this.ImgredRight_4 = new lib.Imgred();
        this.ImgredRight_4.name = "ImgredRight";
        this.ImgredRight_4.value = 4;
        this.ImgredRight_4.visible = false;
        this.ImgredRight_4.text = false;
        this.ImgredRight_4.setTransform(755, 115, 1.1, 1.1);
        this.ImgredRight_5 = new lib.Imgred();
        this.ImgredRight_5.name = "ImgredRight";
        this.ImgredRight_5.value = 5;
        this.ImgredRight_5.visible = false;
        this.ImgredRight_5.text = false;
        this.ImgredRight_5.setTransform(835, 115, 1.1, 1.1);
        this.ImgredRight_6 = new lib.Imgred();
        this.ImgredRight_6.name = "ImgredRight";
        this.ImgredRight_6.value = 6;
        this.ImgredRight_6.visible = false;
        this.ImgredRight_6.text = false;
        this.ImgredRight_6.setTransform(915, 115, 1.1, 1.1);
        this.ImgredRight_7 = new lib.Imgred();
        this.ImgredRight_7.name = "ImgredRight";
        this.ImgredRight_7.value = 7;
        this.ImgredRight_7.visible = false;
        this.ImgredRight_7.text = false;
        this.ImgredRight_7.setTransform(755, 205, 1.1, 1.1);
        this.ImgredRight_8 = new lib.Imgred();
        this.ImgredRight_8.name = "ImgredRight";
        this.ImgredRight_8.value = 8;
        this.ImgredRight_8.visible = false;
        this.ImgredRight_8.text = false;
        this.ImgredRight_8.setTransform(835, 205, 1.1, 1.1);
        this.ImgredRight_9 = new lib.Imgred();
        this.ImgredRight_9.name = "ImgredRight";
        this.ImgredRight_9.value = 9;
        this.ImgredRight_9.visible = false;
        this.ImgredRight_9.text = false;
        this.ImgredRight_9.setTransform(915, 205, 1.1, 1.1);
        this.addChild(this.ImgredRight_1, this.ImgredRight_2, this.ImgredRight_3, this.ImgredRight_4, this.ImgredRight_5, this.ImgredRight_6, this.ImgredRight_7, this.ImgredRight_8, this.ImgredRight_9);


        this.ImggreenRight_1 = new lib.Imggreen();
        this.ImggreenRight_1.name = "ImggreenRight";
        this.ImggreenRight_1.value = 1;
        this.ImggreenRight_1.visible = false;
        this.ImggreenRight_1.text = false;
        this.ImggreenRight_1.setTransform(755, 25, 1.1, 1.1);
        this.ImggreenRight_2 = new lib.Imggreen();
        this.ImggreenRight_2.name = "ImggreenRight";
        this.ImggreenRight_2.value = 2;
        this.ImggreenRight_2.visible = false;
        this.ImggreenRight_2.text = false;
        this.ImggreenRight_2.setTransform(835, 25, 1.1, 1.1);
        this.ImggreenRight_3 = new lib.Imggreen();
        this.ImggreenRight_3.name = "ImggreenRight";
        this.ImggreenRight_3.value = 3;
        this.ImggreenRight_3.visible = false;
        this.ImggreenRight_3.text = false;
        this.ImggreenRight_3.setTransform(915, 25, 1.1, 1.1);
        this.ImggreenRight_4 = new lib.Imggreen();
        this.ImggreenRight_4.name = "ImggreenRight";
        this.ImggreenRight_4.value = 4;
        this.ImggreenRight_4.visible = false;
        this.ImggreenRight_4.text = false;
        this.ImggreenRight_4.setTransform(755, 115, 1.1, 1.1);
        this.ImggreenRight_5 = new lib.Imggreen();
        this.ImggreenRight_5.name = "ImggreenRight";
        this.ImggreenRight_5.value = 5;
        this.ImggreenRight_5.visible = false;
        this.ImggreenRight_5.text = false;
        this.ImggreenRight_5.setTransform(835, 115, 1.1, 1.1);
        this.ImggreenRight_6 = new lib.Imggreen();
        this.ImggreenRight_6.name = "ImggreenRight";
        this.ImggreenRight_6.value = 6;
        this.ImggreenRight_6.visible = false;
        this.ImggreenRight_6.text = false;
        this.ImggreenRight_6.setTransform(915, 115, 1.1, 1.1);
        this.ImggreenRight_7 = new lib.Imggreen();
        this.ImggreenRight_7.name = "ImggreenRight";
        this.ImggreenRight_7.value = 7;
        this.ImggreenRight_7.visible = false;
        this.ImggreenRight_7.text = false;
        this.ImggreenRight_7.setTransform(755, 205, 1.1, 1.1);
        this.ImggreenRight_8 = new lib.Imggreen();
        this.ImggreenRight_8.name = "ImggreenRight";
        this.ImggreenRight_8.value = 8;
        this.ImggreenRight_8.visible = false;
        this.ImggreenRight_8.text = false;
        this.ImggreenRight_8.setTransform(835, 205, 1.1, 1.1);
        this.ImggreenRight_9 = new lib.Imggreen();
        this.ImggreenRight_9.name = "ImggreenRight";
        this.ImggreenRight_9.value = 9;
        this.ImggreenRight_9.visible = false;
        this.ImggreenRight_9.text = false;
        this.ImggreenRight_9.setTransform(915, 205, 1.1, 1.1);
        this.addChild(this.ImggreenRight_1, this.ImggreenRight_2, this.ImggreenRight_3, this.ImggreenRight_4, this.ImggreenRight_5, this.ImggreenRight_6, this.ImggreenRight_7, this.ImggreenRight_8, this.ImggreenRight_9);


        var Arr_countleft = 0;
        var Arr_countright = 0;
        for (var i = 0; i < this.children.length; i++) {
            if (left_imgCount == 1 && this.children[i].name == "ImgblueLeft" && (this.children[i].value == Arr_countleft + 1)) {
                this.children[i].visible = true;
                this.children[i].x = leftImg1X[Arr_countleft];
                this.children[i].y = leftImg1Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }

            } else if (left_imgCount == 2 && this.children[i].name == "ImgblueLeft" && (this.children[i].value == Arr_countleft + 1)) {
                this.children[i].visible = true;
                this.children[i].x = leftImg2X[Arr_countleft];
                this.children[i].y = leftImg2Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 3 && this.children[i].name == "ImgblueLeft" && (this.children[i].value == Arr_countleft + 1)) {
                this.children[i].visible = true;
                this.children[i].x = leftImg3X[Arr_countleft];
                this.children[i].y = leftImg3Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 4 && this.children[i].name == "ImgblueLeft" && (this.children[i].value == Arr_countleft + 1)) {
                this.children[i].visible = true;
                this.children[i].x = leftImg4X[Arr_countleft];
                this.children[i].y = leftImg4Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 5 && this.children[i].name == "ImgblueLeft" && (this.children[i].value == Arr_countleft + 1)) {
                this.children[i].visible = true;
                this.children[i].x = leftImg5X[Arr_countleft];
                this.children[i].y = leftImg5Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 6 && this.children[i].name == "ImgblueLeft" && (this.children[i].value == Arr_countleft + 1)) {
                this.children[i].visible = true;
                this.children[i].x = leftImg6X[Arr_countleft];
                this.children[i].y = leftImg6Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 7 && this.children[i].name == "ImgblueLeft" && (this.children[i].value == Arr_countleft + 1)) {
                this.children[i].visible = true;
                this.children[i].x = leftImg7X[Arr_countleft];
                this.children[i].y = leftImg7Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 8 && this.children[i].name == "ImgblueLeft" && (this.children[i].value == Arr_countleft + 1)) {
                this.children[i].visible = true;
                this.children[i].x = leftImg8X[Arr_countleft];
                this.children[i].y = leftImg8Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            } else if (left_imgCount == 9 && this.children[i].name == "ImgblueLeft" && (this.children[i].value == Arr_countleft + 1)) {
                this.children[i].visible = true;
                this.children[i].x = leftImg9X[Arr_countleft];
                this.children[i].y = leftImg9Y[Arr_countleft];
                Arr_countleft++;
                if (Arr_countleft == left_imgCount) {
                    Arr_countleft = 10;
                }
            }


            if (right_imgCount == 1 && this.children[i].name == "ImgblueRight" && (this.children[i].value == Arr_countright + 1)) {
                this.children[i].text = true;
                this.children[i].x = rightImg1X[Arr_countright];
                this.children[i].y = rightImg1Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 2 && this.children[i].name == "ImgblueRight" && (this.children[i].value == Arr_countright + 1)) {
                this.children[i].text = true;
                this.children[i].x = rightImg2X[Arr_countright];
                this.children[i].y = rightImg2Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 3 && this.children[i].name == "ImgblueRight" && (this.children[i].value == Arr_countright + 1)) {
                this.children[i].text = true;
                this.children[i].x = rightImg3X[Arr_countright];
                this.children[i].y = rightImg3Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 4 && this.children[i].name == "ImgblueRight" && (this.children[i].value == Arr_countright + 1)) {
                this.children[i].text = true;
                this.children[i].x = rightImg4X[Arr_countright];
                this.children[i].y = rightImg4Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 5 && this.children[i].name == "ImgblueRight" && (this.children[i].value == Arr_countright + 1)) {
                this.children[i].text = true;
                this.children[i].x = rightImg5X[Arr_countright];
                this.children[i].y = rightImg5Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 6 && this.children[i].name == "ImgblueRight" && (this.children[i].value == Arr_countright + 1)) {
                this.children[i].text = true;
                this.children[i].x = rightImg6X[Arr_countright];
                this.children[i].y = rightImg6Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 7 && this.children[i].name == "ImgblueRight" && (this.children[i].value == Arr_countright + 1)) {
                this.children[i].text = true;
                this.children[i].x = rightImg7X[Arr_countright];
                this.children[i].y = rightImg7Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 8 && this.children[i].name == "ImgblueRight" && (this.children[i].value == Arr_countright + 1)) {
                this.children[i].text = true;
                this.children[i].x = rightImg8X[Arr_countright];
                this.children[i].y = rightImg8Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            } else if (right_imgCount == 9 && this.children[i].name == "ImgblueRight" && (this.children[i].value == Arr_countright + 1)) {
                this.children[i].text = true;
                this.children[i].x = rightImg9X[Arr_countright];
                this.children[i].y = rightImg9Y[Arr_countright];
                Arr_countright++;
                if (Arr_countright == right_imgCount) {
                    Arr_countright = 10;
                }
            }

        };



        this.Qbox = new createjs.Shape()
        this.Qbox.graphics.f('#ffffff').s('#7d7d7d').ss(2).drawRect(-60, -160, 140-10, 140-15);
        this.Qbox.setTransform(-5, 0);

        this.QText1 = new createjs.Text("Talområde", "23px 'Myriad Pro'");
        this.QText1.setTransform(-53, -126);

        this.option1 = new cjs.Container();
        this.QText2 = new createjs.Text("1 - 5", "21px 'Myriad Pro'");
        this.QText2.setTransform(0, -156 + 56 * 1);
        this.QTextBox2 = new createjs.Shape()
        this.QTextBox2.graphics.f('grey').s('#7d7d7d').ss(2).drawRect(-32, -150 + 36 * 1, 17, 17);
        this.QTextBox2.setTransform(0, 0);
        this.tempRect2 = new createjs.Shape()
        this.tempRect2.graphics.f('#ffffff').s('#ffffff').ss(2).drawRect(-32, -150 + 36 * 1, 81, 14);
        this.option1.name = "tallinje1";
        this.option1.setTransform(-15, 10);
        this.option1.addChild(this.tempRect2, this.QTextBox2, this.QText2);

        this.option2 = new cjs.Container();
        this.QText3 = new createjs.Text("1 - 10", "21px 'Myriad Pro'");
        this.QText3.setTransform(0, -156 + 46 * 2);
        this.QTextBox3 = new createjs.Shape()
        this.QTextBox3.graphics.f('#ffffff').s('#7d7d7d').ss(2).drawRect(-32, -150 + 36 * 2, 17, 17);
        this.QTextBox3.setTransform(0, 0);
        this.tempRect3 = new createjs.Shape()
        this.tempRect3.graphics.f('#ffffff').s('#ffffff').ss(2).drawRect(-32, -150 + 36 * 2, 81, 14);
        this.option2.name = "tallinje2";
        this.option2.setTransform(-15, 8);
        this.option2.addChild(this.tempRect3, this.QTextBox3, this.QText3);


        this.nastaContainer = new cjs.Container();
        this.nasta = new createjs.Shape()
        this.nasta.graphics.f('#ffffff').s('#ffffff').ss(0.5).drawRoundRect(0, 0, 102, 36, 5);
        this.nastaContainer.visible = false;
        this.nastaContainer.name = "nastaText";
        this.nastaContainer.value = 0;
        this.nastaContainer.setTransform(1360, 424);

        this.incorrectAnswer = new createjs.Shape()
        this.incorrectAnswer.graphics.f('#ffffff').s('#ffffff').ss(0.5).drawRoundRect(0, 0, 0.5, 0.5, 5);
        this.incorrectAnswer.visible = false;
        this.incorrectAnswer.setTransform(1360, 424);

        this.incorrectIcon = new createjs.Shape()
        this.incorrectIcon.graphics.f('#ffffff').s('#ffffff').ss(0.5).drawRoundRect(0, 0, 0.5, 0.5, 5);
        this.incorrectIcon.visible = false;
        this.incorrectIcon.setTransform(1360, 424);

        this.correctIcon = new createjs.Shape()
        this.correctIcon.graphics.f('#ffffff').s('#ffffff').ss(0.5).drawRoundRect(0, 0, 0.5, 0.5, 5);
        this.correctIcon.visible = false;
        this.correctIcon.setTransform(1360, 424);


        this.nastaContainer.addChild(this.nasta, this.nastaText, this.incorrectAnswer, this.incorrectIcon, this.correctIcon);
        // this.nastaContainer.on('click', nastraRandomNumber);



        this.option1.on('click', ChangeOptions);
        this.option2.on('click', ChangeOptions);

        this.addChild(this.Qbox, this.QText1, this.option1, this.option2, this.nastaContainer);

        this.uppdelning_1 = new lib.uppdelning_1();
        this.uppdelning_1.setTransform(700, -90, 1.3, 1.3);
        this.imgBack_drawRect = new createjs.Shape()
        this.imgBack_drawRect.graphics.f('#ffffff').s('#ffffff').ss(2).drawRect(0, 0, 400, 400);
        this.imgBack_drawRect.setTransform(675, -90);




        this.addChild(this.imgBack_drawRect, this.uppdelning_1);


        var boxX = [414];
        var boxY = [47];

        // logic for drag & drop exercise starts here
        for (var i = 0; i < 1; i++) {

            var dropBoxtemp = new createjs.Container();
            dropBoxtemp.x = boxX[i];
            dropBoxtemp.y = boxY[i];

            var box = new createjs.Shape()
            box.graphics.f('#ffffff').s('#ffffff').drawRect(boxX[i], boxY[i], dropBox.width, dropBox.height);

            var tempText = new cjs.Text(" ", "bold 60px 'Myriad Pro'", "#20A3BC");

            tempText.value = right_imgCount.toString();
            tempText.textAlign = "center";
            tempText.lineHeight = -2;
            tempText.x = boxX[i] + 39;
            tempText.y = boxY[i] + 72;
            dropBoxtemp.addChild(box, tempText);

            dropBoxtemp.value = right_imgCount;
            dropBoxtemp.name = "dropBox1";
            dropBoxtemp.wrapper = 0;
            checkHover(dropBoxtemp);

            dropBoxesBtn.push(dropBoxtemp);
            this.addChild(dropBoxtemp);

        }
        this.onNewExercise = function(e) {
            var tempEnterKey = EnterKey;
            if (tempEnterKey == 1) {
                var s = 0;
                nastraRandomNumber(s);
                if (typeof btn_newExercise != 'undefined') {
                    $(btn_newExercise).hide();
                    EnterKey = 0;
                }
            } else if (tempEnterKey == 2) {
                completedAll();
            }
        };

        currentStage = this;
        var myStage = this;

        this.onNewExercise();

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);


    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    (lib.exerciseTitle = function() {
        this.initialize();
        this.text = new cjs.Text("Boss och Silkys knappar", "bold 28px 'Myriad Pro'", "000000");
        this.text.lineHeight = 29;
        this.text.visible = false;
        this.text.setTransform(50, 5);
        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);

    // stage content:
    (lib.exercise = function() {
        this.initialize();
        this.other = new lib.Basement();
        this.other.setTransform(0, 40, 1, 1);

        this.stage1 = new lib.Stage1();
        this.stage1.setTransform(100, 100, 1, 1, 0, 0, 0)

        this.addChild(this.other, this.stage1);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 677.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});


var lib, images, createjs;
