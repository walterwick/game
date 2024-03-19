!function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,i,n,s){return(e="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,i,n){var s,r=l(t,e);if(r){if((s=Object.getOwnPropertyDescriptor(r,e)).set)return s.set.call(n,i),!0;if(!s.writable)return!1}if(s=Object.getOwnPropertyDescriptor(n,e)){if(!s.writable)return!1;s.value=i,Object.defineProperty(n,e,s)}else!function(t,e,i){e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i}(n,e,i);return!0})(t,i,n,s)}function i(t,i,n,s,r){if(!e(t,i,n,s||t)&&r)throw new Error("failed to set property");return n}function n(e,i){return!i||"object"!==t(i)&&"function"!=typeof i?s(e):i}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t,e,i){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=l(t,e);if(n){var s=Object.getOwnPropertyDescriptor(n,e);return s.get?s.get.call(i):s.value}})(t,e,i||t)}function l(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&function(t,e){(Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(t,e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,i){return e&&u(t.prototype,e),i&&u(t,i),t}!function(t,e){var l=function(){function t(){o(this,t),this.reset()}return c(t,[{key:"reset",value:function(){return this.stroke=0,this.strokeColor="#000000",this.leading=0,this.lineHeight=0,this.letterSpacing=0,this.href=null,this}},{key:"recover",value:function(){this!=t.EMPTY&&e.Pool.recover("HTMLExtendStyle",this.reset())}}],[{key:"create",value:function(){return e.Pool.getItemByClass("HTMLExtendStyle",t)}}]),t}();l.EMPTY=new l,e.ClassUtils.regClass("laya.html.utils.HTMLExtendStyle",l),e.ClassUtils.regClass("Laya.HTMLExtendStyle",l);var u=function(){function t(){o(this,t),this.padding=t._PADDING,this.reset()}return c(t,[{key:"_getExtendStyle",value:function(){return this._extendStyle===l.EMPTY&&(this._extendStyle=l.create()),this._extendStyle}},{key:"reset",value:function(){return this.ower=null,this._type=0,this.wordWrap=!0,this.fontSize=e.ILaya.Text.defaultFontSize,this.family=e.ILaya.Text.defaultFont,this.color="#000000",this.valign=t.VALIGN_TOP,this.padding=t._PADDING,this.bold=!1,this.italic=!1,this.align=t.ALIGN_LEFT,this.textDecoration=null,this.bgColor=null,this.borderColor=null,this._extendStyle&&this._extendStyle.recover(),this._extendStyle=l.EMPTY,this}},{key:"recover",value:function(){e.Pool.recover("HTMLStyle",this.reset())}},{key:"inherit",value:function(e){var i,n,s,r;for(n=(s=t._inheritProps).length,i=0;i<n;i++)this[r=s[i]]=e[r]}},{key:"_widthAuto",value:function(){return 0!=(this._type&t._WIDTHAUTO)}},{key:"widthed",value:function(e){return 0!=(this._type&t._WIDTH_SET)}},{key:"_calculation",value:function(t,e){return!1}},{key:"heighted",value:function(e){return 0!=(this._type&t._HEIGHT_SET)}},{key:"size",value:function(e,i){var n=this.ower,s=!1;-1!==e&&e!=n.width&&(this._type|=t._WIDTH_SET,n.width=e,s=!0),-1!==i&&i!=n.height&&(this._type|=t._HEIGHT_SET,n.height=i,s=!0),s&&n._layoutLater()}},{key:"getLineElement",value:function(){return 0!=(this._type&t._LINE_ELEMENT)}},{key:"setLineElement",value:function(e){e?this._type|=t._LINE_ELEMENT:this._type&=~t._LINE_ELEMENT}},{key:"_enableLayout",value:function(){return 0==(this._type&t._DISPLAY_NONE)&&0==(this._type&t._ABSOLUTE)}},{key:"cssText",value:function(e){this.attrs(t.parseOneCSS(e,";"))}},{key:"attrs",value:function(t){if(t)for(var e=0,i=t.length;e<i;e++){var n=t[e];this[n[0]]=n[1]}}},{key:"href",get:function(){return this._extendStyle.href},set:function(t){t!==this._extendStyle.href&&(this._getExtendStyle().href=t)}},{key:"stroke",get:function(){return this._extendStyle.stroke},set:function(t){this._extendStyle.stroke!==t&&(this._getExtendStyle().stroke=t)}},{key:"strokeColor",get:function(){return this._extendStyle.strokeColor},set:function(t){this._extendStyle.strokeColor!==t&&(this._getExtendStyle().strokeColor=t)}},{key:"leading",get:function(){return this._extendStyle.leading},set:function(t){this._extendStyle.leading!==t&&(this._getExtendStyle().leading=t)}},{key:"lineHeight",get:function(){return this._extendStyle.lineHeight},set:function(t){this._extendStyle.lineHeight!==t&&(this._getExtendStyle().lineHeight=t)}},{key:"align",set:function(e){e in t.alignVDic&&(this._type&=~t._ALIGN,this._type|=t.alignVDic[e])},get:function(){var e=this._type&t._ALIGN;return t.align_Value[e]}},{key:"valign",set:function(e){e in t.alignVDic&&(this._type&=~t._VALIGN,this._type|=t.alignVDic[e])},get:function(){var e=this._type&t._VALIGN;return t.vAlign_Value[e]}},{key:"font",set:function(t){for(var e=t.split(" "),i=0,n=e.length;i<n;i++){var s=e[i];switch(s){case"italic":this.italic=!0;continue;case"bold":this.bold=!0;continue}s.indexOf("px")>0&&(this.fontSize=parseInt(s),this.family=e[i+1],i++)}},get:function(){return(this.italic?"italic ":"")+(this.bold?"bold ":"")+this.fontSize+"px "+(e.ILaya.Browser.onIPhone&&e.ILaya.Text.fontFamilyMap[this.family]||this.family)}},{key:"block",set:function(e){e?this._type|=t._CSS_BLOCK:this._type&=~t._CSS_BLOCK},get:function(){return 0!=(this._type&t._CSS_BLOCK)}},{key:"wordWrap",get:function(){return 0==(this._type&t._NOWARP)},set:function(e){e?this._type&=~t._NOWARP:this._type|=t._NOWARP}},{key:"bold",get:function(){return 0!=(this._type&t._BOLD)},set:function(e){e?this._type|=t._BOLD:this._type&=~t._BOLD}},{key:"fontWeight",get:function(){return this._type&t._BOLD?"bold":"none"},set:function(e){"bold"==e?this._type|=t._BOLD:this._type&=~t._BOLD}},{key:"italic",get:function(){return 0!=(this._type&t._ITALIC)},set:function(e){e?this._type|=t._ITALIC:this._type&=~t._ITALIC}},{key:"whiteSpace",set:function(e){"nowrap"===e&&(this._type|=t._NOWARP),"none"===e&&(this._type&=~t._NOWARP)},get:function(){return this._type&t._NOWARP?"nowrap":""}},{key:"width",set:function(e){if(this._type|=t._WIDTH_SET,"string"==typeof e){var i=e.indexOf("auto");if(i>=0&&(this._type|=t._WIDTHAUTO,e=e.substr(0,i)),this._calculation("width",e))return;e=parseInt(e)}this.size(e,-1)}},{key:"height",set:function(e){if(this._type|=t._HEIGHT_SET,"string"==typeof e){if(this._calculation("height",e))return;e=parseInt(e)}this.size(-1,e)}},{key:"letterSpacing",get:function(){return this._extendStyle.letterSpacing},set:function(t){"string"==typeof t&&(t=parseInt(t+"")),t!=this._extendStyle.letterSpacing&&(this._getExtendStyle().letterSpacing=t)}},{key:"position",set:function(e){"absolute"===e?this._type|=t._ABSOLUTE:this._type&=~t._ABSOLUTE},get:function(){return this._type&t._ABSOLUTE?"absolute":""}},{key:"absolute",get:function(){return 0!=(this._type&t._ABSOLUTE)}},{key:"paddingLeft",get:function(){return this.padding[3]}},{key:"paddingTop",get:function(){return this.padding[0]}}],[{key:"create",value:function(){return e.Pool.getItemByClass("HTMLStyle",t)}},{key:"parseOneCSS",value:function(e,i){for(var n,s=[],r=e.split(i),l=0,a=r.length;l<a;l++){var h=r[l],o=h.indexOf(":"),u=h.substr(0,o).replace(/^\s+|\s+$/g,"");if(0!==u.length){var c=h.substr(o+1).replace(/^\s+|\s+$/g,""),y=[u,c];switch(u){case"italic":case"bold":y[1]="true"==c;break;case"font-weight":"bold"==c&&(y[1]=!0,y[0]="bold");break;case"line-height":y[0]="lineHeight",y[1]=parseInt(c);break;case"font-size":y[0]="fontSize",y[1]=parseInt(c);break;case"stroke":y[0]="stroke",y[1]=parseInt(c);break;case"padding":(n=c.split(" ")).length>1||(n[1]=n[2]=n[3]=n[0]),y[1]=[parseInt(n[0]),parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];break;default:(y[0]=t._CSSTOVALUE[u])||(y[0]=u)}s.push(y)}}return s}},{key:"parseCSS",value:function(e,i){for(var n;null!=(n=t._parseCSSRegExp.exec(e));)t.styleSheets[n[1]]=t.parseOneCSS(n[2],";")}}]),t}();u._CSSTOVALUE={"letter-spacing":"letterSpacing","white-space":"whiteSpace","line-height":"lineHeight","font-family":"family","vertical-align":"valign","text-decoration":"textDecoration","background-color":"bgColor","border-color":"borderColor"},u._parseCSSRegExp=new RegExp("([.#]\\w+)\\s*{([\\s\\S]*?)}","g"),u._inheritProps=["italic","align","valign","leading","letterSpacing","stroke","strokeColor","bold","fontWeight","fontSize","lineHeight","wordWrap","color"],u.ALIGN_LEFT="left",u.ALIGN_CENTER="center",u.ALIGN_RIGHT="right",u.VALIGN_TOP="top",u.VALIGN_MIDDLE="middle",u.VALIGN_BOTTOM="bottom",u.styleSheets={},u.ADDLAYOUTED=512,u._PADDING=[0,0,0,0],u._HEIGHT_SET=8192,u._LINE_ELEMENT=65536,u._NOWARP=131072,u._WIDTHAUTO=262144,u._BOLD=1024,u._ITALIC=2048,u._CSS_BLOCK=1,u._DISPLAY_NONE=2,u._ABSOLUTE=4,u._WIDTH_SET=8,u.alignVDic={left:0,center:16,right:32,top:0,middle:64,bottom:128},u.align_Value={0:"left",16:"center",32:"right"},u.vAlign_Value={0:"top",64:"middle",128:"bottom"},u._ALIGN=48,u._VALIGN=192,e.ClassUtils.regClass("laya.html.utils.HTMLStyle",u),e.ClassUtils.regClass("Laya.HTMLStyle",u);var y=function(){function t(){o(this,t),this.all=[],this.styleSheets=u.styleSheets}return c(t,[{key:"getElementById",value:function(t){return this.all[t]}},{key:"setElementById",value:function(t,e){this.all[t]=e}}]),t}();y.document=new y,e.ClassUtils.regClass("laya.html.dom.HTMLDocument",y),e.ClassUtils.regClass("Laya.HTMLDocument",y);var f=function(){function t(){o(this,t),this.rec=new e.Rectangle,this.reset()}return c(t,[{key:"reset",value:function(){return this.rec.reset(),this.href=null,this}},{key:"recover",value:function(){e.Pool.recover("HTMLHitRect",this.reset())}}],[{key:"create",value:function(){return e.Pool.getItemByClass("HTMLHitRect",t)}}]),t}();e.ClassUtils.regClass("laya.html.dom.HTMLHitRect",f),e.ClassUtils.regClass("Laya.HTMLHitRect",f);var _=function t(){o(this,t)};_.HTMLDivElement=null,_.HTMLImageElement=null,_.HTMLBrElement=null,_.HTMLDivParser=null,_.HTMLParse=null,_.HTMLElementType=null;var d=function(){function t(){o(this,t),this.elements=[],this.x=0,this.y=0,this.w=0,this.h=0,this.wordStartIndex=0,this.minTextHeight=99999,this.mWidth=0}return c(t,[{key:"updatePos",value:function(t,e,i,n,s,r,l){var a,h=0;this.elements.length>0&&(h=(a=this.elements[this.elements.length-1]).x+a.width-this.elements[0].x),l=l||this.h;var o,c=0;s===u.ALIGN_CENTER&&(c=(e-h)/2),s===u.ALIGN_RIGHT&&(c=e-h);for(var y=0,f=this.elements.length;y<f;y++){var d=(a=this.elements[y])._getCSSStyle();switch(0!==c&&(a.x+=c),d.valign){case"top":a.y=n;break;case"middle":var g=0;99999!=this.minTextHeight&&(g=this.minTextHeight);var p=(g+l)/2;p=Math.max(p,this.h),a.eletype,_.HTMLElementType.IMAGE,o=n+p-a.height,a.y=o;break;case"bottom":a.y=n+(l-a.height)}}}}]),t}();e.ClassUtils.regClass("laya.html.utils.LayoutLine",d),e.ClassUtils.regClass("Laya.LayoutLine",d);var g,p=function(){function t(){o(this,t)}return c(t,null,[{key:"later",value:function(i){null==t._will&&(t._will=[],e.ILaya.stage.frameLoop(1,null,function(){if(!(t._will.length<1)){for(var e=0;e<t._will.length;e++)t.layout(t._will[e]);t._will.length=0}})),t._will.push(i)}},{key:"layout",value:function(e){return e&&e._style?0==(e._style._type&u.ADDLAYOUTED)?null:(e.style._type&=~u.ADDLAYOUTED,t._multiLineLayout(e)):null}},{key:"_multiLineLayout",value:function(e){var i=[];e._addChildsToLayout(i);var n,s,r,l,a,h,o,c=i.length,y=e._getCSSStyle(),f=y.letterSpacing,g=y.leading,p=y.lineHeight,L=y._widthAuto()||!y.wordWrap,v=L?999999:e.width,T=(e.height,0),m=y.italic?y.fontSize/3:0,k=y.align,C=y.valign,S=C!==u.VALIGN_TOP||k!==u.ALIGN_LEFT||0!=p,E=0,x=0,w=0,I=0,H=[],M=H[0]=new d,b=!1;M.h=0,y.italic&&(v-=y.fontSize/3);var U=0,D=!0;function O(){M.y=x,x+=M.h+g,M.mWidth=U,U=0,M=new d,H.push(M),M.h=0,E=0,D=!0,a=!1}for(n=0;n<c;n++)if(null!=(s=i[n]))if(D=!1,s instanceof _.HTMLBrElement)O(),M.y=x,M.h=p;else{if(s._isChar()){if((h=s).isWord)a=b||"\n"===h.char,M.wordStartIndex=M.elements.length;else{if(H.length>0&&E+w>v&&M.wordStartIndex>0){var A;A=M.elements.length-M.wordStartIndex+1,M.elements.length=M.wordStartIndex,n-=A,O();continue}a=!1,U+=h.width}w=h.width+h.style.letterSpacing,I=h.height,b=!1,(a=a||E+w>v)&&O(),M.minTextHeight=Math.min(M.minTextHeight,s.height)}else r=s._getCSSStyle(),o=s,l=r.padding,a=b||r.getLineElement(),w=o.width+l[1]+l[3]+r.letterSpacing,I=o.height+l[0]+l[2],b=r.getLineElement(),(a=a||E+w>v&&r.wordWrap)&&O();M.elements.push(s),M.h=Math.max(M.h,I),s.x=E,s.y=x,E+=w,M.w=E-f,M.y=x,T=Math.max(E+m,T)}else D||(E+=t.DIV_ELEMENT_PADDING),M.wordStartIndex=M.elements.length;if(x=M.y+M.h,S){var R=0,P=v;for(L&&e.width>0&&(P=e.width),n=0,c=H.length;n<c;n++)H[n].updatePos(0,P,n,R,k,C,p),R+=Math.max(p,H[n].h+g);x=R}return L&&(e.width=T),x>e.height&&(e.height=x),[T,x]}}]),t}();p.DIV_ELEMENT_PADDING=0,e.ClassUtils.regClass("laya.html.utils.Layout",p),e.ClassUtils.regClass("Laya.Layout",p),(g=t.HTMLElementType||(t.HTMLElementType={}))[g.BASE=0]="BASE",g[g.IMAGE=1]="IMAGE";var L=function(){function i(){o(this,i),this.eletype=t.HTMLElementType.BASE,this._creates(),this.reset()}return c(i,[{key:"_creates",value:function(){this._style=u.create()}},{key:"reset",value:function(){if(this.URI=null,this.parent=null,this._style.reset(),this._style.ower=this,this._style.valign="middle",this._text&&this._text.words){var t,e,n,s=this._text.words;for(e=s.length,t=0;t<e;t++)(n=s[t])&&n.recover()}return this._text=i._EMPTYTEXT,this._children&&(this._children.length=0),this._x=this._y=this._width=this._height=0,this}},{key:"_getCSSStyle",value:function(){return this._style}},{key:"_addChildsToLayout",value:function(t){var e=this._getWords();if(null==e&&(!this._children||0==this._children.length))return!1;if(e)for(var i=0,n=e.length;i<n;i++)t.push(e[i]);return this._children&&this._children.forEach(function(e,i,n){var s=e._style;s._enableLayout&&s._enableLayout()&&e._addToLayout(t)}),!0}},{key:"_addToLayout",value:function(t){if(this._style){var e=this._style;e.absolute||(e.block?t.push(this):this._addChildsToLayout(t)&&(this.x=this.y=0))}}},{key:"repaint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.parentRepaint(t)}},{key:"parentRepaint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.parent&&this.parent.repaint(t)}},{key:"_setParent",value:function(t){if(t instanceof i){var e=t;this.URI||(this.URI=e.URI),this.style&&this.style.inherit(e.style)}}},{key:"appendChild",value:function(t){return this.addChild(t)}},{key:"addChild",value:function(t){return t.parent&&t.parent.removeChild(t),this._children||(this._children=[]),this._children.push(t),t.parent=this,t._setParent(this),this.repaint(),t}},{key:"removeChild",value:function(t){if(!this._children)return null;var e,i;for(i=this._children.length,e=0;e<i;e++)if(this._children[e]==t)return this._children.splice(e,1),t;return null}},{key:"destroy",value:function(){this._children&&(this.destroyChildren(),this._children.length=0),e.Pool.recover(i.getClassName(this),this.reset())}},{key:"destroyChildren",value:function(){if(this._children){for(var t=this._children.length-1;t>-1;t--)this._children[t].destroy();this._children.length=0}}},{key:"_getWords",value:function(){if(!this._text)return null;var t=this._text.text;if(!t||0===t.length)return null;var i,n=this._text.words;if(n&&n.length===t.length)return n;null===n&&(this._text.words=n=[]),n.length=t.length;for(var s=this.style,r=s.font,l=0,a=t.length;l<a;l++)i=e.ILaya.Browser.measureText(t.charAt(l),r),n[l]=e.HTMLChar.create().setData(t.charAt(l),i.width,i.height||s.fontSize,s);return n}},{key:"_isChar",value:function(){return!1}},{key:"_layoutLater",value:function(){var t=this.style;t._type&u.ADDLAYOUTED||(t.widthed(this)&&(this._children&&this._children.length>0||null!=this._getWords())&&t.block?(p.later(this),t._type|=u.ADDLAYOUTED):this.parent&&this.parent._layoutLater())}},{key:"_setAttributes",value:function(t,e){switch(t){case"style":this.style.cssText(e);break;case"class":this.className=e;break;case"x":this.x=parseFloat(e);break;case"y":this.y=parseFloat(e);break;case"width":this.width=parseFloat(e);break;case"height":this.height=parseFloat(e);break;default:this[t]=e}}},{key:"formatURL",value:function(t){return this.URI?i.formatURL1(t,this.URI?this.URI.path:null):t}},{key:"drawToGraphic",value:function(t,e,i,n){e+=this.x,i+=this.y;var s,r,l,a=this.style;if(a.paddingLeft&&(e+=a.paddingLeft),a.paddingTop&&(i+=a.paddingTop),(null!=a.bgColor||a.borderColor)&&t.drawRect(e,i,this.width,this.height,a.bgColor,a.borderColor,1),this.renderSelfToGraphic(t,e,i,n),this._children&&this._children.length>0)for(r=this._children.length,s=0;s<r;s++)null!=(l=this._children[s]).drawToGraphic&&l.drawToGraphic(t,e,i,n)}},{key:"renderSelfToGraphic",value:function(t,e,i,n){var s=this.style,r=this._getWords();if(r&&(r.length,s)){var l=s.font,a=s.color;if(s.stroke){var h=s.stroke;h=parseInt(h);var o=s.strokeColor;t.fillBorderWords(r,e,i,l,a,o,h)}else t.fillWords(r,e,i,l,a);if(this.href){var u=r[r.length-1],c=u.y+u.height;if(u.y==r[0].y){"none"!=s.textDecoration&&t.drawLine(r[0].x,c,u.x+u.width,c,a,1);var y=f.create();y.rec.setTo(r[0].x,u.y,u.x+u.width-r[0].x,u.height),y.href=this.href,n.push(y)}else this.workLines(r,t,n)}}}},{key:"workLines",value:function(t,e,i){var n;n="none"!=this.style.textDecoration;var s,r,l,a=0;if(s=t.length,l=r=t[a],r){var h;for(a=1;a<s;a++)(h=t[a]).y!=r.y?(this.createOneLine(r,l,n,e,i),r=h,l=h):l=h;this.createOneLine(r,l,n,e,i)}}},{key:"createOneLine",value:function(t,e,i,n,s){var r=e.y+e.height;i&&n.drawLine(t.x,r,e.x+e.width,r,this.style.color,1);var l=f.create();l.rec.setTo(t.x,e.y,e.x+e.width-t.x,e.height),l.href=this.href,s.push(l)}},{key:"id",set:function(t){y.document.setElementById(t,this)}},{key:"innerTEXT",set:function(t){this._text===i._EMPTYTEXT?this._text={text:t,words:null}:(this._text.text=t,this._text.words&&(this._text.words.length=0)),this.repaint()},get:function(){return this._text.text}},{key:"style",get:function(){return this._style}},{key:"x",set:function(t){this._x!=t&&(this._x=t,this.parentRepaint())},get:function(){return this._x}},{key:"y",set:function(t){this._y!=t&&(this._y=t,this.parentRepaint())},get:function(){return this._y}},{key:"width",get:function(){return this._width},set:function(t){this._width!==t&&(this._width=t,this.repaint())}},{key:"height",get:function(){return this._height},set:function(t){this._height!==t&&(this._height=t,this.repaint())}},{key:"href",set:function(t){this._style&&t!=this._style.href&&(this._style.href=t,this.repaint())},get:function(){return this._style?this._style.href:null}},{key:"color",set:function(t){this.style.color=t}},{key:"className",set:function(t){this.style.attrs(y.document.styleSheets["."+t])}}],[{key:"formatURL1",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return"null path";if(i||(i=e.URL.basePath),t.indexOf(":")>0)return t;if(null!=e.URL.customFormat&&(t=e.URL.customFormat(t)),t.indexOf(":")>0)return t;var n=t.charAt(0);if("."===n)return e.URL._formatRelativePath(i+t);if("~"===n)return e.URL.rootPath+t.substring(1);if("d"===n){if(0===t.indexOf("data:image"))return t}else if("/"===n)return t;return i+t}},{key:"getClassName",value:function(t){return t instanceof Function?t.name:t.constructor.name}}]),i}();L._EMPTYTEXT={text:null,words:null},e.ILaya.regClass(L),_.HTMLElementType=t.HTMLElementType,e.ClassUtils.regClass("laya.html.dom.HTMLElement",L),e.ClassUtils.regClass("Laya.HTMLElement",L);var v=function(){function t(){o(this,t)}return c(t,[{key:"_addToLayout",value:function(t){t.push(this)}},{key:"reset",value:function(){return this}},{key:"destroy",value:function(){e.Pool.recover(L.getClassName(this),this.reset())}},{key:"_setParent",value:function(t){}},{key:"_getCSSStyle",value:function(){return t.brStyle||(t.brStyle=new u,t.brStyle.setLineElement(!0),t.brStyle.block=!0),t.brStyle}},{key:"renderSelfToGraphic",value:function(t,e,i,n){}},{key:"parent",set:function(t){}},{key:"URI",set:function(t){}},{key:"href",set:function(t){}}]),t}();_.HTMLBrElement=v,e.ILaya.regClass(v),e.ClassUtils.regClass("laya.html.dom.HTMLBrElement",v),e.ClassUtils.regClass("Laya.HTMLBrElement",v);var T=function(t){function e(){return o(this,e),n(this,a(e).apply(this,arguments))}return h(e,L),c(e,[{key:"_creates",value:function(){}},{key:"drawToGraphic",value:function(t,e,i,n){}},{key:"reset",value:function(){return this}},{key:"innerTEXT",set:function(t){u.parseCSS(t,null)},get:function(){return r(a(e.prototype),"innerTEXT",this)}}]),e}();e.ILaya.regClass(T),e.ClassUtils.regClass("laya.html.dom.HTMLStyleElement",T),e.ClassUtils.regClass("Laya.HTMLStyleElement",T);var m=function(t){function i(){return o(this,i),n(this,a(i).apply(this,arguments))}return h(i,L),c(i,[{key:"_creates",value:function(){}},{key:"drawToGraphic",value:function(t,e,i,n){}},{key:"reset",value:function(){return this._loader&&this._loader.off(e.Event.COMPLETE,this,this._onload),this._loader=null,this}},{key:"_onload",value:function(t){switch(this._loader&&(this._loader=null),this.type){case"text/css":u.parseCSS(t,this.URI)}this.repaint(!0)}},{key:"href",set:function(t){t&&(t=this.formatURL(t),this.URI=new e.URL(t),this._loader&&this._loader.off(e.Event.COMPLETE,this,this._onload),e.Loader.getRes(t)?"text/css"==this.type&&u.parseCSS(e.Loader.getRes(t),this.URI):(this._loader=new e.Loader,this._loader.once(e.Event.COMPLETE,this,this._onload),this._loader.load(t,e.Loader.TEXT)))},get:function(){return r(a(i.prototype),"href",this)}}]),i}();m._cuttingStyle=new RegExp("((@keyframes[\\s\\t]+|)(.+))[\\t\\n\\r\\s]*{","g"),e.ILaya.regClass(m),e.ClassUtils.regClass("laya.html.dom.HTMLLinkElement",m),e.ClassUtils.regClass("Laya.HTMLLinkElement",m);var k=function(t){function s(){var t;return o(this,s),(t=n(this,a(s).apply(this,arguments))).repaintHandler=null,t}return h(s,L),c(s,[{key:"reset",value:function(){return r(a(s.prototype),"reset",this).call(this),this._style.block=!0,this._style.setLineElement(!0),this._style.width=200,this._style.height=200,this.repaintHandler=null,this.contextHeight=0,this.contextWidth=0,this}},{key:"appendHTML",value:function(t){_.HTMLParse.parse(this,t,this.URI),this.layout()}},{key:"_addChildsToLayout",value:function(t){var e=this._getWords();if(null==e&&(!this._children||0==this._children.length))return!1;e&&e.forEach(function(e){t.push(e)});for(var i=!0,n=0,s=this._children.length;n<s;n++){var r=this._children[n];i?i=!1:t.push(null),r._addToLayout(t)}return!0}},{key:"_addToLayout",value:function(t){this.layout(),!this.style.absolute&&t.push(this)}},{key:"getBounds",value:function(){return this._htmlBounds?(this._boundsRec||(this._boundsRec=e.Rectangle.create()),this._boundsRec.copyFrom(this._htmlBounds)):null}},{key:"parentRepaint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];r(a(s.prototype),"parentRepaint",this).call(this),this.repaintHandler&&this.repaintHandler.runWith(t)}},{key:"layout",value:function(){this.style._type|=u.ADDLAYOUTED;var t=p.layout(this);if(t){this._htmlBounds||(this._htmlBounds=e.Rectangle.create());var i=this._htmlBounds;i.x=i.y=0,i.width=this.contextWidth=t[0],i.height=this.contextHeight=t[1]}}},{key:"innerHTML",set:function(t){this.destroyChildren(),this.appendHTML(t)}},{key:"width",set:function(t){var e;e=0===t?t!=this._width:t!=this.width,i(a(s.prototype),"width",t,this,!0),e&&this.layout()},get:function(){return this._width?this._width:this.contextWidth}},{key:"height",get:function(){return this._height?this._height:this.contextHeight},set:function(t){i(a(s.prototype),"height",t,this,!0)}}]),s}();_.HTMLDivParser=k,e.ILaya.regClass(k),e.ClassUtils.regClass("laya.html.dom.HTMLDivParser",k),e.ClassUtils.regClass("Laya.HTMLDivParser",k);var C=function(i){function s(){var e;return o(this,s),(e=n(this,a(s).call(this))).eletype=t.HTMLElementType.IMAGE,e}return h(s,L),c(s,[{key:"reset",value:function(){return r(a(s.prototype),"reset",this).call(this),this._tex&&this._tex.off(e.Event.LOADED,this,this.onloaded),this._tex=null,this._url=null,this}},{key:"onloaded",value:function(){if(this._style){var t=this._style;t.widthed(this)||this._tex.width,t.heighted(this)||this._tex.height,t.widthed(this)||this._width==this._tex.width||(this.width=this._tex.width,this.parent&&this.parent._layoutLater()),t.heighted(this)||this._height==this._tex.height||(this.height=this._tex.height,this.parent&&this.parent._layoutLater()),this.repaint()}}},{key:"_addToLayout",value:function(t){!this._style.absolute&&t.push(this)}},{key:"renderSelfToGraphic",value:function(t,e,i,n){this._tex&&t.drawImage(this._tex,e,i,this.width||this._tex.width,this.height||this._tex.height)}},{key:"src",set:function(t){if(t=this.formatURL(t),this._url!==t){this._url=t;var i=this._tex=e.Loader.getRes(t);i||(this._tex=i=new e.Texture,i.load(t),e.Loader.cacheTexture(t,i)),i.getIsReady()?this.onloaded():i.once(e.Event.READY,this,this.onloaded)}}}]),s}();_.HTMLImageElement=C,e.ILaya.regClass(C),e.ClassUtils.regClass("laya.html.dom.HTMLImageElement",C),e.ClassUtils.regClass("Laya.HTMLImageElement",C);var S=function(){function t(){o(this,t)}return c(t,null,[{key:"getInstance",value:function(i){var n=e.Pool.getItem(t._htmlClassMapShort[i]);return n||(n=e.ClassUtils.getInstance(i)),n}},{key:"parse",value:function(i,n,s){n=(n="<root>"+(n=n.replace(/<br>/g,"<br/>"))+"</root>").replace(t.spacePattern,t.char255);var r=e.Utils.parseXMLFromString(n);t._parseXML(i,r.childNodes[0].childNodes,s)}},{key:"_parseXML",value:function(e,i,n){var s,r,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(i.join||i.item)for(s=0,r=i.length;s<r;++s)t._parseXML(e,i[s],n,l);else{var a,h;if(3==i.nodeType){var o;if(e instanceof _.HTMLDivParser)null==i.nodeName&&(i.nodeName="#text"),h=i.nodeName.toLowerCase(),(o=i.textContent.replace(/^\s+|\s+$/g,"")).length>0&&(a=t.getInstance(h))&&(e.addChild(a),a.innerTEXT=o.replace(t.char255AndOneSpacePattern," "));else if((o=i.textContent.replace(/^\s+|\s+$/g,"")).length>0){var u=e;if(e instanceof L&&e.innerTEXT&&e.innerTEXT.length>0){var c=t.getInstance("p");c&&(e.addChild(c),u=c)}u.innerTEXT=o.replace(t.char255AndOneSpacePattern," ")}return}if("#comment"==(h=i.nodeName.toLowerCase()))return;if(a=t.getInstance(h)){"p"==h?(e.addChild(t.getInstance("br")),a=e.addChild(a),e.addChild(t.getInstance("br"))):a=e.addChild(a),a.URI=n,a.href=l;var y=i.attributes;if(y&&y.length>0)for(s=0,r=y.length;s<r;++s){var f=y[s],d=f.nodeName,g=f.value;a._setAttributes(d,g)}t._parseXML(a,i.childNodes,n,a.href)}else t._parseXML(e,i.childNodes,n,l)}}}]),t}();S.char255=String.fromCharCode(255),S.spacePattern=/&nbsp;|&#160;/g,S.char255AndOneSpacePattern=new RegExp(String.fromCharCode(255)+"|(\\s+)","g"),S._htmlClassMapShort={div:k,p:L,img:C,span:L,br:v,style:T,font:L,a:L,"#text":L,link:m},_.HTMLParse=S,e.ClassUtils.regClass("div",k),e.ClassUtils.regClass("p",L),e.ClassUtils.regClass("img",C),e.ClassUtils.regClass("span",L),e.ClassUtils.regClass("br",v),e.ClassUtils.regClass("style",T),e.ClassUtils.regClass("font",L),e.ClassUtils.regClass("a",L),e.ClassUtils.regClass("#text",L),e.ClassUtils.regClass("link",m),e.ClassUtils.regClass("laya.html.utils.HTMLParse",S),e.ClassUtils.regClass("Laya.HTMLParse",S);var E=function(t){function i(){var t;return o(this,i),(t=n(this,a(i).call(this)))._recList=[],t._repaintState=0,t._element=new k,t._element.repaintHandler=new e.Handler(s(t),t._htmlDivRepaint),t.mouseEnabled=!0,t.on(e.Event.CLICK,s(t),t._onMouseClick),t}return h(i,e.Sprite),c(i,[{key:"destroy",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._element&&this._element.reset(),this._element=null,this._doClears(),r(a(i.prototype),"destroy",this).call(this,t)}},{key:"_htmlDivRepaint",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]?this._repaintState<2&&(this._repaintState=2):this._repaintState<1&&(this._repaintState=1),this._repaintState>0&&this._setGraphicDirty()}},{key:"_updateGraphicWork",value:function(){switch(this._repaintState){case 1:this._updateGraphic();break;case 2:this._refresh()}}},{key:"_setGraphicDirty",value:function(){this.callLater(this._updateGraphicWork)}},{key:"_doClears",value:function(){if(this._recList){var t,e=this._recList.length;for(t=0;t<e;t++)this._recList[t].recover();this._recList.length=0}}},{key:"_updateGraphic",value:function(){this._doClears(),this.graphics.clear(!0),this._repaintState=0,this._element.drawToGraphic(this.graphics,-this._element.x,-this._element.y,this._recList);var t=this._element.getBounds();t&&this.setSelfBounds(t),this.size(t.width,t.height)}},{key:"_refresh",value:function(){this._repaintState=1,this._innerHTML&&(this._element.innerHTML=this._innerHTML),this._setGraphicDirty()}},{key:"_onMouseClick",value:function(){var t,e,i,n=this.mouseX,s=this.mouseY;for(e=this._recList.length,t=0;t<e;t++)(i=this._recList[t]).rec.contains(n,s)&&this._eventLink(i.href)}},{key:"_eventLink",value:function(t){this.event(e.Event.LINK,[t])}},{key:"style",get:function(){return this._element.style}},{key:"innerHTML",set:function(t){this._innerHTML!=t&&(this._repaintState=1,this._innerHTML=t,this._element.innerHTML=t,this._setGraphicDirty())}},{key:"width",set:function(t){this._element.width=t},get:function(){return this._element.width}},{key:"height",set:function(t){this._element.height=t},get:function(){return this._element.height}},{key:"contextWidth",get:function(){return this._element.contextWidth}},{key:"contextHeight",get:function(){return this._element.contextHeight}}]),i}();_.HTMLDivElement=E,_.HTMLParse=S,e.ClassUtils.regClass("laya.html.dom.HTMLDivElement",E),e.ClassUtils.regClass("Laya.HTMLDivElement",E);var x=function(t){function i(){var t;return o(this,i),(t=n(this,a(i).call(this)))._element._getCSSStyle().valign="middle",t}return h(i,E),c(i,[{key:"href",set:function(t){var i=this;t=this._element.formatURL(t);var n=new e.Loader;n.once(e.Event.COMPLETE,null,function(n){var s=i._element.URI;i._element.URI=new e.URL(t),i.innerHTML=n,!s||(i._element.URI=s)}),n.load(t,e.Loader.TEXT)}}]),i}();e.ClassUtils.regClass("laya.html.dom.HTMLIframeElement",x),e.ClassUtils.regClass("Laya.HTMLIframeElement",x),t.HTMLBrElement=v,t.HTMLDivElement=E,t.HTMLDivParser=k,t.HTMLDocument=y,t.HTMLElement=L,t.HTMLExtendStyle=l,t.HTMLHitRect=f,t.HTMLIframeElement=x,t.HTMLImageElement=C,t.HTMLLinkElement=m,t.HTMLParse=S,t.HTMLStyle=u,t.HTMLStyleElement=T,t.IHtml=_,t.Layout=p,t.LayoutLine=d}(window.Laya=window.Laya||{},Laya)}(); 
