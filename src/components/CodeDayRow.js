import React, { PropTypes } from 'react';
import Code from 'react-icons/lib/fa/code';
import Ticket from 'react-icons/lib/fa/ticket';

const CodeDayRow = ({event, date, online, offline}) => {
    return(
        <tr>
            <td>
                {date}
            </td>
            <td>
                {event}
            </td>
            <td>
                {(online) ? <Ticket /> : null}
            </td>
            <td>
                {(offline) ? <Ticket /> : null}
            </td>
        </tr>
    )
}

CodeDayRow.propTypes = {
    event: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    online: PropTypes.bool,
    offline: PropTypes.bool
}

export default CodeDayRow;