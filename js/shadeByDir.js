+function(){
    $.fn.shadeByDir=function(option){
        var $this=this;
        var option=$.extend({
            sleep:400,
        },option);
        var text=$this.find("div"),
            slideFromTop = {left:'0px',top:'-100%'},
            slideFromBottom = {left :'0px',top:'100%'},
            slideFromLeft = {left:'-100%',top :'0px'},
            slideFromRight = {left:'100%',top :'0px'},
            slideTop = { top : '0px' },
            slideLeft = { left : '0px' };
        $this.on('mouseenter.shadeByDir, mouseleave.shadeByDir',function(e){
            console.log(e.type);
            var w = $this.width(),
                h = $this.height(),
                x = ( e.pageX - $this.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
                y = ( e.pageY- $this.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
                direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
            switch(direction) {
            case 0:
                if(e.type==="mouseenter"){
                    text.stop();
                    text.hide().css(slideFromTop).show().animate(slideTop,option.sleep);
                }
                else{
                     text.stop();
                    text.animate(slideFromTop,option.sleep);
                }
            break;
            case 1:
                if(e.type==="mouseenter"){
                    text.stop();
                    text.hide().css(slideFromRight).show().animate(slideLeft,option.sleep);
                }
                else{
                    text.stop();
                    text.animate(slideFromRight,option.sleep);
                }
            break;
            case 2:
                if(e.type==="mouseenter"){
                    text.stop();
                    text.hide().css(slideFromBottom).show().animate(slideTop,option.sleep);
                }
                else{
                    text.stop();
                    text.animate(slideFromBottom,option.sleep);
                }
            break;
            case 3:
                if(e.type==="mouseenter"){
                    text.stop();
                    text.hide().css(slideFromLeft).show().animate(slideLeft,option.sleep);
                }
                else{
                    text.stop();
                    text.animate(slideFromLeft,option.sleep);
                }
            break;
    }});
}}(jQuery);