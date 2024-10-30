<?php
/**
 * Load blocks Builder custom categories.
 *
 * @package   Blocks Builder
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main Blocks Builder Category Class
 */
class Blocks_Builder_Category {

	/**
	 * This class's instance.
	 *
	 * @var Blocks_Builder_Category
	 */
	private static $instance;

	/**
	 * Registers the class.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new Blocks_Builder_Category();
		}
	}

	/**
	 * The Constructor.
	 */
	private function __construct() {
		add_filter( 'block_categories', array( $this, 'block_categories' ) );
	}

	/**
	 * Register our custom block category.
	 *
	 * @access public
	 * @param array $categories All categories.
	 * @link https://wordpress.org/gutenberg/handbook/extensibility/extending-blocks/#managing-block-categories
	 */
	public function block_categories( $categories ) {

		return array_merge(
			$categories,
			array(
				array(
					'slug' => 'blocks-builder',
					'title' => __( 'Blocks Builder', 'blocks-builder' ),
				),
			)
		);
	}
}

Blocks_Builder_Category::register();
