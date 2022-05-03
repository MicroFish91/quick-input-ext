import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "qi" is now active!');

  let disposable = vscode.commands.registerCommand("qi.helloWorld", () => {
    vscode.window.showInformationMessage("Hello World from quick-input!");
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
