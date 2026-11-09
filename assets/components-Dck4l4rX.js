function R(e,t,a){const o=e===t;return{label:`${e}/${t} itens`,complete:o,highlight:o&&a}}function q(e,t){return t===null?null:e+t}function F(e,t){if(!e)return"unknown";const a=(Date.parse(e)-Date.parse(t))/864e5;return a<0?"expired":a<=3?"soon":"valid"}function L(e,t){return!!e&&Date.parse(t)-Date.parse(e)>864e5}const x=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),f=e=>x.format(e/100),v=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function h(e){const t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstElementChild}function S(e,t){return{get complete(){return e.getAttribute("aria-disabled")==="true"},show(a,o){const s=h(`<div class="success-message">
        <span class="success-mark" aria-hidden="true">✓</span>
        <div><strong></strong><p class="small"></p></div>
      </div>`);s.querySelector("strong").textContent=a,s.querySelector("p").textContent=o,e.setAttribute("aria-disabled","true"),t.replaceChildren(s)},reset(){e.removeAttribute("aria-disabled"),t.replaceChildren()}}}function c(e,t,a,o){return h(`
    <main class="ds stack">
      <header class="stack intro">
        <p class="kicker">${t}</p>
        <h1>${e}</h1>
        <p class="muted">${a}</p>
      </header>
      ${o}
    </main>
  `)}function B(){return h(`
    <main class="ds stack">
      <header class="hero stack">
        <p class="kicker">Pacote 2 · Interação Humano-Computador</p>
        <h1>Design System<br>Comparação de Alimentos</h1>
        <p>Componentes para planejar uma cesta, comparar o custo total e conferir a validade e a origem dos produtos.</p>
        <p><a href="./?path=/story/fundamentos-tokens--paleta-e-escala" target="_top">Conhecer os fundamentos →</a></p>
      </header>
      <section class="grid" aria-label="Decisões de design">
        <article class="panel tight"><p class="kicker">D1</p><h2>Compare os mesmos dados</h2><p>Total, cobertura e lojas seguem a mesma ordem em todos os planos.</p></article>
        <article class="panel tight"><p class="kicker">D2</p><h2>Explique os avisos</h2><p>Validade e atualização de preço têm rótulos e datas legíveis.</p></article>
        <article class="panel tight"><p class="kicker">D3</p><h2>Abra o cálculo sob demanda</h2><p>O resumo mostra o total. As premissas ficam disponíveis para revisão.</p></article>
        <article class="panel tight"><p class="kicker">D4</p><h2>Mostre a procedência</h2><p>Os filtros de origem podem ser combinados e cada atributo tem sua fonte.</p></article>
      </section>
      <p class="muted small">Use o menu do Storybook para explorar os componentes. Os preços, mercados e produtos dos exemplos são fictícios.</p>
    </main>
  `)}function O(){return c("Tokens de interface","Fundamentos · RNF06, RNF07, RNF08","A mesma paleta, escala de espaço e tipografia dá consistência aos componentes.",`<section class="grid" aria-label="Paleta">
      ${[["Verde de ação","--brand","#175843","Ações principais e foco da identidade"],["Papel","--paper","#F3F6EF","Fundo das demonstrações"],["Texto","--ink","#182D24","Títulos e texto principal"],["Atenção","--attention-soft","#FFF0CB","Avisos de validade e atualização"],["Erro","--danger-soft","#FCE8E6","Falhas e exclusões"],["Foco","--focus","#2854AC","Contorno de navegação por teclado"]].map(([t,a,o,s])=>`<article class="panel tight">
        <div class="swatch" style="background:var(${a})"></div>
        <h2>${t}</h2><code>${a} · ${o}</code><p class="muted small">${s}</p>
      </article>`).join("")}
    </section>
    <section class="grid" aria-label="Escalas">
      <article class="panel tight"><h2>Tipografia</h2><p>Títulos com peso 700. Texto base de 16 px e informações de apoio de 14 px.</p></article>
      <article class="panel tight"><h2>Espaçamento</h2><p>Escala de 4, 8, 12, 16, 24 e 32 px. Cantos de 8 ou 16 px conforme a superfície.</p></article>
      <article class="panel tight"><h2>Interação</h2><p>Alvos de 44 px no projeto. O foco tem contorno visível. Rótulos e texto acompanham a cor nos estados importantes.</p></article>
    </section>
    <p class="muted small">Referência de acessibilidade do projeto em <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener">WCAG 2.1</a>. Diretrizes consultadas em <a href="https://m1.material.io/usability/accessibility.html" target="_blank" rel="noopener">Material Design · Accessibility</a>.</p>`)}function T({label:e,variant:t,disabled:a}){const o=c("Botões e ações","Componentes · Material Design","Use uma ação principal por contexto. Ações secundárias e destrutivas usam estilos distintos e rótulos que descrevem o resultado.",`<section class="panel stack" aria-label="Amostra de botão">
      <div><button type="button" class="${v(t)}" ${a?"disabled":""}>${v(e)}</button></div>
      <p class="status muted" role="status"></p>
    </section>`);return o.querySelector("button").addEventListener("click",()=>{o.querySelector('[role="status"]').textContent=`Ação acionada · ${e}`}),o}const D=[{label:"Arroz tipo 1",pack:"1 kg"},{label:"Leite integral",pack:"1 L"},{label:"Feijão carioca",pack:"1 kg"}];function P(){const e=c("Busca e quantidade","D1 · RF01, RF02, RF03","A busca sugere produtos com embalagem explícita. A pessoa confirma o item e escolhe quantas embalagens entram na lista.",`<section class="panel stack" aria-label="Adicionar produto">
      <form class="stack">
        <div class="field"><label for="search-food">Produto</label>
        <input type="search" id="search-food" aria-describedby="search-hint" placeholder="Ex.: arroz ou leite">
        <small id="search-hint" class="muted">Digite parte do nome. Separe mais de um nome por vírgulas.</small></div>
        <div><button type="submit">Buscar</button></div>
      </form>
      <p role="status" class="status muted">Digite um produto para ver sugestões.</p>
      <ul class="reset stack" aria-label="Sugestões"></ul>
      <div class="tight" data-selected hidden>
        <p data-product></p>
        <div class="row">
          <button type="button" class="outline" data-minus aria-label="Diminuir quantidade">−</button>
          <output data-quantity aria-live="polite"></output>
          <button type="button" class="outline" data-plus aria-label="Aumentar quantidade">+</button>
          <button type="button" data-add>Adicionar à lista</button>
        </div>
        <div role="status" data-confirmation></div>
      </div>
    </section>`),t=e.querySelector('[role="status"]'),a=e.querySelector("ul"),o=e.querySelector("[data-selected]"),s=e.querySelector("[data-quantity]"),r=e.querySelector("[data-minus]"),i=e.querySelector("[data-plus]"),n=e.querySelector("[data-add]"),d=S(n,e.querySelector("[data-confirmation]"));let m,u=1;function g(b){u=b,s.textContent=`${u} ${u===1?"embalagem":"embalagens"}`,r.disabled=b<=1,i.disabled=b>=99,d.reset()}return e.querySelector("form").addEventListener("submit",b=>{b.preventDefault();const y=e.querySelector("input").value.toLocaleLowerCase("pt-BR").split(",").map(l=>l.trim()).filter(Boolean),k=D.filter(({label:l})=>y.some(p=>l.toLocaleLowerCase("pt-BR").includes(p))),C=y.filter(l=>!k.some(({label:p})=>p.toLocaleLowerCase("pt-BR").includes(l))),$=C.length?`Sem resultado para ${C.join(", ")}.`:"";a.replaceChildren(),o.hidden=!0,y.length?k.length?t.textContent=[$,"Confirme um dos produtos encontrados."].filter(Boolean).join(" "):t.textContent="Nenhum produto encontrado. Tente outro nome.":t.textContent="Digite pelo menos um nome para buscar.";for(const l of k){const p=h(`<li><button type="button" class="outline">${l.label} · ${l.pack}</button></li>`);p.firstElementChild.addEventListener("click",()=>{m=l,t.textContent=$,e.querySelector("[data-product]").textContent=`${l.label} · ${l.pack} por embalagem`,o.hidden=!1,g(1)}),a.append(p)}}),r.addEventListener("click",()=>g(u-1)),i.addEventListener("click",()=>g(u+1)),n.addEventListener("click",()=>{d.complete||d.show("Item adicionado à lista",`${u} × ${m.label} (${m.pack})`)}),e}function V(){const e=c("Filtros e prioridade","D4 · RF05, RF07, RF12, RF15, RF16","Prioridade é uma escolha por vez. Os atributos de origem são independentes e podem ser combinados.",`<section class="panel stack" aria-label="Controles de comparação">
      <div class="field"><label for="sort-plans">Ordenar por</label>
      <select id="sort-plans">
        <option value="Menor custo estimado total">Mais barato · inclui deslocamento</option>
        <option value="Distância do percurso">Mais próximo</option>
        <option value="Origem">Origem</option>
      </select></div>
      <h2>Origem e atributos</h2>
      <div class="row" role="group" aria-label="Atributos de origem">
        <button type="button" class="chip" aria-pressed="false">Orgânico</button>
        <button type="button" class="chip" aria-pressed="false">Vegano</button>
        <button type="button" class="chip" aria-pressed="false">Produtor local</button>
      </div>
      <div class="row"><button type="button" class="ghost" data-clear>Limpar filtros</button></div>
      <p class="status muted" role="status"></p>
    </section>`),t=[...e.querySelectorAll(".chip")],a=e.querySelector("select");function o(){const s=t.filter(i=>i.getAttribute("aria-pressed")==="true").map(i=>i.textContent),r=s.length?s.join(" + "):"Nenhum filtro de origem";e.querySelector('[role="status"]').textContent=`${a.value} · ${r}`}for(const s of t)s.addEventListener("click",()=>{s.setAttribute("aria-pressed",String(s.getAttribute("aria-pressed")!=="true")),o()});return e.querySelector("[data-clear]").addEventListener("click",()=>{for(const s of t)s.setAttribute("aria-pressed","false");o()}),a.addEventListener("change",o),o(),e}const E=[{subtotal:5400,trip:500,included:5,stores:"Mercados A e B"},{subtotal:6200,trip:200,included:5,stores:"Mercado A"},{subtotal:3800,trip:200,included:4,stores:"Mercado B"}];function I({unknownTrip:e=!1}={}){const t=e?[{subtotal:5400,trip:null,included:5,stores:"Mercados A e B"}]:E,a=t.map(r=>q(r.subtotal,r.trip)),o=Math.min(...a.filter((r,i)=>r!==null&&t[i].included===5)),s=t.map((r,i)=>{const n=a[i],d=R(r.included,5,n===o),m=d.highlight?'<span class="badge good">Menor custo completo</span>':d.complete?'<span class="badge">Lista completa</span>':'<span class="badge warn">Lista incompleta</span>';return`<li class="panel stack">
      <dl class="plan">
        <div><dt>Custo estimado total</dt><dd>${n===null?"Não estimado":f(n)}</dd></div>
        <div><dt>Cobertura</dt><dd>${d.label}</dd></div>
        <div><dt>Lojas</dt><dd>${r.stores}</dd></div>
      </dl>
      <div>${m}</div>
      <details><summary>Ver composição do custo</summary><p>Itens ${f(r.subtotal)} · Deslocamento ${r.trip===null?"não estimado":f(r.trip)}</p></details>
    </li>`});return c("Comparação de planos","D1 e D3 · RF04, RF05, RF09, RF15","A lista repete custo total, cobertura e lojas. A cobertura indica quantos itens da lista estão no plano.",`<p class="kicker">Critério · Menor custo estimado total</p><ul class="reset stack" aria-label="Planos de compra">${s.join("")}</ul>`)}const w="2026-11-09T10:00:00-03:00",z="2026-11-09",A=e=>e?e.slice(0,10).split("-").reverse().join("/"):"",M=e=>{const t=Number(e.slice(11,13)),a=e.slice(14,16);return`${t}h${a==="00"?"":a}`},N={valid:["Validade","good"],soon:["Vence em breve","warn"],expired:["Oferta vencida","error"],unknown:["Validade não informada",""]};function _({expires:e,updated:t,origin:a}){const[o,s]=N[F(e,z)],r=L(t,w);return c("Oferta e procedência","D2 e D4 · RF03, RF10, RF11, RF13","Preço por unidade, validade do lote, atualização e origem têm rótulos próprios. A data de compra do exemplo é 09/11/2026.",`<article class="panel stack">
      <div class="tight"><p class="kicker">Mercado A · Encarte digital</p><h2>Arroz tipo 1 · 1 kg</h2>
      <p><strong class="amount">R$ 8,99</strong> <span class="muted">· R$ 8,99/kg</span></p></div>
      <div class="row">
        <span class="badge ${s}">${o}${e?" · "+v(A(e)):""}</span>
        <span class="badge">${t?`Preço atualizado · ${v(A(t).slice(0,5))} às ${v(M(t))}`:"Atualização não informada"}</span>
        ${r?'<span class="badge warn">Sem atualização há mais de 24 h</span>':""}
      </div>
      <p class="muted small">Preço válido para a embalagem de 1 kg na loja informada.</p>
      <details><summary>Ver origem e evidências</summary>
        <ul class="stack"><li><strong>Orgânico</strong> · ${a==="documento"?"Documento informado pela loja · 08/11/2026":"Não informado"}</li>
        <li><strong>Produtor local</strong> · Declaração do fornecedor · 08/11/2026</li>
        <li><strong>Vegano</strong> · Não informado</li></ul>
      </details>
    </article>`)}function U({hasTrip:e=!0}={}){const t=c("Rota e estimativa","D3 · RF06, RF08, RF09, RF20","O resumo separa itens e trajeto. Abra o detalhamento para conferir a rota e alterar as premissas.",`<section class="panel stack" aria-label="Estimativa de compra">
      <dl class="plan" aria-live="polite">
        <div><dt>Subtotal dos itens</dt><dd>R$ 54,00</dd></div>
        <div><dt>Deslocamento</dt><dd data-trip></dd></div>
        <div><dt>Custo estimado total</dt><dd data-total></dd></div>
      </dl>
      <p class="muted small">Percurso estimado de 10 km com saída e retorno ao bairro informado.</p>
      <details><summary>Como calculamos</summary>
        <div class="stack">
          <ol><li>Origem · Bairro informado</li><li>Mercado A</li><li>Mercado B</li><li>Retorno à origem</li></ol>
          <div class="grid">
            <div class="field"><label for="fuel-efficiency">Consumo (km/L)</label><input id="fuel-efficiency" type="number" min="0.1" step="0.1" value="${e?"12":""}"></div>
            <div class="field"><label for="fuel-price">Combustível (R$/L)</label><input id="fuel-price" type="number" min="0" step="0.01" value="6"></div>
          </div>
          <p class="muted small">Custo do trajeto = distância ÷ consumo × preço por litro.</p>
        </div>
      </details>
    </section>`),a=t.querySelector("#fuel-efficiency"),o=t.querySelector("#fuel-price");function s(){const i=a.value!==""&&o.value!==""&&a.validity.valid&&o.validity.valid?Math.round(10/a.valueAsNumber*o.valueAsNumber*100):null,n=q(5400,i);t.querySelector("[data-trip]").textContent=i===null?"Não estimado":f(i),t.querySelector("[data-total]").textContent=n===null?"Incompleto":f(n)}return t.addEventListener("input",s),s(),t}function Y(){const e=c("Localização manual","D3 · RF06, RF07, RNF10","O campo manual permanece disponível quando a pessoa prefere digitar a origem ou nega a permissão de localização.",`<section class="panel stack" aria-label="Origem e raio">
      <p class="notice panel">Localização do dispositivo não autorizada. A origem pode ser informada manualmente.</p>
      <form class="stack">
        <div class="field"><label for="neighborhood">Bairro ou endereço</label><input id="neighborhood" required autocomplete="off" placeholder="Ex.: Centro"></div>
        <div class="field"><label for="radius">Raio de busca</label><select id="radius"><option>2 km</option><option>5 km</option><option>10 km</option></select>
        <small class="muted">Distância da origem até a loja em linha reta. A rota pode ser maior.</small></div>
        <div><button type="submit">Usar endereço informado</button></div>
        <div role="status" data-confirmation></div>
      </form>
    </section>`),t=e.querySelector("form"),a=t.querySelector("[data-confirmation]"),o=S(t.querySelector("button"),a);return t.addEventListener("input",()=>o.reset()),t.addEventListener("submit",s=>{if(s.preventDefault(),o.complete)return;const r=e.querySelector("#neighborhood").value.trim(),i=e.querySelector("#radius").value;if(!r){a.textContent="Digite um bairro ou endereço para continuar.";return}o.show("Localização salva",`${r} · Raio de ${i}`)}),e}function G({state:e}){const t={error:["Falha na consulta","Não foi possível consultar as ofertas. Sua lista está preservada.","Tentar novamente"],empty:["Sem resultados","Nenhuma oferta atende aos filtros ativos. Sua lista está preservada.","Limpar filtros"],loading:["Consultando ofertas","Estamos comparando os planos para sua lista.",""]}[e],[a,o,s]=t,r=c("Estados de consulta","D1 · RF16, RNF05, RNF11","Mostre a causa conhecida e ofereça uma ação de recuperação que preserve a lista.",`<section class="panel notice ${e} stack" aria-label="Retorno da consulta">
      <h2>${a}</h2><p>${o}</p>
      ${s?`<div><button type="button">${s}</button></div>`:'<progress aria-label="Consulta em andamento"></progress>'}
      <p class="status" role="status"></p>
    </section>`);return r.querySelector("button")?.addEventListener("click",()=>{r.querySelector('[role="status"]').textContent=e==="error"?"Nova consulta iniciada. A lista continua preenchida.":"Filtros limpos. A lista continua preenchida."}),r}function H(){const e=c("Confirmação e desfazer","D2 · RF19","A remoção de um item é reversível. Limpar vários itens pede confirmação, com Cancelar como opção inicial.",`<section class="panel stack" aria-label="Lista de compras">
      <ul class="reset" aria-label="Itens da lista"><li class="line-item">Arroz · 1 kg</li><li class="line-item">Leite · 1 L</li></ul>
      <div class="row">
        <button type="button" class="outline" data-remove>Remover arroz</button>
        <button type="button" class="danger" data-clear>Limpar lista</button>
        <button type="button" class="ghost" data-undo hidden>Desfazer remoção</button>
      </div>
      <p class="status muted" role="status"></p>
    </section>
    <dialog aria-labelledby="clear-title"><form method="dialog" class="stack">
      <h2 id="clear-title">Limpar lista?</h2><p>Todos os itens da lista serão removidos.</p>
      <div class="row"><button type="submit" value="cancel" class="outline" autofocus>Cancelar</button>
      <button type="submit" value="confirm" class="danger">Limpar lista</button></div>
    </form></dialog>`),t=e.querySelector("dialog"),[a,o]=e.querySelectorAll("li"),s=e.querySelector("[data-remove]"),r=e.querySelector("[data-clear]"),i=e.querySelector("[data-undo]"),n=e.querySelector('[role="status"]');return s.addEventListener("click",()=>{a.hidden=!0,s.disabled=!0,i.hidden=!1,n.textContent="Arroz removido da lista.",i.focus()}),i.addEventListener("click",()=>{a.hidden=!1,s.disabled=!1,i.hidden=!0,n.textContent="Arroz voltou para a lista.",s.focus()}),r.addEventListener("click",()=>{t.returnValue="cancel",t.showModal()}),t.addEventListener("close",()=>{t.returnValue==="confirm"&&(a.hidden=!0,o.hidden=!0,i.hidden=!0,s.disabled=!0,r.disabled=!0,n.textContent="Lista vazia.",n.tabIndex=-1,n.focus())}),e}export{T as a,V as b,_ as c,H as d,I as e,G as f,Y as l,B as o,U as r,P as s,O as t};
