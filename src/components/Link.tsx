import React from 'react';

export const Link = ({
	href = '',
	text = 'Link text',
	...props
}) => {
	return (
	  	<a
			href={href}
			className="link"
			{...props}
		>
		{text}
	  </a>
	);
};
