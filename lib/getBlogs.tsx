import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Blog = {
    type: string;
    slug: string
    title: string;
    image: string;
    content: string;
};

const blocksDir = path.join(process.cwd(), "/content/blogs");

export async function getBlogs(): Promise<Blog[]> {
    const filenames = fs.readdirSync(blocksDir)
  
    const blogs = filenames.map((filename) => {
      const filePath = path.join(blocksDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
  
      return {
        type: data.type,
        title: data.title,
        slug: data.slug,
        image: data.image,
        content,
      }
    })
  
    return blogs
  }
  