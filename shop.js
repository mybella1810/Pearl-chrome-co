import {useState} from 'react'
import data from '../data/sample-data.json'
import ProductCard from '../components/ProductCard'

export default function Shop(){
  const [cart,setCart] = useState([])
  function add(p){ setCart(prev=>[...prev,p]) }
  return (
    <div className="container">
      <h1>Shop</h1>
      <div style={{display:'flex',gap:12}}>
        <div style={{flex:1}}>
          <div className="grid">
            {data.map(p=>(
              <ProductCard key={p.id} p={p} onAdd={add}/>
            ))}
          </div>
        </div>
        <aside style={{width:300,background:'#fff',padding:12,borderRadius:8}}>
          <h3>Cart</h3>
          {cart.length===0? <div style={{color:'#666'}}>No items yet</div> : cart.map((c,i)=>(<div key={i}>{c.name} — ${c.price}</div>))}
        </aside>
      </div>
    </div>
  )
}
