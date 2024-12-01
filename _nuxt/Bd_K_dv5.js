import{a as W,N as rn,z as an,Q as M,r as un,B as sn,G as E,a2 as cn,a3 as pn,a4 as R,a5 as dn,a6 as gn,f as hn,a7 as fn,A as mn}from"./hNYKocFl.js";import{p as K,k as yn}from"./C-v3KzvZ.js";import{f as vn}from"./CxYJgpPD.js";import{u as bn}from"./BxmjGeMv.js";class O{constructor(l,o,t){this.property=l,this.normal=o,t&&(this.space=t)}}O.prototype.property={};O.prototype.normal={};O.prototype.space=null;function X(n,l){const o={},t={};let r=-1;for(;++r<n.length;)Object.assign(o,n[r].property),Object.assign(t,n[r].normal);return new O(o,t,l)}function U(n){return n.toLowerCase()}class v{constructor(l,o){this.property=l,this.attribute=o}}v.prototype.space=null;v.prototype.boolean=!1;v.prototype.booleanish=!1;v.prototype.overloadedBoolean=!1;v.prototype.number=!1;v.prototype.commaSeparated=!1;v.prototype.spaceSeparated=!1;v.prototype.commaOrSpaceSeparated=!1;v.prototype.mustUseProperty=!1;v.prototype.defined=!1;let kn=0;const u=b(),d=b(),Y=b(),e=b(),p=b(),S=b(),m=b();function b(){return 2**++kn}const z=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:d,commaOrSpaceSeparated:m,commaSeparated:S,number:e,overloadedBoolean:Y,spaceSeparated:p},Symbol.toStringTag,{value:"Module"})),B=Object.keys(z);class _ extends v{constructor(l,o,t,r){let a=-1;if(super(l,o),N(this,"space",r),typeof t=="number")for(;++a<B.length;){const i=B[a];N(this,B[a],(t&z[i])===z[i])}}}_.prototype.defined=!0;function N(n,l,o){o&&(n[l]=o)}const Cn={}.hasOwnProperty;function x(n){const l={},o={};let t;for(t in n.properties)if(Cn.call(n.properties,t)){const r=n.properties[t],a=new _(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),l[t]=a,o[U(t)]=t,o[U(a.attribute)]=t}return new O(l,o,n.space)}const $=x({space:"xlink",transform(n,l){return"xlink:"+l.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Z=x({space:"xml",transform(n,l){return"xml:"+l.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function G(n,l){return l in n?n[l]:l}function J(n,l){return G(n,l.toLowerCase())}const Q=x({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:J,properties:{xmlns:null,xmlnsXLink:null}}),nn=x({transform(n,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:d,ariaAutoComplete:null,ariaBusy:d,ariaChecked:d,ariaColCount:e,ariaColIndex:e,ariaColSpan:e,ariaControls:p,ariaCurrent:null,ariaDescribedBy:p,ariaDetails:null,ariaDisabled:d,ariaDropEffect:p,ariaErrorMessage:null,ariaExpanded:d,ariaFlowTo:p,ariaGrabbed:d,ariaHasPopup:null,ariaHidden:d,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:p,ariaLevel:e,ariaLive:null,ariaModal:d,ariaMultiLine:d,ariaMultiSelectable:d,ariaOrientation:null,ariaOwns:p,ariaPlaceholder:null,ariaPosInSet:e,ariaPressed:d,ariaReadOnly:d,ariaRelevant:null,ariaRequired:d,ariaRoleDescription:p,ariaRowCount:e,ariaRowIndex:e,ariaRowSpan:e,ariaSelected:d,ariaSetSize:e,ariaSort:null,ariaValueMax:e,ariaValueMin:e,ariaValueNow:e,ariaValueText:null,role:null}}),Sn=x({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:J,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:S,acceptCharset:p,accessKey:p,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:p,autoFocus:u,autoPlay:u,blocking:p,capture:null,charSet:null,checked:u,cite:null,className:p,cols:e,colSpan:null,content:null,contentEditable:d,controls:u,controlsList:p,coords:e|S,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:Y,draggable:d,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:p,height:e,hidden:u,high:e,href:null,hrefLang:null,htmlFor:p,httpEquiv:p,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:p,itemRef:p,itemScope:u,itemType:p,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:e,manifest:null,max:null,maxLength:e,media:null,method:null,min:null,minLength:e,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:e,pattern:null,ping:p,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:p,required:u,reversed:u,rows:e,rowSpan:e,sandbox:p,scope:null,scoped:u,seamless:u,selected:u,shadowRootClonable:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:e,sizes:null,slot:null,span:e,spellCheck:d,src:null,srcDoc:null,srcLang:null,srcSet:null,start:e,step:null,style:null,tabIndex:e,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:d,width:e,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:p,axis:null,background:null,bgColor:null,border:e,borderColor:null,bottomMargin:e,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:e,leftMargin:e,link:null,longDesc:null,lowSrc:null,marginHeight:e,marginWidth:e,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:e,rules:null,scheme:null,scrolling:d,standby:null,summary:null,text:null,topMargin:e,valueType:null,version:null,vAlign:null,vLink:null,vSpace:e,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:e,security:null,unselectable:null}}),xn=x({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:G,properties:{about:m,accentHeight:e,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:e,amplitude:e,arabicForm:null,ascent:e,attributeName:null,attributeType:null,azimuth:e,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:e,by:null,calcMode:null,capHeight:e,className:p,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:e,diffuseConstant:e,direction:null,display:null,dur:null,divisor:e,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:e,enableBackground:null,end:null,event:null,exponent:e,externalResourcesRequired:null,fill:null,fillOpacity:e,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:S,g2:S,glyphName:S,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:e,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:e,horizOriginX:e,horizOriginY:e,id:null,ideographic:e,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:e,k:e,k1:e,k2:e,k3:e,k4:e,kernelMatrix:m,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:e,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:e,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:e,overlineThickness:e,paintOrder:null,panose1:null,path:null,pathLength:e,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:p,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:e,pointsAtY:e,pointsAtZ:e,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:m,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:m,rev:m,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:m,requiredFeatures:m,requiredFonts:m,requiredFormats:m,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:e,specularExponent:e,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:e,strikethroughThickness:e,string:null,stroke:null,strokeDashArray:m,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:e,strokeOpacity:e,strokeWidth:null,style:null,surfaceScale:e,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:m,tabIndex:e,tableValues:null,target:null,targetX:e,targetY:e,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:m,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:e,underlineThickness:e,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:e,values:null,vAlphabetic:e,vMathematical:e,vectorEffect:null,vHanging:e,vIdeographic:e,version:null,vertAdvY:e,vertOriginX:e,vertOriginY:e,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:e,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),wn=/^data[-\w.:]+$/i,q=/-[a-z]/g,Pn=/[A-Z]/g;function Dn(n,l){const o=U(l);let t=l,r=v;if(o in n.normal)return n.property[n.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&wn.test(l)){if(l.charAt(4)==="-"){const a=l.slice(5).replace(q,Ln);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=l.slice(4);if(!q.test(a)){let i=a.replace(Pn,On);i.charAt(0)!=="-"&&(i="-"+i),l="data"+i}}r=_}return new r(t,l)}function On(n){return"-"+n.toLowerCase()}function Ln(n){return n.charAt(1).toUpperCase()}const Mn=X([Z,$,Q,nn,Sn],"html");X([Z,$,Q,nn,xn],"svg");const H=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],I="default",ln=/^@|^v-on:/,en=/^:|^v-bind:/,Rn=/^v-model/,Tn=["select","textarea","input"],An=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),En=W({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var c,g,h,f,y,w,P,V;const l=(h=(g=(c=rn())==null?void 0:c.appContext)==null?void 0:g.app)==null?void 0:h.$nuxt,o=(l==null?void 0:l.$route)||(l==null?void 0:l._route),{mdc:t}=((f=l==null?void 0:l.$config)==null?void 0:f.public)||{},r={...(y=t==null?void 0:t.components)!=null&&y.prose&&n.prose!==!1?An:{},...((w=t==null?void 0:t.components)==null?void 0:w.map)||{},...an(((V=(P=n.data)==null?void 0:P.mdc)==null?void 0:V.components)||{}),...n.components},a=M(()=>{var L;const k=(((L=n.body)==null?void 0:L.children)||[]).map(C=>C.tag||C.type).filter(C=>!H.includes(C));return Array.from(new Set(k)).sort().join(".")}),i=un({...n.data});sn(()=>n.data,k=>{Object.assign(i,k)}),await qn(n.body,{tags:r});function s(k,L){const C=k.split(".").length-1;return k.split(".").reduce((D,A,tn)=>tn==C&&D?(D[A]=L,D[A]):typeof D=="object"?D[A]:void 0,i)}return{tags:r,contentKey:a,route:o,runtimeData:i,updateRuntimeData:s}},render(n){var w,P;const{tags:l,tag:o,body:t,data:r,contentKey:a,route:i,unwrap:s,runtimeData:c,updateRuntimeData:g}=n;if(!t)return null;const h={...r,tags:l,$route:i,runtimeData:c,updateRuntimeData:g},f=o!==!1?F(o||((w=h.component)==null?void 0:w.name)||h.component||"div"):void 0;return f?E(f,{...(P=h.component)==null?void 0:P.props,class:n.class,...this.$attrs,key:a},{default:y}):y==null?void 0:y();function y(){return s?vn(j(t,E,h,h).default(),typeof s=="string"?s.split(" "):["*"]):j(t,E,h,h).default()}}});function Bn(n,l,o,t={}){if(n.type==="text")return l(R,n.value);if(n.type==="comment")return l(dn,null,n.value);const r=n.tag,a=on(n,o.tags);if(n.tag==="binding")return Un(n,l,o,t);const i=F(a);typeof i=="object"&&(i.tag=r);const s=zn(n,o);return l(i,s,j(n,l,o,{...t,...s}))}function Un(n,l,o,t={}){var g,h;const r={...o.runtimeData,...t,$document:o,$doc:o},a=/\.|\[(\d+)\]/,s=((g=n.props)==null?void 0:g.value.trim().split(a).filter(Boolean)).reduce((f,y)=>{if(f&&y in f)return typeof f[y]=="function"?f[y]():f[y]},r),c=(h=n.props)==null?void 0:h.defaultValue;return l(R,s??c??"")}function j(n,l,o,t){const a=(n.children||[]).reduce((s,c)=>{if(!Vn(c))return s[I].push(c),s;const g=Fn(c);return s[g]=s[g]||[],c.type==="element"&&s[g].push(...c.children||[]),s},{[I]:[]});return Object.entries(a).reduce((s,[c,g])=>(g.length&&(s[c]=()=>{const h=g.map(f=>Bn(f,l,o,t));return Nn(h)}),s),{})}function zn(n,l){const{tag:o="",props:t={}}=n;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const i=t[a];if(Rn.test(a))return In(a,i,r,l,{native:Tn.includes(o)});if(a==="v-bind")return jn(a,i,r,l);if(ln.test(a))return _n(a,i,r,l);if(en.test(a))return Hn(a,i,r,l);const{attribute:s}=Dn(Mn,a);return Array.isArray(i)&&i.every(c=>typeof c=="string")?(r[s]=i.join(" "),r):(r[s]=i,r)},{})}function In(n,l,o,t,{native:r}){var c;const a=((c=n.match(/^v-model:([^=]+)/))==null?void 0:c[1])||"modelValue",i=r?"value":a,s=r?"onInput":`onUpdate:${a}`;return o[i]=T(l,t.runtimeData),o[s]=g=>{var h;t.updateRuntimeData(l,r?(h=g.target)==null?void 0:h.value:g)},o}function jn(n,l,o,t){const r=T(l,t);return o=Object.assign(o,r),o}function _n(n,l,o,t){return n=n.replace(ln,""),o.on=o.on||{},o.on[n]=()=>T(l,t),o}function Hn(n,l,o,t){return n=n.replace(en,""),o[n]=T(l,t),o}const F=n=>{if(typeof n=="string"){if(H.includes(n))return n;const l=cn(K(n),!1);return!n||(l==null?void 0:l.name)==="AsyncComponentWrapper"||typeof l=="string"?l:"setup"in l?pn(()=>new Promise(o=>o(l))):l}return n};function T(n,l){const o=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,l);return typeof o>"u"?gn(n):o}function Fn(n){let l="";for(const o of Object.keys(n.props||{}))if(!(!o.startsWith("#")&&!o.startsWith("v-slot:"))){l=o.split(/[:#]/,2)[1];break}return l||I}function Vn(n){return n.tag==="template"}function Nn(n){const l=[];for(const o of n){const t=l[l.length-1];o.type===R&&(t==null?void 0:t.type)===R?t.children=t.children+o.children:l.push(o)}return l}async function qn(n,l){if(!n)return;const o=Array.from(new Set(t(n,l)));await Promise.all(o.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const a=F(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){const i=r.tag;if(r.type==="text"||i==="binding"||r.type==="comment")return[];const s=on(r,a.tags),c=[];r.type!=="root"&&!H.includes(s)&&c.push(s);for(const g of r.children||[])c.push(...t(g,a));return c}}function on(n,l){var t;const o=n.tag;return!o||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?o:l[o]||l[K(o)]||l[yn(n.tag)]||o}const $n=W({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})}},setup(n){const l=n,o=bn().isEnabled(),t=M(()=>{let i=l.value.body||l.value;return l.excerpt&&l.value.excerpt&&(i=l.value.excerpt),i}),r=M(()=>{const{body:i,excerpt:s,...c}=l.value;return{...c,...l.data}}),a=M(()=>({...l.components,...r.value._components||{}}));return(i,s)=>{const c=En;return hn(),fn(c,{body:t.value,data:r.value,tag:n.tag,components:a.value,"data-content-id":mn(o)?n.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}});export{$n as _};
