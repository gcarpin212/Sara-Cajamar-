/* =========================================================
   Sara Nossa Terra Cajamar — conteúdo e interações
   ---------------------------------------------------------
   👉 Para atualizar o site, edite apenas o bloco CONFIG e
      as listas abaixo. Não precisa mexer no HTML.
   ========================================================= */

const CONFIG = {
  // Só números, com DDD e 55 na frente. Ex.: "5511987654321"
  whatsapp: "",
  instagram: "sara.cajamar",
  youtube: "",   // ex.: "https://www.youtube.com/@saracajamar"
  facebook: ""   // ex.: "https://www.facebook.com/saracajamar"
};

const VALORES = [
  { t: "Palavra",      d: "A Bíblia é a base de tudo o que cremos e vivemos." },
  { t: "Presença",     d: "Buscamos a presença de Deus em adoração sincera." },
  { t: "Família",      d: "Lares restaurados e gerações caminhando juntas." },
  { t: "Comunhão",     d: "Ninguém caminha sozinho: crescemos em células." },
  { t: "Serviço",      d: "Servir a cidade é a forma mais clara de amar." },
  { t: "Generosidade", d: "Damos com alegria, porque recebemos de graça." }
];

// foto: caminho da imagem, ex.: "img/culto1.jpg" (deixe "" para mostrar a moldura)
const GALERIA = [
  { t: "Culto de celebração", foto: "", w: "clamp(280px,34vw,520px)" },
  { t: "Louvor",              foto: "", w: "clamp(240px,24vw,360px)" },
  { t: "Batismo",             foto: "", w: "clamp(280px,30vw,460px)" },
  { t: "Sara Kids",           foto: "", w: "clamp(240px,24vw,360px)" },
  { t: "Jovens",              foto: "", w: "clamp(280px,34vw,520px)" }
];

const LIDERES = [
  { n: "[Nome]", r: "Ministério de Louvor", foto: "" },
  { n: "[Nome]", r: "Jovens",               foto: "" },
  { n: "[Nome]", r: "Sara Kids",            foto: "" },
  { n: "[Nome]", r: "Mulheres",             foto: "" },
  { n: "[Nome]", r: "Homens",               foto: "" },
  { n: "[Nome]", r: "Esperança Livre",      foto: "" }
];

const MINISTERIOS = [
  { t: "Louvor & Adoração",     d: "Músicos, cantores e equipe técnica que conduzem a igreja à presença de Deus em cada culto." },
  { t: "Sara Kids",             d: "Um ambiente seguro, divertido e cheio da Palavra para as crianças enquanto os pais participam do culto." },
  { t: "Jovens & Adolescentes", d: "Uma geração apaixonada por Jesus, com cultos, células e eventos feitos para a sua fase da vida." },
  { t: "Mulheres",              d: "Encontros de cuidado, oração e fortalecimento para mulheres de todas as idades." },
  { t: "Homens",                d: "Homens firmes na fé, presentes na família e prontos para servir." },
  { t: "Casais",                d: "Investimos em casamentos saudáveis, com encontros, aconselhamento e amizade entre casais." },
  { t: "Intercessão",           d: "Uma equipe que sustenta a igreja, a cidade e cada pedido em oração." },
  { t: "Mídia & Comunicação",   d: "Fotografia, vídeo, transmissão e redes sociais levando a mensagem além das paredes." }
];

const CELULAS = {
  "Portal dos Ipês": [
    { tipo: "Célula de Família",  nome: "Célula [Nome]", local: "[Rua / ponto de referência]", dia: "[Terça]",  hora: "[20h]",   freq: "Semanal" },
    { tipo: "Célula de Jovens",   nome: "Célula [Nome]", local: "[Rua / ponto de referência]", dia: "[Sexta]",  hora: "[20h]",   freq: "Semanal" },
    { tipo: "Célula de Mulheres", nome: "Célula [Nome]", local: "[Rua / ponto de referência]", dia: "[Quinta]", hora: "[19h30]", freq: "Semanal" }
  ],
  "Jordanésia": [
    { tipo: "Célula de Família",      nome: "Célula [Nome]", local: "[Rua / ponto de referência]", dia: "[Quarta]", hora: "[20h]",   freq: "Semanal" },
    { tipo: "Célula de Casais",       nome: "Célula [Nome]", local: "[Rua / ponto de referência]", dia: "[Sábado]", hora: "[19h]",   freq: "Quinzenal" },
    { tipo: "Célula de Adolescentes", nome: "Célula [Nome]", local: "[Rua / ponto de referência]", dia: "[Sexta]",  hora: "[19h30]", freq: "Semanal" }
  ]
};

