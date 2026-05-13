import ReactMarkdown from "react-markdown";

type MarkdownRendererProps = {
  githubUsername: string;
  repoName: string;
};

async function getReadme(githubUsername: string, repoName: string) {
  const res = await fetch(
    "https://raw.githubusercontent.com/" + githubUsername + "/" + repoName + "/main/README.md",
    {
      next: { revalidate: 3600 },
  });

  return res.text();
}

export default async function GithubReadme({
  githubUsername, repoName,
}: MarkdownRendererProps) {
  const markdown = await getReadme(githubUsername, repoName);

  return (
    <div className="prose prose-invert mx-auto md-6 max-w-4xl px-6 py-20 border-2 border-white rounded-xl ">
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>


  );
}