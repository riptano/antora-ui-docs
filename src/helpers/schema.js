'use strict'

module.exports = (uiRoot) => {
    const dots = uiRoot.split('../').length - 2;
    return ".".repeat(dots) + "/_attachments/schema.json".trimStart()
}