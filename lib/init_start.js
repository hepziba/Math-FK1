function page_initialization() {
    var currPage = getQueryString('page');
    var buttons;
    var image = document.createElement('img');
    image.src = "https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/BG_matteMeny_Fk1.png";
    image.style.height = "100%";
    image.style.width = "100%";
    $('#toolbar').append(image);

    mathviewer.initMaterializeComponents();
    mathviewer.compatiblitySetup();

    var btnContainer = $('#toolbar .features')[0];

    buttons = mathviewer.addToolbarItem('', 'vilar ', 'tab1', 'modalViLar', false, true);
    $(buttons).append($('<img src="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/ViLar1.png" data-hover-on="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/ViLar2.png" data-hover-off="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/ViLar1.png"  alt="" class="hand dropdown-button" data-activates="dropdownvilar" width="276" height="220" border="0" >'));
    $(buttons).css({ 'overflow': 'visible', 'z-index': '2' });
    $(buttons).attr('onClick', "javascript:$('#dropdownvilar').toggle();");
    $(btnContainer).append(buttons);
    $(buttons).on('click', function hideDrawingTool() {
        $('#toggleEditor').hide();
        $('#toggler').hide();
    });

    buttons = mathviewer.addToolbarItem('', 'viovar ', 'tab1', 'modalViOvar', false, true);
    $(buttons).append($('<img src="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/ViOvar1.png" data-hover-on="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/ViOvar2.png" data-hover-off="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/ViOvar1.png"  alt="" class="hand dropdown-button" data-activates="dropdownviovar" width="276" height="150" border="0">'));
    $(buttons).css({ 'overflow': 'visible', 'z-index': '1' });
    $(buttons).attr('onClick', "javascript:$('#dropdownviovar').toggle();");
    $(btnContainer).append(buttons);

    buttons = mathviewer.addToolbarItem('', 'hand matteladan ', 'tab1', 'modalMatteladan', false, true);
    $(buttons).append($('<img src="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/matteladan.png" data-hover-on="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/matteladan2.png" data-hover-off="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/matteladan.png" alt="" class="hand dropdown-button" data-activates="dropdown1" width="276" height="150" border="0">'));
    $(buttons).css({ 'overflow': 'visible', 'z-index': '2' });
    $(buttons).attr('onClick', "javascript:$('#dropdown1').toggle();");
    $(btnContainer).append(buttons);

    //modified by subbu
    buttons = mathviewer.addToolbarItem('', 'waves-effect waves-light lyssna disabled', 'tab1', 'modalLyssna', false);
    $(buttons).append($('<img src="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/mathMenu_FK1.png"   alt="" class="hand" width="276" height="150" border="0">'));
    // $(buttons).attr('onClick', "javascript:$('#modalLyssna')");   
    $(btnContainer).append(buttons);
    //-------------------

    buttons = mathviewer.addToolbarItem('', '', '', '', navigation_functions, false);
    $(buttons).append($('<img src="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/pilLeft.png" class="btn_navigate_prev hand" alt="" name="pilLeft" width="276" height="150" border="0" id="pilLeft" style="width:50%;">'));
    $(buttons).append($('<img src="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/pilRight.png" class="btn_navigate_next hand"   alt="" name="pilRight" width="276" height="150" border="0" id="pilRight" style="width:50%;">'));
    $(btnContainer).append(buttons);

    buttons = mathviewer.addToolbarItem('', '', '', '', navigation_functions, false);
    $(buttons).append($('<img src="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/innehall.png" class="btn_home hand"  width="276" height="72" alt="">'));
    $(btnContainer).append(buttons);

    buttons = mathviewer.addToolbarItem('', '', '', '', navigation_functions, false);
    $(buttons).append($('<img src="https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/Fk1/LoggaUt.png" class="hand" width="276" height="77" alt="">'));
    $(buttons).attr('onClick', "javascript:window.top.close()");
    $(btnContainer).append(buttons);

    $('#toolbar').hide();
    updateProperties();
    $('.btn_navigate_prev').removeClass('disabled');
    $('.btn_navigate_next').removeClass('disabled');

    if (sectionCount == 0 && pageCount == 0) {
        $('.btn_navigate_prev').addClass('disabled');
    }
    if (sectionCount == pageInfo[0].pages.length - 1 && pageCount == pageInfo[0].pages[sectionCount].length - 1) {
        $('.btn_navigate_next').addClass('disabled');
    }
    if (currPage == 'false') {
        if (tmpIspdf == 'true') { pageInfo[0].pages[0][0] = 'files/toc/tocPdf.html' }
        downloadPage(pageInfo[0].pages[0][0]);
    } else {
        downloadPage(currPage);
    }
    mathviewer.postRenderFunctions();
}
var tmpIspdf = localStorage.getItem("isPdfpage");

