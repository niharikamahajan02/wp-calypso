import { getTheme } from 'calypso/state/themes/selectors/get-theme';
import { isPremium } from 'calypso/state/themes/utils';

import 'calypso/state/themes/init';

/**
 * Whether a WPCOM theme given by its ID is premium.
 * @param  {Object} state   Global state tree
 * @param  {string} themeId Theme ID
 * @returns {boolean}        True if the theme is premium
 */
export function isThemePremium( state, themeId ) {
	return isPremium( getTheme( state, 'wpcom', themeId ) );
}
