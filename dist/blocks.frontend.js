!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}({7:function(e,t){jQuery(document).ready(function(e){e(".wp-block-resource-blocks-hero-carousel").each(function(){function t(){e(".exhibit-navigation .counter").find(".total").text(o)}function n(t){e(".exhibit-navigation .counter").find(".current").text(t+1)}var i=e(this),o=null;i.on("init",function(e,i){o=i.slideCount,t(),n(i.currentSlide)}),i.slick({fade:"fade"===i.data("effect"),autoplay:i.data("autoplay"),speed:i.data("speed"),adaptiveHeight:!0,appendArrows:!1,pauseOnFocus:!1,cssEase:"linear",lazyLoad:"anticipated",prevArrow:".exhibit-navigation .prev",nextArrow:".exhibit-navigation .next, .slick-slide img, .slick-slide div"}),i.on("beforeChange",function(e,t,i,o){n(o)})})})}});