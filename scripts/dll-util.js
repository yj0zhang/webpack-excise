module.exports = {
    libs: {
        vue: ["vue", "vue-router"],
        element: ["element-ui", "element-ui/lib/theme-chalk/index.css"]
    },
    getManifest: (name) => {
        return `${name}-manifest.json`;
    },
    getManifestList: () => {
        var list = [];
        Object.keys(this.libs, k => {
            list.push({
                key: k,
                name: this.getManifest(k)
            })
        });
        return list;
    }
}