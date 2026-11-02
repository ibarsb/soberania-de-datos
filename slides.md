---
theme: default
title: Colonialismo Digital y Autonomía Tecnológica
paginate: true
footer: 'CTS · TP Tema 2 · Soberanía de Datos e Infraestructura Digital'
overview: true
aspectRatio: '16/9'
canvasWidth: 980
---

<!-- ───────────────────────── SLIDE 1 · Portada + índice ───────────────────────── -->

<div class="hero-card">

# Colonialismo Digital y Autonomía Tecnológica

**Almacenamiento y procesamiento de datos en América Latina — Caso de estudio: Argentina** 🇦🇷

<div class="mt-2 flex gap-2 flex-wrap">
  <span class="badge b-violet">🏫 CTS — Ciencia de Datos</span>
  <span class="badge b-emerald">📅 Octubre 2026</span>
  <span class="badge b-sky">🖱️ Vota · navega · gira las tarjetas</span>
</div>

</div>

<div class="grid grid-cols-2 gap-2 mt-2">

<NavCard :to="2" icon="💣" title="El problema" desc="Concentración de mercado + colonialismo digital" />
<NavCard :to="3" icon="🗺️" title="Infraestructura argentina" desc="Mapa SVG: cables, AMBA y nubes" />
<NavCard :to="4" icon="🗳️" title="Pregunta central" desc="Votación en vivo con la audiencia" />
<NavCard :to="5" icon="📚" title="Marco teórico y CLOUD Act" desc="Pestañas + quiz + simulador de orden" />
<NavCard :to="6" icon="⚖️" title="Nubes y regulaciones" desc="Matriz comparativa + acordeón legal" />
<NavCard :to="7" icon="📅" title="Casos del Estado" desc="Línea de tiempo: 2021 · mayo 2026 · octubre 2026" />
<NavCard :to="8" icon="🛡️" title="Conclusiones y defensa oral" desc="4 tarjetas giratorias + cronómetro 60 s" full />

</div>

<!--
Clic en cada tarjeta para saltar a la sección; hover con glow cian.
-->

---

<!-- ───────────────────────── SLIDE 2 · El problema ───────────────────────── -->

# 2 · El problema: concentración y colonialismo digital

<div class="grid grid-cols-3 gap-3">

<KpiCard icon="💵" color="sky" value="US$14.000 M" label="Nube regional 2025 · IaaS/PaaS" source="Crecimiento 15% interanual · Frost & Sullivan / iProfesional" />
<KpiCard icon="☁️" color="rose" value="81,9%" label="Ventas de 3 proveedores" source="AWS + Azure + Google Cloud concentran el mercado" />
<KpiCard icon="🏢" color="violet" value="72%" label="Infra en 5 empresas" source="Todas de EE. UU. · LACIGF 2025" />

</div>

<v-click>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="card card-violet">
<p class="card-title">🧱 Lectura: colonización del dato</p>
Couldry y Mejias: apropiación continua de la vida para <b>extraer datos con fines de lucro</b>; <i>Data Grab</i> (2024) la llama <b>despojo comparable al territorial</b>. LACIGF 2025: "extractivismo de datos" — la fibra actual replica a los <b>cables telegráficos coloniales</b>.
</div>

<div class="card card-sky">
<p class="card-title">🌐 Otra cifra, mismo fondo</p>
La inversión extranjera digital migró de telecomunicaciones a <b>datacenters, nube y plataformas</b> (CEPAL 2025) · Nvidia &gt;85% del mercado de GPU relega a la región a <b>proveedora de datos crudos</b>.
</div>

</div>

</v-click>

<v-click>

<div class="card card-amber mt-2">
<p class="card-title">🇦🇷 Argentina: 3 capas físicas + 1 jurídica</p>
<div class="flex gap-2 flex-wrap">
  <span class="badge b-sky">🌊 Todo entra por Las Toninas</span>
  <span class="badge b-violet">🖥️ Cómputo en el AMBA</span>
  <span class="badge b-rose">☁️ Sin regiones propias</span>
  <span class="badge b-amber">⚖️ La ubicación no define la ley</span>
</div>
<div class="mt-2">
  <button class="jump-btn" @click.stop="$slidev.nav.go(3)">🗺️ Ver mapa de infraestructura en vivo ➔</button>
</div>
</div>

</v-click>

<!--
Las cifras provienen de mediciones distintas (ventas regionales vs. mercado de infraestructura): no se suman entre sí.
-->

---
layout: two-cols
layoutClass: gap-4
---

<!-- ───────────────────────── SLIDE 3 · DataMap · infraestructura ───────────────────────── -->

<div class="pl-1">

