exports.id=4636,exports.ids=[4636],exports.modules={46226:(e,t,n)=>{"use strict";n.d(t,{default:()=>i.a});var a=n(69029),i=n.n(a)},69029:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return o}});let a=n(91174),i=n(23078),r=n(92481),u=a._(n(86820));function o(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=r.Image},65166:function(e,t,n){var a,i,r;r=function(t,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(n);function r(e){return e&&e.__esModule?e:{default:e}}r(a);var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function s(e,t){var n={};for(var a in e)!(t.indexOf(a)>=0)&&Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}var l={className:"react-tagsinput-input",placeholder:"Add a tag"},p=function(e){function t(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={tag:"",isFocused:!1},e.focus=e.focus.bind(e),e.blur=e.blur.bind(e),e.accept=e.accept.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"_getTagDisplayValue",value:function(e){var t=this.props.tagDisplayProp;return t?e[t]:e}},{key:"_makeTag",value:function(e){var t,n=this.props.tagDisplayProp;return n?(n in(t={})?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t):e}},{key:"_removeTag",value:function(e){var t=this.props.value.concat([]);if(e>-1&&e<t.length){var n=t.splice(e,1);this.props.onChange(t,n,[e])}}},{key:"_clearInput",value:function(){this.hasControlledInput()?this.props.onChangeInput(""):this.setState({tag:""})}},{key:"_tag",value:function(){return this.hasControlledInput()?this.props.inputValue:this.state.tag}},{key:"_addTags",value:function(e){var t=this,n=this.props,a=n.onChange,i=n.onValidationReject,r=n.onlyUnique,u=n.maxTags,o=n.value;r&&(e=(e=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push("string"==typeof e[n]?e[n].trim():e[n]);return t}(e)).filter(function(e){return o.every(function(n){return t._getTagDisplayValue(n)!==t._getTagDisplayValue(e)})}));var s=e.filter(function(e){return!t._validate(t._getTagDisplayValue(e))});if(e=(e=e.filter(function(e){return t._validate(t._getTagDisplayValue(e))})).filter(function(e){var n=t._getTagDisplayValue(e);return"function"==typeof n.trim?n.trim().length>=0:n}),u>=0){var l=Math.max(u-o.length,0);e=e.slice(0,l)}if(i&&s.length>0&&i(s),e.length>0){for(var p=o.concat(e),c=[],d=0;d<e.length;d++)c.push(o.length+d);return a(p,e,c),this._clearInput(),!0}return!(s.length>0)&&(this._clearInput(),!1)}},{key:"_validate",value:function(e){var t=this.props,n=t.validate,a=t.validationRegex;return n(e)&&a.test(e)}},{key:"_shouldPreventDefaultEventOnAdd",value:function(e,t,n){return!!e||"Enter"===n&&(this.props.preventSubmit||!this.props.preventSubmit&&!t)}},{key:"focus",value:function(){this.input&&"function"==typeof this.input.focus&&this.input.focus(),this.handleOnFocus()}},{key:"blur",value:function(){this.input&&"function"==typeof this.input.blur&&this.input.blur(),this.handleOnBlur()}},{key:"accept",value:function(){var e=this.props.preventSubmit,t=this._tag();return(""!==t||!e)&&(t=this._makeTag(t),this._addTags([t]))}},{key:"addTag",value:function(e){return this._addTags([e])}},{key:"clearInput",value:function(){this._clearInput()}},{key:"handlePaste",value:function(e){var t=this,n=this.props,a=n.addOnPaste,i=n.pasteSplit;if(a){e.preventDefault();var r=i(window.clipboardData?window.clipboardData.getData("Text"):e.clipboardData?e.clipboardData.getData("text/plain"):"").map(function(e){return t._makeTag(e)});this._addTags(r)}}},{key:"handleKeyDown",value:function(e){if(!e.defaultPrevented){var t=this.props,n=t.value,a=t.removeKeys,i=t.addKeys,r=""===this._tag(),u=e.keyCode,o=e.key,s=-1!==i.indexOf(u)||-1!==i.indexOf(o),l=-1!==a.indexOf(u)||-1!==a.indexOf(o);if(s){var p=this.accept();this._shouldPreventDefaultEventOnAdd(p,r,o)&&e.preventDefault()}l&&n.length>0&&r&&(e.preventDefault(),this._removeTag(n.length-1))}}},{key:"handleClick",value:function(e){var t=e.target,n=e.target&&e.target.parentElement;(t===this.div||n===this.div)&&this.focus()}},{key:"handleChange",value:function(e){var t=this.props.onChangeInput,n=this.props.inputProps.onChange,a=e.target.value;n&&n(e),this.hasControlledInput()?t(a):this.setState({tag:a})}},{key:"handleOnFocus",value:function(e){var t=this.props.inputProps.onFocus;t&&t(e),this.setState({isFocused:!0})}},{key:"handleOnBlur",value:function(e){var t=this.props.inputProps.onBlur;if(this.setState({isFocused:!1}),null!=e&&(t&&t(e),this.props.addOnBlur&&e.target.value)){var n=this._makeTag(e.target.value);this._addTags([n])}}},{key:"handleRemove",value:function(e){this._removeTag(e)}},{key:"inputProps",value:function(){var e=this.props.inputProps,t=o({},l,(e.onChange,e.onFocus,e.onBlur,s(e,["onChange","onFocus","onBlur"])));return this.props.disabled&&(t.disabled=!0),t}},{key:"inputValue",value:function(e){return e.currentValue||e.inputValue||""}},{key:"hasControlledInput",value:function(){var e=this.props,t=e.inputValue;return"function"==typeof e.onChangeInput&&"string"==typeof t}},{key:"componentDidMount",value:function(){this.hasControlledInput()||this.setState({tag:this.inputValue(this.props)})}},{key:"componentDidUpdate",value:function(e){!this.hasControlledInput()&&this.inputValue(this.props)&&this.inputValue(e)!==this.inputValue(this.props)&&this.setState({tag:this.inputValue(this.props)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,a=t.tagProps,r=t.renderLayout,u=t.renderTag,s=t.renderInput,l=t.className,p=t.focusedClassName,c=t.disabled,d=this.state.isFocused,h=n.map(function(t,n){return u(o({key:n,tag:t,onRemove:e.handleRemove.bind(e),disabled:c,getTagDisplayValue:e._getTagDisplayValue.bind(e)},a))}),f=s(o({ref:function(t){e.input=t},value:this._tag(),onPaste:this.handlePaste.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onFocus:this.handleOnFocus.bind(this),onBlur:this.handleOnBlur.bind(this),addTag:this.addTag.bind(this)},this.inputProps()));return i.default.createElement("div",{ref:function(t){e.div=t},onClick:this.handleClick.bind(this),className:l+(d?" "+p:"")},r(h,f))}}]),t}(i.default.Component);p.defaultProps={className:"react-tagsinput",focusedClassName:"react-tagsinput--focused",addKeys:["Tab","Enter"],addOnBlur:!1,addOnPaste:!1,inputProps:{},removeKeys:["Backspace"],renderInput:function(e){e.addTag;var t=s(e,["addTag"]),n=t.onChange,a=t.value,r=s(t,["onChange","value"]);return i.default.createElement("input",o({type:"text",onChange:n,value:a},r))},renderTag:function(e){var t=e.tag,n=e.key,a=e.disabled,r=e.onRemove,u=e.classNameRemove,l=e.getTagDisplayValue,p=s(e,["tag","key","disabled","onRemove","classNameRemove","getTagDisplayValue"]);return i.default.createElement("span",o({key:n},p),l(t),!a&&i.default.createElement("a",{className:u,onClick:function(e){return r(n)}}))},renderLayout:function(e,t){return i.default.createElement("span",null,e,t)},pasteSplit:function(e){return e.split(" ").map(function(e){return e.trim()})},tagProps:{className:"react-tagsinput-tag",classNameRemove:"react-tagsinput-remove"},onlyUnique:!1,maxTags:-1,validate:function(){return!0},validationRegex:/.*/,disabled:!1,tagDisplayProp:null,preventSubmit:!0},t.default=p,e.exports=t.default},a=[t,n(17577),n(78439)],void 0!==(i=r.apply(t,a))&&(e.exports=i)},77021:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(10326),i=n(17577);n(45735);let r=({value:e,onChange:t})=>{let n=(0,i.useRef)(null);return(0,i.useRef)(null),(0,i.useEffect)(()=>{},[e,t]),a.jsx("div",{ref:n,style:{height:"400px",direction:"ltr"}})}},45735:()=>{},61121:()=>{}};