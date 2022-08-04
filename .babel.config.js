module.exports = {
    presets: [
        [
            'next/babel',
            {
                'preset-react': {
                    importSource: 'theme-ui', // or '@theme-ui/core'
                    runtime: 'automatic',
                    throwIfNamespace: false,
                },
            },
        ],
    ],
    // ...
}