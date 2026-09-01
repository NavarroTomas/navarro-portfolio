import { useState } from 'react'

const rows = [
  ['Falcons', 27], ['Sur', 23], ['Rivals', 20], ['Norte', 18], ['Olimpo', 15],
]

export default function ApaDemo() {
  const [tab, setTab] = useState('tabla')
  return (
    <div className="embedded-site apa-demo">
      <nav><strong>APA</strong><div><button onClick={() => setTab('tabla')} className={tab==='tabla'?'is-active':''}>TABLA</button><button onClick={() => setTab('stats')} className={tab==='stats'?'is-active':''}>STATS</button></div></nav>
      <main>
        <header><small>TEMPORADA 2026</small><h3>PRIMERA DIVISIÓN</h3></header>
        {tab === 'tabla' ? (
          <div className="apa-demo__table">{rows.map(([name, pts], index)=><div key={name}><span>{String(index+1).padStart(2,'0')}</span><strong>{name}</strong><em>{pts} PTS</em></div>)}</div>
        ) : (
          <div className="apa-demo__stats"><div><strong>126</strong><span>PARTIDOS</span></div><div><strong>412</strong><span>GOLES</span></div><div><strong>24</strong><span>CLUBES</span></div></div>
        )}
      </main>
    </div>
  )
}
