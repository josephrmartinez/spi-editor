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
import { ToolbarButtonFeedback } from "./toolbar-button-feedback";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";
import { Globe } from "lucide-react";
import { extractDocumentText } from "@/lib/documentUtils";

interface EditorProps {
  onChange: (value: string) => void;
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

const EditorRefined = ({ onChange, initialContent, editable }: EditorProps) => {
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

  // Add onChange and initialContent to perpetuate content in storage

  const saveToStorage = (jsonBlocks: Block[]) => {
    onChange(JSON.stringify(jsonBlocks));
  };

  const editor = useCreateBlockNote({
    schema,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });

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
              <BlockTypeSelect key={"blockTypeSelect"} />

              {/* Extra button to toggle blue text & background */}
              <ToolbarButtonFeedback key={"customButton"} />

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
