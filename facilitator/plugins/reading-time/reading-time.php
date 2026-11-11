<?php
/**
 * Plugin Name: Reading Time
 * Description: Displays the estimated reading time above each post.
 * Version: 1.0.0
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * Author: Workshop Participant
 * Text Domain: reading-time
 * License: GPL-2.0-or-later
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter( 'the_content', 'rt_add_reading_time' );

function rt_add_reading_time( $content ) {
	if ( ! is_single() || ! in_the_loop() || ! is_main_query() ) {
		return $content;
	}

	$word_count = str_word_count( wp_strip_all_tags( $content ) );
	$minutes    = max( 1, (int) ceil( $word_count / 250 ) );

	// _n() picks "1 minute" or "2 minutes"; escaping happens once, below.
	$label = sprintf(
		/* translators: %d: number of minutes */
		_n( 'Estimated reading time: %d minute', 'Estimated reading time: %d minutes', $minutes, 'reading-time' ),
		$minutes
	);

	$html = '<p class="reading-time" style="color: #666; font-style: italic; margin-bottom: 1.5em;">'
		. esc_html( $label )
		. '</p>';

	return $html . $content;
}
