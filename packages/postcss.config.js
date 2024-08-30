module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: ['default', {
        normalizeWhitespace: false, // ソースマップをずらさないようにホワイトスペースの正規化を無効にする
      }],
    },
  },
  map: { inline: false }, // ソースマップをファイルとして出力
};