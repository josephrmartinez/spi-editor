"use client";

import {
  useBlockNoteEditor,
  useComponentsContext,
  useEditorContentOrSelectionChange,
} from "@blocknote/react";
import { PartialBlock, Block } from "@blocknote/core";
import "@blocknote/mantine/style.css";
import { useState } from "react";
import { extractDocumentText } from "@/lib/documentUtils";

export function ToolbarButtonPreparePublish() {
  const [isFetching, setIsFetching] = useState(false);
  const editor = useBlockNoteEditor();
  const Components = useComponentsContext()!;

  const getFeedback = async () => {
    setIsFetching(true);

    const selectedText = editor.getSelectedText();

    const documentBlocks = editor.document;
    const fullDocumentText = extractDocumentText(documentBlocks);

    try {
      // Send the selected text and document text to the API
      const response = await fetch("/api/prepare-publish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedText, fullDocumentText }),
      });

      const data = await response.json();

      if (data.feedback) {
        // New block we want to insert with the AI feedback
        const feedbackBlock: PartialBlock = {
          type: "checkListItem",
          content: [
            {
              type: "text",
              text: `AI Teacher Feedback: ${data.feedback}`,
              styles: { italic: true },
            },
          ],
        };

        // Inserting the new block at the end of the document
        const blocks = editor.document;
        const lastBlock = blocks[blocks.length - 1];
        editor.insertBlocks([feedbackBlock], lastBlock.id, "after");
      } else {
        console.error("No feedback received");
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <Components.FormattingToolbar.Button
      mainTooltip={"Prepare This Text for Publication"}
      onClick={getFeedback}
      isSelected={isFetching}
    >
      Publication Review
    </Components.FormattingToolbar.Button>
  );
}
