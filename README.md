# echo

Here you go — single-line bookmarklet (copy the whole line into the bookmark URL):

`javascript:(function(){var s=document.createElement('script');s.src='https://raw.githubusercontent.com/HMNCLS/echo/refs/heads/main/main.js';s.onload=function(){console.log('Script loaded and executed!')};document.body.appendChild(s);})();`
