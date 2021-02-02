

module.exports = {
	default: function(_context) { 
		return {
			plugin: function (markdownIt, _options) {
                console.log(_options)
            }, 
            assets: function() {
                return [
                    { name: 'fence.css' }
                ];
            },
            
			
		}
	},
}