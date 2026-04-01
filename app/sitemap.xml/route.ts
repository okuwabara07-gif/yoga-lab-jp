import { getAllPosts } from '@/lib/posts'
export async function GET() {
  const posts = getAllPosts()
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'
  const urls = ['<url><loc>'+base+'</loc><changefreq>daily</changefreq><priority>1.0</priority></url>',
    ...posts.map(p=>'<url><loc>'+base+'/blog/'+p.slug+'</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>')]
  return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.join('')+'</urlset>',{headers:{'Content-Type':'application/xml'}})
}