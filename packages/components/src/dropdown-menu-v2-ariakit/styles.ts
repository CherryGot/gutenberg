/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports
import * as Ariakit from '@ariakit/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { COLORS, font, CONFIG } from '../utils';
import { space } from '../ui/utils/space';
// import Icon from '../icon';
import type { DropdownMenuContext } from './types';

const CONTENT_WRAPPER_PADDING = space( 2 );
const ITEM_PREFIX_WIDTH = space( 7 );
const ITEM_PADDING_INLINE_START = space( 2 );
const ITEM_PADDING_INLINE_END = space( 2.5 );

// TODO: should bring this into the config, and make themeable
const DEFAULT_BORDER_COLOR = COLORS.ui.borderDisabled;
const TOOLBAR_VARIANT_BORDER_COLOR = COLORS.gray[ '900' ];
const DEFAULT_BOX_SHADOW = `0 0 0 ${ CONFIG.borderWidth } ${ DEFAULT_BORDER_COLOR }, ${ CONFIG.popoverShadow }`;
const TOOLBAR_VARIANT_BOX_SHADOW = `0 0 0 ${ CONFIG.borderWidth } ${ TOOLBAR_VARIANT_BORDER_COLOR }`;

// TODO: z-index from global vars
export const DropdownMenu = styled( Ariakit.Menu )<
	Pick< DropdownMenuContext, 'variant' >
>`
	position: relative;
	z-index: 50;

	min-width: 220px;
	max-height: var( --popover-available-height );
	padding: ${ CONTENT_WRAPPER_PADDING };

	background-color: ${ COLORS.ui.background };
	border-radius: ${ CONFIG.radiusBlockUi };
	${ ( props ) => css`
		box-shadow: ${ props.variant === 'toolbar'
			? TOOLBAR_VARIANT_BOX_SHADOW
			: DEFAULT_BOX_SHADOW };
	` }
	outline: none !important;

	overscroll-behavior: contain;
	overflow: visible;
`;
export const DropdownMenuGroup = styled( Ariakit.MenuGroup )``;
export const DropdownMenuGroupLabel = styled( Ariakit.MenuGroupLabel )``;

const itemPrefix = css`
	width: ${ ITEM_PREFIX_WIDTH };
	display: inline-flex;
	align-items: center;
	justify-content: center;
	/* Prefixes don't get affected by the item's inline start padding */
	margin-inline-start: calc( -1 * ${ ITEM_PADDING_INLINE_START } );
	/*
		Negative margin allows the suffix to be as tall as the whole item
		(incl. padding) before increasing the items' height. This can be useful,
		e.g., when using icons that are bigger than 20x20 px
	*/
	margin-top: ${ space( -2 ) };
	margin-bottom: ${ space( -2 ) };
`;

const itemSuffix = css`
	width: max-content;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	/* Push prefix to the inline-end of the item */
	margin-inline-start: auto;
	/* Minimum space between the item's content and suffix */
	padding-inline-start: ${ space( 6 ) };
	/*
		Negative margin allows the suffix to be as tall as the whole item
		(incl. padding) before increasing the items' height. This can be useful,
		e.g., when using icons that are bigger than 20x20 px
	*/
	margin-top: ${ space( -2 ) };
	margin-bottom: ${ space( -2 ) };

	/*
		Override color in normal conditions, but inherit the item's color
	  for altered conditions.

		TODO:
		  - For now, used opacity like for disabled item, which makes it work
			  regardless of the theme
		  - how do we translate this for themes? Should we have a new variable
		for "secondary" text?
	*/
	opacity: 0.6;

	/* TODO: find equivalent of data-state="open" and data-disabled */
	&[data-active-item] > &,
	[data-state='open'] > &,
	[data-disabled] > & {
		opacity: 1;
	}
`;

export const ItemPrefixWrapper = styled.span`
	${ itemPrefix }
`;

export const ItemSuffixWrapper = styled.span`
	${ itemSuffix }
`;

const baseItem = css`
	all: unset;
	font-size: ${ font( 'default.fontSize' ) };
	font-family: inherit;
	font-weight: normal;
	line-height: 20px;
	color: ${ COLORS.gray[ 900 ] };
	border-radius: ${ CONFIG.radiusBlockUi };
	display: flex;
	align-items: center;
	padding: ${ space( 2 ) } ${ ITEM_PADDING_INLINE_END } ${ space( 2 ) }
		${ ITEM_PADDING_INLINE_START };
	position: relative;
	user-select: none;
	outline: none;

	&[aria-disabled='true'] {
		/*
		TODO:
			- we need a disabled color in the Theme variables
			- design specs use opacity instead of setting a new text color
	*/
		opacity: 0.5;
		pointer-events: none;
	}

	/* Hover */
	&[data-active-item] {
		/* TODO: reconcile with global focus styles */
		background-color: ${ COLORS.gray[ '100' ] };
	}

	/* Keyboard focus (focus-visible) */
	&[data-focus-visible] {
		/* TODO: should there be a visual indication of keyboard focus vs hover? */

		/* Only visible in Windows High Contrast mode */
		outline: 2px solid transparent;
	}

	/* Active (ie. pressed) */
	&:active,
	&[data-active] {
		background-color: hsl( 204 100% 32% );
	}

	/* When trigger or a submenu that is open */
	${ DropdownMenu }:not(:focus) &:not(:focus)[aria-expanded="true"] {
		background-color: hsl( 204 10% 10% / 0.1 );
		color: currentColor;
		outline: 1px solid red;
	}

	svg {
		fill: currentColor;
	}
`;
// TODO: add styles to item for adding extra space when there's no prefix
// &:not( :has( ${ ItemPrefixWrapper } ) ) {
// 	padding-inline-start: ${ ITEM_PREFIX_WIDTH };
// }

export const DropdownMenuItem = styled( Ariakit.MenuItem )`
	${ baseItem }
`;
export const DropdownMenuCheckboxItem = styled( Ariakit.MenuItemCheckbox )`
	${ baseItem }
`;
export const DropdownMenuRadioItem = styled( Ariakit.MenuItemRadio )`
	${ baseItem }
`;
export const DropdownMenuSeparator = styled( Ariakit.MenuSeparator )``;
