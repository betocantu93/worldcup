'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/zonkyio/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Fifa Worldcup",
    short_name: "Fifa Worldcup",
    description: "Fifa World cup PWA Ember Octane",
    start_url: "/",
    display: "standalone",
    background_color: "blueviolet",
    theme_color: "blueviolet",
    icons: [
      {
        src: "/assets/img/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/assets/img/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      }
    ],
  };
}
