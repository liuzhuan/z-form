# z-form
z 表单，一个提交表单的自动化工具。

## 源起

日常工作中，偶尔会填写大量重复性表单，十分痛苦。如果能将表单的填写和提交自动化，将极大提升效率。

## 分析

最常见表单相关的动作可以分为**输入**表单和**点击**按钮。

```js
const actions = [
    /** action, element, value */
    ['input', '#phone', '10086'],
    ['click', '#submit'],
]

const zform = new ZForm(actions)

/** 测试元素是否正确 */
zform.test()

/** 执行自动化动作 */
zform.run()
```

## 使用方法

1. 使用 Chrome 浏览器打开需要填写表单的网页
2. 打开开发者工具，使用 `Sources` 选项卡下的 `snippets` 子选项，新建空白脚本
3. 将 [ZForm.js](./ZForm.js) 拷贝至空白脚本处，保存
4. 根据自己需求修改脚本 `actions` 内容
5. 运行脚本即可自动化填充脚本

## 注意

本工具使用了 ES6 语法，请使用新版的谷歌浏览器。