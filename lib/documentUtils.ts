import { Block } from "@blocknote/core";


export function extractDocumentText(documentBlocks: Block[]) {
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