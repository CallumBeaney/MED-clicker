/* The content.js file is responsible for injecting or modifying the content of web pages that you visit */

document.addEventListener('dblclick', async function(event) 
{
  /// Check whether the extension is "soft disabled" i.e. when you leftclick the extension toolbar button it doesn't get disabled, but it is "shut down" so that users can decide when they want to use it or not.
  const currentState = await browser.storage.local.get('onOffState');
  // debugState(appOnOffState);
  if (currentState.onOffState != 'on') {
    return;
  }

  
  /// the user is clicking on whitespace, or maybe punctuation? Do not show. Fuck the word 'a' in particular.
  const selectedText = window.getSelection().toString().toLowerCase(); /// TODO: to lowercase && checks
  if (selectedText == null || selectedText.length == 1 || selectedText.length == 0) {
    return;
  }


  browser.runtime.sendMessage({word: selectedText});

});
