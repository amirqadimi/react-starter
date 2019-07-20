import React from 'react';

const sprite = 'sprite.svg'

const Icon = props => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={`icon icon--${props.name}`}
		>
			<use xlinkHref={`${sprite}#${props.name}`} />
		</svg>
	)
};

export default Icon;