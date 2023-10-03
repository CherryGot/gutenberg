"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[8773],{"./packages/components/src/context/constants.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_3:function(){return CONNECTED_NAMESPACE},cT:function(){return COMPONENT_NAMESPACE},rE:function(){return CONNECT_STATIC_NAMESPACE}});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/context/context-connect.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{H:function(){return hasConnectNamespace},Iq:function(){return contextConnect},Kc:function(){return contextConnectWithoutRef}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/warning/build-module/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__.Z)("contextConnect: Please provide a namespace");let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/context/context-system-provider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G8:function(){return ContextSystemProvider},eb:function(){return useComponentsContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),deepmerge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2__),is_plain_object__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/warning/build-module/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ComponentsContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),useComponentsContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ComponentsContext);const BaseContextSystemProvider=({children:children,value:value})=>{const contextValue=function useContextSystemBridge({value:value}){const parentContext=useComponentsContext(),valueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2___default()(valueRef.current,value)&&valueRef.current!==value&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__.Z)(`Please memoize your context: ${JSON.stringify(value)}`)}),[value]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_6__.P})),[parentContext,value])}({value:value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ComponentsContext.Provider,{value:contextValue,children:children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"}},"./packages/components/src/context/get-styled-class-name-from-key.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return getStyledClassNameFromKey}});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/context/use-context-system.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{y:function(){return useContextSystem}});var build_module=__webpack_require__("./packages/warning/build-module/index.js"),context_system_provider=__webpack_require__("./packages/components/src/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,build_module.Z)("useContextSystem: Please provide a namespace");const contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/custom-select-control/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return CustomSelectControl}});var react=__webpack_require__("./node_modules/react/index.js"),downshift_esm=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icon=__webpack_require__("./packages/icons/build-module/icon/index.js"),check=__webpack_require__("./packages/icons/build-module/library/check.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),deprecated_build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),component=__webpack_require__("./packages/components/src/visually-hidden/component.tsx"),select_control_styles=__webpack_require__("./packages/components/src/select-control/styles/select-control-styles.ts"),chevron_down=__webpack_require__("./packages/components/src/select-control/chevron-down.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),input_base=__webpack_require__("./packages/components/src/input-control/input-base.tsx"),input_control_styles=__webpack_require__("./packages/components/src/input-control/styles/input-control-styles.tsx");const backCompatMinWidth=props=>props.__nextUnconstrainedWidth?"":(0,emotion_react_browser_esm.iv)(input_control_styles.W2,"{min-width:130px;}",""),InputBaseWithBackCompatMinWidth=(0,emotion_styled_base_browser_esm.Z)(input_base.Z,{target:"eswuck60"})(backCompatMinWidth,";");var base_control_styles=__webpack_require__("./packages/components/src/base-control/styles/base-control-styles.ts"),use_deprecated_props=__webpack_require__("./packages/components/src/utils/use-deprecated-props.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const itemToString=item=>item?.name,stateReducer=({selectedItem:selectedItem},{type:type,changes:changes,props:{items:items}})=>{switch(type){case downshift_esm.L7.stateChangeTypes.ToggleButtonKeyDownArrowDown:return{selectedItem:items[selectedItem?Math.min(items.indexOf(selectedItem)+1,items.length-1):0]};case downshift_esm.L7.stateChangeTypes.ToggleButtonKeyDownArrowUp:return{selectedItem:items[selectedItem?Math.max(items.indexOf(selectedItem)-1,0):items.length-1]};default:return changes}};function CustomSelectControl(props){const{__next40pxDefaultSize:__next40pxDefaultSize=!1,__nextUnconstrainedWidth:__nextUnconstrainedWidth=!1,className:className,hideLabelFromVision:hideLabelFromVision,label:label,describedBy:describedBy,options:items,onChange:onSelectedItemChange,size:size="default",value:_selectedItem,onMouseOver:onMouseOver,onMouseOut:onMouseOut,onFocus:onFocus,onBlur:onBlur,__experimentalShowSelectedHint:__experimentalShowSelectedHint=!1}=(0,use_deprecated_props.s)(props,"wp.components.CustomSelectControl","6.4"),{getLabelProps:getLabelProps,getToggleButtonProps:getToggleButtonProps,getMenuProps:getMenuProps,getItemProps:getItemProps,isOpen:isOpen,highlightedIndex:highlightedIndex,selectedItem:selectedItem}=(0,downshift_esm.L7)({initialSelectedItem:items[0],items:items,itemToString:itemToString,onSelectedItemChange:onSelectedItemChange,...null!=_selectedItem?{selectedItem:_selectedItem}:void 0,stateReducer:stateReducer}),[isFocused,setIsFocused]=(0,react.useState)(!1);__nextUnconstrainedWidth||(0,deprecated_build_module.Z)("Constrained width styles for wp.components.CustomSelectControl",{since:"6.1",version:"6.4",hint:"Set the `__nextUnconstrainedWidth` prop to true to start opting into the new styles, which will become the default in a future version"});const menuProps=getMenuProps({className:"components-custom-select-control__menu","aria-hidden":!isOpen}),onKeyDownHandler=(0,react.useCallback)((e=>{e.stopPropagation(),menuProps?.onKeyDown?.(e)}),[menuProps]);return menuProps["aria-activedescendant"]?.startsWith("downshift-null")&&delete menuProps["aria-activedescendant"],(0,jsx_runtime.jsxs)("div",{className:classnames_default()("components-custom-select-control",className),children:[hideLabelFromVision?(0,jsx_runtime.jsx)(component.Z,{as:"label",...getLabelProps(),children:label}):(0,jsx_runtime.jsx)(base_control_styles.ar,{...getLabelProps({className:"components-custom-select-control__label"}),children:label}),(0,jsx_runtime.jsx)(InputBaseWithBackCompatMinWidth,{__next40pxDefaultSize:__next40pxDefaultSize,__nextUnconstrainedWidth:__nextUnconstrainedWidth,isFocused:isOpen||isFocused,__unstableInputWidth:__nextUnconstrainedWidth?void 0:"auto",labelPosition:__nextUnconstrainedWidth?void 0:"top",size:size,suffix:(0,jsx_runtime.jsx)(chevron_down.Z,{}),children:(0,jsx_runtime.jsxs)(select_control_styles.Ph,{onMouseOver:onMouseOver,onMouseOut:onMouseOut,as:"button",onFocus:function handleOnFocus(e){setIsFocused(!0),onFocus?.(e)},onBlur:function handleOnBlur(e){setIsFocused(!1),onBlur?.(e)},selectSize:size,__next40pxDefaultSize:__next40pxDefaultSize,...getToggleButtonProps({"aria-label":label,"aria-labelledby":void 0,className:"components-custom-select-control__button",describedBy:function getDescribedBy(){return describedBy||(selectedItem?(0,build_module.gB)((0,build_module.__)("Currently selected: %s"),selectedItem.name):(0,build_module.__)("No selection"))}()}),children:[itemToString(selectedItem),__experimentalShowSelectedHint&&selectedItem.__experimentalHint&&(0,jsx_runtime.jsx)("span",{className:"components-custom-select-control__hint",children:selectedItem.__experimentalHint})]})}),(0,jsx_runtime.jsx)("ul",{...menuProps,onKeyDown:onKeyDownHandler,children:isOpen&&items.map(((item,index)=>(0,jsx_runtime.jsxs)("li",{...getItemProps({item:item,index:index,key:item.key,className:classnames_default()(item.className,"components-custom-select-control__item",{"is-highlighted":index===highlightedIndex,"has-hint":!!item.__experimentalHint,"is-next-40px-default-size":__next40pxDefaultSize}),style:item.style}),children:[item.name,item.__experimentalHint&&(0,jsx_runtime.jsx)("span",{className:"components-custom-select-control__item-hint",children:item.__experimentalHint}),item===selectedItem&&(0,jsx_runtime.jsx)(icon.Z,{icon:check.Z,className:"components-custom-select-control__item-icon"})]})))})]})}function StableCustomSelectControl(props){return(0,jsx_runtime.jsx)(CustomSelectControl,{...props,__experimentalShowSelectedHint:!1})}CustomSelectControl.displayName="CustomSelectControl",StableCustomSelectControl.displayName="StableCustomSelectControl",CustomSelectControl.__docgenInfo={description:"",methods:[],displayName:"CustomSelectControl"},StableCustomSelectControl.__docgenInfo={description:"",methods:[],displayName:"StableCustomSelectControl"}},"./packages/components/src/utils/hooks/use-update-effect.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View",__webpack_exports__.Z=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/visually-hidden/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return visually_hidden_component}});__webpack_require__("./node_modules/react/index.js");var use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts");const visuallyHidden={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var component=__webpack_require__("./packages/components/src/view/component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedVisuallyHidden(props,forwardedRef){const{style:styleProp,...contextProps}=(0,use_context_system.y)(props,"VisuallyHidden");return(0,jsx_runtime.jsx)(component.Z,{ref:forwardedRef,...contextProps,style:{...visuallyHidden,...styleProp||{}}})}UnconnectedVisuallyHidden.displayName="UnconnectedVisuallyHidden";const VisuallyHidden=(0,context_connect.Iq)(UnconnectedVisuallyHidden,"VisuallyHidden");var visually_hidden_component=VisuallyHidden;try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"`VisuallyHidden` is a component used to render text intended to be visually\nhidden, but will show for alternate devices, for example a screen reader.\n\n```jsx\nimport { VisuallyHidden } from `@wordpress/components`;\n\nfunction Example() {\n  return (\n    <VisuallyHidden>\n      <label>Code is Poetry</label>\n    </VisuallyHidden>\n  );\n}\n```",displayName:"VisuallyHidden",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/visually-hidden/component.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"packages/components/src/visually-hidden/component.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./packages/compose/build-module/hooks/use-instance-id/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const instanceMap=new WeakMap;__webpack_exports__.Z=function useInstanceId(object,prefix,preferredId){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(preferredId)return preferredId;const id=function createId(object){const instances=instanceMap.get(object)||0;return instanceMap.set(object,instances+1),instances}(object);return prefix?`${prefix}-${id}`:id}),[object,preferredId,prefix])}},"./packages/deprecated/build-module/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return deprecated}});var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/hooks/build-module/index.js");const logged=Object.create(null);function deprecated(feature,options={}){const{since:since,version:version,alternative:alternative,plugin:plugin,link:link,hint:hint}=options,message=`${feature} is deprecated${since?` since version ${since}`:""}${version?` and will be removed${plugin?` from ${plugin}`:""} in version ${version}`:""}.${alternative?` Please use ${alternative} instead.`:""}${link?` See: ${link}`:""}${hint?` Note: ${hint}`:""}`;message in logged||((0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.Kw)("deprecated",feature,options,message),console.warn(message),logged[message]=!0)}},"./packages/icons/build-module/library/check.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const check=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}));__webpack_exports__.Z=check},"./packages/primitives/build-module/svg/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Cd:function(){return Circle},G:function(){return G},UL:function(){return Rect},Wj:function(){return SVG},y$:function(){return Path}});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const Circle=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("circle",props),G=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",props),Path=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path",props),Rect=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect",props),SVG=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({className:className,isPressed:isPressed,...props},ref)=>{const appliedProps={...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,{"is-pressed":isPressed})||void 0,"aria-hidden":!0,focusable:!1};return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg",{...appliedProps,ref:ref})}));SVG.displayName="SVG"},"./packages/components/src/custom-select-control/stories/index.story.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithHints:function(){return WithHints},WithLongLabels:function(){return WithLongLabels},__namedExportsOrder:function(){return __namedExportsOrder}});var ___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/custom-select-control/index.js");__webpack_exports__.default={title:"Components/CustomSelectControl",component:___WEBPACK_IMPORTED_MODULE_0__.Z,argTypes:{__next40pxDefaultSize:{control:{type:"boolean"}},__experimentalShowSelectedHint:{control:{type:"boolean"}},size:{options:["small","default","__unstable-large"],control:{type:"radio"}}},parameters:{sourceLink:"packages/components/src/custom-select-control"}};const Default=___WEBPACK_IMPORTED_MODULE_0__.Z.bind({});Default.args={__nextUnconstrainedWidth:!0,label:"Label",options:[{key:"small",name:"Small",style:{fontSize:"50%"}},{key:"normal",name:"Normal",style:{fontSize:"100%"},className:"can-apply-custom-class-to-option"},{key:"large",name:"Large",style:{fontSize:"200%"}},{key:"huge",name:"Huge",style:{fontSize:"300%"}}]};const WithLongLabels=___WEBPACK_IMPORTED_MODULE_0__.Z.bind({});WithLongLabels.args={...Default.args,options:[{key:"reallylonglabel1",name:"Really long labels are good for stress testing"},{key:"reallylonglabel2",name:"But they can take a long time to type."},{key:"reallylonglabel3",name:"That really is ok though because you should stress test your UIs."}]};const WithHints=___WEBPACK_IMPORTED_MODULE_0__.Z.bind({});WithHints.args={...Default.args,options:[{key:"thumbnail",name:"Thumbnail",__experimentalHint:"150x150"},{key:"medium",name:"Medium",__experimentalHint:"250x250"},{key:"large",name:"Large",__experimentalHint:"1024x1024"},{key:"full",name:"Full Size",__experimentalHint:"1600x1600"}]};const __namedExportsOrder=["Default","WithLongLabels","WithHints"]}}]);