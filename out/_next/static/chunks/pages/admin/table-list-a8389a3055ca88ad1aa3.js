_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{i6E2:function(e,a,t){"use strict";t.d(a,"a",(function(){return T}));var r=t("wx14"),n=t("ODXe"),o=t("Ff2n"),i=t("q1tI"),l=t.n(i),c=t("nOHt"),s=t("t/UT"),u=(t("faiq"),t("R/WZ")),d=t("gWHO"),p=t("HXcA"),h=t("RG8o"),m=t("em7R"),f=t("8cHP"),b=t("rePB"),g=t("jfJP");function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(Object(t),!0).forEach((function(a){Object(b.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var v,y=function(e){var a;return{wrapper:{position:"relative",top:"0",height:"100vh"},mainPanel:O(O((a={},Object(b.a)(a,e.breakpoints.up("md"),{width:"calc(100% - ".concat(g.j,"px)")}),Object(b.a)(a,"overflow","auto"),Object(b.a)(a,"position","relative"),Object(b.a)(a,"float","right"),a),g.z),{},{maxHeight:"100%",width:"100%",overflowScrolling:"touch"}),content:{marginTop:"70px",padding:"30px 15px",minHeight:"calc(100vh - 123px)"},container:g.c,map:{marginTop:"70px"}}},j=t("fC67"),C=t.n(j),P=t("p3mC"),x=t.n(P),S=l.a.createElement,N=Object(u.a)(y);function T(e){var a=e.children,t=Object(o.a)(e,["children"]),i=Object(c.useRouter)(),u=N(),b=l.a.createRef(),g=l.a.useState(C.a),w=Object(n.a)(g,2),O=w[0],y=w[1],j=l.a.useState("white"),P=Object(n.a)(j,2),T=P[0],W=P[1],F=l.a.useState("dropdown show"),H=Object(n.a)(F,2),D=H[0],k=H[1],E=l.a.useState(!1),R=Object(n.a)(E,2),$=R[0],_=R[1],z=function(){_(!$)},B=function(){return"/admin/maps"!==i.pathname},M=function(){window.innerWidth>=960&&_(!1)};return l.a.useEffect((function(){return navigator.platform.indexOf("Win")>-1&&(v=new s.a(b.current,{suppressScrollX:!0,suppressScrollY:!1}),document.body.style.overflow="hidden"),window.addEventListener("resize",M),function(){navigator.platform.indexOf("Win")>-1&&v.destroy(),window.removeEventListener("resize",M)}}),[b]),S("div",{className:u.wrapper},S(h.a,Object(r.a)({routes:f.a,logoText:"Creative Tim",logo:x.a,image:O,handleDrawerToggle:z,open:$,color:T},t)),S("div",{className:u.mainPanel,ref:b},S(d.a,Object(r.a)({routes:f.a,handleDrawerToggle:z},t)),B()?S("div",{className:u.content},S("div",{className:u.container},a)):S("div",{className:u.map},a),B()?S(p.a,null):null,S(m.a,{handleImageClick:function(e){y(e)},handleColorClick:function(e){W(e)},bgColor:T,bgImage:O,handleFixedClick:function(){k("dropdown"===D?"dropdown show":"dropdown")},fixedClasses:D})))}},vJfW:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/table-list",function(){return t("wBqR")}])},wBqR:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),o=t("R/WZ"),i=t("i6E2"),l=t("i4t8"),c=t("mtPR"),s=t("3T+C"),u=t("A2So"),d=t("2zww"),p=t("UsYt"),h=n.a.createElement,m=Object(o.a)({cardCategoryWhite:{"&,& a,& a:hover,& a:focus":{color:"rgba(255,255,255,.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},"& a,& a:hover,& a:focus":{color:"#FFFFFF"}},cardTitleWhite:{color:"#FFFFFF",marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:"#777",fontSize:"65%",fontWeight:"400",lineHeight:"1"}}});function f(){var e=m();return h(c.a,null,h(l.a,{xs:12,sm:12,md:12},h(u.a,null,h(d.a,{color:"primary"},h("h4",{className:e.cardTitleWhite},"Simple Table"),h("p",{className:e.cardCategoryWhite},"Here is a subtitle for this table")),h(p.a,null,h(s.a,{tableHeaderColor:"primary",tableHead:["Name","Country","City","Salary"],tableData:[["Dakota Rice","Niger","Oud-Turnhout","$36,738"],["Minerva Hooper","Cura\xe7ao","Sinaai-Waas","$23,789"],["Sage Rodriguez","Netherlands","Baileux","$56,142"],["Philip Chaney","Korea, South","Overland Park","$38,735"],["Doris Greene","Malawi","Feldkirchen in K\xe4rnten","$63,542"],["Mason Porter","Chile","Gloucester","$78,615"]]})))),h(l.a,{xs:12,sm:12,md:12},h(u.a,{plain:!0},h(d.a,{plain:!0,color:"primary"},h("h4",{className:e.cardTitleWhite},"Table on Plain Background"),h("p",{className:e.cardCategoryWhite},"Here is a subtitle for this table")),h(p.a,null,h(s.a,{tableHeaderColor:"primary",tableHead:["ID","Name","Country","City","Salary"],tableData:[["1","Dakota Rice","$36,738","Niger","Oud-Turnhout"],["2","Minerva Hooper","$23,789","Cura\xe7ao","Sinaai-Waas"],["3","Sage Rodriguez","$56,142","Netherlands","Baileux"],["4","Philip Chaney","$38,735","Korea, South","Overland Park"],["5","Doris Greene","$63,542","Malawi","Feldkirchen in K\xe4rnten"],["6","Mason Porter","$78,615","Chile","Gloucester"]]})))))}f.layout=i.a,a.default=f}},[["vJfW",0,2,1,3,5,6,7,4]]]);