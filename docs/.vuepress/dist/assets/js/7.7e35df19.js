(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1638:function(t,e,n){"use strict";n.r(e);n(165),n(10),n(99);var i=n(57),o=n(305),r=n.n(o),s=n(302),a={components:{TabCompleteInput:r.a},data:function(){return{names:s.b.sort(),text:"",buttonText:"Change Names"}},methods:{getFormat:s.a,resetNames:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.buttonText="Changing Names...",Promise.all([n.e(1),n.e(2)]).then(n.bind(null,1634)).then(function(e){t.names=e.generate(20).sort(),t.buttonText="Change Names"});case 2:case"end":return e.stop()}},e)}))()}},computed:{entryPlaceholder:function(){return this.names.join(", ")}}},l=n(41),u=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"doc-example"},[n("p",[n("label",{attrs:{for:"tabInput"}},[t._v("Try tabbing these names: "+t._s(t.entryPlaceholder))])]),t._v(" "),n("p",[n("tab-complete-input",{attrs:{id:"tabInput","data-source":t.names,format:t.getFormat},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),n("button",{on:{click:t.resetNames}},[t._v(t._s(t.buttonText))])])},[],!1,null,null,null);e.default=u.exports},300:function(t,e,n){"use strict";var i=n(163),o=n(167),r=n(6),s=n(24),a=n(95),l=n(168),u=n(13),c=n(164),d=n(68),h=n(2),f=[].push,p=Math.min,v=!h(function(){return!RegExp(4294967295,"y")});i("split",2,function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===t)return[i];if(!o(t))return e.call(i,t,r);for(var a,l,u,c=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,h+"g");(a=d.call(v,i))&&!((l=v.lastIndex)>p&&(c.push(i.slice(p,a.index)),a.length>1&&a.index<i.length&&f.apply(c,a.slice(1)),u=a[0].length,p=l,c.length>=r));)v.lastIndex===a.index&&v.lastIndex++;return p===i.length?!u&&v.test("")||c.push(""):c.push(i.slice(p)),c.length>r?c.slice(0,r):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=s(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,o,n):i.call(String(o),e,n)},function(t,o){var s=n(i,t,this,o,i!==e);if(s.done)return s.value;var d=r(t),h=String(this),f=a(d,RegExp),g=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),b=new f(v?d:"^(?:"+d.source+")",m),y=void 0===o?4294967295:o>>>0;if(0===y)return[];if(0===h.length)return null===c(b,h)?[h]:[];for(var x=0,$=0,w=[];$<h.length;){b.lastIndex=v?$:0;var C,S=c(b,v?h:h.slice($));if(null===S||(C=p(u(b.lastIndex+(v?0:$)),h.length))===x)$=l(h,$,g);else{if(w.push(h.slice(x,$)),w.length===y)return w;for(var _=1;_<=S.length-1;_++)if(w.push(S[_]),w.length===y)return w;$=x=C}}return w.push(h.slice(x)),w}]},!v)},301:function(t,e,n){"use strict";var i=n(1),o=n(29).find,r=n(93),s=n(18),a=!0,l=s("find");"find"in[]&&Array(1).find(function(){a=!1}),i({target:"Array",proto:!0,forced:a||!l},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r("find")},302:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});n(42),n(66),n(303);var i=function(t,e,n){return 0===n||n>0&&-1!==e.search(",")?t+=": ":n>0&&-1!==e.search(":")&&(t+=": ",e=e.replace(":",",")),{word:t,prev:e}},o=["John","Jake","Joe","Noah","Emma","Will","William","Andrew","Brady","Ethan","Dan","Daniel","Danny"]},303:function(t,e,n){"use strict";var i=n(163),o=n(6),r=n(24),s=n(304),a=n(164);i("search",1,function(t,e,n){return[function(e){var n=r(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var r=o(t),l=String(this),u=r.lastIndex;s(u,0)||(r.lastIndex=0);var c=a(r,l);return s(r.lastIndex,u)||(r.lastIndex=u),null===c?-1:c.index}]})},304:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},305:function(t,e,n){n(301),n(96),n(166),n(165),n(45),n(306),n(10),n(42),n(300),n(97);var i,o=n(307),r=(i=n(0))&&"object"==o(i)&&"default"in i?i.default:i;function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var a=function(){function t(t){for(var e in this.options={enableCache:!0,insertOrder:!1,returnRoot:!1,insert:null,sort:null,clip:null,copy:null,merge:null},this.root={},this.index=0,t)t.hasOwnProperty(e)&&(this.options[e]=t[e]);"function"!=typeof this.options.insert&&(this.options.insert=function(t,e){return this.options.insertOrder&&void 0===e.d&&void 0===e.o&&(e={d:e,o:this.index++}),t&&t.length?t.push(e):t=[e],t}),"function"!=typeof this.options.sort&&(this.options.insertOrder?this.options.insertOrder&&(this.options.sort=function(){this.sort(function(t,e){return t.o-e.o})}):this.options.sort=function(){this.sort()}),"function"!=typeof this.options.clip&&(this.options.clip=function(t){this.length>t&&this.splice(t,this.length-t)}),"function"!=typeof this.options.copy&&(this.options.copy=function(t){return t.slice(0)}),"function"!=typeof this.options.merge&&(this.options.merge=function(t,e,n){for(var i=0,o=e.length;i<o;i++)t=this.options.insert.call(this,t,e[i]),this.options.sort.call(t,n);return t})}var e=t.prototype;return e._addCacheData=function(t,e){return!(this.root===t&&!this.options.returnRoot||!1===this.options.enableCache||(t.$d||(t.$d={}),t.$d=this.options.insert.call(this,t.$d,e),this.options.sort.call(t.$d),0))},e._addSuffix=function(t,e,n){var i=t.charAt(0),o=t.substring(1)||null,r={$d:{}};o&&(r.$s=o),void 0===n[i]?n[i]=r:void 0===n[i].$d&&(n[i].$d={},o&&void 0===n[i].$s&&(n[i].$s=o)),n[i].$d=this.options.insert.call(this,n[i].$d,e),this.options.sort.call(n[i].$d)},e._moveSuffix=function(t,e,n){var i=t.charAt(0),o=t.substring(1)||null,r={$d:{}};o&&(r.$s=o),void 0===n[i]&&(n[i]=r),n[i].$d=this.options.copy(e)},e._getDataAtNode=function(t,e){var n;return this.options.enableCache?(this.options.sort.call(t.$d,e),n=t.$d):n=this._getSubtree(t,e),this.options.insertOrder&&(n=this._stripInsertOrder(n)),n?this.options.copy(n):void 0},e._stripInsertOrder=function(t){if(void 0!==t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n].d);return e}},e._getSubtree=function(t,e){for(var n,i,o=[t];i=o.pop();)for(var r in i)i.hasOwnProperty(r)&&("$d"==r?(void 0===n&&(n=[]),n=this.options.merge.call(this,n,i.$d,e)):"$s"!=r&&o.push(i[r]));return n},e.add=function(t,e){if("string"!=typeof t)return!1;1==arguments.length&&(e=t),t=t.toLowerCase();for(var n=this.root,i=0,o=t.length;i<o;i++){var r=t.charAt(i);if(n[r])i==o-1?(this._addCacheData(n,e),this._addCacheData(n[r],e)||this._addSuffix(r,e,n)):(this._addCacheData(n,e),n=n[r]);else{if(n.$s){if(n.$s==t.substring(i)){this._addCacheData(n,e)||(n.$d=this.options.insert.call(this,n.$d,e),this.options.sort.call(n.$d));break}this._moveSuffix(n.$s,n.$d,n),delete n.$s,!1===this.options.enableCache&&delete n.$d}if(!n[r]){this._addSuffix(t.substring(i),e,n),this._addCacheData(n,e);break}this._addCacheData(n,e),i==o-1&&(n[r].$s?(this._moveSuffix(n[r].$s,n[r].$d,n[r]),delete n[r].$s,!1===this.options.enableCache&&delete n[r].$d,this._addSuffix(r,e,n)):this._addCacheData(n[r],e)||this._addSuffix(r,e,n)),n=n[r]}}},e.contains=function(t){if("string"!=typeof t||""==t)return!1;t=t.toLowerCase();for(var e=this.root,n=0,i=t.length;n<i;n++){var o=t.charAt(n);if(!e[o])return!(!e.$s||e.$s!==t.substring(n));e=e[o]}return!(!e.$d||void 0!==e.$s)},e.find=function(t){if("string"==typeof t&&(""!=t||this.options.returnRoot)){t=t.toLowerCase();for(var e=this.root,n=0,i=t.length;n<i;n++){var o=t.charAt(n);if(!e[o])return e.$s&&0==e.$s.indexOf(t.substring(n))?this._getDataAtNode(e,t):void 0;e=e[o]}return this._getDataAtNode(e,t)}},t}(),l=r.extend({name:"tab-complete-input",data:function(){return{trie:new a,position:0,wordPos:0,index:0,words:[],word:"",dynamicData:!1,possible:!1,saved:!1,localValue:this.value}},render:function(t){var e=this;return t("input",{ref:"input",attrs:s({},e.$props),domProps:{value:e.value},directives:[{name:"model",value:e.localValue,expression:"value"}],on:s({},e.$listeners,{keydown:e.$listeners.keydown?[e.tabComplete,e.$listeners.keydown]:e.tabComplete,input:function(t){e.localValue=t.target.value,e.$emit("input",t.target.value)}})})},created:function(){this.dynamicData=this.dataSource instanceof Function,this.dynamicData||this.setData(this.dataSource)},props:{dataSource:{default:function(){return[]}},format:{default:function(t,e,n){return{word:t,prev:e}},type:Function},value:{default:"",type:String}},watch:{dataSource:function(t){this.dynamicData=t instanceof Function,this.dynamicData||this.setData(t)}},methods:{setData:function(t){var e=this;this.trie=new a,t.forEach(function(t){e.trie.add(t)})},tabComplete:function(t){try{var e=function(){if(n.possible&&n.index>=n.possible.length&&(n.index=0),n.possible){t&&t.preventDefault();var e=n.words,i="";e.length>1&&(i=e[n.wordPos-1]);var o=n.format(n.possible[n.index],i,n.wordPos);e[n.wordPos]=o.word,o.prev&&(e[n.wordPos-1]=o.prev);var r=n.words.slice(0,n.wordPos+1).join(" ").length;n.localValue=e.join(" "),n.localValue=n.localValue.slice(0,r)+n.localValue.slice(r+1),n.updateValue(n.localValue),n.$nextTick(function(){return n.selectRange(r,r)})}},n=this;if(t&&9!==t.keyCode)return n.saved=!1,n.index=0,Promise.resolve();var i=function(){if(!n.saved){var e=function(){n.saved=!0,n.possible=n.trie.find(n.word)};n.position=n.getCursorPos();var i=n.localValue.slice(0,n.position)+" "+n.localValue.slice(n.position);n.words=i.split(" ");for(var o=0,r=0;r<n.words.length;r++)if((o+=n.words[r].length+1)>=n.position)return n.word=n.words[r],void(n.wordPos=r);""!=n.word&&t&&t.preventDefault();var s=function(){if(n.dynamicData){var t=n.dataSource(n.word,n.wordPos);return Promise.resolve(t).then(function(t){n.setData(t)})}}();return s&&s.then?s.then(e):e()}n.index++}();return Promise.resolve(i&&i.then?i.then(e):e())}catch(t){return Promise.reject(t)}},updateValue:function(t){this.localValue=t,this.$emit("input",t)},selectRange:function(t,e){this.$el.focus(),this.$el.setSelectionRange(t,e)},getCursorPos:function(){return this.$el.selectionStart}}});t.exports=l},306:function(t,e,n){"use strict";var i=n(1),o=n(94),r=n(43),s=n(13),a=n(11),l=n(98),u=n(46),c=n(44),d=n(18),h=c("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min;i({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,e){var n,i,c,d,h,f,g=a(this),m=s(g.length),b=o(t,m),y=arguments.length;if(0===y?n=i=0:1===y?(n=0,i=m-b):(n=y-2,i=v(p(r(e),0),m-b)),m+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(c=l(g,i),d=0;d<i;d++)(h=b+d)in g&&u(c,d,g[h]);if(c.length=i,n<i){for(d=b;d<m-i;d++)f=d+n,(h=d+i)in g?g[f]=g[h]:delete g[f];for(d=m;d>m-i+n;d--)delete g[d-1]}else if(n>i)for(d=m-i;d>b;d--)f=d+n-1,(h=d+i-1)in g?g[f]=g[h]:delete g[f];for(d=0;d<n;d++)g[d+b]=arguments[d+2];return g.length=m-i+n,c}})},307:function(t,e,n){function i(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=i=function(t){return typeof t}:t.exports=i=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(e)}n(47),n(48),n(69),n(10),n(26),n(30),t.exports=i}}]);