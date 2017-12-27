var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// At least Safari 3+: "[object HTMLElementConstructor]"
var isEdge = navigator.userAgent.indexOf(' Edge/') >= 0 || navigator.userAgent.indexOf(' edge/') >= 0;
var loaded = false;
var isIExplorer = /*@@cc_on!@@*/ false || !!document.documentMode; // At least IE6
var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
clickHandler = 'click';

function TOC(titletable) {
    var productName = 'Innehåll';
    var titles = [];

    function LoadTitles(level, links, index) {
        for (var i = index; i < titletable.length; i++) {
            var obj = titletable[i];
            if (obj.a === level) {
                links.push(obj);
                if (i + 1 < titletable.length) {
                    if (titletable[i + 1].a > obj.a) {
                        obj.links = [];
                        i = LoadTitles(titletable[i + 1].a, obj.links, i + 1);
                    }
                }
            } else {
                return i - 1;
            }
        }
        return titletable.length;
    }

    function generateTOC() {


        var strTable = "<table class='tabCol'><tr class='menu'><td></td><td colspan=2 class='menu_02'>" + productName + "</td><td></td></tr><tr class='break'><td colspan=5></td></tr><tr><td class='column'  style='position:relative;border-bottom-left-radius: 25px;background-color:" + titles[0].columnColor + ";'>";
        $.each(titles, function(colIndex, colObj) {
            var colNum = (colObj.n === undefined || colObj.n === '') ? '&nbsp;' : colObj.n;
            var columnColor = colObj.columnColor || '';
            var numChildColor = colObj.numColor || '';
            // var numChildColor = colObj.color || '';
            var colHeadTxt = colObj.img;
            var colHeadImg = colObj.img1;
            var color = colObj.color || '';
            var childColor = colObj.childColor || '';

            if (colIndex > 0 && colIndex < 6) {
                if (colIndex == 5) {
                    strTable += "</td><td class='column' style='position:relative;border-bottom-right-radius: 25px;background-color:" + columnColor + ";'>";
                } else {
                    strTable += "</td><td class='column' style='position:relative;background-color:" + columnColor + ";'>";
                }
            }
            strTable += "<table class='column_table' style=''>";
            strTable += "<tr><td class='title title" + (colIndex + 1) + "' style='background-color:" + color + "'>";
            strTable += "<p class='number'>" + colNum + "</p>";
            strTable += "</td><td class='title title" + (colIndex + 1) + "' style='background-color:" + color + "'>";
            // strTable += "<p class='text'>" + colHeadTxt + "</p>";  
            strTable += "<p class='text'><img id='titleImg' class='titleImg" + (colIndex + 1) + "'src=" + colHeadTxt + "><img id='indexImg" + (colIndex + 1) + "' class='indexImg" + (colIndex + 1) + "' src=" + colHeadImg + "></p>";
           
            strTable += "</td></tr>";

            $.each(colObj.links, function(rowIndex, rowObj) {

                var rowNum = (rowObj.n === undefined || rowObj.n === '') ? '' : rowObj.n;
                var rowTitleTxt = rowObj.o;
                var file = rowObj.t;
                var dot = rowObj.dot;
                if (rowTitleTxt == 'Lärandemål') { // for Lärandemål                    
                    var fileURL = rowObj.u;
                    var className = "trLarandemal" + rowNum;
                    strTable += "<tr class='" + className + "' style='top:68.5%;'><td style='background-color:" + childColor + "'>";
                    strTable += "</td><td>";
                    if (rowTitleTxt !== undefined) {
                        strTable += "<p class='number'><a fileUrl='" + fileURL + "' file='" + file + "' onClick='javascript:window.parent.showPopup(this);'><span style='color:" + numChildColor + "'>" + rowTitleTxt + "</span></a></p>";
                    }
                    strTable += "</td></tr>";
                } else if (rowObj.t === '') {
                    strTable += "<tr><td style='background-color:" + childColor + "'>";
                    strTable += "<p class='number'><span style='color:" + numChildColor + "'>" + rowNum + "</span></p>";
                    strTable += "</td><td style='background-color:" + childColor + "'>";
                    if (rowTitleTxt !== undefined) {
                        strTable += "<p class='link'><span style='color:#ccc'>" + rowTitleTxt + "</span></p>";
                    }
                    strTable += "</td></tr>";
                } else {
                     var tocStyles = '';
                    if (file === 'files/toc/toc.html') {
                        tocStyles = 'pointer-events:none;color:#ccc;';
                    }

                    if (rowObj.o !== undefined && rowObj.o !== '') {
                        var arrIndent = [5, 7, 9, 11, 13, 15, 17, 19, 23, 25, 27, 29, 31, 33, 35, 39, 41, 43, 45, 47, 49, 51, 55, 57, 59, 61, 63, 65, 67, 69];                       
                        var style = '';
                        strTable += "<tr " + style + "><td style='background-color:" + childColor + "' >";
                        // strTable += "<p class='number' style='color:" + numChildColor + "'>" + rowNum + "</p>";
                        strTable += "</td><td style='background-color:" + childColor + " ; " + tocStyles + "'>";

                        //clickable link dots and text in index page 
                        strTable += " <a file=" + file + " style='" + tocStyles + "'><ul class='leaders'><li><span>" + rowTitleTxt + "</span>";
                        strTable += "<span class='number' style='color:" + numChildColor + "'>" + rowNum + "</span></li></ul></a>";
                        strTable += (arrIndent.indexOf(parseInt(rowNum)) != -1) ? "<p class='lineSpace'>" : '';
                        strTable += "</td></tr>";

                    } else {
                        strTable += "<tr><td style='background-color:" + childColor + "'>";
                        strTable += "</td><td style='background-color:" + childColor + "'>";
                        strTable += "</td></tr>";
                    }
                }
            });

            strTable += "</table>";
        });
        strTable += "</td></tr></table>";
        document.getElementById("links").innerHTML = strTable;
        $('#links a').on('click', function(evt) {
            var chapURL = $(evt.currentTarget).attr('file');
            if (chapURL != '') {
                window.parent.downloadPage(chapURL);
            }
        });
    }
    LoadTitles(0, titles, 0);
    titles.splice(0, 1);
    //titles.push({ n: '', o: 'Samtalsbild', color: '#8E59B2', childColor: '#EEE6F4', columnColor: '#EEE6F4', links: [{ n: '', o: 'Ordningstal', t: 'samtalsbild/p152.html' }] });
    generateTOC();
}
$(function() {
    TOC(pages);
    loaded = true;
    if (window.parent != this) {
        window.parent.pageloaded();
    }
});
if (isIExplorer) {
    $("html").addClass("ie");
    $("html").addClass("ie" + document.documentMode);
    IEVersion = document.documentMode;
}
if (isEdge) {
    $("html").addClass("ie ieedge");
}
if (isSafari) {
    var deviceName = (navigator.platform.indexOf("iPhone") != -1) ? 'iphone' : (navigator.platform.indexOf("iPod") != -1) ? 'ipod' : (navigator.platform.indexOf("iPad") != -1) ? 'ipad' : '';
    $("html").addClass("safari " + deviceName);
}
