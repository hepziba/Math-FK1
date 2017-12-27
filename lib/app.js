var isIE;
//browser detection scripts
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
var isChrome = !!window.chrome && !isOpera; // Chrome 1+
var isEdge = navigator.userAgent.indexOf(' Edge/') >= 0 || navigator.userAgent.indexOf(' edge/') >= 0;
var isIExplorer = /*@@cc_on!@@*/ false || !!document.documentMode; // At least IE6
var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
var isiPad = (navigator.userAgent.match(/iPad/i) != null);
var pencilColor = new createjs.Container();
var pencilDrawcolor = "#000000";
var pencilVisible = false;
var pageLink = "";
clickHandler = 'click';
if (isIExplorer) {
    $("html").addClass("ie");
    $("html").addClass("ie" + document.documentMode);
    IEVersion = document.documentMode;
}
if (isEdge) {
    $("html").addClass("ie ieedge");
}
if (isSafari) {
    $("html").addClass("safari " + isiPhone());
    //$('img.startImage').attr('src', '../../Content/img/ovrig/start-safari.png');
    //$('.circle').css('opacity', 0);
}

function isiPhone() {
    if (navigator.platform.indexOf("iPhone") != -1)
        return 'iphone';
    if (navigator.platform.indexOf("iPod") != -1)
        return 'ipod';
    if (navigator.platform.indexOf("iPad") != -1)
        return 'ipad';
}

function tween_Colorsfalse() {
    if (drawingToolbar.children[4].name == "pencilColor") {
        drawingToolbar.children[4].visible = false;
    }
    createjs.Tween.get(pencilColor).to({
        alpha: 0
    }, 1500);
}

function tween_Colorstrue() {

    // eraser
    if (drawingToolbar.children[4].name == "pencilColor") {
        drawingToolbar.children[4].visible = true;
    }
    createjs.Tween.get(pencilColor).to({
        alpha: 1
    }, 1000);
}


$(document).ready(function () {
    isIE = /*@cc_on!@*/ false || !!document.documentMode;
    var isPdf = "";
    localStorage.setItem("isPdfpage", isPdf);

    $('.lyssna').click(function (evt) {
        var tempArr = window.location.href.split('?');
        pageLink = window.location.href;
        localStorage.setItem("isPagelink", pageLink);
        if (tempArr.length == 2) {
            window.open(tempArr[0], '_self', false)
            isPdf = 'true';
            localStorage.setItem("isPdfpage", isPdf);

        }

    });

    $('.index_navPdf').click(function (evt) {

        var tempArr = window.location.href.split('?');
        if (tempArr.length == 2) {
            window.open(tempArr[0], '_self', false)
            isPdf = 'false';
            localStorage.setItem("isPdfpage", isPdf);

        }

    });

    $('.Pdf_Backbtn').click(function (evt) {
        // var tempArr = window.location.href.split('?');
        if (localStorage.getItem("isPagelink") != "") {
            window.open(localStorage.getItem("isPagelink"), '_self', false)
            isPdf = 'false';
            localStorage.setItem("isPdfpage", isPdf);
            pageLink = "";
            localStorage.setItem("isPagelink", pageLink);

        }

    });

    $('.matteladan').click(function (evt) {
        if ($(".matteladan img").attr('src') == $(".matteladan img").attr('data-hover-on')) {
            $("#dropdown1").toggle();
            $(".matteladan img").attr('src', $(".matteladan img").attr('data-hover-off'));
        }
    });

    $('.vilar').click(function (evt) {
        if ($(".vilar img").attr('src') == $(".vilar img").attr('data-hover-on')) {
            $("#dropdownvilar").toggle();
            $(".vilar img").attr('src', $(".vilar img").attr('data-hover-off'));
        }
    });

    $('.viovar').click(function (evt) {
        if ($(".viovar img").attr('src') == $(".viovar img").attr('data-hover-on')) {
            $("#dropdownviovar").toggle();
            $(".viovar img").attr('src', $(".viovar img").attr('data-hover-off'));
        }
    });

    $('#toggle').on('click', function () {
        if ($('#toolbar').attr("class").indexOf("toolbarToggled") > -1) { //toggled
            $('#toolbar').removeClass("toolbarToggled")
            $('.page').removeClass("pageToggled")
            $('#toggle').removeClass("toggled");
        } else { // not toggled
            $('#toolbar').addClass("toolbarToggled")
            $('.page').addClass("pageToggled")
            $('#toggle').addClass("toggled");
        }
    });
    $("#dropdown2.dropdown-content li, #dropdown1.dropdown-content li").click(function () {
        $('#toggleEditor').hide();
        $('#toggler').hide();
        var chapName = $(this).attr("data-exercise");
        $('#modalMatteladan').attr("data-current-chapter", chapName);

        $($('#toggleEditor').parent()[0]).addClass('inPopup');
        // $('#drawingTool').addClass('inPopup');

        $("#modalMatteladan").find("iframe")[0].src = "preloader.html?iframe=true";

        $("#modalMatteladan").openModal({
            ready: function () {
                $("#modalMatteladan").openModal({
                    ready: function () {
                        var iframeSrc = "/mathviewer-FK/files/kymppi/tincan/" + chapName + ".html?iframe=true";
                        $("#modalMatteladan").find("iframe")[0].src = iframeSrc;
                        $('.slider').slider({
                            interval: 86400000,
                            full_width: true,
                            indicators: false // for exercise slider
                        });
                        $('#modalMatteladan .indicators').remove();
                        setTimeout(function () {
                            $('#toggleEditor').show();
                            $('#toggler').show();
                        }, 500);
                        clearEditTextContent(); // clear EditText contents
                    },
                    complete: function () {
                        for (var i = $('.lean-overlay').length - 1; i >= 0; i--) {
                            $($('.lean-overlay')[i]).remove();
                        };

                        $($('#toggleEditor').parent()[0]).removeClass('inPopup');
                        // $('#drawingTool').removeClass('inPopup');
                        $("#modalMatteladan").find("iframe")[0].src = "preloader.html?iframe=true";

                        var param = window.location.href.split('=')
                        if (param[1] == "files/toc/toc.html") {
                            $('#toggleEditor').hide();
                            $('#toggler').hide();
                        }
                        clearEditTextContent(); // clear EditText contents  
                    } // Callback for Modal close
                });
            }
        });
    });

    $("#dropdownvilar.dropdown-content li").click(function () {
        $('#toggleEditor').hide();
        $('#toggler').hide();
        var chapName = $(this).attr("data-exercise");
        $('#modalViLar').attr("data-current-chapter", chapName);
        $('#modalViLar').attr("tabCount", $(this).attr('data-tabCount'));
        $($('#toggleEditor').parent()[0]).addClass('inPopup');
        $("#modalViLar").find("iframe")[0].src = "preloader.html?iframe=true";
        $($("#modalViLar .tabs li")[1]).addClass('hidden')
        $($($("#modalViLar .tabs li")[0]).find('a')[0]).text('');
        $("#modalViLar .tabs").css("background-color", "#ffffff");
        $("#modalViLar").openModal({
            ready: function () {
                $("#modalViLar").openModal({
                    ready: function () {

                        if ($("#modalViLar").attr('tabCount') == "2") {
                            $("#modalViLar .tabs").css("background-color", "#DDDDE3");
                            $($("#modalViLar .tabs li")[1]).removeClass('hidden').addClass('shown')
                            $($($("#modalViLar .tabs li")[0]).find('a')[0]).text('Räknehändelser addition');
                            $($($("#modalViLar .tabs li")[1]).find('a')[0]).text('Räknehändelser subtraktion');
                        }
                        var iframeSrc = "/mathviewer-FK/files/kymppi/exercises/" + chapName + ".html?iframe=true";
                        $("#modalViLar").find("iframe")[0].src = iframeSrc;
                        $('.slider').slider({
                            interval: 86400000,
                            full_width: true,
                            indicators: false // for exercise slider
                        });
                        $('#modalViLar .indicators').remove();
                        setTimeout(function () {
                            $('#toggleEditor').show();
                            $('#toggler').show();
                        }, 500);

                        clearEditTextContent(); // clear EditText contents
                    },
                    complete: function () {
                        for (var i = $('.lean-overlay').length - 1; i >= 0; i--) {
                            $($('.lean-overlay')[i]).remove();
                        };
                        $($('#toggleEditor').parent()[0]).removeClass('inPopup');
                        $("#modalViLar").find("iframe")[0].src = "preloader.html?iframe=true";
                        var param = window.location.href.split('=')
                        if (param[1] == "files/toc/toc.html") {
                            $('#toggleEditor').hide();
                            $('#toggler').hide();
                        }
                        clearEditTextContent(); // clear EditText contents  
                    } // Callback for Modal close
                });
            }
        });
    });

    $("#dropdownviovar.dropdown-content li").click(function () {
        $('#toggleEditor').hide();
        $('#toggler').hide();
        var chapName = $(this).attr("data-exercise");
        $('#modalViOvar').attr("data-current-chapter", chapName);
        $($('#toggleEditor').parent()[0]).addClass('inPopup');
        $("#modalViOvar").find("iframe")[0].src = "preloader.html?iframe=true";

        $("#modalViOvar").openModal({
            ready: function () {
                $("#modalViOvar").openModal({
                    ready: function () {
                        var iframeSrc = "/mathviewer-FK/files/kymppi/viovar/" + chapName + ".html?iframe=true";
                        $("#modalViOvar").find("iframe")[0].src = iframeSrc;
                        $('.slider').slider({
                            interval: 86400000,
                            full_width: true,
                            indicators: false // for exercise slider
                        });
                        $('#modalViOvar .indicators').remove();
                        setTimeout(function () {
                            $('#toggleEditor').show();
                            $('#toggler').show();
                        }, 500);

                        clearEditTextContent(); // clear EditText contents
                    },
                    complete: function () {
                        for (var i = $('.lean-overlay').length - 1; i >= 0; i--) {
                            $($('.lean-overlay')[i]).remove();
                        };
                        $($('#toggleEditor').parent()[0]).removeClass('inPopup');
                        $("#modalViOvar").find("iframe")[0].src = "preloader.html?iframe=true";
                        var param = window.location.href.split('=')
                        if (param[1] == "files/toc/toc.html") {
                            $('#toggleEditor').hide();
                            $('#toggler').hide();
                        }
                        clearEditTextContent(); // clear EditText contents  
                    } // Callback for Modal close
                });
            }
        });
    });

    $(document).on("keydown", function (e) { // to avoid back history navigation on Backspace Key press in Edge Browser**            
        if (e.which === 8 && isEdge == true) {
            e.preventDefault();
        }
    });
});

