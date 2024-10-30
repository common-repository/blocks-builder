<?php
/**
 * Plugin Name: Blocks Builder - ultimate blocks for Gutenberg
 * Version: 1.0.4
 * Description: This Plugin provides additional blocks for customizing your Blog and Pages.
 * Author: Templatic
 * Author URI: https://templatic.com/
 *
 * @package   Blocks Builder
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
/**
 * Main Blocks Builder Class
 *
 * @since 1.0.4
 */
class Blocks_Builder {
    /**
     * This plugin's instance.
     *
     * @var Blocks-Builder
     */
    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register() {
        if ( null === self::$instance ) {
            self::$instance = new Blocks_Builder();
            self::$instance->includes();
        }
    }
    /**
     * The base directory path (without trailing slash).
     *
     * @var string $_url
     */
    private $_dir;

    /**
     * The base URL path (without trailing slash).
     *
     * @var string $_url
     */
    private $_url;

    /**
     * The Constructor.
     */
    private function __construct() {
        $this->_slug    = 'blocks-builder';
        $this->_version = '1.0.4';
        $this->_dir     = untrailingslashit( plugin_dir_path( '/', __FILE__ ) );
        $this->_url     = untrailingslashit( plugins_url( '/', __FILE__ ) );

        //if ( function_exists ( 'register_block_type' ) ) {
			add_action( 'init', array( $this, 'register_blocks' ) );
		/*} else {
			add_action( 'admin_notices', 'my_error_notice' );
		}*/
    }

    /**
     * Include required files.
     */
    private function includes() {
        include_once $this->_dir . 'includes/class-blocks-builder-category.php';
    }

