# wdio-scrollintoview-bug

We noticed that using the scrollIntoView method returns a bunch of WARNINGS and ERROR in Terminal, even though the test passes.

This bug occurs when executing the test against Chrome Mobile Emulated, but passes in Chrome Desktop.

```
[0-0] RUNNING in chrome - file:///tests/bug.spec.js
[0-0] 2023-04-12T13:48:28.975Z WARN webdriver: Request failed with status 400 due to invalid argument: Invalid parameters
[0-0]   (Session info: chrome=112.0.5615.49)
[0-0] 2023-04-12T13:48:29.029Z WARN webdriver: Request failed with status 400 due to invalid argument: Invalid parameters
[0-0]   (Session info: chrome=112.0.5615.49)
[0-0] 2023-04-12T13:48:29.078Z WARN webdriver: Request failed with status 400 due to invalid argument: Invalid parameters
[0-0]   (Session info: chrome=112.0.5615.49)
[0-0] 2023-04-12T13:48:29.127Z ERROR webdriver: Request failed with status 400 due to invalid argument: invalid argument: Invalid parameters
[0-0]   (Session info: chrome=112.0.5615.49)
[0-0] 2023-04-12T13:48:29.127Z WARN webdriverio: Failed to execute "scrollIntoView" using WebDriver Actions API: invalid argument: Invalid parameters
[0-0]   (Session info: chrome=112.0.5615.49)!
[0-0] Re-attempting using `Element.scrollIntoView` via Web API.
[0-0] PASSED in chrome - file:///tests/bug.spec.js
```

```
   npm install
   npm test
```