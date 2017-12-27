var pageInfo = [
    { title: 'Mathviewer', folder: 'files/kymppi', preload: true, pages: [] }
];
var pages = [
    { a: 0, k: '', o: 'Front Page', s: '', t: 'files/toc/toc.html' },
    // { a: 0, n: '1', o: 'Talen 0 till 20', color: '#81B53C', childColor: '#EDF4DD', columnColor: '#EDF4DD' },
        // { a: 0, n: '', img: '/mathviewer-FK1/lib/images/page-1.png', color: '#2DAFC4',numColor: '#01A9CB', childColor: '#d5f3ff', columnColor: '#d5f3ff' },
        { a: 0, n: '', img: 'https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/page-1.png', img1: '', color: '#ffffff', numColor: '#01A9CB', childColor: '#ffffff', columnColor: '#ffffff' },


    { a: 1, n: '4', o: 'Antal 1–5', t: 'files/toc/toc.html' },
    { a: 1, n: '5', o: 'Begreppet lika många', t: 'files/toc/toc.html' },
    { a: 1, n: '6', o: 'Tal och antal 1 och 2', t: 'files/toc/toc.html' },
    { a: 1, n: '7', o: 'Parbildning', t: 'files/toc/toc.html' },
    { a: 1, n: '8', o: 'Mönster', t: 'files/toc/toc.html' },
    { a: 1, n: '9', o: 'Likheter och skillnader', t: 'files/toc/toc.html' },
    { a: 1, n: '10', o: 'Tal och antal 3', t: 'files/toc/toc.html' },
    { a: 1, n: '11', o: 'Siffra – antal, talraden', t: 'files/toc/toc.html' },
    { a: 1, n: '12', o: 'Jämföra längd', t: 'files/toc/toc.html' },
    { a: 1, n: '13', o: 'Jämföra längd', t: 'files/toc/toc.html' },
    { a: 1, n: '14', o: 'Tal och antal 4', t: 'section1/p14.html' },
    { a: 1, n: '15', o: 'Begreppet fler och färre', t: 'section1/p15.html' },
    { a: 1, n: '16', o: 'Begreppet hälften av helhet', t: 'files/toc/toc.html' },
    { a: 1, n: '17', o: 'Begreppet hälften av helhet', t: 'files/toc/toc.html' },
    { a: 1, n: '18', o: 'Tal och antal 5 .', t: 'files/toc/toc.html' },
    { a: 1, n: '19', o: 'Uppdelning av antal', t: 'files/toc/toc.html' },
    { a: 1, n: '20', o: 'Tolka enkla koder', t: 'section1/p20.html' },
    { a: 1, n: '21', o: 'Cirkus-spelet', t: 'files/toc/toc.html' },

    //  { a: 1, n: '1', o: 'Lärandemål', t: 'files/toc/toc.html', u: 'section1/larandemal.html' },

    // { a: 0, n: '2', o: 'Addition med <br>tiotalsövergång', color: '#E75E33', childColor: '#FEE5D4', columnColor: '#FEE5D4' },
     // { a: 0, n: '', img: '/mathviewer-FK1/lib/images/page-2.png', color: '#7AB642',numColor: '#81B53C', childColor: '#EDF4DD', columnColor: '#EDF4DD' },
       { a: 0, n: '', img: 'https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/page-2.png', img1: '', color: '#ffffff', numColor: '#01A9CB', childColor: '#ffffff', columnColor: '#ffffff' },

    { a: 1, n: '22', o: 'Antal 1–8', t: 'files/toc/toc.html' },
    { a: 1, n: '23', o: 'Siffra – antal, talraden', t: 'files/toc/toc.html' },
    { a: 1, n: '24', o: 'Tal och antal 6', t: 'files/toc/toc.html' },
    { a: 1, n: '25', o: 'Siffra – antal, mönster', t: 'files/toc/toc.html' },
    { a: 1, n: '26', o: 'Geometriska kroppar', t: 'files/toc/toc.html' },
    { a: 1, n: '27', o: 'Geometriska kroppar', t: 'files/toc/toc.html' },
    { a: 1, n: '28', o: 'Tal och antal 7', t: 'files/toc/toc.html' },
    { a: 1, n: '29', o: 'Siffra – antal', t: 'files/toc/toc.html' },
    { a: 1, n: '30', o: 'Jämföra vikt', t: 'files/toc/toc.html' },
    { a: 1, n: '31', o: 'Jämföra vikt', t: 'files/toc/toc.html' },
    { a: 1, n: '32', o: 'Tal och antal 8', t: 'files/toc/toc.html' },
    { a: 1, n: '33', o: 'Uppdelning av antal', t: 'files/toc/toc.html' },
    { a: 1, n: '34', o: 'Begreppet dela lika', t: 'files/toc/toc.html' },
    { a: 1, n: '35', o: 'Begreppet dela lika', t: 'files/toc/toc.html' },
    { a: 1, n: '36', o: 'Tolka enkla koder', t: 'files/toc/toc.html' },
    { a: 1, n: '37', o: 'Vinterspelet', t: 'files/toc/toc.html' },

    // { a: 1, n: '2', o: 'Lärandemål', t: 'files/toc/toc.html', u: 'section2/larandemal.html' },

    // { a: 0, n: '3', o: 'Subtraktion med<br>tiotalsövergång', color: '#918EC1', childColor: '#EBEBF6', columnColor: '#EBEBF6' },
     // { a: 0, n: '', img: '/mathviewer-FK1/lib/images/page-3.png', color: '#FECC06',numColor: '#FFD203', childColor: '#ffffec', columnColor: '#ffffec' },
      { a: 0, n: '', img: 'https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/page-3.png', img1: '', color: '#ffffff', numColor: '#01A9CB', childColor: '#ffffff', columnColor: '#ffffff' },

    { a: 1, n: '38', o: 'Antal 1–9', t: 'files/toc/toc.html' },
    { a: 1, n: '39', o: 'Siffra – antal', t: 'files/toc/toc.html' },
    { a: 1, n: '40', o: 'Tal och antal 9', t: 'files/toc/toc.html' },
    { a: 1, n: '41', o: 'Begreppet tillsammans', t: 'files/toc/toc.html' },
    { a: 1, n: '42', o: 'Geometriska figurer', t: 'files/toc/toc.html' },
    { a: 1, n: '43', o: 'Geometriska figurer', t: 'files/toc/toc.html' },
    { a: 1, n: '44', o: 'Tal och antal 0 och 10', t: 'files/toc/toc.html' },
    { a: 1, n: '45', o: 'Begreppet tillsammans', t: 'files/toc/toc.html' },
    { a: 1, n: '46', o: 'Ordningstal', t: 'files/toc/toc.html' },
    { a: 1, n: '47', o: 'Ordningstal', t: 'files/toc/toc.html' },
    { a: 1, n: '48', o: 'Jämföra volym', t: 'files/toc/toc.html' },
    { a: 1, n: '49', o: 'Jämföra volym', t: 'files/toc/toc.html' },
    { a: 1, n: '50', o: 'Symmetri', t: 'files/toc/toc.html' },
    { a: 1, n: '51', o: 'Symmetri', t: 'files/toc/toc.html' },
    { a: 1, n: '52', o: 'Tolka enkla koder', t: 'files/toc/toc.html' },
    { a: 1, n: '53', o: 'Bingo', t: 'files/toc/toc.html' },


    // { a: 1, n: '3', o: 'Lärandemål', t: 'files/toc/toc.html', u: 'section3/larandemal.html' },

    // { a: 0, n: '4', o: 'Geometri och mätning', color: '#D5476F', childColor: '#F9E0E3', columnColor: '#F9E0E3' },
     // { a: 0, n: '', img: '/mathviewer-FK1/lib/images/page-4.png', color: '#8E8DC1',numColor: '#918EC1', childColor: '#EBEBF6', columnColor: '#EBEBF6' },
     { a: 0, n: '', img: 'https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/page-4.png', img1: 'https://majemastoragetest.blob.core.windows.net/math-test/FK1/lib/images/img2.png', color: '#ffffff', numColor: '#01A9CB', childColor: '#ffffff', columnColor: '#ffffff' },


    { a: 1, n: '54', o: 'Antal 1–10', t: 'files/toc/toc.html' },
    { a: 1, n: '55', o: 'Talraden', t: 'files/toc/toc.html' },
    { a: 1, n: '56', o: 'Begreppet hälften av antal', t: 'files/toc/toc.html' },
    { a: 1, n: '57', o: 'Begreppet hälften så många', t: 'files/toc/toc.html' },
    { a: 1, n: '58', o: 'Jämföra tid', t: 'files/toc/toc.html' },
    { a: 1, n: '59', o: 'Klockan', t: 'files/toc/toc.html' },
    { a: 1, n: '60', o: 'Räknehändelser addition', t: 'files/toc/toc.html' },
    { a: 1, n: '61', o: 'Begreppet addition', t: 'files/toc/toc.html' },
    { a: 1, n: '62', o: 'Mäta längd', t: 'files/toc/toc.html' },
    { a: 1, n: '63', o: 'Uppskatta och mäta längd', t: 'section4/p63.html' },
    { a: 1, n: '64', o: 'Räknehändelser subtraktion', t: 'files/toc/toc.html' },
    { a: 1, n: '65', o: 'Begreppet subtraktion', t: 'files/toc/toc.html' },
    { a: 1, n: '66', o: 'Våra mynt', t: 'files/toc/toc.html' },
    { a: 1, n: '67', o: 'Problemlösning', t: 'files/toc/toc.html' },
    { a: 1, n: '68', o: 'Våra mynt', t: 'files/toc/toc.html' },
    { a: 1, n: '69', o: 'Problemlösning', t: 'section4/p69.html' },
    { a: 1, n: '70', o: 'Tolka enkla koder', t: 'files/toc/toc.html' },
    { a: 1, n: '71', o: 'Ormspelet', t: 'files/toc/toc.html' },

];

pageInfo[0].pages = Pages(pages);

function Pages(titletable) {
    var pages = [];
    loadPageArr(0, pages, 0);
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].length === 0) {
            pages.splice(i, 1);
            i--;
        }
    }

    function loadPageArr(level, links, index) {
        for (var i = index; i < titletable.length; i++) {
            var obj = titletable[i];
            if (level === 0) {
                pages.push([]);
                links = pages[pages.length - 1];
            }
            if (obj.a === level) {
                if (obj.t != '' && obj.t != undefined) {
                    links.push(obj.t);
                }
                if (i + 1 < titletable.length) {
                    if (titletable[i + 1].a > obj.a) {
                        i = loadPageArr(titletable[i + 1].a, links, i + 1);
                    }
                }
            } else {
                return i - 1;
            }
        }
        return titletable.length;
    }
    return pages;
}
