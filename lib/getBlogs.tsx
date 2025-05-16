import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Blog = {
  slug: string;
  title: string;
  image: string;
  content: string;
};

const blogsDir = path.join(process.cwd(), "content/blogs");

export async function getBlogs(): Promise<Blog[]> {
  const filenames = fs.readdirSync(blogsDir);

  const blogs = filenames
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(blogsDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      const images: string[] = data.images || [];

      return {
        slug: data.slug || filename.replace(/\.md$/, ""),
        title: data.title || "Brak tytułu",
        image: images.length > 0 ? images[0] : "",
        content,
      };
    });

  return blogs;
}
