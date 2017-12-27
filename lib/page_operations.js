var extraObj;

function pageloaded() {
    var iFrame = $('.page .pageContent')[0];
    if ($(iFrame).attr('src') != undefined && $(iFrame).attr('src') != '' && iFrame.contentWindow.loaded === true) {
        $(iFrame.contentWindow).focus();
        var iframeSrc = $(iFrame).attr('src');
        if (iframeSrc.indexOf("toc.html") == -1) {
            $('#toolbar').removeClass('disabled'); // enable Toolbar after page loaded completely  
              $('#toggler').show();  
        }
        $($('#preloader')[0]).css('display', 'none');
    } else {
        $('.page').hide();
    }
}

function downloadPage(pageName, page_url) {
    sectionCount = 0;
    pageCount = 0;
    for (var index = 0; index < pageInfo[0].pages.length; index++) {
        var strPos = pageInfo[0].pages[index].indexOf(pageName);
        if (strPos != -1) {
            sectionCount = index;
            pageCount = strPos;
            break;
        }
    }
    $($('#preloader')[0]).css({ 'display': 'inline', 'top': '50%', 'z-index': '10000' });
    page_url = page_url || '';
    if (pageInfo[0].pages[sectionCount][pageCount] != undefined && pageInfo[0].pages[sectionCount][pageCount] != 'undefined' && pageInfo[0].pages[sectionCount][pageCount] != '') {
        $('.page').html('<iframe class="pageContent" src="' + (pageInfo[0].pages[sectionCount][pageCount].indexOf('files') > -1 ? '' : pageInfo[0].folder + '/') + pageInfo[0].pages[sectionCount][pageCount].replace('/index.html', pageInfo[0].end + '/index.html') + page_url + '?iframe=true" />');
    } else {
        $('.page').hide();
        $('.page').html('<iframe class="pageContent" src="" />');
    }

    var domainName = window.location.href.split('?')[0];
    var splitIndex = domainName.lastIndexOf('/') + 1;
    domainName = domainName.substring(0, splitIndex);
    if (parseFloat(navigator.appVersion.split("MSIE")[1]) != 9) { // history.pushstate not supported in IE9
        window.history.pushState('', 'html', domainName + 'index.html?page=' + pageInfo[0].pages[sectionCount][pageCount]);
    }

    $('.page').show();
    var iFrame = $('.page .pageContent')[0];
    if (iFrame != undefined) {
        if (iFrame.contentWindow.loaded === true) {
            iFrame.contentWindow.activate(true);
        }
    } else { $('.page').hide(); }

    $(iFrame.contentWindow).focus();
    updateProperties();
}
