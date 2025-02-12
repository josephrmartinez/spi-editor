"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { mentorTexts, MentorText } from "@/app/data/mentorTexts";

const MentorTextsPage = () => {
  const router = useRouter();
  const create = useMutation(api.documents.create);

  const handleStartWithMentorText = (text: MentorText) => {
    const promise = create({
      title: text.title,
      docType: "mentorText",
      content: JSON.stringify([
        {
          type: "heading",
          content: text.title,
          props: { level: 3 },
        },
        {
          type: "paragraph",
          content: text.text,
        },
      ]),
    }).then((documentId) => router.push(`/documents/${documentId}`));
    toast.promise(promise, {
      loading: "Creating a new prompt exercise...",
      success: "New prompt exercise created!",
      error: "Failed to create new prompt exercise.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <div className="flex mb-6 flex-row items-center justify-center space-x-4"></div>
      <h2 className="text-lg font-bold text-teal-900">Select a Mentor Text:</h2>
      <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        {mentorTexts.map((text) => (
          <Button
            key={text.title}
            variant="outline"
            className="flex flex-col py-12"
            onClick={() => handleStartWithMentorText(text)}
          >
            <h3 className="text-md font-bold text-teal-900">{text.title}</h3>
            <p className="text-sm text-gray-500">{text.author}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MentorTextsPage;
