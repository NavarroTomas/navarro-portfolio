import { useState } from 'react'

export default function StockDemo() {
  const [view, setView] = useState('Resumen')
  const menu = ['Resumen','Ventas','Compras','Productos']
  return (
    <div className="embedded-site stock-demo">
      <aside><strong>N/OS</strong>{menu.map(item=><button key={item} onClick={()=>setView(item)} className={view===item?'is-active':''}>{item}</button>)}</aside>
      <main>
        <small>{view.toUpperCase()} / OPERACIONES</small>
        <h3>{view === 'Resumen' ? '$ 18.420.500' : view}</h3>
        <div className="stock-demo__metrics"><div><span>VENTAS</span><b>$ 6.8M</b></div><div><span>COMPRAS</span><b>$ 4.1M</b></div><div><span>STOCK</span><b>1.248</b></div></div>
        <div className="stock-demo__bars">{[44,61,36,75,54,83,68,91,63,77].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div>
      </main>
    </div>
  )
}
