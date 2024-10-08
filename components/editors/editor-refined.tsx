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

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

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
        formattingToolbar={false}
        editable={editable}
        onBlur={() => saveToStorage(editor.document)}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      >
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
