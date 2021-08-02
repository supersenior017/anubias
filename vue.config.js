module.exports = {
    pluginOptions: {
        electronBuilder: {
            preload: './src/preload.js',
            // Or, for multiple preload files:
            "appId": "app.anubias.desktop",
            "productName": "Anubias",
            "copyright": "Copyright © 2021 ${author}",
            "mac": {
                "target": "dmg",
                "icon": "./public/icon.icns",
                "category": "public.app-category.developer-tools"
            },
            "win": {
                "target": [
                    "nsis",
                    "msi"
                ],
                "icon": "./public/256x256.png"
            },
            "linux": {
                "category": "Development",
                "target": "AppImage",
                "desktop": "Anubias"
            },
            "directories": {
                "buildResources": "public"
            },
            "fileAssociations": [
                {
                    "ext": "anb",
                    "name": "Anbuias project",
                    "role": "Anubias",
                    "perMachine": true,
                    "description": "Anubias project file to develope native app anywhere painless"
                }
            ]
            // preload: { preload: 'src/preload.js', otherPreload: 'src/preload2.js' }
        }
    }
};