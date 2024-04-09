import ArticleIndex from "@/components/ArticleIndex";
import MDXComponents from "@/components/MDXComponents";
import WeeklyList from "@/components/WeeklyList";
import { Separator } from "@/components/ui/separator";
import { WeeklyPost, getWeeklyPosts } from "@/lib/getWeeklyPosts";
import "@/styles/mdx.css";
import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default async function WeeklyDetailsPage({ params }: Props) {
  const { slug } = params;
  const { posts }: { posts: WeeklyPost[] } = await getWeeklyPosts();
  const postIndex = posts.findIndex((post) => post.metadata.slug === slug);
  const post = posts[postIndex];
  // Reverse list order, thus invert condition check
  const nextPost = postIndex - 1 >= 0 ? posts[postIndex - 1] : null;
  const prevPost = postIndex + 1 < posts.length ? posts[postIndex + 1] : null;

  if (!post) {
    // TODO: 404
    return <div>TODO: not found</div>;
  }

  const { source, metadata } = await getPostDetails(post.fullPath);

  return (
    <div className="flex flex-row w-full pt-12">
      <aside className="hidden md:block md:w-1/5 pl-6 max-h-[100vh] h-full overflow-auto">
        <WeeklyList isSide />
      </aside>
      <div className="w-full md:w-3/5 px-6">
        <article id={`article`}>
          <h1>{metadata.title}</h1>
          <MDXRemote source={source} components={MDXComponents} />
        </article>
        <Separator className="my-12 bg-gray-600" />
        <div className="flex justify-between">
          <div>发布时间：{dayjs(metadata.date).format("YYYY-MM-DD")}</div>
          <div className="flex gap-2 flex-col sm:flex-row">
            {prevPost ? (
              <Link
                href={prevPost.metadata.slug}
                className="text-[#9bdbee] hover:text-[#ffce55] underline"
              >
                上一篇
              </Link>
            ) : (
              <></>
            )}
            {nextPost ? (
              <Link
                href={nextPost.metadata.slug}
                className="text-[#9bdbee] hover:text-[#ffce55] underline"
              >
                下一篇
              </Link>
            ) : (
              <></>
            )}
            <Link
              href="/"
              className="text-[#9bdbee] hover:text-[#ffce55] underline"
            >
              去首页
            </Link>
            <Link
              href="https://twitter.com/weijunext/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[#9bdbee] hover:text-[#ffce55] underline"
            >
              Twitter/X
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-start md:w-1/5 pr-6">
        <ArticleIndex />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { posts }: { posts: WeeklyPost[] } = await getWeeklyPosts();

  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}

async function getPostDetails(fullPath: string): Promise<{
  source: string;
  metadata: { [key: string]: any };
}> {
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);

  return {
    source: content,
    metadata: data,
  };
}
