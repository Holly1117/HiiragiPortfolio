// @を改行に変換する関数
function convertAtToNewline(input: string | undefined): string | undefined {
  if (input) return input.replace(/@/g, "\n");
}

export const Helpers = {
  convertAtToNewline,
};
