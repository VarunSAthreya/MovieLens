module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['pages/**/*.js', 'components/**/*.js'],
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [require('@tailwindcss/ui')],
};
