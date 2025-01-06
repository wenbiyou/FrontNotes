# CSS 布局

## 正常布局流

按照源码的顺序，依次排列。分为块级元素和内联元素。

### 下列布局技术会覆盖默认布局行为

- 浮动
- 绝对定位/固定定位
- 表格布局
- 多列布局

### 多列布局

一列一列布局，类似报纸排版。

```css
.box {
  column-count: 4;
  column-rule: 2px dashed orange;
  column-gap: 50px;
}
```

[demo](./example/多列布局.html)

## 弹性布局

Flex 布局，可以简便、完整、响应式地实现各种页面布局。它已经得到了所有浏览器的支持，可以很很安全地使用这项功能。

- 主轴、交叉轴居中
  ```css
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```
- 考虑子元素换行
  ```css
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
  ```
- 子元素不缩放
  ```css
  .item1 {
    flex-shrink: 0;
  }
  ```
- 子元素按比例缩放
  ```css
  .item2 {
    flex-grow: 1;
  }
  .item3 {
    flex-grow: 2;
  }
  ```
- 子元素在分配多余空间之前，项目占据的主轴空间

  ```css
  .item2 {
    flex-basis: 0;
  }
  ```

  [demo](./example/弹性布局.html)

## 网格布局

网格布局是 CSS 的最新布局规范之一，是一个二维的基于网格的布局系统。

- 网格容器(3 行 4 列)

  ```css
  .container {
    display: grid;
    grid-template-rows: 100px 100px 100px;
    grid-template-columns: 200px 200px 200px 200px;
    gap: 10px;
  }
  ```

- 跨行/跨列
  ```css
  .one {
    /** 跨列 */
    grid-column: span 2;
  }
  .two {
    /** 跨行 */
    grid-row: span 3;
  }
  .three {
    /** 跨行跨列 */
    grid-area: span 2 / span 2;
  }
  ```
- 设置单元格水平垂直居中
  ```css
  .container {
    display: grid;
    <!-- justify-items: center;
    align-items: center; -->
    place-items: center;
  }
  ```
- 设置整个内容区域在容器里面的水平位置和垂直位置

  ```css
  .container {
    display: grid;
    justify-content: center;
    align-content: center;
    place-content: center;
  }
  ```

  [demo](./example/网格布局.html)
