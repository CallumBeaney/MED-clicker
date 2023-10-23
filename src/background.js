/* the background/service worker is to handle events, manage data, and perform actions that don’t require direct user interaction. */


! async function setStateFirstTime(){  
  await browser.storage.local.set({ 
    onOffState: 'on', 
    searchField: 'anywhere', 
    activeTab: true, 
  });
}();


/// Construct options for an in-browser right-click menu and build their text content based off the initial state set above.
browser.runtime.onInstalled.addListener( async () => {

  const extensionState = await browser.storage.local.get(); /// gets all. not supported in safari

  browser.contextMenus.create({
    id: "functionalityToggler",
    title: (extensionState.onOffState == 'on' ? 'turn off' : 'turn on'),
    contexts: ["all"],
  });
  browser.contextMenus.create({
    id: "searchFieldToggler",
    title: (extensionState.searchField == 'anywhere' ? 'search headword only' : 'search entire entry'),
    contexts: ["all"],
  });
  browser.contextMenus.create({
    id: "activeTabToggler",
    title: (extensionState.activeTab == true ? 'stay on current tab when opening a new one' : 'move to new tabs I open'),
    contexts: ["all"],
  });
});


browser.contextMenus.onClicked.addListener(async (info, tab) => {

  const currentState = await browser.storage.local.get();
  if (info.menuItemId === "functionalityToggler") 
  {
    const newState = currentState.onOffState == 'on' ? 'off' : 'on';
    await browser.storage.local.set({onOffState: newState});
    browser.contextMenus.update("functionalityToggler", {
      title: (newState == 'on' ? 'turn off' : 'turn on'),
    });
  }
  else if (info.menuItemId === "searchFieldToggler") 
  {
    const newState = currentState.searchField == 'anywhere' ? 'hnf' : 'anywhere';
    await browser.storage.local.set({searchField: newState});
    browser.contextMenus.update("searchFieldToggler", {
      title: (newState == 'anywhere' ? 'search headword only' : 'search entire entry'),
    });
  }
  else if (info.menuItemId === "activeTabToggler") 
  {
    const newState = currentState.activeTab == true ? false : true;
    await browser.storage.local.set({activeTab: newState});
    browser.contextMenus.update("activeTabToggler", {
      title: (newState == true ? 'stay on current tab when opening a new one' : 'move to new tabs I open'),
    });
  }
});


browser.runtime.onMessage.addListener(async function(message) {

  const MED_URL = "https://quod.lib.umich.edu/m/middle-english-dictionary/dictionary?utf8=✓&search_field=";
  const state = await browser.storage.local.get();
  
  const completeURL = MED_URL + state.searchField + "&q=" + message.word;

  let createTab = browser.tabs.create({
    url: completeURL,
    active: state.activeTab,
  });
});


