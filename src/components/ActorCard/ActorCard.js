import React from 'react';
import './ActorCard.scss';

export default function ActorCard( { image, name, skills, availability, className = '', style = {} } ) {
	return (
		<div className={ "actor-card " + className } style={ style }>

			<div className="actor-card__image">
				{ image }
			</div>

			<div className="actor-card__content">
				<h3 className="actor-card__name">
					{ name }
				</h3>

				<div className="actor-card__skills">
					{ skills }
				</div>

				<div className="actor-card__availability">
					{ availability }
				</div>
			</div>

		</div>
	);
}
