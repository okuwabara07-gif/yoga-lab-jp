import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
export default function Home() {
  const posts = getAllPosts()
  return (
    <main style={{maxWidth:'900px',margin:'0 auto',padding:'2rem 1.5rem'}}>
      <h1 style={{fontSize:'1.5rem',fontWeight:500,marginBottom:'2rem'}}>Yoga Lab</h1>
      <div>{posts.map(p=>(
        <div key={p.slug} style={{padding:'1rem 0',borderBottom:'0.5px solid #eee'}}>
          <Link href={'/blog/'+p.slug} style={{fontSize:'1rem',color:'inherit',textDecoration:'none'}}>{p.title}</Link>
          <div style={{fontSize:'0.75rem',color:'#888',marginTop:'4px'}}>{p.date}</div>
        </div>
      ))}</div>
    </main>
  )
}