# 垂直居中

## 定位居中

- 父元素相对定位，子元素绝对定位，top:50%，margin-top：负高度的一半 (需知道子元素宽高)
  ```css
  .container {
    position: relative;
  }
  .item {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
  }
  ```
- 父元素相对定位，子元素绝对定位，使用 translate 矫正子元素的偏移量 (不需知道子元素宽高)
  ```css
  .container {
    position: relative;
  }
  .item {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ```
  [demo](./example/absolute.html)

## 弹性布局居中

- 目前最常使用的居中方式，使用 flex 布局，设置 justify-content 和 align-items 为 center，即可实现居中。当子项目比较多考虑换行时，使用 align-content 来设置交叉轴对齐方式。

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* 多根轴线，交叉轴对齐方式 */
  align-content: center;
}
```

[demo](./example/flex.html)

## 网格布局居中

- 最优雅的居中方式，使用 grid 布局，设置 place-items 为 center，即可实现居中。 当子项目比较多时，使用 place-content 来设置交叉轴对齐方式。

```css
.contianer {
  display: grid;
  place-items: center;
  /* 多根轴线，交叉轴对齐方式 */
  place-content: center;
}
```

[demo](./example/grid.html)
