export async function writeClipboardText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}

export async function readClipboardText() {
  if (!document.hasFocus()) {
    throw new Error("Document is not focused");
  }

  try {
    const clipboardText = await navigator.clipboard.readText();
    return clipboardText;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}
