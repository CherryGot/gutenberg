/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import Button from '../button';
import { COLORS } from '../utils';
import { space } from '../ui/utils/space';

export const TabListWrapper = styled.div`
	display: flex;
	align-items: stretch;
	flex-direction: row;
	&[aria-orientation='vertical'] {
		flex-direction: column;
	}
`;

export const TabButton = styled( Button )`
	&& {
		position: relative;
		border-radius: 0;
		height: ${ space( 12 ) };
		background: transparent;
		border: none;
		box-shadow: none;
		cursor: pointer;
		padding: 3px ${ space( 4 ) }; // Use padding to offset the [aria-selected="true"] border, this benefits Windows High Contrast mode
		margin-left: 0;
		font-weight: 500;

		&:focus:not( :disabled ) {
			position: relative;
			box-shadow: none;
			outline: none;
		}

		// Tab indicator
		&::after {
			content: '';
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			pointer-events: none;

			// Draw the indicator.
			background: ${ COLORS.theme.accent };
			height: calc( 0 * var( --wp-admin-border-width-focus ) );
			border-radius: 0;

			// Animation
			transition: all 0.1s linear;
			@include reduce-motion( 'transition' );
		}

		// Active.
		&[aria-selected='true']::after {
			height: calc( 1 * var( --wp-admin-border-width-focus ) );

			// Windows high contrast mode.
			outline: 2px solid transparent;
			outline-offset: -1px;
		}

		// Focus.
		&::before {
			content: '';
			position: absolute;
			top: ${ space( 3 ) };
			right: ${ space( 3 ) };
			bottom: ${ space( 3 ) };
			left: ${ space( 3 ) };
			pointer-events: none;

			// Draw the indicator.
			box-shadow: 0 0 0 0 transparent;
			border-radius: 2px;

			// Animation
			transition: all 0.1s linear;
			@include reduce-motion( 'transition' );
		}

		&:focus-visible::before {
			box-shadow: 0 0 0 var( --wp-admin-border-width-focus )
				${ COLORS.theme.accent };

			// Windows high contrast mode.
			outline: 2px solid transparent;
		}
	}
`;