<h3 style="font-size: 1.05rem; color: #fff;">3 · 🗺️ Infraestructura argentina · mapa interactivo</h3>

<DataMap legend="Clic o hover sobre un punto · botones arriba para ver cada capa" />

</div>

::right::

<h3 style="font-size: 1.05rem; color: #fff;">🔍 Punto seleccionado</h3>

<DataMapInfo />

<!--
Mapa SVG interactivo (components/DataMap.vue): Las Toninas (amarre: Malbec, Tannat, Firmina), AMBA (13 DC >1 MW, ~32 MW, 71/29 CABA/BA), São Paulo y Santiago (regiones de hiperescaladores; Argentina sin región propia).
Los 3 botones superiores resaltan capas: entrada submarina, concentración AMBA y fuga a Brasil/Chile.
La tarjeta lateral (components/DataMapInfo.vue) se actualiza con cada nodo y cierra con la pinza CLOUD Act (art. 12, Ley 25.326).
-->

---

<!-- ───────────────────────── SLIDE 4 · Pregunta central + Poll ───────────────────────── -->

# 4 · Pregunta central

<div class="hero-card">

> **¿En qué medida la concentración de la infraestructura de datos en corporaciones multinacionales condiciona la autonomía tecnológica y el desarrollo económico de los países latinoamericanos?**

<div class="mt-3 flex gap-2 flex-wrap">
  <span class="badge b-violet">🗳️ Votación anónima</span>
  <span class="badge b-sky">⏱️ 1 minuto para decidir</span>
  <span class="badge b-amber">👀 Resultados en vivo en pantalla</span>
</div>

</div>

<div class="mt-3 max-w-xl">

<Poll />

</div>

<v-click>

<div class="card card-emerald mt-3">
<p class="card-title">Respuesta del informe</p>
Condiciona de forma sustantiva, aunque <b>no determina</b>:
<span class="badge b-emerald">⚖️ Jurídica</span>
<span class="badge b-sky">🧮 Cómputo</span>
<span class="badge b-violet">🔍 Control</span>
<span class="badge b-amber">💸 Distribución del valor</span>
</div>

</v-click>

<!--
Receptor: votar primero; la respuesta solo se revela después (clic tras comentarios).
-->

---
layout: two-cols
layoutClass: gap-4
---

<!-- ───────────────────────── SLIDE 5 · Marco teórico (tabs) + CLOUD Act + quiz ───────────────────────── -->

<div class="pl-1">

<h3 style="font-size: 1.15rem; color: #fff;">5 · 📚 Marco teórico</h3>

<Tabs>
  <Tab id="colo" label="Colonialismo">
    <div class="card card-violet">
      <p class="card-title">📚 Colonialismo de datos</p>
      <p>Orden emergente de <b>apropiación de la vida</b> para extraer datos con fines de lucro (Couldry y Mejias, 2019).</p>
      <p>Solo el marco colonial explica la escala del despojo; el LACIGF 2025 lo nombró <b>"extractivismo de datos"</b>.</p>
    </div>
  </Tab>
  <Tab id="datos" label="Sob. de datos">
    <div class="card card-sky">
      <p class="card-title">🏛️ Soberanía de datos</p>
      <p>Rige la <b>ley de la jurisdicción de origen</b> aunque el dato se almacene afuera.</p>
      <p class="mt-1"><span class="badge b-sky">Enfoque: la ley sigue al dato</span></p>
    </div>
  </Tab>
  <Tab id="opera" label="Sob. operativa">
    <div class="card card-emerald">
      <p class="card-title">⚙️ Soberanía operativa</p>
      <p><b>Control real de cómo y quién opera</b> el entorno.</p>
      <p>Cifrar con soporte extranjero = <b>apariencia, no soberanía</b> (Cognizant).</p>
    </div>
  </Tab>
</Tabs>

<div class="card card-amber mt-2" style="font-size: 0.7rem;">
Completar el marco con la bibliografía de la cátedra: <b>cajanegrización</b> — Las Toninas 2017 + secreto empresarial que impide auditar.
</div>

</div>

::right::

<h3 style="font-size: 1.15rem; color: #fff;">⚖️ La "pinza" jurisdiccional</h3>

<div class="card card-rose text-xs p-2" style="font-size: 0.7rem; padding: 0.55rem 0.7rem;">
<div class="flex items-center gap-1 flex-wrap">
  <span class="badge b-sky">🇦🇷 Cliente argentino</span> →
  <span class="badge b-violet">☁️ São Paulo</span> →
  <span class="badge b-rose">🏢 Proveedor EE. UU.</span> →
  <span class="badge b-amber">📜 CLOUD Act</span> →
  <span class="badge b-emerald">🤫 Confidencial posible</span>
