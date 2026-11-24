import {useEffect,useState} from 'react';import Logo from './Logo.jsx'
export default function Loader(){const[gone,setGone]=useState(false);const[fade,setFade]=useState(false)
useEffect(()=>{const a=setTimeout(()=>setFade(true),900),b=setTimeout(()=>setGone(true),1300);return()=>{clearTimeout(a);clearTimeout(b)}},[])
if(gone)return null
return <div aria-hidden="true" className="fixed inset-0 z-[100] grid place-items-center bg-bg transition-opacity duration-500" style={{opacity:fade?0:1,pointerEvents:'none'}}><Logo size={84} draw/></div>}
