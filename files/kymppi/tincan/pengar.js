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
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/pengar_2.png",
            id: "notepad"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/1kr.png",
            id: "kr_1"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/2kr.png",
            id: "kr_2"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/5kr.png",
            id: "kr_5"
        }, {
            src: "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/tincan/images/10kr.png",
            id: "kr_10"
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



    (lib.notepad = function() {
        this.initialize(img.notepad);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);

    (lib.kr_1 = function() {
        this.initialize(img.kr_1);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.kr_2 = function() {
        this.initialize(img.kr_2);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.kr_5 = function() {
        this.initialize(img.kr_5);
    }).prototype = p = new cjs.Bitmap();
    p.virtualBounds = new cjs.Rectangle(0, 0, 121, 121);
    (lib.kr_10 = function() {
        this.initialize(img.kr_10);
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
        x: -29,
        y: 28,
        width: 40,
        height: 40
    };
    var draggableNumberSpacing = {
        width: 11,
        height: 0
    };
    var dropBoxesProp = {
        x: 60,
        y: 423
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

    function handlePress(evt) {

        if (evt.currentTarget) {
            var dragger = new createjs.Container();
            dragger.value = evt.currentTarget.value;
            var tempCell = new createjs.Shape()
                //tempCell.graphics.s('#7d7d7d').beginLinearGradientFill(["#fff880", "#FFFFFF"], [0, 1], 0, 10, 0, 80);
            tempCell.graphics.drawRoundRect(0, 0, draggableNumber.width, draggableNumber.height, 5);
            var tempCellText = new createjs.Text(dragger.value, "bold 60px 'Myriad Pro'", "#000000");
            tempCellText.textAlign = "center";
            tempCellText.lineHeight = -5
            tempCellText.x = draggableNumber.width / 2 + 15;
            tempCellText.y = draggableNumber.height / 4 + 20;

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

            var img_btn_blue = (evt.currentTarget.value == "1kr") ? new lib.kr_1() : (evt.currentTarget.value == "2kr") ? new lib.kr_2() : (evt.currentTarget.value == "5kr") ? new lib.kr_5() : new lib.kr_10();
            dragger.addChild(img_btn_blue)

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

            var img_btn_blue = (evt.currentTarget.value == "1kr") ? new lib.kr_1() : (evt.currentTarget.value == "2kr") ? new lib.kr_2() : (evt.currentTarget.value == "5kr") ? new lib.kr_5() : new lib.kr_10();
            dragger.addChild(img_btn_blue)

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

                    // if (dropBoxesBtn[i].isHover) {
                    if (dropBoxesBtn[i].children[0].hitTest(pt.x, pt.y) == true && isOverlapping != true) {
                        dropArea = dropBoxesBtn[i];
                        boxNumber = dropBoxesBtn[i].value;
                        break;
                    }
                };
            }
            var money = ["1kr", "2kr", "5kr", "10kr"];
            if (dropArea != null && (money.indexOf(stage.draggingShape.value) > -1)) {
                currentStage.img_dustbinPaper.visible = true;
                stage.draggingShape.on("mousedown", handlePressBtnNotepad);
                droppedBtns.push(stage.draggingShape);
            } else {
                var xPos = 950,
                    yPos = 210;

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

            var money = ["1kr", "2kr", "5kr", "10kr"];
            if (dropArea != null && (money.indexOf(stage.draggingShape.value) == -1)) {
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

    function isAllCellsSolved() {
        for (var i = 0; i < dropBoxes.length; i++) {
            if (dropBoxes[i].solved) {
                if (dropBoxes[i].value !== i) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
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
        if (stackedNumbers.length > 0) {
            var lastIndex = stackedNumbers[stackedNumbers.length - 1];
            dropBoxes[lastIndex].solved = false;
            dropBoxes[lastIndex].value = null;
            dropBoxes[lastIndex].dropBoxText.text = "";
            dropBoxes[lastIndex].clicked = false;
            dropBoxes[lastIndex].children[1].text = "";
            stackedNumbers.pop();
            currentStage.img_dustbinPaper.visible = (stackedNumbers.length == 0) ? false : true;
        }
    }


    function ChangeOptions(evt) {
        var obj = evt.target;

        currentStage.option1.children[1].graphics._fillInstructions[0].params[1] = "#ffffff";

        obj.parent.children[1].graphics._fillInstructions[0].params[1] = "grey"
        resetAll();

        currentStage.coin.visible = false;


        if (evt.currentTarget.name == "coin") {
            currentStage.coin.visible = true;
        }
    }

    // text key functionality for dropbox  ---------- START
    function resetDropBoxClick() {
        for (var i = 0; i < dropBoxes.length; i++) {
            dropBoxes[i].isClicked = false;
            dropBoxes[i].children[0].graphics._fillInstructions[0].params[1] = "#F8F8F8";
        }
    }

    // document.onkeypress = function(evt) {
    //     evt = evt || window.event;
    //     var charCode = evt.keyCode || evt.which;
    //     var charStr = String.fromCharCode(charCode);
    //     var activeBox = null;
    //     for (var i = 0; i < dropBoxes.length; i++) {
    //         if (dropBoxes[i].isClicked == true) {
    //             activeBox = dropBoxes[i];
    //             activeBox.index = i;
    //             break;
    //         }
    //     }
    //     var allowedChars = ['+', '-', '='];
    //     var isInteger = function(str) {
    //         return (str | 0) == str;
    //     };
    //     if (activeBox != null && (isInteger(charStr) == true || allowedChars.indexOf(charStr) > -1)) {
    //         activeBox.dropBoxText = (charStr == '-') ? '–' : charStr;
    //         activeBox.children[1].text = (charStr == '-') ? '–' : charStr;

    //         var stackIndex = stackedNumbers.indexOf(i);
    //         if (stackIndex > -1) {
    //             stackedNumbers.splice(stackIndex, 1);
    //             stackedNumbers.push(i);
    //         } else {
    //             stackedNumbers.push(i);
    //         }

    //         currentStage.img_dustbinPaper.visible = true;
    //         resetDropBoxClick();
    //         var nxtIndex = dropBoxes.indexOf(activeBox) + 1;
    //         nxtIndex = (nxtIndex == dropBoxes.length) ? 0 : nxtIndex;
    //         dropBoxes[nxtIndex].children[0].graphics._fillInstructions[0].params[1] = "#fdf5ce";
    //         dropBoxes[nxtIndex].isClicked = true;
    //     }
    // };

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
    // $('html').on('keydown', function(evt) {
    //     var isDelete = (evt.keyCode == 8 || evt.keyCode == 46) ? true : false; // event for delete or backspace key
    //     var activeBox = null;
    //     var stack_arrCount = 0;
    //     for (var i = 0; i < dropBoxes.length; i++) {
    //         if (dropBoxes[i].isClicked == true) {
    //             activeBox = dropBoxes[i];
    //             stack_arrCount = i;
    //             break;
    //         }
    //     }
    //     if (isDelete == true) {
    //         activeBox.dropBoxText = "";
    //         activeBox.children[1].text = "";
    //         var stackIndex = stackedNumbers.indexOf(stack_arrCount);
    //         if (stackIndex > -1) {
    //             stackedNumbers.splice(stackIndex, 1);
    //         }
    //         currentStage.img_dustbinPaper.visible = true;
    //     }
    //     checkDustbin();
    //     var isEdge = navigator.userAgent.indexOf(' Edge/') >= 0 || navigator.userAgent.indexOf(' edge/') >= 0;
    //     if (((/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 11) || isEdge == true) && evt.keyCode == 8) {
    //         evt.preventDefault();
    //     }
    // });
    // text key functionality for dropbox  ------------ END

    var currentStage;
    var dropBoxes = [];
    var dropBoxesBtn = [];
    var droppedBtns = [];
    var allDraggables_5 = [];
    var stackedNumbers = [];

    (lib.Stage1 = function() {
        this.initialize();
        thisStage = this;

        thisStage.currentAnswer = 0;

        // this.Qbox = new createjs.Shape()
        // this.Qbox.graphics.f('#ffffff').s('#7d7d7d').ss(2).drawRect(-60, -132, 180, 50);
        // this.Qbox.setTransform(0, 0);

        // this.option1 = new cjs.Container();
        // this.QText2 = new createjs.Text("1 - 10 kr", "23px 'Myriad Pro'");
        // this.QText2.setTransform(0, -154 + 17 + 36 * 1);
        // this.QTextBox2 = new createjs.Shape()
        // this.QTextBox2.graphics.f('grey').s('#7d7d7d').ss(2).drawRect(-32, -152 + 36 * 1, 18, 18);
        // this.QTextBox2.setTransform(0, 0);
        // this.tempRect2 = new createjs.Shape()
        // this.tempRect2.graphics.f('#ffffff').s('#ffffff').ss(2).drawRect(-32, -152 + 36 * 1, 135, 18);
        // this.option1.name = "coin";
        // this.option1.addChild(this.tempRect2, this.QTextBox2, this.QText2);

        // this.option1.on('click', ChangeOptions);


        // this.addChild(this.Qbox, this.option1);



        // drag and drop buttons into container starts here
        this.img_notepad = new lib.notepad();
        this.img_notepad.setTransform(60, -180, 1.9, 1.8);
        this.addChild(this.img_notepad);

        this.coin = new cjs.Container();

        var img_1kr = new lib.kr_1();
        var dragger_1kr = new createjs.Container();
        dragger_1kr.x = 1190;
        dragger_1kr.y = -45;
        dragger_1kr.value = "1kr";
        dragger_1kr.addChild(img_1kr)
        this.coin.addChild(dragger_1kr);
        dragger_1kr.on("mousedown", handlePressBtn);

        var img_2kr = new lib.kr_2();
        var dragger_2kr = new createjs.Container();
        dragger_2kr.x = 1185;
        dragger_2kr.y = 60;
        dragger_2kr.value = "2kr";
        dragger_2kr.addChild(img_2kr)
        this.coin.addChild(dragger_2kr);
        dragger_2kr.on("mousedown", handlePressBtn);

        var img_5kr = new lib.kr_5();
        var dragger_5kr = new createjs.Container();
        dragger_5kr.x = 1185;
        dragger_5kr.y = 185;
        dragger_5kr.value = "5kr";
        dragger_5kr.addChild(img_5kr)
        this.coin.addChild(dragger_5kr);
        dragger_5kr.on("mousedown", handlePressBtn);

        var img_10kr = new lib.kr_10();
        var dragger_10kr = new createjs.Container();
        dragger_10kr.x = 1198;
        dragger_10kr.y = 320;
        dragger_10kr.value = "10kr";
        dragger_10kr.addChild(img_10kr)
        this.coin.addChild(dragger_10kr);
        dragger_10kr.on("mousedown", handlePressBtn);


        var dropBoxMoney = new createjs.Container();
        dropBoxMoney.x = 135,
            dropBoxMoney.y = -100;
        var box = new createjs.Shape()
        box.graphics.f('#ffffff').s('#ffffff').drawRoundRect(1, -18, 948, 607, 1);
        dropBoxMoney.value = "kr";
        dropBoxMoney.addChild(box);
        dropBoxesBtn.push(dropBoxMoney);

        this.addChild(this.coin, dropBoxMoney);

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

        currentStage = this;
        var myStage = this;

        exerciseCount = 0;

        this.onNewExercise = function(e) {
            if (typeof btn_newExercise != 'undefined') {
                $(btn_newExercise).hide();
            }
        };

        this.onNewExercise();

    }).prototype = p = new cjs.Container();
    p.virtualBounds = new cjs.Rectangle(0, 0, 610.9, 650);


    (lib.exerciseTitle = function() {
        this.initialize();
        this.text = new cjs.Text("Boss och Silkys knappar", "bold 28px 'Myriad Pro'", "000000");
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
