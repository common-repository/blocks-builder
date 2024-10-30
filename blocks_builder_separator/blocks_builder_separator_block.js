( function( blocks, editor, components, i18n, element ) {
	var el = element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;
	var RichText = wp.editor.RichText;
	var BlockControls = wp.editor.BlockControls;
	var AlignmentToolbar = wp.editor.AlignmentToolbar;
	var InspectorControls = wp.editor.InspectorControls;
	var TextControl = wp.components.TextControl;
	var ColorPalette= wp.components.ColorPalette;
	var SelectControl= wp.components.SelectControl;
	var ToggleControl= wp.components.ToggleControl;
	
	registerBlockType( 'blockbuilde/separator', {
		title: i18n.__( 'Separator Block' ),
		description: i18n.__( 'Add a divider with custom spacing between other blocks.' ),
		icon: 'minus',
		category: 'blocks-builder',
		attributes: {
			alignment: {
				type: 'string',
				default: 'center',
			},
			separatorColor: {
				type: 'string',
				default: '#000000',
				selector: '.blocks-builder-separator-color'
			},
			separatorStyle:{
				type: 'string',
				default: 'solid',
			},
			borderSize:{
				type: 'number',
				default: 1,
			},
			separatFull:{
				type: 'boolean',
				default:false,
			}
		},
		
		// The "edit" property must be a valid function.
		edit: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			
			function onChangeAlignment( newAlignment ) {
				props.setAttributes( { alignment: newAlignment } );
			}
			function onChangeStyle( separatorstyl ) {
				props.setAttributes( { separatorStyle: separatorstyl } );
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
							title: i18n.__( 'Separator Setting' ),
							initialOpen: true,
							className:'blocks-builder-admin-setting-common',
						},
						el(ToggleControl,{
							label: i18n.__( 'Enable Full Width' ),
							checked: props.attributes.separatFull,
							onChange: function( newshap ) {
								props.setAttributes( { separatFull: newshap } );
							},
						}),
						el( 'p', {}, i18n.__( 'Change Border Size' ) ),
						el( components.RangeControl, {
							value: props.attributes.borderSize, 
							min: 1,
							max: 6,
							onChange: function(brdrsize){
									props.setAttributes( { borderSize: brdrsize } );
								}
						}),
						el(SelectControl,{
							label: i18n.__( 'Select Border Style' ),
							value: props.attributes.separatorStyle,
							options:[{ value: 'solid', label: i18n.__( 'Solid' )},
									 { value: 'dashed', label: i18n.__( 'Dashed' )}
									],
							onChange:onChangeStyle,
						}),		
						el( 'p', {}, i18n.__( 'Select Border Color' ) ),						
						el( ColorPalette, {
							value: props.attributes.separatorColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#000000', name: 'black' }], 
							allowCustom: false,
							onChange: function(seprtcolor){
									props.setAttributes( { separatorColor: seprtcolor } );
								}
						}),
					)
				),
				el( 'div', {className: props.className},
					el('div',{
						className: 'blocks-builder-separator-main',
						style: { textAlign: alignment } 
						},
						el('div',{className: attributes.separatFull ? 'blocks-builder-separator-comm blocks-builder-separator-full':'blocks-builder-separator-comm blocks-builder-separator-short',style:{border:attributes.borderSize+'px '+attributes.separatorStyle+' '+attributes.separatorColor}})
					)
				)
			];
		
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var separatorColor = props.attributes.separatorColor;
			var separatorStyle = props.attributes.separatorStyle;
			var borderSize = props.attributes.borderSize;
			var separatFull= props.attributes.separatFull;
			
			return el( 'div', {className: props.className},
					el('div',{
						className: 'blocks-builder-separator-main',
						style: { textAlign: alignment } 
						},
						el('div',{className:attributes.separatFull ? 'blocks-builder-separator-bordr blocks-builder-separator-comm blocks-builder-separator-full':'blocks-builder-separator-bordr blocks-builder-separator-comm blocks-builder-separator-short',style:{border:attributes.borderSize+'px '+attributes.separatorStyle+' '+attributes.separatorColor}})
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