</div>
<p class="mt-1">El dato queda controlado por una empresa de EE. UU. <b>aunque esté en Brasil</b>; las órdenes pueden impedir avisar (Kiteworks) — leyes de EE. UU. <b>o China</b> (Rojas, LACIGF 2025) · texto legal: <b>18 U.S.C. § 2713</b>.</p>
</div>

<v-click>

<div class="mt-2"><QuizCard
  question="Si mis datos están en un datacenter de São Paulo (proveedor de EE. UU.), ¿qué leyes aplican?"
  :options="[
    { text: 'La ley argentina + la del país del proveedor: la pinza', correct: true },
    { text: 'Solo la ley argentina: los datos nunca salen del Mercosur', correct: false },
  ]"
/></div>

</v-click>

<v-click>

<div class="mt-2"><CloudSim /></div>

</v-click>

<!--
Quiz interactiva: verde correcta, roja descartada, reintento. Las pestañas de la izquierda evitan el desbordamiento de la versión anterior.
Simulador (components/CloudSim.vue): dos clics "orden entrante → gag order": los datos viajan y al cliente no lo notifican (Kiteworks, 18 U.S.C. § 2713).
-->

---

<!-- ───────────────────────── SLIDE 6 · Matriz comparativa ───────────────────────── -->

# 6 · Matriz de nubes y regulaciones

<div class="grid grid-cols-3 gap-3">

<div class="card card-rose">
<div class="flex items-center justify-between gap-2">
  <b style="color:#fff;">🔴 AWS / Azure / Google</b>
  <span class="risk-chip risk-alto">🚨 Riesgo ALTO</span>
</div>
<p class="mt-1">📍 <b>Fuera del país</b> — sin región en Argentina</p>
<p>⚖️ Del proveedor + <span class="badge b-rose">CLOUD Act</span></p>
<p>🛡️ Alta inversión en seguridad</p>
<p>🔗 Dependencia <b>alta</b> (81,9%)</p>
<p class="mt-1"><span class="badge b-amber">💰 sin fuente: cotizar el caso</span></p>
</div>

<div class="card card-amber">
<div class="flex items-center justify-between gap-2">
  <b style="color:#fff;">🟡 Claro / Oracle</b>
  <span class="risk-chip risk-medio">⚠️ Riesgo MEDIO</span>
</div>
<p class="mt-1">📍 🇦🇷 Datacenter argentino (12/2026)</p>
<p>⚖️ <b>No aclarada</b> — ubicación ≠ cumplimiento</p>
<p>🛡️ Sin datos públicos</p>
<p>🔗 Tecnología de proveedor de EE. UU.</p>
<p class="mt-1"><span class="badge b-amber">💰 sin datos</span></p>
</div>

<div class="card card-emerald">
<div class="flex items-center justify-between gap-2">
  <b style="color:#fff;">🟢 ARSAT</b>
  <span class="risk-chip risk-bajo">✅ Riesgo BAJO</span>
</div>
<p class="mt-1">📍 🇦🇷 Benavídez — Nube Pública Nacional</p>
<p>⚖️ Ley argentina</p>
<p>🛡️ <b>Tier III</b> · seguridad estatal más costosa</p>
<p>🔗 <b>Menor</b> (open source) · escala menor</p>
<p class="mt-1"><span class="badge b-amber">💰 cotizar el mismo caso</span></p>
</div>

</div>

<v-click>

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="card card-violet">
<div class="card-title">📜 Acordeón legal: Ley 25.326 <b>vs</b> GDPR <span class="badge b-sky ml-1" style="font-size: 0.56rem;">clic en cada fila</span></div>
<LeyAccordion />
<p class="mt-1" style="font-size: 0.7rem; opacity: 0.85;"><b>Análisis propio:</b> lo diferencial argentino es la <b>antigüedad</b> — EE. UU. <b>no figura</b> como país adecuado (AAIP) · cláusulas modelo: gratuitas.</p>
</div>

<div class="card card-sky">
<div class="card-title">🧮 Calculadora de transferencia <span class="badge b-amber" style="font-size: 0.56rem;">elegí el destino</span></div>
<TransferCalculator />
</div>

</div>

</v-click>

<!--
Ningún proveedor publica precios comparables: no se inventan cifras, se recomienda cotizar en las calculadoras oficiales y pedir presupuesto a ARSAT y a un operador local.
Calculadora (components/TransferCalculator.vue): elige AWS São Paulo (rojo), Claro–Oracle Alloy (amarillo) o ARSAT (verde) y muestra si aplican cláusulas AAIP (art. 12) y el CLOUD Act; conjunta con el semáforo de arriba.
-->

---

<!-- ───────────────────────── SLIDE 7 · Línea de tiempo de casos ───────────────────────── -->

