const Remarkable = require('remarkable');

module.exports = function(text) {
    const md = new Remarkable({
        html: true
    });
    return md.render(text);
};