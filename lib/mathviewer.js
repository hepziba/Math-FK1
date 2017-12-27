function popupFunctions() {
    if (!$(this).hasClass("disabled")) {
        var modalid = '#' + $(this).data('modalid');
        // $('#' + $(this).data('modalid')).openModal();
        $(modalid).find('ul.tabs').tabs('select_tab', $(this).data('tabid'));
        var visibleTabContents = $(modalid + ' .tabContent').not('.hidden');
        var currentChapter = $(modalid).data('current-chapter');
        var exerciseNames = [];
        $.each($(modalid + ' .tabs li').not('.hidden'), function(i, e) {
            exerciseNames.push($(e).find('a').html())
        });
        var chapterFrameCount = $(modalid).data('chapter-frame-count');
        //setExerciseTabs: function(tabCount, chapter, exerciseNames, frameCount)
        // mathviewer.setExerciseTabs(visibleTabContents.length, currentChapter, exerciseNames, chapterFrameCount);
        // mathviewer.setImageAudios(visibleTabContents.length, currentChapter,page);
    }
}

$(document).on('click', '.submenu >  li', function(event) {
    $('#' + $(this).data('modalid')).openModal();
    $('#' + $(this).data('modalid')).find('ul.tabs').tabs('select_tab', $(this).data('tabid'));
});
NoClickDelay.prototype.offset = function() {
    var _x = _y = 0;
    var obj = document;

    if (obj.offsetParent) {
        do {
            _x += obj.offsetLeft;
            _y += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return {
        x: _x,
        y: _y
    };
}
$(document).on('keyup', '.leanModal', function(e) {
    if (e.keyCode === 27) { // ESC key
    }
});
$(document).on('click', '.leanModal', function(e) {
    if (e.keyCode === 27) { // ESC key
    }
});
var defaultLanguage = 'SV';
var mathviewer = {
    setExerciseSlideCount: function(Cnt, tabIndex, tabSlideCnt) {
        var modalViLar = window.parent.document.getElementById('modalViLar'); // contains attribute data-my-custom-value

        var tabSlideCntVal = (tabIndex != undefined) ? tabIndex + ";" + tabSlideCnt : "undefined"; // to set different slidecount for diff tabs

        if (modalViLar.dataset !== undefined) { // standard approach
            modalViLar.dataset.slideCount = Cnt;
            modalViLar.dataset.tabSlideCount = tabSlideCntVal;

        } else {
            modalViLar.setAttribute('data-tab-slide-count', tabSlideCntVal);
            modalViLar.setAttribute('data-slide-count', Cnt); // IE approach
        }
    },
    setIconVisibility: function(visibility, icon) {

        if (window.parent) {
            window.parent.setIconVisibility(visibility, icon);
        }
    },
    setImageAudios: function(chapter, imageId) {
        // ;
        //alert(imageId);
        var image = window.parent.document.getElementById("splashImg");
        //c3-img1.png
        // image.src = "files/kymppi/" + imageId;
        image.src = imageId;

        window.parent.setMedia(chapter);
    },
    initMaterializeComponents: function() {
        $('ul.tabs').tabs();
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: false, // Activate on hover
            gutter: 20, // Spacing from edge
            belowOrigin: false // Displays dropdown below the button
        });

    },
    getTranslation: function(val, language) {
        var languageTranslations = {
            'Previous': {
                'EN': 'Previous',
                'SV': 'Tidigare'
            },
            'Next': {
                'EN': 'Next',
                'SV': 'N\u00E4sta'
            },
            'Return': {
                'EN': 'Return',
                'SV': 'Tillbaka'
            },
            'PreviousExercise': {
                'EN': 'Previous Exercise',
                'SV': 'Föregående'
            },
            'NextExercise': {
                'EN': 'Next Exercise',
                'SV': 'N\u00E4sta'
            },
            'ResetExercise': {
                'EN': 'Reset Exercise',
                'SV': 'Från början'
            },
            'CheckAnswer': {
                'EN': 'Check Answer',
                'SV': 'Kontrollera'
            },
            'NewExercise': {
                'EN': 'New Exercise',
                'SV': 'Fortsätt'
            }
        };
        language = language || 'SV';
        if (languageTranslations[val]) {
            if (languageTranslations[val][language])
                return languageTranslations[val][language];
        }
        return val;
    },
    androidVersion: function() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('android') > -1;
    },
    iOSversion: function() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        }
    },
    compatiblitySetup: function() {
        if (window.parent == this) {
            $('html').addClass('orphan');
        }

        var iosVersion = this.iOSversion();
        var verAndroid = this.androidVersion();
        if (iosVersion != undefined && iosVersion[0] == 7) {
            $('html').addClass('ipad ios7');
        } else if (iosVersion == undefined) {
            $('html').addClass('no-touch');
        }
    },
    isTouchDevice: function() {
        var _b = false;
        if (typeof window.Modernizr === 'undefined')
            _b === ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch) || window.navigator.msMaxTouchPoints);
        else
            _b = window.navigator.msMaxTouchPoints || Modernizr.touch;
        return _b;
    },
    addToolbarItem: function(title, cssClass, tabid, modalid, clickEventListerner, isHoverRequired, isModal) {

        var a = document.createElement('a');
        $(a).attr('title', title);
        $(a).addClass('toolbarButton btn_home ' + cssClass);
        if (isModal) {
            $(a).attr('data-tabid', tabid);
            if (modalid == 'modalLyssna') {
                $(a).attr('onClick', 'openLyssna()');
            } else {
                if (modalid == 'modalViOvar') {
                    $(a).attr('onClick', "javascript:$('#toggleEditor').hide()");
                }
                $(a).attr('data-modalid', modalid);
                $(a).attr('data-target', modalid);
                $(a).leanModal({
                    dismissible: true, // Modal can be dismissed by clicking outside of the modal
                    opacity: .5, // Opacity of modal background
                    in_duration: 300, // Transition in duration
                    out_duration: 200, // Transition out duration
                    ready: function() {
                        $($('#toggleEditor').parent()[0]).addClass('inPopup');
                        // $('#drawingTool').addClass('inPopup');
                        if (modalid == 'modalViLar') {
                            setTimeout(function() {
                                $('#toggleEditor').show();
                                $('#toggler').show();
                            }, 500);
                        }
                        clearEditTextContent(); // clear EditText contents
                    }, // Callback for Modal open
                    complete: function() {
                            $($('#toggleEditor').parent()[0]).removeClass('inPopup')
                                // $('#drawingTool').removeClass('inPopup');
                            $('#toggleEditor').show();
                            var tabCnt = $('#' + modalid + ' .contentTabs').find('.tabContent').length;
                            for (var tab = 1; tab <= tabCnt; tab++) {
                                var tabID = "#tab" + tab;
                                for (var i = 0; i < $('#' + modalid + ' ' + tabID).find('iframe').length; i++) {
                                    $('#' + modalid + ' ' + tabID).find('iframe')[i].src = "preloader.html?iframe=true";
                                }
                            }
                            for (var i = 0; i < $('#tabs1').find('a').length; i++) {
                                var tab = $('#' + modalid + ' #tabs1').find('a')[i];
                                $(tab).removeClass();
                            }
                            clearEditTextContent(); // clear EditText contents
                        } // Callback for Modal close
                });
            }
        }
        if (clickEventListerner != false) {
            $(a).on('click', clickEventListerner);
        }
        if (isHoverRequired) {
            $(a).on({
                mouseenter: function() {
                    if (!$(this).hasClass("disabled")) {
                        var image = $(this).find('img');
                        image.attr('src', image.data('hoverOn'));
                    }
                },
                mouseleave: function() {
                    if (!$(this).hasClass("disabled")) {
                        var image = $(this).find('img');
                        image.attr('src', image.data('hoverOff'));
                    }
                }
            });
        }
        new NoClickDelay(a);
        return a;
    },
    postRenderFunctions: function() {
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 140, // Spacing from edge
            belowOrigin: false // Displays dropdown below the button
        });
    },
    setExerciseTabs: function(tabCount, chapter, exerciseNames, modalType) {
        if (!modalType) {
            modalType = 'modalViLar';

        }
        var modal = window.parent.document.getElementById(modalType); // contains attribute data-my-custom-value
        var currentChapter = null;

        if (modal.dataset !== undefined) { // standard approach
            currentChapter = modal.dataset.currentChapter;
            if (currentChapter) {
                currentChapter = parseInt(currentChapter);
            }
            modal.dataset.currentChapter = chapter;
            modal.dataset.slideCount = 0;
            modal.dataset.tabSlideCount = "undefined";
        } else {
            currentChapter = modal.getAttribute('data-current-chapter'); // IE approach
            if (currentChapter) {
                currentChapter = parseInt(currentChapter);
            }
            modal.setAttribute('data-current-chapter', chapter);
            modal.setAttribute('data-slide-count', 0);
            modal.setAttribute('data-tab-slide-count', "undefined");
        }
        var tabs = $(window.parent.document).find('#' + modalType + ' .tabs li');

        $(window.parent.document).find('.exercise.resetFrame').hide();
        $(window.parent.document).find('.exercise.prevFrame').addClass('disabled');
        var tabContents = $(window.parent.document).find('#' + modalType + ' .tabContent');
        tabs.removeClass('hidden').addClass('hidden');
        tabContents.removeClass('hidden').addClass('hidden');
        var numberOfTabs = tabCount,
            tabWidth = "width:" + (100 / tabCount) + "%";

        for (var i = 0; i < numberOfTabs; i++) {
            if (numberOfTabs == 1) { // do not set tab-name when only one tab
                $(tabs[i]).find('a').html("");
                $(tabs[i])[0].setAttribute('style', tabWidth);
            } else {
                $(tabs[i]).find('a').html(exerciseNames[i]);
                $(tabs[i])[0].setAttribute('style', tabWidth);
            }
            $(tabs[i]).removeClass('hidden').removeClass('shown').addClass('shown');
            $(tabContents[i]).removeClass('hidden');
        }

        var allTabs = $(window.parent.document).find('#' + modalType + ' .tabs');
        var shownTabs = allTabs.find('.shown');
        shownTabs.first().removeClass('noLeftBorder').removeClass('noRightBorder');
        shownTabs.last().removeClass('noLeftBorder').removeClass('noRightBorder');
        if (numberOfTabs == 1) {
            shownTabs.first().addClass('noLeftBorder noRightBorder');
        } else {
            shownTabs.first().addClass('noLeftBorder');
            shownTabs.last().addClass('noRightBorder');
        }
    },
    getPixelRatio: function(context) { // for high definition canvas
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }
}

