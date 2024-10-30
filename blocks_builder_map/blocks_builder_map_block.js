( function( blocks, editor, components, i18n, element ) {
	var el = element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;
	var RichText = wp.editor.RichText;
	var BlockControls = wp.editor.BlockControls;
	var AlignmentToolbar = wp.editor.AlignmentToolbar;
	var MediaUpload = wp.editor.MediaUpload;
	var InspectorControls = wp.editor.InspectorControls;
	var TextControl = wp.components.TextControl;
	
	
	registerBlockType( 'blockbuilde/map', {
		title: i18n.__( 'Map block' ),
		description: i18n.__( 'This block create google map image. Simply enter text for a location and map API Key.' ),
		icon: 'location-alt',
		category: 'blocks-builder',
		attributes: {
			alignment: {
				type: 'string',
				default: 'center',
			},
			MapLocation:{
				type: 'string',
			},
			MapAPIkey:{
				type: 'string',
			},
			Zoom:{
				type: 'number',
				default: 10,
			},
			MapWidth:{
				type: 'string',
				default: '700',
			},
			MapHeight:{
				type: 'string',
				default: '300',
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
							title: i18n.__( 'Map Setting' ),
							initialOpen: true,
							className:'blocks-builder-admin-setting-common',
						},
						el( 'p', {}, i18n.__( 'Zoom' ) ),
						el( components.RangeControl, {
							value: props.attributes.Zoom, 
							min: 1,
							max: 20,
							onChange: function(zom){
									props.setAttributes( { Zoom: zom } );
								}
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Enter Location' ),
							value: props.attributes.MapLocation,
							onChange: function( maplocaton ) {
								props.setAttributes( { MapLocation: maplocaton } );
							},
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Enter Map API Key' ),
							value: props.attributes.MapAPIkey,
							onChange: function( mapkey ) {
								props.setAttributes( { MapAPIkey: mapkey } );
							},
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Enter Map Width' ),
							value: props.attributes.MapWidth,
							onChange: function( mapwith ) {
								props.setAttributes( { MapWidth: mapwith } );
							},
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Enter Map Height' ),
							value: props.attributes.MapHeight,
							onChange: function( mapheith ) {
								props.setAttributes( { MapHeight: mapheith } );
							},
						}),
					),
				),
				el('div',{className: props.className},					
					props.attributes.MapLocation  && props.attributes.MapAPIkey?
						el('img',{
							src: 'https://maps.googleapis.com/maps/api/staticmap?center='+props.attributes.MapLocation+'&zoom='+props.attributes.Zoom+'&size='+props.attributes.MapWidth+'x'+props.attributes.MapHeight+'&key='+props.attributes.MapAPIkey,
						})
						:
						el('div',{className:'error'},
							i18n.__( 'Please enter location & Map API Key in Map Setting' )
						)
				)
			];
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var Zoom = props.attributes.Zoom;
			var MapAPIkey = props.attributes.MapAPIkey;
			var MapLocation = props.attributes.MapLocation;
			var MapWidth = props.attributes.MapWidth;
			var MapHeight = props.attributes.MapHeight;
			
			return el('div',{className: props.className},
				attributes.MapLocation && attributes.MapAPIkey?
					el('img',{
						src: 'https://maps.googleapis.com/maps/api/staticmap?center='+props.attributes.MapLocation+'&zoom='+props.attributes.Zoom+'&size='+props.attributes.MapWidth+'x'+props.attributes.MapHeight+'&key='+props.attributes.MapAPIkey,
					})
					:
					el('div',{className:'error'},
						i18n.__( 'Please enter location & Map API Key in Map Setting' )
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