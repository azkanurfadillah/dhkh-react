(this["webpackJsonpdhkh-using-react"]=this["webpackJsonpdhkh-using-react"]||[]).push([[0],{116:function(e,a,t){},117:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),i=(t(62),t(63),t(64),t(17)),o=t(16),s=t(51),m=Object(o.c)({Kedai:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH_KEDAI":return a.payload;default:return e}}}),u=[s.a],d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,p=Object(o.e)(m,{},d(o.a.apply(void 0,u))),h=(t(69),t(9)),E=t(124),g=t(120),b=t(30),f=t.n(b),k=t(18),v=t.n(k),w=t(21),O=t(52),j=t.n(O),y=t(119);var N=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({}),o=Object(h.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)(""),d=Object(h.a)(u,2),p=d[0],E=d[1],g=Object(n.useState)(!1),b=Object(h.a)(g,2),f=b[0],k=b[1],O=Object(i.b)(),N=function(){var e=Object(w.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),e.prev=1,!(t.length<1)){e.next=6;break}E("please type something"),e.next=10;break;case 6:return E(""),k(!0),e.next=10,j.a.get("https://hello-dhkh-express.herokuapp.com/api/kedai?search=".concat(t)).then((function(e){var a=e.data.result;a.length<1?(k(!1),E("maaf yang kamu cari gak ada nih")):(k(!1),m({isSuccess:e.data.isSuccess,result:a}))})).catch((function(e){E("error"),m({message:e})}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),E("error");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(a){return e.apply(this,arguments)}}();return O({type:"SEARCH_KEDAI",payload:s}),l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:N,className:"form-inline search-bar"},l.a.createElement("input",{value:t,className:"form-control mr-sm-2 search-input",type:"text",name:"search",placeholder:"kedai or halte/stasiun","aria-label":"Search",onChange:function(e){return r(e.target.value)}}),l.a.createElement("button",{className:"btn btn-outline-info my-0 my-sm-2 search-bttn",type:"submit"},"Search")),l.a.createElement("section",{className:"warn-input"},l.a.createElement(y.a,{style:{display:f?" block":"none",margin:"0px"},size:"sm",type:"grow",color:"danger"}),l.a.createElement("p",{id:"warn-input"},p)))};t(88);var S=function(){var e=Object(n.useState)(!1),a=Object(h.a)(e,2),t=a[0],r=a[1],c=function(){return r(!t)};return l.a.createElement("header",null,l.a.createElement("div",{className:"navbar navbar-light bg-white wrap-header "},l.a.createElement("a",{href:"#top",onClick:c,className:"navbar-brand"},l.a.createElement("img",{src:f.a,width:"50",height:"50",className:"rounded-circle dhkh-header",alt:"logo dhkh"})),l.a.createElement(N,null)),l.a.createElement("div",{className:"line-header"}),l.a.createElement(E.a,{isOpen:t,toggle:c},l.a.createElement("button",{onClick:c,type:"button",className:"close","aria-label":"Close"},l.a.createElement("span",{className:"float-right",style:{padding:"10px 20px"},"aria-hidden":"true"},"\xd7")),l.a.createElement("div",{className:"dhkh-card"},l.a.createElement("div",{className:"img-wrapper"},l.a.createElement("img",{className:"rounded-circle igtw-dhkh",top:!0,src:f.a,alt:"logo DHKH"})),l.a.createElement("div",{className:"igtw-btn"},l.a.createElement(g.a,{href:"https://www.instagram.com/darihalte_kehalte/?hl=id",target:"_blank",rel:"noopener",id:"ig"},"Instagram"),l.a.createElement(g.a,{id:"tw",href:"https://twitter.com/drhaltekehalte",target:"_blank",rel:"noopener"},"Twitter")))))},_=t(53),x=t.n(_),C=(t(99),t(123)),D=t(121),H=t(122),A=t(54),K=t.n(A),I=function(e){var a=e.kedai,t=Object(n.useState)(!0),r=Object(h.a)(t,2),c=r[0],i=r[1],o=Object(n.useState)(!1),s=Object(h.a)(o,2),m=s[0],u=s[1],d=Object(n.useState)(!1),p=Object(h.a)(d,2),b=p[0],f=p[1],k=function(){return u(!m)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"addt-buttons float-right"},l.a.createElement(g.a,{outline:!0,color:"danger",onClick:k,className:"pb-0 px-0",style:{border:"none"}},l.a.createElement("span",{className:"material-icons",id:"TooltipExample"},"error_outline"),l.a.createElement(C.a,{placement:"top",isOpen:b,target:"TooltipExample",toggle:function(){return f(!b)}},"send us message")),l.a.createElement(E.a,{isOpen:m,toggle:k},l.a.createElement(D.a,{toggle:k},"ada kesalahan dari info ",a.nama_kedai,"?"),l.a.createElement(H.a,null,l.a.createElement("span",{className:"onworking-ft"},"feature masih dalam pengerjaan"))),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(e){return function(e,a){e.preventDefault(),document.querySelectorAll(".kedai-detail").forEach((function(e){e.id===a&&(console.log("hide",e.hidden),!0===e.hidden?(i(!1),e.removeAttribute("hidden")):(i(!0),e.setAttribute("hidden",!0)))}))}(e,a._id)}},c?"Detail":"Close")),l.a.createElement("div",{hidden:!0,className:"kedai-detail",id:a._id},l.a.createElement("h5",null,"detil lokasi"),l.a.createElement("p",null,a.lokasi),l.a.createElement("div",{className:"gmap"},l.a.createElement("h5",null,"lihat lokasi di Google Map "),l.a.createElement("a",{href:a.gmap,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",null,l.a.createElement("img",{height:"25",width:"auto",src:K.a,alt:"gmap logo"})),a.nama_kedai)),l.a.createElement("h5",null,"jam operasional "),l.a.createElement("p",null,a.jam_operasional),l.a.createElement("h5",null,"menu rekomendasi "),l.a.createElement("p",null,a.menu_rekomendasi),l.a.createElement("h5",null,"info lain "),l.a.createElement("p",null,a.info_lain&&""),l.a.createElement("h5",null,"kontributor"),l.a.createElement("p",null,a.kontributor)))};var T=function(){var e=Object(n.useState)(!1),a=Object(h.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),o=Object(h.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)(10),d=Object(h.a)(u,1)[0],p=Object(n.useState)([]),E=Object(h.a)(p,2),g=E[0],b=E[1],f=Object(n.useState)(0),k=Object(h.a)(f,2),O=k[0],j=k[1],N=Object(n.useState)(!1),S=Object(h.a)(N,2),_=S[0],C=S[1],D=Object(i.c)((function(e){return e.Kedai})),H=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;r(!1),j(Math.ceil(e.length/d));var t=e.slice(a,a+d);b(t)};Object(n.useEffect)((function(){function e(){return(e=Object(w.a)(v.a.mark((function e(){var a,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://hello-dhkh-express.herokuapp.com/api/kedai");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,m(t),H(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(window.document.title),window.document.title="Hello DHKH",r(!0),D.isSuccess&&C(D.isSuccess),function(){e.apply(this,arguments)}()}),[D]);var A=function(){console.log("halo back",s),C(!1)},K=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(_){console.log(D.result.length);var e=D.result;return e.map((function(e,a){return l.a.createElement("div",{className:"kedai-list",key:e._id},l.a.createElement("div",{className:"main-kedai-list"},l.a.createElement("h4",null,e.nama_kedai," "),l.a.createElement("p",null,e.halte_stasiun," ")),l.a.createElement(I,{kedai:e}))}))}return g.map((function(e,a){return l.a.createElement("div",{className:"kedai-list",key:e._id},l.a.createElement("div",{className:"main-kedai-list"},l.a.createElement("h4",null,e.nama_kedai," "),l.a.createElement("p",null,e.halte_stasiun," ")),l.a.createElement(I,{kedai:e}))}))};return l.a.createElement("div",{className:"kedai"},l.a.createElement("section",{className:"loading",style:{display:t?" block":"none"}},l.a.createElement(y.a,{type:"grow",color:"primary"}),l.a.createElement(y.a,{type:"grow",color:"danger"}),l.a.createElement(y.a,{type:"grow",color:"warning"}),l.a.createElement(y.a,{type:"grow",color:"success"}),l.a.createElement(y.a,{type:"grow",color:"info"})),l.a.createElement("section",null,K()),l.a.createElement("div",{className:"btn-back",style:{margin:"10px 0 0 15px"}},function(){if(_)return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn-primary btn-sm",style:{letterSpacing:"2px"},onClick:A},"Back"),l.a.createElement("p",{id:"broke-pg"}," maaf paginationnya gak bisa di pake. lol"))}()),l.a.createElement("section",null,l.a.createElement("div",{className:"pagination"},l.a.createElement(x.a,{previousLabel:l.a.createElement("span",null,"\xab"),nextLabel:l.a.createElement("span",null,"\xbb"),breakLabel:l.a.createElement("span",{className:"gap"},"..."),breakClassName:"break-me",pageCount:O,marginPagesDisplayed:1,pageRangeDisplayed:2,onPageChange:function(e){var a=e.selected*d;_?K(a):H(s,a)},containerClassName:"kedai-pagination",activeClassName:"active",disabledClassName:"disabled"}))))};t(116);function L(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"line-footer"}),l.a.createElement("div",{className:"navbar navbar-light bg-white wrap-footer "},l.a.createElement("p",null," \xa9 2020"),l.a.createElement("p",null," azkanurfadillah@gmail.com"),l.a.createElement("p",{href:"googl.com"}," @azkaka")))}var R=function(){return l.a.createElement("div",{className:"home"},l.a.createElement(S,null),l.a.createElement(T,null),l.a.createElement(L,null))};var z=function(){return l.a.createElement(i.a,{store:p},l.a.createElement("div",{className:"App"},l.a.createElement(R,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},30:function(e,a,t){e.exports=t.p+"static/media/DHKH.ea5232a2.jpg"},54:function(e,a,t){e.exports=t.p+"static/media/googlemaps.f8f4c5e6.jpeg"},57:function(e,a,t){e.exports=t(117)},63:function(e,a,t){},64:function(e,a,t){},69:function(e,a,t){},88:function(e,a,t){},99:function(e,a,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.efb9fc5e.chunk.js.map