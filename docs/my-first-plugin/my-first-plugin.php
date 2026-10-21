<?php
/**
 * Plugin Name: My First Plugin
 * Description: A starting point for your vibe-coded plugin. Replace this code with what the AI generates.
 * Version: 1.0.0
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * Author: Workshop Participant
 * Text Domain: my-first-plugin
 * License: GPL-2.0-or-later
 */

// Prevent direct access to this file
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/*
 * ==========================================================
 * YOUR CODE GOES BELOW
 * Replace this block with the code your AI tool generates.
 * ==========================================================
 */

// Example: show a message above every post
add_filter( 'the_content', 'mfp_example_message' );

function mfp_example_message( $content ) {
	// Only on single posts (not on pages or archives)
	if ( is_single() ) {
		$message = '<p style="background: #f0f0f0; padding: 10px; border-left: 4px solid #0073aa;">
			🎉 This plugin works! Replace this code with your own creation.
		</p>';
		return $message . $content;
	}
	return $content;
}
