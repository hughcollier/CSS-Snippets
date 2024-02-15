module.exports = function (eleventyConfig) {
  
  // Make sure Eleventy is aware of our CSS and JS 
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');
  
  eleventyConfig.addFilter("prependTitle", function(string, text) {
    return `${text} ${string}`
  });
  
  // Display links for local network device testing when dev server starts
  eleventyConfig.setServerOptions({
    showAllHosts: true,
  });

  return {
    // Override default input / output directory names
    dir: {
      input: 'src',
      output: 'dist',
    },
    
    // Set templating language for .md files to nunjucks (default is liquid)
    markdownTemplateEngine: "njk",
  };
};
