import{c as s}from"./components-D8bA4_H-.js";const t={title:"Componentes/Oferta e procedência",render:s,args:{expires:"2026-11-18",updated:"2026-11-09T08:00:00-03:00",origin:"documento"},argTypes:{expires:{name:"Data de validade",control:"select",options:["2026-11-18","2026-11-12","2026-11-08",null]},updated:{name:"Última atualização",control:"select",options:["2026-11-09T08:00:00-03:00","2026-11-08T09:00:00-03:00",null]},origin:{name:"Origem orgânica",control:"select",options:["documento","não informada"]}}},e={},a={name:"Vencimento e preço antigo",args:{expires:"2026-11-12",updated:"2026-11-08T09:00:00-03:00"}},r={name:"Dados ausentes",args:{expires:null,updated:null,origin:"não informada"}},o={args:{expires:"2026-11-08"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Vencimento e preço antigo',
  args: {
    expires: '2026-11-12',
    updated: '2026-11-08T09:00:00-03:00'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Dados ausentes',
  args: {
    expires: null,
    updated: null,
    origin: 'não informada'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    expires: '2026-11-08'
  }
}`,...o.parameters?.docs?.source}}};const i=["OfertaAtual","Avisos","AusenciaDeDados","OfertaVencida"];export{r as AusenciaDeDados,a as Avisos,e as OfertaAtual,o as OfertaVencida,i as __namedExportsOrder,t as default};
