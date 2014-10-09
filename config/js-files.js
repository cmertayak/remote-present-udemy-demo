var bowerLocation = "components/",
    initialJsFiles = [
        {
            name: "Modernizr",
            includes: [
                bowerLocation + "deck.js/modernizr.custom.js"
            ]
        }
    ],
    jsFiles = [
        {
            name: "JQuery",
            includes: [
                bowerLocation + "deck.js/jquery.min.js"
            ]
        },
        {
            name: 'deck',
            includes: [
                // Core Package of Deck.js
                bowerLocation + "deck.js/core/deck.core.js",

                // Extensions
                bowerLocation + "deck.js/core/deck.core.js",
                bowerLocation + "deck.js/extensions/menu/deck.menu.js",
                bowerLocation + "deck.js/extensions/goto/deck.goto.js",
                bowerLocation + "deck.js/extensions/status/deck.status.js",
                bowerLocation + "deck.js/extensions/navigation/deck.navigation.js",
                bowerLocation + "deck.js/extensions/scale/deck.scale.js"
            ]
        },
        {
            name: 'client-main',
            includes: [
                "javascripts/client-main.js"
            ]
        },
        {
            name: 'client-socket',
            includes: [
                "javascripts/client-socket.js"
            ]
        }
    ];

exports.initialJsFiles = initialJsFiles;
exports.jsFiles = jsFiles;
