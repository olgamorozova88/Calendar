const pathSrc = "./src";
const pathDest = "./build";

module.exports = {
  root: pathDest,

  html: {
    src: `${pathSrc}/*.html`,
    watch: `${pathSrc}/*.html`,
    dest: pathDest
  },

  style: {
    src: `${pathSrc}/scss/style.scss`,
    watch: `${pathSrc}/scss/**/*.scss`,
    dest: `${pathDest}/css`
  },

  font: {
    src: `${pathSrc}/fonts/*.*`,
    watch: `${pathSrc}/fonts/*.*` ,
    dest: `${pathDest}/fonts`
  },

  scripts: {
    src: `${pathSrc}/js/*.*`,
    watch: `${pathSrc}/js/*.*` ,
    dest: `${pathDest}/js`
  }
}
