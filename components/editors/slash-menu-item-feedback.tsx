"use client";

import {
  BlockNoteEditor,
  filterSuggestionItems,
  PartialBlock,
} from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import {
  DefaultReactSuggestionItem,
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  useCreateBlockNote,
} from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { HiOutlineGlobeAlt } from "react-icons/hi";

// Custom Slash Menu item to insert a block after the current one.
const getFeedback = (editor: BlockNoteEditor) => ({
  title: "Get Feedback",
  onItemClick: () => {
    // Block that the text cursor is currently in.
    const currentBlock = editor.getTextCursorPosition().block;

    // New block we want to insert.
    const feedbackBlock: PartialBlock = {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This is a paragraph of AI generated feedback.",
          styles: { bold: true },
        },
      ],
    };

    // Inserting the new block after the current one.
    editor.insertBlocks([feedbackBlock], currentBlock, "after");
  },
  aliases: ["feedbackblock", "fb"],
  group: "Other",
  icon: <HiOutlineGlobeAlt size={18} />,
  subtext: "Used to insert AI feedback.",
});

// List containing all default Slash Menu Items, as well as our custom one.
export const getCustomSlashMenuItems = (
  editor: BlockNoteEditor,
): DefaultReactSuggestionItem[] => [
  ...getDefaultReactSlashMenuItems(editor),
  getFeedback(editor),
];
