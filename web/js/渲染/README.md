## 如何一次性渲染十万条数据还能保持页面不卡顿？

- 原理通过 requestAnimationFrame() 实现分块加载，根据当前电脑的刷新频率
- 通过 虚拟片段 fragment 减少页面回流的次数
- [demo](../渲染/example/render-more.html)

## JS 执行 100 万个任务，如何保证浏览器不卡顿？

- Web Worker [demo](../渲染/example/task_webworker.html.html)
- requestAnimationFrame 实现任务分割，保证任务在浏览器的每一帧之间执行，避免卡顿 [demo](../渲染/example/task_requestAnimationFrame.html)

## 禁止别人调试页面

- 定时器 bugger [demo](../渲染/example/debugger.html)
- 定时器 bugger+页面提示 [demo](../渲染/example/debugger2.html)
