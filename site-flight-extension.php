<?php
/**
* Plugin Name: Site Flight Extensions
* Description: Adds SiteFlight functionality typical for most SiteFlight websites
* Version: 1.2.0
* Author: SiteFlight
* Author URI: https://www.siteflight.co/
*/

// exit if file is called directly
if ( ! defined('ABSPATH')) {
  exit;
}

/**********************************
 * global variables
 **********************************/

define( 'SITE_FLIGHT_EXTENSION_VERSION', '1.2.0' );
define( 'SITE_FLIGHT_EXTENSION', 'site-flight-extension' );
define( 'SITE_FLIGHT_EXTENSION_PATH', plugin_dir_path( __FILE__ ) );
define( 'SITE_FLIGHT_EXTENSION_URL', plugin_dir_url( __FILE__ ) );
define( 'SITE_FLIGHT_EXTENSION_PHP_MINIMUM', '7.4.0' );


/**********************************
 * setup all styles and scripts
 **********************************/

function sfext_scripts(){
	wp_enqueue_script( 'sfext-nav-script', SITE_FLIGHT_EXTENSION_URL . 'assets/js/sfext-nav-scripts.js' , array(), false, true );
}

add_action('wp_enqueue_scripts', 'sfext_scripts');

function sfext_on_activation() {

	if ( ! current_user_can( 'activate_plugins' ) ) return;

}


