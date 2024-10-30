( function( blocks, editor, components, i18n, element ) {
	var el = element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;
	var RichText = wp.editor.RichText;
	var BlockControls = wp.editor.BlockControls;
	var AlignmentToolbar = wp.editor.AlignmentToolbar;
	var MediaUpload = wp.editor.MediaUpload;
	var InspectorControls = wp.editor.InspectorControls;
	var TextControl = wp.components.TextControl;
	var ToggleControl= wp.components.ToggleControl;
	var ColorPalette= wp.components.ColorPalette;

	
	registerBlockType( 'custome/block1', {
		title: i18n.__( 'Profile block' ),
		description: i18n.__( 'Add a profile box with bio, info and social media links.' ),
		icon: 'admin-users',
		category: 'blocks-builder',
		attributes: {
			txthed: {
				type: 'array',
				source: 'children',
				selector: 'h3',
			},
			txtlb: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
			alignment: {
				type: 'string',
				default: 'center',
			},
			BackgroundColor: {
				type: 'string',
				default: '#f2f2f2'
			},
			TxtHeadColor: {
				type: 'string',
				default: '#00000',
				 selector: '.cusom-txt-hed-col'
			},
			TextColor: {
				type: 'string',
				default: '#00000',
				 selector: '.cusom-txt-col'
			},
			TxtFontSize: {
				type: 'number',
				default: 12,
			},
			TxtHeadFontSize: {
				type: 'number',
				default: 20,
			},
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
			facebookURL: {
				type: 'url',
			},
			twitterURL: {
				type: 'url',
			},
			instagramURL: {
				type: 'url',
			},
			linkedURL: {
				type: 'url',
			},
			shapsocial:{
				type: 'boolean',
				default:true,
			},
			socialColor: {
				type: 'string',
				default: '#00000',
				 selector: '.custom-social-color'
			},
			socialbackColor: {
				type: 'string',
				default: '#00000',
				 selector: '.custom-social-border-color'
			},
		},
				
		// The "edit" property must be a valid function.
		edit: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var facebookURL = props.attributes.facebookURL;
			var twitterURL = props.attributes.twitterURL;
			var instagramURL = props.attributes.instagramURL;
			var linkedURL = props.attributes.linkedURL;
			
			var onSelectImage = function( media ) {
				return props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};
			
			function onChangeAlignment( newAlignment ) {
				props.setAttributes( { alignment: newAlignment } );
			}
			
			return [
			el( BlockControls, { key: 'controls' }, // Display controls when the block is clicked on.
			el( 'div', { className: 'components-toolbar' },
						el( MediaUpload, {
							onSelect: onSelectImage,
							type: 'image',
							render: function( obj ) {
								return el( components.Button, {
									className: props.attributes.mediaID ? 'image-button' : 'button button-large',
									onClick: obj.open
									},
									! props.attributes.mediaID ? i18n.__( 'Upload Image' ) : el( 'img', { src: props.attributes.mediaURL } )
								);
							}
						} )
					),
				el( AlignmentToolbar, {
						value: alignment,
						onChange: onChangeAlignment,
					} )
			),
			el( InspectorControls, { key: 'inspector' }, // Display the block options in the inspector panel.
				el( components.PanelBody, {
						title: i18n.__( 'Background Color' ),
						className: 'cust-seting',
						initialOpen: true,
					},					
					el( components.ColorPalette, {
						value: props.attributes.BackgroundColor, 
						colors: [{color: '#00d1b2', name: 'teal'},
								{ color: '#3373dc', name: 'royal blue' },
								{ color: '#209cef', name: 'sky blue' },
								{ color: '#22d25f', name: 'green' },
								{ color: '#ffdd57', name: 'yellow' },
								{ color: '#ff3860', name: 'pink' },
								{ color: '#7941b6', name: 'purple' },
								{ color: '#392F43', name: 'black' }], 
						allowCustom: false,
						onChange: function(bgcolor){
                                props.setAttributes( { BackgroundColor: bgcolor } );
                            }
					}),
				),
				el( components.PanelBody, {
						title: i18n.__( 'Text Color' ),
						className: 'cust-seting-txt',
						initialOpen: false,
					},
					el( 'p', {}, i18n.__( 'Change Content Heading Color.' ) ),
					
					el( components.ColorPalette, {
						value: props.attributes.TxtHeadColor, 
						colors: [{color: '#00d1b2', name: 'teal'},
								{ color: '#3373dc', name: 'royal blue' },
								{ color: '#209cef', name: 'sky blue' },
								{ color: '#22d25f', name: 'green' },
								{ color: '#ffdd57', name: 'yellow' },
								{ color: '#ff3860', name: 'pink' },
								{ color: '#7941b6', name: 'purple' },
								{ color: '#392F43', name: 'black' }], 
						allowCustom: false,
						onChange: function(txhedcolor){
                                props.setAttributes( { TxtHeadColor: txhedcolor } );
                            }
					}),
					el( 'p', {}, i18n.__( 'Change Content Text Color.' ) ),
					
					el( components.ColorPalette, {
						value: props.attributes.TextColor, 
						colors: [{color: '#00d1b2', name: 'teal'},
								{ color: '#3373dc', name: 'royal blue' },
								{ color: '#209cef', name: 'sky blue' },
								{ color: '#22d25f', name: 'green' },
								{ color: '#ffdd57', name: 'yellow' },
								{ color: '#ff3860', name: 'pink' },
								{ color: '#7941b6', name: 'purple' },
								{ color: '#392F43', name: 'black' }], 
						allowCustom: false,
						onChange: function(txcolor){
                                props.setAttributes( { TextColor: txcolor } );
                            }
					}),
				),
				el( components.PanelBody, {
						title: i18n.__( 'Font Size' ),
						className: 'cust-seting-txt-size',
						initialOpen: false,
					},
					el( 'p', {}, i18n.__( 'Increase Heading Font Size.' ) ),					
					el( components.RangeControl, {
						value: props.attributes.TxtHeadFontSize, 
						min: 1,
						max: 100,
						onChange: function(txhedsize){
                                props.setAttributes( { TxtHeadFontSize: txhedsize } );
                            }
					}),
					el( 'p', {}, i18n.__( 'Increase Content Font Size.' ) ),					
					el( components.RangeControl, {
						value: props.attributes.TxtFontSize, 
						min: 1,
						max: 100,
						onChange: function(txsize){
                                props.setAttributes( { TxtFontSize: txsize } );
                            }
					}),
				),
				el( components.PanelBody, {
						title: i18n.__( 'Set Social Media' ),
						className: 'cust-social-media',
						initialOpen: false,
					},
					el( 'p', {}, i18n.__( 'Set your social Media URL.' ) ),
					el(ToggleControl,{
						label: i18n.__( 'Round Shape' ),
						checked: props.attributes.shapsocial,
						onChange: function( newshap ) {
							props.setAttributes( { shapsocial: newshap } );
						},
					}),
					el( TextControl, {
						type: 'url',
						label: i18n.__( 'Facebook URL' ),
						value: props.attributes.facebookURL,
						onChange: function( newFacebook ) {
							props.setAttributes( { facebookURL: newFacebook } );
						},
					}),
					el( TextControl, {
						type: 'url',
						label: i18n.__( 'Twitter URL' ),
						value: props.attributes.twitterURL,
						onChange: function( newTwitter ) {
							props.setAttributes( { twitterURL: newTwitter } );
						},
					}),
					el( TextControl, {
						type: 'url',
						label: i18n.__( 'Instagram URL' ),
						value: props.attributes.instagramURL,
						onChange: function( newInstagram ) {
							props.setAttributes( { instagramURL: newInstagram } );
						},
					}),
					el( TextControl, {
						type: 'url',
						label: i18n.__( 'Linkedin URL' ),
						value: props.attributes.linkedURL,
						onChange: function( newLinked ) {
							props.setAttributes( { linkedURL: newLinked } );
						},
					}),
					el( 'p', {}, i18n.__( 'Change Social Media Font Color' ) ),
					el( ColorPalette, {
						value: props.attributes.socialColor, 
						colors: [{color: '#00d1b2', name: 'teal'},
								{ color: '#3373dc', name: 'royal blue' },
								{ color: '#209cef', name: 'sky blue' },
								{ color: '#22d25f', name: 'green' },
								{ color: '#ffdd57', name: 'yellow' },
								{ color: '#ff3860', name: 'pink' },
								{ color: '#7941b6', name: 'purple' },
								{ color: '#392F43', name: 'black' }], 
						allowCustom: false,
						onChange: function(socalcolor){
                                props.setAttributes( { socialColor: socalcolor } );
                            }
					}),
					el( 'p', {}, i18n.__( 'Change Social Media Background Color' ) ),
					el( ColorPalette, {
						value: props.attributes.socialbackColor, 
						colors: [{color: '#00d1b2', name: 'teal'},
								{ color: '#3373dc', name: 'royal blue' },
								{ color: '#209cef', name: 'sky blue' },
								{ color: '#22d25f', name: 'green' },
								{ color: '#ffdd57', name: 'yellow' },
								{ color: '#ff3860', name: 'pink' },
								{ color: '#7941b6', name: 'purple' },
								{ color: '#392F43', name: 'black' }], 
						allowCustom: false,
						onChange: function(socalbackbgcolor){
                                props.setAttributes( { socialbackColor: socalbackbgcolor } );
                            }
					}),
				),
			),
			el( 'div', {className: props.className,style: {background: props.attributes.BackgroundColor} },
				el( 'div', {
						className: 'organic-profile-image1',
					},
						el( MediaUpload, {
							onSelect: onSelectImage,
							type: 'image',
							value: attributes.mediaID,
							render: function( obj ) {
								return el( components.Button, {
									className: attributes.mediaID ? 'image-button' : 'button button-large',
									onClick: obj.open
									},
									! attributes.mediaID ? i18n.__( 'Upload Image' ) : el( 'img', { src: attributes.mediaURL } )
								);
							}
						} )
					),
					el( 'div', {
						className: 'block-custom-1',
						style: { textAlign: alignment}
					},
						el( RichText, {
							key: 'editable',
							tagName: 'h3',
							placeholder: 'Enter Heading here',
							keepPlaceholderOnFocus: true,
							value: attributes.txthed,
							className: 'block-custom-1-txt-'+props.attributes.TxtHeadFontSize,
							style:{color: props.attributes.TxtHeadColor},
							onChange: function( newTitle ) {
								props.setAttributes( { txthed: newTitle } );
							},
						} ),
						el( RichText, {
							key: 'editable',
							tagName: 'p',
							placeholder: 'Enter text here',
							keepPlaceholderOnFocus: true,
							value: attributes.txtlb,
							className: 'block-custom-1-txt-'+props.attributes.TxtFontSize,
							style:{color: props.attributes.TextColor},
							onChange: function( newTxtCont ) {
								props.setAttributes( { txtlb: newTxtCont } );
							},
						} ),
						el( 'div', {className: props.attributes.shapsocial ? 'social-common-radius social-common' : 'social-common-squar social-common'},
							props.attributes.facebookURL && el('a',{
								className: 'facebook-social-common',
								href: props.attributes.facebookURL,
								target: '_blank',
								style:{color: props.attributes.socialColor, background:props.attributes.socialbackColor},
							},
							el('i',{className: 'fab fa-facebook-f'}),
							),
							props.attributes.twitterURL && el('a',{
								className: 'twitter-social-common',
								href: props.attributes.twitterURL,
								target: '_blank',
								style:{color: props.attributes.socialColor, background:props.attributes.socialbackColor},
							},
							el('i',{className: 'fab fa-twitter'}),
							),
							props.attributes.instagramURL && el('a',{
								className: 'instagram-social-common',
								href: props.attributes.instagramURL,
								target: '_blank',
								style:{color: props.attributes.socialColor, background:props.attributes.socialbackColor},
							},
							el('i',{className: 'fab fa-instagram'}),
							),
							props.attributes.linkedURL && el('a',{
								className: 'linked-social-common',
								href: props.attributes.linkedURL,
								target: '_blank',
								style:{color: props.attributes.socialColor, background:props.attributes.socialbackColor},
							},
							el('i',{className: 'fab fa-linkedin-in'}),
							),
						),
					),
				),
			];
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var BackgroundColor = props.attributes.BackgroundColor;
			var TextColor = props.attributes.TextColor;
			var TxtHeadColor = props.attributes.TxtHeadColor;
			var TxtFontSize = props.attributes.TxtFontSize;
			var TxtHeadFontSize = props.attributes.TxtHeadFontSize;			
			var mediaID = props.attributes.mediaID;
			var mediaURL = props.attributes.mediaURL;
			var facebookURL = props.attributes.facebookURL;
			var twitterURL = props.attributes.twitterURL;
			var instagramURL = props.attributes.instagramURL;
			var linkedURL = props.attributes.linkedURL;
			var socialColor = props.attributes.socialColor;
			var socialbackColor = props.attributes.socialbackColor;
			
			return el( 'div', {className: props.className},
						el( 'div', {
						style: { textAlign: alignment,background: BackgroundColor}
						},
							el( 'div', {
								className: 'organic-profile-image1',
							},
								el( 'img', {
									src: mediaURL
								} ),
							),
							el( 'div', {
								className: 'organic-profile-txt'
							},
								el( RichText.Content, {
									tagName: 'h3',
									value: attributes.txthed,
									className: 'block-custom-1-txt-'+props.attributes.TxtHeadFontSize,
									style:{color: TxtHeadColor},
								} ),
								el( RichText.Content, {
									tagName: 'p',
									value: attributes.txtlb,
									className:'block-custom-1-txt-'+TxtFontSize,
									style:{color: TextColor},
								} ),								
								el( 'div', {className: props.attributes.shapsocial ? 'social-common-radius social-common' : 'social-common-squar social-common'},
									attributes.facebookURL && el('a',{
										className: 'facebook-social-common',
										href: facebookURL,
										target: '_blank',
										style:{color: socialColor, background:socialbackColor},
									},
									el('i',{className: 'fab fa-facebook-f'}),
									),
									attributes.twitterURL && el('a',{
										className: 'twitter-social-common',
										href: twitterURL,
										target: '_blank',
										style:{color: socialColor, background:socialbackColor},
									},
									el('i',{className: 'fab fa-twitter'}),
									),
									attributes.instagramURL && el('a',{
										className: 'instagram-social-common',
										href: instagramURL,
										target: '_blank',
										style:{color: socialColor, background:socialbackColor},
									},
									el('i',{className: 'fab fa-instagram'}),
									),
									attributes.linkedURL && el('a',{
										className: 'linked-social-common',
										href: linkedURL,
										target: '_blank',
										style:{color: socialColor, background:socialbackColor},
									},
									el('i',{className: 'fab fa-linkedin-in'}),
									),
								),
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