// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

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

    //sends an alert with the current url
      chrome.tabs.getSelected(null, function (tab) {
          let tablink = tab.url;
          alert(tablink);
          console.log(tablink);
      });
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);

    //sends an alert with the current url
chrome.browserAction.onClicked.addListener(function(tabs) {
  chrome.tabs.query({currentWindow: true}, function(tabs){
    tabs.forEach(function(tab) {
      alert(tab.url);
    });
  });
 });
 
    //closes tab(s) with the given url pattern
chrome.browser.onClicked.addListener(function(tabs) {
  chrome.tabs.query({url: ["https://*.facebook.com/*"]}, function(tabs){
	tabs.forEach.(function(closeTab){
	 chrome.tabs.remove({closeTab.id});
	 });
  });
 });



