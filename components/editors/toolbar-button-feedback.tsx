import {
  useBlockNoteEditor,
  useComponentsContext,
  useEditorContentOrSelectionChange,
} from "@blocknote/react";
import { PartialBlock, Block } from "@blocknote/core";
import "@blocknote/mantine/style.css";

function extractDocumentText(documentBlocks: Block[]) {
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

// Custom Formatting Toolbar Button to toggle blue text & background color.
export function ToolbarButtonFeedback() {
  const editor = useBlockNoteEditor();

  const Components = useComponentsContext()!;

  const getFeedback = () => {
    const currentBlock = editor.getTextCursorPosition().block;

    const selectedText = editor.getSelectedText();
    console.log("Selected text:", selectedText);

    const documentBlocks = editor.document;
    const fullDocumentText = extractDocumentText(documentBlocks);
    console.log("Full document text:", fullDocumentText);

    // console.log("selected text:", selectedText);
    // New block we want to insert.
    const feedbackBlock: PartialBlock = {
      type: "checkListItem",
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
  };

  return (
    <Components.FormattingToolbar.Button
      mainTooltip={"Get Feedback on Selected Text"}
      onClick={getFeedback}
      isSelected={false}
    >
      Feedback
    </Components.FormattingToolbar.Button>
  );
}
