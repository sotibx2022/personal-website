import Link from "next/link";
import { Tag, Calendar } from "lucide-react";
import { IBlog } from "../models/blog.model";
type SingleBlogProps = {
  blog: IBlog;
};
const SingleBlog: React.FC<SingleBlogProps> = ({ blog }) => {
  return (
    <Link
      href={`/singleBlog/blogDetails?blogId=${blog._id}`}
      key={blog._id}
      className="blog-card"
    >
      <h3>{blog.title}</h3>
      <div className="blogInfo">
        <div className="blogMeta">
          <Tag size={16} className="icon" />
          <p className="blogCategory">{blog.category}</p>
        </div>
        {blog.createdAt && (
          <div className="blogMeta">
            <Calendar size={16} className="icon" />
            <p className="blogCreatedAt">
              {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};
export default SingleBlog;
