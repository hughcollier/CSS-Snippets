module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');
  
  eleventyConfig.setServerOptions({
    showAllHosts: true,
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
