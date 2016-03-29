// ==UserScript==
// @name        ScholarMarkSaved
// @namespace   scholar
// @include     https://scholar.google.lt/*
// @version     1
// @grant       none
// ==/UserScript==

function addGlobalStyle(css) {
  var head,
  style;
  head = document.getElementsByClassName('gs_fl') [0];
  if (!head) {
    return;
  }
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css;
  head.appendChild(style);
}

// the line below makes saved citations appear green (code #00FF00)
addGlobalStyle('a[id^="gs_svs"]{ background-color: #00FF00 ! important; }');

// a tip: you can use the "gs_svl" instead/with "gs_svs" for citations that you do not have
