webpackJsonp([4],{0:function(e,exports,t){e.exports=t(109)},1:function(e,exports){e.exports=React},3:function(e,exports){e.exports=ReactDOM},8:function(e,exports){e.exports=Next},12:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){for(var a=Object.getOwnPropertyNames(t),l=0;l<a.length;l++){var n=a[l],c=Object.getOwnPropertyDescriptor(t,n);c&&c.configurable&&void 0===e[n]&&Object.defineProperty(e,n,c)}return e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):l(e,t))}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(1),i=a(o),m=t(8);t(14);var u=m.Nav.Item,s={home:"./index.html",doc:"./doc.html",demo:"./demo.html",about:"./about.html"},d=function(e){function t(){return n(this,t),c(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=location,t=e.pathname,a=t;return a.includes("/index.html")?a=s.home:a.includes("doc.html")?a=s.doc:a.includes("demo.html")?a=s.demo:a.includes("about.html")&&(a=s.about),i["default"].createElement("div",{className:"c-header"},i["default"].createElement("div",{className:"c-width-header"},i["default"].createElement(m.Nav,{type:"text",defaultSelectedKeys:s.home,direction:"hoz",selectedKeys:a,header:i["default"].createElement("a",{href:s.home},i["default"].createElement("img",{className:"logo",src:"https://img.alicdn.com/tfs/TB1SmIQdnnI8KJjy0FfXXcdoVXa-198-160.png"}),i["default"].createElement("span",null,"Bizcharts"))},i["default"].createElement(u,{key:s.home},i["default"].createElement("a",{href:s.home},"\u9996\u9875")),i["default"].createElement(u,{key:s.doc},i["default"].createElement("a",{href:s.doc},"\u6587\u6863")),i["default"].createElement(u,{key:s.demo},i["default"].createElement("a",{href:s.demo},"\u56fe\u8868\u793a\u4f8b")),i["default"].createElement(u,{key:s.about},i["default"].createElement("a",{href:s.about},"\u5173\u4e8e")))))},t}(i["default"].Component);exports["default"]=d,e.exports=exports["default"]},14:function(e,exports){},44:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){for(var a=Object.getOwnPropertyNames(t),l=0;l<a.length;l++){var n=a[l],c=Object.getOwnPropertyDescriptor(t,n);c&&c.configurable&&void 0===e[n]&&Object.defineProperty(e,n,c)}return e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):l(e,t))}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(1),i=a(o);t(68);var m=window.INITDATA||{},u=m.route,s=void 0===u?{}:u,d=([{title:"\u53cb\u60c5\u94fe\u63a5",links:[{text:"G2",link:"//antv.alipay.com/g2/doc/index.html"},{text:"Fusion",link:"//fusion-design.alibaba-inc.com/"}]},{title:"\u8054\u7cfb\u6211\u4eec",links:[{text:"\u5173\u4e8e\u6211\u4eec",link:"/about"},{text:"\u53cd\u9988",link:s.feedback}]}],function(e){function t(){return n(this,t),c(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return i["default"].createElement("div",{className:"c-footer"},i["default"].createElement("div",{className:"l-container"},i["default"].createElement("h3",null,"\u53cb\u60c5\u94fe\u63a5"),i["default"].createElement("div",{className:"link-list"},i["default"].createElement("div",{className:"links l-left"},i["default"].createElement("ul",{className:"links-col"},i["default"].createElement("li",null,i["default"].createElement("a",{href:"//www.aliued.cn/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d001;"},"\u963f\u91cc\u5df4\u5df4(\u4e2d\u6587\u7ad9)UED")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//www.aliued.com/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d002;"},"\u963f\u91cc\u5df4\u5df4\u56fd\u9645UED")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//mux.alimama.com/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d003;"},"\u963f\u91cc\u5988\u5988MUX")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//branding.tmall.com",target:"_blank","data-spm-click":"gostr=/mc;locaid=d005;"},"\u5929\u732bUED")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//ued.alipay.com/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d006;"},"\u652f\u4ed8\u5b9dUED"))),i["default"].createElement("ul",{className:"links-col"},i["default"].createElement("li",null,i["default"].createElement("a",{href:"//demo.alibaba-inc.com/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d007;"},"Demo\u4e2d\u5fc3")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//designboard.alibaba-inc.com/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d008;"},"\u8bbe\u8ba1\u677f")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//zhiliao.alibaba-inc.com/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d009;"},"\u77e5\u4e86")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//goldeneyes.taobao.com/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d010;"},"\u9ec4\u91d1\u773c")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//antcool.alibaba-inc.com/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d011;"},"Antcool"))),i["default"].createElement("ul",{className:"links-col"},i["default"].createElement("li",null,i["default"].createElement("a",{href:"//pw.alibaba-inc.com/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d013;"},"\u63a8\u5e7f\u5e73\u53f0")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//idesign.alibaba-inc.com/Freshmen",target:"_blank","data-spm-click":"gostr=/mc;locaid=d014;"},"\u5de5\u4f5c\u5e73\u53f0")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//utime.alibaba.net/my/create/activity",target:"_blank","data-spm-click":"gostr=/mc;locaid=d016;"},"U-time")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//uone.alibaba-inc.com/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d017;"},"U\u4e00\u5957")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//tms.alibaba-inc.com/web",target:"_blank","data-spm-click":"gostr=/mc;locaid=d018;"},"TMS"))),i["default"].createElement("ul",{className:"links-col"},i["default"].createElement("li",null,i["default"].createElement("a",{href:"//ubanner.alibaba-inc.com/",target:"_blank",rel:"hello","data-spm-click":"gostr=/mc;locaid=d015;"},"Ubanner")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"//duang.alibaba-inc.com/",target:"_blank","data-spm-click":"gostr=/mc;locaid=d019;"},"Duang")))),i["default"].createElement("ul",{className:"otherlinks l-right"},i["default"].createElement("li",null,i["default"].createElement("icon",{className:"iconfont icon-about"}),i["default"].createElement("a",{href:""},"\u5173\u4e8e\u6211\u4eec")),i["default"].createElement("li",null,i["default"].createElement("icon",{className:"iconfont icon-mail"}),i["default"].createElement("a",{href:""},"\u610f\u89c1\u53cd\u9988"))))),i["default"].createElement("div",{className:"l-bottom"},i["default"].createElement("p",{className:"copyright"},"Copyright \xa9 1999-2016 \u963f\u91cc\u5df4\u5df4\u96c6\u56e2UED\u59d4\u5458\u4f1a. All rights reserved.")))},t}(i["default"].Component));exports["default"]=d,e.exports=exports["default"]},68:14,109:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){for(var a=Object.getOwnPropertyNames(t),l=0;l<a.length;l++){var n=a[l],c=Object.getOwnPropertyDescriptor(t,n);c&&c.configurable&&void 0===e[n]&&Object.defineProperty(e,n,c)}return e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):l(e,t))}var o=t(1),i=a(o),m=t(3),u=a(m),s=t(12),d=a(s),f=t(44),p=a(f);t(8);t(163);var b=[{workNumber:"031220",name:"\u98ce\u6708",position:"\u5de5\u7a0b\u5e08",src:"https://img.alicdn.com/tfs/TB1tdngdY_I8KJjy1XaXXbsxpXa-200-200.png"},{workNumber:"83538",name:"\u5343\u8475",position:"\u5de5\u7a0b\u5e08",src:"https://img.alicdn.com/tfs/TB1Zs58d4rI8KJjy0FpXXb5hVXa-200-200.png"},{workNumber:"073490",name:"\u79c0\u946b",position:"\u5de5\u7a0b\u5e08",src:"https://img.alicdn.com/tfs/TB15dW8d4rI8KJjy0FpXXb5hVXa-200-199.png"},{workNumber:"087162",name:"\u96f7\u871c",position:"\u5de5\u7a0b\u5e08",src:"https://img.alicdn.com/tfs/TB10i16d9_I8KJjy0FoXXaFnVXa-199-200.png"},{workNumber:"072257",name:"\u706b\u4f20",position:"\u8bbe\u8ba1\u5e08",src:"https://img.alicdn.com/tfs/TB1PAO6d9_I8KJjy0FoXXaFnVXa-200-200.png"},{workNumber:"74355",name:"\u4eac\u5eb8",position:"\u8bbe\u8ba1\u5e08",src:"https://img.alicdn.com/tfs/TB1pkvmdZLJ8KJjy0FnXXcFDpXa-200-200.png"}],E=[{workNumber:"137513",name:"\u8288\u4e50",position:"\u5de5\u7a0b\u5e08",src:"https://img.alicdn.com/tfs/TB1pS56d9_I8KJjy0FoXXaFnVXa-200-200.png"},{workNumber:"136622",name:"\u4ee5\u6615",position:"\u5de5\u7a0b\u5e08",src:"https://img.alicdn.com/tfs/TB1eSDmdZLJ8KJjy0FnXXcFDpXa-133-200.png"},{workNumber:"112903",name:"\u653e\u6c5f",position:"\u5de5\u7a0b\u5e08",src:"https://img.alicdn.com/tfs/TB1hTPmdZLJ8KJjy0FnXXcFDpXa-200-200.png"},{workNumber:"106720",name:"\u8900\u6726",position:"\u8bbe\u8ba1\u5e08",src:"https://img.alicdn.com/tfs/TB1uti_d3vD8KJjy0FlXXagBFXa-200-200.png"},{workNumber:"85943",name:"\u9526\u7f18",position:"\u8bbe\u8ba1\u5e08",src:"https://img.alicdn.com/tfs/TB1wem_d3vD8KJjy0FlXXagBFXa-200-200.png"},{workNumber:"75467",name:"\u6893\u9a9e",position:"\u5de5\u7a0b\u5e08",src:"https://img.alicdn.com/tfs/TB1Q1W_d3vD8KJjy0FlXXagBFXa-200-200.png"}],h=function(e){function t(){return n(this,t),c(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return i["default"].createElement("div",{className:"about-page"},i["default"].createElement(d["default"],null),i["default"].createElement("div",{className:"main-content"},i["default"].createElement("div",{className:"banner"},i["default"].createElement("h1",{className:"main-title"},"\u5173\u4e8e"),i["default"].createElement("div",{className:"text"},"\u6211\u4eec\u662f\u56fd\u9645 UED \u53ef\u89c6\u5316\u56e2\u961f")),i["default"].createElement("div",{className:"sub-content"},i["default"].createElement("div",{className:"section"},i["default"].createElement("div",{className:"title"},i["default"].createElement("span",{className:"cutting-line"},"\u2014"),"\xa0\xa0\u56e2\u961f\u6210\u5458\xa0\xa0",i["default"].createElement("span",{className:"cutting-line"},"\u2014")),i["default"].createElement("ul",{className:"members"},b.map(function(e,t){return i["default"].createElement("li",{key:t},i["default"].createElement("img",{src:e.src}),i["default"].createElement("div",null,e.name),i["default"].createElement("div",null,e.position))})),i["default"].createElement("ul",{className:"members"},E.map(function(e,t){return i["default"].createElement("li",{key:t},i["default"].createElement("img",{src:"//work.alibaba-inc.com/photo/"+e.workNumber+".200x200.jpg"}),i["default"].createElement("div",null,e.name),i["default"].createElement("div",null,e.position))}))),i["default"].createElement("div",{className:"section section-with-qr"},i["default"].createElement("div",{className:"title"},i["default"].createElement("span",{className:"cutting-line"},"\u2014"),"\xa0\xa0\u52a0\u5165\u6211\u4eec\xa0\xa0",i["default"].createElement("span",{className:"cutting-line"},"\u2014")),i["default"].createElement("p",null,"\u5982\u679c\u4f60\u5bf9\u524d\u7aef\u3001\u5bf9\u6211\u4eec\u56e2\u961f\u3001\u5bf9\u6570\u636e\u53ef\u89c6\u5316\u3001\u5bf9\u56fe\u5f62\u6280\u672f\u5145\u6ee1\u6fc0\u60c5\u3002"),i["default"].createElement("p",null,"\u65e0\u8bba\u4f60\u662f\u5de5\u7a0b\u5e08\uff0c\u8fd8\u662f\u8bbe\u8ba1\u5e08\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\uff0c\u671f\u5f85\u4f60\u7684\u52a0\u5165\u3002"),i["default"].createElement("p",null,"hm.hm@alibaba-inc.com")),i["default"].createElement("div",{className:"section section-with-qr"},i["default"].createElement("div",{className:"title"},i["default"].createElement("span",{className:"cutting-line"},"\u2014"),"\xa0\xa0\u95ee\u9898\u4e0e\u53cd\u9988\xa0\xa0",i["default"].createElement("span",{className:"cutting-line"},"\u2014")),i["default"].createElement("p",null,"\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u6b22\u8fce\u5230\u6211\u4eec\u7684\u4ed3\u5e93\u63d0\u4ea4\u76f8\u5173\u7684 issues"),i["default"].createElement("div",null,i["default"].createElement("a",{className:"button button-info",href:"https://github.com/antvis/feedback/issues/new",target:"_blank"},"\u7acb\u5373\u53cd\u9988"))))),i["default"].createElement(p["default"],null))},t}(i["default"].Component);u["default"].render(i["default"].createElement(h,null),document.getElementById("container"))},163:14});