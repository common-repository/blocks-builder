( function( blocks, editor, components, i18n, element, lodash) {
	var el = element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;
	var RichText = wp.editor.RichText;
	var BlockControls = wp.editor.BlockControls;
	var AlignmentToolbar = wp.editor.AlignmentToolbar;
	var MediaUpload = wp.editor.MediaUpload;
	var InspectorControls = wp.editor.InspectorControls;
	var TextControl = wp.components.TextControl;
	var ColorPalette= wp.components.ColorPalette;
	var range = lodash.range;
	var Fragment =element.Fragment;
	
	registerBlockType( 'blockbuilde/heading', {
		title: i18n.__( 'Heading block' ),
		description: i18n.__( 'A Heading block for customizing your content.' ),
		icon: 'editor-textcolor',
		category: 'blocks-builder',
		attributes: {
			alignment: {
				type: 'string',
				default: 'center',
			},
			contentText:{
				type: 'string',
			},
			level:{
				type: "number",
                default: 2
			},
			contentColor: {
				type: 'string',
				default: '#ffdd57',
				selector: '.blocks-builder-content-color'
			},
		},
		
		
		// The "edit" property must be a valid function.
		edit: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var tagnm='h'+props.attributes.level;
			function onChangeAlignment( newAlignment ) {
				props.setAttributes( { alignment: newAlignment } );
			}
			function createLevelControl( targetLevel ) {
					return {
						icon: 'heading',
						title: targetLevel,
						onClick: function() {
							props.setAttributes( { level: targetLevel } );
						},
						subscript: String( targetLevel ),
					};
			}
			return [
				el( BlockControls, { key: 'controls' }, // Display controls when the block is clicked on.
					el(components.Toolbar,{
							controls:range( 2, 5 ).map( createLevelControl ),
					})
				),
				el( InspectorControls, { key: 'inspector' }, // Display the block options in the inspector panel.
					el( components.PanelBody, {
							title: i18n.__( 'Heading Block Setting' ),
							initialOpen: true,
							className:'blocks-builder-admin-setting-common',
						},
						el( 'p', {}, i18n.__( 'Change Text Alignment' ) ),
						el( AlignmentToolbar, {
							value: alignment,
							onChange: onChangeAlignment,
						} ),
						el( 'p', {}, i18n.__( 'Select Heading Level' ) ),
						el(components.Toolbar,{
							controls:range( 1, 7 ).map( createLevelControl ),
						}),
						el( 'p', {}, i18n.__( 'Change Text Color' ) ),
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
					)
				),
				el('div',{className: props.className},
					el('div',{className:'blocks-builder-text-main'},
						el('div',{
							className:'blocks-builder-text-main-in',
							style: { textAlign: alignment} 
							},
							el( RichText, {
								key: 'editable',
								tagName: tagnm,
								placeholder: 'Enter Text Here',
								keepPlaceholderOnFocus: true,
								value: attributes.contentText,
								style:{color:attributes.contentColor},
								onChange: function( content_txt ) {
									props.setAttributes( { contentText: content_txt } );
								},
							}),
						)
					),
				)
			];
			
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var contentText = props.attributes.contentText;
			var contentColor = props.attributes.contentColor;
			var tagnm = props.attributes.level;
			
			return el('div',{className: props.className},
						el('div',{className:'blocks-builder-text-main'},
							el('div',{
								className:'blocks-builder-text-main-in',
								style: { textAlign: alignment} 
							},
								el( RichText.Content, {
									tagName: 'h'+tagnm,
									value: contentText,
									style:{color:attributes.contentColor}
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
	window.lodash,
);