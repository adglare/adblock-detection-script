/* Author: AdGlare Ad Server (https://www.adglare.com) */
function hasAdblock() {
    var a = document.createElement('div');
    a.innerHTML = '&nbsp;';
    a.className = 'adsbox pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads adglare-ad-server text-ad-links';
    a.style = 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;';
    var r = false;
    try {
        document.body.appendChild(a);
        var e = document.getElementsByClassName('adsbox')[0];
        if(e.offsetHeight === 0 || e.clientHeight === 0) r = true;
        if(window.getComputedStyle !== undefined) {
            var tmp = window.getComputedStyle(e, null);
            if(tmp && (tmp.getPropertyValue('display') == 'none' || tmp.getPropertyValue('visibility') == 'hidden')) r = true;
        }
        document.body.removeChild(a);
    } catch (e) {}
    return r;
}
