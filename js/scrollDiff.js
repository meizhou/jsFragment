 $(function(){
    $.fn.scrollDiff = function(fun) {
        var that = this;
        var dir = 0;
        $(document).on("scroll",function(){
            var exec,
                item = null,//当前元素
                documentScroll = $(this).scrollTop();
            that.each(function(index, val) {
                var itemScrollTop = $(this).offset().top;
                if ((itemScrollTop - documentScroll) < 0) {
                    if (dir < documentScroll) {
                        exec = $(this).data('scroll-down');
                    } else {
                        exec = $(this).data('scroll-up');
                    };
                    item = $(this);
                };
            });
            if (fun[exec]) {
                fun[exec](item);  //回调当前的元素
            };
            dir = documentScroll;
        });
    }
})