// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

//sends an alert with the current url
chrome.browserAction.onClicked.addListener(function(tabs) {
  chrome.tabs.query({currentWindow: true}, function(tabs){
    tabs.forEach(function(tab) {
      alert(tab.url);
    });
  });
});

// chrome.tabs.query({currentWindow: true}, function(tabs) {
//   tabs.forEach(function(tab) {
//       alert('Tab ID: ', tab.url);
//   });
// });