var Rule = {
	test: /\.mjs$/,
	include: /node_modules/,
	type: 'javascript/auto',
	resolve: {
		fullySpecified: false,
	}
}

module.exports = function override(config, env) {
  config.module.rules.push(Rule)
  return config;
}