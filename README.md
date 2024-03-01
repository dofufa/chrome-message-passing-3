# chrome-message-passing-3
Basic Chrome extension message passing between popup and content script

### Summary


Howdy! 👋

This Chrome browser extension example demonstrates simple message passing between two contexts: the **popup** context and the **content script** context.

```
*********                ***********
*       * message------>>* content *
* popup *                * script  *
*       * <<----response *         *
*********                ***********
sender                   receiver
```

### References
  + [Chrome extension content scripts][g_cs]
  + [Chrome extension popup][g_popup]

---
[g_cs]: https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts
[g_popup]: https://developer.chrome.com/docs/extensions/develop/ui/add-popup
