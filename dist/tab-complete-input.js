var t,e=(t=require("vue"))&&"object"==typeof t&&"default"in t?t.default:t;function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}var o=function(){function t(t){for(var e in this.options={enableCache:!0,insertOrder:!1,returnRoot:!1,insert:null,sort:null,clip:null,copy:null,merge:null},this.root={},this.index=0,t)t.hasOwnProperty(e)&&(this.options[e]=t[e]);"function"!=typeof this.options.insert&&(this.options.insert=function(t,e){return this.options.insertOrder&&void 0===e.d&&void 0===e.o&&(e={d:e,o:this.index++}),t&&t.length?t.push(e):t=[e],t}),"function"!=typeof this.options.sort&&(this.options.insertOrder?this.options.insertOrder&&(this.options.sort=function(){this.sort(function(t,e){return t.o-e.o})}):this.options.sort=function(){this.sort()}),"function"!=typeof this.options.clip&&(this.options.clip=function(t){this.length>t&&this.splice(t,this.length-t)}),"function"!=typeof this.options.copy&&(this.options.copy=function(t){return t.slice(0)}),"function"!=typeof this.options.merge&&(this.options.merge=function(t,e,i){for(var o=0,n=e.length;o<n;o++)t=this.options.insert.call(this,t,e[o]),this.options.sort.call(t,i);return t})}var e=t.prototype;return e._addCacheData=function(t,e){return!(this.root===t&&!this.options.returnRoot||!1===this.options.enableCache||(t.$d||(t.$d={}),t.$d=this.options.insert.call(this,t.$d,e),this.options.sort.call(t.$d),0))},e._addSuffix=function(t,e,i){var o=t.charAt(0),n=t.substring(1)||null,s={$d:{}};n&&(s.$s=n),void 0===i[o]?i[o]=s:void 0===i[o].$d&&(i[o].$d={},n&&void 0===i[o].$s&&(i[o].$s=n)),i[o].$d=this.options.insert.call(this,i[o].$d,e),this.options.sort.call(i[o].$d)},e._moveSuffix=function(t,e,i){var o=t.charAt(0),n=t.substring(1)||null,s={$d:{}};n&&(s.$s=n),void 0===i[o]&&(i[o]=s),i[o].$d=this.options.copy(e)},e._getDataAtNode=function(t,e){var i;return this.options.enableCache?(this.options.sort.call(t.$d,e),i=t.$d):i=this._getSubtree(t,e),this.options.insertOrder&&(i=this._stripInsertOrder(i)),i?this.options.copy(i):void 0},e._stripInsertOrder=function(t){if(void 0!==t){for(var e=[],i=0,o=t.length;i<o;i++)e.push(t[i].d);return e}},e._getSubtree=function(t,e){for(var i,o,n=[t];o=n.pop();)for(var s in o)o.hasOwnProperty(s)&&("$d"==s?(void 0===i&&(i=[]),i=this.options.merge.call(this,i,o.$d,e)):"$s"!=s&&n.push(o[s]));return i},e.add=function(t,e){if("string"!=typeof t)return!1;1==arguments.length&&(e=t),t=t.toLowerCase();for(var i=this.root,o=0,n=t.length;o<n;o++){var s=t.charAt(o);if(i[s])o==n-1?(this._addCacheData(i,e),this._addCacheData(i[s],e)||this._addSuffix(s,e,i)):(this._addCacheData(i,e),i=i[s]);else{if(i.$s){if(i.$s==t.substring(o)){this._addCacheData(i,e)||(i.$d=this.options.insert.call(this,i.$d,e),this.options.sort.call(i.$d));break}this._moveSuffix(i.$s,i.$d,i),delete i.$s,!1===this.options.enableCache&&delete i.$d}if(!i[s]){this._addSuffix(t.substring(o),e,i),this._addCacheData(i,e);break}this._addCacheData(i,e),o==n-1&&(i[s].$s?(this._moveSuffix(i[s].$s,i[s].$d,i[s]),delete i[s].$s,!1===this.options.enableCache&&delete i[s].$d,this._addSuffix(s,e,i)):this._addCacheData(i[s],e)||this._addSuffix(s,e,i)),i=i[s]}}},e.contains=function(t){if("string"!=typeof t||""==t)return!1;t=t.toLowerCase();for(var e=this.root,i=0,o=t.length;i<o;i++){var n=t.charAt(i);if(!e[n])return!(!e.$s||e.$s!==t.substring(i));e=e[n]}return!(!e.$d||void 0!==e.$s)},e.find=function(t){if("string"==typeof t&&(""!=t||this.options.returnRoot)){t=t.toLowerCase();for(var e=this.root,i=0,o=t.length;i<o;i++){var n=t.charAt(i);if(!e[n])return e.$s&&0==e.$s.indexOf(t.substring(i))?this._getDataAtNode(e,t):void 0;e=e[n]}return this._getDataAtNode(e,t)}},t}(),n=e.extend({name:"tab-complete-input",data:function(){return{trie:new o,position:0,wordPos:0,index:0,words:[],word:"",dynamicData:!1,possible:!1,saved:!1,localValue:this.value}},render:function(t){var e=this;return t("input",{ref:"input",attrs:i({},e.$props),domProps:{value:e.value},directives:[{name:"model",value:e.localValue,expression:"value"}],on:i({},e.$listeners,{keydown:e.$listeners.keydown?[e.tabComplete,e.$listeners.keydown]:e.tabComplete,input:function(t){e.localValue=t.target.value,e.$emit("input",t.target.value)}})})},created:function(){this.dynamicData=this.dataSource instanceof Function,this.dynamicData||this.setData(this.dataSource)},props:{dataSource:{default:function(){return[]}},format:{default:function(t,e,i){return{word:t,prev:e}},type:Function},value:{default:"",type:String}},watch:{dataSource:function(t){this.dynamicData=t instanceof Function,this.dynamicData||this.setData(t)}},methods:{setData:function(t){var e=this;this.trie=new o,t.forEach(function(t){e.trie.add(t)})},tabComplete:function(t){try{var e=function(){if(i.possible&&i.index>=i.possible.length&&(i.index=0),i.possible){t&&t.preventDefault();var e=i.words,o="";e.length>1&&(o=e[i.wordPos-1]);var n=i.format(i.possible[i.index],o,i.wordPos);e[i.wordPos]=n.word,n.prev&&(e[i.wordPos-1]=n.prev);var s=i.words.slice(0,i.wordPos+1).join(" ").length;i.localValue=e.join(" "),i.localValue=i.localValue.slice(0,s)+i.localValue.slice(s+1),i.updateValue(i.localValue),i.$nextTick(function(){return i.selectRange(s,s)})}},i=this;if(t&&9!==t.keyCode)return i.saved=!1,i.index=0,Promise.resolve();var o=function(){if(!i.saved){var e=function(){i.saved=!0,i.possible=i.trie.find(i.word)};i.position=i.getCursorPos();var o=i.localValue.slice(0,i.position)+" "+i.localValue.slice(i.position);i.words=o.split(" ");for(var n=0,s=0;s<i.words.length;s++)if((n+=i.words[s].length+1)>=i.position)return i.word=i.words[s],void(i.wordPos=s);""!=i.word&&t&&t.preventDefault();var r=function(){if(i.dynamicData){var t=i.dataSource(i.word,i.wordPos);return Promise.resolve(t).then(function(t){i.setData(t)})}}();return r&&r.then?r.then(e):e()}i.index++}();return Promise.resolve(o&&o.then?o.then(e):e())}catch(t){return Promise.reject(t)}},updateValue:function(t){this.localValue=t,this.$emit("input",t)},selectRange:function(t,e){this.$el.focus(),this.$el.setSelectionRange(t,e)},getCursorPos:function(){return this.$el.selectionStart}}});module.exports=n;
//# sourceMappingURL=tab-complete-input.js.map
