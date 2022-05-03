import { InputBoxOptions, QuickPickOptions, window } from "vscode";

export async function showQuickPick() {
  let i = 0;

  // Displays an array of quick pick options based on array vals
  const result = await window.showQuickPick(["eins", "zwei", "drei"], {
    placeHolder: "eins, zwei or drei",
    onDidSelectItem: (item) =>
      // Select != click, arrowing over with highlight will trigger onSelect
      window.showInformationMessage(`Focus ${++i}: ${item}`),
  } as QuickPickOptions);
  window.showInformationMessage(`Got: ${result}`);
}

export async function showInputBox() {
  const result = await window.showInputBox({
    value: "abcdef",
    valueSelection: [2, 4],
    placeHolder: "For example: fedcba. But not: 123",
    validateInput: (text) => {
      window.showInformationMessage(`Validating: ${text}`);
      return text === "123" ? "Not 123!" : null;
    },
  } as InputBoxOptions);
  window.showInformationMessage(`Got: ${result}`);
}
