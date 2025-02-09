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

export function ToolbarButtonFeedbackTeacher() {
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
      const response = await fetch("/api/feedback-teacher", {
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
              text: `AI Coach Feedback: ${data.feedback}`,
              styles: { italic: true },
            },
          ],
        };

        const currentBlock = editor.getTextCursorPosition().block;
        // Inserting the new block after the current one
        editor.insertBlocks([feedbackBlock], currentBlock, "after");
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
      mainTooltip={"Get AI Coach Feedback on Selected Text"}
      onClick={getFeedback}
      isSelected={isFetching}
    >
      Coach Feedback
    </Components.FormattingToolbar.Button>
  );
}