function openLyssna() {
    $('#toggleEditor').hide();
    $("#modalLyssna").openModal({
        complete: function () {
            $('#toggleEditor').show();
        }
        // Callback for Modal close
    });
    clearEditTextContent();
}

function showPopup(e) {
    var fileURL = e.getAttribute("fileurl");
    $("#modalLarandemal").find("iframe")[0].src = "/mathviewer-FK/files/kymppi/" + fileURL + "?iframe=true";
    $("#modalLarandemal").openModal({
        ready: function () {
            $("#modalLarandemal").find("iframe")[0].src = "/mathviewer-FK/files/kymppi/" + fileURL + "?iframe=true";
        }, // Callback for Modal open
        complete: function () {
            $("#modalLarandemal").find("iframe")[0].src = "";
        } // Callback for Modal close
    });
}

$('#copyright').on('click', function () {
    $("#modalCopyright").openModal();
});


$("#jquery_jplayer_1").jPlayer({
    ready: function (event) {
        // $(this).jPlayer("setMedia", {
        //     mp3: "files/kymppi/Lyssna/audio/1.mp3",
        //     oga: "files/kymppi/Lyssna/audio/1.ogg"
        // });
    },
    swfPath: "lib",
    // supplied: "m4a, oga",
    supplied: "m4a, oga, mp3",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: false,
    remainingDuration: true,
    toggleDuration: true
});

function setMedia(chapter) {
    $("#jquery_jplayer_1").jPlayer("setMedia", {
        mp3: "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/Lyssna/audio/" + chapter + ".mp3",
        oga: "https://majemastoragelive.blob.core.windows.net/math-test/mathviewer-1B/files/kymppi/Lyssna/audio/" + chapter + ".ogg"
    });
}

function setIconVisibility(visibility, icon) {
    $('.vilar,.viovar,.matteladan').removeClass("disabled").removeClass('waves-effect').addClass('waves-effect');
    if (icon) {
        $(icon).addClass("disabled").removeClass('waves-effect');
    }
}


$('.tabContent').height($('.modal').height() - $('.tabs').height() - 20);
//$('.tabContent').width($('.tabContent').width());

function GetParameterValues(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] == param) {
            return urlparam[1];
        }
    }
}


$('.slider').on('click', function () {
    for (var i = 0; i < $('.slides li iframe').length; i++) {
        $('.slides li iframe')[i].src = $('.slides li iframe')[i].src;
    }
});
// var currentTabContext
$(document).on('click', '.tab', function (e) {
    var context = e;
    if (!isIE) {
        setTimeout(activateTabs(e), 400);
    } else {
        activateTabs(e);
    }


});

