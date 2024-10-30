( function( blocks, editor, components, i18n, element ) {
	var el = element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;
	var RichText = wp.editor.RichText;
	var BlockControls = wp.editor.BlockControls;
	var AlignmentToolbar = wp.editor.AlignmentToolbar;
	var MediaUpload = wp.editor.MediaUpload;
	var InspectorControls = wp.editor.InspectorControls;
	var TextControl = wp.components.TextControl;
	var ColorPalette= wp.components.ColorPalette;
	var SelectControl = wp.components.SelectControl;
	var ToggleControl= wp.components.ToggleControl;
	
	registerBlockType( 'blockbuilde/button', {
		title: i18n.__( 'Button Block' ),
		description: i18n.__( 'Add a customizable button.' ),
		icon: 'editor-removeformatting',
		category: 'blocks-builder',
		attributes: {
			alignment: {
				type: 'string',
				default: 'center',
			},
			Button_txt:{
				type: 'string',
				default: 'Button Text',
			},
			button_style:{
				type: 'string',
				default: 'btn_rnd_sqr_styl',
			},
			button_size:{
				type: 'string',
				default: 'btn_siz_midm',
			},
			ButtonBgColor: {
				type: 'string',
				default: '#0000ff',
			},
			ButtontxtColor: {
				type: 'string',
				default: '#ffffff',
			},
			ButtonBordrColor: {
				type: 'string',
				default: '#0000ff',
			},
			NW_window:{
				type: 'boolean',
				default:false,
			},
			Button_action:{
				type: 'url',
			},
		},
		// The "edit" property must be a valid function.
		edit: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var button_style= props.attributes.button_style;
			var button_size= props.attributes.button_size;
			
			function onChangeAlignment( newAlignment ) {
				props.setAttributes( { alignment: newAlignment } );
			}
			function onChangeButton_styl( btn_styl ) {
				props.setAttributes( { button_style: btn_styl } );
			}
			function onChangeButton_siz( btn_siz ) {
				props.setAttributes( { button_size: btn_siz } );
			}
			return [
				el( BlockControls, { key: 'controls' }, // Display controls when the block is clicked on.
					el( AlignmentToolbar, {
						value: alignment,
						onChange: onChangeAlignment,
					} )
				),
				el( InspectorControls, { key: 'inspector' }, // Display the block options in the inspector panel.
					el( components.PanelBody, {
							title: i18n.__( 'Button Block Setting' ),
							initialOpen: true,
							className:'blocks-builder-admin-setting-common',
						},
					),
					el(ToggleControl,{
							label: i18n.__( 'Enable New Window' ),
							checked: props.attributes.NW_window,
							onChange: function( nw_windo ) {
								props.setAttributes( { NW_window: nw_windo } );
							},
					}),
					el( TextControl, {
						type: 'url',
						label: i18n.__( 'Button Action URL' ),
						value: props.attributes.Button_action,
						onChange: function( btn_action ) {
							props.setAttributes( { Button_action: btn_action } );
						},
					}),
					el( SelectControl, {
							type: 'number',
							label: i18n.__( 'Select Button Style' ),
							value: button_style,
							onChange: onChangeButton_styl,
							options: [
							  { value: 'btn_sqr_styl', label: i18n.__( 'Square' ) },
							  { value: 'btn_rnd_sqr_styl', label: i18n.__( 'Rounded Square' ) },
							  { value: 'btn_circl_styl', label: i18n.__( 'Circular' ) },
							],
						}
					),
					el( SelectControl, {
							type: 'number',
							label: i18n.__( 'Select Button Size' ),
							value: button_size,
							onChange: onChangeButton_siz,
							options: [
							  { value: 'btn_siz_sml', label: i18n.__( 'Small' ) },
							  { value: 'btn_siz_midm', label: i18n.__( 'Medium' ) },
							  { value: 'btn_siz_lrg', label: i18n.__( 'Large' ) },
							  { value: 'btn_siz_ex_lrg', label: i18n.__( 'Extra Large' ) },
							],
						}
					),
					el( 'p', {}, i18n.__( 'Change Button Background Color.' ) ),
					el( ColorPalette, {
							value: props.attributes.ButtonBgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(BtnBgColor){
									props.setAttributes( { ButtonBgColor: BtnBgColor } );
								}
					}),
					el( 'p', {}, i18n.__( 'Change Button Border Color.' ) ),
					el( ColorPalette, {
							value: props.attributes.ButtonBordrColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(BtnBordrColor){
									props.setAttributes( { ButtonBordrColor: BtnBordrColor } );
								}
					}),
					el( 'p', {}, i18n.__( 'Change Button Text Color.' ) ),
					el( ColorPalette, {
							value: props.attributes.ButtontxtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(BtntxtColor){
									props.setAttributes( { ButtontxtColor: BtntxtColor } );
								}
					}),
				),
				el('div',{className: props.className},
					el('div',{className:'blocks-builder-btn-main',style: { textAlign: alignment}},
						el('div',{
							className:button_size+' blocks-builder-btn-main-in '+button_style
							},
							el( RichText, {
								key: 'editable',
								tagName: 'a',
								placeholder: 'Button Text',
								keepPlaceholderOnFocus: true,
								value: attributes.Button_txt,
								href: attributes.Button_action,
								target: attributes.NW_window?'_blank':'',
								style:{color:attributes.ButtontxtColor, background: attributes.ButtonBgColor, border:'1px solid '+attributes.ButtonBordrColor },
								onChange: function( btn_txt ) {
									props.setAttributes( { Button_txt: btn_txt } );
								},
							}),
						),
					),
				)
			];
		
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var Button_txt= props.attributes.Button_txt;
			var button_style= props.attributes.button_style;
			var button_size= props.attributes.button_size;
			var ButtonBgColor= props.attributes.ButtonBgColor;
			var ButtontxtColor= props.attributes.ButtontxtColor;
			var ButtonBordrColor= props.attributes.ButtonBordrColor;
			var Button_action= props.attributes.Button_action;
			var NW_window= props.attributes.NW_window;

			return el('div',{className: props.className},
						el('div',{className:'blocks-builder-btn-main',style: { textAlign: alignment}},
							el('div',{
								className:button_size+' blocks-builder-btn-main-in '+button_style
								},
								el( RichText.Content, {
									tagName: 'a',
									href: Button_action,
									target: attributes.NW_window?'_blank':'',
									value: attributes.Button_txt,
									style:{color:attributes.ButtontxtColor, background: attributes.ButtonBgColor, border:'1px solid '+attributes.ButtonBordrColor },
								})
							)
						)
					)
		},		
	});
	
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.components,
	window.wp.i18n,
	window.wp.element,
);