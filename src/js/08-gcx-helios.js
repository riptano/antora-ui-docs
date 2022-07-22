;
(function() {
    'use strict';
    console.log("cargando JS 08-gcx-helios");
    window.intercomSettings = { app_id: "bpbxnnmr" };

    var w = window;
    var ic = w.Intercom;
    if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
    } else {
        var d = document;
        var i = function() {
            i.c(arguments);
        };
        i.q = [];
        i.c = function(args) {
            i.q.push(args);
        };
        w.Intercom = i;
        var l = function() {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.intercom.io/widget/bpbxnnmr';
            var x = d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        };
        if (w.attachEvent) {
            w.attachEvent('onload', l);
        } else {
            w.addEventListener('load', l, false);
        }
    }

    /*Dark theme verification*/
    var theme = window.localStorage.getItem('theme');    
    window.addEventListener('DOMContentLoaded', (event) => {
        var checkbox = document.getElementById( 'switch' );
        var root = document.getElementsByTagName( 'html' )[0];
        if(theme){
            root.classList.add('dark-mode');
            checkbox.checked = true;
        }else{
            checkbox.checked = false;
        }

        document.addEventListener('click', function (event) {
            if (!event.target.matches('li[data-depth="1"]') && !event.target.matches('.switch')) return;
            if(event.target.matches('li[data-depth="1"]')){ event.target.classList.toggle('is-active'); }
            if(event.target.matches('.switch')){
                var root = document.getElementsByTagName( 'html' )[0]
               if(event.target.checked){
                window.localStorage.setItem('theme', 'dark');
                root.classList.add('dark-mode');
               }else{
                window.localStorage.removeItem('theme');
                root.classList.remove('dark-mode');
               }
               
            }
        }, false);
    });
    
    
})()