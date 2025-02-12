"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useDocumentActions } from "@/lib/documentUtils";
import { useUser } from "@clerk/clerk-react";

const DocumentsPage = () => {
  const {
    handleCreateBlankDocument,
    handleStartWithPrompt,
    handleStartWithMentorText,
  } = useDocumentActions();
  const { user } = useUser();
  // DRY move these functions to src/utils/documentUtils.ts file?
  // Repeated between (main)/_components/navigation.tsx and (routes)/documents/page.tsx
  // const handleCreateBlankDocument = () => {
  //   const promise = create({
  //     title: "Untitled",
  //     docType: "blank",
  //   }).then((documentId) => router.push(`/documents/${documentId}`));
  //   toast.promise(promise, {
  //     loading: "Creating a new document...",
  //     success: "New document created!",
  //     error: "Failed to create new document.",
  //   });
  // };

  // const handleStartWithPrompt = () => {
  //   const randomPrompt: WritingPrompt =
  //     writingPrompts[Math.floor(Math.random() * writingPrompts.length)];

  //   const promise = create({
  //     title: randomPrompt.title,
  //     docType: "prompt",
  //     content: JSON.stringify([
  //       {
  //         type: "heading",
  //         content: randomPrompt.prompt,
  //         props: { level: 3 },
  //       },
  //       {
  //         type: "paragraph",
  //         content: "",
  //       },
  //     ]),
  //   }).then((documentId) => router.push(`/documents/${documentId}`));
  //   toast.promise(promise, {
  //     loading: "Creating a new prompt exercise...",
  //     success: "New prompt exercise created!",
  //     error: "Failed to create new prompt exercise.",
  //   });
  // };

  // const handleStartWithMentorText = () => {
  //   router.push("/mentor-texts");
  // };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <div className="flex mb-6 flex-row items-center justify-center space-x-4">
        <Image
          src="/2.png"
          height="300"
          width="300"
          alt="Empty"
          className="dark:hidden"
        />
        <Image
          src="/10.png"
          height="300"
          width="300"
          alt="Empty"
          className="dark:hidden hidden md:block"
        />
        <Image
          src="/empty-dark.png"
          height="300"
          width="300"
          alt="Empty-Dark"
          className="hidden dark:block"
        />
      </div>
      <h2 className="text-lg font-bold text-teal-900">
        Welcome to {user?.firstName}&apos;s ConnectInk
      </h2>
      <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Button variant="outline" onClick={handleStartWithPrompt}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Start With a Prompt
        </Button>

        <Button variant="outline" onClick={handleCreateBlankDocument}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Start With a Fresh Idea
        </Button>

        <Button variant="outline" onClick={handleStartWithMentorText}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Start With a Mentor Text
        </Button>
      </div>
    </div>
  );
};

export default DocumentsPage;
