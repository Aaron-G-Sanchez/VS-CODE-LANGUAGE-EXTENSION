const vscode = require('vscode')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Command to show activation
  console.log('Activated')

  // let todoTracker = []

  vscode.workspace.onDidChangeTextDocument((e) => {
    console.log(e)

    console.log(e.document.getWordRangeAtPosition())
    // todoTracker.push(e.contentChanges[0].text)

    // console.log(todoTracker.join(''))
  })
}

// This method is called when your extension is deactivated
function deactivate() {
  console.log('Deactivated')
}

module.exports = {
  activate,
  deactivate
}
