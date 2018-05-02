const excludedReactMethods = [
	'componentWillMount',
	'render',
	'componentDidMount',
	'componentWillReceiveProps',
	'shouldComponentUpdate',
	'componentWillUpdate',
	'componentDidUpdate',
	'componentWillUnmount',
	'componentDidCatch',
	'setState',
	'forceUpdate',
	'getDerivedStateFromProps',
	'getSnapshotBeforeUpdate'
];

module.exports = object => {

	for (const key of Object.getOwnPropertyNames(object.constructor.prototype)) {
		const func = object[key];

		if (key !== 'constructor' && typeof func === 'function' && excludedReactMethods.indexOf(key) === -1) {
			object[key] = func.bind(object);
		}
	}

	return object;
};