import React from 'react';
import { Card } from 'components/example-01/Card/Card';
import './card-list.styles.css';

export const CardList = ({ monsters }) => (
	<div className='card-list'>
		{monsters.map((user) => {
			return <Card key={user.id} monster={user} />;
		})}
	</div>
);
