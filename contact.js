import {useState} from 'react'

export default function Contact(){
  const [sent,setSent]=useState(false)
  function handle(e){
    e.preventDefault()
    // In production wire to an email API (SendGrid, Mailgun, etc.)
    setSent(true)
  }
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div style={{display:'flex',gap:20}}>
        <form onSubmit={handle} style={{flex:1,background:'#fff',padding:16,borderRadius:8}}>
          {sent ? <div style={{padding:12,background:'#e6ffed',borderRadius:6}}>Thanks! We received your message.</div> : (
          <>
            <label>Name<br/><input required name="name" style={{width:'100%',padding:8}}/></label>
            <label style={{display:'block',marginTop:8}}>Email<br/><input required name="email" type="email" style={{width:'100%',padding:8}}/></label>
            <label style={{display:'block',marginTop:8}}>Message<br/><textarea required name="message" style={{width:'100%',padding:8}} rows="6"></textarea></label>
            <button style={{marginTop:12,padding:'10px 16px',background:'#0b79ff',color:'#fff',border:0,borderRadius:6}}>Send Message</button>
          </>
          )}
        </form>
        <div style={{width:320}}>
          <h3>Visit Us</h3>
          <div>Pearl & Chrome Co.<br/>1234 Main St.<br/>Your City, ST</div>
          <h3 style={{marginTop:12}}>Hours</h3>
          <div>Mon–Fri: 9am–5pm</div>
        </div>
      </div>
    </div>
  )
}
