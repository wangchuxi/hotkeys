(this["webpackJsonphotkeys-js"]=this["webpackJsonphotkeys-js"]||[]).push([[229],{264:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var s=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"==typeof r&&!r(e))return e;for(var o,c=s.length;-1!==t.code.indexOf(o=n(a,c));)++c;return s[c]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function s(c){for(var i=0;i<c.length&&!(o>=r.length);i++){var u=c[i];if("string"==typeof u||u.content&&"string"==typeof u.content){var p=r[o],g=t.tokenStack[p],l="string"==typeof u?u:u.content,f=n(a,p),k=l.indexOf(f);if(-1<k){++o;var h=l.substring(0,k),y=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),m=l.substring(k+f.length),d=[];h&&d.push.apply(d,s([h])),d.push(y),m&&d.push.apply(d,s([m])),"string"==typeof u?c.splice.apply(c,[i,1].concat(d)):u.content=d}}else u.content&&s(u.content)}return c}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=229.b24e8806.chunk.js.map