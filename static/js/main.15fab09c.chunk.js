(this["webpackJsonpflexi-45"]=this["webpackJsonpflexi-45"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(39)},,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(5),o=n.n(r),c=n(6),u=n(12),l=n(1),s=n(4),m=n(13),d=n.n(m),v=n(14),f=n.n(v),E=n(2),p=function(e){return{type:"SET_OVERALL_TOTAL_MINUTES",payload:{data:e}}},O=function(e){return{type:"SET_TIMEOUTS_IN_MINUTES",payload:{data:e}}},T=function(e){return{type:"SET_LOG_TIME",payload:{data:e}}},b=function(e){return{type:"SET_OPTIONS",payload:{data:e}}},y={inOutDetails:[{id:0},{id:1},{id:2},{id:3},{id:4}]},g={flexi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_CURRENT_WEEK":var i=a.data;return e=y,Object(E.a)(Object(E.a)({},e),{},{currentWeek:i});case"SET_OVERALL_TOTAL_MINUTES":var r=a.data;return Object(E.a)(Object(E.a)({},e),{},{overallTotalMinutes:r});case"SET_TIMEOUTS_IN_MINUTES":var o=a.data;return Object(E.a)(Object(E.a)({},e),{},{timeoutsInMinutes:o});case"SET_LOG_TIME":var c=a.data;return e.inOutDetails.map((function(t){return t.id===c.id&&Object.keys(c).forEach((function(e){return t[e]=c[e]})),e})),e;case"RESET_DATA":var u=a.data,l=e.inOutDetails.filter((function(e){return e.id!==u.id}));return l.push({id:u.id}),Object(E.a)(Object(E.a)({},e),{},{inOutDetails:l});case"SET_OPTIONS":var s=a.data;return Object(E.a)(Object(E.a)({},e),{},{options:s});default:return e}}},S={key:"root",storage:d.a,stateReconciler:f.a},M=Object(s.b)(g),h=Object(c.a)(S,M),N=(n(28),n(29),n(3)),I=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e]},D=function(e){var t=e/60,n=Math.floor(t),a=60*(t-n);return{toHours:n,toMins:Math.round(a)}},j=function(e){return("0"+e).slice(-2)},w=(n(30),function(){var e=Object(a.useState)({time:"00:00",seconds:"00",amPm:"AM",date:""}),t=Object(N.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){setInterval(o,1e3)}),[]);var o=function(){var e,t=new Date,n=j(t.getHours()%12||12),a=j(t.getMinutes()),i=j(t.getSeconds()),o=t.getHours()>=12?"PM":"AM";r({time:"".concat(n,":").concat(a),seconds:i,amPm:o,date:"".concat((e=t.getDay(),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]),", ").concat(I(t.getMonth())," ").concat(t.getDate())})};return i.a.createElement("div",{className:"container text-light date-time"},i.a.createElement("div",{className:"text-center position-relative"},i.a.createElement("div",{className:"hour-mins"},n.time),i.a.createElement("div",{className:"position-absolute date"},n.date),i.a.createElement("div",{className:"position-absolute time-unit"},n.amPm),i.a.createElement("div",{className:"position-absolute seconds"},n.seconds)))}),_=(n(31),Object(l.b)((function(e){return{currentWeek:e.flexi.currentWeek}}))((function(e){var t=e.currentWeek,n=void 0===t?[]:t;return i.a.createElement("div",{className:"cue-divider position-relative"},i.a.createElement("hr",null),i.a.createElement("div",{className:"container cue-wrapper"},i.a.createElement("div",{className:"row"},n.map((function(e,t){return i.a.createElement("div",{className:"col text-center cue-container",key:t},i.a.createElement("div",{className:"mb-2 day"},e.slice(4,10)),i.a.createElement("div",{className:"cue mx-auto"}))})))))}))),k=function(e,t){var n=t.getTime()-e.getTime();return Math.round(n/6e4)},R=(n(32),Object(l.b)((function(e){return{overallTotalMinutes:e.flexi.overallTotalMinutes,timeoutsInMinutes:e.flexi.timeoutsInMinutes}}),(function(e){return{onSetOverallTotalMinutes:function(t){return e(p(t))},onSetTimeoutsInMinutes:function(t){return e(O(t))},onSetLogTime:function(t){return e(T(t))},onSetOptions:function(t){return e(b(t))}}}))((function(e){var t=e.day,n=e.inOutDetails,r=void 0===n?{}:n,o=e.dkey,c=e.overallTotalMinutes,u=void 0===c?0:c,l=e.timeoutsInMinutes,s=void 0===l?0:l,m=e.onSetTimeoutsInMinutes,d=e.onSetOverallTotalMinutes,v=e.onSetLogTime,f=e.onSetOptions,E=Object(a.useState)(!1),p=Object(N.a)(E,2),O=p[0],T=p[1],b=Object(a.useState)(!1),y=Object(N.a)(b,2),g=y[0],S=y[1];Object(a.useEffect)((function(){if(r.timeIn&&!r.timeOut){var e=setInterval(j,1e3);v({id:o,intervalId:e,isReload:!0})}f({isDisplayed:!1})}),[]);var M=function(){f({id:o,isDisplayed:!0,timeIn:r.timeIn,timeOut:r.timeOut})},h=function(e){var t=setInterval(j,1e3);S(!0),v({id:o,isActive:!0,timeIn:e,displayTimeIn:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),intervalId:t})},I=function(e){var t=new Date(r.timeIn),n=new Date(e),a=k(t,n),i=D(a);clearInterval(r.intervalId),S(!1),v({id:o,isActive:!1,timeOut:e,displayTimeOut:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),total:"".concat(i.toHours,"h ").concat(i.toMins,"m")}),j("timeout",e)},j=function(e,t){var n=new Date(r.timeIn),a=new Date;if("timeout"!==e&&a.getDay()!==n.getDay()){var i=n;return i.setHours(23),i.setMinutes(59),void I(i)}"timeout"===e&&(a=t),a.setSeconds(0);var o=k(n,a);w(o,e)},w=function(e,t){u=r.isReload?0:s;var n=s+e;if("timeout"===t&&m(n),"timeout"===t||r.isReload)return v({id:o,isReload:!1}),void d(n);d(u+e)};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col day-wrapper",onClick:function(){return function(){var e=new Date;e.setSeconds(0);var n=new Date(t);e.getDay()===n.getDay()?r.timeIn?r.timeOut?M():I(e):h(e):alert("Not today")}()}},i.a.createElement("span",null,t.slice(0,1)),i.a.createElement("div",{className:"position-relative day-container"},i.a.createElement("div",{className:"glow-on-hover ".concat(O||g||r.isActive?"active":"")}),i.a.createElement("div",{className:"day text-center position-absolute\n              ".concat(r.isActive?"time-in":"","\n              ").concat(O&&r.timeOut?"":"d-flex align-items-center","\n              "),onMouseEnter:function(){return T(!0)},onMouseLeave:function(){return T(!1)}},function(){var e,t=i.a.createElement("p",null,"IN ",r.displayTimeIn);return r.timeIn&&!r.timeOut&&(e=t),r.timeOut&&O&&(e=i.a.createElement(i.a.Fragment,null,t,i.a.createElement("p",null,"OUT ",r.displayTimeOut))),r.timeOut&&!O&&(e=i.a.createElement("p",null,"Total ",r.total)),e}()))))}))),A=(n(33),Object(l.b)((function(e){return{currentWeek:e.flexi.currentWeek,inOutDetails:e.flexi.inOutDetails}}),(function(e){return{onSetCurrentWeek:function(t){return e(function(e){return{type:"SET_CURRENT_WEEK",payload:{data:e}}}(t))}}}))((function(e){var t=e.currentWeek,n=void 0===t?[]:t,r=e.inOutDetails,o=e.onSetCurrentWeek;Object(a.useEffect)((function(){c()}),[]);var c=function(){for(var e,t,a=new Date,i=[],r=1;r<=5;r++){var c=a.getDate()-a.getDay()+r,u=new Date(a.setDate(c)).toDateString();i.push(u)}return e=n,t=i,Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((function(e,n){return e===t[n]}))||o(i),i},u=function(e){return r.filter((function(t){return t.id===e}))};return i.a.createElement("div",{className:"container days-list"},i.a.createElement("div",{className:"row days-list-container"},n.map((function(e,t){return i.a.createElement(R,{key:t,dkey:t,day:e,inOutDetails:u(t)[0]})}))))}))),x=(n(34),Object(l.b)((function(e){return{overallTotalMinutes:e.flexi.overallTotalMinutes}}))((function(e){var t=e.overallTotalMinutes,n=void 0===t?0:t,r=Object(a.useState)({requiredTimeInMinutes:2700,displayTotalHoursThisWeek:"45h 0m",displayRemainingTime:"45h 0m"}),o=Object(N.a)(r,2),c=o[0],u=o[1];Object(a.useEffect)((function(){l()}),[n]);var l=function(){var e=c.requiredTimeInMinutes-n,t=D(e).toHours,a=D(e).toMins,i=D(n).toHours,r=D(n).toMins;u(Object(E.a)(Object(E.a)({},c),{},{displayTotalHoursThisWeek:"".concat(i,"h ").concat(r,"m"),displayRemainingTime:"".concat(t,"h ").concat(a,"m")}))};return i.a.createElement("div",{className:"container other-data"},i.a.createElement("h6",{className:"header"},"OTHER DATA"),i.a.createElement("div",{className:"total-hours"},i.a.createElement("span",null,"Total hours this week"),i.a.createElement("span",{className:"float-right"},c.displayTotalHoursThisWeek)),i.a.createElement("div",{className:"remaining-time"},i.a.createElement("span",null,"Remaining Time"),i.a.createElement("span",{className:"float-right"},c.displayRemainingTime)))}))),L=(n(35),function(){return i.a.createElement("div",{className:"app-header position-relative"},i.a.createElement("div",{className:"gradient-border"},"Flexi45"))}),H=(n(36),function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,"\xa9 2020 - Made with ",i.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"ReactJS")))}),W=(n(37),Object(l.b)((function(e){return{options:e.flexi.options,timeoutsInMinutes:e.flexi.timeoutsInMinutes}}),(function(e){return{onSetOptions:function(t){return e(b(t))},onSetLogTime:function(t){return e(T(t))},onResetData:function(t){return e(function(e){return{type:"RESET_DATA",payload:{data:e}}}(t))},onSetOverallTotalMinutes:function(t){return e(p(t))},onSetTimeoutsInMinutes:function(t){return e(O(t))}}}))((function(e){var t=e.options,n=e.timeoutsInMinutes,r=void 0===n?0:n,o=e.onSetOptions,c=e.onSetLogTime,u=e.onResetData,l=e.onSetTimeoutsInMinutes,s=e.onSetOverallTotalMinutes,m=Object(a.useState)(""),d=Object(N.a)(m,2),v=d[0],f=d[1],E=Object(a.useState)(""),p=Object(N.a)(E,2),O=p[0],T=p[1];Object(a.useEffect)((function(){var e=new Date(t.timeIn),n=new Date(t.timeOut),a=j(e.getHours())+":"+j(e.getMinutes()),i=j(n.getHours())+":"+j(n.getMinutes());f(a),T(i)}),[]);var b=function(e,t){var n="reset"===t?r-e:r+e;l(n),s(n)},y=function(){o({isDisplayed:!1})};return i.a.createElement("div",{className:"options"},i.a.createElement("h4",null,"Options"),i.a.createElement("div",{className:"options-container"},i.a.createElement("div",{className:"in-out-container"},i.a.createElement("div",{className:"timein"},i.a.createElement("label",{htmlFor:"timein"},"Time In: "),i.a.createElement("input",{id:"timein",type:"time",name:"timein",value:v,onChange:function(e){return f(e.target.value)}})),i.a.createElement("div",{className:"timeout"},i.a.createElement("label",{htmlFor:"timeout"},"Time Out: "),i.a.createElement("input",{id:"timeout",type:"time",name:"timeout",value:O,onChange:function(e){return function(e){T(e.target.value);var t=new Date;t.setHours(v.slice(0,2)),t.setMinutes(v.slice(-2));var n=new Date;n.setHours(e.target.value.slice(0,2)),n.setMinutes(e.target.value.slice(-2)),n<t&&T(v)}(e)}}))),i.a.createElement("div",{className:"btn-group btn-group-lg",role:"group","aria-label":"Basic example"},i.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return function(){var e=new Date(t.timeIn),n=new Date(t.timeOut),a=k(e,n);b(a,"reset"),u({id:t.id}),y()}()}},"Reset"),i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return y()}},"Cancel"),i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return function(){var e=new Date(t.timeIn);e.setHours(v.slice(0,2)),e.setMinutes(v.slice(-2));var n=new Date(t.timeOut);n.setHours(O.slice(0,2)),n.setMinutes(O.slice(-2));var a=k(new Date(t.timeIn),new Date(t.timeOut)),i=k(e,n),r=i-a,o=D(i);c({id:t.id,timeIn:e,timeOut:n,displayTimeIn:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),displayTimeOut:n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),total:"".concat(o.toHours,"h ").concat(o.toMins,"m")}),b(r,"modify"),y()}()}},"Save"))))})));n(38);var C=Object(l.b)((function(e){return{options:e.flexi.options}}))((function(e){var t=e.options,n=void 0===t?{}:t;return i.a.createElement("div",{className:"app"},n.isDisplayed?i.a.createElement(W,null):i.a.createElement(i.a.Fragment,null,i.a.createElement(L,null),i.a.createElement(w,null),i.a.createElement(_,null),i.a.createElement(A,null),i.a.createElement(x,null),i.a.createElement(H,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=Object(s.c)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),F=Object(c.b)(U);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(l.a,{store:U},i.a.createElement(u.PersistGate,{loading:i.a.createElement("div",null,"Loading..."),persistor:F},i.a.createElement(C,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.15fab09c.chunk.js.map