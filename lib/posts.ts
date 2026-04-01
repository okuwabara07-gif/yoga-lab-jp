import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const postsDir = path.join(process.cwd(), 'content/blog')
export type Post = { slug: string; title: string; date: string; genre: string; content: string }
export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir).filter(f=>f.endsWith('.mdx')).map(file=>{
    const slug = file.replace(/\.mdx$/,'')
    const { data, content } = matter(fs.readFileSync(path.join(postsDir,file),'utf-8'))
    return { slug, title:data.title||slug, date:data.date||'', genre:data.genre||'', content }
  }).sort((a,b)=>a.date>b.date?-1:1)
}
export function getPostBySlug(slug: string): Post|null {
  return getAllPosts().find(p=>p.slug===slug)||null
}