<?php
/**
 * Plugin Name: Simple Maintenance Mode
 * Description: Shows an "under maintenance" page to visitors. Logged-in admins see the site normally.
 * Version: 1.0.0
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * Author: Workshop Participant
 * Text Domain: maintenance-mode
 * License: GPL-2.0-or-later
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// ─── Admin settings page ───

add_action( 'admin_menu', 'mm_add_settings_page' );

function mm_add_settings_page() {
	add_options_page(
		__( 'Maintenance Mode', 'maintenance-mode' ),
		__( 'Maintenance Mode', 'maintenance-mode' ),
		'manage_options',
		'maintenance-mode',
		'mm_render_settings_page'
	);
}

add_action( 'admin_init', 'mm_register_settings' );

function mm_register_settings() {
	register_setting( 'mm_settings', 'mm_enabled', array(
		'type'              => 'boolean',
		'sanitize_callback' => 'rest_sanitize_boolean',
		'default'           => false,
	) );

	register_setting( 'mm_settings', 'mm_message', array(
		'type'              => 'string',
		'sanitize_callback' => 'sanitize_textarea_field',
		'default'           => __( 'We are currently performing maintenance. We will be back shortly!', 'maintenance-mode' ),
	) );
}

function mm_render_settings_page() {
	?>
	<div class="wrap">
		<h1><?php esc_html_e( 'Maintenance Mode', 'maintenance-mode' ); ?></h1>
		<form method="post" action="options.php">
			<?php settings_fields( 'mm_settings' ); ?>
			<table class="form-table">
				<tr>
					<th scope="row">
						<label for="mm_enabled"><?php esc_html_e( 'Enable', 'maintenance-mode' ); ?></label>
					</th>
					<td>
						<input type="checkbox" id="mm_enabled" name="mm_enabled" value="1"
							<?php checked( get_option( 'mm_enabled' ) ); ?> />
						<p class="description">
							<?php esc_html_e( 'Visitors will see the maintenance page. Admins see the site normally.', 'maintenance-mode' ); ?>
						</p>
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label for="mm_message"><?php esc_html_e( 'Message', 'maintenance-mode' ); ?></label>
					</th>
					<td>
						<textarea id="mm_message" name="mm_message" rows="4" cols="60"
							class="large-text"><?php echo esc_textarea( get_option( 'mm_message', __( 'We are currently performing maintenance. We will be back shortly!', 'maintenance-mode' ) ) ); ?></textarea>
					</td>
				</tr>
			</table>
			<?php submit_button(); ?>
		</form>
	</div>
	<?php
}

// ─── Frontend: show maintenance page ───

add_action( 'template_redirect', 'mm_maybe_show_maintenance' );

function mm_maybe_show_maintenance() {
	if ( ! get_option( 'mm_enabled' ) ) {
		return;
	}

	// Logged-in users with admin privileges can pass through
	if ( current_user_can( 'manage_options' ) ) {
		return;
	}

	// Always allow login page and admin
	if ( is_admin() || wp_doing_ajax() ) {
		return;
	}

	$message = get_option( 'mm_message', __( 'We are currently performing maintenance. We will be back shortly!', 'maintenance-mode' ) );

	wp_die(
		esc_html( $message ),
		esc_html__( 'Please wait...', 'maintenance-mode' ),
		array( 'response' => 503 )
	);
}

// ─── Admin bar indicator ───

add_action( 'admin_bar_menu', 'mm_admin_bar_indicator', 100 );

function mm_admin_bar_indicator( $wp_admin_bar ) {
	if ( ! get_option( 'mm_enabled' ) || ! current_user_can( 'manage_options' ) ) {
		return;
	}

	$wp_admin_bar->add_node( array(
		'id'    => 'maintenance-mode',
		'title' => '🔧 ' . esc_html__( 'Maintenance mode active', 'maintenance-mode' ),
		'href'  => admin_url( 'options-general.php?page=maintenance-mode' ),
		'meta'  => array(
			'class' => 'maintenance-mode-active',
		),
	) );
}
