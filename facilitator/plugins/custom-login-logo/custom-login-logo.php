<?php
/**
 * Plugin Name: Custom Login Logo
 * Description: Customize the logo on the WordPress login screen via Settings.
 * Version: 1.0.0
 * Author: Workshop Participant
 * Text Domain: custom-login-logo
 * License: GPL-2.0-or-later
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// ─── Admin settings page ───

add_action( 'admin_menu', 'cll_add_settings_page' );

function cll_add_settings_page() {
	add_options_page(
		__( 'Login Logo', 'custom-login-logo' ),
		__( 'Login Logo', 'custom-login-logo' ),
		'manage_options',
		'custom-login-logo',
		'cll_render_settings_page'
	);
}

add_action( 'admin_init', 'cll_register_settings' );

function cll_register_settings() {
	register_setting( 'cll_settings', 'cll_logo_url', array(
		'type'              => 'string',
		'sanitize_callback' => 'esc_url_raw',
		'default'           => '',
	) );
}

function cll_render_settings_page() {
	// Load media uploader
	wp_enqueue_media();
	?>
	<div class="wrap">
		<h1><?php esc_html_e( 'Custom Login Logo', 'custom-login-logo' ); ?></h1>
		<form method="post" action="options.php">
			<?php settings_fields( 'cll_settings' ); ?>
			<table class="form-table">
				<tr>
					<th scope="row">
						<label for="cll_logo_url"><?php esc_html_e( 'Logo image', 'custom-login-logo' ); ?></label>
					</th>
					<td>
						<?php $logo_url = get_option( 'cll_logo_url', '' ); ?>
						<input type="url" id="cll_logo_url" name="cll_logo_url"
							value="<?php echo esc_url( $logo_url ); ?>"
							class="regular-text" />
						<button type="button" class="button" id="cll_upload_button">
							<?php esc_html_e( 'Choose image', 'custom-login-logo' ); ?>
						</button>
						<?php if ( $logo_url ) : ?>
							<p><img src="<?php echo esc_url( $logo_url ); ?>" style="max-width: 200px; margin-top: 10px;" /></p>
						<?php endif; ?>
						<p class="description">
							<?php esc_html_e( 'Recommended size: 320x80 pixels (PNG or SVG).', 'custom-login-logo' ); ?>
						</p>
					</td>
				</tr>
			</table>
			<?php submit_button(); ?>
		</form>
		<script>
		jQuery(document).ready(function($) {
			$('#cll_upload_button').on('click', function(e) {
				e.preventDefault();
				var mediaUploader = wp.media({
					title: '<?php echo esc_js( __( 'Choose a logo', 'custom-login-logo' ) ); ?>',
					button: { text: '<?php echo esc_js( __( 'Use as logo', 'custom-login-logo' ) ); ?>' },
					multiple: false
				});
				mediaUploader.on('select', function() {
					var attachment = mediaUploader.state().get('selection').first().toJSON();
					$('#cll_logo_url').val(attachment.url);
				});
				mediaUploader.open();
			});
		});
		</script>
	</div>
	<?php
}

// ─── Login page: replace logo ───

add_action( 'login_enqueue_scripts', 'cll_custom_login_logo' );

function cll_custom_login_logo() {
	$logo_url = get_option( 'cll_logo_url', '' );

	if ( empty( $logo_url ) ) {
		return;
	}

	?>
	<style>
		#login h1 a {
			background-image: url(<?php echo esc_url( $logo_url ); ?>) !important;
			background-size: contain !important;
			background-repeat: no-repeat !important;
			background-position: center !important;
			width: 320px !important;
			height: 80px !important;
		}
	</style>
	<?php
}

// Point login logo URL to the homepage instead of wordpress.org
add_filter( 'login_headerurl', function() {
	return home_url( '/' );
} );

add_filter( 'login_headertext', function() {
	return get_bloginfo( 'name' );
} );
