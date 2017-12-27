function Show(param) {
    param = param || {};

    

    var hiddenPanel = [],
        featuresPanel = [];
    var conceal, featured;

    function baseSetting(obj) {
        var a, str, arr, item;
        str = 'conceal';
        arr = [];
        for (a = 1; a <= obj.object.getNumChildren(); a++) {
            item = obj.object[str + a.toString()];
            if (!item)
                continue;

            arr.push(item);
            item.visible = false;
        }
        item = obj.object[str];
        if (item) {
            arr.push(item);
            item.visible = false;
        }
        hiddenPanel.push(arr);

        

        str = 'featured';
        arr = [];
        for (a = 1; a <= obj.object.getNumChildren(); a++) {
            item = obj.object[str + a.toString()];
            if (!item)
                continue;

            arr.push(item);
            item.visible = false;
        }
        item = obj.object[str];
        if (item) {
            arr.push(item);
            item.visible = false;
        }
        featuresPanel.push(arr);
    }

    function open(i) {
        conceal = hiddenPanel[i].slice(0);
        $.each(conceal, function(a, item) {
            item.visible = true;
        });

        

        featured = featuresPanel[i].slice(0);
        $.each(featured, function(a, item) {
            item.visible = false;
        });

        

        window.update = true;
    }

    function close(i) {
        $.each(conceal, function(a, item) {
            item.visible = false;
        });
        conceal = undefined;

        

        $.each(featured, function(a, item) {
            item.visible = true;
        });
        featured = undefined;
    }

    

    this.baseSetting = function(obj) {
        baseSetting(obj);
    };
    this.open = function(i) {
        open(i);
    };
    this.close = function(i) {
        close(i);
    };
}

