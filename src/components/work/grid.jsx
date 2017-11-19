//Modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Diamond from 'work/diamond.jsx';

const animations = {
	left: [
		{	animation: {type: 'fade-left', delay: 0, anchor: '#work-radencode-title'}, size: 'big', },		
		{	animation: {type: 'fade-left', delay: 200, anchor: '#work-radencode-title'}, size: 'small', },
		{ animation: {type: 'fade-left', delay: 400, anchor: '#work-radencode-title'}, size: 'small', },
		{	animation: {type: 'fade-left', delay: 600, anchor: '#work-radencode-title'}, size: 'small', },
		{	animation: {type: 'fade-left', delay: 800, anchor: '#work-radencode-title'}, size: 'small', },
		{	animation: {type: 'fade-left', delay: 1000, anchor: '#work-radencode-title'},	size: 'small', },
		{	animation: {type: 'fade-left', delay: 1200, anchor: '#work-radencode-title'},	size: 'small', },
		{	animation: {type: 'fade-left', delay: 1400, anchor: '#work-radencode-title'},	size: 'small', },
	],		
	right: [
		{	animation: {type: 'fade-right', delay: 600, anchor: '#work-reflow-title'}, size: 'big', },
		{	animation: {type: 'fade-right', delay: 1400, anchor: '#work-reflow-title'}, size: 'small', },
		{	animation: {type: 'fade-right', delay: 1200, anchor: '#work-reflow-title'},	size: 'small', },
		{	animation: {type: 'fade-right', delay: 1000, anchor: '#work-reflow-title'},	size: 'small', },
		{	animation: {type: 'fade-right', delay: 800, anchor: '#work-reflow-title'}, size: 'small', },
		{	animation: {type: 'fade-right', delay: 400, anchor: '#work-reflow-title'}, size: 'small', },
		{ animation: {type: 'fade-right', delay: 200, anchor: '#work-reflow-title'}, size: 'small', },
		{	animation: {type: 'fade-right', delay: 0, anchor: '#work-reflow-title'}, size: 'small', },
	],						
}

const Grid = props => {
	const { title, imageId, pattern } = props;
	return (
		<div class={'grid ' + pattern}>
			{animations[pattern].map((diamond, index) => { 
				return <Diamond key={title + pattern + index} 
												size={diamond.size} 
												diamondPositionId={'diamond-' + (index + 1) + '-' + pattern} 
												imagePositionId={'image-' + (index + 1) + '-' + pattern} 
												animation={diamond.animation} 
												imageId={imageId}/>
			})}									
		</div>
	);
}

Grid.propTypes = {
	title: PropTypes.string.isRequired, 
	imageId: PropTypes.string.isRequired,
	pattern: PropTypes.string.isRequired,
};

export default Grid;