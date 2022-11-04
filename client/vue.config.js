module.exports = {
  devServer:{
    proxy:'http://127.0.0.1:8000/'
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/_colors.scss";
        @import "@/assets/_fonts.scss";
        `
      },
    }
  }
}