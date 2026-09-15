import{c}from"./createLucideIcon-KrfHon-6.js";import{f as s}from"./index-DMIAcsd1.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],n=c("circle-check",i),o={async submit(e){if(!(await fetch(s.WEB3FORMS_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:s.WEB3FORMS_ACCESS_KEY,from_name:s.APP_NAME,...e})})).ok)throw new Error("Não foi possível enviar o pedido.");return{success:!0}}},a={submitSupportRequest:e=>o.submit({subject:`Pedido de suporte: ${e.subject}`,name:e.name,email:e.email,message:e.message}),submitRecoveryRequest:e=>o.submit({subject:"Pedido de recuperação de acesso",name:e.fullName,email:e.deliveryEmail,message:`Conta: ${e.accountEmail}
Enviar novas credenciais para: ${e.deliveryEmail}`})};export{n as C,a as s};
