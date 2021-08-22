import React from 'react';
import ReactDOM from 'react-dom';

import friends from './components/task-3/friends.json';
import FriendListItem from './components/task-3/FriendListItem';                           //  |task 3
ReactDOM.render(<FriendListItem friends={friends} />, document.getElementById('root'));