(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),o=a(4),c=a.n(o),i=a(5),l=a(6),d=a(1),r=a(8),u=a(7),m=(a(13),a(0)),h=function(e){var t=e.kit,a=e.kits;return Object(m.jsxs)("div",{className:"pad-bank",children:[Object(m.jsxs)("div",{className:"drum-pad",id:a[t][0].name,onClick:e.toggleAudio,children:[Object(m.jsx)("audio",{src:a[t][0].sound,className:"clip",id:"Q"}),"Q"]}),Object(m.jsxs)("div",{className:"drum-pad",id:a[t][1].name,onClick:e.toggleAudio,children:[Object(m.jsx)("audio",{src:a[t][1].sound,className:"clip",id:"W"}),"W"]}),Object(m.jsxs)("div",{className:"drum-pad",id:a[t][2].name,onClick:e.toggleAudio,children:[Object(m.jsx)("audio",{src:a[t][2].sound,className:"clip",id:"E"}),"E"]}),Object(m.jsxs)("div",{className:"drum-pad",id:a[t][3].name,onClick:e.toggleAudio,children:[Object(m.jsx)("audio",{src:a[t][3].sound,className:"clip",id:"A"}),"A"]}),Object(m.jsxs)("div",{className:"drum-pad",id:a[t][4].name,onClick:e.toggleAudio,children:[Object(m.jsx)("audio",{src:a[t][4].sound,className:"clip",id:"S"}),"S"]}),Object(m.jsxs)("div",{className:"drum-pad",id:a[t][5].name,onClick:e.toggleAudio,children:[Object(m.jsx)("audio",{src:a[t][5].sound,className:"clip",id:"D"}),"D"]}),Object(m.jsxs)("div",{className:"drum-pad",id:a[t][6].name,onClick:e.toggleAudio,children:[Object(m.jsx)("audio",{src:a[t][6].sound,className:"clip",id:"Z"}),"Z"]}),Object(m.jsxs)("div",{className:"drum-pad",id:a[t][7].name,onClick:e.toggleAudio,children:[Object(m.jsx)("audio",{src:a[t][7].sound,className:"clip",id:"X"}),"X"]}),Object(m.jsxs)("div",{className:"drum-pad",id:a[t][8].name,onClick:e.toggleAudio,children:[Object(m.jsx)("audio",{src:a[t][8].sound,className:"clip",id:"C"}),"C"]})]})},p=a.p+"static/media/snare.9db70d1a.wav",j=a.p+"static/media/cl_hihat.022306fb.wav",g=a.p+"static/media/claves.5a5aaf92.wav",v=a.p+"static/media/cowbell.ac83fa89.wav",b=a.p+"static/media/crashcym.544ea710.wav",O=a.p+"static/media/handclap.2989c8bb.wav",C=a.p+"static/media/kick1.70f6d428.wav",f=a.p+"static/media/open_hh.cd2be734.wav",w=a.p+"static/media/rimshot.b92aa9a8.wav",k=a.p+"static/media/909-snare.e91b5c23.wav",x=a.p+"static/media/909-closed_hh.983f3848.wav",N=a.p+"static/media/909-clap.ae860348.wav",y=a.p+"static/media/909-open-hh.f1f766f9.wav",P=a.p+"static/media/909-crash-1.4af5a5fd.wav",S=a.p+"static/media/909-crash-2.14d67467.wav",A=a.p+"static/media/909-kick.b8adcd71.wav",K=a.p+"static/media/909-midtom.3077e179.wav",E={808:[{sound:p,name:"Snare-808"},{sound:j,name:"Closed-HH-808"},{sound:C,name:"Kick-808"},{sound:O,name:"Hand-Clap-808"},{sound:f,name:"Open-HH-808"},{sound:b,name:"Crash-CYM-808"},{sound:g,name:"Claves-808"},{sound:w,name:"Rim-Shot-808"},{sound:v,name:"Cowbell-808"}],909:[{sound:k,name:"Snare-909"},{sound:x,name:"Closed-HH-909"},{sound:A,name:"Kick-909"},{sound:N,name:"Hand-Clap-909"},{sound:y,name:"Open-HH-909"},{sound:P,name:"Crash-1-909"},{sound:a.p+"static/media/909-ride.b3873807.wav",name:"Ride-909"},{sound:K,name:"Mid-Tom-909"},{sound:S,name:"Crash-2-909"}]},H=["Q","W","E","A","S","D","Z","X","C"],D=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={controlPanelClosed:!0,controlPanelContent:!1,volume:50,currentKit:"808",currentSound:"",power:!0},n.toggleControlPanel=n.toggleControlPanel.bind(Object(d.a)(n)),n.toggleAudio=n.toggleAudio.bind(Object(d.a)(n)),n.handleVolume=n.handleVolume.bind(Object(d.a)(n)),n.togglePower=n.togglePower.bind(Object(d.a)(n)),n.handleKit=n.handleKit.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",(function(t){e.handleKeyPress(t)}))}},{key:"toggleAudio",value:function(e){if(this.state.power){"onClick"===e._reactName&&(e=e.target);var t=e.querySelector(".clip");t.pause(),t.currentTime=0,t.volume=this.state.volume/100,t.play();var a=e.id;this.setState({currentSound:a}),e.style.width="98%",e.style.height="98%",e.style.backgroundColor="#62a0f1",setTimeout((function(){e.style.width=null,e.style.height=null,e.style.backgroundColor=null}),100)}}},{key:"handleKeyPress",value:function(e){var t=e.key.toUpperCase();if(H.includes(t)){var a=document.getElementById(t).parentElement;this.toggleAudio(a)}}},{key:"toggleControlPanel",value:function(e){var t=this;this.state.controlPanelClosed?(this.setState({controlPanelClosed:!this.state.controlPanelClosed}),setTimeout((function(){t.setState({controlPanelContent:!t.state.controlPanelContent})}),250),document.getElementById("controlArrow").classList.add("flip")):(document.getElementById("content").classList.remove("content-appear"),setTimeout((function(){t.setState({controlPanelContent:!t.state.controlPanelContent}),setTimeout((function(){t.setState({controlPanelClosed:!t.state.controlPanelClosed})}),250),document.getElementById("controlArrow").classList.remove("flip")}),250))}},{key:"handleVolume",value:function(e){var t=e.target.value;this.setState({volume:t,currentSound:"Volume: ".concat(t)})}},{key:"togglePower",value:function(){this.setState({power:!this.state.power,currentSound:"Power: ".concat(this.state.power?"Off":"On")})}},{key:"handleKit",value:function(e){this.setState({currentKit:e.target.value,currentSound:"Kit: ".concat(e.target.value)})}},{key:"render",value:function(){var e=this.state.controlPanelClosed?"control-panel-closed":"control-panel",t=this.state.controlPanelContent?"control-panel-content":"control-panel-content-closed";return this.state.controlPanelContent&&setTimeout((function(){document.getElementById("content").classList.add("content-appear")}),10),Object(m.jsxs)("div",{className:"drum-machine",id:"drum-machine",children:[Object(m.jsx)("div",{className:"display",id:"display",children:this.state.currentSound.replace(/[-]/g," ")}),Object(m.jsx)(h,{toggleAudio:this.toggleAudio,kit:this.state.currentKit,kits:E,currentSound:this.state.currentSound}),Object(m.jsx)("div",{className:e,children:Object(m.jsxs)("div",{className:t,id:"content",children:[Object(m.jsxs)("div",{className:"power",children:[Object(m.jsx)("span",{children:"Power"}),Object(m.jsx)("div",{className:"form-check form-switch on-off-container form-switch-lg",children:Object(m.jsx)("input",{className:"form-check-input power-switch shadow-none",type:"checkbox",id:"powerSwitch",onChange:this.togglePower,defaultChecked:!0})})]}),Object(m.jsx)("div",{className:"change-kit",children:Object(m.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:this.handleKit,children:[Object(m.jsx)("option",{value:"808",defaultValue:!0,children:"808 Drum Kit"}),Object(m.jsx)("option",{value:"909",children:"909 Drum Kit"})]})}),Object(m.jsxs)("div",{className:"volume",children:[Object(m.jsx)("span",{children:"Volume"}),Object(m.jsx)("input",{type:"range",className:"form-range",id:"volumeRange",onChange:this.handleVolume})]})]})}),Object(m.jsx)("div",{className:"control-panel-toggler",onClick:this.toggleControlPanel,children:Object(m.jsx)("i",{className:"fas fa-angle-double-right",id:"controlArrow"})})]})}}]),a}(s.a.Component);c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.30dead2e.chunk.js.map