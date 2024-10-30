( function( blocks, editor, components, i18n, element ) {
	var el = element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;
	var RichText = wp.editor.RichText;
	var BlockControls = wp.editor.BlockControls;
	var AlignmentToolbar = wp.editor.AlignmentToolbar;
	var InspectorControls = wp.editor.InspectorControls;
	var TextControl = wp.components.TextControl;
	var ToggleControl= wp.components.ToggleControl;
	var ColorPalette= wp.components.ColorPalette;
	
	registerBlockType( 'blockbuilde/dropcap', {
		title: i18n.__( 'Dropcap Block' ),
		description: i18n.__( 'Add a styled drop cap at the beginning of your paragraph.' ),
		icon: 'translation',
		category: 'blocks-builder',
		attributes: {
			alignment: {
				type: 'string',
				default: 'center'
			},
			contentText:{
				type: 'array',
				source: 'children',
				selector: 'p',
			},
			EnableDropcap:{
				type: 'boolean',
				default:false,
			},
			contentFontSize: {
				type: 'number',
				default: 14,
			},
			contentColor: {
				type: 'string',
				default: '#7941b6',
				selector: '.blocks-builder-content-color'
			},
			contentBGColor: {
				type: 'string',
				default: '#ffdd57',
				selector: '.blocks-builder-content-Bgcolor'
			},
		},
		// The "edit" property must be a valid function.
		edit: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			function onChangeAlignment( newAlignment ) {
				props.setAttributes( { alignment: newAlignment } );
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
							title: i18n.__( 'Dropcap Block Setting' ),
							initialOpen: true,
							className:'blocks-builder-admin-setting-common',
						}
					),
					el(ToggleControl,{
							label: i18n.__( 'Enable Dropcap' ),
							checked: props.attributes.EnableDropcap,
							onChange: function( Dcap ) {
								props.setAttributes( { EnableDropcap: Dcap } );
							},
					}),
					el( 'p', {}, i18n.__( 'Change Content Font Size.' ) ),
					el( components.RangeControl, {
							value: props.attributes.contentFontSize, 
							min: 14,
							max: 40,
							onChange: function(Ftxsize){
									props.setAttributes( { contentFontSize: Ftxsize } );
								}
					}),
					el( 'p', {}, i18n.__( 'Change Content Text Color.' ) ),
					el( ColorPalette, {
						value: props.attributes.contentColor, 
						colors: [{color: '#00d1b2', name: 'teal'},
								{ color: '#3373dc', name: 'royal blue' },
								{ color: '#209cef', name: 'sky blue' },
								{ color: '#22d25f', name: 'green' },
								{ color: '#ffdd57', name: 'yellow' },
								{ color: '#ff3860', name: 'pink' },
								{ color: '#7941b6', name: 'purple' },
								{ color: '#392F43', name: 'black' }], 
						allowCustom: false,
						onChange: function(txtcolor){
								props.setAttributes( { contentColor: txtcolor } );
							}
					}),
					el( 'p', {}, i18n.__( 'Change Background Color.' ) ),
					el( ColorPalette, {
						value: props.attributes.contentBGColor, 
						colors: [{color: '#00d1b2', name: 'teal'},
								{ color: '#3373dc', name: 'royal blue' },
								{ color: '#209cef', name: 'sky blue' },
								{ color: '#22d25f', name: 'green' },
								{ color: '#ffdd57', name: 'yellow' },
								{ color: '#ff3860', name: 'pink' },
								{ color: '#7941b6', name: 'purple' },
								{ color: '#392F43', name: 'black' }], 
						allowCustom: false,
						onChange: function(Bgcolor){
								props.setAttributes( { contentBGColor: Bgcolor } );
							}
					}),
				),
				el('div',{className: props.className},
					el('div',{className:'blocks-builder-dropcap-main'},
						el('div',{className:attributes.EnableDropcap ?'blocks-builder-dropcap-main-in dropcap-first block-custom-1-txt-'+attributes.contentFontSize:'blocks-builder-dropcap-main-in block-custom-1-txt-'+attributes.contentFontSize,style: { textAlign: alignment, background:attributes.contentBGColor}},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Enter Text Here',
								keepPlaceholderOnFocus: true,
								value: attributes.contentText,
								className:'block-custom-1-txt-'+attributes.contentFontSize,
								style:{color:attributes.contentColor},
								onChange: function( content_txt ) {
									props.setAttributes( { contentText: content_txt } );
								},
							}),
						)
					)
				)
			];
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var contentText = props.attributes.contentText;
			var EnableDropcap = props.attributes.EnableDropcap;
			var contentFontSize = props.attributes.contentFontSize;
			var contentColor = props.attributes.contentColor;
			var contentBGColor = props.attributes.contentBGColor;
			
			return el('div',{className: props.className},
					el('div',{className:'blocks-builder-dropcap-main'},
						el('div',{className:attributes.EnableDropcap ?'blocks-builder-dropcap-main-in dropcap-first block-custom-1-txt-'+attributes.contentFontSize:'blocks-builder-dropcap-main-in block-custom-1-txt-'+attributes.contentFontSize,style: { textAlign: alignment, background:attributes.contentBGColor}},
							el( RichText.Content, {
								tagName: 'p',
								value: attributes.contentText,
								className:'block-custom-1-txt-'+attributes.contentFontSize,
								style:{color:attributes.contentColor},
							}),
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