function activateTabs(tabContext) {
    var currentModal = $(tabContext.currentTarget).parents('.modal').attr('id');
    var currentModalDirectory = $(tabContext.currentTarget).parents('.modal').data('directory');
    var modal = window.parent.document.getElementById(currentModal);
    currentModal = '#' + currentModal;
    var currentChapter = null;
    var slideCnt = 0;
    var NoOfTabs = $(currentModal).attr('tabCount');

    if (modal.dataset !== undefined) { // standard approach
        currentChapter = modal.dataset.currentChapter;
        slideCnt = modal.dataset.slideCount;
        if (currentChapter) {
            currentChapter = parseInt(currentChapter);
        }
        var activeTab = $(currentModal + ' .tabs').find('.active');
        var exerciseId = activeTab.data('exercise-id');
        var activeTabId = activeTab.attr('href');
        var tabCnt = $(currentModal + ' .contentTabs').find('.tabContent').length;
        for (var tab = 1; tab <= tabCnt; tab++) {
            var tabID = "#tab" + tab;
            for (var i = 0; i < $(currentModal + ' ' + tabID).find('iframe').length; i++) {
                $(currentModal + ' ' + tabID).find('iframe')[i].src = "preloader.html?iframe=true";
            }
        }

        var page = GetParameterValues('page');
        var className = "";
        if (page != "") {
            page = page.split('/');;
            className = page[0];
        }
        for (var i = 0; i < $(currentModal + ' #tabs1').find('a').length; i++) {
            var tab = $(currentModal + ' #tabs1').find('a')[i];
            if (tab.className.indexOf("active") != -1) {
                $(tab).removeClass().addClass(className).addClass("active");
            } else {
                $(tab).removeClass().addClass(className);
            }

        }
        var tabSlideCnt = modal.dataset.tabSlideCount; // to set different slidecount for diff tabs
        if (tabSlideCnt != "undefined" && tabSlideCnt != undefined) {
            var slideCntrl = tabSlideCnt.split(';');
            // console.log(slideCntrl);
            if (slideCntrl.length > 1) {
                var arrTabId = slideCntrl[0].split(',');
                var arrSlideCnt = slideCntrl[1].split(',');
                for (var i = 0; i < arrTabId.length; i++) {
                    if (arrTabId[i] == activeTabId) {
                        slideCnt = arrSlideCnt[i];
                    }
                }
            }
        }
        modal.dataset.slideCount = slideCnt;

        $(currentModal + ' .indicators').remove();
        if (slideCnt > 0) {

            var activeSlider = $(currentModal + ' ' + activeTabId).find('.slider ul')[0];
            $(activeSlider).empty();
            for (var i = 0; i < slideCnt; i++) {
                var ifrm = document.createElement("IFRAME");
                var src = "/mathviewer-FK/files/kymppi/" + currentModalDirectory + "/c" + currentChapter + "-ex" + exerciseId + "-s" + (i + 1) + ".html?iframe=true";
                ifrm.setAttribute("class", "pageContent");
                ifrm.setAttribute("src", src);
                var li = document.createElement("li");
                $(li).append(ifrm);
                $(activeSlider).append(li);
            }
            $('.slider').slider({
                interval: 86400000,
                full_width: true // for exercise slider
            });
        } else {
            if (activeTabId == "#tab1" || activeTabId == "#tab2") {
                if (activeTabId == "#tab1") {
                    $("#modalViLar .tabs").css("background-color", "#DDDDE3");
                }
                var activeSlider = $(currentModal + ' ' + activeTabId).find('.slider ul')[0];
                $(activeSlider).empty();
                var ifrm = document.createElement("IFRAME");
                var src = "/mathviewer-FK/files/kymppi/" + currentModalDirectory + "/c" + currentChapter + "-ex" + exerciseId + ".html?iframe=true";
                if (currentModalDirectory == "tincan" || currentModalDirectory == "viovar" || currentModalDirectory == "exercises") { //to load tincan exercises 
                    currentChapter = $(currentModal).attr("data-current-chapter");
                    src = "/mathviewer-FK/files/kymppi/" + currentModalDirectory + "/" + currentChapter + ".html?iframe=true";
                }
                if (activeTabId == "#tab2") {
                    src = "/mathviewer-FK/files/kymppi/" + currentModalDirectory + "/raknehandelser_subtraktion.html?iframe=true";
                }

                ifrm.setAttribute("class", "pageContent");
                ifrm.setAttribute("src", src);
                var li = document.createElement("li");
                $(li).append(ifrm);
                $(activeSlider).append(li);
                $('.slider').slider({
                    interval: 86400000,
                    full_width: true,
                    indicators: false // for exercise slider
                });
            } else {
                $(currentModal + ' ' + activeTabId).find('iframe')[0].src = "/mathviewer-FK/files/kymppi/" + currentModalDirectory + "/c" + currentChapter + "-ex" + exerciseId + ".html?iframe=true";

            }
        }

        modal.dataset.currentFrame = 0;
    } else {
        currentChapter = modal.getAttribute('data-current-chapter'); // IE approach
        slideCnt = modal.getAttribute('data-slide-count');

        if (currentChapter) {
            currentChapter = parseInt(currentChapter);
        }
        var activeTab = $(currentModal + ' ' + '.tabs').find('.active');
        var exerciseId = activeTab.data('exercise-id');
        var activeTabId = activeTab.attr('href');
        $(currentModal + ' ' + '.indicators').remove();

        var tabSlideCnt = modal.getAttribute('data-tab-slide-count'); // to set different slidecount for diff tabs
        if (tabSlideCnt != "undefined" && tabSlideCnt != undefined) {
            var slideCntrl = tabSlideCnt.split(';');
            if (slideCntrl.length > 1) {
                var arrTabId = slideCntrl[0].split(',');
                var arrSlideCnt = slideCntrl[1].split(',');
                for (var i = 0; i < arrTabId.length; i++) {
                    if (arrTabId[i] == activeTabId) {
                        slideCnt = arrSlideCnt[i];
                    }
                }
            }
        }
        modal.setAttribute('data-slide-count', slideCnt);

        if (slideCnt > 0) {
            var activeSlider = $(currentModal + ' ' + activeTabId).find('.slider ul')[0];
            $(activeSlider).empty();
            for (var i = 0; i < slideCnt; i++) {
                var ifrm = document.createElement("IFRAME");
                var src = "/mathviewer-FK/files/kymppi/" + currentModalDirectory + "/c" + currentChapter + "-ex" + exerciseId + "-s" + (i + 1) + ".html?iframe=true";
                ifrm.setAttribute("class", "pageContent");
                ifrm.setAttribute("src", src);
                var li = document.createElement("li");
                $(li).append(ifrm);
                $(activeSlider).append(li);
            }
            $('.slider').slider({
                interval: 86400000,
                full_width: true // for exercise slider
            });
        } else {
            if (activeTabId == "#tab1") {
                var activeSlider = $(currentModal + ' ' + activeTabId).find('.slider ul')[0];
                $(activeSlider).empty();
                var ifrm = document.createElement("IFRAME");
                var src = "/mathviewer-FK/files/kymppi/" + currentModalDirectory + "/c" + currentChapter + "-ex" + exerciseId + ".html?iframe=true";
                if (currentModalDirectory == "tincan") { //to load tincan exercises 
                    currentChapter = $(currentModal).attr("data-current-chapter");
                    src = "/mathviewer-FK/files/kymppi/" + currentModalDirectory + "/" + currentChapter + ".html?iframe=true";
                }
                ifrm.setAttribute("class", "pageContent");
                ifrm.setAttribute("src", src);
                var li = document.createElement("li");
                $(li).append(ifrm);
                $(activeSlider).append(li);
                $('.slider').slider({
                    interval: 86400000,
                    full_width: true,
                    indicators: false // for exercise slider
                });
            } else {
                $(currentModal + ' ' + activeTabId).find('iframe')[0].src = "/mathviewer-FK/files/kymppi/" + currentModalDirectory + "/c" + currentChapter + "-ex" + exerciseId + ".html?iframe=true";
            }
        }
        modal.setAttribute('data-current-frame', 0);
    }
}

function addEnterKeyFocusForPopUp() {
    try {
        var popup, isPopup = false;
        if ($('#modalViLar').is(':visible')) {
            popup = '#modalViLar';
            isPopup = true;
        } else if ($('#modalViOvar').is(':visible')) {
            popup = '#modalViOvar';
            isPopup = true;
        }

        if (isPopup == true) {
            var visibleTabs = $($(popup + ' .tabs')[0]).find('.shown');
            var activeTabIndex = 0;
            for (var i = 0; i < visibleTabs.length; i++) {
                if ($(visibleTabs[i].children[0]).hasClass('active')) {
                    activeTabIndex = i;
                    break;
                }
            };

            var temp = $($(popup + " .slider .slides"))[activeTabIndex];
            var currIndex = 0;
            var inpHdn;
            if (activeTabIndex < 2) {
                for (var i = 0; i < temp.children.length; i++) {
                    if ($(temp.children[i]).attr('class').trim() == 'active') {
                        currIndex = i;
                        break;
                    }
                }
                inpHdn = $($($(temp).find('.pageContent')[currIndex]).contents()[0]).find('.hdnFocusInput')[0];
            } else {
                var id = activeTabIndex + 1;
                inpHdn = $($('#tab' + id + ' .pageContent').contents()[0]).find('.hdnFocusInput')[0];
            }
            $(inpHdn).focus();
        }
    } catch (err) { }
}
$(document).on('click', '#toggleEditor', function (e) {
    // if ($('#drawingTool').attr('class') == '' || $('#drawingTool').attr('class') == 'inPopup') { // to clear the drawing area inPopup
    // drawingStage.children[0].uncache();
    // drawingStage.children[0].cache(0, 0, drawingStage.canvas.width, drawingStage.canvas.height);
    if ($('#drawingTool').attr('class') == '') { // to clear the drawing area    
        erase = false;
        drawingStage.children[2].visible = false; //pencil
        drawingStage.children[3].visible = false; // eraser
        drawingStage.toolWidth = 4;
        showEditText();
        setETxtIconVisiblity(false);
        addEnterKeyFocusForPopUp();
    } else if ($('#drawingTool').attr('class') == 'invisible') {
        setETxtIconVisiblity(true);
    }
    isFirst = false;

    $('#toggler label').toggleClass('active')
    $('#drawingTool').toggleClass('invisible')
    // drawingToolbar.x=parseInt($('#toggler').css('left').replace('px',''))+170;
    // drawingToolbar.y=drawingStage.canvas.height-parseInt($('#toggler').css('bottom').replace('px',''))-30;
    // e.target.checked ? $('#drawingTool').removeClass('invisible') : $('#drawingTool').addClass('invisible');
});

function setETxtIconVisiblity(arg) {
    grpTrash.visible(arg);
    grpErase.visible(arg);
    grpTxt.visible(arg);
    grpPencil.visible(arg);
    layer.draw();
}

function Log(element, message, enableCount) {
    if (message) {
        if (enableCount) {
            var count = $(element).data("LogCount");
            if (!count)
                count = 0;
            $(element).html(count++ + " --> " + message + "<br />" + $(element).html()).data("LogCount", count);
        } else {
            $(element).html(message + "<br />" + $(element).html());
        }
    } else {
        LogConsole(element, "log");
    }
}
forwardStarted = false;


var drawingStage = new createjs.Stage("canvas");
var drawingToolbar = new createjs.Container();
drawingStage.enableMouseOver(20);

createjs.Touch.enable(drawingStage);
createjs.Ticker.setFPS(24);

var erase = false;
var drawingStageImages = {},
    lib = {}; // adding below images to BLOB makes drawing tool not workable for IE 9 & 10
var drawingStageManifest = [{
    src: "files/kymppi/exercises/images/pencil.png",
    id: "pencil"
}, {
    src: "files/kymppi/exercises/images/eraser.png",
    id: "eraser"
}, {
    src: "files/kymppi/exercises/images/clear.png",
    id: "clearScreen"
}, {
    src: "files/kymppi/exercises/images/lasso.png",
    id: "lasso"
}, {
    src: "files/kymppi/exercises/images/color.png",
    id: "color"
}, {
    src: "files/kymppi/exercises/images/text_T.png",
    id: "text_T"
}];
init();

