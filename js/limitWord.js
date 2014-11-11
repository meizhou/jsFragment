$.fn.limitWord = function(num) {
    $.each(this, function(index, val) {
        var text = $(val).text();
        if (text.length > num) {
            $(val).text(text.slice(0,num-1)+'...');
        };
    });
}