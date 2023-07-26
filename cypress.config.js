const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://192.168.1.11:2025',
    video: false
  },
})
