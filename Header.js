import Link from 'next/link'

export default function Header(){ 
  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 20px',background:'#0f1724',color:'#fff'}}>
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <img src="/logo.svg" alt="Pearl & Chrome Co." style={{height:56}}/>
      </div>
      <nav style={{display:'flex',gap:16}}>
        <Link href="/"><a style={{color:'#cfe7ff'}}>Home</a></Link>
        <Link href="/shop"><a style={{color:'#cfe7ff'}}>Shop</a></Link>
        <Link href="/contact"><a style={{color:'#cfe7ff'}}>Contact</a></Link>
        <Link href="/cart"><a style={{color:'#cfe7ff'}}>Cart</a></Link>
      </nav>
    </header>
  )
}
