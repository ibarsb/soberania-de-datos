import { reactive } from 'vue'

// Estado y datos compartidos entre <DataMap/> y <DataMapInfo/>
export const dataMapState = reactive({ nodeId: 'ltoninas' })

export const dataMapNodes = [
  {
    id: 'ltoninas', x: 176, y: 272, lx: 176, ly: 294, icon: '🌊', color: '#7dd3fc',
    label: 'Las Toninas', anchor: 'middle',
    title: '🌊 Las Toninas — amarre submarino',
    desc: 'Entrada única del país: ahí amarran los cables Malbec, Tannat y Firmina (Google). En 2017 una rotura impactó el servicio nacional — la infraestructura solo se ve cuando falla.',
    risk: 'alto', riskLabel: '🚨 Punto único de falla + cajanegrización',
    legal: 'El secreto empresarial del operador impide auditar algoritmos y transporte (bibliografía de la cátedra).',
  },
  {
    id: 'amba', x: 166, y: 238, lx: 118, ly: 228, icon: '🖥️', color: '#c4b5fd',
    label: 'AMBA · Buenos Aires', anchor: 'end',
    title: '🖥️ AMBA — cuello de botella de cómputo',
    desc: '13 datacenters de cómputo >1 MW (~32 MW relevados): 71% en CABA y 29% en la provincia de Buenos Aires (CABASE, mayo 2026). Todo el cómputo relevado vive en una misma gran área.',
    risk: 'medio', riskLabel: '⚠️ Concentración territorial',
    legal: 'Concentrar potencia de cómputo en una sola gran área reduce resiliencia ante cortes e intervenciones.',
  },
  {
    id: 'saopaulo', x: 270, y: 148, lx: 274, ly: 130, icon: '☁️', color: '#fda4af',
    label: 'São Paulo (Brasil)', anchor: 'start',
    title: '☁️ São Paulo — nube de EE. UU. en Brasil',
    desc: 'AWS, Azure y Google Cloud tienen región pública en Brasil; Argentina no tiene región propia: las cargas nacionales corren ahí.',
    risk: 'alto', riskLabel: '🚨 Sin región argentina',
    legal: 'Art. 12, Ley 25.326: registrarse en nube extranjera = transferencia internacional de datos.',
  },
  {
    id: 'santiago', x: 112, y: 182, lx: 108, ly: 166, icon: '⛅', color: '#fda4af',
    label: 'Santiago (Chile)', anchor: 'end',
    title: '⛅ Santiago — la otra ruta de fuga',
    desc: 'Chile funciona como borde regional de los hiperescaladores para cargas del Cono Sur: mismo patrón, el dato sale del país.',
    risk: 'alto', riskLabel: '🚨 Jurisdicción ajena',
    legal: 'Ley chilena 21.719 (plena 12/2026) regirá el dato radicado ahí; para EE. UU. sigue aplicando el CLOUD Act vía el proveedor.',
  },
]

export function setActiveNode(id) {
  dataMapState.nodeId = id
}

export const activeNode = () => dataMapNodes.find(n => n.id === dataMapState.nodeId) || null