$(document).ready(page_initialization);

function updateProperties() {
    var page = $('.page .pageContent');
    page.removeClass('toc');
    page.removeClass('indexIE');
    page.removeClass('indexIEpdf');
    var istableOfContents = false;   
    if (page.length > 0 && page[0].src.indexOf('toc') > -1) {
        istableOfContents = true;
        page.addClass('toc');
        if (/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 11 && (tmpIspdf == "false" || tmpIspdf == "")) {
            page.addClass('indexIE');
        }
        if (/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 11 && tmpIspdf == "true") {
            page.addClass('indexIEpdf');
        }

    }
    $('html').css({ 'overflow-y': '', '-webkit-overflow-scrolling': '', '-ms-touch-action': '', 'touch-action': '' });
    var win_W = window.innerWidth ? window.innerWidth : $(window).width();
    var win_H = window.innerHeight ? window.innerHeight : $(window).height();
    window.__last_properties = {
        w: win_W,
        h: win_H
    };
    var scrn = {
        width: win_W,
        height: win_H
    };
    var layoutX = 0;
    var layoutY = 0;
    var layoutW = scrn.width - layoutX;
    var layoutH = scrn.height - layoutY;
    var isiPad = (navigator.userAgent.match(/iPad/i) != null);
    if ((scrn.width <= 910 || scrn.height <= 540)) {
        layoutX = 0;
        layoutY = 0;
        layoutW = scrn.width - layoutX;
        layoutH = scrn.height - layoutY;
        if (isiPad) { // for ipad
            var orientation = Math.abs(window.orientation) == 90 ? 'landscape' : 'portrait';
            layoutX = (orientation == 'portrait') ? 120 : 138;
            layoutY = 20;
            layoutW = (orientation == 'portrait') ? 600 : 886;
            layoutH = (orientation == 'portrait') ? 570 : 664;
        }
        $('#toolbar').show();
    } else {
        layoutX = 0;
        if (!istableOfContents) {
            $('#toolbar').show();
            layoutX = $('#toolbar').width();
        } else {
            $('#toolbar').hide();
        }
        layoutY = 20;
        layoutW = scrn.width - layoutX;
        layoutH = scrn.height - layoutY * 2;
    }
    $('.overlay').hide();
    $('.overlay-ball').hide();
    $('.overlaypdf').hide();
    $('#index_nav').hide();
    $('#index_navPdf').hide();
    $('#Pdf_Backbtn').hide();

    $('.page').css({ 'width': layoutW + 'px', 'height': layoutH + 'px', 'left': layoutX + 'px', 'top': layoutY + 'px' });
    $('#toggleEditor').show();
    if (istableOfContents) {
        $('#toolbar').hide();
        if (tmpIspdf == "true") { $('#index_navPdf').show(); $('#Pdf_Backbtn').show(); } else { $('#index_nav').show(); }
        $('.page').css({ 'width': "100%", 'height': "100%", 'left': '0px', 'top': '0px' });
        $('#toggleEditor').hide();
        if (/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 11 && (tmpIspdf == "false" || tmpIspdf == "")) {
            $('.overlay-ball').show();
        } else if (tmpIspdf == "true") {
            $('.overlaypdf').show();
        } else {
            $('.overlay').show();
        }
    }
    if (page[0] != undefined && page[0].contentWindow.updateProperties != undefined) {
        page[0].contentWindow.updateProperties();
    }
}

window.addEventListener('orientationchange', updateProperties);
window.onresize = updateProperties;

function getQueryString(str) {
    var a, tempArr = window.location.href.split('?');
    if (tempArr.length == 1)
        return 'false';
    tempArr = tempArr[1].split('&');
    for (a = 0; a < tempArr.length; a++) {
        if (tempArr[a].indexOf(str + '=') > -1)
            return tempArr[a].split(str + '=')[1];
    }
    return 'false';
}
