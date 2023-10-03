"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[6034],{"./packages/a11y/build-module/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return speak}});var build_module=__webpack_require__("./packages/i18n/build-module/index.js");function addContainer(ariaLive="polite"){const container=document.createElement("div");container.id=`a11y-speak-${ariaLive}`,container.className="a11y-speak-region",container.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),container.setAttribute("aria-live",ariaLive),container.setAttribute("aria-relevant","additions text"),container.setAttribute("aria-atomic","true");const{body:body}=document;return body&&body.appendChild(container),container}let previousMessage="";function speak(message,ariaLive){!function clear(){const regions=document.getElementsByClassName("a11y-speak-region"),introText=document.getElementById("a11y-speak-intro-text");for(let i=0;i<regions.length;i++)regions[i].textContent="";introText&&introText.setAttribute("hidden","hidden")}(),message=function filterMessage(message){return message=message.replace(/<[^<>]+>/g," "),previousMessage===message&&(message+=" "),previousMessage=message,message}(message);const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");containerAssertive&&"assertive"===ariaLive?containerAssertive.textContent=message:containerPolite&&(containerPolite.textContent=message),introText&&introText.removeAttribute("hidden")}!function domReady(callback){"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",callback):callback())}((function setup(){const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");null===introText&&function addIntroText(){const introText=document.createElement("p");introText.id="a11y-speak-intro-text",introText.className="a11y-speak-intro-text",introText.textContent=(0,build_module.__)("Notifications"),introText.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),introText.setAttribute("hidden","hidden");const{body:body}=document;return body&&body.appendChild(introText),introText}(),null===containerAssertive&&addContainer("assertive"),null===containerPolite&&addContainer("polite")}))},"./packages/components/build-module/popover/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_X:function(){return SLOT_NAME},ZP:function(){return popover}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),floating_ui_core=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_react_dom_esm=__webpack_require__("./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),use_reduced_motion=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs"),motion=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/render/dom/motion.mjs"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),use_viewport_match=__webpack_require__("./packages/compose/build-module/hooks/use-viewport-match/index.js"),use_dialog=__webpack_require__("./packages/compose/build-module/hooks/use-dialog/index.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),library_close=__webpack_require__("./packages/icons/build-module/library/close.js"),build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),svg=__webpack_require__("./packages/primitives/build-module/svg/index.js"),build_module_button=__webpack_require__("./packages/components/build-module/button/index.js");let previousScrollTop=0;function setLocked(locked){const scrollingElement=document.scrollingElement||document.body;locked&&(previousScrollTop=scrollingElement.scrollTop);const methodName=locked?"add":"remove";scrollingElement.classList[methodName]("lockscroll"),document.documentElement.classList[methodName]("lockscroll"),locked||(scrollingElement.scrollTop=previousScrollTop)}let lockCounter=0;var scroll_lock=function ScrollLock(){return(0,react.useEffect)((()=>(0===lockCounter&&setLocked(!0),++lockCounter,()=>{1===lockCounter&&setLocked(!1),--lockCounter})),[]),null},use_slot=__webpack_require__("./packages/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),slot_fill=__webpack_require__("./packages/components/build-module/slot-fill/index.js"),utils=__webpack_require__("./packages/components/build-module/popover/utils.js");var style_provider=__webpack_require__("./packages/components/build-module/style-provider/index.js");const SLOT_NAME="Popover",ArrowTriangle=()=>(0,react.createElement)(svg.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:"components-popover__triangle",role:"presentation"},(0,react.createElement)(svg.y$,{className:"components-popover__triangle-bg",d:"M 0 0 L 50 50 L 100 0"}),(0,react.createElement)(svg.y$,{className:"components-popover__triangle-border",d:"M 0 0 L 50 50 L 100 0",vectorEffect:"non-scaling-stroke"})),slotNameContext=(0,react.createContext)(void 0),UnforwardedPopover=(props,forwardedRef)=>{const{animate:animate=!0,headerTitle:headerTitle,onClose:onClose,children:children,className:className,noArrow:noArrow=!0,position:position,placement:placementProp="bottom-start",offset:offsetProp=0,focusOnMount:focusOnMount="firstElement",anchor:anchor,expandOnMobile:expandOnMobile,onFocusOutside:onFocusOutside,__unstableSlotName:__unstableSlotName=SLOT_NAME,flip:flip=!0,resize:resize=!0,shift:shift=!1,inline:inline=!1,variant:variant,__unstableForcePosition:__unstableForcePosition,anchorRef:anchorRef,anchorRect:anchorRect,getAnchorRect:getAnchorRect,isAlternate:isAlternate,...contentProps}=props;let computedFlipProp=flip,computedResizeProp=resize;void 0!==__unstableForcePosition&&((0,build_module.Z)("`__unstableForcePosition` prop in wp.components.Popover",{since:"6.1",version:"6.3",alternative:"`flip={ false }` and  `resize={ false }`"}),computedFlipProp=!__unstableForcePosition,computedResizeProp=!__unstableForcePosition),void 0!==anchorRef&&(0,build_module.Z)("`anchorRef` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),void 0!==anchorRect&&(0,build_module.Z)("`anchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),void 0!==getAnchorRect&&(0,build_module.Z)("`getAnchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"});const computedVariant=isAlternate?"toolbar":variant;void 0!==isAlternate&&(0,build_module.Z)("`isAlternate` prop in wp.components.Popover",{since:"6.2",alternative:"`variant` prop with the `'toolbar'` value"});const arrowRef=(0,react.useRef)(null),[fallbackReferenceElement,setFallbackReferenceElement]=(0,react.useState)(null),anchorRefFallback=(0,react.useCallback)((node=>{setFallbackReferenceElement(node)}),[]),isMobileViewport=(0,use_viewport_match.Z)("medium","<"),isExpanded=expandOnMobile&&isMobileViewport,hasArrow=!isExpanded&&!noArrow,normalizedPlacementFromProps=position?(0,utils.KF)(position):placementProp,middleware=[..."overlay"===placementProp?[{name:"overlay",fn({rects:rects}){return rects.reference}},(0,floating_ui_core.dp)({apply({rects:rects,elements:elements}){var _elements$floating;const{firstElementChild:firstElementChild}=null!==(_elements$floating=elements.floating)&&void 0!==_elements$floating?_elements$floating:{};firstElementChild instanceof HTMLElement&&Object.assign(firstElementChild.style,{width:`${rects.reference.width}px`,height:`${rects.reference.height}px`})}})]:[],(0,floating_ui_core.cv)(offsetProp),computedFlipProp&&(0,floating_ui_core.RR)(),computedResizeProp&&(0,floating_ui_core.dp)({apply(sizeProps){var _refs$floating$curren;const{firstElementChild:firstElementChild}=null!==(_refs$floating$curren=refs.floating.current)&&void 0!==_refs$floating$curren?_refs$floating$curren:{};firstElementChild instanceof HTMLElement&&Object.assign(firstElementChild.style,{maxHeight:`${sizeProps.availableHeight}px`,overflow:"auto"})}}),shift&&(0,floating_ui_core.uY)({crossAxis:!0,limiter:(0,floating_ui_core.dr)(),padding:1}),(0,floating_ui_react_dom_esm.x7)({element:arrowRef})],slotName=(0,react.useContext)(slotNameContext)||__unstableSlotName,slot=(0,use_slot.Z)(slotName);let onDialogClose;(onClose||onFocusOutside)&&(onDialogClose=(type,event)=>{"focus-outside"===type&&onFocusOutside?onFocusOutside(event):onClose&&onClose()});const[dialogRef,dialogProps]=(0,use_dialog.Z)({focusOnMount:focusOnMount,__unstableOnClose:onDialogClose,onClose:onDialogClose}),{x:x,y:y,refs:refs,strategy:strategy,update:update,placement:computedPlacement,middlewareData:{arrow:arrowData}}=(0,floating_ui_react_dom_esm.YF)({placement:"overlay"===normalizedPlacementFromProps?void 0:normalizedPlacementFromProps,middleware:middleware,whileElementsMounted:(referenceParam,floatingParam,updateParam)=>(0,floating_ui_dom.Me)(referenceParam,floatingParam,updateParam,{layoutShift:!1,animationFrame:!0})}),arrowCallbackRef=(0,react.useCallback)((node=>{arrowRef.current=node,update()}),[update]),anchorRefTop=anchorRef?.top,anchorRefBottom=anchorRef?.bottom,anchorRefStartContainer=anchorRef?.startContainer,anchorRefCurrent=anchorRef?.current;(0,react.useLayoutEffect)((()=>{const resultingReferenceElement=(0,utils.CK)({anchor:anchor,anchorRef:anchorRef,anchorRect:anchorRect,getAnchorRect:getAnchorRect,fallbackReferenceElement:fallbackReferenceElement});refs.setReference(resultingReferenceElement)}),[anchor,anchorRef,anchorRefTop,anchorRefBottom,anchorRefStartContainer,anchorRefCurrent,anchorRect,getAnchorRect,fallbackReferenceElement,refs]);const mergedFloatingRef=(0,use_merge_refs.Z)([refs.setFloating,dialogRef,forwardedRef]),style=isExpanded?void 0:{position:strategy,top:0,left:0,x:(0,utils.sw)(x),y:(0,utils.sw)(y)},shouldReduceMotion=(0,use_reduced_motion.J)(),shouldAnimate=animate&&!isExpanded&&!shouldReduceMotion,[animationFinished,setAnimationFinished]=(0,react.useState)(!1),{style:motionInlineStyles,...otherMotionProps}=(0,react.useMemo)((()=>(0,utils.d9)(computedPlacement)),[computedPlacement]),animationProps=shouldAnimate?{style:{...motionInlineStyles,...style},onAnimationComplete:()=>setAnimationFinished(!0),...otherMotionProps}:{animate:!1,style:style},isPositioned=(!shouldAnimate||animationFinished)&&null!==x&&null!==y;let content=(0,react.createElement)(motion.E.div,{className:classnames_default()("components-popover",className,{"is-expanded":isExpanded,"is-positioned":isPositioned,[`is-${"toolbar"===computedVariant?"alternate":computedVariant}`]:computedVariant}),...animationProps,...contentProps,ref:mergedFloatingRef,...dialogProps,tabIndex:-1},isExpanded&&(0,react.createElement)(scroll_lock,null),isExpanded&&(0,react.createElement)("div",{className:"components-popover__header"},(0,react.createElement)("span",{className:"components-popover__header-title"},headerTitle),(0,react.createElement)(build_module_button.ZP,{className:"components-popover__close",icon:library_close.Z,onClick:onClose})),(0,react.createElement)("div",{className:"components-popover__content"},children),hasArrow&&(0,react.createElement)("div",{ref:arrowCallbackRef,className:["components-popover__arrow",`is-${computedPlacement.split("-")[0]}`].join(" "),style:{left:void 0!==arrowData?.x&&Number.isFinite(arrowData.x)?`${arrowData.x}px`:"",top:void 0!==arrowData?.y&&Number.isFinite(arrowData.y)?`${arrowData.y}px`:""}},(0,react.createElement)(ArrowTriangle,null)));const shouldRenderWithinSlot=slot.ref&&!inline,hasAnchor=anchorRef||anchorRect||anchor;return shouldRenderWithinSlot?content=(0,react.createElement)(slot_fill.de,{name:slotName},content):inline||(content=(0,react_dom.createPortal)((0,react.createElement)(style_provider.V,{document:document},content),(()=>{let container=document.body.querySelector(".components-popover__fallback-container");return container||(container=document.createElement("div"),container.className="components-popover__fallback-container",document.body.append(container)),container})())),hasAnchor?content:(0,react.createElement)(react.Fragment,null,(0,react.createElement)("span",{ref:anchorRefFallback}),content)},Popover=(0,react.forwardRef)(UnforwardedPopover);Popover.Slot=(0,react.forwardRef)((function PopoverSlot({name:name=SLOT_NAME},ref){return(0,react.createElement)(slot_fill.g7,{bubblesVirtually:!0,name:name,className:"popover-slot",ref:ref})})),Popover.__unstableSlotNameProvider=slotNameContext.Provider;var popover=Popover;UnforwardedPopover.__docgenInfo={description:"",methods:[],displayName:"UnforwardedPopover"}},"./packages/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var valtio_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/valtio/esm/utils.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/warning/build-module/index.js");const initialContextValue={slots:(0,valtio_utils__WEBPACK_IMPORTED_MODULE_0__.Yr)(),fills:(0,valtio_utils__WEBPACK_IMPORTED_MODULE_0__.Yr)(),registerSlot:()=>{"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__.Z)("Components must be wrapped within `SlotFillProvider`. See https://developer.wordpress.org/block-editor/components/slot-fill/")},updateSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},isDefault:!0},SlotFillContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialContextValue);__webpack_exports__.Z=SlotFillContext},"./packages/components/build-module/slot-fill/bubbles-virtually/use-slot.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useSlot}});var valtio__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/valtio/esm/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_slot_fill_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function useSlot(name){const registry=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_slot_fill_context__WEBPACK_IMPORTED_MODULE_1__.Z);return{...(0,valtio__WEBPACK_IMPORTED_MODULE_2__.RK)(registry.slots,{sync:!0}).get(name),...(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({updateSlot:fillProps=>registry.updateSlot(name,fillProps),unregisterSlot:ref=>registry.unregisterSlot(name,ref),registerFill:ref=>registry.registerFill(name,ref),unregisterFill:ref=>registry.unregisterFill(name,ref)})),[name,registry])}}},"./packages/components/build-module/slot-fill/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{de:function(){return slot_fill_Fill},zt:function(){return Provider},g7:function(){return slot_fill_Slot},Es:function(){return createPrivateSlotFill},up:function(){return createSlotFill}});var react=__webpack_require__("./node_modules/react/index.js");const initialValue={registerSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},getSlot:()=>{},getFills:()=>[],subscribe:()=>()=>{}};var context=(0,react.createContext)(initialValue);var use_slot=name=>{const{getSlot:getSlot,subscribe:subscribe}=(0,react.useContext)(context);return(0,react.useSyncExternalStore)(subscribe,(()=>getSlot(name)),(()=>getSlot(name)))};function Fill({name:name,children:children}){const{registerFill:registerFill,unregisterFill:unregisterFill}=(0,react.useContext)(context),slot=use_slot(name),ref=(0,react.useRef)({name:name,children:children});return(0,react.useLayoutEffect)((()=>{const refValue=ref.current;return registerFill(name,refValue),()=>unregisterFill(name,refValue)}),[]),(0,react.useLayoutEffect)((()=>{ref.current.children=children,slot&&slot.forceUpdate()}),[children]),(0,react.useLayoutEffect)((()=>{name!==ref.current.name&&(unregisterFill(ref.current.name,ref.current),ref.current.name=name,registerFill(name,ref.current))}),[name]),null}var utils=__webpack_require__("./packages/element/build-module/utils.js");function isFunction(maybeFunc){return"function"==typeof maybeFunc}class SlotComponent extends react.Component{constructor(props){super(props),this.isUnmounted=!1}componentDidMount(){const{registerSlot:registerSlot}=this.props;this.isUnmounted=!1,registerSlot(this.props.name,this)}componentWillUnmount(){const{unregisterSlot:unregisterSlot}=this.props;this.isUnmounted=!0,unregisterSlot(this.props.name,this)}componentDidUpdate(prevProps){const{name:name,unregisterSlot:unregisterSlot,registerSlot:registerSlot}=this.props;prevProps.name!==name&&(unregisterSlot(prevProps.name,this),registerSlot(name,this))}forceUpdate(){this.isUnmounted||super.forceUpdate()}render(){var _getFills;const{children:children,name:name,fillProps:fillProps={},getFills:getFills}=this.props,fills=(null!==(_getFills=getFills(name,this))&&void 0!==_getFills?_getFills:[]).map((fill=>{const fillChildren=isFunction(fill.children)?fill.children(fillProps):fill.children;return react.Children.map(fillChildren,((child,childIndex)=>{if(!child||"string"==typeof child)return child;let childKey=childIndex;return"object"==typeof child&&"key"in child&&child?.key&&(childKey=child.key),(0,react.cloneElement)(child,{key:childKey})}))})).filter((element=>!(0,utils.V)(element)));return(0,react.createElement)(react.Fragment,null,isFunction(children)?children(fills):fills)}}SlotComponent.displayName="SlotComponent";const Slot=props=>(0,react.createElement)(context.Consumer,null,(({registerSlot:registerSlot,unregisterSlot:unregisterSlot,getFills:getFills})=>(0,react.createElement)(SlotComponent,{...props,registerSlot:registerSlot,unregisterSlot:unregisterSlot,getFills:getFills})));Slot.__docgenInfo={description:"",methods:[],displayName:"Slot"};var slot=Slot,react_dom=__webpack_require__("./node_modules/react-dom/index.js"),bubbles_virtually_use_slot=__webpack_require__("./packages/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),style_provider=__webpack_require__("./packages/components/build-module/style-provider/index.js");function fill_Fill(props){var _slot$fillProps;const{name:name,children:children}=props,{registerFill:registerFill,unregisterFill:unregisterFill,...slot}=(0,bubbles_virtually_use_slot.Z)(name),rerender=function useForceUpdate(){const[,setState]=(0,react.useState)({}),mounted=(0,react.useRef)(!0);return(0,react.useEffect)((()=>(mounted.current=!0,()=>{mounted.current=!1})),[]),()=>{mounted.current&&setState({})}}(),ref=(0,react.useRef)({rerender:rerender});if((0,react.useEffect)((()=>(registerFill(ref),()=>{unregisterFill(ref)})),[registerFill,unregisterFill]),!slot.ref||!slot.ref.current)return null;const wrappedChildren=(0,react.createElement)(style_provider.Z,{document:slot.ref.current.ownerDocument},"function"==typeof children?children(null!==(_slot$fillProps=slot.fillProps)&&void 0!==_slot$fillProps?_slot$fillProps:{}):children);return(0,react_dom.createPortal)(wrappedChildren,slot.ref.current)}var use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),slot_fill_context=__webpack_require__("./packages/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function slot_Slot(props,forwardedRef){const{name:name,fillProps:fillProps={},as:as,children:children,...restProps}=props,{registerSlot:registerSlot,unregisterSlot:unregisterSlot,...registry}=(0,react.useContext)(slot_fill_context.Z),ref=(0,react.useRef)(null);return(0,react.useLayoutEffect)((()=>(registerSlot(name,ref,fillProps),()=>{unregisterSlot(name,ref)})),[registerSlot,unregisterSlot,name]),(0,react.useLayoutEffect)((()=>{registry.updateSlot(name,fillProps)})),(0,react.createElement)(component.Z,{as:as,ref:(0,use_merge_refs.Z)([forwardedRef,ref]),...restProps})}slot_Slot.__docgenInfo={description:"",methods:[],displayName:"Slot"};var bubbles_virtually_slot=(0,react.forwardRef)(slot_Slot),vanilla=__webpack_require__("./node_modules/valtio/esm/vanilla.js"),esm_utils=__webpack_require__("./node_modules/valtio/esm/utils.js"),build_module=__webpack_require__("./packages/is-shallow-equal/build-module/index.js");function createSlotRegistry(){const slots=(0,esm_utils.Yr)(),fills=(0,esm_utils.Yr)();return{slots:slots,fills:fills,registerSlot:(name,ref,fillProps)=>{const slot=slots.get(name);slots.set(name,(0,vanilla.iH)({...slot,ref:ref||slot?.ref,fillProps:fillProps||slot?.fillProps||{}}))},updateSlot:(name,fillProps)=>{const slot=slots.get(name);if(!slot)return;if((0,build_module.ZP)(slot.fillProps,fillProps))return;slot.fillProps=fillProps;const slotFills=fills.get(name);slotFills&&slotFills.map((fill=>fill.current.rerender()))},unregisterSlot:(name,ref)=>{slots.get(name)?.ref===ref&&slots.delete(name)},registerFill:(name,ref)=>{fills.set(name,(0,vanilla.iH)([...fills.get(name)||[],ref]))},unregisterFill:(name,ref)=>{const fillsForName=fills.get(name);fillsForName&&fills.set(name,(0,vanilla.iH)(fillsForName.filter((fillRef=>fillRef!==ref))))}}}function SlotFillProvider({children:children}){const registry=(0,react.useMemo)(createSlotRegistry,[]);return(0,react.createElement)(slot_fill_context.Z.Provider,{value:registry},children)}function provider_createSlotRegistry(){const slots={},fills={};let listeners=[];function getSlot(name){return slots[name]}function forceUpdateSlot(name){const slot=getSlot(name);slot&&slot.forceUpdate()}function triggerListeners(){listeners.forEach((listener=>listener()))}return{registerSlot:function registerSlot(name,slot){const previousSlot=slots[name];slots[name]=slot,triggerListeners(),forceUpdateSlot(name),previousSlot&&previousSlot.forceUpdate()},unregisterSlot:function unregisterSlot(name,instance){slots[name]===instance&&(delete slots[name],triggerListeners())},registerFill:function registerFill(name,instance){fills[name]=[...fills[name]||[],instance],forceUpdateSlot(name)},unregisterFill:function unregisterFill(name,instance){var _fills$name$filter;fills[name]=null!==(_fills$name$filter=fills[name]?.filter((fill=>fill!==instance)))&&void 0!==_fills$name$filter?_fills$name$filter:[],forceUpdateSlot(name)},getSlot:getSlot,getFills:function getFills(name,slotInstance){return slots[name]!==slotInstance?[]:fills[name]},subscribe:function subscribe(listener){return listeners.push(listener),()=>{listeners=listeners.filter((l=>l!==listener))}}}}function provider_SlotFillProvider({children:children}){const contextValue=(0,react.useMemo)(provider_createSlotRegistry,[]);return(0,react.createElement)(context.Provider,{value:contextValue},children)}SlotFillProvider.__docgenInfo={description:"",methods:[],displayName:"SlotFillProvider"},provider_SlotFillProvider.__docgenInfo={description:"",methods:[],displayName:"SlotFillProvider"};var provider=provider_SlotFillProvider;function slot_fill_Fill(props){return(0,react.createElement)(react.Fragment,null,(0,react.createElement)(Fill,{...props}),(0,react.createElement)(fill_Fill,{...props}))}function UnforwardedSlot(props,ref){const{bubblesVirtually:bubblesVirtually,...restProps}=props;return bubblesVirtually?(0,react.createElement)(bubbles_virtually_slot,{...restProps,ref:ref}):(0,react.createElement)(slot,{...restProps})}const slot_fill_Slot=(0,react.forwardRef)(UnforwardedSlot);function Provider({children:children}){return(0,react.useContext)(slot_fill_context.Z).isDefault?(0,react.createElement)(provider,null,(0,react.createElement)(SlotFillProvider,null,children)):(0,react.createElement)(react.Fragment,null,children)}function createSlotFill(key){const baseName="symbol"==typeof key?key.description:key,FillComponent=props=>(0,react.createElement)(slot_fill_Fill,{name:key,...props});FillComponent.displayName=`${baseName}Fill`;const SlotComponent=props=>(0,react.createElement)(slot_fill_Slot,{name:key,...props});return SlotComponent.displayName=`${baseName}Slot`,SlotComponent.__unstableName=key,{Fill:FillComponent,Slot:SlotComponent}}const createPrivateSlotFill=name=>{const privateKey=Symbol(name);return{privateKey:privateKey,...createSlotFill(privateKey)}};slot_fill_Fill.__docgenInfo={description:"",methods:[],displayName:"Fill"},UnforwardedSlot.__docgenInfo={description:"",methods:[],displayName:"UnforwardedSlot"},Provider.__docgenInfo={description:"",methods:[],displayName:"Provider"}},"./packages/components/build-module/style-provider/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return StyleProvider}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-699e6908.browser.esm.js"),_emotion_cache__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),uuid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/uuid/dist/esm-browser/v4.js");const uuidCache=new Set,containerCacheMap=new WeakMap,memoizedCreateCacheWithContainer=container=>{if(containerCacheMap.has(container))return containerCacheMap.get(container);let key=uuid__WEBPACK_IMPORTED_MODULE_2__.Z().replace(/[0-9]/g,"");for(;uuidCache.has(key);)key=uuid__WEBPACK_IMPORTED_MODULE_2__.Z().replace(/[0-9]/g,"");uuidCache.add(key);const cache=(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__.Z)({container:container,key:key});return containerCacheMap.set(container,cache),cache};function StyleProvider(props){const{children:children,document:document}=props;if(!document)return null;const cache=memoizedCreateCacheWithContainer(document.head);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.C,{value:cache},children)}StyleProvider.__docgenInfo={description:"",methods:[],displayName:"StyleProvider"},__webpack_exports__.Z=StyleProvider},"./packages/compose/build-module/hooks/use-dialog/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/keycodes/build-module/index.js"),_use_constrained_tabbing__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-constrained-tabbing/index.js"),_use_focus_on_mount__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-focus-on-mount/index.js"),_use_focus_return__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/compose/build-module/hooks/use-focus-return/index.js"),_use_focus_outside__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/compose/build-module/hooks/use-focus-outside/index.js"),_use_merge_refs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js");__webpack_exports__.Z=function useDialog(options){const currentOptions=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{currentOptions.current=options}),Object.values(options));const constrainedTabbingRef=(0,_use_constrained_tabbing__WEBPACK_IMPORTED_MODULE_1__.Z)(),focusOnMountRef=(0,_use_focus_on_mount__WEBPACK_IMPORTED_MODULE_2__.Z)(options.focusOnMount),focusReturnRef=(0,_use_focus_return__WEBPACK_IMPORTED_MODULE_3__.Z)(),focusOutsideProps=(0,_use_focus_outside__WEBPACK_IMPORTED_MODULE_4__.Z)((event=>{currentOptions.current?.__unstableOnClose?currentOptions.current.__unstableOnClose("focus-outside",event):currentOptions.current?.onClose&&currentOptions.current.onClose()})),closeOnEscapeRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node&&node.addEventListener("keydown",(event=>{event.keyCode===_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.hY&&!event.defaultPrevented&&currentOptions.current?.onClose&&(event.preventDefault(),currentOptions.current.onClose())}))}),[]);return[(0,_use_merge_refs__WEBPACK_IMPORTED_MODULE_6__.Z)([!1!==options.focusOnMount?constrainedTabbingRef:null,!1!==options.focusOnMount?focusReturnRef:null,!1!==options.focusOnMount?focusOnMountRef:null,closeOnEscapeRef]),{...focusOutsideProps,tabIndex:-1}]}},"./packages/compose/build-module/hooks/use-media-query/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useMediaQuery}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useMediaQuery(query){const source=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const mediaQueryList=function getMediaQueryList(query){return query&&"undefined"!=typeof window&&"function"==typeof window.matchMedia?window.matchMedia(query):null}(query);return{subscribe(onStoreChange){return mediaQueryList?(mediaQueryList.addEventListener?.("change",onStoreChange),()=>{mediaQueryList.removeEventListener?.("change",onStoreChange)}):()=>{}},getValue(){var _mediaQueryList$match;return null!==(_mediaQueryList$match=mediaQueryList?.matches)&&void 0!==_mediaQueryList$match&&_mediaQueryList$match}}}),[query]);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(source.subscribe,source.getValue,(()=>!1))}},"./packages/compose/build-module/hooks/use-viewport-match/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_media_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-media-query/index.js");const BREAKPOINTS={huge:1440,wide:1280,large:960,medium:782,small:600,mobile:480},CONDITIONS={">=":"min-width","<":"max-width"},OPERATOR_EVALUATORS={">=":(breakpointValue,width)=>width>=breakpointValue,"<":(breakpointValue,width)=>width<breakpointValue},ViewportMatchWidthContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),useViewportMatch=(breakpoint,operator=">=")=>{const simulatedWidth=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ViewportMatchWidthContext),mediaQuery=!simulatedWidth&&`(${CONDITIONS[operator]}: ${BREAKPOINTS[breakpoint]}px)`,mediaQueryResult=(0,_use_media_query__WEBPACK_IMPORTED_MODULE_1__.Z)(mediaQuery||void 0);return simulatedWidth?OPERATOR_EVALUATORS[operator](BREAKPOINTS[breakpoint],simulatedWidth):mediaQueryResult};useViewportMatch.__experimentalWidthProvider=ViewportMatchWidthContext.Provider,useViewportMatch.__docgenInfo={description:"Returns true if the viewport matches the given query, or false otherwise.\n\n@param {WPBreakpoint}       breakpoint      Breakpoint size name.\n@param {WPViewportOperator} [operator=\">=\"] Viewport operator.\n\n@example\n\n```js\nuseViewportMatch( 'huge', '<' );\nuseViewportMatch( 'medium' );\n```\n\n@return {boolean} Whether viewport matches query.",methods:[],displayName:"useViewportMatch"},__webpack_exports__.Z=useViewportMatch},"./packages/element/build-module/utils.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return isEmptyElement}});const isEmptyElement=element=>"number"!=typeof element&&("string"==typeof element?.valueOf()||Array.isArray(element)?!element.length:!element)},"./packages/icons/build-module/library/check.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const check=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}));__webpack_exports__.Z=check},"./packages/is-shallow-equal/build-module/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ZP:function(){return isShallowEqual}});var objects=__webpack_require__("./packages/is-shallow-equal/build-module/objects.js");function isShallowEqual(a,b){if(a&&b){if(a.constructor===Object&&b.constructor===Object)return(0,objects.Z)(a,b);if(Array.isArray(a)&&Array.isArray(b))return function isShallowEqualArrays(a,b){if(a===b)return!0;if(a.length!==b.length)return!1;for(let i=0,len=a.length;i<len;i++)if(a[i]!==b[i])return!1;return!0}(a,b)}return a===b}},"./packages/is-shallow-equal/build-module/objects.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function isShallowEqualObjects(a,b){if(a===b)return!0;const aKeys=Object.keys(a),bKeys=Object.keys(b);if(aKeys.length!==bKeys.length)return!1;let i=0;for(;i<aKeys.length;){const key=aKeys[i],aValue=a[key];if(void 0===aValue&&!b.hasOwnProperty(key)||aValue!==b[key])return!1;i++}return!0}__webpack_require__.d(__webpack_exports__,{Z:function(){return isShallowEqualObjects}})}}]);