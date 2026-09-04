"use client";

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({
  code,
  language = "text",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-2">
        <span className="text-sm text-zinc-400">
          {language}
        </span>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <FiCheck size={16} />
              Copied
            </>
          ) : (
            <>
              <FiCopy size={16} />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-zinc-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}