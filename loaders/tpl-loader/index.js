const { tplReplace } = require("../utils");

function tplLoader(source) {
  source = source.replace(/\s+/g, "");

  const { log } = this.getOptions();
  const _log = log
    ? `console.log('compiled the file which is from ${this.resourcePath}')`
    : "";
  //返回脚本字符串，交给下一个插件（babel）处理
  //${tplReplace.toString()} 把函数声明放在导出的字符串中
  return `
        export default (options) => {
            ${tplReplace.toString()}
            ${_log.toString()}
            return tplReplace('${source}', options)
        }
    `;
}

module.exports = tplLoader;

// const info = tpl({
//     name: 'z',
//     age: 30,
//     career: '工程师',
//     hobby: 'travel'
// })

//<div><h1>{{name}}</h1><p>{{age}}</p><p>{{career}}</p><p>{{hobby}}</p></div>

// function tpl(options) {
//     function tplReplace(template, replaceObject) {
//         return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
//             return replaceObject[key]
//         })
//     }
//     return tplReplace(`${source}`, options);
// }
