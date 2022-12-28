"use strict";var C=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var H=Object.prototype.hasOwnProperty;var J=(e,o)=>{for(var t in o)C(e,t,{get:o[t],enumerable:!0})},K=(e,o,t,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of z(o))!H.call(e,l)&&l!==t&&C(e,l,{get:()=>o[l],enumerable:!(c=q(o,l))||c.enumerable});return e};var W=e=>K(C({},"__esModule",{value:!0}),e);var Y={};J(Y,{default:()=>_});module.exports=W(Y);var n=require("@raycast/api"),d=require("react");var u=require("@raycast/api"),$=u.LocalStorage.Values,P=()=>{let e=new Map(Object.entries((0,u.getPreferenceValues)()));return{autoDetect:e.get("autoDetect"),priorityDetection:e.get("priorityDetection"),advanceView:e.get("advanceView"),advanceViewLocation:e.get("advanceViewLocation")}},s=e=>!(e!=null&&String(e).length>0);var X=e=>{let o=e.charCodeAt(0).toString(16),t=4-o.length;return"0".repeat(t)+o},E=e=>String.fromCharCode(parseInt(e,16)),w=e=>{if(s(e.trim()))return"";let o="";return e.trim().split("\\u").forEach(t=>{s(t)||(o+=E(t))}),o},k=e=>{if(s(e.trim()))return"";let o="";return e.trim().replaceAll(";","").split("&#x").forEach(t=>{s(t)||(o+=E(t))}),o};var m=require("react");var p=require("@raycast/api");var D=async()=>(0,p.getSelectedText)().then(async e=>s(e)?await g():e).catch(async()=>await g()).then(e=>s(e)?"":e).catch(()=>""),N=async()=>g().then(async e=>s(e)?await(0,p.getSelectedText)():e).catch(async()=>await(0,p.getSelectedText)()).then(e=>s(e)?"":e).catch(()=>""),g=async()=>{let e=await p.Clipboard.readText();return typeof e>"u"?"":e};var L=(e,o)=>{let[t,c]=(0,m.useState)(""),l=(0,m.useCallback)(async()=>{!e||c(o==="selected"?await D():await N())},[]);return(0,m.useEffect)(()=>{l()},[l]),t.trim()};var a=require("@raycast/api"),h=require("react/jsx-runtime");function R(e){let{showCommandPreferences:o,showExtensionPreferences:t}=e;return(0,h.jsxs)(a.ActionPanel.Section,{children:[o&&(0,h.jsx)(a.Action,{icon:a.Icon.Gear,title:"Open Command Preferences",shortcut:{modifiers:["cmd"],key:","},onAction:a.openCommandPreferences}),t&&(0,h.jsx)(a.Action,{icon:a.Icon.Gear,title:"Open Extension Preferences",shortcut:{modifiers:["shift","cmd"],key:","},onAction:a.openExtensionPreferences})]})}var i=require("react/jsx-runtime");function _(){let{autoDetect:e,priorityDetection:o}=P(),[t,c]=(0,d.useState)(""),[l,B]=(0,d.useState)(""),[y,O]=(0,d.useState)(""),[x,M]=(0,d.useState)(""),[I,V]=(0,d.useState)(""),[b,G]=(0,d.useState)(""),[A,Q]=(0,d.useState)(""),T=L(e,o);return(0,d.useEffect)(()=>{async function r(){c(T)}r().then()},[T]),(0,d.useEffect)(()=>{async function r(){try{if(t.includes("\uD800")||t.includes("\uDFFF"))return;let f="",U="",S="";t.split("").forEach(v=>{f+=v.charCodeAt(0);let F=X(v);U+="\\u"+F,S+="&#x"+F+";"}),O(f),B(U),M(encodeURIComponent(t).replaceAll("%","\\x")),V(S),G(Buffer.from(t,"utf-8").toString("base64")),Q(encodeURIComponent(t))}catch(f){console.error(String(f))}}r().then()},[t]),(0,i.jsxs)(n.Form,{actions:(0,i.jsxs)(n.ActionPanel,{children:[(0,i.jsx)(n.Action.CopyToClipboard,{title:"Copy Native",content:t,shortcut:{modifiers:["cmd"],key:"1"}}),(0,i.jsxs)(n.ActionPanel.Section,{children:[(0,i.jsx)(n.Action.CopyToClipboard,{title:"Copy Unicode",content:l,shortcut:{modifiers:["cmd"],key:"2"}}),(0,i.jsx)(n.Action.CopyToClipboard,{title:"Copy UTF-8",content:x,shortcut:{modifiers:["cmd"],key:"3"}}),(0,i.jsx)(n.Action.CopyToClipboard,{title:"Copy ASCII",content:y,shortcut:{modifiers:["cmd"],key:"4"}}),(0,i.jsx)(n.Action.CopyToClipboard,{title:"Copy &#xXXXX;",content:I,shortcut:{modifiers:["cmd"],key:"5"}}),(0,i.jsx)(n.Action.CopyToClipboard,{title:"Copy Base64",content:b,shortcut:{modifiers:["cmd"],key:"6"}}),(0,i.jsx)(n.Action.CopyToClipboard,{title:"Copy Encoded URL",content:A,shortcut:{modifiers:["cmd"],key:"7"}})]}),(0,i.jsx)(n.ActionPanel.Section,{children:(0,i.jsx)(n.Action,{icon:n.Icon.Trash,title:"Clear All",shortcut:{modifiers:["shift","cmd"],key:"backspace"},onAction:()=>{c("")}})}),(0,i.jsx)(R,{showCommandPreferences:!1,showExtensionPreferences:!0})]}),children:[(0,i.jsx)(n.Form.TextField,{id:"Native",title:"Native",value:t,placeholder:"String",onChange:c}),(0,i.jsx)(n.Form.TextField,{id:"Unicode",title:"Unicode",value:l,placeholder:"\\u0031",onChange:r=>{c(w(r))}}),(0,i.jsx)(n.Form.TextField,{id:"Base64",title:"Base64",value:b,placeholder:"MQ==",onChange:r=>{s(r.trim())||c(Buffer.from(r,"base64").toString("utf-8"))}}),(0,i.jsx)(n.Form.TextField,{id:"UTF-8",title:"UTF-8",value:x,placeholder:"\\xE4\\xBD\\xA0\\xE5\\xA5\\xBD",info:"Letters and numbers will not be transcode to UTF-8",onChange:r=>{try{c(decodeURIComponent(r.replaceAll("\\x","%")))}catch(f){console.error(String(f))}}}),(0,i.jsx)(n.Form.TextField,{id:"ASCII",title:"ASCII",value:y,placeholder:"Number",info:"Only ASCII greater than 13 is supported",onChange:r=>{!s(r.trim())&&Number(r.trim())>13&&c(String.fromCharCode(Number(r.trim())))}}),(0,i.jsx)(n.Form.TextField,{id:"&#xXXXX;",title:"&#xXXXX;",value:I,placeholder:"&#xXXXX;",info:"Chinese to &#xXXXX;",onChange:r=>{s(r.trim())||c(k(r))}}),(0,i.jsx)(n.Form.TextField,{id:"Encoded URL",title:"Encoded URL",value:A,placeholder:"https%3A%2F%2Fwww.raycast.com",info:"URLs encoded with encodeURIComponent",onChange:r=>{s(r.trim())||c(decodeURIComponent(r))}})]})}0&&(module.exports={});