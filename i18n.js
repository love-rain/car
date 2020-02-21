const NextI18Next = require('next-i18next/dist/commonjs');

module.exports = new NextI18Next({
    defaultLanguage: 'vi',
    otherLanguages: ['en'],
    localeSubpaths: 'foreign',
});