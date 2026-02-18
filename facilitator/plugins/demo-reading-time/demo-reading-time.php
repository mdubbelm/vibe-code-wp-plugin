<?php
/**
 * Plugin Name: Reading Time
 * Description: Displays the estimated reading time above each post.
 * Version: 1.0.0
 * Author: Workshop Demo
 * Text Domain: demo-reading-time
 * License: GPL-2.0-or-later
 */

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Calculate reading time and display above content.
 */
add_filter( 'the_content', 'drt_add_reading_time' );

function drt_add_reading_time( $content ) {
	// Only on single posts in the main query
	if ( ! is_single() || ! in_the_loop() || ! is_main_query() ) {
		return $content;
	}

	// Count words and calculate minutes (average 250 words per minute)
	$word_count = str_word_count( wp_strip_all_tags( $content ) );
	$minutes    = max( 1, (int) ceil( $word_count / 250 ) );

	// Build the reading time notice
	$reading_time = sprintf(
		'<p class="reading-time" style="color: #666; font-size: 0.9em; margin-bottom: 1.5em;">%s</p>',
		esc_html(
			sprintf(
				/* translators: %d: number of minutes */
				_n(
					'Estimated reading time: %d minute',
					'Estimated reading time: %d minutes',
					$minutes,
					'demo-reading-time'
				),
				$minutes
			)
		)
	);

	return $reading_time . $content;
}
