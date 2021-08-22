import React from 'react';

import FriendList from './FriendList';


const FriendListItem = ({ friends = [] }) => (
	<ul>
		{friends.map(item => (
			<li key={item.id}>
				<FriendList {...item} isOnline = {item.isOnline} />
			</li>
		))}
	</ul>
);

export default FriendListItem;