function NoClickDelay(el) {
    this.element = typeof el == 'object' ? el : document.getElementById(el);
    if (window.Touch)
        this.element.addEventListener('touchstart', this, false);
}

function canvasFontAdjust(pageObj) {
    var moveTextY = {
        ie: { "'UusiTekstaus'": 0.05, "'Myriad Pro'": 0.08, "'Tavutus'": 0.12, "'Arial'": 0.13 },
        firefox: { "'UusiTekstaus'": 5.5 / 30, "'Myriad Pro'": 0.32, "'Tavutus'": 0.3, "'Arial'": 0.3 },
        chrome: { "'UusiTekstaus'": 0.03, "'Myriad Pro'": 0.08, "'Tavutus'": 0.13, "'Arial'": 0.17 },
        opera: { "'UusiTekstaus'": 0.03, "'Myriad Pro'": 0.08, "'Tavutus'": 0.13, "'Arial'": 0.17 },
        safari: { "'UusiTekstaus'": 0.03, "'Myriad Pro'": 0.1, "'Tavutus'": 0.33, "'Arial'": 0.1 }
    };

    moveTextY = (bowser) ? ((bowser.msie) ? moveTextY.ie : (bowser.firefox) ? moveTextY.firefox : (bowser.safari || mathviewer.iosVersion != undefined) ? moveTextY.safari : (bowser.chrome) ? moveTextY.chrome : (bowser.opera) ? moveTextY.opera : {}) : {};

    transformTextPos(pageObj);

    function transformTextPos(item) {
        var allSubTitles = [];
        $.each(item, function(key, child) {
            if (child == null || child == undefined) {

            } else if (child.getNumChildren && key != 'parent') {
                transformTextPos(child);
            } else if (child.font) {
                allSubTitles.push(textObject(child));
                moveText(allSubTitles[allSubTitles.length - 1]);
            }
        });
    }

    function textObject(item) {
        var arr, style, size, font, underLine, properties;
        arr = item.font.split('px ');
        arr = (arr[0].split(' ')).concat(arr[1]);
        if (arr.length == 2) {
            arr.splice(0, 0, '');
        }
        style = arr[0];
        size = parseFloat(arr[1].replace('px', ''));
        font = arr[2];
        underLine = false;
        if (item.text.indexOf('<u>') > -1) {
            underLine = true;
            item.text = item.text.replace('<u>', '');
        }
        properties = item.getTransformedBounds();
        return { item: item, x: item.x, y: item.y, width: properties.width, height: properties.height, scaleX: item.scaleX, scaleY: item.scaleX, text: item.text, style: style, size: size, font: font, underline: underLine };
    }

    function moveText(obj) {
        var size, font, properties, factorY, scalingX;
        size = obj.size;
        font = obj.font;
        factorY = 0;
        if (moveTextY[font]) {
            factorY = moveTextY[font];
        }
        if (!isNaN(size) && !isNaN(factorY)) {
            obj.y = obj.item.y += factorY * size;
        }
        obj.x = obj.item.x += 2;
        scalingX = 1;
        obj.scaleX *= scalingX;
        obj.item.scaleX *= obj.scaleX;
        properties = obj.item.getTransformedBounds();
        obj.width = properties.width;
        obj.height = properties.height;
    }
}

