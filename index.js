import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export default function Home({sample}){
  return (
    <div className="container">
      <section style={{display:'flex',gap:20,alignItems:'center',padding:20,background:'linear-gradient(90deg,#e9eef6,#cfd8dc)',borderRadius:12,marginBottom:20}}>
        <div style={{flex:1}}>
          <h1 style={{margin:0}}>Premium Auto Body Parts & Custom Paint Matching</h1>
          <p style={{color:'#334'}}>Pearl & Chrome Co. offers OEM-fit panels, chrome accessories, and professional color-code matching from manufacturer codes.</p>
          <div style={{display:'flex',gap:10,marginTop:12}}>
            <Link href="/shop"><a style={{padding:'10px 16px',background:'#0b79ff',color:'#fff',borderRadius:8}}>Shop Parts</a></Link>
            <Link href="/contact"><a style={{padding:'10px 16px',borderRadius:8,border:'1px solid #0b79ff'}}>Contact Us</a></Link>
          </div>
        </div>
        <div style={{width:260}}>
          <img src="/logo.svg" alt="logo" style={{width:'100%'}}/>
        </div>
      </section>

      <section>
        <h2>Featured Parts</h2>
        <div className="grid" style={{marginTop:12}}>
          {sample.map(p=>(
            <div key={p.id} style={{background:'#fff',padding:12,borderRadius:8}}>
              <h3 style={{margin:0}}>{p.name}</h3>
              <div style={{color:'#0b79ff',fontWeight:700}}>${p.price.toFixed(2)}</div>
              <div style={{marginTop:8}}>{p.category}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps(){
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data','sample-data.json'),'utf8'))
  return {props:{sample:data.slice(0,3)}}
}
