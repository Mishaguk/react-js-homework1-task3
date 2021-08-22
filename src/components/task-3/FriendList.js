import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendList.module.css';

const FriendList = ({ avatar, name, isOnline }) => {
	const friendListClasses = [styles.friendList];

	if (!isOnline) {
		friendListClasses.push(styles.offline);
	}

	return (
		<li>
            <p className={styles.name}>{name}</p>
			<img src={avatar} alt='' width='48'></img>
            <p className={friendListClasses.join(' ')}>&nbsp;</p>
			
			
		</li>
	);
};

export default FriendList;
