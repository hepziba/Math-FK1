var sectionCount,
    pageCount;

function navigation_functions(evt) {
    var pageURL = ''
    var btn = evt.target;
    clearEditTextContent(); // clear EditText contents
    if (btn.style.opacity) {
        if (btn.style.opacity < 1)
            return;
    }
    $('#toolbar').addClass('disabled');

    if ($(btn).hasClass('btn_home')) {
        var sectionUrl = 'section=' + sectionCount;
        if (sectionCount > 0 || pageCount > 0) {
            sectionCount = 0;
            pageCount = 0;
        } else {
            return;
        }
        if (pageInfo[0].pages[sectionCount][pageCount].indexOf('?') === -1) {
            sectionUrl = '?' + sectionUrl;
        } else {
            sectionUrl = '&' + sectionUrl;
        }
        pageURL = sectionUrl;
    } else if ($(btn).hasClass('btn_navigate_prev') && $('.btn_navigate_prev').hasClass('disabled') != true) {
        if (pageCount > 1 && pageInfo[0].pages[sectionCount][pageCount] === pageInfo[0].pages[sectionCount][pageCount - 1]) {
            pageCount -= 2;
        } else if (pageCount > 0) {
            pageCount--;
        } else if (sectionCount > 0) {
            sectionCount--;
            pageCount = pageInfo[0].pages[sectionCount].length - 1;
        } else {
            return;
        }
    } else if ($(btn).hasClass('btn_navigate_next') && $('.btn_navigate_next').hasClass('disabled') != true) {
        if (pageCount < pageInfo[0].pages[sectionCount].length - 2 && pageInfo[0].pages[sectionCount][pageCount] === pageInfo[0].pages[sectionCount][pageCount + 1]) {
            pageCount += 2;
        } else if (pageCount < pageInfo[0].pages[sectionCount].length) {
            pageCount++;
        } else if (sectionCount < pageInfo[0].pages.length - 1) {
            sectionCount++;
            pageCount = 0;
        } else {
            return;
        }
    }
    downloadPage(pageInfo[0].pages[sectionCount][pageCount], pageURL);
}
