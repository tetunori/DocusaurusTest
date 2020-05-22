(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(139)),c={id:"tips",title:"Tips",sidebar_label:"Tips"},i={id:"tips",title:"Tips",description:"p5.toio",source:"@site/docs\\tips.md",permalink:"/DocusaurusTest/docs/tips",editUrl:"https://github.com/tetunori/p5.toio/docs/tips.md",sidebar_label:"Tips",sidebar:"someSidebar",previous:{title:"Event listning",permalink:"/DocusaurusTest/docs/event"},next:{title:"Environment",permalink:"/DocusaurusTest/docs/env"}},s=[{value:"Environment",id:"environment",children:[]},{value:"Import library",id:"import-library",children:[]},{value:"Use in your Sketch",id:"use-in-your-sketch",children:[{value:"Search and Connect to toio\u2122Core Cube",id:"search-and-connect-to-toiocore-cube",children:[]},{value:"Issue some APIs",id:"issue-some-apis",children:[]},{value:"Event listning",id:"event-listning",children:[]}]},{value:"Tips",id:"tips",children:[{value:"Improve Performance",id:"improve-performance",children:[]},{value:"Issue",id:"issue",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"p5toio"},"p5.toio"),Object(o.b)("p",null,"Version 0.5.0"),Object(o.b)("h1",{id:"description"},"Description"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"p5.toio")," is a library for controlling toio\u2122 in p5.js environment.",Object(o.b)("br",{parentName:"p"}),"\n","A lot of APIs on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://toio.io/"}),"toio\u2122")," can be used with just a simple step as below.",Object(o.b)("br",{parentName:"p"}),"\n","Now I released an alpha-release(0.5.0) so that there is no test code, detailed API document or samples yet.",Object(o.b)("br",{parentName:"p"}),"\n","Please wait for the next beta-release(0.8.0)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"p5.toio")," consists of 2 classes ",Object(o.b)("inlineCode",{parentName:"p"},"P5tCube")," and ",Object(o.b)("inlineCode",{parentName:"p"},"P5tId"),".",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"P5tCube")," class supplies a lot of APIs and utilities enable us to control Cube easily.",Object(o.b)("br",{parentName:"p"}),"\n","Please refer to the ",Object(o.b)("inlineCode",{parentName:"p"},"P5tCube")," class interfaces from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://tetunori.github.io/p5.toio/docs/classes/_p5tcube_.p5tcube.html"}),"here"),".",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"P5tId")," class includes APIs and properties on toioIDs printed on toio\u2122's mats, cards, stickers.",Object(o.b)("br",{parentName:"p"}),"\n","See interfaces from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://tetunori.github.io/p5.toio/docs/classes/_p5tid_.p5tid.html"}),"here")," for ",Object(o.b)("inlineCode",{parentName:"p"},"P5tId"),".  "),Object(o.b)("h1",{id:"usage"},"Usage"),Object(o.b)("h2",{id:"environment"},"Environment"),Object(o.b)("p",null,"Due to the dependency to ",Object(o.b)("inlineCode",{parentName:"p"},"WebBluetooth"),", this library works with the following environment.",Object(o.b)("br",{parentName:"p"}),"\n","OS: Windows, MacOS, Android. Not support iOS/iPadOS.",Object(o.b)("br",{parentName:"p"}),"\n","Browser: Google Chrome is highly recommended.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://editor.p5js.org/"}),"P5 Editor")," support ",Object(o.b)("inlineCode",{parentName:"p"},"WebBluetooth")," but ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openprocessing.org/"}),"OpenProcessing")," unfortunately does not support it so that this library also does not work.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://editor.p5js.org/tetunori/sketches/x-m5aIlWp"}),"P5 Editor: p5.toio basic sample"))),Object(o.b)("h2",{id:"import-library"},"Import library"),Object(o.b)("p",null,"Just insert a sigle script after 2 dependent scripts ",Object(o.b)("inlineCode",{parentName:"p"},"p5.js")," and ",Object(o.b)("inlineCode",{parentName:"p"},"p5.sound.min.js")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"<head>"),".  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:"{5}","{5}":!0}),'<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/addons/p5.sound.min.js"><\/script>\n\n\x3c!-- INSERT HERE --\x3e\n<script src="https://tetunori.github.io/p5.toio/dist/0.5.0/p5.toio.min.js"><\/script>\n')),Object(o.b)("p",null,"We can also use the non-uglified code.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://tetunori.github.io/p5.toio/dist/0.5.0/p5.toio.js"><\/script>\n')),Object(o.b)("h2",{id:"use-in-your-sketch"},"Use in your Sketch"),Object(o.b)("h3",{id:"search-and-connect-to-toiocore-cube"},"Search and Connect to toio\u2122Core Cube"),Object(o.b)("p",null,"Call ",Object(o.b)("inlineCode",{parentName:"p"},"P5tCube.connectNewP5tCube()")," and receive ",Object(o.b)("inlineCode",{parentName:"p"},"P5tCube")," instance in Promise as below.",Object(o.b)("br",{parentName:"p"}),"\n","This library depends on ",Object(o.b)("inlineCode",{parentName:"p"},"WebBluetooth")," so that this API must be called in a user-action function like ",Object(o.b)("inlineCode",{parentName:"p"},"mouseClicked()")," or ",Object(o.b)("inlineCode",{parentName:"p"},"keyPressed()")," etc.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const gCubes = [];\n\nfunction mouseClicked() {\n  P5tCube.connectNewP5tCube().then( cube => {\n    // 'cube' is an instance of connected toio\u2122Core Cube.\n    // Now you can call any API!\n    gCubes.push( cube );\n  } );\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://editor.p5js.org/tetunori/sketches/gkMCIKNk-"}),"P5 Editor Sample 1: Turn Light On"))),Object(o.b)("h3",{id:"issue-some-apis"},"Issue some APIs"),Object(o.b)("p",null,"Basically, please refer to the TypeDoc API references ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://tetunori.github.io/p5.toio/docs/classes/_p5tcube_.p5tcube.html"}),"P5tCube")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://tetunori.github.io/p5.toio/docs/classes/_p5tid_.p5tid.html"}),"P5tId"),".",Object(o.b)("br",{parentName:"p"}),"\n","Some actual examples are listed below."),Object(o.b)("h4",{id:"example-1-turn-the-light-on"},"Example 1: Turn the light on"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Turn the light on with white\ncube?.turnLightOn( 'white' );\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://editor.p5js.org/tetunori/sketches/gkMCIKNk-"}),"P5 Editor Sample 1: Turn Light On"))),Object(o.b)("h4",{id:"example-2-play-midi-melody"},"Example 2: Play MIDI melody"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Play sequence C-D-E\ncube?.playMelody( [ \n  { note: 0x3C, duration: 0x1E }, \n  { note: 0x3E, duration: 0x1E }, \n  { note: 0x40, duration: 0x1E } \n] );\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://editor.p5js.org/tetunori/sketches/yfFYiyMRx"}),"P5 Editor Sample 2: Play MIDI melody"))),Object(o.b)("h4",{id:"example-3-interaction-with-mouse-x"},"Example 3: Interaction with mouse X."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Keep on gazing at mouse point\nfor( const cube of connectedCubeArray ){\n  const x = Math.floor(mouseX * 300 / windowWidth + 200);\n  const y = 144;\n  const speed = 115; \n  cube?.turnToXY( x, y, speed );\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://editor.p5js.org/tetunori/sketches/HNZniaSdx"}),"P5 Editor Sample 3: Keep on gazing at mouse point"))),Object(o.b)("h4",{id:"example-4-interaction-with-2-cubes"},"Example 4: Interaction with 2 Cubes."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Keep on gazing at the othre Cube\nconst speed = 115;\ncubeP?.turnToCube( cubeQ, speed );\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://editor.p5js.org/tetunori/sketches/wsYXbuRL5"}),"P5 Editor Sample 4-1: Keep on gazing at the other Cube"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Keep on chasing the othre Cube\nconst moveType = P5tCube.moveTypeId.withoutBack;\nconst speed = 80;\ncubeP?.moveToCube( cubeQ, speed, moveType );\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://editor.p5js.org/tetunori/sketches/gSg6D4zGC"}),"P5 Editor Sample 4-2: Keep on chasing the other Cube"))),Object(o.b)("h4",{id:"example-5-interaction-with-a-mat"},"Example 5: Interaction with a mat."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"  // Set background color with touched colored tile on mat\n  const color = P5tId.ColorTileMat.getTileColor(cube?.x, cube?.y);\n  background( color );\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://editor.p5js.org/tetunori/sketches/cHerL4iap"}),"P5 Editor Sample 5: Change background color with touched mat color"))),Object(o.b)("h3",{id:"event-listning"},"Event listning"),Object(o.b)("p",null,"This library supplies 2 methods ",Object(o.b)("inlineCode",{parentName:"p"},"addEventListener")," and definition of callback to recieve notification."),Object(o.b)("h4",{id:"example-6-addeventlistner"},"Example 6: addEventListner"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Button press event\nconst type = 'buttonpress';\ncube?.addEventListener(type, ()=>{\n  console.log(type);\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Posture change event\nconst type = 'sensorposturechange';\ncube?.addEventListener(type, (posture)=>{\n  console.log(type, posture);\n});\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://editor.p5js.org/tetunori/sketches/xTCH-scLp"}),"P5 Editor Sample 6: addEventListner"))),Object(o.b)("h4",{id:"example-7-definition-of-callback"},"Example 7: Definition of callback"),Object(o.b)("p",null,"If you define callback functions as below, it will call when notified."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const cubePositionIdChanged = (info) => {\n  console.log('cubePositionIdChanged!', info);\n}\n\nconst cubeStandardIdChanged = (info) => {\n  console.log('cubeStandardIdChanged!', info);\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://editor.p5js.org/tetunori/sketches/tlc8-qE9d"}),"P5 Editor Sample 7: Callback definition"))),Object(o.b)("p",null,"Here are the all callback function name."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const onButtonPressed()\nconst onButtonReleased()\nconst onBatteryLevelChanged(batteryLevel: number)\nconst onFlatChanged(flat: boolean)\nconst onCollisionOccurred()\nconst onDoubleTapped()\nconst onPostureChanged(posture: string)\nconst onPositionIdChanged(info: positionIdInfo)\nconst onStandardIdChanged(info: standardIdInfo)\n")),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("h3",{id:"improve-performance"},"Improve Performance"),Object(o.b)("h4",{id:"use-async-function-for-calling-cube-api"},"Use async function for calling cube API"),Object(o.b)("p",null,"Depending on your PC environment, performance of the API call or processing sketch visual might be poor.",Object(o.b)("br",{parentName:"p"}),"\n","In those cases, using async function might resolve the issue."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function draw() {\n  // Cube control command with async\n  asyncCubeControl();\n\n  // Then code your sketch...\n  ellipse( mouseX, mouseY, 20, 20 );\n}\n\nasync function asyncCubeControl() {\n  // Cube control.\n}\n")),Object(o.b)("h4",{id:"increase-framerate"},"Increase framerate"),Object(o.b)("p",null,"This library set default frame rate of ",Object(o.b)("inlineCode",{parentName:"p"},"WebBluetooth")," communication to 15fps for poor environment as mine\ud83d\ude43.",Object(o.b)("br",{parentName:"p"}),"\n","For your high performance PCs, please increase frame rate (up to 30) by calling ",Object(o.b)("inlineCode",{parentName:"p"},"setFrameRate"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"cube?.setFrameRate(30);\n")),Object(o.b)("h3",{id:"issue"},"Issue"),Object(o.b)("p",null,"Only in Windows environment, ",Object(o.b)("inlineCode",{parentName:"p"},"moveToMulti")," API does not work correctly with specified more than 3 positions."),Object(o.b)("h1",{id:"licence"},"Licence"),Object(o.b)("p",null,"This software is released under MIT License, see LICENSE."),Object(o.b)("h1",{id:"author"},"Author"),Object(o.b)("p",null,"Tetsunori NAKAYAMA."))}p.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,m=l["".concat(c,".").concat(d)]||l[d]||u[d]||o;return n?r.a.createElement(m,i({ref:t},b,{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);