import BlogHero from "@/components/blog-hero"
import BlogGrid from "@/components/blog-grid"
import Navbar from "@/components/navbar"
export const metadata = {
  title: "Blog | Zero Devs",
  description: "Technical articles and tutorials from the Zero Devs team",
}

const BlogPage=() =>{
  return (
    <div className="min-h-screen bg-black text-white">
        <Navbar/>
      <BlogHero />
      <BlogGrid />
    </div>
  )
}

export default BlogPage
