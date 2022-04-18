<?php
/**
 * Bootstraps Global Styles.
 *
 * @package gutenberg
 */

if ( ! function_exists( '_wp_register_webfonts_from_theme_json' ) ) {
	/**
	 * Register webfonts defined in theme.json
	 *
	 * @param array $settings The theme.json file.
	 */
	function _wp_register_webfonts_from_theme_json( $settings ) {
		// If in the editor, add webfonts defined in variations.
		if ( is_admin() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
			$variations = WP_Theme_JSON_Resolver_Gutenberg::get_style_variations();

			foreach ( $variations as $variation ) {

				// Sanity check: Skip if fontFamilies are not defined in the variation.
				if (
					empty( $variation['settings'] ) ||
					empty( $variation['settings']['typography'] ) ||
					empty( $variation['settings']['typography']['fontFamilies'] )
				) {
					continue;
				}

			    // Merge the variation settings with the global settings.
			    $settings['typography']                          = empty( $settings['typography'] ) ? array() : $settings['typography'];
			    $settings['typography']['fontFamilies']          = empty( $settings['typography']['fontFamilies'] ) ? array() : $settings['typography']['fontFamilies'];
			    $settings['typography']['fontFamilies']['theme'] = empty( $settings['typography']['fontFamilies'] ) ? array() : $settings['typography']['fontFamilies']['theme'];
			    $settings['typography']['fontFamilies']['theme'] = array_merge( $settings['typography']['fontFamilies']['theme'], $variation['settings']['typography']['fontFamilies']['theme'] );

				// Make sure there are no duplicates.
				$settings['typography']['fontFamilies'] = array_unique( $settings['typography']['fontFamilies'] );
			}
		}

		// Bail out early if there are no settings for webfonts.
		if ( empty( $settings['typography'] ) || empty( $settings['typography']['fontFamilies'] ) ) {
			return;
		}

		$font_faces_to_register = array();

		foreach ( $settings['typography']['fontFamilies'] as $font_families_by_origin ) {
			foreach ( $font_families_by_origin as $font_family ) {
				if ( isset( $font_family['provider'] ) ) {
					if ( empty( $font_family['fontFaces'] ) ) {
						trigger_error(
							sprintf(
								/* translators: %s: font family name */
								esc_html__( 'The "%s" font family specifies a provider, but no font faces.', 'gutenberg' ),
								esc_html( $font_family['fontFamily'] )
							)
						);

						continue;
					}

					foreach ( $font_family['fontFaces'] as $font_face ) {
						$font_face['provider'] = $font_family['provider'];
						$font_face             = _gutenberg_resolve_font_face_uri( $font_face );
						$font_face             = _wp_array_keys_to_kebab_case( $font_face );

						$font_faces_to_register[] = $font_face;
					}

					continue;
				}

				if ( ! isset( $font_family['fontFaces'] ) ) {
					continue;
				}

				foreach ( $font_family['fontFaces'] as $font_face ) {
					if ( isset( $font_face['provider'] ) ) {
						$font_face = _gutenberg_resolve_font_face_uri( $font_face );
						$font_face = _wp_array_keys_to_kebab_case( $font_face );

						$font_faces_to_register[] = $font_face;
					}
				}
			}
		}

		wp_register_webfonts( $font_faces_to_register );
	}
}
