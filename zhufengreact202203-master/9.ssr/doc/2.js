const insertCSS = (...styles) => {
  const removeCSS = styles.map(style => style._insertCSS());
  return () => removeCSS.forEach(dispose => dispose());
}

let style = {
  css: '.theme{color:red}',
  _insertCSS() {
    let styleEle = document.createElement('style');
    styleEle.innerHTML = style.css;
    document.head.appendChild(styleEle);
    return () => {
      styleEle.remove();
    }
  }
}
insertCSS(style);