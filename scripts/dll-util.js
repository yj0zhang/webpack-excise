module.exports = {
    libs: {
        libs: ["vue", "vue-router", "vuex", "axios"]
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