function init() {
    drawingStageImages = drawingStageImages || {};
    lib = lib || {};
    var loader = new createjs.LoadQueue(true, null, true); // allow cross origin images
    loader.addEventListener("fileload", function (evt) {
        if (evt.item.type == "image") {
            drawingStageImages[evt.item.id] = evt.result;
        }
    });
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(drawingStageManifest);

}
var pencil, eraser;

function handleComplete() {
    drawingStage.canvas.width = drawingStage.canvas.clientWidth;
    drawingStage.canvas.height = drawingStage.canvas.clientHeight;
    createjs.Ticker.addEventListener("tick", drawingStage);

    // Add some text to draw on top of (also instructions)
    // var instructions = new createjs.Text("Click and Drag to Draw", "40px Arial", "#000000");
    // instructions.x = drawingStage.canvas.width / 2;
    // instructions.y = drawingStage.canvas.height / 2;
    // instructions.textAlign = "center";

    (lib.pencilIcon = function () {
        this.initialize(drawingStageImages.pencil);
    }).prototype = p = new createjs.Bitmap();
    p.virtualBounds = new createjs.Rectangle(0, 0, 121, 121);
    (lib.lassoIcon = function () {
        this.initialize(drawingStageImages.lasso);
    }).prototype = p = new createjs.Bitmap();
    p.virtualBounds = new createjs.Rectangle(0, 0, 121, 121);
    (lib.eraserIcon = function () {
        this.initialize(drawingStageImages.eraser);
    }).prototype = p = new createjs.Bitmap();
    p.virtualBounds = new createjs.Rectangle(0, 0, 121, 121);
    (lib.colorIcon = function () {
        this.initialize(drawingStageImages.color);
    }).prototype = p = new createjs.Bitmap();
    p.virtualBounds = new createjs.Rectangle(0, 0, 121, 121);
    (lib.clearScreenIcon = function () {
        this.initialize(drawingStageImages.clearScreen);
    }).prototype = p = new createjs.Bitmap();
    p.virtualBounds = new createjs.Rectangle(0, 0, 121, 121);
    (lib.editTextIcon = function () {
        this.initialize(drawingStageImages.text_T);
    }).prototype = p = new createjs.Bitmap();
    p.virtualBounds = new createjs.Rectangle(0, 0, 121, 121);
    var extraFeatures = [];
    pencil = new lib.pencilIcon();
    pencil.scaleX = 0.5;
    pencil.scaleY = 0.5;
    pencil.x = 50;
    pencil.y = -10;
    pencil.visible = false;
    pencil.mouseEnabled = false;

    eraser = new lib.eraserIcon();
    eraser.scaleX = 0.5;
    eraser.scaleY = 0.5;
    eraser.x = 50;
    eraser.y = 50;
    eraser.visible = false;
    eraser.mouseEnabled = false;

    var editText = new lib.editTextIcon();
    editText.scaleX = 0.21;
    editText.scaleY = 0.21;
    editText.x = 0;
    editText.y = 0;
    editText.visible = false;
    editText.mouseEnabled = false;

    var circle = new createjs.Shape();
    //circle.graphics.f('rgba(142, 184, 48, 1)').ss('#000000').drawCircle(0, 0, 50);
    circle.graphics.f('rgba(255, 255, 255, 1)').ss('rgba(142, 184, 48, 1)').s(1).drawCircle(0, 0, 50);

    //Pencil Color

    var colorBlue = new createjs.Shape();
    colorBlue.graphics.f('#0C94BA').ss('#0C94BA').s(0.5).drawCircle(0, 0, 45);
    colorBlue.setTransform(-419, -410);
    colorBlue.addEventListener('click', function () {
        pencilDrawcolor = "#0C94BA";
        tween_Colorsfalse();
        pencilVisible = false;
    });

    var colorYellow = new createjs.Shape();
    colorYellow.graphics.f('#FFD303').ss('#FFD303').s(0.5).drawCircle(0, 0, 45);
    colorYellow.setTransform(-419, -310);
    colorYellow.addEventListener('click', function () {
        pencilDrawcolor = "#FFD303";
        tween_Colorsfalse();
        pencilVisible = false;
    });

    var colorRose = new createjs.Shape();
    colorRose.graphics.f('#DA3A71').ss('#DA3A71').s(0.5).drawCircle(0, 0, 45);
    colorRose.setTransform(-419, -210);
    colorRose.addEventListener('click', function () {
        pencilDrawcolor = "#DA3A71";
        tween_Colorsfalse();
        pencilVisible = false;
    });

    var colorGreen = new createjs.Shape();
    colorGreen.graphics.f('#80C341').ss('#80C341').s(0.5).drawCircle(0, 0, 45);
    colorGreen.setTransform(-419, -110);
    colorGreen.addEventListener('click', function () {
        pencilDrawcolor = "#80C341";
        tween_Colorsfalse();
        pencilVisible = false;
    });


    pencilColor.addChild(colorBlue, colorYellow, colorRose, colorGreen);
    pencilColor.visible = false;
    pencilColor.name = "pencilColor";
    pencilColor.setTransform(0, 0);
    pencilColor.visible = true;
    //Pencil setup
    var pencilSelect = new createjs.Container();
    var pencilCircle = circle.clone(true);
    pencilTool = new lib.pencilIcon();
    pencilTool.shadow = new createjs.Shadow('rgba(162, 189, 48, 1)', 5, 5, 10);
    pencilTool.scaleX = 0.4;
    pencilTool.scaleY = 0.4;
    pencilTool.x = -25;
    pencilTool.y = -50;
    var pencilSizing = new createjs.Container();
    var oldradius = 0;
    for (var i = 1; i <= 8; i++) {
        var size = new createjs.Shape();
        size.value = 5 * i;
        oldradius = oldradius + 2 * i * 5;
        size.graphics.f('#000000').drawCircle(0, 0, 5 * i);
        size.x = -oldradius;
        size.y = 0;
        pencilSizing.addChild(size);
        size.addEventListener('click', function (e) {

            drawingStage.toolWidth = e.currentTarget.value;
            pencil.scaleX = pencil.scaleY = 1 * ((drawingStage.toolWidth + 100) / 100);
            pencilSizing.sizeSelected.graphics.clear().f().ss(2).s('#ff0000').drawCircle(e.currentTarget.x, e.currentTarget.y, e.currentTarget.value + 1);
        })
    };
    pencilSizing.sizeSelected = new createjs.Shape();
    pencilSizing.sizeSelected.graphics.f().ss('#ff0000');
    pencilSizing.addChild(pencilSizing.sizeSelected);

    pencilSizing.setTransform(-90, 0);
    pencilSizing.alpha = 0;
    pencilSizing.originalScaleX = pencilSizing.scaleX;
    pencilSizing.originalScaleY = pencilSizing.scaleY;
    var pencilExtras = new createjs.Shape();
    pencilExtras.graphics.f('rgba(162, 189, 48, 1)').drawPolyStar(-60, 0, 20, 3, 0.6, -60);
    pencilExtras.isHidden = true;

    pencilExtras.addEventListener('mousedown', function (e) {
        hideOrShowExtras(pencilExtras, pencilSizing);
    })
    pencilSelect.addChild(pencilCircle, pencilTool, pencilSizing); //, pencilExtras
    //pencilSelect.addChild(pencilCircle, pencilTool, pencilSizing, pencilExtras);

    pencilSelect.setTransform(0, 0);
    pencilSelect.hideTool = true;




    //Eraser setup   

    var eraserSelect = new createjs.Container();
    var eraserCircle = circle.clone(true);
    var eraserTool = new lib.eraserIcon();
    eraserTool.shadow = new createjs.Shadow('rgba(162, 189, 48, 1)', 5, 5, 10);
    eraserTool.scaleX = 0.5;
    eraserTool.scaleY = 0.5;
    eraserTool.x = -30;
    eraserTool.y = -40;
    var eraserSizing = new createjs.Container();
    var oldradius = 0;
    for (var i = 1; i <= 8; i++) {
        var size = new createjs.Shape();
        size.value = 5 * i;
        oldradius = oldradius + 2 * i * 5;
        size.graphics.f('#000000').drawCircle(0, 0, 5 * i);
        size.x = -oldradius;
        size.y = 0;
        eraserSizing.addChild(size);
        size.addEventListener('click', function (e) {
            drawingStage.toolWidth = e.currentTarget.value;
            eraser.scaleX = eraser.scaleY = 0.5 * ((drawingStage.toolWidth + 100) / 100);
            eraserSizing.sizeSelected.graphics.clear().f().ss(2).s('#ff0000').drawCircle(e.currentTarget.x, e.currentTarget.y, e.currentTarget.value + 1);
        })
    };

    eraserSizing.sizeSelected = new createjs.Shape();
    eraserSizing.sizeSelected.graphics.f().ss('#ff0000');
    eraserSizing.addChild(eraserSizing.sizeSelected);

    eraserSizing.setTransform(-90, 0)
    eraserSizing.alpha = 0;
    eraserSizing.originalScaleX = eraserSizing.scaleX;
    eraserSizing.originalScaleY = eraserSizing.scaleY;
    var eraserExtras = new createjs.Shape();
    eraserExtras.graphics.f('rgba(162, 189, 48, 1)').drawPolyStar(-60, 0, 20, 3, 0.6, -60);
    eraserExtras.isHidden = true;
    eraserExtras.addEventListener('mousedown', function (e) {
        hideOrShowExtras(eraserExtras, eraserSizing);

    })
    eraserSelect.addChild(eraserCircle, eraserTool, eraserSizing); //, eraserExtras);
    //eraserSelect.addChild(eraserCircle, eraserTool, eraserSizing, eraserExtras);
    eraserSelect.setTransform(0, 110);
    eraserSelect.hideTool = true;


    //color setup

    var colorSelect = new createjs.Container();
    var colorCircle = circle.clone(true);
    var colorTool = new lib.colorIcon();
    colorTool.shadow = new createjs.Shadow('rgba(162, 189, 48, 1)', 5, 5, 10);
    colorTool.scaleX = 0.5;
    colorTool.scaleY = 0.5;
    colorTool.x = -25;
    colorTool.y = -35;
    var colorSizing = new createjs.Container();
    var oldradius = 0;
    for (var i = 1; i <= 8; i++) {
        var size = new createjs.Shape();
        size.value = 5 * i;
        oldradius = oldradius + 2 * i * 5;
        size.graphics.f('#000000').drawCircle(0, 0, 5 * i);
        size.x = -oldradius;
        size.y = 0;
        colorSizing.addChild(size);
        size.addEventListener('click', function (e) {
            drawingStage.toolWidth = e.currentTarget.value;
            color.scaleX = color.scaleY = 0.5 * ((drawingStage.toolWidth + 100) / 100);
            colorSizing.sizeSelected.graphics.clear().f().ss(2).s('#ff0000').drawCircle(e.currentTarget.x, e.currentTarget.y, e.currentTarget.value + 1);
        })
    };

    colorSizing.sizeSelected = new createjs.Shape();
    colorSizing.sizeSelected.graphics.f().ss('#ff0000');
    colorSizing.addChild(colorSizing.sizeSelected);

    colorSizing.setTransform(-90, 0)
    colorSizing.alpha = 0;
    colorSizing.originalScaleX = colorSizing.scaleX;
    colorSizing.originalScaleY = colorSizing.scaleY;
    var colorExtras = new createjs.Shape();
    colorExtras.graphics.f('rgba(162, 189, 48, 1)').drawPolyStar(-60, 0, 20, 3, 0.6, -60);
    colorExtras.isHidden = true;
    colorExtras.addEventListener('mousedown', function (e) {
        hideOrShowExtras(colorExtras, colorSizing);

    })
    colorSelect.addChild(colorCircle, colorTool, colorSizing, colorExtras);
    colorSelect.setTransform(0, 220);
    colorSelect.hideTool = true;

    //Clear Screen Setup

    var clearScreenSelect = new createjs.Container();
    var clearScreenCircle = circle.clone(true);
    var clearScreenTool = new lib.clearScreenIcon();
    clearScreenTool.shadow = new createjs.Shadow('rgba(162, 189, 48, 1)', 5, 5, 10);
    clearScreenTool.scaleX = 0.5;
    clearScreenTool.scaleY = 0.5;
    clearScreenTool.x = -30;
    clearScreenTool.y = -30;
    clearScreenSelect.addChild(clearScreenCircle, clearScreenTool);
    clearScreenSelect.setTransform(0, 330);
    clearScreenSelect.hideTool = true;

    //EditText Setup    
    var editTextSelect = new createjs.Container();
    var editTextCircle = circle.clone(true);
    var editTextTool = new lib.editTextIcon();
    editTextTool.shadow = new createjs.Shadow('rgba(162, 189, 48, 1)', 5, 5, 10);
    editTextTool.scaleX = 0.5;
    editTextTool.scaleY = 0.5;
    editTextTool.x = -30;
    editTextTool.y = -30;
    editTextSelect.addChild(editTextCircle, editTextTool);
    editTextSelect.setTransform(0, 330);
    editTextSelect.hideTool = true;


    //Lasso setup

    var lassoSelect = new createjs.Container();
    var lassoCircle = new createjs.Shape();
    lassoCircle.graphics.f('rgba(142, 184, 48, 1)').ss('#000000').drawCircle(0, 0, 50);
    lassoTool = new lib.lassoIcon();
    lassoTool.shadow = new createjs.Shadow('rgba(162, 189, 48, 1)', 5, 5, 10);
    lassoTool.scaleX = 1.5;
    lassoTool.scaleY = 1.5;
    lassoTool.x = -25;
    lassoTool.y = -25;

    var lassoSizing = new createjs.Container();
    var oldradius = 0;
    for (var i = 1; i <= 8; i++) {
        var size = new createjs.Shape();
        size.value = 5 * i;
        oldradius = oldradius + 2 * i * 5;
        size.graphics.f('#000000').drawCircle(-oldradius, 0, 5 * i);
        lassoSizing.addChild(size);
        size.addEventListener('click', function (e) {
            drawingStage.toolWidth = e.currentTarget.value;
            lasso.scaleX = lasso.scaleY = 1 * ((drawingStage.toolWidth + 100) / 100);

        })
    };
    lassoSizing.setTransform(-90, 0);
    lassoSizing.alpha = 0;
    lassoSizing.originalScaleX = lassoSizing.scaleX;
    lassoSizing.originalScaleY = lassoSizing.scaleY;
    var lassoExtras = new createjs.Shape();
    lassoExtras.graphics.f('rgba(162, 189, 48, 1)').drawPolyStar(-60, 0, 20, 3, 0.6, -60);
    lassoExtras.isHidden = true;
    lassoExtras.cursor = "pointer";

    lassoExtras.addEventListener('mousedown', function (e) {
        hideOrShowExtras(lassoExtras, lassoSizing);
    })

    lassoSelect.hideTool = true;
    lassoSelect.addChild(lassoCircle, lassoTool, lassoSizing, lassoExtras);
    lassoSelect.setTransform(0, 450);
    var tools = [];
    tools.push(editTextSelect);
    tools.push(pencilSelect);
    tools.push(eraserSelect);
    tools.push(clearScreenSelect);
    tools.push(pencilColor);
    for (var i = 0; i < tools.length; i++) {
        // tools[i].setTransform(140 * i, 0);
        tools[i].setTransform(100 + 140 * i, -35);
        drawingToolbar.addChild(tools[i]);
    };
    //drawingToolbar.addChild(pencilSelect, eraserSelect, clearScreenSelect);
    // drawingToolbar.addChild(pencilSelect, eraserSelect, clearScreenSelect, lassoSelect, colorSelect);
    drawingToolbar.setTransform(drawingStage.canvas.width - 50, drawingStage.canvas.height - 120, 0.38, 0.38);
    drawingToolbar.x = parseInt($('#toggler').css('left').replace('px', '')) + 130;

    var isIE9 = (/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) == 9);
    var isIE10 = (/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) == 10);

    var yTrans = 0;

    if (isEdge) {
        yTrans = (screen.width == 2560 && screen.height == 1440) ? -5 : (screen.width == 1920 && screen.height == 1200) ? -10 : (screen.width == 1600 && screen.height == 1024) ? 0 : (screen.width == 1280 && screen.height == 1050) ? 0 : 0;
    } else if (isIExplorer) {
        if (isIE9) { // IE9         
            yTrans = (screen.width == 2560 && screen.height == 1440) ? -10 : (screen.width == 1920 && screen.height == 1200) ? -15 : (screen.width == 1600 && screen.height == 1024) ? 0 : (screen.width == 1280 && screen.height == 1050) ? 0 : 0;
        } else if (isIE10) { // IE10            
            yTrans = (screen.width == 2560 && screen.height == 1440) ? -8 : (screen.width == 1920 && screen.height == 1200) ? -15 : (screen.width == 1600 && screen.height == 1024) ? 0 : (screen.width == 1280 && screen.height == 1050) ? 0 : 0;
        } else { // IE11            
            yTrans = (screen.width == 2560 && screen.height == 1440) ? -5 : (screen.width == 1920 && screen.height == 1200) ? -10 : (screen.width == 1600 && screen.height == 1024) ? 0 : (screen.width == 1280 && screen.height == 1050) ? 0 : 0;
        }

    } else if (isFirefox) {
        yTrans = (screen.width == 2560 && screen.height == 1440) ? -16 : (screen.width == 1920 && screen.height == 1200) ? -26 : (screen.width == 1600 && screen.height == 1024) ? 0 : (screen.width == 1280 && screen.height == 1050) ? 0 : 0;
    } else if (isiPad) {
        if ((screen.width == 768 && screen.height == 1024) && (Math.abs(window.orientation) === 90)) { //landscape          
            yTrans = 0;
        } else if (screen.width == 768 && screen.height == 1024) { //portrait           
            yTrans = 0;
        }
    } else {
        yTrans = (screen.width == 2560 && screen.height == 1440) ? -10 : (screen.width == 1920 && screen.height == 1200) ? -20 : (screen.width == 1600 && screen.height == 1024) ? 0 : 0
    }

    drawingToolbar.y = drawingStage.canvas.height - parseInt($('#toggler').css('bottom').replace('px', '')) - 23 + yTrans;
    reTransEditText();
    drawingStage.toolWidth = 15;
    eraser.scaleX = eraser.scaleY = 0.5 * ((drawingStage.toolWidth + 100) / 100);
    drawingStage.toolWidth = 4;
    pencil.scaleX = pencil.scaleY = 1 * ((drawingStage.toolWidth + 100) / 100);

    // Set up the container. We use it to draw in, and also to get mouse events.
    var wrapper = new createjs.Container();
    wrapper.hitArea = new createjs.Shape(new createjs.Graphics().f("#000888").dr(0, 0, drawingStage.canvas.width, drawingStage.canvas.height));
    wrapper.cache(0, 0, drawingStage.canvas.width, drawingStage.canvas.height); // Cache it.
    drawingStage.addChild(wrapper);

    // Create the shape to draw into
    var drawing = new createjs.Shape();
    wrapper.addChild(drawing);
    drawingStage.addChild(drawingToolbar, pencil, eraser, editText);
    eraserSelect.addEventListener('mousedown', function (event) {

        erase = true;
        eraser.x = event.stageX + eraserDiffX;
        eraser.y = event.stageY + eraserDiffY * eraser.scaleY - 150;
        pencil.visible = false;
        eraser.visible = true;
        tween_Colorsfalse();
        pencilVisible = false;
        drawingStage.toolWidth = 30; // erasing area width
    });

    eraserSelect.addEventListener('mouseover', iconHover);
    eraserSelect.addEventListener('mouseout', iconOut);
    pencilDiffY = -90 * 2;
    pencilDiffX = 0;
    eraserDiffY = -45 * 2;
    eraserDiffX = -15;
    pencilSelect.addEventListener('mousedown', function (event) {

        erase = false;
        pencil.x = event.stageX + pencilDiffX;
        pencil.y = event.stageY + pencilDiffY * pencil.scaleY;
        pencil.visible = true;
        eraser.visible = false;
        if (pencilVisible == true) {
            pencilVisible = false;
            tween_Colorsfalse();
            pencilVisible = false;
        } else {
            tween_Colorstrue();
            pencilVisible = true;
        }
        pencilDrawcolor = "#000000";
        drawingStage.toolWidth = 4;
    });
    pencilSelect.addEventListener('mouseover', iconHover);
    pencilSelect.addEventListener('mouseout', iconOut);

    clearScreenSelect.addEventListener('mousedown', function (event) {
        //     wrapper.uncache();
        //     wrapper.cache(0, 0, drawingStage.canvas.width, drawingStage.canvas.height);
        // });
        tween_Colorsfalse();
        pencilVisible = false;
        eraser.visible = false;
        clearEditTextContent();
        var pencilView = 'pencil';
        hideEditText(pencilView);
        setETxtIconVisiblity(true);
    });
    clearScreenSelect.addEventListener('mouseover', iconHover);
    clearScreenSelect.addEventListener('mouseout', iconOut);

    editTextSelect.addEventListener('mousedown', function (event) {
        pencil.visible = false;
        eraser.visible = false;
        isFirst = true;
        showEditText();
        setETxtIconVisiblity(true);
    });
    editTextSelect.addEventListener('mouseover', iconHover);
    editTextSelect.addEventListener('mouseout', iconOut);
    var lastPoint = new createjs.Point();
    drawingStage.mouseChildren = true;

    extraFeatures.push({
        "extras": pencilExtras,
        "sizing": pencilSizing
    }, {
        "extras": eraserExtras,
        "sizing": eraserSizing
    }, {
        "extras": lassoExtras,
        "sizing": lassoSizing
    });
    pencilExtras.hideTool = true;
    eraserExtras.hideTool = true;
    lassoExtras.hideTool = true;

    pencilTool.hideTool = true;
    eraserTool.hideTool = true;
    lassoTool.hideTool = true;

    pencilCircle.hideTool = true;
    eraserCircle.hideTool = true;
    lassoCircle.hideTool = true;

    pencilSizing.hideTool = true;
    eraserSizing.hideTool = true;
    lassoSizing.hideTool = true;

    drawingStage.on("stagemousemove", function (event) {
        editText.visible = false;

        if ($('#drawingTool').attr('class') == 'invisible') {
            return;
        }

        var objects = drawingStage.getObjectsUnderPoint(event.stageX, event.stageY);
        hideTool = false;
        for (var i = 0; i < objects.length; i++) {
            if (objects[i].hideTool || (objects[i].parent && objects[i].parent.hideTool)) {
                hideTool = true;
            }
        }
        var tool = null;
        var modX, modY;
        if (isEditTextLayer == true) { // enable editText icon in mouse pointer 
            if (isHoverEditText == true) {
                return;
            }
            editText.visible = true;
            tool = editText;
            modX = pencilDiffX - 10;
            modY = pencilDiffY + 145;
        } else if (erase) {
            tool = eraser;
            modX = eraserDiffX;
            modY = eraserDiffY * eraser.scaleY;

        } else {
            tool = pencil;
            modX = pencilDiffX;
            modY = pencilDiffY * pencil.scaleY;
        }
        if (!hideTool) {
            tool.visible = true;
            tool.x = event.stageX + modX;
            tool.y = event.stageY + modY;
        } else {
            tool.visible = false;
        }
    });

    drawingStage.addEventListener("mousedown", function (event) {

        // var erase = document.getElementById("toggle").checked;
        if ($('#drawingTool').attr('class') == 'iconHover') {
            return;
        }
        var tool = null;
        var modX, modY;
        if (erase) {
            tool = eraser;
            modX = eraserDiffX;
            modY = eraserDiffY * eraser.scaleY;
            pencil.visible = false;
        } else {
            tool = pencil;
            modX = pencilDiffX;
            modY = pencilDiffY * pencil.scaleY;
            eraser.visible = false;
        }
        // Store the position. We have to do this because we clear the graphics later.
        lastPoint.x = event.stageX;
        lastPoint.y = event.stageY;
        tool.x = event.stageX + modX;
        tool.y = event.stageY + modY;
        // Listen for mousemove
        event.addEventListener("mousemove", function (event) {
            tool.x = event.stageX + modX;
            tool.y = event.stageY + modY;
            tool.cursor = "pointer";
            // Draw a round line from the last position to the current one.
            drawing.graphics.ss(drawingStage.toolWidth, "round").s(pencilDrawcolor);
            drawing.graphics.mt(lastPoint.x, lastPoint.y);
            drawing.graphics.lt(event.stageX, event.stageY);

            // Update the last position for next move.
            lastPoint.x = event.stageX;
            lastPoint.y = event.stageY;

            // Draw onto the canvas, and then update the container cache.

            wrapper.updateCache(erase ? "destination-out" : "source-over");
            drawing.graphics.clear();
        });
        // event.addEventListener("mouseup", function(event) {
        //     alert('up')
        // });
    });

    function hideOrShowExtras(extrasButton, hideOrShowThis) {
        if (extrasButton.isHidden) {
            for (var i = 0; i < extraFeatures.length; i++) {
                var timeout = 1500,
                    isHidden = true;
                if (extraFeatures[i].sizing === hideOrShowThis) {
                    timeout = 0;
                    isHidden = false;
                }
                createjs.Tween.get(extraFeatures[i].sizing).to({
                    scaleX: 0,
                    scaleY: 0,
                    alpha: 0
                }, timeout);
                extraFeatures[i].extras.isHidden = isHidden;
            };

            createjs.Tween.get(hideOrShowThis).to({
                scaleX: hideOrShowThis.originalScaleX,
                scaleY: hideOrShowThis.originalScaleY,
                alpha: 1
            }, 1500).call(function () {

            });
        } else {
            createjs.Tween.get(hideOrShowThis).to({
                scaleX: hideOrShowThis.originalScaleX,
                scaleY: hideOrShowThis.originalScaleY,
                alpha: 1
            }, 0).to({
                scaleX: 0,
                scaleY: 0,
                alpha: 0
            }, 1500).call(function () { });
        }
        extrasButton.isHidden = !extrasButton.isHidden;
    }
    // $('#drawingTool').hide();



}
addEditableText();

