import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

import filter from '../../assets/filter.png';

function FilterCard({ title, actived }) {
	return (
		<S.Container actived={actived}>
			<img src={filter} alt="Filtro" />
			<span>{title}</span>
		</S.Container>
	);
}

FilterCard.propTypes = {
	title: PropTypes.string.isRequired,
	actived: PropTypes.bool.isRequired,
};

export default FilterCard;
