// ==UserScript==
// @name Irfan Auto Download
// @description Skip any link converter, just wait, see and download automaticaly..
// @author irfan kertianto
// @version 1
// @encoding utf-8

// @icon http://admin.skilmu.com/Documents/9df96786-655b-4c62-9303-e6c47c655372download.png

// @include http://*lauin.com/*
// @include https://*lauin.com/*
// @include http://*elsfile.org/*
// @include https://*elsfile.org/*
// @include http://*zippyshare.com/*
// @include https://*zippyshare.com/*
// @include http://*gigapurbalinggaa.ga/*
// @include http://*safelinkconverter.com/*
// @include https://*safelinkconverter.com/*
// @include http://*sh.st/*
// @include http://*google*
// @include https://*google*
// @include http://*solidfiles.com/*
// @include https://*solidfiles.com/*
// @include http://*ma-x.org/*
// @include https://*ma-x.org/*
// @include http://*gigapurbalinggaa.ga/*
// @include https://*gigapurbalinggaa.ga/*







// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_xmlhttpRequest
// @grant GM_registerMenuCommand
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_log
// @grant GM_openInTab
// @grant GM_setClipboard
// @grant GM_info
// @grant GM_getMetadata
// @run-at document-start
// @connect *
// @require http://code.jquery.com/jquery-latest.js

// ==/UserScript==


(function() {
    'use strict';


    // var currentUrl = window.location.href;

    $(document).ready(function() {

        function eventFire(el, etype){
            if (el.fireEvent) {
                el.fireEvent('on' + etype);
            } else {
                var evObj = document.createEvent('Events');
                evObj.initEvent(etype, true, false);
                el.dispatchEvent(evObj);
            }
        }

        console.log("JQUERY VERSION : " + $.fn.jquery );
        console.log($("#logocont").html());

        var currentURL = window.location.href.toLowerCase();
        console.log("current URL : " + currentURL);

        var targetURL = currentURL;
//         if(currentURL.split(".")[0].indexOf("ww") >= 0){
//             currentURL=currentURL.split(".")[1];
//         }else{
//             currentURL=currentURL.split(".")[0];

//         }

        currentURL = currentURL.split(".")[0] + currentURL.split(".")[1] +currentURL.split(".")[2];
        currentURL = currentURL.split("/")[2];


        console.log("current website : "+currentURL);

        //lauin.com
        if (currentURL.indexOf("lauin") >= 0){
            var targetLoc = "";
            try{
                targetLoc = $($("script")[6]).html().split("location=\"")[1].split("\";")[0];
            }
            catch(e){
                try{
                    targetLoc = $("footer").prev().html().split("\",e=")[0].split('="')[1];

                }
                catch(e){
                    targetLoc = $("footer").prev().html().split("file.html")[0].split('="')[1]+"file.html";
                }
            }
            console.log(targetLoc);
            window.location = targetLoc;
        }else if(currentURL.indexOf("elsfile") >= 0){
            var id = targetURL.split(".org/")[1];
            var strHtml = "<br><center id=\"frmdlcenter\">"+
                "<form method=\"POST\"><input type=\"hidden\" name=\"op\" value=\"download1\">"+
            "<input type=\"hidden\" name=\"usr_login\" value=\"C\"><input type=\"hidden\" name=\"id\" value=\""+id+"\">"+
                "<input type=\"hidden\" name=\"fname\" value=\""+$($("table").find("tr").find("td")[2]).html()+"\">"+
            "<input type=\"hidden\" name=\"referer\" value=\"q\"><input type=\"submit\" id=\"sikat\" name=\"method_free\" value=\"Free Download\" "+
                "style=\"background-color:#3f3f3f !important;color:#f1f1f1 !important;font-weight:bold !important;\"></form></center>";
            console.log(strHtml);
            $("#plans_free").html(strHtml);
            $("#sikat").click();
            $("#btn_download").click();
        }else if(currentURL.indexOf("zippyshare") >= 0){
            $(".download").click();
        }
        // else if(currentURL.indexOf("gigapurbalinggaa") >= 0){
        //     $("#d .green").click();
        //     window.top.close();
        // }
        else if(currentURL.indexOf("safelinkconverter") >= 0){
            $(".redirect_url div").click();
            window.top.close();
        }
        else if(currentURL.indexOf("sh.st/") >= 0){
            $("html").find("script").remove();
                        alert($("html").find("script").length);

            // $("#skip_button").click();
            eventFire(document.getElementById('skip_button'), 'click');
        }
        else if(currentURL.indexOf("solidfile") >= 0){
                    $("form button[type=submit]").click();

        }
        else if(currentURL.indexOf("ma-x") >= 0){
                        $("footer").next().remove();

           // console.log( $("html").find("kill-adblock"));

        }else if(currentURL.indexOf("gigapurbalinggaa") >= 0){
            console.log($("#d a").children().first().prop("onclick"));
            console.log($(".button .green").prop("onclick"));
            $("#d a").children().first().click();

        }


    });


})();