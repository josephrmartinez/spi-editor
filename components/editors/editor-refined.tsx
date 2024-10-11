"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { BlockNoteView } from "@blocknote/mantine";
import {
  BasicTextStyleButton,
  BlockTypeSelect,
  FileCaptionButton,
  FileReplaceButton,
  FormattingToolbar,
  FormattingToolbarController,
  TextAlignButton,
  useCreateBlockNote,
  DefaultReactSuggestionItem,
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
} from "@blocknote/react";
import {
  BlockNoteSchema,
  BlockNoteEditor,
  filterSuggestionItems,
  defaultBlockSpecs,
  PartialBlock,
  Block,
} from "@blocknote/core";
import { ToolbarButtonFeedbackTeacher } from "./toolbar-button-feedback-teacher";
import { ToolbarButtonFeedbackAudience } from "./toolbar-button-feedback-audience";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";
import { Globe } from "lucide-react";
import { extractDocumentText } from "@/lib/documentUtils";
import { toast } from "sonner";
import { useEffect, useCallback } from "react";

interface EditorProps {
  updateContent: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

// Custom Slash Menu item to insert a block after the current one.
const insertHelloWorldItem = (editor: BlockNoteEditor) => ({
  title: "Get Unstuck",
  onItemClick: async () => {
    // Block that the text cursor is currently in.
    const currentBlockText =
      editor.getTextCursorPosition().block.content[0].text;

    const documentBlocks = editor.document;
    const fullDocumentText = extractDocumentText(documentBlocks);

    console.log("Full document text:", fullDocumentText);
    console.log("Current block text:", currentBlockText);

    try {
      // Send the selected text and document text to the API
      const response = await fetch("/api/suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentBlockText, fullDocumentText }),
      });

      const data = await response.json();

      if (data.suggestion) {
        // New block we want to insert with the AI feedback
        const suggestionBlock: PartialBlock = {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: `AI Suggestion: ${data.suggestion}`,
              styles: { italic: true },
            },
          ],
        };

        const currentBlock = editor.getTextCursorPosition().block;
        // Inserting the new block after the current one
        editor.insertBlocks([suggestionBlock], currentBlock, "after");
      } else {
        console.error("No suggestion received");
      }
    } catch (error) {
      console.error("Error fetching suggestion:", error);
    }
  },
  aliases: ["getunstuck", "gu"],
  group: "AI Functions",
  icon: <Globe size={18} />,
  subtext: "Get a prompt or question to help you keep writing.",
});

// List containing all default Slash Menu Items, as well as our custom one.
const getCustomSlashMenuItems = (
  editor: BlockNoteEditor,
): DefaultReactSuggestionItem[] => [
  insertHelloWorldItem(editor),
  ...getDefaultReactSlashMenuItems(editor),
];

const EditorRefined = ({
  updateContent,
  initialContent,
  editable,
}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const schema = BlockNoteSchema.create({
    blockSpecs: {
      ...defaultBlockSpecs,
      audio: undefined as any,
      image: undefined as any,
      video: undefined as any,
      file: undefined as any,
      table: undefined as any,
      h3: undefined as any,
      emoji: undefined as any,
    },
  });

  const saveToStorage = (jsonBlocks: Block[]) => {
    console.log("calling updateContent");
    updateContent(JSON.stringify(jsonBlocks));
  };

  const editor = useCreateBlockNote({
    schema,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });
  const checkWordCount = useCallback(() => {
    const fullDocumentText = extractDocumentText(editor.document);
    const wordCount = fullDocumentText.trim().split(/\s+/).length;

    // Fire toast only if word count is exactly 10
    if (wordCount === 10) {
      toast("You hit 10 words!");
      return true; // return true if toast was fired
    }
    return false;
  }, [editor]);

  useEffect(() => {
    let toastTriggered = false; // track whether toast has already been triggered

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " && !toastTriggered) {
        const fullDocumentText = extractDocumentText(editor.document);
        const wordCount = fullDocumentText.trim().split(/\s+/).length;

        if (wordCount === 10) {
          toastTriggered = checkWordCount();
        }
      }
    };

    const editorElement = document.querySelector(
      "[contenteditable=true]",
    ) as HTMLElement | null;

    if (editorElement) {
      editorElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (editorElement) {
        editorElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [checkWordCount]);

  return (
    <div>
      <BlockNoteView
        editor={editor}
        slashMenu={false}
        formattingToolbar={false}
        editable={editable}
        onBlur={() => saveToStorage(editor.document)}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      >
        <SuggestionMenuController
          triggerCharacter={"/"}
          getItems={async (query) =>
            filterSuggestionItems(getCustomSlashMenuItems(editor), query)
          }
        />
        <FormattingToolbarController
          formattingToolbar={() => (
            <FormattingToolbar>
              {/* AI button for Teacher Feedback */}
              <ToolbarButtonFeedbackTeacher key={"feedbackButtonTeacher"} />

              {/* AI button for Audience Feedback */}
              <ToolbarButtonFeedbackAudience key={"feedbackButtonAudience"} />

              <BlockTypeSelect key={"blockTypeSelect"} />
              <FileCaptionButton key={"fileCaptionButton"} />
              <FileReplaceButton key={"replaceFileButton"} />

              <BasicTextStyleButton
                basicTextStyle={"bold"}
                key={"boldStyleButton"}
              />
              <BasicTextStyleButton
                basicTextStyle={"italic"}
                key={"italicStyleButton"}
              />
              <BasicTextStyleButton
                basicTextStyle={"underline"}
                key={"underlineStyleButton"}
              />

              <TextAlignButton
                textAlignment={"left"}
                key={"textAlignLeftButton"}
              />
              <TextAlignButton
                textAlignment={"center"}
                key={"textAlignCenterButton"}
              />
              <TextAlignButton
                textAlignment={"right"}
                key={"textAlignRightButton"}
              />
            </FormattingToolbar>
          )}
        />
      </BlockNoteView>
    </div>
  );
};

export default EditorRefined;
