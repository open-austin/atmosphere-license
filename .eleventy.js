module.exports = function (eleventyConfig) {
    eleventyConfig.setLiquidOptions({
        dynamicPartials: true,
        strict_filters: true
    });
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    return {
        pathPrefix: "/atmosphere-license/",
    };
};