const EVENTOS = [
  { dia: "[00]", mes: "[Out]", tag: "Jovens",         titulo: "[Nome do evento]",  desc: "[Uma frase sobre o evento, local e horário.]" },
  { dia: "[00]", mes: "[Nov]", tag: "Retiro",         titulo: "Encontro com Deus", desc: "[Datas, local e como se inscrever.]" },
  { dia: "[00]", mes: "[Nov]", tag: "Mulheres",       titulo: "[Nome do evento]",  desc: "[Uma frase sobre o evento, local e horário.]" },
  { dia: "[00]", mes: "[Dez]", tag: "Toda a família", titulo: "Culto de Natal",    desc: "[Uma frase sobre o evento, local e horário.]" }
];

const FAQ = [
  { q: "Preciso ser membro para ser parceiro?", a: "Não. Qualquer pessoa que acredita na obra que Deus faz por meio da igreja pode ser parceira." },
  { q: "Existe um valor mínimo?", a: "Não. A contribuição é voluntária: você define o valor que cabe no seu orçamento, com fidelidade e alegria." },
  { q: "Para onde vai a minha contribuição?", a: "Para manter a igreja funcionando, alcançar novas vidas e sustentar as ações do Esperança Livre na cidade. [Ajuste conforme a prestação de contas da igreja.]" },
  { q: "Posso mudar ou pausar a parceria?", a: "Sim. Basta falar com a nossa equipe a qualquer momento." }
];

const LOCAIS = [
  { tag: "Sede · Templo", nome: "Portal dos Ipês", endereco: "[Rua, número] — Portal dos Ipês, Cajamar/SP", mapa: "Sara Nossa Terra Portal dos Ipês Cajamar SP" },
  { tag: "Congregação",   nome: "Jordanésia",      endereco: "[Rua, número] — Jordanésia, Cajamar/SP",      mapa: "Sara Nossa Terra Jordanésia Cajamar SP" }
];

/* =========================================================
   Daqui para baixo é a parte técnica.
   ========================================================= */
