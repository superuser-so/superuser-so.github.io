import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import EleventyPluginHandlebars from "@11ty/eleventy-plugin-handlebars";

export default async function(eleventyConfig) {
  // Add Handlebars plugin
  eleventyConfig.addPlugin(EleventyPluginHandlebars);

  // Add Vite plugin
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      plugins: [
        (await import("@tailwindcss/vite")).default(),
      ],
    },
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch for CSS changes
  eleventyConfig.addWatchTarget("src/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["hbs", "md", "html"],
    htmlTemplateEngine: "hbs",
    markdownTemplateEngine: "hbs"
  };
}
