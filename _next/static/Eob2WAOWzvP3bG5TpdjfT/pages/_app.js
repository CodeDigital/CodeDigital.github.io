(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1K8K":function(e,t,n){},"45FF":function(e,t){!function(){if("undefined"!==typeof self&&self.Prism&&self.document){var e=[],t={},n=function(){};Prism.plugins.toolbar={};var r=Prism.plugins.toolbar.registerButton=function(n,r){var a;a="function"===typeof r?r:function(e){var t;return"function"===typeof r.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",(function(){r.onClick.call(this,e)}))):"string"===typeof r.url?(t=document.createElement("a")).href=r.url:t=document.createElement("span"),r.className&&t.classList.add(r.className),t.textContent=r.text,t},n in t?console.warn('There is a button with the key "'+n+'" registered already.'):e.push(t[n]=a)},a=Prism.plugins.toolbar.hook=function(r){var a=r.element.parentNode;if(a&&/pre/i.test(a.nodeName)&&!a.parentNode.classList.contains("code-toolbar")){var i=document.createElement("div");i.classList.add("code-toolbar"),a.parentNode.insertBefore(i,a),i.appendChild(a);var o=document.createElement("div");o.classList.add("toolbar");var s=e,l=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(r.element);l&&(s=l.map((function(e){return t[e]||n}))),s.forEach((function(e){var t=e(r);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),o.appendChild(n)}})),i.appendChild(o)}};r("label",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,r,a=t.getAttribute("data-label");try{r=document.querySelector("template#"+a)}catch(i){}return r?n=r.content:(t.hasAttribute("data-url")?(n=document.createElement("a")).href=t.getAttribute("data-url"):n=document.createElement("span"),n.textContent=a),n}})),Prism.hooks.add("complete",a)}}()},"9SXm":function(e,t){!function(){if("undefined"!==typeof self&&self.Prism&&self.document)if(Prism.plugins.toolbar){var e={html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"Augmented Backus\u2013Naur form",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",arff:"ARFF",asciidoc:"AsciiDoc",adoc:"AsciiDoc",asm6502:"6502 Assembly",aspnet:"ASP.NET (C#)",autohotkey:"AutoHotkey",autoit:"AutoIt",shell:"Bash",basic:"BASIC",bbcode:"BBcode",shortcode:"BBcode",bnf:"Backus\u2013Naur form",rbnf:"Routing Backus\u2013Naur form",conc:"Concurnas",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cil:"CIL",coffee:"CoffeeScript",cmake:"CMake",csp:"Content-Security-Policy","css-extras":"CSS Extras",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",ebnf:"Extended Backus\u2013Naur form",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",glsl:"GLSL",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",graphql:"GraphQL",hs:"Haskell",hcl:"HCL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras","js-templates":"JS Templates",json:"JSON",jsonp:"JSONP",json5:"JSON5",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",lolcode:"LOLCODE",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",mel:"MEL",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",parigp:"PARI/GP",objectpascal:"Object Pascal",pcaxis:"PC-Axis",px:"PC-Axis",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",properties:".properties",protobuf:"Protocol Buffers",py:"Python",q:"Q (kdb+ database)",qml:"QML",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)","shell-session":"Shell session",solidity:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",tap:"TAP",toml:"TOML",tt2:"Template Toolkit 2",trig:"TriG",ts:"TypeScript","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)","t4-templating":"T4 templating",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vb:"Visual Basic",wasm:"WebAssembly",wiki:"Wiki markup",xeoracube:"XeoraCube",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML"};Prism.plugins.toolbar.registerButton("show-language",(function(t){var n=t.element.parentNode;if(n&&/pre/i.test(n.nodeName)){var r,a=n.getAttribute("data-language")||e[t.language]||((r=t.language)?(r.substring(0,1).toUpperCase()+r.substring(1)).replace(/s(?=cript)/,"S"):r);if(a){var i=document.createElement("span");return i.textContent=a,i}}}))}else console.warn("Show Languages plugin loaded before Toolbar plugin.")}()},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=(n("lTbe"),n("wZee")),o=n.n(i),s=(n("hL/g"),n("45FF"),n("PYIv"),n("wPEV"),n("TpNv"),n("miTC"),n("1K8K"),n("c2Kr"),n("bzW5"),n("9SXm"),n("moCf"),a.a.createElement);t.default=function(e){a.a.useEffect((function(){o.a.highlightAll()}),[]);var t=e.Component,n=e.pageProps;return s(t,n)}},PYIv:function(e,t,n){},TpNv:function(e,t,n){},bzW5:function(e,t,n){!function(){var t=Object.assign||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};function n(e){this.defaults=t({},e)}function r(e){for(var t=0,n=0;n<e.length;++n)e.charCodeAt(n)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}n.prototype={setDefaults:function(e){this.defaults=t(this.defaults,e)},normalize:function(e,n){for(var r in n=t(this.defaults,n)){var a=r.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));"normalize"!==r&&"setDefaults"!==a&&n[r]&&this[a]&&(e=this[a].call(this,e,n[r]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort((function(e,t){return e.length-t.length})),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var n=e.split("\n"),a=0;a<n.length;++a)if(!(r(n[a])<=t)){for(var i=n[a].split(/(\s+)/g),o=0,s=0;s<i.length;++s){var l=r(i[s]);(o+=l)>t&&(i[s]="\n"+i[s],o=l)}n[a]=i.join("")}return n.join("\n")}},e.exports&&(e.exports=n),"undefined"!==typeof Prism&&(Prism.plugins.NormalizeWhitespace=new n({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",(function(e){var t=Prism.plugins.NormalizeWhitespace;if(!e.settings||!1!==e.settings["whitespace-normalization"])if(e.element&&e.element.parentNode||!e.code){var n=e.element.parentNode,r=/(?:^|\s)no-whitespace-normalization(?:\s|$)/;if(e.code&&n&&"pre"===n.nodeName.toLowerCase()&&!r.test(n.className)&&!r.test(e.element.className)){for(var a=n.childNodes,i="",o="",s=!1,l=0;l<a.length;++l){var c=a[l];c==e.element?s=!0:"#text"===c.nodeName&&(s?o+=c.nodeValue:i+=c.nodeValue,n.removeChild(c),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=i+e.element.innerHTML+o;e.element.innerHTML=t.normalize(u,e.settings),e.code=e.element.textContent}else e.code=i+e.code+o,e.code=t.normalize(e.code,e.settings)}}else e.code=t.normalize(e.code,e.settings)})))}()},c2Kr:function(e,t,n){!function(){if("undefined"!==typeof self&&self.Prism&&self.document)if(Prism.plugins.toolbar){var e=window.ClipboardJS||void 0;e||(e=n("sxGJ"));var t=[];if(!e){var r=document.createElement("script"),a=document.querySelector("head");r.onload=function(){if(e=window.ClipboardJS)for(;t.length;)t.pop()()},r.src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",a.appendChild(r)}Prism.plugins.toolbar.registerButton("copy-to-clipboard",(function(n){var r=document.createElement("button");return r.textContent="Copy",e?a():t.push(a),r;function a(){var t=new e(r,{text:function(){return n.code}});t.on("success",(function(){r.textContent="Copied!",i()})),t.on("error",(function(){r.textContent="Press Ctrl+C to copy",i()}))}function i(){setTimeout((function(){r.textContent="Copy"}),5e3)}}))}else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")}()},"hL/g":function(e,t,n){},lTbe:function(e,t,n){},miTC:function(e,t){!function(){if("undefined"!==typeof self&&self.Prism&&self.document){var e=/(?:^|\s)match-braces(?:\s|$)/,t=/(?:^|\s)brace-hover(?:\s|$)/,n=/(?:^|\s)brace-selected(?:\s|$)/,r=/(?:^|\s)no-brace-hover(?:\s|$)/,a=/(?:^|\s)no-brace-select(?:\s|$)/,i={"(":")","[":"]","{":"}"},o={"(":"brace-round","[":"brace-square","{":"brace-curly"},s=0,l=/^(pair-\d+-)(open|close)$/;Prism.hooks.add("complete",(function(t){var r=t.element,a=r.parentElement;if(a&&"PRE"==a.tagName){for(var l=[],c=r;c;c=c.parentElement)if(e.test(c.className)){l.push("(","[","{");break}if(0!=l.length){a.__listenerAdded||(a.addEventListener("mousedown",(function(){var e=a.querySelector("code");Array.prototype.slice.call(e.querySelectorAll(".brace-selected")).forEach((function(e){e.className=e.className.replace(n," ")}))})),Object.defineProperty(a,"__listenerAdded",{value:!0}));var p=Array.prototype.slice.call(r.querySelectorAll("span.token.punctuation")),m=[];l.forEach((function(e){for(var t=i[e],n=o[e],r=[],a=[],l=0;l<p.length;l++){var c=p[l];if(0==c.childElementCount){var g=c.textContent;g===e?(m.push({index:l,open:!0,element:c}),c.className+=" "+n,c.className+=" brace-open",a.push(l)):g===t&&(m.push({index:l,open:!1,element:c}),c.className+=" "+n,c.className+=" brace-close",a.length&&r.push([l,a.pop()]))}}r.forEach((function(e){var t="pair-"+s+++"-",n=p[e[0]],r=p[e[1]];n.id=t+"open",r.id=t+"close",[n,r].forEach((function(e){e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",d),e.addEventListener("click",f)}))}))}));var g=0;m.sort((function(e,t){return e.index-t.index})),m.forEach((function(e){e.open?(e.element.className+=" brace-level-"+(g%12+1),g++):(g=Math.max(0,g-1),e.element.className+=" brace-level-"+(g%12+1))}))}}}))}function c(e){var t=l.exec(e.id);return document.querySelector("#"+t[1]+("open"==t[2]?"close":"open"))}function u(){for(var e=this.parentElement;e;e=e.parentElement)if(r.test(e.className))return;[this,c(this)].forEach((function(e){e.className=(e.className.replace(t," ")+" brace-hover").replace(/\s+/g," ")}))}function d(){[this,c(this)].forEach((function(e){e.className=e.className.replace(t," ")}))}function f(){for(var e=this.parentElement;e;e=e.parentElement)if(a.test(e.className))return;[this,c(this)].forEach((function(e){e.className=(e.className.replace(n," ")+" brace-selected").replace(/\s+/g," ")}))}}()},moCf:function(e,t){"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&Prism.plugins.toolbar.registerButton("download-file",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),r=document.createElement("a");return r.textContent=t.getAttribute("data-download-link-label")||"Download",r.setAttribute("download",""),r.href=n,r}}))},sxGJ:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),a=document.createRange();a.selectNodeContents(e),r.removeAllRanges(),r.addRange(a),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function a(){r.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,a=n.length;r<a;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],a=[];if(r&&t)for(var i=0,o=r.length;i<o;i++)r[i].fn!==t&&r[i].fn._!==t&&a.push(r[i]);return a.length?n[e]=a:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),a=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return a(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function a(e,t,n,r,a){var o=i.apply(this,arguments);return e.addEventListener(n,o,a),{destroy:function(){e.removeEventListener(n,o,a)}}}function i(e,t,n,a){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&a.call(e,n)}}e.exports=function(e,t,n,r,i){return"function"===typeof e.addEventListener?a.apply(null,arguments):"function"===typeof n?a.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return a(e,t,n,r,i)})))}},function(e,t){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=function(e,t){for(;e&&e.nodeType!==n;){if("function"===typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return o(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=a()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=a()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==("undefined"===typeof e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=n(1),c=n.n(l),u=n(2),d=n.n(u),f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),p(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===f(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=d()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return g("action",e)}},{key:"defaultTarget",value:function(e){var t=g("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return g("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(c.a);function g(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=m}]).default},e.exports=r()},wPEV:function(e,t){!function(){if("undefined"!==typeof self&&self.Prism&&self.document){var e=/\n(?!$)/g,t=function(t){var r=n(t)["white-space"];if("pre-wrap"===r||"pre-line"===r){var a=t.querySelector("code"),i=t.querySelector(".line-numbers-rows"),o=t.querySelector(".line-numbers-sizer"),s=a.textContent.split(e);o||((o=document.createElement("span")).className="line-numbers-sizer",a.appendChild(o)),o.style.display="block",s.forEach((function(e,t){o.textContent=e||"\n";var n=o.getBoundingClientRect().height;i.children[t].style.height=n+"px"})),o.textContent="",o.style.display="none"}},n=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",(function(){Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"),t)})),Prism.hooks.add("complete",(function(n){if(n.code){var r=n.element,a=r.parentNode;if(a&&/pre/i.test(a.nodeName)&&!r.querySelector(".line-numbers-rows")){for(var i=!1,o=/(?:^|\s)line-numbers(?:\s|$)/,s=r;s;s=s.parentNode)if(o.test(s.className)){i=!0;break}if(i){r.className=r.className.replace(o," "),o.test(a.className)||(a.className+=" line-numbers");var l,c=n.code.match(e),u=c?c.length+1:1,d=new Array(u+1).join("<span></span>");(l=document.createElement("span")).setAttribute("aria-hidden","true"),l.className="line-numbers-rows",l.innerHTML=d,a.hasAttribute("data-start")&&(a.style.counterReset="linenumber "+(parseInt(a.getAttribute("data-start"),10)-1)),n.element.appendChild(l),t(a),Prism.hooks.run("line-numbers",n)}}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})),Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains("line-numbers")){var n=e.querySelector(".line-numbers-rows"),r=parseInt(e.getAttribute("data-start"),10)||1,a=r+(n.children.length-1);t<r&&(t=r),t>a&&(t=a);var i=t-r;return n.children[i]}}}}}()},wZee:function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,i,o=r.util.type(t);switch(n=n||{},o){case"Object":if(i=r.util.objId(t),n[i])return n[i];for(var s in a={},n[i]=a,t)t.hasOwnProperty(s)&&(a[s]=e(t[s],n));return a;case"Array":return i=r.util.objId(t),n[i]?n[i]:(a=[],n[i]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||r.languages)[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(o[l]=n[l]);n.hasOwnProperty(s)||(o[s]=i[s])}var c=a[e];return a[e]=o,r.languages.DFS(r.languages,(function(t,n){n===c&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,a,i){i=i||{};var o=r.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],a||s);var l=t[s],c=r.util.type(l);"Object"!==c||i[o(l)]?"Array"!==c||i[o(l)]||(i[o(l)]=!0,e(l,n,s,i)):(i[o(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,o=0;i=a.elements[o++];)r.highlightElement(i,!0===t,a.callback)},highlightElement:function(n,a,i){var o=r.util.getLanguage(n),s=r.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var l=n.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:s,code:n.textContent};function u(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),i&&i.call(c.element)}if(r.hooks.run("before-sanity-check",c),!c.code)return r.hooks.run("complete",c),void(i&&i.call(c.element));if(r.hooks.run("before-highlight",c),c.grammar)if(a&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(r.highlight(c.code,c.grammar,c.language));else u(r.util.encode(c.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",i),i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),a.stringify(r.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var l in n)t[l]=n[l];delete t.rest}var c=new i;return o(c,c.head,e),function e(t,n,i,l,c,u,d){for(var f in i)if(i.hasOwnProperty(f)&&i[f]){var p=i[f];p=Array.isArray(p)?p:[p];for(var m=0;m<p.length;++m){if(d&&d==f+","+m)return;var g=p[m],h=g.inside,y=!!g.lookbehind,v=!!g.greedy,b=0,k=g.alias;if(v&&!g.pattern.global){var x=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,x+"g")}g=g.pattern||g;for(var w=l.next,S=c;w!==n.tail;S+=w.value.length,w=w.next){var A=w.value;if(n.length>t.length)return;if(!(A instanceof a)){var E=1;if(v&&w!=n.tail.prev){if(g.lastIndex=S,!(P=g.exec(t)))break;var T=P.index+(y&&P[1]?P[1].length:0),C=P.index+P[0].length,F=S;for(F+=w.value.length;T>=F;)w=w.next,F+=w.value.length;if(F-=w.value.length,S=F,w.value instanceof a)continue;for(var N=w;N!==n.tail&&(F<C||"string"===typeof N.value&&!N.prev.value.greedy);N=N.next)E++,F+=N.value.length;E--,A=t.slice(S,F),P.index-=S}else{g.lastIndex=0;var P=g.exec(A)}if(P){y&&(b=P[1]?P[1].length:0);T=P.index+b,P=P[0].slice(b),C=T+P.length;var L=A.slice(0,T),j=A.slice(C),_=w.prev;L&&(_=o(n,_,L),S+=L.length),s(n,_,E);var O=new a(f,h?r.tokenize(P,h):P,k,P,v);if(w=o(n,_,O),j&&o(n,w,j),E>1&&e(t,n,i,w.prev,S,!0,f+","+m),u)break}else if(u)break}}}}}(e,c,t,c.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(c)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:a};function a(e,t,n,r,a){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!a}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function o(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function s(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}if(e.Prism=r,a.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),r.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,i=n.code,o=n.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a)),o&&e.close()}),!1),r):r;var l=r.util.currentScript();function c(){r.manual||r.highlightAll()}if(l&&(r.filename=l.src,l.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var u=document.readyState;"loading"===u||"interactive"===u&&l&&l.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return r}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};a["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",i)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var r,a=e.getAttribute("data-src"),i=e,o=/\blang(?:uage)?-([\w-]+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(r=(e.className.match(o)||[,""])[1]),!r){var s=(a.match(/\.(\w+)$/)||[,""])[1];r=t[s]||s}var l=document.createElement("code");l.className="language-"+r,e.textContent="",l.textContent="Loading\u2026",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",a,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,n.highlightElement(l),e.setAttribute("data-src-loaded","")):c.status>=400?l.textContent="\u2716 Error "+c.status+" while fetching file: "+c.statusText:l.textContent="\u2716 Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[[0,0,2,1]]]);