showEditText();

function showEditText() {
    $('.kineticjs-content').css({ "position": "absolute", "z-index": "4" });
    $($('#drawingTool canvas')[1]).css({ "z-index": "3" });
    isEditTextLayer = true;
    drawingToolbar.visible = false;
}

function hideEditText(name) {
    name = (name == undefined) ? '' : name;
    if (name == 'trash') {
        clearEditTextContent();
        showEditText();
        setETxtIconVisiblity(true);
        setTimeout(function () {
            setETxtIconVisiblity(true);
        }, 40);
    } else {
        $('.kineticjs-content').css({ "position": "absolute", "z-index": "3" });
        $($('#drawingTool canvas')[1]).css({ "z-index": "4" });
        isEditTextLayer = false;
        drawingToolbar.visible = true;
        if (name == 'pencil') {
            tween_Colorstrue();
            pencilVisible = true;
            erase = false;
            drawingStage.toolWidth = 4; // pencil area width
        } else if (name == 'eraser') {
            erase = true;
            drawingStage.toolWidth = 30; // erasing area width
        }
    }
}


function clearEditTextContent() {
    if (stage != undefined) {
        stage.destroy(); // destroy edit text object    
        addEditableText();
        layer.draw();
    }
    drawingStage.children[0].uncache(); // clear drawing Tool contents
    drawingStage.children[0].cache(0, 0, drawingStage.canvas.width, drawingStage.canvas.height);
}

