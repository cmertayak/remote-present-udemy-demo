var bowerLocation = "components/",
    cssFiles = [
    {
        name: 'deck',
        includes: [
            bowerLocation + "deck.js/core/deck.core.css",
            bowerLocation + "deck.js/extensions/goto/deck.goto.css",
            bowerLocation + "deck.js/extensions/menu/deck.menu.css",
            bowerLocation + "deck.js/extensions/navigation/deck.navigation.css",
            bowerLocation + "deck.js/extensions/scale/deck.scale.css",
            bowerLocation + "deck.js/extensions/status/deck.status.css",
            bowerLocation + "deck.js/themes/style/web-2.0.css",
            bowerLocation + "deck.js/themes/transition/horizontal-slide.css",
            bowerLocation + "deck.js//core/print.css"
        ]
    },
    {
        name: 'bootstrap',
        includes: [
            bowerLocation + "bootstrap/less/bootstrap.css"
        ]
    }
];

exports.cssFiles = cssFiles;
