function debounce(n,t,u){var e;return function(){var i=this,r=arguments,o=function(){e=null,u||n.apply(i,r)},a=u&&!e;clearTimeout(e),e=setTimeout(o,t),a&&n.apply(i,r)}}function preloadImages(){for(var n=0;n<arguments.length;n++)$("<img />").attr("src",arguments[n])}jQuery.fn.exists=function(){return this.length>0},function(n,t,u,e){"use strict";var i={init:function(){}};u(function(){i.init()})}(this,document,jQuery);