import React from 'react';
import { connect } from 'react-redux';
import { sampleAction } from '../actions';

class SampleComponent extends React.Component {
	constructor(props){
		super(props);	
		this.props.sampleAction('Hi This is React Redux Boilerplate');
	}

	render() {
		return (
			<div>
				{this.props.msg}
			</div>
		);
	}
}

SampleComponent.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.string,
}


function mapStateToProps(state) {
	return {
		msg: state.data.msg,
	}
}

export default connect(mapStateToProps, {sampleAction})(SampleComponent)
