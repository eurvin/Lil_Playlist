import React, { Component } from 'react';

const addButton = (props) => {
	render() {
		return (
			<React.Fragment>
				<main>{this.props.children}</main>
			</React.Fragment>
		);
	}
}

export default addButton;