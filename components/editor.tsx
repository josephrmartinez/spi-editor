"use client";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

import { useTheme } from "next-themes";

import { useEdgeStore } from "@/lib/edgestore";
import { BlockNoteSchema, PartialBlock, Block } from "@blocknote/core";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  // Allow file upload?
  //   const handleUpload = async (file: File) => {
  //     const response = await edgestore.publicFiles.upload({ file });
  //     return response.url;
  //   };

  // Add onChange and initialContent to perpetuate content in storage

  const saveToStorage = (jsonBlocks: Block[]) => {
    onChange(JSON.stringify(jsonBlocks));
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        editable={editable}
        onBlur={() => saveToStorage(editor.document)}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Editor;
