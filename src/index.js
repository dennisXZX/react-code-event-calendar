import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Whoops404 from './components/Whoops404';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="list-days" component={App}>
			<Route path=":filter" component={App} />
		</Route>
		<Route path="add-day" component={App} />
		<Route path="*" component={Whoops404} />
	</Router>
  ,document.querySelector('.react-container'));