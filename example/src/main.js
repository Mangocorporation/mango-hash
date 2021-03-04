'use strict';

const mangoHash = require("@mangocorporation/mango-hash");

function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/,/g, "\n");
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

function output(inp) {
  showDecoded.innerHTML = inp;
}

const showDecoded = document.querySelector('.showDecoded');
const submitEncoded = document.querySelector('#submit-encoded');
submitEncoded.addEventListener('click', function (e) {
  e.preventDefault();
  let encoded = document.querySelector('#encoded').value;

  try {
    output(syntaxHighlight(mangoHash(encoded, true)))
  } catch (error) {
    output(syntaxHighlight(mangoHash(encoded)))
  }
});