# 7 · Casos prácticos del Estado argentino

<Tabs variant="timeline">
  <Tab id="y2021" label="🏛️ 2021 · ARSAT">
    <div class="card card-emerald">
      <p class="card-title">ARSAT y la Nube Pública Nacional</p>
      <p>Empresa <b>estatal</b> ($500 M+ para crearla): "herramienta fundamental para conservar la soberanía sobre los datos" · Centro Nacional de Datos (Benavídez, <b>Tier III</b>).</p>
      <p><span class="badge b-rose">2026: bajo la lupa judicial</span> — versiones no confirmadas de visita de un funcionario de EE. UU. en Benavídez.</p>
      <p class="mt-1"><b>📖 Lectura:</b> infraestructura estatal es <b>necesaria pero no suficiente</b> — la gobernanza define cuánta soberanía aporta.</p>
    </div>
  </Tab>
  <Tab id="maya26" label="🤖 Mayo 2026 · Gemelo Digital">
    <div class="card card-violet">
      <p class="card-title">Gemelo Digital Social (min. Capital Humano)</p>
      <p>IA para <b>simular, anticipar y optimizar</b> políticas sociales · etapa preliminar: <b>equipos propios</b>, sin datos personales (solo estadísticos y anonimizados).</p>
      <p><span class="badge b-amber">pedidos de informes</span> (Paulón, Rossi): contratos, jurisdicción, CLOUD Act, auditoría del código · especulación con Palantir: <b>no confirmada</b>, el Ministerio la niega.</p>
    </div>
    <div class="mt-1">
      <AuditMatrix />
    </div>
  </Tab>
  <Tab id="oct26" label="☁️ Octubre 2026 · Claro–Oracle">
    <div class="card card-sky">
      <p class="card-title">Alianza Claro–Oracle Alloy</p>
      <p>Nube de hiperescala en datacenter argentino (desde 12/2026), presentada como <span class="badge b-rose">"nube soberana"</span> · tecnología de EE. UU., jurisdicción ante requerimiento extranjero <b>no aclarada</b>.</p>
      <p class="mt-1"><b>📖 Lectura:</b> ilustración de <b>ubicación ≠ control</b>.</p>
    </div>
  </Tab>
</Tabs>

<v-click>

<blockquote style="font-size: 0.8rem; padding: 0.35rem 0.8rem;">Los tres casos activan los mismos conceptos CTS: extractivismo · autonomía · cajanegrización · jurisdicción extraterritorial.</blockquote>

</v-click>

<!--
Cambiar de época con clic sobre los nodos conectados por la línea de tiempo.
Tablero (components/AuditMatrix.vue) en la pestaña del Gemelo Digital: 4 interruptores (anonimización, open source, auditoría externa, evaluación de impacto) recalculan la opacidad; los pedidos de informes de Paulón y Rossi piden auditoría del código; heurística didáctica, sin cifras del informe.
-->

---

<!-- ───────────────────────── SLIDE 8 · Conclusión + defensa oral ───────────────────────── -->

# 8 · Conclusiones y defensa oral

<div class="card card-emerald">
<p class="card-title">🎯 Conclusión central</p>
La concentración <b>condiciona</b> la autonomía (jurisdicción, cómputo, auditoría) pero <b>no la anula</b>. Tener servidores en el país <b>es insuficiente</b>: la soberanía exige <b>control jurídico y operativo</b>.
<div class="flex gap-2 flex-wrap mt-1">
  <span class="badge b-sky">📄 Transparencia contractual</span>
  <span class="badge b-violet">🧬 Arquitectura híbrida</span>
  <span class="badge b-emerald">🏛️ Fortalecer ARSAT</span>
  <span class="badge b-rose">⚖️ Actualizar la Ley 25.326</span>
  <span class="badge b-amber">🌎 Cooperación regional</span>
  <span class="badge b-sky">🎓 Capacidades locales</span>
</div>
</div>

<v-click>

<OralDefenseCards />

</v-click>

<v-click>

<p class="text-sm mt-3" style="opacity: 0.75;">🙏 <b>¡Gracias!</b> — Preguntas y debate en el aula</p>

</v-click>

<!--
Defensa oral (components/OralDefenseCards.vue): 4 tarjetas 3D (P1 jurisdicción, P2 extractivismo, P3 mitigación, P4 límites del informe); girar con clic arranca el cronómetro de 60 s por tarjeta; al llegar a 0 se marca "¡tiempo!"; reponer la tarjeta la resetea.
Límites del informe (se mencionan verbalmente): fuentes periodísticas / de proveedores; contrastar normas y sumar CEPAL/UIT/Derechos Digitales/Vía Libre/Karisma.
-->
