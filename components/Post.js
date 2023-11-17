
import Link from "next/link"



export default function Post({post}) {
  return (

    <div className="card card-compact gap-4 bg-base-100 shadow-xl m-4">
        <figure>
          <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />
        </figure>

        <div className="card-body">
            <div className="badge badge-secondary">Posted on {post.frontmatter.date}</div>

            <h3 className="card-title">{post.frontmatter.title}</h3>
            <p>{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
                <a className="btn btn-warning">Read More</a>
            </Link>
        </div>
    </div>
    
  )
}
