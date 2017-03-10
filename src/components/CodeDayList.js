import React, { PropTypes } from 'react';
import Code from 'react-icons/lib/fa/code';
import { Link } from 'react-router';

import CodeDayRow from './CodeDayRow';

const CodeDayList = ({days, filter}) => {

    const filteredDays = (!filter || !filter.match(/online|offline/)) ?
                         days :
                         days.filter(day => day[filter]);

    return (
        <div className="Code-day-list">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Event Name</th>
                        <th>Online</th>
                        <th>Offline</th>
                    </tr>
                </thead>
                <tbody>
                    {/* loop through the array passed in as props to generate a list */}
                    {/* can use spread operator '...day' to pass all the props */}
                    {filteredDays.map((day, i) => <CodeDayRow key={i}
                                                             event={day.event}
                                                             date={day.date}
                                                             online={day.online}
                                                             offline={day.offline} />)}
                    <tr>
                        <td colSpan="4" className="filter">
                            <span>Filter:</span>
                            <Link to="/list-days">All</Link> | 
                            <Link to="/list-days/online">Online</Link> | 
                            <Link to="/list-days/offline">Offline</Link>
                        </td>
                    </tr>                                                             
                </tbody>
            </table>
        </div>
    )
}

CodeDayList.propTypes = {
    days: function(props) {
        if (!Array.isArray(props.days)) { // check if days is an array
            return new Error("CodeDayList should be an array");
        } else if (!props.days.length) { // check if days is empty
            return new Error("CodeDayList must have at least one record");
        } else {
            return null;
        }
    }
}

export default CodeDayList;