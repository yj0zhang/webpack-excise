function tplReplace(template, replaceObject) {
  const ret = template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
    return replaceObject[key];
  });
  return ret;
}

module.exports = {
  tplReplace,
};
