"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import writingPrompts, { WritingPrompt } from "@/app/data/writingPrompts";
import { Block } from "@blocknote/core";

export function extractDocumentText(documentBlocks: Block[]) {
  let fullText = "";

  // Iterate through each block in the document
  documentBlocks.forEach((block) => {
    if (block.type === "paragraph") {
      // Iterate through the content array of each paragraph block
      block.content.forEach((contentBlock) => {
        if (contentBlock.type === "text") {
          fullText += contentBlock.text + " "; // Concatenate the text with a space separator
        }
      });
    }
  });

  // Trim any excess whitespace and return the full text
  return fullText.trim();
}

export const useDocumentActions = () => {
  const router = useRouter();
  const create = useMutation(api.documents.create);

  const handleCreateBlankDocument = () => {
    const promise = create({
      title: "Untitled",
      docType: "blank",
    }).then((documentId) => router.push(`/documents/${documentId}`));
    toast.promise(promise, {
      loading: "Creating a new document...",
      success: "New document created!",
      error: "Failed to create new document.",
    });
  };

  const handleStartWithPrompt = () => {
    const randomPrompt: WritingPrompt =
      writingPrompts[Math.floor(Math.random() * writingPrompts.length)];

    const promise = create({
      title: randomPrompt.title,
      docType: "prompt",
      content: JSON.stringify([
        {
          type: "heading",
          content: randomPrompt.prompt,
          props: { level: 3 },
        },
        {
          type: "paragraph",
          content: "",
        },
      ]),
    }).then((documentId) => router.push(`/documents/${documentId}`));
    toast.promise(promise, {
      loading: "Creating a new prompt exercise...",
      success: "New prompt exercise created!",
      error: "Failed to create new prompt exercise.",
    });
  };

  const handleStartWithMentorText = () => {
    router.push("/mentor-texts");
  };

  return {
    handleCreateBlankDocument,
    handleStartWithPrompt,
    handleStartWithMentorText,
  };
};
