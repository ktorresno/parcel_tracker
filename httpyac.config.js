module.exports = {
    // options...
    log: {
      level: "info",
      supportAnsiColors: true,
    },
    cookieJarEnabled: true,
    defaultHeaders: {
      "Authorization": "Bearer {{token}}"
    }
  }