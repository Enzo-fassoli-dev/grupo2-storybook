import{a as o}from"./components-BC7yPZn6.js";const n={title:"Componentes/Botões e ações",render:o,tags:["autodocs"],args:{label:"Comparar planos",variant:"",disabled:!1},argTypes:{label:{name:"Rótulo",control:"text"},variant:{name:"Estilo",options:["","outline","ghost","danger"],control:{type:"select",labels:{"":"Principal",outline:"Contorno",ghost:"Texto",danger:"Destrutivo"}}},disabled:{name:"Desabilitado",control:"boolean"}}},a={},e={name:"Secundário",args:{label:"Ver detalhes",variant:"outline"}},r={args:{label:"Limpar lista",variant:"danger"}},s={args:{disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Secundário',
  args: {
    label: 'Ver detalhes',
    variant: 'outline'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Limpar lista',
    variant: 'danger'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const i=["Principal","Secundario","Destrutivo","Desabilitado"];export{s as Desabilitado,r as Destrutivo,a as Principal,e as Secundario,i as __namedExportsOrder,n as default};
