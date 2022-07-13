const {
  version
} = require('../version.json');
const permissions = require('../permissions');
const {
  name,
  short_name,
  description
} = require('../app_info');

module.exports = {
  version,
  manifest_version: 2,
  name,
  short_name,
  description,
  permissions: [...permissions, "https://*/*"],
  browser_action: {
    "default_title": short_name
  },
  "content_scripts": [{
    "matches": ["<all_urls>"],
    // "css": ["myStyles.css"],
    "js": ["content.js"]
  }],
  icons: {
    "512": "assets/images/logo.png"
  },
  background: {
    "scripts": ["background.js"]
  },
  options_ui: {
    "page": "assets/html/options.html",
    "browser_style": true
  },
  web_accessible_resources: [
    "assets/**"
  ],
  // ...(process.env.NODE_ENV === 'development' ? {
  //   content_security_policy: "script-src 'self' 'unsafe-eval'; font-src 'self' data: https://fonts.gstatic.com/s/dmsans; object-src 'self';"
  // } : {})
};