// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//require 'popup.js';
'use strict';
/*
chrome.runtime.onInstalled.addListener(function() {
  // chrome.storage.sync.set({color: '#3aa757'}, function() {
  //   console.log('The color is green.');
  // });

  // Called when the user clicks on the browser action.
  chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
        //create a new tab
        let setTab = ["http://facebook.com","http://google.com"];
        setTab.forEach(function (openTab) {
            chrome.tabs.create({"url": openTab});
        })
    });
  }
*/
 

    //sends an alert with the current url
chrome.runtime.onInstalled.addListener(function() {
  let keyword = myAction();
  alert(keyword);
  chrome.browserAction.onClicked.addListener(function(tabs) {
  
  chrome.tabs.query({currentWindow: true}, function(tabs){
    tabs.forEach(function(tab) {
      alert(tab.url);
    });
  });

});
}
