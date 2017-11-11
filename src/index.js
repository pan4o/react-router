import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home/Home';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Test = ({ match }) => (
  <div>
    <h3>test</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
  </div>
);

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/topics" component={Topics}/>
			<Route path={'/topics'} render={() => (
				<Link to="/">Back To Home</Link>
			)}/>
		</div>
	</Router>,
	document.getElementById('root')
);
