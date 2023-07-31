const {defineConfig} = require('cypress')

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    e2e: {
        baseUrl: 'http://192.168.1.11:2025', video: false
    },
})
