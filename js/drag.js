+function(){
    $.fn.drag = function(){
        var x,y,able = true,
        $that = $(this);
        $(this).on('mousedown.drag',function(e){
            e.preventDefault();
            x = e.pageX - $(this).offset().left;
            y = e.pageY - $(this).offset().top;
            able=false;
        });
        $(document).on("mousemove.drag",function(e){
            e.preventDefault();
            if(!able){
                $that.offset({
                    "left":e.pageX - x,
                    "top":e.pageY - y
                });
            }
        });
        $(document).on("mouseup.drag",function(e){
            e.preventDefault();
            able = true;
        });
        return $(this);
    }
}(jQuery);