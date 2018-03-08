module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': { warnForDuplicates: false },
    'cssnano': file.extname.match(/\.css$/) ? {} : false
  }
});
