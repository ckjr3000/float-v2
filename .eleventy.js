module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('assets');
    return {
      passthroughFileCopy: true,
      dir: {
        "input": "src",
        "output": "_site"
      }
    }
  }