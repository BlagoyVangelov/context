import React from 'react'
import { Button } from './Button';
import { TimeContext } from './TimeContext'

class TimeSwitcher extends React.Component {

	render() {
		return(	
			<div>
				<TimeContext.Consumer>
					{ ({value, setZone}) => <React.Fragment>
						<Button text='BG' action={ () => setZone({zone: 'Europe/Sofia'})} />
						<Button text='EN' action={ () => setZone({zone: 'Europe/London'})} />						
					</React.Fragment> }
				</TimeContext.Consumer>
			</div>
		)
	}
}

export default TimeSwitcher;