function loadAssetsForIE9() { // for IE9 browser load all assets from website itself instead of BLOB    
    // for (var i = 0; i < lib.properties.manifest.length; i++) {
    //     var imgObj = lib.properties.manifest[i].src;
    //     var domainName = location.protocol + '//' + location.host + '/';
    //     if (domainName.indexOf('majema.se') > -1) {
    //         imgObj = "https://majemastoragelive.blob.core.windows.net/math-test/FK1/files/kymppi/section1/" + imgObj;
    //     } else {
    //         imgObj = "https://majemastoragetest.blob.core.windows.net/math-test/FK1/files/kymppi/section1/" + imgObj;
    //     }
    //     lib.properties.manifest[i].src = imgObj;
    // }

    if (/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10) {
        for (var i = 0; i < lib.properties.manifest.length; i++) {
            var imgObj = lib.properties.manifest[i].src;
            var domainName = location.protocol + '//' + location.host + '/';
            imgObj = imgObj.replace("https://majemastoragetest.blob.core.windows.net/math-test/FK1/", domainName + 'mathviewer-FK1/');
            imgObj = imgObj.replace("https://majemastoragelive.blob.core.windows.net/math-test/Fk1/", domainName + 'mathviewer-FK1/');
            lib.properties.manifest[i].src = imgObj;
        }
    }
}
