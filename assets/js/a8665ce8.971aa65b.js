"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[4023],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=m(n),k=a,d=c["".concat(o,".").concat(k)]||c[k]||s[k]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7519:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return h},metadata:function(){return N},toc:function(){return T}});var r=n(7462),a=n(3366),l=n(7294),i=n(3905),u=n(9960),o=n(1207),m=n(2389),p=n(3725),s=n(6010),c="tabItem_LplD";function k(e){var t,n,a,i=e.lazy,u=e.block,o=e.defaultValue,m=e.values,k=e.groupId,d=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,p.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===o?o:null!=(t=null!=o?o:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=b[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,p.UB)(),y=h.tabGroupChoices,N=h.setTabGroupChoices,T=(0,l.useState)(g),w=T[0],O=T[1],C=[],I=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var E=y[k];null!=E&&E!==w&&f.some((function(e){return e.value===E}))&&O(E)}var L=function(e){var t=e.currentTarget,n=C.indexOf(t),r=f[n].value;r!==w&&(I(t),O(r),null!=k&&N(k,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},d)},f.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:L,onClick:L},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,m.Z)();return l.createElement(k,(0,r.Z)({key:String(t)},e))}function b(e){var t=e.children,n=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}var f=n.p+"assets/images/algo-session-6e45ba0d0077b89304a0b732d8c7a7f1.jpg",v=n.p+"assets/images/brain-room-236f0e3da5bf7ef9ffb30a3cd0eec2c3.png",g=["components"],h={title:"maum.ai Brain\ud300 \ucc44\uc6a9",description:"maum.ai Brain\ud300\uc5d0 \uc9c0\uc6d0\ud558\uc138\uc694!",image:"img/maumai_Symbol.png"},y="maum.ai Brain\ud300\uc5d0 \uc9c0\uc6d0\ud558\uc138\uc694!",N={type:"mdx",permalink:"/careers",source:"@site/src/pages/careers.mdx",title:"maum.ai Brain\ud300 \ucc44\uc6a9",description:"maum.ai Brain\ud300\uc5d0 \uc9c0\uc6d0\ud558\uc138\uc694!",frontMatter:{title:"maum.ai Brain\ud300 \ucc44\uc6a9",description:"maum.ai Brain\ud300\uc5d0 \uc9c0\uc6d0\ud558\uc138\uc694!",image:"img/maumai_Symbol.png"}},T=[{value:"We&#39;re hiring!",id:"were-hiring",level:2},{value:"\uc5c5\ubb34 \ubc0f \uc9c0\uc6d0 \uc790\uaca9",id:"\uc5c5\ubb34-\ubc0f-\uc9c0\uc6d0-\uc790\uaca9",level:2},{value:"\ud575\uc2ec \uc5c5\ubb34",id:"\ud575\uc2ec-\uc5c5\ubb34",level:3},{value:"\uc790\uaca9 \uc694\uac74",id:"\uc790\uaca9-\uc694\uac74",level:3},{value:"\uc6b0\ub300 \uc694\uac74",id:"\uc6b0\ub300-\uc694\uac74",level:3},{value:"\uadfc\ubb34 \ud658\uacbd \ubc0f \ubcf5\uc9c0",id:"\uadfc\ubb34-\ud658\uacbd-\ubc0f-\ubcf5\uc9c0",level:2},{value:"\uadfc\ubb34 \ud615\ud0dc",id:"\uadfc\ubb34-\ud615\ud0dc",level:3},{value:"\uadfc\ubb34 \ud658\uacbd",id:"\uadfc\ubb34-\ud658\uacbd",level:3},{value:"\ucc98\uc6b0",id:"\ucc98\uc6b0",level:3},{value:"\uc0ac\ubb34\uc2e4 \uc704\uce58",id:"\uc0ac\ubb34\uc2e4-\uc704\uce58",level:3},{value:"\uc624\uc2dc\ub294 \uae38",id:"\uc624\uc2dc\ub294-\uae38",level:4}],w={toc:T};function O(e){var t=e.components,n=(0,a.Z)(e,g);return(0,i.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"maumai-brain\ud300\uc5d0-\uc9c0\uc6d0\ud558\uc138\uc694"},"maum.ai Brain\ud300\uc5d0 \uc9c0\uc6d0\ud558\uc138\uc694!"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"were-hiring"},"We're hiring!"),(0,i.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694? maum.ai Brain\ud300\uc5d0\uc11c \ud568\uaed8 \ud560 \ubd84\ub4e4\uc744 \uae30\ub2e4\ub9bd\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc9c0\uc6d0 \uac00\ub2a5\ud55c \uc9c1\uad70\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AI Scientist (Brain\ud300)"),(0,i.kt)("li",{parentName:"ul"},"ML Engineer (Brain\ud300)")),(0,i.kt)("p",null,"\ubb38\uc758 \uc0ac\ud56d\uc774 \uc788\uc744 \uacbd\uc6b0, ",(0,i.kt)("a",{parentName:"p",href:"mailto:brain-hr@maum.ai"},"brain-hr@maum.ai")," \ub85c \ubb38\uc758\uc8fc\uc2dc\uba74 \ucd5c\ub300\ud55c \ube60\ub974\uac8c \ub2f5\ubcc0\ub4dc\ub9b4 \uc218 \uc788\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("div",{className:o.Z.buttons},(0,i.kt)(u.Z,{className:"button button--secondary button--lg",to:"https://forms.gle/szytvUCyd9eKuL4F8",mdxType:"Link"},"Brain\ud300 \uc9c0\uc6d0\ud558\uae30\u270d")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\uc5c5\ubb34-\ubc0f-\uc9c0\uc6d0-\uc790\uaca9"},"\uc5c5\ubb34 \ubc0f \uc9c0\uc6d0 \uc790\uaca9"),(0,i.kt)("h3",{id:"\ud575\uc2ec-\uc5c5\ubb34"},"\ud575\uc2ec \uc5c5\ubb34"),(0,i.kt)(d,{groupId:"job-position",mdxType:"Tabs"},(0,i.kt)(b,{value:"requirements",label:"AI Scientist",default:!0,mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc815\uc81c\ub418\uc9c0 \uc54a\uc740 \ub370\uc774\ud130\ub85c \ud2b9\uc815 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud55c \ucd5c\uc801\uc758 ML/DL \uc54c\uace0\ub9ac\uc998\uc744 \ucc3e\uac70\ub098 \uc124\uacc4"),(0,i.kt)("li",{parentName:"ul"},"\uae30\uc874 \uc54c\uace0\ub9ac\uc998\uc758 \uc0c1\uc5c5\uc801 \uac00\uce58\uc640 \uc0c8\ub85c\uc6b4 \ub3c4\uba54\uc778 \ud559\uc2b5 \ubaa8\ub378\uc758 \uc124\uacc4 \ubc0f \uc131\ub2a5\uc744 \ub192\uc774\uae30 \uc704\ud55c \uac1c\uc120 \ubc29\uc548 \uc5f0\uad6c"),(0,i.kt)("li",{parentName:"ul"},"AI \ubd84\uc57c\uc5d0\uc11c \ud604\uc2e4 \uc138\uacc4 \ud639\uc740 \uace0\uac1d\uc758 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub294 \ud601\uc2e0\uc801\uc778 \uc54c\uace0\ub9ac\uc998\uc744 \uac1c\ubc1c"))),(0,i.kt)(b,{value:"ml-engineer",label:"ML Engineer",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"maum.ai \uc790\uccb4 ML/DL \uc54c\uace0\ub9ac\uc998\uc744 \uc11c\ube44\uc2a4\ud558\uae30 \uc704\ud55c API \uac1c\ubc1c \ubc0f \uc124\uacc4"),(0,i.kt)("li",{parentName:"ul"},"ML/DL \uc54c\uace0\ub9ac\uc998 \uae30\ubc18 \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \uacbd\ub7c9\ud654/\uac00\uc18d\ud654")),(0,i.kt)("br",null))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\uc790\uaca9-\uc694\uac74"},"\uc790\uaca9 \uc694\uac74"),(0,i.kt)(d,{groupId:"job-position",mdxType:"Tabs"},(0,i.kt)(b,{value:"requirements",label:"AI Scientist",default:!0,mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ML/DL \uc54c\uace0\ub9ac\uc998\uc744 \uae4a\uc774 \uc774\ud574\ud560 \uc218 \uc788\ub294 \uc218\uc900\uc758 \uc218\ud559\uc801 \ub2a5\ub825 \ubc0f \ubaa8\ub378\ub9c1 \ub2a5\ub825"),(0,i.kt)("li",{parentName:"ul"},"TensorFlow, PyTorch \ub4f1 \ud504\ub808\uc784\uc6cc\ud06c \ud65c\uc6a9 \ubc0f \ubaa8\ub378 \uad6c\ud604\uc5d0 \uc790\uc720\ub85c\uc6b8 \uc218 \uc788\ub294 \uc218\uc900\uc758 \uac1c\ubc1c \ub2a5\ub825"),(0,i.kt)("li",{parentName:"ul"},"ML/DL \uc5f0\uad6c \ub17c\ubb38 Implementation \ub610\ub294 \uad00\ub828 Repository\uc758 Contribution \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"AI \uad00\ub828 \uae30\uc220 \ub17c\ubb38\uc744 \uc77d\uace0 \ub0b4\uc6a9\uc744 \ucda9\ubd84\ud788 \uc774\ud574\ud558\ub294\ub370 \ubb34\ub9ac\uac00 \uc5c6\ub294 \uc218\uc900\uc758 \uc601\uc5b4 \ub2a5\ub825"))),(0,i.kt)(b,{value:"ml-engineer",label:"ML Engineer",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"High-Level Programming Language\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc6d0\ud558\ub294 \uac83\uc744 \uad6c\ud604\ud560 \uc218 \uc788\ub294 \ubd84"),(0,i.kt)("li",{parentName:"ul"},"C/C++, Java, Python \uc911 1\uac1c \uc774\uc0c1\uc758 \uc5b8\uc5b4\uc5d0 \ub2a5\uc219\ud558\uc2e0 \ubd84"),(0,i.kt)("li",{parentName:"ul"},"TensorFlow, PyTorch \ub4f1 DL framework\ub85c \uad6c\ud604\ub41c \ucf54\ub4dc\ub97c \uc774\ud574\ud560 \uc218 \uc788\ub294 \ubd84")),(0,i.kt)("br",null))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\uc6b0\ub300-\uc694\uac74"},"\uc6b0\ub300 \uc694\uac74"),(0,i.kt)(d,{groupId:"job-position",mdxType:"Tabs"},(0,i.kt)(b,{value:"requirements",label:"AI Scientist",default:!0,mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc720\uad00 \uc804\uacf5 \uc11d\uc0ac \uc774\uc0c1\uc758 \uacbd\ub825 \ub610\ub294 \uad00\ub828 \ud559\ud68c \ub17c\ubb38 \uc81c\ucd9c \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"\uae08\uc735, \uc758\ub8cc, \uad50\uc721, \ud328\uc158 \ub4f1 \uc0b0\uc5c5\ubcc4 \uc2e4\uc81c \ub370\uc774\ud130 \uae30\ubc18 AI \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"\uc81c\ud488, \uc11c\ube44\uc2a4\uc758 \uc694\uad6c \uc0ac\ud56d \ubd84\uc11d \ubc0f \uac1c\ubc1c \uc124\uacc4 \uc5c5\ubb34 \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"CUDA \uac1c\ubc1c\uc744 \uc704\ud55c C \uac1c\ubc1c\uacfc \uad00\ub828\ub41c \uc774\ud574 \ub610\ub294 \uacbd\ud5d8")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)(b,{value:"ml-engineer",label:"ML Engineer",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc720\uad00 \uc804\uacf5 \uc11d\uc0ac \uc774\uc0c1\uc758 \uacbd\ub825 \ub610\ub294 \uad00\ub828 \ud559\ud68c \ub17c\ubb38 \uc81c\ucd9c \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"OpenMP, MPI, CUDA \ub4f1 \ubcd1\ub82c/\ubd84\uc0b0 \ubc0f GPU \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0 \ub300\ud55c \uc774\ud574 \ub610\ub294 \uad00\ub828 \uc9c0\uc2dd"),(0,i.kt)("li",{parentName:"ul"},"IPC, NCCL, gRPC \ub4f1 \ud504\ub85c\uc138\uc2a4 \uac04 \ud1b5\uc2e0\uc5d0 \ub300\ud55c \uc774\ud574 \ub610\ub294 \ub124\ud2b8\uc6cc\ud06c \uad00\ub828 \uc9c0\uc2dd"),(0,i.kt)("li",{parentName:"ul"},"Docker\ub97c \ud65c\uc6a9\ud558\uc5ec GPU \uc790\uc6d0\uc744 \uc0ac\uc6a9\ud558\ub294 \uc11c\ube44\uc2a4 \uad6c\uc131 \uacbd\ud5d8")))),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\uadfc\ubb34-\ud658\uacbd-\ubc0f-\ubcf5\uc9c0"},"\uadfc\ubb34 \ud658\uacbd \ubc0f \ubcf5\uc9c0"),(0,i.kt)("br",null),(0,i.kt)("img",{className:o.Z.figCenter,src:f,alt:"algo-session"}),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\uadfc\ubb34-\ud615\ud0dc"},"\uadfc\ubb34 \ud615\ud0dc"),(0,i.kt)("p",null,"Brain\ud300\uc740 \uc2dc\ucc28\ucd9c\ud1f4\uadfc\uc81c\ub97c \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"\ucf54\uc5b4\ud0c0\uc784\uc740 10\uc2dc 30\ubd84\ubd80\ud130 17\uc2dc\uae4c\uc9c0"),"\ub85c, \uc624\uc804 8\uc2dc ~ \uc624\uc804 10\uc2dc 30\ubd84 \uc0ac\uc774\uc5d0 \uac01\uc790\uac00 \uc815\ud55c \uc2dc\uac04\uc5d0 \ucd9c\uadfc\ud569\ub2c8\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"\uc0b0\uc5c5\uae30\ub2a5\uc694\uc6d0, \uc804\ubb38\uc5f0\uad6c\uc694\uc6d0\uc73c\ub85c \ubcf5\ubb34\ud558\uc2dc\ub294 \ubd84\ub4e4\ub3c4 \uc2dc\ucc28\ucd9c\ud1f4\uadfc\uc81c \uc801\uc6a9\uc774 \uac00\ub2a5"),"\ud569\ub2c8\ub2e4!"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\uadfc\ubb34-\ud658\uacbd"},"\uadfc\ubb34 \ud658\uacbd"),(0,i.kt)("p",null,"Brain\ud300 \uad6c\uc131\uc6d0\uc5d0\uac8c\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\uc785\uc0ac \uc2dc GPU \ud0d1\uc7ac \ub370\uc2a4\ud06c\ud0d1\ubd80\ud130 MacBook\uae4c\uc9c0 \uc6d0\ud558\ub294 \uae30\uae30\ub97c \uc9c0\uc6d0"),"\ud574\ub4dc\ub9ac\uba70, ",(0,i.kt)("strong",{parentName:"p"},"\ubaa8\ub2c8\ud130 \ubc0f \ubaa8\ub2c8\ud130\uc554\uc744 \uae30\ubcf8\uc73c\ub85c \uc81c\uacf5"),"\ud558\uc5ec Brain\ud300 \uad6c\uc131\uc6d0\ubd84\ub4e4\uc758 \ubaa9 \uac74\uac15\ub3c4 \ucc45\uc784\uc9d1\ub2c8\ub2e4!  "),(0,i.kt)("p",null,"Brain\ud300\uc5d0\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\uc5f0\uad6c\uc6a9\uc73c\ub85c\ub9cc On-premise\ub85c V100 10\ub300, A100 30\ub300, H100 10\ub300 \uc774\uc0c1\uc744 \uc6b4\uc6a9"),"\ud558\uace0 \uc788\uace0, \uc778\uc6d0\ub2f9 On-premise GPU\ub97c \ucd5c\uc18c 2\ub300 \uc774\uc0c1 \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uac8c\ub054 \uc5f0\uad6c \ubc0f \uac1c\ubc1c\ud658\uacbd\uc744 \uad6c\ucd95\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. (2023\ub144 07\uc6d4 \uae30\uc900)"),(0,i.kt)("img",{className:o.Z.figCenter,src:v,alt:"brain-room"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Brain\ud300 AI Scientist\ub294 \ud68c\uc0ac\uc758 \uc0ac\uc5c5 \ubc29\ud5a5\uc5d0 \ub530\ub978 \uc5f0\uad6c\uc778 ",(0,i.kt)("strong",{parentName:"p"},"Strategic Research"),"\uc640 \uac1c\uc778 \uad00\uc2ec \uc8fc\uc81c\uc5d0 \ub530\ub978 \uc790\uc720 \uc5f0\uad6c\uc778 ",(0,i.kt)("strong",{parentName:"p"},"General Research"),"\ub97c ",(0,i.kt)("strong",{parentName:"p"},"\uc77c\uacfc \uc911 \uc808\ubc18\uc529 \uc9c4\ud589"),"\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud558\ub294 \ub4f1 \ucd5c\uc801\uc758 \uc5f0\uad6c \ud658\uacbd\uc744 \ub9c8\ub828\ud574\ub4dc\ub9ac\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NeurIPS, ICLR, CVPR, ECCV, Interspeech, ACL \ub4f1 \ud559\ud68c \ucc38\uc11d \ubc0f \ud559\ud68c \ub17c\ubb38 \uc81c\ucd9c"),"\uc744 \ud76c\ub9dd\ud558\uc2e4 \uacbd\uc6b0, \uc801\uadf9\uc801\uc73c\ub85c \uc9c0\uc6d0\ud574\ub4dc\ub9ac\uace0 \uc788\uc2b5\ub2c8\ub2e4! (\ud604\uc7ac\uae4c\uc9c0 \ucc44\ud0dd\ub41c \ub17c\ubb38 \ud604\ud669\uc5d0 \ub300\ud574\uc11c\ub294 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/publications"},"Publications"))," \ud0ed\uc744 \ucc38\uace0\ud574\uc8fc\uc138\uc694!)  "),(0,i.kt)("br",null),(0,i.kt)("p",null,"maum.ai\ub294 \uc804 \uc9c1\uc6d0 ",(0,i.kt)("strong",{parentName:"p"},"\uc810\uc2ec \uc2dd\uc0ac \uc2dd\ub300\ub97c \uc81c\uacf5"),"\ud569\ub2c8\ub2e4. \ud310\uad50 \uc0ac\uc625 \uadfc\ucc98\uc758 \ub9ce\uc740 \uc2dd\ub2f9\uc744 \uc790\uc720\ub86d\uac8c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\ucc98\uc6b0"},"\ucc98\uc6b0"),(0,i.kt)("p",null,"maum.ai Brain\ud300\uc758 AI Scientist / ML Engineer \ub85c \ud568\uaed8 \ud558\uc2dc\uac8c \ub420 \uacbd\uc6b0, Brain\ud300\uacfc\uc758 Fit\uc774 \ub9de\ub294 \uc9c0 \ud655\uc778\ud558\ub294 \uae30\uac04\uc73c\ub85c ",(0,i.kt)("strong",{parentName:"p"},"3\uac1c\uc6d4\uc758 \uc218\uc2b5 \uae30\uac04"),"\uc744 \uac16\uc2b5\ub2c8\ub2e4. (\ud559\uc704 \ubc0f \uacbd\ub825 \ubb34\uad00) "),(0,i.kt)("p",null,"\uc774\ud6c4 \uc218\uc2b5 \uae30\uac04 \uc911 \ubcf4\uc5ec\uc8fc\uc2e0 \uc5ed\ub7c9\uc5d0 \ub530\ub77c \ud3c9\uac00\ub97c \uc9c4\ud589\ud558\uba70, Brain\ud300 \uc815\uc2dd \uad6c\uc131\uc6d0\uc73c\ub85c\uc11c ",(0,i.kt)("strong",{parentName:"p"},"\ucd5c\uc18c 5,000\ub9cc\uc6d0\uc758 \uc5f0\ubd09"),"\uc73c\ub85c \ucc98\uc6b0\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ud6c4\uc5d0\ub3c4 \uadfc\ubb34 \uc911 \ubcf4\uc5ec\uc8fc\uc2dc\ub294 \uc5ed\ub7c9\uacfc \uae30\uc5ec\ub3c4\uc5d0 \ub530\ub77c ",(0,i.kt)("strong",{parentName:"p"},"\ud30c\uaca9\uc801\uc778 \uc5f0\ubd09 \uc778\uc0c1"),"\uc744 \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\uc0ac\ubb34\uc2e4-\uc704\uce58"},"\uc0ac\ubb34\uc2e4 \uc704\uce58"),(0,i.kt)("p",null,"maum.ai Brain\ud300\uc5d0\uc11c \ud568\uaed8 \ud558\uc2dc\uac8c \ub420 \uacbd\uc6b0, ",(0,i.kt)("strong",{parentName:"p"},"\ud310\uad50 \ubcf8\uc0ac \uc624\ud53c\uc2a4 \ubc0f \uc5f0\uad6c\uc18c"),"\uc5d0\uc11c \uadfc\ubb34\ud558\uc2dc\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"maum.ai \ud310\uad50 \ubcf8\uc0ac \uc624\ud53c\uc2a4\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\ud310\uad50IT\uc13c\ud130 4\uce35"),"\uc5d0 \uc704\uce58\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. (\uad6c\uae00 \uc9c0\ub3c4\uc5d0 \uc544\uc9c1 \uc5c5\ub370\uc774\ud2b8 \ub418\uc9c0 \uc54a\uc544\uc11c \uc544\ub798 \uc9c0\ub3c4\ub294 \uc55e \uac74\ubb3c\uc785\ub2c8\ub2e4)"),(0,i.kt)("div",{className:o.Z.mapResponsive},(0,i.kt)("iframe",{className:o.Z.googleMap,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.06967057869!2d127.08936028182508!3d37.41182811281841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7c7e7677691%3A0x2c4282e124e93f95!2zTEgg7YyQ6rWQ7KCcMu2FjO2BrOuFuOuwuOumrCDquLDsl4XshLHsnqXshLzthLA!5e0!3m2!1sen!2skr!4v1691572468680!5m2!1sen!2skr",width:"600",height:"450",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"\uc624\uc2dc\ub294-\uae38"},"\uc624\uc2dc\ub294 \uae38"),(0,i.kt)("p",null,"\ud310\uad50\uc5ed 2\ubc88 \ucd9c\uad6c '\ud310\uad50\uc5ed\ub3d9\ud3b8' \uc815\ub958\uc7a5\uc5d0\uc11c 55, 310 \ub4f1 \uc2dc\ub0b4\ubc84\uc2a4 \ud0d1\uc2b9 \ud6c4 '\uae30\uc5c5\uc131\uc7a5\uc13c\ud130' \uc815\ub958\uc7a5\uc5d0\uc11c \ud558\ucc28\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4. \ubc84\uc2a4\ub85c 15\ubd84 \uac00\ub7c9 \uc18c\uc694\ub429\ub2c8\ub2e4."))}O.isMDXComponent=!0},1207:function(e,t){t.Z={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",mapResponsive:"mapResponsive_pohg",googleMap:"googleMap_ESMU",figCenter:"figCenter_PLcV"}}}]);