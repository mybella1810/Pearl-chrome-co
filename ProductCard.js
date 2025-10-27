export default function ProductCard({p,onAdd}){
  return (
    <div style={{border:'1px solid #e6eef6',padding:12,borderRadius:8,background:'#fff'}}>
      <div style={{height:120,background:'#f3f6f9',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:8}}>
        <div style={{fontSize:12,color:'#667'}}>{p.category}</div>
      </div>
      <h3 style={{margin:'6px 0'}}>{p.name}</h3>
      <div style={{color:'#1f2937',fontWeight:700}}>${p.price.toFixed(2)}</div>
      <div style={{marginTop:8,display:'flex',gap:8}}>
        <button onClick={()=>onAdd(p)} style={{flex:1,padding:8,background:'#0b79ff',color:'#fff',border:'none',borderRadius:6}}>Add to Cart</button>
        <button style={{flex:1,padding:8,background:'#fff',color:'#0b79ff',border:'1px solid #0b79ff',borderRadius:6}}>Buy Now</button>
      </div>
    </div>
  )
}