function iconHover(evt) {
    $('#drawingTool').addClass('iconHover');
    document.body.style.cursor = 'pointer';
}

function iconOut(evt) {
    $('#drawingTool').removeClass('iconHover');
    document.body.style.cursor = 'text';
}

function reTransEditText() { // TO Place edit text icons to match drawing tool icon      
    try {
        if (grpTxt.children.length > 0) {
            grpTxt.children[0].attrs.x = drawingToolbar.x + drawingToolbar.children[0].x + drawingToolbar.children[0].children[0].x - 62; // 0 index circle
            grpTxt.children[0].attrs.y = drawingToolbar.y + drawingToolbar.children[0].y + drawingToolbar.children[0].children[0].y + 22;
            grpTxt.children[1].attrs.x = drawingToolbar.x + drawingToolbar.children[0].x + drawingToolbar.children[0].children[1].x + 18 - 62; // 1 index img
            grpTxt.children[1].attrs.y = drawingToolbar.y + drawingToolbar.children[0].y + drawingToolbar.children[0].children[1].y + 18 + 22;

            grpPencil.children[0].attrs.x = drawingToolbar.x + drawingToolbar.children[1].x + drawingToolbar.children[1].children[0].x - 149; // 0 index circle
            grpPencil.children[0].attrs.y = drawingToolbar.y + drawingToolbar.children[1].y + drawingToolbar.children[1].children[0].y + 22;
            grpPencil.children[1].attrs.x = drawingToolbar.x + drawingToolbar.children[1].x + drawingToolbar.children[1].children[1].x + 15 - 149; // 1 index img
            grpPencil.children[1].attrs.y = drawingToolbar.y + drawingToolbar.children[1].y + drawingToolbar.children[1].children[1].y + 33 + 22;

            grpErase.children[0].attrs.x = drawingToolbar.x + drawingToolbar.children[2].x + drawingToolbar.children[2].children[0].x - 235.5; // 0 index circle
            grpErase.children[0].attrs.y = drawingToolbar.y + drawingToolbar.children[2].y + drawingToolbar.children[2].children[0].y + 22;
            grpErase.children[1].attrs.x = drawingToolbar.x + drawingToolbar.children[2].x + drawingToolbar.children[2].children[1].x + 18 - 235.5; // 1 index img
            grpErase.children[1].attrs.y = drawingToolbar.y + drawingToolbar.children[2].y + drawingToolbar.children[2].children[1].y + 24 + 22;

            grpTrash.children[0].attrs.x = drawingToolbar.x + drawingToolbar.children[3].x + drawingToolbar.children[3].children[0].x - 322; // 0 index circle
            grpTrash.children[0].attrs.y = drawingToolbar.y + drawingToolbar.children[3].y + drawingToolbar.children[3].children[0].y + 22;
            grpTrash.children[1].attrs.x = drawingToolbar.x + drawingToolbar.children[3].x + drawingToolbar.children[3].children[1].x + 18 - 322; // 1 index img
            grpTrash.children[1].attrs.y = drawingToolbar.y + drawingToolbar.children[3].y + drawingToolbar.children[3].children[1].y + 18 + 22;
        }
    } catch (ex) { }
}