function Solutions(param) {
    param = param || {};

    var table = [];
    var solutions, solutionsCount;
    var btn_prev, btn_next, btn_viewAll, btn_hideAll;
    var featured = param.featured == undefined ? true : param.featured;
    var all = param.all == undefined ? false : param.all;
    var click = param.click == undefined ? false : param.click;
    var key = param.key == undefined ? false : param.key;


    init();


    function init() {}

    function baseSetting(obj) {
        var a, str, arr, item;
        str = 'ra';
        arr = [];
        for (a = 1; a <= obj.object.getNumChildren(); a++) {
            item = obj.object[str + a.toString()];
            if (!item)
                continue;

            arr.push(item);
            hideSolution(item);
            item.visible = false;
        }

        if (obj.info) {
            if (obj.info.solutions === 'conceal') {
                $.each(arr, function(a, item) {
                    hideSolution(item);
                    item.visible = false;
                });
            } else if (obj.info.solutions === 'featured') {
                $.each(arr, function(a, item) {
                    revealSolution(item);
                    item.visible = true;
                });
            }
        }

        table.push(arr);
    }

    function open(i) {
        if (all && i === 0) {
            if (table[i].length === 0) {
                $.each(table, function(a, arr) {
                    if (a > i) {
                        if (window.steps[a].info.solutions != 'conceal')
                            table[i] = table[i].concat(arr.slice(0));
                    }
                });
            }
        }

        if (table[i].length === 0)
            return;

        solutions = table[i].slice(0);

        $(btn_prev).show();
        $(btn_next).show();
        $(btn_viewAll).show();
        $(btn_hideAll).show();

        if (steps[i].info) {
            if (steps[i].info.solutions === 'conceal') {

            } else if (steps[i].info.solutions === 'featured') {
                $.each(solutions, function(a, item) {
                    hideSolution(item);
                });
            }
        }

        $.each(solutions, function(a, item) {
            if (item.visible)
                revealSolution(item);
            else
                hideSolution(item);
            item.visible = true;

            if (click && (!all || i > 0)) {
                item.cursor = 'pointer';
                item.addEventListener('click', chooseSolution);
            }
        });

        solutionFunctions();

        

        if (key == true)
            window.onkeydown = solutionKeyboardFunctions;
    }

    function close(i) {
        if (!solutions)
            return;

        if (steps[i].info) {
            if (steps[i].info.solutions === 'conceal') {
                $.each(solutions, function(a, item) {
                    hideSolution(item);
                });
            } else if (steps[i].info.solutions === 'featured') {
                $.each(solutions, function(a, item) {
                    revealSolution(item);
                });
            }
        }

        $.each(solutions, function(a, item) {
            if (currentSolution(item))
                item.visible = true;
            else
                item.visible = false;

            if (click && (!all || i > 0)) {
                item.cursor = null;
                item.removeEventListener('click', chooseSolution);
            }
        });

        solutionFunctions();

        $(btn_prev).hide();
        $(btn_next).hide();
        $(btn_viewAll).hide();
        $(btn_hideAll).hide();

        solutions = undefined;

        

        if (key == true)
            window.onkeydown = null;
    }

    function solutionFunctions(e) {
        var a, item, i;

        if (e) {
            if ($(e.currentTarget).hasClass('disabled'))
                return;

            switch (e.currentTarget) {
                case btn_prev:
                    i = solutions.length - 1;
                    while (!currentSolution(solutions[i]))
                        i--;
                    hideSolution(solutions[i]);
                    break;
                case btn_next:
                    i = 0;
                    while (currentSolution(solutions[i]))
                        i++;
                    revealSolution(solutions[i]);
                    break;
                case btn_viewAll:
                    for (a = 0; a < solutions.length; a++) {
                        revealSolution(solutions[a]);
                    }
                    break;
                case btn_hideAll:
                    for (a = 0; a < solutions.length; a++) {
                        hideSolution(solutions[a]);
                    }
                    break;
            }
        } else {
            if (featured == false) {
                $.each(solutions, function(a, item) {
                    hideSolution(item);
                });
            }
        }

        

        i = 0;
        $.each(solutions, function(a, item) {
            if (currentSolution(item))
                i++;
        });

        

        $(btn_prev).removeClass('disabled');
        $(btn_next).removeClass('disabled');
        $(btn_viewAll).show();
        $(btn_hideAll).show();

        if (i === 0)
            $(btn_prev).addClass('disabled');
        if (i === solutions.length)
            $(btn_next).addClass('disabled');
        if (i === solutions.length)
            $(btn_viewAll).hide();
        else
            $(btn_hideAll).hide();

        

        window.update = true;
    }

    function solutionKeyboardFunctions(e) {
        var a, item, i, btn;

        var key = e.keyCode ? e.keyCode : e.which;

        if (key == 39 || key == 40) {
            btn = btn_next;
        } else if (key == 37 || key == 38) {
            btn = btn_prev;
        }

        if ($(btn).hasClass('disabled'))
            return;

        switch (btn) {
            case btn_prev:
                i = solutions.length - 1;
                while (!currentSolution(solutions[i]))
                    i--;
                hideSolution(solutions[i]);
                break;
            case btn_next:
                i = 0;
                while (currentSolution(solutions[i]))
                    i++;
                revealSolution(solutions[i]);
                break;
        }


        i = 0;
        $.each(solutions, function(a, item) {
            if (currentSolution(item))
                i++;
        });


        $(btn_prev).removeClass('disabled');
        $(btn_next).removeClass('disabled');
        $(btn_viewAll).show();
        $(btn_hideAll).show();

        if (i === 0)
            $(btn_prev).addClass('disabled');
        if (i === solutions.length)
            $(btn_next).addClass('disabled');
        if (i === solutions.length)
            $(btn_viewAll).hide();
        else
            $(btn_hideAll).hide();

        

        window.update = true;
    }

    function revealSolution(item) {
        solutionBackground(item);

        

        item.alpha = 1;
        item.getChildAt(0).visible = false;
        for (var a = 1; a < item.getNumChildren(); a++) {
            var elem = item.getChildAt(a);
            elem.visible = true;
        }
    }

    function hideSolution(item) {
        solutionBackground(item);

        

        item.alpha = 0.01;
        item.getChildAt(0).visible = true;
        for (var a = 1; a < item.getNumChildren(); a++) {
            var elem = item.getChildAt(a);
            elem.visible = false;
        }
    }

    function currentSolution(item) {
        return item.alpha === 1;
    }

    function chooseSolution(e) {
        if (window.touch === true)
            return;

        var item = e.currentTarget;
        revealSolution(item);
        solutionFunctions();
    }

    function solutionBackground(item) {
        
        if (item.getChildByName('click_background') != null)
            return;

        var gr = new createjs.Graphics();
        for (var a = 0; a < item.getNumChildren(); a++) {
            var elem = item.getChildAt(a);
            var w = 0,
                h = 0;

            if (typeof elem.virtualBounds != 'undefined') {
                elem.x -= elem.regX;
                elem.regX = 0;
                elem.y -= elem.regY;
                elem.regY = 0;

                w = elem.virtualBounds.width;
                h = elem.virtualBounds.height;
            } else if (typeof elem.getMeasuredWidth === 'function') {
                w = elem.getMeasuredWidth();
                h = elem.getMeasuredHeight();
            }
            gr.beginFill('rgba(255,255,255,1)');
            gr.drawRect(elem.x, elem.y, w, h);
            gr.endFill();
        }
        var background = new createjs.Shape(gr);
        item.addChildAt(background, 0);
        background.name = 'click_background';
    }

    

    this.baseSetting = function(obj) {
        baseSetting(obj);
    };
    this.open = function(i) {
        open(i);
    };
    this.close = function(i) {
        close(i);
    };
}

