{
  class ZForm {
    constructor(actions = []) {
      this.actions = actions
    }

    test() {
      this.actions.forEach((item, idx) => {
        const [method, element, value] = item
        testElement(element, idx+1)
      })
    }

    run() {
      const delay = 100
      this.actions.forEach((item, idx) => {
        const [method, element, value] = item
        switch(method) {
          case 'click':
          setTimeout(clickElement, idx * delay, element)
          break;

          case 'input':
          setTimeout(inputElement, idx * delay, element, value)
          break;

          default:
          break;
        }
      })
    }
  }

  /** in Chrome, `$()` is a native method, so use `$_()` instead */
  function $_(element) {
    const $_el = document.querySelector(element)
    if ($_el) {
      return $_el
    }

    return { style: {} }
  }

  function testElement(element, step) {
    const $_el = $_(element)
    if (!$_el) return

    const testStyle = '2px solid red'
    $_el.style.border = testStyle

    const testStr = `#${step} ${element}`
    if ($_el.nodeName === 'INPUT') {
      $_el.value = testStr
    } else {
      $_el.text = testStr
    }
  }

  function inputElement(element, value) {
    var $el = $_(element)
    $el.value = value

    /** some website use onblur to trigger form validation */
    $el.blur()
  }

  function clickElement(element) {
    const $_el = $_(element)
    if ($_el) {
      $_el.click()
    } else {
      console.log(`"${element}" is empty`)
    }
  }

  /** Usage Section */

  // 以下动作以微信小程序管理后台的【数据分析】-> 【自定义分析】-> 【新建事件】为例：
  var actions = [
    ['input', '.frm_input[data-type="1"]', 'event name'],
    ['input', '.frm_input[data-type="2"]', '事件名称'],
    ['input', '.frm_input.js_page', 'pages/home/index'],
    ['input', '.frm_input.js_element', '#submit'],
    ['input', '.js_data dd:nth-of-type(1) .js_field.frm_input', 'user_id'],
    ['input', '.js_data dd:nth-of-type(1) .js_value.frm_input', '$APP.user_id'],
    ['click', '.js_data dd:nth-of-type(1) .js_add_field'],
    ['input', '.js_data dd:nth-of-type(2) .js_field.frm_input', 'access_token'],
    ['input', '.js_data dd:nth-of-type(2) .js_value.frm_input', '$APP.access_token'],
    ['click', '.js_data dd:nth-of-type(2) .js_add_field'],
    ['input', '.js_data dd:nth-of-type(3) .js_field.frm_input', 'pageid'],
    ['input', '.js_data dd:nth-of-type(3) .js_value.frm_input', 'pageid'],
    ['click', '#js_check_config'],
    ['click', '#js_publish'],
  ]
  var zform = new ZForm(actions)
  // zform.test()
  zform.run()
}
