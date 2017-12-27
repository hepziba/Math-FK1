var pageLoader = {


    pageloaded: function (win) {
        var allloaded = true;

        $.each($('.page'), function (a, page) {
            try {
                var item = $(page).find('.pageContent')[0];
                if ($(item).attr('src') != undefined && $(item).attr('src') != 'undefined' && $(item).attr('src') != '') {
                    var item = $(page).find('.pageContent')[0];
                    if (item.contentWindow.loaded === true) {
                        if (a === page_to_activate || pageInfo[0].preload !== true) {
                            try {
                                $($('.page').eq(a).find('.pageContent')[0].contentWindow).focus();
                            } catch (e) { }

                            setTimeout(function () {
                                $(page).show();
                                if (typeof item.contentWindow.activate)
                                    item.contentWindow.activate(true);
                            }, 50);
                        } else {
                            setTimeout(function () {
                                $(page).hide();
                                if (item.contentWindow.activate)
                                    item.contentWindow.activate(false);
                            }, 50);
                        }
                    } else
                        allloaded = false;
                } else
                    $(page).hide();
            } catch (e) { }
        });

        if (allloaded)
            preloaderOff();
    },

    iframeloaded: function (win) {
        if (extraObj) {
            if (win === extraObj.win()) {
                extraloaded();
                return;
            }
        }
        pageloaded(win);
    }
}