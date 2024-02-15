module.exports = function (eleventyConfig) {
  
  // Make sure Eleventy is aware of our CSS and JS 
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');
  
  // Add a custom filter so we can prepend text 
  eleventyConfig.addFilter("prependText", function(string, text) {
    console.log(this.page);
    console.log("test")
    return `${text} ${string} ${this.page.inputPath}`
    
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
