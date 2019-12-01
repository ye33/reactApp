import React from 'react';

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val: 0,
		};
	}

	render() {
		const { val } = this.state;

		return (
			<div>
				<p>{val}</p>
				<p>development & merge & feature-share & feature-share-two</p>
			</div>
		);
	}
}
