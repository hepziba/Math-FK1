function createjs_fontfix(mainItem) {
    var onlyProved = true;
    var lineTolerance = 3;
    var highTolerance = 5;

    var input_x = 2;

    var coverableFont = {
        "'Myriad Pro'": "'myriad-pro', 'Myriad Pro'"
    };

    var moveTextY = {
        ie: {
            "'UusiTekstaus'": 1.5 / 30,
            "'Myriad Pro'": 2.5 / 30,
            "'Tavutus'": 3.5 / 30,
            "'Arial'": 4 / 30
        },
        firefox: {
            "'UusiTekstaus'": 5.5 / 30,
            "'Myriad Pro'": 9.5 / 30,
            "'Tavutus'": 9 / 30,
            "'Arial'": 9 / 30
        },
        chrome: {
            "'UusiTekstaus'": 1 / 30,
            "'Myriad Pro'": 2.5 / 30,
            "'Tavutus'": 4 / 30,
            "'Arial'": 5 / 30
        },
        opera: {
            "'UusiTekstaus'": 1 / 30,
            "'Myriad Pro'": 2.5 / 30,
            "'Tavutus'": 4 / 30,
            "'Arial'": 5 / 30
        },
        safari: {
            "'UusiTekstaus'": 1 / 30,
            "'Myriad Pro'": 3 / 30,
            "'Tavutus'": 10 / 30,
            "'Arial'": 3 / 30
        }
    };

    var textScaleSettings = {
        ie: {

        },
        firefox: {

        },
        chrome: {

        },
        opera: {

        },
        safari: {

        }
    }

    if (bowser) {
        if (bowser.msie) {
            moveTextY = moveTextY.ie;
            textScaleSettings = textScaleSettings.ie;
        } else if (bowser.firefox) {
            moveTextY = moveTextY.firefox;
            textScaleSettings = textScaleSettings.firefox;
        } else if (bowser.safari || iosVersion != undefined) {
            moveTextY = moveTextY.safari;
            textScaleSettings = textScaleSettings.safari;
        } else if (bowser.chrome) {
            moveTextY = moveTextY.chrome;
            textScaleSettings = textScaleSettings.chrome;
        } else if (bowser.opera) {
            moveTextY = moveTextY.opera;
            textScaleSettings = textScaleSettings.opera;
        } else {
            moveTextY = {};
            textScaleSettings = {};
        }
    } else {
        moveTextY = {};
        textScaleSettings = {};
    }

    searchText(mainItem);



    function searchText(item) {
        var allSubTitles = [];

        $.each(item, function(key, child) {
            if (child == null || child == undefined) {

            } else if (child.getNumChildren && key != 'parent') {
                searchText(child);
            } else if (child.font) {
                allSubTitles.push(textObject(child));
                moveText(allSubTitles[allSubTitles.length - 1]);
                replaceFonts(allSubTitles[allSubTitles.length - 1]);
            }
        });

        if (onlyProved) {
            if (item.fontfix === true)
                sortText(allSubTitles);
        } else {
            sortText(allSubTitles);
        }

        belowTextLine(allSubTitles);
    }

    function textObject(item) {
        var arr, style, size, font, underLine, properties;

        arr = item.font.split('px ');
        arr = (arr[0].split(' ')).concat(arr[1]);
        if (arr.length == 2)
            arr.splice(0, 0, '');

        style = arr[0];
        size = parseFloat(arr[1].replace('px', ''));
        font = arr[2];

        underLine = false;
        if (item.text.indexOf('<u>') > -1) {
            underLine = true;
            item.text = item.text.replace('<u>', '');
        }

        properties = item.getTransformedBounds();

        return {
            item: item,
            x: item.x,
            y: item.y,
            width: properties.width,
            height: properties.height,
            scaleX: item.scaleX,
            scaleY: item.scaleX,
            text: item.text,
            style: style,
            size: size,
            font: font,
            underline: underLine
        }
    }



    function moveText(obj) {
        var size, font, properties, factorY, scalingX;

        size = obj.size;
        font = obj.font;

        factorY = 0;
        if (moveTextY[font])
            factorY = moveTextY[font];

        if (!isNaN(size) && !isNaN(factorY))
            obj.y = obj.item.y += factorY * size;

        if (input_x)
            obj.x = obj.item.x += input_x;


        scalingX = 1;
        if (textScaleSettings[font])
            scalingX = textScaleSettings[font];

        obj.scaleX *= scalingX;
        obj.item.scaleX *= obj.scaleX;

        properties = obj.item.getTransformedBounds();
        obj.width = properties.width;
        obj.height = properties.height;
    }

    function replaceFonts(obj) {
        var style, size, font, newFont, newStyle;

        style = obj.style;
        size = obj.size;
        font = obj.font;

        newFont = coverableFont[font];
        newStyle = style + ' ';

        if (newFont) {
            if (newFont.indexOf('|bold') > -1) {
                newFont = newFont.replace('|bold', '');
                if (style.indexOf('bold') === -1)
                    newStyle += 'bold ';
            }
            if (newFont.indexOf('|italic') > -1) {
                newFont = newFont.replace('|italic', '');
                if (style.indexOf('italic') === -1)
                    newStyle += 'italic ';
            }

            obj.item.font = newStyle + size + 'px ' + newFont;

            properties = obj.item.getTransformedBounds();
            obj.width = properties.width;
            obj.height = properties.height;
        }
    }

    function sortText(arr) {
        if (arr.length == 0)
            return;

        var firstSign = ' ';
        var endSigns = '.,?!>–•';

        var i;
        objSort(arr, 'y');
        arr.reverse();

        var yPos = arr[0].y;

        var ranks = [];
        var line = 0;
        ranks[line] = [];

        for (i = 0; i < arr.length; i++) {
            obj = arr[i];

            if (yPos - lineTolerance <= obj.y && obj.y <= yPos + lineTolerance) {
                ranks[line].push(obj);
            } else {
                objSort(ranks[line], 'x');

                line++;
                ranks[line] = [];
                ranks[line].push(obj);
                yPos = obj.y;
            }
        }

        objSort(ranks[line], 'x');

        var xPos, choose, firstChar, endChar;
        for (i = 0; i < ranks.length; i++) {
            line = ranks[i];
            xPos = line[0].x + line[0].width;
            var tempLine = [line[0]];
            var tempStr = line[0].contents;
            choose = false;
            if (line.length > 1) {
                for (a = 1; a < line.length; a++) {
                    firstChar = firstSign.indexOf(line[a].item.text.charAt(0)) > -1;
                    endChar = endSigns.indexOf(line[a - 1].item.text.charAt(line[a - 1].item.text.length - 1)) > -1;
                    var beCombined = !endChar || firstChar;
                    if (onlyProved) {
                        if (beCombined) {
                            tempLine.push(line[a]);
                        } else {
                            orderLine(tempLine);

                            tempLine = [line[a]];
                            choose = false;
                        }
                    } else if (xPos + highTolerance >= line[a].x && beCombined) {
                        tempLine.push(line[a]);
                    } else {
                        orderLine(tempLine);

                        tempLine = [line[a]];
                        choose = false;
                    }

                    xPos = line[a].x + line[a].width;
                }
                if (tempLine.length > 0) {
                    orderLine(tempLine);
                }
            }
        }

        function orderLine(arr) {
            var _x = undefined;
            var _y = undefined;

            if (window.debugJS === true) {
                var prevTextIsNotEmpty = false;
                var textList = '';
            }
            $.each(arr, function(i, obj) {
                _x == undefined ? _x = obj.x : null;
                _y == undefined ? _y = obj.y : null;

                obj.item.x = obj.x = _x;
                obj.item.y = obj.y = _y;

                _x = obj.x + obj.width;


                if (window.debugJS === true) {
                    if ((' .,!?)-').indexOf(obj.text.charAt(0)) == -1 && prevTextIsNotEmpty) {
                        textList = textList == '' ? obj.text : (textList + '<br>' + obj.text);
                        obj.item.color = '#ff0000';
                    }
                    if (obj.text.charAt(obj.text.length - 1) != ' ')
                        prevTextIsNotEmpty = true;
                    else
                        prevTextIsNotEmpty = false;
                }
            });

            if (window.debugJS === true) {
                if (textList != '')
                    trace(textList + '<br>');
            }
        }



        function objSort() {
            var args = arguments,
                array = args[0],
                case_sensitive, keys_length, key, desc, a, b, i;

            if (typeof arguments[arguments.length - 1] === 'boolean') {
                case_sensitive = arguments[arguments.length - 1];
                keys_length = arguments.length - 1;
            } else {
                case_sensitive = false;
                keys_length = arguments.length;
            }

            return array.sort(function(obj1, obj2) {
                for (i = 1; i < keys_length; i++) {
                    key = args[i];
                    if (typeof key !== 'string') {
                        desc = key[1];
                        key = key[0];
                        a = obj1[args[i][0]];
                        b = obj2[args[i][0]];
                    } else {
                        desc = false;
                        a = obj1[args[i]];
                        b = obj2[args[i]];
                    }

                    if (case_sensitive === false && typeof a === 'string') {
                        a = a.toLowerCase();
                        b = b.toLowerCase();
                    }

                    if (!desc) {
                        if (a < b) return -1;
                        if (a > b) return 1;
                    } else {
                        if (a > b) return -1;
                        if (a < b) return 1;
                    }
                }
                return 0;
            });

        }
    }

    function belowTextLine(arr) {
        $.each(arr, function(a, obj) {
            if (obj.underline) {
                var item = obj.item;
                var size = obj.size;
                var margin = 1.5 * size / 15;

                var gr = new createjs.Graphics();
                gr.setStrokeStyle(1);
                gr.beginStroke(item.color == undefined ? '#000' : item.color);
                gr.moveTo(obj.x, obj.y + obj.height - margin).lineTo(obj.x + obj.width, obj.y + obj.height - margin);
                gr.endStroke();

                var line = new createjs.Shape(gr);
                item.parent.addChildAt(line, 0);
            }
        });
    }
}