function Result(param) {
    param = param || {};

    

    var btn_print;

    var inUse = param.inUse == undefined ? false : param.inUse;
    var position = param.position == undefined ? 'topright' : param.position;
    var title = param.title == undefined ? 'Output' : param.title;
    var factor = param.factor == undefined ? 4 : param.factor;

    

    init();

    

    function init() {
        btn_print = document.createElement('a');
        $(btn_print).text(mathviewer.getTranslation('Print'));
        $(btn_print).addClass('button');
        $(btn_print).on('click', outputFunctions);
        new NoClickDelay(btn_print);
        $('#buttons').append(btn_print);

        $(btn_print).hide();
    }

    function baseSetting(obj) {

    }

    function open(i) {
        if (!inUse)
            return;

        $(btn_print).show();
    }

    function close(i) {
        if (!inUse)
            return;

        $(btn_print).hide();
    }

    function outputFunctions(e) {
        $('#container').css('visibility', 'hidden');

        

        var page_css;
        var m = {
            width: 0,
            height: 0
        };
        var delay = 1000;
        var currentBrowser = '';

        if (position === 'horizontal') {
            m = {
                width: 842 * factor,
                height: 595 * factor
            };
            page_css = 'output_A4_horizontal.css';
        } else {
            m = {
                width: 595 * factor,
                height: 842 * factor
            };
            page_css = 'output_A4_topright.css';
        }
        window.updateProperties(m);

        if (bowser) {
            if (bowser.msie && bowser.version <= 9)
                currentBrowser = 'ie9';
            else if (bowser.chrome)
                currentBrowser = 'chrome';
            else if (bowser.opera)
                currentBrowser = 'opera';
        }

        var featuredFrame = false;
        $.each(window.steps, function(a, obj) {
            if (obj.frame) {
                featuredFrame = obj.frame.visible;
                obj.frame.visible = false;
            }
        });

        

        setTimeout(function() {
            var popup = window.open('', 'pop_up', 'scrollbars=no,menubar=no,width=700,height=500,resizable=no,toolbar=no,location=no,status=no');
            var img = canvas.toDataURL();

            setTimeout(function() {
                popup.document.write("<html class='" + currentBrowser + "'><head><title>" + title + "</title><link rel='stylesheet' type='text/css' href='../../lib/page/Result/" + page_css + "'></head><body onload='print(); close();'><img class='kuva' src=" + img + "></body></html>");
                popup.document.close();
                popup.focus();
            }, delay);


            window.updateProperties();

            $.each(window.steps, function(a, obj) {
                if (obj.frame)
                    obj.frame.visible = featuredFrame;
            });


            $('#container').css('visibility', 'visible');
        }, 100);
    }


    this.baseSetting = function(obj) {
        baseSetting(obj);
    };
    this.open = function(i) {
        open(i);
    };
    this.close = function(i) {
        close(i);
    };
}

function Answers(param) {
    param = param || {};

    

    var btns = {
        view: 'Show answer|Show answers',
        hide: 'Hide the answer|Hide answers'
    };
    var btnsInUse = {};

    var table = [];
    var answers;
    var btn_answers;
    var featured = param.featured == undefined ? true : param.featured;

    init();

    function init() {
        btn_answers = document.createElement('a');
        $(btn_answers).text(mathviewer.getTranslation('Show the answers'));
        $(btn_answers).addClass('button');
        $(btn_answers).on('click', responseFunctions);
        new NoClickDelay(btn_answers);
        $('#buttons').append(btn_answers);
        $(btn_answers).hide();
    }

    function baseSetting(obj) {
        var a, str, arr, item;
        str = 'va';
        arr = [];
        for (a = 1; a <= obj.object.getNumChildren(); a++) {
            item = obj.object[str + a.toString()];
            if (!item)
                continue;

            arr.push(item);
            item.visible = false;
        }
        table.push(arr);
    }

    function open(i) {
        if (table[i].length === 0)
            return;

        answers = table[i].slice(0);

        if (answers[0].parent.answers === undefined) {
            btnsInUse.view = btns.view.split('|')[answers.length > 1 ? 1 : 0];
            btnsInUse.hide = btns.hide.split('|')[answers.length > 1 ? 1 : 0];
        } else {
            btnsInUse.view = answers[0].parent.answers.view;
            btnsInUse.hide = answers[0].parent.answers.hide;
        }

        $(btn_answers).show();

        responseFunctions();
    }

    function close(i) {
        if (!answers)
            return;

        $(btn_answers).hide();

        responseFunctions();

        answers = undefined;
    }

    function responseFunctions(e) {
        var view, str;

        if (e) {
            if ($(e.currentTarget).hasClass('buttonDisabled'))
                return;
            str = $(e.currentTarget).text();
            if (str === btnsInUse.view)
                view = true;
            else if (str === btnsInUse.hide)
                view = false;
        } else {
            if (featured == false) {
                view = false;
            } else {
                view = false;
                $.each(answers, function(a, item) {
                    if (item.visible == true) {
                        view = true;
                        return false;
                    }
                });
            }
        }

        if (view == true)
            $(btn_answers).text(mathviewer.getTranslation(btnsInUse.hide));
        else
            $(btn_answers).text(mathviewer.getTranslation(btnsInUse.view));

        $.each(answers, function(a, item) {
            item.visible = view;
        });

        window.update = true;
    }

    

    this.baseSetting = function(obj) {
        baseSetting(obj);
    };
    this.open = function(i) {
        open(i);
    };
    this.close = function(i) {
        close(i);
    };
}
