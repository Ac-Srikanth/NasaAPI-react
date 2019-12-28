(this["webpackJsonpnasa-apod"]=this["webpackJsonpnasa-apod"]||[]).push([[0],{35:function(e,t,a){e.exports=a(73)},40:function(e,t,a){},62:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),o=(a(40),a(5)),s=a(6),i=a(8),d=a(7),m=a(9),h=a(19),u=a(11),p=a(15),b=a.n(p),E=a(14),f=a.n(E);b.a.serverURL="https://api.backendless.com",b.a.initApp("11E907C8-1689-4223-923B-F2EEB8DE0D6F","2438732D-E7CE-48DA-B2F2-A871F9EEEFA8");var g=function(e){function t(e){var a,n;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={objectID:null},f.a.get("https://api.nasa.gov/planetary/apod?api_key=OpY1aZ3IX0QGbIBFcbckdGLnpdjh8Ak5lIqG4EpP").then((function(e){n=e.data,b.a.Data.of("NasaAPOD_DB").save({copyright:n.copyright,dated:n.date,explanation:n.explanation,hdurl:n.hdurl,title:n.title,url:n.url,media_type:n.media_type}).then((function(e){console.log("Database Updated with Object ID: ",e.objectId),a.setState({objectID:e.objectId})}))})).catch((function(e){console.error("Error while updating the database: ",e)})),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("h6",null,"Updated Database with ID : ",this.state.objectID)}}]),t}(n.Component),v=(a(62),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement("a",{className:"navbar-brand font-weight-bold",href:"#"},this.props.header))}}]),t}(n.Component)),y=a(32),j=a.n(y),O=(a(70),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(j.a,{className:"loader",loaded:this.props.loaded})}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={data:[],dataExists:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.nasa.gov/planetary/apod?api_key=OpY1aZ3IX0QGbIBFcbckdGLnpdjh8Ak5lIqG4EpP").then((function(t){e.setState({data:t.data}),e.setState({dataExists:!0})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v,{header:"APOD"}),c.a.createElement(O,{loaded:this.state.dataExists}),c.a.createElement("div",{className:"container my-4"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{class:"col-12 col-lg-6"},c.a.createElement("h4",{className:"karla"},this.state.data.title)),c.a.createElement("div",{className:"col-12 col-lg-6"},c.a.createElement("h6",{className:"text-secondary font-weight-light text-lg-right"},this.state.data.date)),c.a.createElement("div",{className:"col-12 col-lg-5 my-2"},c.a.createElement("img",{alt:"Astronomy Photo of the Day",className:"img-fluid",src:this.state.data.url}),c.a.createElement("div",{className:"d-flex mt-2 light-grey py-2"},c.a.createElement("h6",{className:"mx-2 mt-1"},c.a.createElement("span",{className:"badge badge-info p-2"},c.a.createElement("a",{href:this.state.data.url,class:"text-decoration-none text-light",target:"_blank"},"Standard Image"))),c.a.createElement("h6",{className:"mx-2 mt-1"},c.a.createElement("span",{className:"badge badge-info  p-2"},c.a.createElement("a",{href:this.state.data.hdurl,class:"text-decoration-none text-light",target:"_blank"},"HD Image"))))),c.a.createElement("div",{className:"col-12 col-lg-7 my-2"},c.a.createElement("p",{className:"text-justify text-wrap standard-font-grey"},this.state.data.explanation),c.a.createElement("small",{className:"karla text-secondary"},"Copyright: ",this.state.data.copyright," ")))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).updatedb=function(){console.log("This is from new function.")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null),c.a.createElement(h.a,null,c.a.createElement(h.b,{to:"/updatedb"}),c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/updatedb"},c.a.createElement(g,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.64b3deb8.chunk.js.map