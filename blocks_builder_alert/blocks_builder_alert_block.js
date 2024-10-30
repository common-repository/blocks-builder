( function( blocks, editor, components, i18n, element, lodash ) {
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
	
	registerBlockType( 'blockbuilde/alert', {
		title: i18n.__( 'Alert Block' ),
		description: i18n.__( 'A Block-Builder Alert Block for Displaying Alerts on your blogs and pages' ),
		icon: 'warning',
		category: 'blocks-builder',
		attributes: {
			alignment: {
				type: 'string',
				default: 'left',
			},
			alertHeadtext:{
				type: 'array',
				source: 'children',
				selector: 'h3',
			},
			alertContenttext:{
				type: 'array',
				source: 'children',
				selector: 'p',
			},
			alertHeadbgColor: {
				type: 'string',
				selector: '.blocks-builder-hed-Bgcolor'
			},
			alertContbgColor: {
				type: 'string',
				selector: '.blocks-builder-cont-Bgcolor'
			},
			alertHeadtxtColor: {
				type: 'string',
				default: '#000000',
				selector: '.blocks-builder-hed-txcolor'
			},
			alertConttxtColor: {
				type: 'string',
				default: '#000000',
				selector: '.blocks-builder-cont-txcolor'
			},
			borderColor: {
				type: 'string',
			},
			typ:{
				type: 'string',
				default: 'info',
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
					} ),
					el(components.Toolbar,{},
						el(components.DropdownMenu,{
							controls:[{ icon: 'info',title: i18n.__( 'Info' ),onClick: function(){props.setAttributes( { typ:'info'} );}},
									 { icon: 'yes',title: i18n.__( 'Success' ),onClick: function(){props.setAttributes( { typ:'success'} );}},
									 { icon: 'warning',title: i18n.__( 'Warning' ),onClick: function(){props.setAttributes( { typ:'warning'} );}},
									 { icon: 'dismiss',title: i18n.__( 'Error' ),onClick: function(){props.setAttributes( { typ:'dismiss'} );}}
									]
						})
					
					)
				),
				el( InspectorControls, { key: 'inspector' }, // Display the block options in the inspector panel.
					el( components.PanelBody, {
							title: i18n.__( 'Background Color Setting' ),
							initialOpen: true,
							className:'blocks-builder-admin-setting-common',
						},
						el( 'p', {}, i18n.__( 'Change Background Heading Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.alertHeadbgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(alrt_hed_bg){
									props.setAttributes( { alertHeadbgColor: alrt_hed_bg } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Background Content Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.alertContbgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(alrt_hed_bg){
									props.setAttributes( { alertContbgColor: alrt_hed_bg } );
								}
						}),
					),
					el( components.PanelBody, {
							title: i18n.__( 'Text Color Setting' ),
							initialOpen: false,
							className:'blocks-builder-admin-setting-common',
						},
						el( 'p', {}, i18n.__( 'Change Heading Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.alertHeadtxtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(alrt_hed_tx){
									props.setAttributes( { alertHeadtxtColor: alrt_hed_tx } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Content Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.alertConttxtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(alrt_cont_tx){
									props.setAttributes( { alertConttxtColor: alrt_cont_tx } );
								}
						}),
					),
					el( components.PanelBody, {
							title: i18n.__( 'Border Color Setting' ),
							initialOpen: false,
							className:'blocks-builder-admin-setting-common',
						},
						el( 'p', {}, i18n.__( 'Change Border Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.borderColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(b_color){
									props.setAttributes( { borderColor: b_color } );
								}
						}),
					)
				),
				el('div',{className: props.className},
					el('div',{className:'blocks-builder-alert-main'},
						el('div',{
							className:attributes.typ+' blocks-builder-alert-in',
							style: { textAlign: alignment, border:'1px solid '+attributes.borderColor}
							},
							el( RichText, {
								key: 'editable',
								tagName: 'h3',
								placeholder: 'Add title...',
								keepPlaceholderOnFocus: true,
								value: attributes.alertHeadtext,
								style:{background:attributes.alertHeadbgColor, color:attributes.alertHeadtxtColor},
								onChange: function( alert_hed_text ) {
									props.setAttributes( { alertHeadtext: alert_hed_text } );
								},
							}),
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Write alert...',
								keepPlaceholderOnFocus: true,
								value: attributes.alertContenttext,
								style:{background:attributes.alertContbgColor, color:attributes.alertConttxtColor},
								onChange: function( alert_cont_text ) {
									props.setAttributes( { alertContenttext: alert_cont_text } );
								},
							})
						)
					),
				)
			];
		
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var alertHeadtext = props.attributes.alertHeadtext;
			var alertContenttext = props.attributes.alertContenttext;
			var alertHeadbgColor = props.attributes.alertHeadbgColor;
			var alertContbgColor = props.attributes.alertContbgColor;
			var alertHeadtxtColor = props.attributes.alertHeadtxtColor;
			var alertConttxtColor = props.attributes.alertConttxtColor;
			var borderColor = props.attributes.borderColor;
			var typ = props.attributes.typ;
			
			return el('div',{className: props.className},
					 el('div',{className:'blocks-builder-alert-main'},
						el('div',{
							className:attributes.typ+' blocks-builder-alert-in',
							style: { textAlign: alignment, border:'1px solid '+attributes.borderColor}
							},
							el( RichText.Content, {
								tagName: 'h3',
								value: attributes.alertHeadtext,
								style:{background:attributes.alertHeadbgColor, color:attributes.alertHeadtxtColor},
							}),
							el( RichText.Content, {
								tagName: 'p',
								value: attributes.alertContenttext,
								style:{background:attributes.alertContbgColor, color:attributes.alertConttxtColor},
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