import React, { Component, PropTypes } from 'react';

class AddDayForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault()
        const newDay = {
            event: this.refs.event.value,
            date: this.refs.date.value,
            online: this.refs.online.checked,
            offline: this.refs.offline.checked
        }
        this.props.onNewDay(newDay);
    }

    render() {

        const { event, date, online, offline } = this.props;

        return (
            <form onSubmit={this.submit} className="add-day-form">
                <label htmlFor="event">Event Name</label>
                <input id="event" 
                       type="test" 
                       required 
                       defaultValue={event}
                       ref="event" />

                <label htmlFor="date">Date</label>                
                <input id="date" 
                       type="date" 
                       required 
                       defaultValue={date}
                       ref="date" />

                <div>            
                    <input id="online" 
                           type="checkbox" 
                           defaultChecked={online}
                           ref="online" />
                    <label htmlFor="online">Online</label>                        
                </div>

                <div>            
                    <input id="offline" 
                           type="checkbox" 
                           defaultChecked={offline}
                           ref="offline" />
                    <label htmlFor="offline">Offline</label>                        
                </div>
                <button>Add an Event</button>
            </form>
        )
    }
}

AddDayForm.defaultProps = {
    event: "React Meetup",
    date: "2017-02-12",
    online: false,
    offline: true
}

AddDayForm.propTypes = {
    event: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    offline: PropTypes.bool.isRequired,
}

export default AddDayForm;