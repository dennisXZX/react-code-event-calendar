import React, { Component, PropTypes } from 'react';
import Code from 'react-icons/lib/fa/code';

class CodeDayCount extends Component {

	render() {    
		// deconstructing assignment
		const { total, online, offline} = this.props;    
		return (
			<div className="code-day-count">
				<h1>Code Event Calendar</h1>
				<div className="total-days">
					<span>{total}</span>
						<Code />
					<span>events</span>
				</div>
				<div className="online-days">
					<span>{`${online} Online`}</span>  
					<span></span>
				</div>
				<div className="offline-days">
					<span>{`${offline} Offline`}</span>   
				</div>       
			</div>
		)
	}
}

CodeDayCount.propTypes = {
		total: PropTypes.number,
		online: PropTypes.number,
		offline: PropTypes.number
}

export default CodeDayCount;