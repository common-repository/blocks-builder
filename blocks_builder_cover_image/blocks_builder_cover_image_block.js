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
	
	registerBlockType( 'blockbuilde/coverimage', {
		title: i18n.__( 'Cover Image' ),
		description: i18n.__( 'A Block-builder Cover Image Block for displaying cover image on your post and pages' ),
		icon: 'format-image',
		category: 'blocks-builder',
		attributes: {
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
			contenttxt: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
			overlaycolor:{
				type: 'string',
				default: '#000000',
				selector: '.blocks-builder-overly-color'
			},
			textcolor:{
				type: 'string',
				default: '#ffffff',
				selector: '.blocks-builder-overly-color'
			},
			TxtFontSize: {
				type: 'number',
				default: 12,
			},
		},
		// The "edit" property must be a valid function.
		edit: function( props ) {
			var attributes = props.attributes;
			
			var onSelectImage = function( media ) {
				return props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};
			return [
				el( BlockControls, { key: 'controls' }, // Display controls when the block is clicked on.
				el( 'div', { className: 'components-toolbar' },
							el( MediaUpload, {
								onSelect: onSelectImage,
								type: 'image',
								render: function( obj ) {
									return el( components.Button, {
										className: 'blocks-builder-img-icon',
										onClick: obj.open
										},
										el('div',{className: 'blocks-builder-img-icon'},
											el('span',{
											className:'far fa-file-image'
											})
										)
									);
								}
							} )
						),
				),
				el( InspectorControls, { key: 'inspector' }, // Display the block options in the inspector panel.
					el( components.PanelBody, {
						title: i18n.__( 'Color Setting' ),
						className: 'cust-seting',
						initialOpen: true,
					},
						el( 'p', {}, i18n.__( 'Apply Overlay Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.overlaycolor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(ovrlycolor){
									props.setAttributes( { overlaycolor: ovrlycolor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Apply Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.textcolor, 
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
									props.setAttributes( { textcolor: txtcolor } );
								}
						}),
					),
					el( components.PanelBody, {
						title: i18n.__( 'Font Setting' ),
						className: 'cust-seting',
						initialOpen: true,
					},
						el( 'p', {}, i18n.__( 'Apply Content Font Size.' ) ),					
						el( components.RangeControl, {
							value: props.attributes.TxtFontSize, 
							min: 1,
							max: 50,
							onChange: function(txsize){
									props.setAttributes( { TxtFontSize: txsize } );
								}
						}),
					)
				),
				el( 'div', {className: props.className},
					el( 'div', {
						className: 'blocks-builder-cover-main',
					},
						el( MediaUpload, {
							onSelect: onSelectImage,
							type: 'image',
							value: attributes.mediaID,
							render: function( obj ) {
								return el( components.Button, {
									className: attributes.mediaID ? 'image-button' : 'button button-large blocks-builder-upload-btn',
									onClick: obj.open
									},
									! attributes.mediaID ? i18n.__( 'Upload Image' ) : ''
								);
							}
						} ),
						el('div',{className:'blocks-builder-img-cover-main'},
							el( 'div', {className:'blocks-builder-img-cover-main-in',style:attributes.mediaID ? { backgroundImage: 'url('+attributes.mediaURL+')' } : {}},
								el( RichText, {
									key: 'editable',
									tagName: 'p',
									placeholder: 'Enter text here',
									keepPlaceholderOnFocus: true,
									value: attributes.contenttxt,
									className: 'blocks-builder-covr-txt block-custom-1-txt-'+attributes.TxtFontSize,
									style:{color:attributes.textcolor},
									onChange: function( contTxt ) {
										props.setAttributes( { contenttxt: contTxt } );
									},
								} ),
							),
							el('div',{className:'blocks-builder-overlay',style:{background:attributes.overlaycolor}}),
						)
						
					),
				)
			];
		
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			var attributes = props.attributes;
			var mediaID = props.attributes.mediaID;
			var mediaURL = props.attributes.mediaURL;
			var contenttxt = props.attributes.contenttxt;
			var overlaycolor = props.attributes.overlaycolor;
			var textcolor = props.attributes.textcolor;
			var TxtFontSize = props.attributes.TxtFontSize;
			
			return el( 'div', {className: props.className},
						el('div',{
							className: 'blocks-builder-cover-main',
							},
							el('div',{className: 'blocks-builder-img-cover-main'},
								el('img',{src:attributes.mediaURL}),
								el( 'div', {className:'blocks-builder-img-cover-main-in',style:attributes.mediaID ? { backgroundImage: 'url('+attributes.mediaURL+')' } : {}},
									el( RichText.Content, {
										tagName: 'p',
										value: attributes.contenttxt,
										className: 'blocks-builder-covr-txt block-custom-1-txt-'+attributes.TxtFontSize,
										style:{color:attributes.textcolor},
									} ),
								),
								el('div',{className:'blocks-builder-overlay',style:{background:attributes.overlaycolor}}),
							)
						)
					);
		},		
	});
	
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.components,
	window.wp.i18n,
	window.wp.element,
);