    /**
     * Add actions to enqueue assets.
     *
     * Enqueue block assets for use within Gutenberg.
     */
    public function register_blocks() {
	
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}
        // ----------Profile block------------
        // Scripts.
        wp_register_script(
            'my-custom-block1', // Handle.
            plugins_url( 'blocks_builder_profile/block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'my-custom-block1-editor', // Handle.
            plugins_url( 'blocks_builder_profile/editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'my-custom-block1-style', // Handle.
            plugins_url( 'blocks_builder_profile/style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_enqueue_style(
            'my-custom-block1-fontawesome-style', // Handle.
            plugins_url( 'includes/fonts/css/all.css', __FILE__ ) // Font Awesome for social media icons.
        );
        wp_enqueue_script(
            'my-custom-block1-fontawesome-script', // Handle.
            plugins_url( 'includes/fonts/js/all.js', __FILE__ ) // Font Awesome for social media icons.
        );
        wp_enqueue_style(
            'my-custom-block1-common-style', // Handle.
            plugins_url( 'includes/fonts/css/common_style.css', __FILE__ ) // Font size common style.
        );
        wp_enqueue_style(
            'my-custom-block1-common-editor-style', // Handle.
            plugins_url( 'includes/fonts/css/common_editor.css', __FILE__ ) // Font size common editor style.
        );
        // We also specify the editor script to be used in the Gutenberg interface.
        register_block_type(
            'custome/block1',
            array(
                'editor_script' => 'my-custom-block1',
                'editor_style'  => 'my-custom-block1-editor',
                'style'         => 'my-custom-block1-style',
            )
        );

        // -----------Social Media block------------
        // Scripts.
        wp_register_script(
            'blocks-builder-social-block', // Handle.
            plugins_url( 'blocks_builder_social/blocks_builder_social_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'blocks-builder-social-block-editor', // Handle.
            plugins_url( 'blocks_builder_social/blocks_builder_social_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'blocks-builder-social-block-style', // Handle.
            plugins_url( 'blocks_builder_social/blocks_builder_social_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'blockbuilder/social',
            array(
                'editor_script' => 'blocks-builder-social-block',
                'editor_style' => 'blocks-builder-social-block-editor',
                'style' => 'blocks-builder-social-block-style',
            )
        );
        // -----------Text block------------
        // Scripts.
        wp_register_script(
            'blocks-builder-text-block', // Handle.
            plugins_url( 'blocks_builder_text/blocks_builder_text_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n' , 'wp-components', 'wp-editor'), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'blocks-builder-text-block-editor', // Handle.
            plugins_url( 'blocks_builder_text/blocks_builder_text_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'blocks-builder-text-block-style', // Handle.
            plugins_url( 'blocks_builder_text/blocks_builder_text_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'blockbuilder/text',
            array(
                'editor_script' => 'blocks-builder-text-block',
                'editor_style' => 'blocks-builder-text-block-editor',
                'style' => 'blocks-builder-text-block-style',
            )
        );
        // -----------cover image block------------
        // Scripts.
        wp_register_script(
            'blocks-builder-cover-image-block', // Handle.
            plugins_url( 'blocks_builder_cover_image/blocks_builder_cover_image_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'blocks-builder-cover-image-block-editor', // Handle.
            plugins_url( 'blocks_builder_cover_image/blocks_builder_cover_image_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'blocks-builder-cover-image-block-style', // Handle.
            plugins_url( 'blocks_builder_cover_image/blocks_builder_cover_image_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'blockbuilder/coverimage',
            array(
                'editor_script' => 'blocks-builder-cover-image-block',
                'editor_style' => 'blocks-builder-cover-image-block-editor',
                'style' => 'blocks-builder-cover-image-block-style',
            )
        );
        // -----------separator block------------
        // Scripts.
        wp_register_script(
            'blocks-builder-separator-block', // Handle.
            plugins_url( 'blocks_builder_separator/blocks_builder_separator_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'blocks-builder-separator-block-editor', // Handle.
            plugins_url( 'blocks_builder_separator/blocks_builder_separator_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'blocks-builder-separator-block-style', // Handle.
            plugins_url( 'blocks_builder_separator/blocks_builder_separator_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'blockbuilder/separator',
            array(
                'editor_script' => 'blocks-builder-separator-block',
                'editor_style' => 'blocks-builder-separator-block-editor',
                'style' => 'blocks-builder-separator-block-style',
            )
        );
        // -----------dropcap block------------
        // Scripts.
        wp_register_script(
            'blocks-builder-dropcap-block', // Handle.
            plugins_url( 'blocks_builder_dropcap/blocks_builder_dropcap_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'blocks-builder-dropcap-block-editor', // Handle.
            plugins_url( 'blocks_builder_dropcap/blocks_builder_dropcap_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'blocks-builder-dropcap-block-style', // Handle.
            plugins_url( 'blocks_builder_dropcap/blocks_builder_dropcap_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'blockbuilder/dropcap',
            array(
                'editor_script' => 'blocks-builder-dropcap-block',
                'editor_style' => 'blocks-builder-dropcap-block-editor',
                'style' => 'blocks-builder-dropcap-block-style',
            )
        );
        // -----------Heading block------------*/
        // Scripts.
        wp_register_script(
            'blocks-builder-heading-block', // Handle.
            plugins_url( 'blocks_builder_heading/blocks_builder_heading_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'blocks-builder-heading-block-editor', // Handle.
            plugins_url( 'blocks_builder_heading/blocks_builder_heading_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'blocks-builder-heading-block-style', // Handle.
            plugins_url( 'blocks_builder_heading/blocks_builder_heading_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'blockbuilder/heading',
            array(
                'editor_script' => 'blocks-builder-heading-block',
                'editor_style' => 'blocks-builder-heading-block-editor',
                'style' => 'blocks-builder-heading-block-style',
            )
        );
        // -----------alert block------------
        // Scripts.
        wp_register_script(
            'blocks-builder-alert-block', // Handle.
            plugins_url( 'blocks_builder_alert/blocks_builder_alert_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'blocks-builder-alert-block-editor', // Handle.
            plugins_url( 'blocks_builder_alert/blocks_builder_alert_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'blocks-builder-alert-block-style', // Handle.
            plugins_url( 'blocks_builder_alert/blocks_builder_alert_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'blockbuilder/alert',
            array(
                'editor_script' => 'blocks-builder-alert-block',
                'editor_style' => 'blocks-builder-alert-block-editor',
                'style' => 'blocks-builder-alert-block-style',
            )
        );
		// -----------Map Block Start------------
        // Scripts.
        wp_register_script(
            'blocks-builder-map-block', // Handle.
            plugins_url( 'blocks_builder_map/blocks_builder_map_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'blocks-builder-map-block-editor', // Handle.
            plugins_url( 'blocks_builder_map/blocks_builder_map_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'blocks-builder-map-block-style', // Handle.
            plugins_url( 'blocks_builder_map/blocks_builder_map_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'blockbuilder/map',
            array(
                'editor_script' => 'blocks-builder-map-block',
                'editor_style' => 'blocks-builder-map-block-editor',
                'style' => 'blocks-builder-map-block-style',
            )
        );
		// -----------Price Block Start------------
        // Scripts.
        wp_register_script(
            'blocks-builder-price-block', // Handle.
            plugins_url( 'blocks_builder_price/blocks_builder_price_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n' , 'wp-components', 'wp-editor'), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'blocks-builder-price-block-editor', // Handle.
            plugins_url( 'blocks_builder_price/blocks_builder_price_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'blocks-builder-price-block-style', // Handle.
            plugins_url( 'blocks_builder_price/blocks_builder_price_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'blockbuilder/price',
            array(
                'editor_script' => 'blocks-builder-price-block',
                'editor_style' => 'blocks-builder-price-block-editor',
                'style' => 'blocks-builder-price-block-style',
            )
        );
		
		//------Button Block start----.
        wp_register_script(
            'blocks-builder-button-block', // Handle.
            plugins_url( 'blocks_builder_button/blocks_builder_button_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'blocks-builder-button-block-editor', // Handle.
            plugins_url( 'blocks_builder_button/blocks_builder_button_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'blocks-builder-button-block-style', // Handle.
            plugins_url( 'blocks_builder_button/blocks_builder_button_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'blockbuilder/button',
            array(
                'editor_script' => 'blocks-builder-button-block',
                'editor_style' => 'blocks-builder-button-block-editor',
                'style' => 'blocks-builder-button-block-style',
            )
        );
        // -----------Tweet block------------
        // Scripts.
        wp_register_script(
            'blocks-builder-tweet-block', // Handle.
            plugins_url( 'blocks_builder_tweet/blocks_builder_tweet_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'blocks-builder-tweet-block-editor', // Handle.
            plugins_url( 'blocks_builder_tweet/blocks_builder_tweet_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'blocks-builder-tweet-block-style', // Handle.
            plugins_url( 'blocks_builder_tweet/blocks_builder_tweet_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'blockbuilder/tweet',
            array(
                'editor_script' => 'blocks-builder-tweet-block',
                'editor_style' => 'blocks-builder-tweet-block-editor',
                'style' => 'blocks-builder-tweet-block-style',
            )
        );
		//------Tweet Block End----
    }
}
Blocks_Builder::register();

/**
 * Error message display
 */
function my_error_notice() {
    ?>
    <div class="error notice" style='color:#dc3232;'>
        <p>Please, First install <a href="https://wordpress.org/plugins/gutenberg/">Gutenberg Plugin</a> in order to use Blocks Builder Plugin.</p>
    </div>
    <?php
}
