import React from 'react';
import { TimeContext } from './TimeContext'


class Clock extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {date: new Date()};  
	}  


	componentDidMount() {
		this.timerID = setInterval( 
			() => this.tick(), 1000
		);
	}  

	componentWillUnmount() { 
		clearInterval(this.timerID);  
	}  

	tick() {    
		this.setState({date: new Date()});  
	}  

	render() {    
		return (      
			<h2>It is {this.state.date.toLocaleTimeString('it-IT', this.context.zone)}.</h2> 
		);
	}
}

Clock.contextType = TimeContext;

export default Clock
