var canvas, stage, exportRoot;

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
}



function handleComplete() {
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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/knapper_1.png",
            id: "pallate"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/knapper_4.png",
            id: "num_plate"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/Lsord1.png",
            id: "Lsord1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/Lsord2.png",
            id: "Lsord2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/Lsord3.png",
            id: "Lsord3"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/Lsord4.png",
            id: "Lsord4"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/Lsord5.png",
            id: "Lsord5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/Lsord6.png",
            id: "Lsord6"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/Lsord7.png",
            id: "Lsord7"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/Lsord8.png",
            id: "Lsord8"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/Lsord9.png",
            id: "Lsord9"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/Lsord10.png",
            id: "Lsord10"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/Lsord11.png",
            id: "Lsord11"
        }]
    };

    var iconProperties = {
        x: 850 + 300,
        y: 350 - 140,
        scaleX: 0.5,
        scaleY: 0.5,
        wrongX: 750 + 150,
        wrongY: 345 - 15
    };

    (lib.num_plate = function() {
        this.initialize(img.num_plate);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Lsord1 = function() {
        this.initialize(img.Lsord1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Lsord2 = function() {
        this.initialize(img.Lsord2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Lsord3 = function() {
        this.initialize(img.Lsord3);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Lsord4 = function() {
        this.initialize(img.Lsord4);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Lsord5 = function() {
        this.initialize(img.Lsord5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Lsord6 = function() {
        this.initialize(img.Lsord6);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Lsord7 = function() {
        this.initialize(img.Lsord7);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Lsord8 = function() {
        this.initialize(img.Lsord8);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Lsord9 = function() {
        this.initialize(img.Lsord9);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Lsord10 = function() {
        this.initialize(img.Lsord10);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.Lsord11 = function() {
        this.initialize(img.Lsord11);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.pallate = function() {
        this.initialize(img.pallate);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.dustbinPaper = function() {
        this.initialize(img.dustbinPaper);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.dustbin = function() {
        this.initialize(img.dustbin);
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
        width: 80,
        height: 90
    };

    var draggableNumber = {
        x: 1174,
        y: 207,
        width: 40,
        height: 40
    };
    var draggableNumberSpacing = {
        width: 11,
        height: 0
    };
    var dropBoxesProp = {
        x: 330,
        y: 410
    };

    var isDragging = false;
    var draggingNumber = null;

    function dragging(event) {
        if (isDragging) {
            var isOver = false,
                targets = stage.getObjectsUnderPoint(stage.mouseX, stage.mouseY);
            if (stage.draggingShape) {
                stage.draggingShape.children[0].shadow = new createjs.Shadow('#7d7d7d', 0, 0.5, 4);

                // stage.draggingShape.x = stage.mouseX - currentStage.x - (draggableNumber.width / 2), stage.draggingShape.y = stage.mouseY - (draggableNumber.height / 2) - currentStage.y;
                // stage.draggingShape.x = stage.mouseX - currentStage.x,
                //     stage.draggingShape.y = stage.mouseY;
                var pt = stage.globalToLocal(stage.mouseX, stage.mouseY);
                stage.draggingShape.x = pt.x - (draggableNumber.width / 2),
                    stage.draggingShape.y = pt.y - (draggableNumber.height / 2);
                stage.update();
            }
        }

    }

    function numPlateclick(evt) {

        for (var i = 0; i < dropBoxes.length; i++) {
            var dragger = new createjs.Container();
            dragger.value = evt.currentTarget.value;
            if (dropBoxes[i].children[0].graphics._fillInstructions[0].params[1] == "#fdf5ce") {

                dropBoxes[i].children[1].text = dragger.value;
                dropBoxes[i].isClicked = false;
                stackedNumbers.push(i);

                dropBoxes[i].children[0].graphics._fillInstructions[0].params[1] = "#F8F8F8";
                if (i == dropBoxes.length - 1) {
                    dropBoxes[0].children[0].graphics._fillInstructions[0].params[1] = "#fdf5ce";
                    break;
                } else {
                    dropBoxes[i + 1].children[0].graphics._fillInstructions[0].params[1] = "#fdf5ce";
                    dropBoxes[i + 1].isClicked = true;
                }
                currentStage.img_dustbinPaper.visible = true;
                break;

            }

        }

    }

    function handlePress(evt) {
        if (evt.currentTarget) {
            var dragger = new createjs.Container();
            dragger.value = evt.currentTarget.value;
            var tempCell = new createjs.Shape()
                //tempCell.graphics.s('#7d7d7d').beginLinearGradientFill(["#fff880", "#FFFFFF"], [0, 1], 0, 10, 0, 80);
            tempCell.graphics.drawRoundRect(0, 0, draggableNumber.width, draggableNumber.height, 5);
            var tempCellText = new createjs.Text(dragger.value, "bold 60px 'Myriad Pro'", "#000000");
            tempCellText.textAlign = "center";

            tempCellText.x = draggableNumber.width / 2;
            tempCellText.y = draggableNumber.height / 1.5;

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

    function draggingBtn(event) {
        if (isDragging) {
            var isOver = false,
                targets = stage.getObjectsUnderPoint(stage.mouseX, stage.mouseY);
            if (stage.draggingShape) {

                var pt = stage.globalToLocal(stage.mouseX, stage.mouseY);
                stage.draggingShape.x = pt.x - 32,
                    stage.draggingShape.y = pt.y - 21;
                stage.update();
            }
        }

    }

    function handlePressBtn(evt) {
        if (evt.currentTarget) {
            var dragger = new createjs.Container();

            var img_btn_blue = (evt.currentTarget.value == "btnTop" && evt.currentTarget.name == "Lsord1") ? new lib.Lsord1() : (evt.currentTarget.value == "btnMiddle" && evt.currentTarget.name == "Lsord2") ? new lib.Lsord2() : (evt.currentTarget.value == "btnTop" && evt.currentTarget.name == "Lsord3") ? new lib.Lsord3() : (evt.currentTarget.value == "btnBottom" && evt.currentTarget.name == "Lsord4") ? new lib.Lsord4() : (evt.currentTarget.value == "btnTop" && evt.currentTarget.name == "Lsord5") ? new lib.Lsord5() : (evt.currentTarget.value == "btnTop" && evt.currentTarget.name == "Lsord6") ? new lib.Lsord6() : (evt.currentTarget.value == "btnMiddle" && evt.currentTarget.name == "Lsord7") ? new lib.Lsord7() : (evt.currentTarget.value == "btnMiddle" && evt.currentTarget.name == "Lsord8") ? new lib.Lsord8() : (evt.currentTarget.value == "btnBottom" && evt.currentTarget.name == "Lsord9") ? new lib.Lsord9() : new lib.Lsord10();

            img_btn_blue.value = evt.currentTarget.name;
            dragger.addChild(img_btn_blue);

            dragger.scaleX = dragger.scaleY = currentStage.scaleX;

            stage.addChild(dragger);
            stage.draggingShape = dragger;
            stage.draggingShape.value = evt.currentTarget.value;

            var pt = stage.globalToLocal(stage.mouseX, stage.mouseY);
            stage.draggingShape.x = pt.x - 32,
                stage.draggingShape.y = pt.y - 21;
            isDragging = true;
            stage.addEventListener("stagemousemove", draggingBtn);
            stage.addEventListener("stagemouseup", droppingBtn);
        }
        stage.update();
    }

    function handlePressBtnNotepad(evt) {

        if (evt.currentTarget) {
            var dragger = new createjs.Container();

            var img_btn_blue = (evt.currentTarget.value == "btnTop" && evt.currentTarget.children[0].value == "Lsord1") ? new lib.Lsord1() : (evt.currentTarget.value == "btnMiddle" && evt.currentTarget.children[0].value == "Lsord2") ? new lib.Lsord2() : (evt.currentTarget.value == "btnTop" && evt.currentTarget.children[0].value == "Lsord3") ? new lib.Lsord3() : (evt.currentTarget.value == "btnBottom" && evt.currentTarget.children[0].value == "Lsord4") ? new lib.Lsord4() : (evt.currentTarget.value == "btnTop" && evt.currentTarget.children[0].value == "Lsord5") ? new lib.Lsord5() : (evt.currentTarget.value == "btnTop" && evt.currentTarget.children[0].value == "Lsord6") ? new lib.Lsord6() : (evt.currentTarget.value == "btnMiddle" && evt.currentTarget.children[0].value == "Lsord7") ? new lib.Lsord7() : (evt.currentTarget.value == "btnMiddle" && evt.currentTarget.children[0].value == "Lsord8") ? new lib.Lsord8() : (evt.currentTarget.value == "btnBottom" && evt.currentTarget.children[0].value == "Lsord9") ? new lib.Lsord9() : new lib.Lsord10();

            img_btn_blue.value = evt.currentTarget.children[0].value;
            dragger.addChild(img_btn_blue);

            dragger.scaleX = dragger.scaleY = currentStage.scaleX;

            stage.addChild(dragger);
            stage.draggingShape = dragger;
            stage.draggingShape.value = evt.currentTarget.value;

            var pt = stage.globalToLocal(stage.mouseX, stage.mouseY);

            stage.draggingShape.x = pt.x - 32,
                stage.draggingShape.y = pt.y - 21;
            isDragging = true;
            stage.addEventListener("stagemousemove", draggingBtn);
            stage.addEventListener("stagemouseup", droppingBtn);

            for (var i = 0; i < droppedBtns.length; i++) {
                if (evt.currentTarget.id == droppedBtns[i].id) {
                    droppedBtns.splice(i, 1);
                    break;
                }
            }
            evt.currentTarget.image = null;
            stage.removeChild(evt.currentTarget)

        }
        stage.update();
    }



    function droppingBtn(event) {

        if (isDragging) {
            isDragging = false;
            var dropArea = null;
            var boxNumber = 0;

            var isOverlapping = false;

            for (var i = 0; i < droppedBtns.length; i++) {
                if (ndgmr.checkRectCollision(stage.draggingShape, droppedBtns[i]) != null) { // hittest check  b/w two bitmaps/images
                    isOverlapping = true;
                    break;
                }
            }

            if (stage.mouseInBounds) {
                for (var i = 0; i < dropBoxesBtn.length; i++) {
                    var pt = dropBoxesBtn[i].children[0].globalToLocal(stage.mouseX, stage.mouseY); // hittest check collision

                    if (dropBoxesBtn[i].children[0].hitTest(pt.x, pt.y) == true && isOverlapping != true) {
                        // if (dropBoxesBtn[i].children[0].hitTest(pt.x, pt.y) == true && dropBoxesBtn[i].isHover == true) {
                        dropArea = dropBoxesBtn[i];
                        boxNumber = dropBoxesBtn[i].value;
                        break;
                    }
                };
            }

            if (dropArea != null) {
                currentStage.img_dustbinPaper.visible = true;
                // if (stage.draggingShape.value == "btnTop") {
                //     stage.draggingShape.y = stage.draggingShape.y;
                // } else if (stage.draggingShape.value == "btnMiddle") {
                //     stage.draggingShape.y = stage.draggingShape.y;
                // } else if (stage.draggingShape.value == "btnBottom") {
                //     stage.draggingShape.y = stage.draggingShape.y;
                // }
                stage.draggingShape.y = stage.draggingShape.y;
                stage.draggingShape.on("mousedown", handlePressBtnNotepad);
                droppedBtns.push(stage.draggingShape);
            } else {
                var xPos = (stage.draggingShape.value == "btnTop") ? dragger_Btns[0].x : dragger_Btns[1].x,
                    yPos = (stage.draggingShape.value == "btnTop") ? dragger_Btns[0].y : dragger_Btns[1].y;

                var xTrans = (stage.draggingShape.value == "btnTop") ? 50 : 50;

                xPos = xPos + xTrans;
                yPos = yPos + 270;

                cjs.Tween.get(stage.draggingShape).to({ x: xPos, y: yPos }, 1000);
                cjs.Tween.get(stage.draggingShape).to({ alpha: 0 }, 1000).call(function() {
                    stage.removeChild(stage.draggingShape);
                    stage.draggingShape = null;
                    stage.update();
                });


                var droppedBtnLength = droppedBtns.length;
                if (droppedBtnLength == 0) {
                    currentStage.img_dustbinPaper.visible = (droppedBtnLength == 0) ? false : true;
                }
            }
            stage.removeAllEventListeners();
        }
        stage.update();
    }

    function handleOver(evt) {
        if (evt.currentTarget) {
            var dragger = evt.currentTarget;
            dragger.value = evt.currentTarget.value;

            dragger.children[0].graphics.clear().s('#7d7d7d').beginLinearGradientFill(["#fff880", "#FFFFFF"], [0, 1], 0, 10, 0, 80).drawRoundRect(0, 0, draggableNumber.width, draggableNumber.height, 1);
        }
    }

    function handleOut(evt) {
        if (evt.currentTarget) {
            var dragger = evt.currentTarget;
            dragger.value = evt.currentTarget.value;

            dragger.children[0].graphics.clear().s('#7d7d7d').beginLinearGradientFill(["#FFFFFF", "#fff880"], [0, 1], 0, 10, 0, 80).drawRoundRect(0, 0, draggableNumber.width, draggableNumber.height, 1);
        }
    }

    function dropping(event) {
        if (isDragging) {

            isDragging = false;
            var dropArea = null;
            var dropAreaText = currentStage.dropBoxText1;
            var boxNumber = 0;

            if (stage.mouseInBounds) {
                for (var i = 0; i < dropBoxes.length; i++) {
                    var pt = dropBoxes[i].children[0].globalToLocal(stage.mouseX, stage.mouseY); // hittest check collision

                    // if (dropBoxesBtn[i].isHover) {
                    if (dropBoxes[i].children[0].hitTest(pt.x, pt.y) == true) {
                        dropArea = dropBoxes[i];
                        dropAreaText = dropBoxes[i].dropBoxText;
                        boxNumber = dropBoxes[i].value;
                        break;
                    }
                };
            }

            if (dropArea != null && (stage.draggingShape.value != "btnTop" || stage.draggingShape.value != "btnMiddle" || stage.draggingShape.value != "btnBottom")) {
                currentStage.img_dustbinPaper.visible = true;
                resetDropBoxClick();
                dropArea.isClicked = true;
                dropAreaText.text = stage.draggingShape.value;
                dropArea.value = stage.draggingShape.value;
                dropArea.children[1].text = stage.draggingShape.value;
                dropBoxes[i].value = stage.draggingShape.value;
                stackedNumbers.push(i);
                dropArea.solved = true;
            }
            stage.removeChild(stage.draggingShape);
            stage.draggingShape = null;
            stage.removeAllEventListeners();
        }
        stage.update();
    }


    function resetAll() {
        if (typeof stage != 'undefined') {
            stage.removeChild(stage.draggingShape);
        }
        for (var i = 0; i < dropBoxes.length; i++) {
            dropBoxes[i].solved = false;
            dropBoxes[i].value = null;
            dropBoxes[i].clicked = false;
            dropBoxes[i].children[1].text = "";
            dropBoxes[i].dropBoxText.text = "";
        }

        for (var i = droppedBtns.length - 1; i >= 0; i--) {
            stage.removeChild(droppedBtns[i]);
            droppedBtns.pop();
        }

        stackedNumbers = [];
        if (typeof btnReset != 'undefined') {
            createjs.Tween.get(btnReset).to({
                alpha: 0
            }, 200);
        }
        currentStage.img_dustbinPaper.visible = false;
        resetDropBoxClick();
        dropBoxes[0].children[0].graphics._fillInstructions[0].params[1] = "#fdf5ce";
    }

    function findOccurrences(arr, val) {
        var i, j,
            count = 0;
        for (i = 0, j = arr.length; i < j; i++) {
            (arr[i] === val) && count++;
        }
        return count;
    }

    function orderArray() {
        for (var i = 0; i < stackedNumbers.length; i++) {
            var temp = findOccurrences(stackedNumbers, stackedNumbers[i]);
            var isChanged = false;
            var currNo = stackedNumbers[i];
            while (temp > 1) {
                var index = stackedNumbers.indexOf(currNo);
                stackedNumbers.splice(index, 1);
                temp = findOccurrences(stackedNumbers, currNo);
                isChanged = true;
            }
            i = (isChanged == true) ? -1 : i;
        }
    }

    function backNavigation() {
        orderArray();
        // if (stackedNumbers.length > 0) {
        //     var lastIndex = stackedNumbers[stackedNumbers.length - 1];
        //     dropBoxes[lastIndex].solved = false;
        //     dropBoxes[lastIndex].value = null;
        //     dropBoxes[lastIndex].dropBoxText.text = "";
        //     dropBoxes[lastIndex].clicked = false;
        //     dropBoxes[lastIndex].children[1].text = "";
        //     stackedNumbers.pop();
        // }
        // var isBtnExists = false;
        // if (stackedNumbers.length == 0) {
        //     for (var i = 0; i < droppedBtns.length; i++) {
        //         if (droppedBtns[i].children.length > 1) {
        //             isBtnExists = true;
        //             break;
        //         }
        //     }
        //     if (isBtnExists == false) {
        //         resetAll();
        //     }
        //     dropBoxes[0].children[0].graphics._fillInstructions[0].params[1]="#fdf5ce"
        // }


        var droppedBtnLength = droppedBtns.length;


        if (stackedNumbers.length > 0) {
            var lastIndex = stackedNumbers[stackedNumbers.length - 1];
            dropBoxes[lastIndex].solved = false;
            dropBoxes[lastIndex].value = null;
            dropBoxes[lastIndex].dropBoxText.text = "";
            dropBoxes[lastIndex].clicked = false;
            dropBoxes[lastIndex].children[1].text = "";
            stackedNumbers.pop();
            resetDropBoxClick();
            if (droppedBtnLength == 0) {
                currentStage.img_dustbinPaper.visible = (stackedNumbers.length == 0) ? false : true;
            }
            dropBoxes[lastIndex].children[0].graphics._fillInstructions[0].params[1] = "#fdf5ce";
            dropBoxes[lastIndex].isClicked = true;
        } else {
            resetDropBoxClick();
            dropBoxes[0].children[0].graphics._fillInstructions[0].params[1] = "#fdf5ce";
            dropBoxes[0].isClicked = true;
        }

    }

    // text key functionality for dropbox  ---------- START
    function resetDropBoxClick() {
        for (var i = 0; i < dropBoxes.length; i++) {
            dropBoxes[i].isClicked = false;
            dropBoxes[i].children[0].graphics._fillInstructions[0].params[1] = "#F8F8F8";
        }
    }
    document.onkeypress = function(evt) {
        evt = evt || window.event;
        var charCode = evt.keyCode || evt.which;
        var charStr = String.fromCharCode(charCode);
        var activeBox = null;
        if (dropBoxes[0].children[0].graphics._fillInstructions[0].params[1] == "#fdf5ce" && activeBox == null) {
            dropBoxes[0].isClicked = true;
        }
        for (var i = 0; i < dropBoxes.length; i++) {
            if (dropBoxes[i].isClicked == true) {
                activeBox = dropBoxes[i];
                activeBox.index = i;
                break;
            }
        }
        var allowedChars = ['+', '-', '='];
        var isInteger = function(str) {
            return (str | 0) == str;
        };
        if (activeBox != null && (isInteger(charStr) == true || allowedChars.indexOf(charStr) > -1)) {
            activeBox.dropBoxText = (charStr == '-') ? '–' : charStr;
            activeBox.children[1].text = (charStr == '-') ? '–' : charStr;
            stackedNumbers.push(activeBox.index);
            currentStage.img_dustbinPaper.visible = true;
            resetDropBoxClick();
            var nxtIndex = dropBoxes.indexOf(activeBox) + 1;
            nxtIndex = (nxtIndex == dropBoxes.length) ? 0 : nxtIndex;
            dropBoxes[nxtIndex].children[0].graphics._fillInstructions[0].params[1] = "#fdf5ce";
            dropBoxes[nxtIndex].isClicked = true;
        }
    };

    function checkDustbin() {
        var isEmpty = true;
        for (var i = 0; i < dropBoxes.length; i++) {
            if (dropBoxes[i].children[1].text != undefined && dropBoxes[i].children[1].text.trim() != "") {
                isEmpty = false;
                break;
            }
        }
        if (isEmpty == true) {
            currentStage.img_dustbinPaper.visible = false;
        }
    }
    $('html').on('keydown', function(evt) {
        var isBackspace = (evt.keyCode == 8) ? true : false; // event for  backspace key
        var isDelete = (evt.keyCode == 46) ? true : false; // event for delete  key
        // var isDelete = (evt.keyCode == 8 || evt.keyCode == 46) ? true : false; // event for delete or backspace key
        var activeBox = null;

        for (var i = 0; i < dropBoxes.length; i++) {
            if (dropBoxes[i].isClicked == true) {
                activeBox = dropBoxes[i];
                break;
            }
        }
        if (isDelete == true) {
            activeBox.dropBoxText = "";
            activeBox.children[1].text = "";
            currentStage.img_dustbinPaper.visible = true;
        }
        if (isBackspace == true) {
            if (stackedNumbers.length > 0) {
                var lastIndex = stackedNumbers[stackedNumbers.length - 1];
                dropBoxes[lastIndex].solved = false;
                dropBoxes[lastIndex].value = null;
                dropBoxes[lastIndex].dropBoxText.text = "";
                dropBoxes[lastIndex].clicked = false;
                dropBoxes[lastIndex].children[1].text = "";
                stackedNumbers.pop();
                resetDropBoxClick();
                dropBoxes[lastIndex].children[0].graphics._fillInstructions[0].params[1] = "#fdf5ce";
                dropBoxes[lastIndex].isClicked = true;

            } else {
                resetDropBoxClick();
                dropBoxes[0].children[0].graphics._fillInstructions[0].params[1] = "#fdf5ce";
                dropBoxes[0].isClicked = true;
            }
        }
        checkDustbin();
        var isEdge = navigator.userAgent.indexOf(' Edge/') >= 0 || navigator.userAgent.indexOf(' edge/') >= 0;
        if (((/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 11) || isEdge == true) && evt.keyCode == 8) {
            evt.preventDefault();
        }
    });
    // text key functionality for dropbox  ------------ END

    var currentStage;
    var dropBoxes = [];
    var dropBoxesBtn = [];
    var droppedBtns = [];
    var allDraggables_5 = [];
    var dragger_Btns = [];
    var stackedNumbers = [];

    (lib.Stage1 = function() {
        this.initialize();
        thisStage = this;
        currentStage = this;
        var myStage = this;

        this.backBtn = new createjs.Shape()
        this.backBtn.graphics.f('#ffffff').s('#ffffff').drawRect(1227, 388, 87, 38);
        this.backBtn.on('click', backNavigation);
        this.addChild(this.backBtn);

        this.img_pallate = new lib.pallate();
        this.img_pallate.setTransform(1150, 220, 1.2, 1.2);
        this.img_pallate.visible = false;

        this.img_num_plate = new lib.num_plate();
        this.img_num_plate.setTransform(-20, 432);
        this.img_num_plate.visible = false;
        this.img_num_plate.type = 'toTransform';
        this.img_num_plate.currentStage = 'invisible';

        this.img_num_plate.on('click', function() {
            if (currentStage.img_num_plate.currentStage == 'visible') {
                currentStage.img_pallate.visible = false;
                currentStage.draggerContainer.visible = false;
                for (var i = 0; i < dropBoxes.length; i++) {
                    dropBoxes[i].visible = false;
                }
                currentStage.img_num_plate.currentStage = 'invisible';
                currentStage.img_num_plate.alpha = 1;
            } else {
                currentStage.img_pallate.visible = true;
                currentStage.draggerContainer.visible = true;
                for (var i = 0; i < dropBoxes.length; i++) {
                    dropBoxes[i].visible = true;
                }
                currentStage.img_num_plate.currentStage = 'visible';
                currentStage.img_num_plate.alpha = 0.6;
            }
        });

        this.addChild(this.img_pallate, this.img_num_plate);

        var sections = 1,
            cellBlocks = 8,
            rows = 1;

        // logic for vivoar drag & drop exercise starts here
        for (var i = 0; i < cellBlocks; i++) { // drop Area for numbers
            var dropBoxtemp = new createjs.Container();
            dropBoxtemp.x = dropBoxesProp.x + i * (dropBox.width + dropBoxSpacing.width),
                dropBoxtemp.y = dropBoxesProp.y;
            var box = new createjs.Shape()
            if (i == 0) { boxColor = "#fdf5ce" } else { boxColor = "#F8F8F8" }
            box.graphics.f(boxColor).s('#7d7d7d').drawRoundRect(0, 0, dropBox.width, dropBox.height, 1);
            dropBoxtemp.addChild(box);
            var dropBoxText = new createjs.Text(" ", "bold 60px 'Myriad Pro'", "#000000");
            dropBoxText.textAlign = 'center';
            dropBoxText.lineHeight = 10;
            dropBoxText.x = 40;
            dropBoxText.y = 65;
            dropBoxtemp.addChild(box, dropBoxText);
            dropBoxtemp.dropBoxText = dropBoxText;
            dropBoxtemp.value = i;
            dropBoxtemp.visible = false;

            dropBoxtemp.on('click', function(evt) {
                resetDropBoxClick();
                evt.currentTarget.children[0].graphics._fillInstructions[0].params[1] = "#fdf5ce";
                evt.currentTarget.isClicked = true;
            });

            dropBoxes.push(dropBoxtemp);
            this.addChild(dropBoxtemp);
        }

        sections = 1,
            cellBlocks = 3,
            rows = 1;

        var numPallateText = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "–", "="];

        this.draggerContainer = new cjs.Container();

        for (var section = 0; section < sections; section++) {
            for (var cellBlock = 0; cellBlock < numPallateText.length; cellBlock++) {

                var xTransform = 0;
                if (cellBlock > 9) {
                    draggableNumberSpacing.height = 46 * 4.33;
                    xTransform = -153 * 3.33;
                } else if (cellBlock == 9) {
                    draggableNumberSpacing.height = 46 * 3;
                    xTransform = -153 * 3;
                } else if (cellBlock > 5) {
                    draggableNumberSpacing.height = 46 * 2;
                    xTransform = -153 * 2;
                } else if (cellBlock > 2) {
                    draggableNumberSpacing.height = 46;
                    xTransform = -153;
                }

                var dragger = new createjs.Container();

                dragger.value = numPallateText[cellBlock];

                dragger.x = (draggableNumber.x + (draggableNumber.width * cellBlock) + (draggableNumberSpacing.width * cellBlock)) + ((draggableNumber.width * cellBlocks) * section + cellSpacing.cellSectionSpace * section) + xTransform;

                dragger.y = draggableNumber.y + (draggableNumber.height) + (draggableNumberSpacing.height);

                var tempCell = new createjs.Shape()
                tempCell.graphics.s('#000000').beginLinearGradientFill(["#000000", "#000000"], [0, 1], 0, 10, 0, 80).drawRoundRect(0, 0, draggableNumber.width, draggableNumber.height, 1);

                var tempCellText = new createjs.Text("" + dragger.value, "bold 30px 'Myriad Pro'", "#000000");
                tempCellText.textAlign = "center";
                tempCellText.lineHeight = 10;

                tempCellText.x = draggableNumber.width / 2;
                tempCellText.y = draggableNumber.height / 1.38;
                dragger.textBox = tempCellText;
                dragger.addChild(tempCell);
                dragger.addChild(tempCellText);

                this.draggerContainer.addChild(dragger);
                allDraggables_5.push(dragger);
                dragger.on("mouseover", handleOver);
                dragger.on("mouseout", handleOut);
                dragger.on("mousedown", handlePress);
                dragger.addEventListener("click", numPlateclick);
            }
        }
        this.draggerContainer.visible = false;
        this.addChild(this.draggerContainer);

        // drag and drop buttons into container starts here

        this.imgBox = new createjs.Shape()
        this.imgBox.graphics.f('#ffffff').s('#98D8E4').ss(2).drawRoundRect(0, 0, 235, 560, 10);
        this.imgBox.setTransform(70, -110);
        this.addChild(this.imgBox);

        var Lsord1 = new lib.Lsord1();
        var dragger_Lsord1 = new createjs.Container();
        dragger_Lsord1.x = 80;
        dragger_Lsord1.y = -100;
        dragger_Lsord1.name = "Lsord1";
        dragger_Lsord1.value = "btnTop";
        dragger_Lsord1.addChild(Lsord1)
        this.addChild(dragger_Lsord1);
        dragger_Btns.push(dragger_Lsord1);
        dragger_Lsord1.on("mousedown", handlePressBtn);

        var Lsord2 = new lib.Lsord2();
        var dragger_Lsord2 = new createjs.Container();
        dragger_Lsord2.x = 80;
        dragger_Lsord2.y = 0;
        dragger_Lsord2.name = "Lsord2";
        dragger_Lsord2.value = "btnMiddle";
        dragger_Lsord2.addChild(Lsord2)
        this.addChild(dragger_Lsord2);
        dragger_Btns.push(dragger_Lsord2);
        dragger_Lsord2.on("mousedown", handlePressBtn);


        var Lsord3 = new lib.Lsord3();
        var dragger_Lsord3 = new createjs.Container();
        dragger_Lsord3.x = 80;
        dragger_Lsord3.y = 123;
        dragger_Lsord3.name = "Lsord3";
        dragger_Lsord3.value = "btnTop";
        dragger_Lsord3.addChild(Lsord3)
        this.addChild(dragger_Lsord3);
        dragger_Btns.push(dragger_Lsord3);
        dragger_Lsord3.on("mousedown", handlePressBtn);

        var Lsord4 = new lib.Lsord4();
        var dragger_Lsord4 = new createjs.Container();
        dragger_Lsord4.x = 95;
        dragger_Lsord4.y = 240;
        dragger_Lsord4.name = "Lsord4";
        dragger_Lsord4.value = "btnBottom";
        dragger_Lsord4.addChild(Lsord4)
        this.addChild(dragger_Lsord4);
        dragger_Btns.push(dragger_Lsord4);
        dragger_Lsord4.on("mousedown", handlePressBtn);

        var Lsord5 = new lib.Lsord5();
        var dragger_Lsord5 = new createjs.Container();
        dragger_Lsord5.x = 77;
        dragger_Lsord5.y = 350;
        dragger_Lsord5.name = "Lsord5";
        dragger_Lsord5.value = "btnTop";
        dragger_Lsord5.addChild(Lsord5)
        this.addChild(dragger_Lsord5);
        dragger_Btns.push(dragger_Lsord5);
        dragger_Lsord5.on("mousedown", handlePressBtn);

        var Lsord6 = new lib.Lsord6();
        var dragger_Lsord6 = new createjs.Container();
        dragger_Lsord6.x = 205;
        dragger_Lsord6.y = -100;
        dragger_Lsord6.name = "Lsord6";
        dragger_Lsord6.value = "btnTop";
        dragger_Lsord6.addChild(Lsord6)
        this.addChild(dragger_Lsord6);
        dragger_Btns.push(dragger_Lsord6);
        dragger_Lsord6.on("mousedown", handlePressBtn);


        var Lsord7 = new lib.Lsord7();
        var dragger_Lsord7 = new createjs.Container();
        dragger_Lsord7.x = 210;
        dragger_Lsord7.y = 0;
        dragger_Lsord7.name = "Lsord7";
        dragger_Lsord7.value = "btnMiddle";
        dragger_Lsord7.addChild(Lsord7)
        this.addChild(dragger_Lsord7);
        dragger_Btns.push(dragger_Lsord7);
        dragger_Lsord7.on("mousedown", handlePressBtn);

        var Lsord8 = new lib.Lsord8();
        var dragger_Lsord8 = new createjs.Container();
        dragger_Lsord8.x = 210;
        dragger_Lsord8.y = 120;
        dragger_Lsord8.name = "Lsord8";
        dragger_Lsord8.value = "btnMiddle";
        dragger_Lsord8.addChild(Lsord8)
        this.addChild(dragger_Lsord8);
        dragger_Btns.push(dragger_Lsord8);
        dragger_Lsord8.on("mousedown", handlePressBtn);

        var Lsord9 = new lib.Lsord9();
        var dragger_Lsord9 = new createjs.Container();
        dragger_Lsord9.x = 230;
        dragger_Lsord9.y = 240;
        dragger_Lsord9.name = "Lsord9";
        dragger_Lsord9.value = "btnBottom";
        dragger_Lsord9.addChild(Lsord9)
        this.addChild(dragger_Lsord9);
        dragger_Btns.push(dragger_Lsord9);
        dragger_Lsord9.on("mousedown", handlePressBtn);

        var Lsord10 = new lib.Lsord10();
        var dragger_Lsord10 = new createjs.Container();
        dragger_Lsord10.x = 205;
        dragger_Lsord10.y = 350;
        dragger_Lsord10.name = "Lsord4";
        dragger_Lsord10.value = "btnMiddle";
        dragger_Lsord10.addChild(Lsord10)
        this.addChild(dragger_Lsord10);
        dragger_Btns.push(dragger_Lsord10);
        dragger_Lsord10.on("mousedown", handlePressBtn);



        var dropBoxBtnTop = new createjs.Container();
        dropBoxBtnTop.x = 360,
            dropBoxBtnTop.y = -200;
        var box = new createjs.Shape()
        box.graphics.f('#ffffff').s('#ffffff').drawRoundRect(0, 0, 849, 740, 1);
        dropBoxBtnTop.value = "btnTop";
        dropBoxBtnTop.addChild(box);
        dropBoxesBtn.push(dropBoxBtnTop);

        // var dropBoxBtnMiddle = new createjs.Container();
        // dropBoxBtnMiddle.x = 560,
        //     dropBoxBtnMiddle.y = 10;
        // var box = new createjs.Shape()
        // box.graphics.f('#d8d6d6').s('#ffffff').drawRoundRect(0, 0, 449, 110, 1);
        // dropBoxBtnMiddle.addChild(box);
        // dropBoxBtnMiddle.value = "btnMiddle";
        // dropBoxesBtn.push(dropBoxBtnMiddle);

        // var dropBoxBtnBottom = new createjs.Container();
        // dropBoxBtnBottom.x = 560,
        //     dropBoxBtnBottom.y = 135;
        // var box = new createjs.Shape()
        // box.graphics.f('#d8d6d6').s('#ffffff').drawRoundRect(0, 0, 449, 110, 1);
        // dropBoxBtnBottom.addChild(box);
        // dropBoxBtnBottom.value = "btnBottom";
        // dropBoxesBtn.push(dropBoxBtnBottom);

        this.addChild(dropBoxBtnTop);


        this.img_table = new lib.Lsord11();
        this.img_table.setTransform(430, -110, 0.9, 0.9);
        this.addChild(this.img_table);

        this.img_dustbin = new lib.dustbin();
        this.img_dustbin.setTransform(-110, 430, 0.7, 0.7);
        this.img_dustbin.type = 'toTransform';

        this.img_dustbinPaper = new lib.dustbinPaper();
        this.img_dustbinPaper.setTransform(-110, 430, 0.7, 0.7);
        this.img_dustbinPaper.type = 'toTransform';
        this.img_dustbinPaper.visible = false;

        this.img_dustbinPaper.on('click', function() {
            resetAll();
        });

        this.addChild(this.img_dustbin, this.img_dustbinPaper);

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);


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
