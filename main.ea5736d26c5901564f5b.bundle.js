(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(12),__webpack_require__(17),__webpack_require__(18),__webpack_require__(13),__webpack_require__(589),__webpack_require__(14),__webpack_require__(122),__webpack_require__(1),__webpack_require__(123),__webpack_require__(124),__webpack_require__(11),__webpack_require__(19),__webpack_require__(20);var react=__webpack_require__(0),getCanvasContext=function(canvasDomElement){var dpr=window.devicePixelRatio||1,rect=canvasDomElement.getBoundingClientRect();canvasDomElement.width=rect.width*dpr,canvasDomElement.height=rect.height*dpr;var ctx=canvasDomElement.getContext("2d");return ctx.scale(dpr,dpr),ctx},degToRad=function(degree){return Math.PI/180*(degree-90)},drawSegment=function(ctx,x,y,radius,startDegree,endDegree){ctx.beginPath(),ctx.moveTo(x,y),ctx.arc(x,y,radius,degToRad(startDegree),degToRad(endDegree),!1),ctx.lineTo(x,y)},drawStrokeSegment=function(ctx,x,y,startDeg,endDeg,innerRadius,outerRadius,fill){var lineWidth=outerRadius-innerRadius;ctx.beginPath(),ctx.strokeStyle=fill,ctx.lineWidth=lineWidth,ctx.arc(x,y,outerRadius-lineWidth/2,degToRad(startDeg),degToRad(endDeg)),ctx.stroke()};function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,"a",(function(){return renderers_CanvasRenderer}));var renderers_CanvasRenderer=function(_React$Component){function CanvasRenderer(){var _getPrototypeOf2,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CanvasRenderer);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,(_getPrototypeOf2=_getPrototypeOf(CanvasRenderer)).call.apply(_getPrototypeOf2,[this].concat(args))),_defineProperty(_assertThisInitialized(_this),"ctx",void 0),_defineProperty(_assertThisInitialized(_this),"canvas",void 0),_defineProperty(_assertThisInitialized(_this),"componentDidMount",(function(){if(null!==_this.canvas){var canvas=_this.canvas;_this.ctx=getCanvasContext(canvas),_this.draw(canvas)}})),_defineProperty(_assertThisInitialized(_this),"componentDidUpdate",(function(){null!==_this.canvas&&_this.draw(_this.canvas)})),_defineProperty(_assertThisInitialized(_this),"draw",(function(canvasElement){var radius=function(radiusProportion){return Math.min(width,height)/2*radiusProportion},rect=canvasElement.getBoundingClientRect(),width=rect.width,height=rect.height,x=.5*width,y=.5*height,ringInner=(radius(_this.props.ringThickness),radius(1-_this.props.ringThickness)),ringOuter=radius(1),step=Math.floor(_this.props.steps*_this.props.proportion);if(_this.ctx.clearRect(0,0,width,height),!1===_this.props.backgroundTransparent&&(drawSegment(_this.ctx,x,y,ringOuter,0,360),_this.ctx.fillStyle=_this.props.backgroundColour,_this.ctx.fill()),_this.props.segmented)for(var i=0;i<_this.props.steps;i++){var startAngle=i/_this.props.steps*360,endAngle=(i+1)/_this.props.steps*360,strokeStyle=i<step?_this.props.ringFgColour:_this.props.ringBgColour;drawStrokeSegment(_this.ctx,x,y,startAngle+_this.props.segmentGap/2,endAngle-_this.props.segmentGap/2,ringInner,ringOuter,strokeStyle)}else{var _endAngle=step/_this.props.steps*360;drawStrokeSegment(_this.ctx,x,y,0,360,ringInner,ringOuter,_this.props.ringBgColour),drawStrokeSegment(_this.ctx,x,y,0,_endAngle,ringInner,ringOuter,_this.props.ringFgColour)}if(!0===_this.props.showIntermediateProgress){var total=360,segmentOffset=0;!0===_this.props.segmented&&(total=360-_this.props.steps*_this.props.segmentGap,segmentOffset=step*_this.props.segmentGap+_this.props.segmentGap/2);var _startAngle=step/_this.props.steps*total,_endAngle2=total*_this.props.proportion;drawStrokeSegment(_this.ctx,x,y,_startAngle+segmentOffset,_endAngle2+segmentOffset,ringInner,ringOuter,_this.props.ringIntermediateColour)}})),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(CanvasRenderer,_React$Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(CanvasRenderer,[{key:"render",value:function render(){var _this2=this;return react.createElement("canvas",{ref:function ref(_ref){return _this2.canvas=_ref},style:{width:"100%",height:"100%"}})}}]),CanvasRenderer}(react.Component);renderers_CanvasRenderer.displayName="CanvasRenderer",_defineProperty(renderers_CanvasRenderer,"defaultProps",{backgroundColour:"#fff",backgroundTransparent:!0,proportion:0,ringBgColour:"#ccc",ringFgColour:"#3c763d",ringIntermediateColour:"#aaa",ringThickness:.2,showIntermediateProgress:!1,segmented:!0,segmentGap:2,steps:360}),renderers_CanvasRenderer.__docgenInfo={description:"",methods:[{name:"componentDidMount",docblock:null,modifiers:[],params:[],returns:null},{name:"componentDidUpdate",docblock:null,modifiers:[],params:[],returns:null},{name:"draw",docblock:null,modifiers:[],params:[{name:"canvasElement",type:{name:"HTMLCanvasElement",alias:"HTMLCanvasElement"}}],returns:null}],displayName:"CanvasRenderer",props:{backgroundColour:{defaultValue:{value:"'#fff'",computed:!1},required:!1,flowType:{name:"union",raw:"string | CanvasGradient | CanvasPattern",elements:[{name:"string"},{name:"CanvasGradient"},{name:"CanvasPattern"}]},description:"The colour for the centre of the ring"},backgroundTransparent:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:"Whether to display the centre of the ring as transparent"},proportion:{defaultValue:{value:"0",computed:!1},required:!1,flowType:{name:"number"},description:"The proportion of progress"},ringBgColour:{defaultValue:{value:"'#ccc'",computed:!1},required:!1,flowType:{name:"union",raw:"string | CanvasGradient | CanvasPattern",elements:[{name:"string"},{name:"CanvasGradient"},{name:"CanvasPattern"}]},description:"The colour of the uncompleted steps of the ring"},ringFgColour:{defaultValue:{value:"'#3c763d'",computed:!1},required:!1,flowType:{name:"union",raw:"string | CanvasGradient | CanvasPattern",elements:[{name:"string"},{name:"CanvasGradient"},{name:"CanvasPattern"}]},description:"The colour of the completed steps of the ring"},ringIntermediateColour:{defaultValue:{value:"'#aaa'",computed:!1},required:!1,flowType:{name:"union",raw:"string | CanvasGradient | CanvasPattern",elements:[{name:"string"},{name:"CanvasGradient"},{name:"CanvasPattern"}]},description:"The colour of the 'intermediate' progress indicator that travels around the ring"},ringThickness:{defaultValue:{value:"0.2",computed:!1},required:!1,flowType:{name:"number"},description:"The thickness of the progress ring, expressed as a proportion (0.0 to 1.0) of the radius of the ring"},showIntermediateProgress:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"Whether to display the 'intermediate' progress bar"},segmented:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:"Whether to show a gap between segments"},segmentGap:{defaultValue:{value:"2",computed:!1},required:!1,flowType:{name:"number"},description:"The width of the gap between segments, in degrees"},steps:{defaultValue:{value:"360",computed:!1},required:!1,flowType:{name:"number"},description:"The total number of steps to complete the ring"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/renderers/index.js"]={name:"CanvasRenderer",docgenInfo:renderers_CanvasRenderer.__docgenInfo,path:"src/renderers/index.js"})},21:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return RadialProgress}));__webpack_require__(12),__webpack_require__(17),__webpack_require__(18),__webpack_require__(13),__webpack_require__(14),__webpack_require__(588),__webpack_require__(40),__webpack_require__(160),__webpack_require__(122),__webpack_require__(1),__webpack_require__(123),__webpack_require__(124),__webpack_require__(11),__webpack_require__(19),__webpack_require__(20);var react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(0),_renderers___WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(133);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var RadialProgress=function(_React$Component){function RadialProgress(){var _getPrototypeOf2,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,RadialProgress);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,(_getPrototypeOf2=_getPrototypeOf(RadialProgress)).call.apply(_getPrototypeOf2,[this].concat(args))),_defineProperty(_assertThisInitialized(_this),"state",{startTime:Date.now(),duration:null,proportion:null}),_defineProperty(_assertThisInitialized(_this),"_isMounted",!1),_defineProperty(_assertThisInitialized(_this),"raf",void 0),_defineProperty(_assertThisInitialized(_this),"graphic",void 0),_defineProperty(_assertThisInitialized(_this),"componentDidMount",(function(){_this.isMounted=!0,_this.raf=window.requestAnimationFrame.bind(window),_this.startAnimating()})),_defineProperty(_assertThisInitialized(_this),"getDuration",(function(){return Math.abs(_this.props.startStep-_this.props.step)/_this.props.steps*_this.props.duration})),_defineProperty(_assertThisInitialized(_this),"getProportion",(function(){var duration=_this.getDuration();return 0==duration?1:Math.min(Date.now()-_this.state.startTime,duration)/duration})),_defineProperty(_assertThisInitialized(_this),"animate",(function(){if(_this.isMounted){var proportion=_this.getProportion();_this.setState({proportion:proportion}),1>proportion&&_this.raf((function(){_this.animate()}))}})),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(RadialProgress,_React$Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(RadialProgress,[{key:"componentWillUnmount",value:function componentWillUnmount(){this.isMounted=!1,this.cancelAnimating()}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(nextProps){return(nextProps.startStep!==this.props.startStep||nextProps.step!==this.props.step)&&this.startAnimating(),!0}},{key:"startAnimating",value:function startAnimating(){var _this2=this;this.setState({proportion:null,startTime:Date.now()}),this.raf((function(){_this2.animate()}))}},{key:"cancelAnimating",value:function cancelAnimating(){window.cancelAnimationFrame(this.raf)}},{key:"render",value:function render(){var _this3=this,startProportion=this.props.startStep/this.props.steps,endProportion=this.props.step/this.props.steps,proportion=startProportion+(endProportion-startProportion)*this.getProportion();return react__WEBPACK_IMPORTED_MODULE_15__.createElement("div",{className:"RadialProgressIndicator",style:{position:"relative",width:this.props.width,height:this.props.height,display:"flex",justifyContent:"center",alignItems:"center"}},react__WEBPACK_IMPORTED_MODULE_15__.createElement(_renderers___WEBPACK_IMPORTED_MODULE_16__.a,{ref:function ref(_ref3){return _this3.graphic=_ref3},proportion:proportion,showIntermediateProgress:this.props.showIntermediateProgress,segmented:this.props.segmented,steps:this.props.steps,ringThickness:this.props.ringThickness,ringBgColour:this.props.ringBgColour,ringFgColour:this.props.ringFgColour,ringIntermediateColour:this.props.ringIntermediateColour,backgroundColour:this.props.backgroundColour,backgroundTransparent:this.props.backgroundTransparent}),function label(steps,proportion){if(_this3.graphic&&_this3.graphic.canvas){var rect=_this3.graphic.canvas.getBoundingClientRect(),diameter=Math.min(rect.height,rect.width),style={position:"absolute",textAlign:"center",color:_this3.props.ringFgColour,fontSize:"".concat(diameter/4,"px")};return react__WEBPACK_IMPORTED_MODULE_15__.createElement("div",{className:"RadialProgressIndicator__label",style:style},_this3.props.text(steps,proportion))}return null}(this.props.steps,proportion))}},{key:"isMounted",get:function get(){return this._isMounted},set:function set(value){this._isMounted=value}}]),RadialProgress}(react__WEBPACK_IMPORTED_MODULE_15__.Component);RadialProgress.displayName="RadialProgress",_defineProperty(RadialProgress,"defaultProps",{width:100,height:100,steps:10,step:10,startStep:0,duration:5e3,ringThickness:.2,ringBgColour:"#ccc",ringFgColour:"#3c763d",ringIntermediateColour:"#aaa",backgroundColour:"#dff0d8",backgroundTransparent:!0,showIntermediateProgress:!1,segmented:!0,text:function text(steps,proportion){var step=Math.floor(steps*proportion);return"".concat(step,"/").concat(steps)}}),RadialProgress.__docgenInfo={description:"",methods:[{name:"isMounted",docblock:null,modifiers:["get"],params:[],returns:null},{name:"isMounted",docblock:null,modifiers:["set"],params:[{name:"value",type:{name:"boolean"}}],returns:null},{name:"componentDidMount",docblock:null,modifiers:[],params:[],returns:null},{name:"startAnimating",docblock:null,modifiers:[],params:[],returns:null},{name:"cancelAnimating",docblock:null,modifiers:[],params:[],returns:null},{name:"getDuration",docblock:null,modifiers:[],params:[],returns:null},{name:"getProportion",docblock:null,modifiers:[],params:[],returns:null},{name:"animate",docblock:null,modifiers:[],params:[],returns:null}],displayName:"RadialProgress",props:{width:{defaultValue:{value:"100",computed:!1},required:!1,flowType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The CSS width of the element"},height:{defaultValue:{value:"100",computed:!1},required:!1,flowType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The CSS height of the element"},steps:{defaultValue:{value:"10",computed:!1},required:!1,flowType:{name:"number"},description:"The total number of steps to complete the ring"},step:{defaultValue:{value:"10",computed:!1},required:!1,flowType:{name:"number"},description:"The current step"},startStep:{defaultValue:{value:"0",computed:!1},required:!1,flowType:{name:"number"},description:"Start animating from this step, to the current step"},duration:{defaultValue:{value:"5000",computed:!1},required:!1,flowType:{name:"number"},description:"The time in milliseconds to complete an animation of all steps in the ring"},ringThickness:{defaultValue:{value:"0.2",computed:!1},required:!1,flowType:{name:"number"},description:"The thickness of the progress ring, expressed as a proportion (0.0 to 1.0) of the radius of the ring"},ringBgColour:{defaultValue:{value:"'#ccc'",computed:!1},required:!1,flowType:{name:"union",raw:"string | CanvasGradient | CanvasPattern",elements:[{name:"string"},{name:"CanvasGradient"},{name:"CanvasPattern"}]},description:"The colour of the uncompleted steps of the ring"},ringFgColour:{defaultValue:{value:"'#3c763d'",computed:!1},required:!1,flowType:{name:"union",raw:"string | CanvasGradient | CanvasPattern",elements:[{name:"string"},{name:"CanvasGradient"},{name:"CanvasPattern"}]},description:"The colour of the completed steps of the ring"},ringIntermediateColour:{defaultValue:{value:"'#aaa'",computed:!1},required:!1,flowType:{name:"union",raw:"string | CanvasGradient | CanvasPattern",elements:[{name:"string"},{name:"CanvasGradient"},{name:"CanvasPattern"}]},description:"The colour of the 'intermediate' progress indicator that travels around the ring"},backgroundColour:{defaultValue:{value:"'#dff0d8'",computed:!1},required:!1,flowType:{name:"union",raw:"string | CanvasGradient | CanvasPattern",elements:[{name:"string"},{name:"CanvasGradient"},{name:"CanvasPattern"}]},description:"The colour for the centre of the ring"},backgroundTransparent:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:"Whether to display the centre of the ring as transparent"},showIntermediateProgress:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"Whether to display the 'intermediate' progress bar"},segmented:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:"Whether to segment the steps by displaying a gap between them"},text:{defaultValue:{value:"(steps: number, proportion: number) => {\n  const step = Math.floor(steps * proportion);\n  return `${step}/${steps}`;\n}",computed:!1},required:!1,flowType:{name:"signature",type:"function",raw:"(steps: number, proportion: number) => React.Node",signature:{arguments:[{name:"steps",type:{name:"number"}},{name:"proportion",type:{name:"number"}}],return:{name:"ReactNode",raw:"React.Node"}}},description:"A function that returns the content that is displayed in the centre of the ring"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.js"]={name:"RadialProgress",docgenInfo:RadialProgress.__docgenInfo,path:"src/index.js"})},274:function(module,exports,__webpack_require__){__webpack_require__(275),__webpack_require__(384),module.exports=__webpack_require__(385)},296:function(module,exports){},385:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(580),__webpack_require__(591)}),module)}.call(this,__webpack_require__(150)(module))},580:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(82),__webpack_require__(62),__webpack_require__(581);var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(65),storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(132),_src__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(21),stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("RadialProgress",module);stories.addDecorator(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_5__.jsxDecorator),stories.addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{textAlign:"center",fontFamily:"Helvetica, sans-serif"}},story())}));var _ref=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{startStep:3,step:3,steps:10,width:200,height:200}),_ref2=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{startStep:3,step:3,steps:10,width:200,height:200,ringThickness:.05}),_ref3=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{startStep:3,step:3,steps:10,width:200,height:200,ringThickness:.3}),_ref4=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{startStep:3,step:5,steps:10,width:200,height:200,showIntermediateProgress:!0}),_ref5=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{startStep:5,step:3,steps:10,width:200,height:200,showIntermediateProgress:!0}),_ref6=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{steps:5,step:5,width:200,height:200,duration:1e3,showIntermediateProgress:!0}),_ref7=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{steps:5,step:5,width:200,height:200,duration:1e4,showIntermediateProgress:!0}),_ref8=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{step:10,steps:10,width:"100%",height:"100%"});stories.add("At 3/10",(function(){return _ref})).add("At 3/10, thin ring",(function(){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{fontWeight:100}},_ref2)})).add("At 3/10, thick ring",(function(){return _ref3})).add("From 3/10 to 5/10",(function(){return _ref4})).add("From 5/10 to 3/10",(function(){return _ref5})).add("Step or sweep",(function(){var _float=function(jsx){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{float:"left",margin:10}},jsx)};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null,_float(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{steps:20,step:20,width:200,height:200,text:function text(steps,percentage){return Math.floor(steps*percentage)},duration:1e4,ringFgColour:"#666666",ringIntermediateColour:"#666666",segmented:!0})),_float(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{steps:20,step:20,width:200,height:200,segmented:!1,text:function text(steps,percentage){return(Math.floor(steps*percentage*10)/10).toFixed(1)},duration:1e4,ringFgColour:"#666666",ringIntermediateColour:"#666666",showIntermediateProgress:!0})))})).add("5 steps, fast duration",(function(){return _ref6})).add("5 steps, slow duration",(function(){return _ref7})).add("Custom text",(function(){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{steps:5,step:5,width:200,height:200,showIntermediateProgress:!0,text:function text(steps,proportion){return"".concat(Math.floor(100*proportion),"%")}})})).add("Small, with custom text",(function(){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{fontWeight:"bold"}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{steps:6,step:6,width:48,height:48,ringThickness:.4,showIntermediateProgress:!0,text:function text(steps,proportion){return"".concat(Math.floor(steps*proportion))}}))})).add("Sized to fit container",(function(){var progress=_ref8;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{float:"left",backgroundColor:"#eee",margin:5,width:50,height:200}},progress),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{float:"left",backgroundColor:"#eee",margin:5,width:100,height:200}},progress),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{float:"left",backgroundColor:"#eee",margin:5,width:200,height:200}},progress),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{float:"left",backgroundColor:"#eee",margin:5,width:200,height:100}},progress))})).add("Colours",(function(){return[{name:"option-1",ringBgColour:"#EDCA8A",ringFgColour:"#674509",ringIntermediateColour:"#AA8239",backgroundColour:"#FFE0A9",pageBackgroundColour:"#FFE0A9"},{name:"option-2",ringBgColour:"#ffffff",ringFgColour:"#639A88",ringIntermediateColour:"#91CC7A",backgroundColour:"#eeeeee",pageBackgroundColour:"#eeeeee"},{name:"option-3",ringBgColour:"#7C90A0",ringFgColour:"#B5AA9D",ringIntermediateColour:"#B9B7A7",backgroundColour:"#747274",pageBackgroundColour:"#747274"}].map((function(scheme){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{key:scheme.name,style:{float:"left",width:100,height:100,padding:15,margin:5,backgroundColor:scheme.pageBackgroundColour}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_6__.a,{step:10,steps:10,width:"100%",height:"100%",ringBgColour:scheme.ringBgColour,ringFgColour:scheme.ringFgColour,ringIntermediateColour:scheme.ringIntermediateColour,backgroundColour:scheme.backgroundColour,backgroundTransparent:!1,showIntermediateProgress:!0,segmented:!1}))}))}))}.call(this,__webpack_require__(150)(module))},591:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32),storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(132),_src_renderers___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(133);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("CanvasRenderer",module).addDecorator(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_3__.jsxDecorator).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("The kitchen sink",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:200,height:200}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_renderers___WEBPACK_IMPORTED_MODULE_4__.a,{steps:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("steps",10,{range:!0,min:5,max:12,step:1},"Progress display options"),proportion:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("proportion",.55,{range:!0,min:0,max:1,step:.002},"Progress display options"),showIntermediateProgress:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("showIntermediateProgress",!0,"Progress display options"),segmented:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("segmented",!0,"Display options"),ringBgColour:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.color)("ringBgColour","#ccc","Colour options"),ringIntermediateColour:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.color)("ringIntermediateColour","#aaa","Colour options"),ringFgColour:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.color)("ringFgColour","#000","Colour options"),backgroundColour:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.color)("backgroundColour","#fff","Colour options"),backgroundTransparent:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("backgroundTransparent",!0,"Colour options"),ringThickness:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("ringThickness",.2,{range:!0,min:0,max:.5,step:.01},"Display options")}))}),{backgrounds:[{name:"white",value:"#fff",default:!0},{name:"blue",value:"#ccf"},{name:"black",value:"#000"}]})}.call(this,__webpack_require__(150)(module))}},[[274,1,2]]]);
//# sourceMappingURL=main.ea5736d26c5901564f5b.bundle.js.map