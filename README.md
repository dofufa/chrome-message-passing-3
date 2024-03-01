# chrome-message-passing-1
Basic Chrome extension message passing between popup and service worker

### Summary


Hi! 👋

This Chrome browser extension example demonstrates simple message passing between two contexts: the **popup** context and the **service worker** context.

```
*********                ***********
*       * message------>>* service *
* popup *                * worker  *
*       * <<----response *         *
*********                ***********
sender                   receiver
```

### References
  + [Chrome extension service workers][g_sw]
  + [Chrome extension popup][g_popup]

---
[g_sw]: https://developer.chrome.com/docs/extensions/develop/concepts/service-workers
[g_popup]: https://developer.chrome.com/docs/extensions/develop/ui/add-popup
