import React, { Component } from 'react';

import CodeDayList from './CodeDayList';
import CodeDayCount from './CodeDayCount';
import AddDayForm from './AddDayForm';
import Menu from './Menu';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.addDay = this.addDay.bind(this);

        this.state = {
            allCodeDays: [
            {
                event: "Hackthron",
                date: "2016-01-01",
                online: false,
                offline: true
            },
            {
                event: "React Meetup",
                date: "2017-04-06",
                online: false,
                offline: true
            },
            {
                event: "Code Fight",
                date: "2017-03-07",
                online: true,
                offline: false
            }
            ]
        }
    }

    // count the day for an activity type
    // param: string, the activity type that need to be counted
    // return: number, the day count of the activity type
    countDays(filter) {
        // generate an array containing only the passed in activity type
        const activityDays = this.state.allCodeDays.filter(function(day) {
            if (filter) {
                return day[filter];
            } else {
                return day;
            }
        });
        // return the day count
        return activityDays.length;
    }

    addDay(newDay) {
        this.setState({
            allCodeDays: [
                ...this.state.allCodeDays,
                newDay
            ]
        })
    }

    render() {

        let renderResult;

        if (this.props.location.pathname == "/") {
            // calculate the correct days for each activity and pass as props
            renderResult = (<CodeDayCount total={this.countDays()}
                                         online={this.countDays("online")}
                                         offline={this.countDays("offline")} />);
        } else if (this.props.location.pathname == "/add-day") {
            renderResult = (<AddDayForm onNewDay={this.addDay} />);
        } else {
            // pass an array as props
            renderResult = (<CodeDayList days={this.state.allCodeDays} 
                                        filter={this.props.params.filter} />);
        }

        return (
            <div className="app">
                <Menu />
                {renderResult}
            </div>
        )
    }
}