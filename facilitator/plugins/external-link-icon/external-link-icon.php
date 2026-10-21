<?php
/**
 * Plugin Name: External Link Icon
 * Description: Automatically adds an icon (↗) to external links and opens them in a new tab.
 * Version: 1.0.0
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * Author: Workshop Participant
 * Text Domain: external-link-icon
 * License: GPL-2.0-or-later
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter( 'the_content', 'eli_add_external_link_icons' );

function eli_add_external_link_icons( $content ) {
	if ( empty( $content ) ) {
		return $content;
	}

	$site_url = wp_parse_url( home_url(), PHP_URL_HOST );

	// Use DOMDocument to safely modify links
	// Suppress warnings for malformed HTML
	$dom = new DOMDocument();
	libxml_use_internal_errors( true );
	$dom->loadHTML(
		'<html><head><meta charset="UTF-8"></head><body>' . $content . '</body></html>',
		LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD
	);
	libxml_clear_errors();

	$links = $dom->getElementsByTagName( 'a' );

	foreach ( $links as $link ) {
		$href = $link->getAttribute( 'href' );

		// Skip anchors (#top) and relative links (/about). A link that starts
		// with // (//example.org) is not relative: it points to another site.
		if ( empty( $href ) || str_starts_with( $href, '#' )
			|| ( str_starts_with( $href, '/' ) && ! str_starts_with( $href, '//' ) ) ) {
			continue;
		}

		$link_host = wp_parse_url( $href, PHP_URL_HOST );

		if ( $link_host && $link_host !== $site_url ) {
			// External link found
			$link->setAttribute( 'target', '_blank' );

			// Add noopener and noreferrer, but keep values that were already
			// there (such as nofollow or sponsored).
			$rel = preg_split( '/\s+/', trim( $link->getAttribute( 'rel' ) ), -1, PREG_SPLIT_NO_EMPTY );
			$rel = array_unique( array_merge( $rel, array( 'noopener', 'noreferrer' ) ) );
			$link->setAttribute( 'rel', implode( ' ', $rel ) );

			// Add icon if not already present
			$text = $link->textContent;
			if ( ! str_contains( $text, '↗' ) ) {
				$icon = $dom->createTextNode( ' ↗' );
				$link->appendChild( $icon );
			}
		}
	}

	// Extract only the body contents
	$body = $dom->getElementsByTagName( 'body' )->item( 0 );
	$output = '';
	foreach ( $body->childNodes as $child ) {
		$output .= $dom->saveHTML( $child );
	}

	return $output;
}