var stage, backBtnIcon, layer, txtBtnIcon, grpPencil, grpTrash, grpErase, grpTxt;
var isEditTextLayer = true,
    isHoverEditText = false;
var isFirst = true;

function addEditableText() {
    /* A KineticJS library which enables text creation and editing directly on the canvas*/
    var Kinetic = window.Kinetic;

    stage = new Kinetic.Stage({
        container: 'container-editText',
        width: $(window).width(),
        height: $(window).height()
    });
    layer = new Kinetic.Layer();

    grpTxt = new Kinetic.Group();
    var imgTxtBtn = new Image(); // pos- 1
    imgTxtBtn.src = "files/kymppi/exercises/images/text_T.png";
    imgTxtBtn.onload = function () {
        txtBtnIcon = new Kinetic.Image({
            shadowColor: '#a2bd30',
            shadowBlur: 2,
            shadowOffset: {
                x: 5,
                y: 5
            },
            shadowOpacity: 0.5,
            x: 0,
            y: 0,
            image: imgTxtBtn,
            width: 25,
            height: 25
        });
        var circle2 = new Kinetic.Circle({
            radius: 19,
            x: 0,
            y: 0,
            fill: '#ffffff',
            stroke: '#847f7f',
            strokeWidth: 1.5
        });
        grpTxt.add(circle2);
        grpTxt.add(txtBtnIcon);
        grpTxt.on("mouseover", iconHover);
        grpTxt.on("mouseout", iconOut);
        grpTxt.visible(false);
        layer.add(grpTxt);
        layer.draw();
    }

    grpPencil = new Kinetic.Group();
    var imgBackBtn = new Image(); // pos- 2
    imgBackBtn.src = "files/kymppi/exercises/images/pencil.png";
    imgBackBtn.onload = function () {

        backBtnIcon = new Kinetic.Image({
            shadowColor: '#a2bd30',
            shadowBlur: 2,
            shadowOffset: {
                x: 5,
                y: 5
            },
            shadowOpacity: 0.3,
            x: 0,
            y: 0,
            image: imgBackBtn,
            width: 25,
            height: 25
        });
        var circle1 = new Kinetic.Circle({
            radius: 19,
            x: 0,
            y: 0,
            fill: '#ffffff',
            stroke: '#847f7f',
            strokeWidth: 1.5
        });
        grpPencil.add(circle1);
        grpPencil.add(backBtnIcon);
        grpPencil.name = 'pencil';
        grpPencil.on("click tap", iconClick);
        grpPencil.on("mouseover", iconHover);
        grpPencil.on("mouseout", iconOut);
        grpPencil.visible(false);
        layer.add(grpPencil);
        layer.draw();
    }

    grpErase = new Kinetic.Group();
    var imgEraseBtn = new Image(); // pos- 3
    imgEraseBtn.src = "files/kymppi/exercises/images/eraser.png";
    imgEraseBtn.onload = function () {
        eraseBtnIcon = new Kinetic.Image({
            shadowColor: '#a2bd30',
            shadowBlur: 2,
            shadowOffset: {
                x: 5,
                y: 5
            },
            shadowOpacity: 0.5,
            x: 0,
            y: 0,
            image: imgEraseBtn,
            width: 25,
            height: 25
        });
        var circle3 = new Kinetic.Circle({
            radius: 19,
            x: 0,
            y: 0,
            fill: '#ffffff',
            stroke: '#847f7f',
            strokeWidth: 1.5
        });
        grpErase.add(circle3);
        grpErase.add(eraseBtnIcon);
        grpErase.name = 'eraser';
        grpErase.on("click tap", iconClick);
        grpErase.on("mouseover", iconHover);
        grpErase.on("mouseout", iconOut);
        grpErase.visible(false);
        layer.add(grpErase);
        layer.draw();
    }

    grpTrash = new Kinetic.Group();
    var imgTrashBtn = new Image(); // pos- 4
    imgTrashBtn.src = "files/kymppi/exercises/images/clear.png";
    imgTrashBtn.onload = function () {
        trashBtnIcon = new Kinetic.Image({
            shadowColor: '#a2bd30',
            shadowBlur: 2,
            shadowOffset: {
                x: 5,
                y: 5
            },
            shadowOpacity: 0.5,
            x: 0,
            y: 0,
            image: imgTrashBtn,
            width: 25,
            height: 25
        });
        var circle4 = new Kinetic.Circle({
            radius: 19,
            x: 0,
            y: 0,
            fill: '#ffffff',
            stroke: '#847f7f',
            strokeWidth: 1.5
        });
        grpTrash.add(circle4);
        grpTrash.add(trashBtnIcon);
        grpTrash.name = 'trash';
        grpTrash.on("click tap", iconClick);
        grpTrash.on("mouseover", iconHover);
        grpTrash.on("mouseout", iconOut);
        grpTrash.visible(false);
        layer.add(grpTrash);
        layer.draw();
        reTransEditText();
    }

    function removeEmptyItem() {
        try {
            if (layer.children.length > 2) {
                if (layer.children[layer.children.length - 1].nodeType == "Group" && layer.children[layer.children.length - 1].children[0].textArr[0].text == "") {
                    layer.children.pop();
                    // var esc = $.Event("keydown", { keyCode: 27 }); // to remove focus from dummy editTect created on click
                    // $("body").trigger(esc);
                } else if ((layer.children[layer.children.length - 3].className == "EditableText" || layer.children[layer.children.length - 3].className == "Text") && layer.children[layer.children.length - 3].textArr[0].text == "") {
                    layer.children.pop();
                    layer.children.pop();
                    layer.children.pop();
                    removeEmptyItem();
                }
            }
        } catch (err) { }
    }

    function iconClick(evt) {

        removeEmptyItem();

        isFirst = true;
        if (this.name == "pencil") {
            tween_Colorstrue();
            pencilVisible = true;
        } else {
            tween_Colorsfalse();
            pencilVisible = false;
        }
        hideEditText(this.name);

        layer.draw();
    }

    stage.add(layer);
    // EditableText parameters
    // **IMPORTANT** focusedText variable must be accessible to kinetic.editable.js
    // for Ctrl+Enter to work (unfocus). Ensure its a global variable.
    // TODO remove this requirement.    
    var focusedText,
        focusRectW = 100,
        focusRectH = 30,
        cancelTextMouseUp = false,
        canvas = stage.getContent().firstChild;

    // cursor style
    $(document).on('mouseover', 'canvas', function () {
        document.body.style.cursor = 'text';
    });

    $(document).on('mouseout', 'canvas', function () {
        document.body.style.cursor = 'default';
    });

    // when clicked outside canvas
    $(document).on('mousedown', function (e) {
        if (focusedText !== undefined) {
            focusedText.unfocus(e);
            focusedText = undefined;
        }
    });

    // when clicked inside canvas
    $(document).on('mousedown', 'canvas', function (e) {
        try {
            // if focusedText exists, two possibilities:
            // Either just clicked on an existing text, or
            // Clicked outside a focused text.
            if (focusedText !== undefined) {
                // check if you just clicked a text and dont re-create a new text (cancelTextMouseUp)
                // also do not unfocus.
                if (focusedText.checkClick()) {
                    focusedText.findCursorPosFromClick(true);
                    cancelTextMouseUp = true;
                } else {
                    cancelTextMouseUp = false;
                    focusedText.unfocus(e);
                }
            }

        } catch (e) {
            // console.log(e);
            return false;
        }
        return false;
    });

    // helper function for mouse click position.
    function getFullOffset() {
        var container = $("#container-editText");
        return {
            left: container.scrollLeft() - container.offset().left,
            top: container.scrollTop() - container.offset().top
        };
    }

    // Mouse up handler. Only inside canvas.
    $('.kineticjs-content canvas').on('mouseup', function (e) {
        // $(document).on('mouseup', 'canvas', function(e) {
        // return if you just clicked on existing text.
        if (cancelTextMouseUp || $('#container-editText').children().length == 0) {
            return;
        }
        if (isFirst == true) {
            isFirst = false;
            return;
        }
        if ($('#drawingTool').attr('class') == 'iconHover') {
            return;
        }
        // nullify focusedText and do nothing, when just unfocused.
        // If this doesn't exist, every click will create a new TextBox.
        if (focusedText !== undefined) {
            focusedText = undefined;
        } else {
            // Create new EditableText (defaults are in kinetic.editable.js)
            try {
                var grp = new Kinetic.Group();

                var newText = new Kinetic.EditableText({
                    // find click position.
                    x: e.pageX + getFullOffset().left + 5,
                    y: e.pageY + getFullOffset().top - 5,
                    fontFamily: 'Arial',
                    fontSize: 40,
                    fill: '#000000',
                    focusRectColor: "#808080"
                    // defaultText: "Click to insert text!" 
                });

                grp.add(newText);

                var focusRect = new Kinetic.Rect({
                    x: e.pageX + getFullOffset().left,
                    y: e.pageY + getFullOffset().top - 10,
                    width: 50,
                    height: 50,
                    stroke: "#808080",
                    strokeWidth: 1,
                    listening: false
                });
                focusRect.hide();
                grp.add(focusRect);

                var imgClose = new Image();
                imgClose.src = "files/kymppi/exercises/images/close.png";
                var closeIcon = new Kinetic.Image({
                    x: e.pageX + getFullOffset().left - 15,
                    y: e.pageY + getFullOffset().top - 25,
                    image: imgClose,
                    width: 30,
                    height: 30
                });
                closeIcon.hide();
                grp.add(closeIcon);

                layer.add(grp);

                stage.add(layer);
                newText.focus();
                focusedText = newText;
                layer.draw();
                // newText.on('change', function() {
                //     console.log("-changing->" + newText.getText() + "<-changing-");
                // });

                // click listener for created text.
                newText.on("click", function (evt) {
                    removeEmptyItem();
                    evt.cancelBubble = true;
                    this.focus();
                    focusedText = this;
                    return false;
                });
                newText.on("mouseover", function (evt) {
                    isHoverEditText = true;
                    evt.target.parent.children[2].setX(evt.target.parent.children[1].attrs.x + this.focusRectW - 30);
                    evt.target.parent.children[2].show();
                    evt.target.parent.children[1].attrs.width = this.focusRectW - 10;
                    evt.target.parent.children[1].attrs.height = this.totalLines * this.lineHeightPx + 5;
                    evt.target.parent.children[1].show();
                    layer.draw();
                });
                newText.on("mouseout", function (evt) {
                    isHoverEditText = false;
                    evt.target.parent.children[1].hide();
                    evt.target.parent.children[2].hide();
                    layer.draw();
                });

                closeIcon.on("mouseover", function (evt) {
                    isHoverEditText = true;
                    isFirst = true;
                    document.body.style.cursor = 'default';
                    evt.target.parent.children[1].show();
                    evt.target.parent.children[2].show();
                    layer.draw();
                });
                closeIcon.on("mouseout", function (evt) {
                    isHoverEditText = false;
                    isFirst = false;
                    document.body.style.cursor = 'text';
                    evt.target.parent.children[1].hide();
                    evt.target.parent.children[2].hide();
                    layer.draw();
                });
                closeIcon.on("click", function (evt) {
                    var rightclick;
                    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                    if (isFirefox == false) { // since this block of code is not working in FF
                        var e = window.event;
                        if (e.which) rightclick = (e.which == 3);
                        else if (e.button) rightclick = (e.button == 2);
                    } else {
                        rightclick = false;
                    }
                    if (rightclick == false) {
                        isFirst = true;
                        evt.target.parent.hide()
                        layer.draw();
                    }
                });
            } catch (e) {
                console.log(e);
            }
        }
    });
}