document.documentElement.classList.add("js");
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pad = (n) => String(n).padStart(2, "0");
const num = CONFIG.whatsapp.replace(/\D/g, "");
const wa = (msg) => "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);
const igUrl = "https://www.instagram.com/" + CONFIG.instagram.replace("@", "") + "/";
const ARROW = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
const PLUS = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 1v12M1 7h12"/></svg>';
const CAM = '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg>';
const PERSON = '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-4 3.6-6 7-6s6.2 2 7 6"/></svg>';
const photo = (src, alt, icon, label) => src
  ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`
  : `<div class="ph-in ph-label">${icon}<span class="mono">${esc(label)}</span></div>`;

// links globais
document.querySelectorAll("[data-wa]").forEach((a) => (a.href = wa(a.dataset.wa)));
document.querySelectorAll("[data-ig]").forEach((a) => (a.href = igUrl));
document.querySelectorAll("[data-ig-handle]").forEach((s) => (s.textContent = "@" + CONFIG.instagram.replace("@", "")));
document.querySelectorAll("[data-link]").forEach((a) => (a.href = CONFIG[a.dataset.link] || igUrl));
$("#yr").textContent = new Date().getFullYear();

// marquee
const words = ["Fé", "Família", "Comunhão", "Esperança", "Células", "Louvor", "Cajamar"];
const star = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#fff" stroke-width="1.5"><path d="M11 1v20M1 11h20M4 4l14 14M18 4L4 18"/></svg>';
$("#marquee").innerHTML = [...words, ...words, ...words, ...words].map((w) => `<span>${w}${star}</span>`).join("");

// valores
$("#values").innerHTML = VALORES.map((v, i) => `
  <div class="inv rv"><div class="top"><span class="mono">${pad(i + 1)}</span><span class="inv-ico">${PLUS}</span></div>
  <div><div class="serif t">${esc(v.t)}</div><div class="inv-sub">${esc(v.d)}</div></div></div>`).join("");

// galeria
$("#gallery").innerHTML = GALERIA.map((g) => `
  <figure class="ph gal" style="width:${g.w}">${photo(g.foto, g.t, CAM, "[Foto — " + g.t.toLowerCase() + "]")}<figcaption>${esc(g.t)}</figcaption></figure>`).join("");

// líderes
$("#leaders").innerHTML = LIDERES.map((l) => `
  <article class="card glass leader"><div class="ph">${photo(l.foto, l.n, PERSON, "")}</div>
  <div class="info"><div class="n">${esc(l.n)}</div><div class="mono r">${esc(l.r)}</div></div></article>`).join("");

// ministérios (acordeão)
$("#ministries").innerHTML = MINISTERIOS.map((m, i) => `
  <button class="min-item rv${i === 0 ? " open" : ""}" aria-expanded="${i === 0}">
    <span class="mono n">${pad(i + 1)}</span>
    <span><span class="t">${esc(m.t)}</span><span class="d"><span>${esc(m.d)}</span></span></span>
    <span class="plus">${PLUS}</span>
  </button>`).join("");
$("#ministries").addEventListener("click", (e) => {
  const b = e.target.closest(".min-item"); if (!b) return;
  const wasOpen = b.classList.contains("open");
  document.querySelectorAll(".min-item").forEach((x) => { x.classList.remove("open"); x.setAttribute("aria-expanded", "false"); });
  if (!wasOpen) { b.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
});

// células (abas)
const bairros = Object.keys(CELULAS);
function renderCells(bairro) {
  $("#tabs").innerHTML = bairros.map((b) => `
    <button class="tab" role="tab" aria-selected="${b === bairro}" data-b="${esc(b)}">${esc(b)} <span class="mono">${pad(CELULAS[b].length)}</span></button>`).join("");
  $("#cells").innerHTML = CELULAS[bairro].map((c, i) => `
    <article class="card cell" style="animation-delay:${i * 80}ms">
      <div class="top"><span class="mono" style="color:#9a9a9a">${esc(c.tipo)}</span><span style="display:flex;align-items:center;gap:8px"><span class="live-dot" style="width:6px;height:6px"></span><span class="mono">${esc(c.freq)}</span></span></div>
      <div><div class="name">${esc(c.nome)}</div><div class="place">${esc(bairro)} · ${esc(c.local)}</div></div>
      <div class="when"><div><span class="mono">Dia</span><b>${esc(c.dia)}</b></div><div><span class="mono">Horário</span><b>${esc(c.hora)}</b></div></div>
      <a class="btn g" href="${wa("Olá! Vi o site e quero participar da " + c.nome + " no bairro " + bairro + ".")}" target="_blank" rel="noopener">Quero participar</a>
    </article>`).join("");
}
$("#tabs").addEventListener("click", (e) => { const t = e.target.closest(".tab"); if (t) renderCells(t.dataset.b); });
renderCells(bairros[0]);

// eventos
$("#events").innerHTML = EVENTOS.map((e) => `
  <article class="event rv">
    <div class="date"><span class="day">${esc(e.dia)}</span><span class="mono">${esc(e.mes)}</span></div>
    <div class="info"><div class="mono tag">${esc(e.tag)}</div><div class="title">${esc(e.titulo)}</div><div class="desc">${esc(e.desc)}</div></div>
    <div class="act"><a class="btn b" href="${wa("Olá! Vi no site e quero saber mais sobre o evento: " + e.titulo)}" target="_blank" rel="noopener">Quero ir ${ARROW}</a></div>
  </article>`).join("");

// FAQ
$("#faq").innerHTML = FAQ.map((f, i) => `
  <div class="faq-item${i === 0 ? " open" : ""}">
    <button class="faq-btn" aria-expanded="${i === 0}"><span>${esc(f.q)}</span><span class="plus">${PLUS}</span></button>
    <div class="faq-a"><div><p>${esc(f.a)}</p></div></div>
  </div>`).join("");
$("#faq").addEventListener("click", (e) => {
  const b = e.target.closest(".faq-btn"); if (!b) return;
  const item = b.parentElement, wasOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach((x) => { x.classList.remove("open"); x.firstElementChild.setAttribute("aria-expanded", "false"); });
  if (!wasOpen) { item.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
});

// locais
$("#places").innerHTML = LOCAIS.map((p) => `
  <article class="card place rv">
    <div class="grid-lines"></div>
    <svg class="radar" width="320" height="320" viewBox="0 0 320 320" fill="none" stroke="rgba(255,255,255,.18)" aria-hidden="true"><circle cx="160" cy="160" r="40"/><circle cx="160" cy="160" r="80"/><circle cx="160" cy="160" r="120"/><circle cx="160" cy="160" r="158"/><circle class="ping" cx="160" cy="160" r="120" stroke="rgba(255,255,255,.5)"/><circle cx="160" cy="160" r="6" fill="#fff" stroke="none"/></svg>
    <div><div class="mono tag">${esc(p.tag)}</div><div class="nm">${esc(p.nome)}</div><div class="addr">${esc(p.endereco)}</div></div>
    <div class="row">
      <a class="btn w" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.mapa)}" target="_blank" rel="noopener">Como chegar ${ARROW}</a>
      <a class="btn g" href="${wa("Olá! Quero visitar a Sara em " + p.nome + ". Qual o horário do próximo culto?")}" target="_blank" rel="noopener">Avisar que vou</a>
    </div>
  </article>`).join("");

// revelar ao rolar (fallback para navegadores sem scroll-timeline)
if (!CSS.supports("animation-timeline: view()") && "IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { rootMargin: "0px 0px -10% 0px" });
  document.querySelectorAll(".rv").forEach((el) => io.observe(el));
  const bar = $(".progress");
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = "scaleX(" + (h > 0 ? scrollY / h : 0) + ")";
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
} else if (!("IntersectionObserver" in window)) {
  document.querySelectorAll(".rv").forEach((el) => el.classList.add("in"));
}
