!function(){"use strict";var e,t,o,i,r,a;document.addEventListener("DOMContentLoaded",function(){window.shr&&window.shr.setup({count:{classname:"button__count"}});document.addEventListener("focusout",function(e){e.target.classList.remove("tab-focus")}),document.addEventListener("keydown",function(e){9===e.keyCode&&window.setTimeout(function(){document.activeElement.classList.add("tab-focus")},0)});var e=new Plyr("#player",{debug:!0,title:"View From A Blue Moon",keyboard:{global:!0},tooltips:{controls:!0},captions:{active:!0},keys:{google:"AIzaSyDrNwtN3nLH_8rjCmu5Wq3ZCm4MNAVdc0c"},ads:{enabled:!0}});window.player=e;var t=document.querySelectorAll("[data-source]"),o={video:"video",audio:"audio",youtube:"youtube",vimeo:"vimeo"},i=window.location.hash.replace("#",""),r=window.history&&window.history.pushState;function a(e,t,o){e&&e.classList[o?"add":"remove"](t)}function n(r,n){if(r in o&&(n||r!==i)&&(i.length||r!==o.video)){switch(r){case o.video:e.source={type:"video",title:"View From A Blue Moon",sources:[{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4",type:"video/mp4"}],poster:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",tracks:[{kind:"captions",label:"English",srclang:"en",src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",default:!0},{kind:"captions",label:"French",srclang:"fr",src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"}]};break;case o.audio:e.source={type:"audio",title:"Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;",sources:[{src:"https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",type:"audio/mp3"},{src:"https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg",type:"audio/ogg"}]};break;case o.youtube:e.source={type:"video",title:"View From A Blue Moon",sources:[{src:"https://youtube.com/watch?v=bTqVqk7FSmY",provider:"youtube"}]};break;case o.vimeo:e.source={type:"video",sources:[{src:"https://vimeo.com/76979871",provider:"vimeo"}]}}i=r,Array.from(t).forEach(function(e){return a(e.parentElement,"active",!1)}),a(document.querySelector('[data-source="'+r+'"]'),"active",!0),Array.from(document.querySelectorAll(".plyr__cite")).forEach(function(e){e.setAttribute("hidden","")}),document.querySelector(".plyr__cite--"+r).removeAttribute("hidden")}}if(Array.from(t).forEach(function(e){e.addEventListener("click",function(){var t=e.getAttribute("data-source");n(t),r&&window.history.pushState({type:t},"","#"+t)})}),window.addEventListener("popstate",function(e){e.state&&"type"in e.state&&n(e.state.type)}),r){var s=!i.length;s&&(i=o.video),i in o&&window.history.replaceState({type:i},"",s?"":"#"+i),i!==o.video&&n(i,!0)}}),"plyr.io"===window.location.host&&(e=window,t=document,o="script",i="ga",e.GoogleAnalyticsObject=i,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,r=t.createElement(o),a=t.getElementsByTagName(o)[0],r.async=1,r.src="//www.google-analytics.com/analytics.js",a.parentNode.insertBefore(r,a),window.ga("create","UA-40881672-11","auto"),window.ga("send","pageview"))}();

//# sourceMappingURL=demo.js.map
