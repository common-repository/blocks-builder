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
	
	registerBlockType( 'blockbuilde/social', {
		title: i18n.__( 'Social block' ),
		description: i18n.__( 'Add a social sharing module.' ),
		icon: 'admin-site-alt3',
		category: 'blocks-builder',
		attributes: {
			socialhead: {
				type: 'array',
				source: 'children',
				selector: 'h3',
			},
			socialheadColor: {
				type: 'string',
				default: '#00000',
				selector: '.blocks-builder-social-hed-color'
			},
			socialContent: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
			alignment: {
				type: 'string',
				default: 'center',
			},
			facebookURL: {
				type: 'url',
			},
			facebookFontSize: {
				type: 'number',
				default: 14,
			},			
			facebookshap:{
				type: 'boolean',
				default:false,
			},
			facebookColor: {
				type: 'string',
				default: '#00000',
				selector: '.blocks-builder-facebook-color'
			},
			facebookBgColor: {
				type: 'string',
				default: '#00000',
				selector: '.blocks-builder-facebook-Bgcolor'
			},
			twitterURL: {
				type: 'url',
			},
			twitterFontSize: {
				type: 'number',
				default: 14,
			},			
			twittershap:{
				type: 'boolean',
				default:false,
			},
			twitterColor: {
				type: 'string',
				default: '#00000',
				selector: '.blocks-builder-twitter-color'
			},
			twitterBgColor: {
				type: 'string',
				default: '#00000',
				selector: '.blocks-builder-twitter-Bgcolor'
			},
			instagramURL: {
				type: 'url',
			},
			instagramFontSize: {
				type: 'number',
				default: 14,
			},			
			instagramshap:{
				type: 'boolean',
				default:false,
			},
			instagramColor: {
				type: 'string',
				default: '#00000',
				selector: '.blocks-builder-instagram-color'
			},
			instagramBgColor: {
				type: 'string',
				default: '#00000',
				selector: '.blocks-builder-instagram-Bgcolor'
			},
			linkedURL: {
				type: 'url',
			},
			linkedFontSize: {
				type: 'number',
				default: 14,
			},			
			linkedshap:{
				type: 'boolean',
				default:false,
			},
			linkedColor: {
				type: 'string',
				default: '#00000',
				selector: '.blocks-builder-linked-color'
			},
			linkedBgColor: {
				type: 'string',
				default: '#00000',
				selector: '.blocks-builder-linked-Bgcolor'
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
							title: i18n.__( 'Social Heading Setting' ),
							initialOpen: true,
							className:'blocks-builder-admin-setting-common',
						},
						el( 'p', {}, i18n.__( 'Apply For Social Heading Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.socialheadColor, 
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
									props.setAttributes( { socialheadColor: txtcolor } );
								}
						}),
						
					),
					el( components.PanelBody, {
							title: i18n.__( 'Facebook Setting' ),
							initialOpen: false,
						},
						el( 'p', {}, i18n.__( 'Apply Facebook custom setting.' ) ),
						el(ToggleControl,{
							label: i18n.__( 'Round Shape' ),
							checked: props.attributes.facebookshap,
							onChange: function( newshap ) {
								props.setAttributes( { facebookshap: newshap } );
							},
						}),
						el( 'p', {}, i18n.__( 'Change Facebook Font Size.' ) ),					
						el( components.RangeControl, {
							value: props.attributes.facebookFontSize, 
							min: 1,
							max: 20,
							onChange: function(FBtxsize){
									props.setAttributes( { facebookFontSize: FBtxsize } );
								}
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Facebook URL' ),
							value: props.attributes.facebookURL,
							onChange: function( newFacebook ) {
								props.setAttributes( { facebookURL: newFacebook } );
							},
						}),
						el( 'p', {}, i18n.__( 'Facebook Icon Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.facebookColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(FBcolor){
									props.setAttributes( { facebookColor: FBcolor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Facebook Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.facebookBgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(FBGcolor){
									props.setAttributes( { facebookBgColor: FBGcolor } );
								}
						}),
					),
					el( components.PanelBody, {
							title: i18n.__( 'Twitter Setting' ),
							initialOpen: false,
						},
						el( 'p', {}, i18n.__( 'Apply Twitter custom setting.' ) ),
						el(ToggleControl,{
							label: i18n.__( 'Round Shape' ),
							checked: props.attributes.twittershap,
							onChange: function( newshap ) {
								props.setAttributes( { twittershap: newshap } );
							},
						}),
						el( 'p', {}, i18n.__( 'Change Twitter Font Size.' ) ),					
						el( components.RangeControl, {
							value: props.attributes.twitterFontSize, 
							min: 1,
							max: 20,
							onChange: function(TWtxsize){
									props.setAttributes( { twitterFontSize: TWtxsize } );
								}
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Twitter URL' ),
							value: props.attributes.twitterURL,
							onChange: function( newTwitter ) {
								props.setAttributes( { twitterURL: newTwitter } );
							},
						}),
						el( 'p', {}, i18n.__( 'Twitter Icon Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.twitterColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(TWcolor){
									props.setAttributes( { twitterColor: TWcolor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Twitter Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.twitterBgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(TwBGcolor){
									props.setAttributes( { twitterBgColor: TwBGcolor } );
								}
						}),
					),
					el( components.PanelBody, {
							title: i18n.__( 'Instagram Setting' ),
							initialOpen: false,
						},
						el( 'p', {}, i18n.__( 'Apply Instagram custom setting.' ) ),
						el(ToggleControl,{
							label: i18n.__( 'Round Shape' ),
							checked: props.attributes.instagramshap,
							onChange: function( newshap ) {
								props.setAttributes( { instagramshap: newshap } );
							},
						}),
						el( 'p', {}, i18n.__( 'Change Instagram Font Size.' ) ),					
						el( components.RangeControl, {
							value: props.attributes.instagramFontSize, 
							min: 1,
							max: 20,
							onChange: function(INtxsize){
									props.setAttributes( { instagramFontSize: INtxsize } );
								}
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Instagram URL' ),
							value: props.attributes.instagramURL,
							onChange: function( newInstagram ) {
								props.setAttributes( { instagramURL: newInstagram } );
							},
						}),
						el( 'p', {}, i18n.__( 'Instagram Icon Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.instagramColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(INcolor){
									props.setAttributes( { instagramColor: INcolor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Instagram Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.instagramBgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(InBGcolor){
									props.setAttributes( { instagramBgColor: InBGcolor } );
								}
						}),
					),
					el( components.PanelBody, {
							title: i18n.__( 'LinkedIn Setting' ),
							initialOpen: false,
						},
						el( 'p', {}, i18n.__( 'Apply LinkedIn custom setting.' ) ),
						el(ToggleControl,{
							label: i18n.__( 'Round Shape' ),
							checked: props.attributes.linkedshap,
							onChange: function( newshap ) {
								props.setAttributes( { linkedshap: newshap } );
							},
						}),
						el( 'p', {}, i18n.__( 'Change LinkedIn Font Size.' ) ),					
						el( components.RangeControl, {
							value: props.attributes.linkedFontSize, 
							min: 1,
							max: 20,
							onChange: function(LItxsize){
									props.setAttributes( { linkedFontSize: LItxsize } );
								}
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'LinkedIn URL' ),
							value: props.attributes.linkedURL,
							onChange: function( newLinked ) {
								props.setAttributes( { linkedURL: newLinked } );
							},
						}),
						el( 'p', {}, i18n.__( 'LinkedIn Icon Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.linkedColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(LIcolor){
									props.setAttributes( { linkedColor: LIcolor } );
								}
						}),
						el( 'p', {}, i18n.__( 'LinkedIn Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.linkedBgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(LiBGcolor){
									props.setAttributes( { linkedBgColor: LiBGcolor } );
								}
						}),
					),
				),
				el( 'div', {className: props.className},
					el('div',{
						className: 'blocks-builder-social-main'
					},
						el('div',{
							className: 'blocks-builder-social-main-hed',
							style: { textAlign: alignment } 
							},
							el( RichText, {
								key: 'editable',
								tagName: 'h3',
								placeholder: 'Enter Heading here',
								keepPlaceholderOnFocus: true,
								value: attributes.socialhead,
								isSelected: true,
								style:{color:attributes.socialheadColor},
								onChange: function( socialHead_txt ) {
									props.setAttributes( { socialhead: socialHead_txt } );
								},
							} ),
						),
						el('div',{
							className: 'blocks-builder-social-content',
							},
								el('ul',{
									className: 'blocks-builder-social-content-ul',
									style: { textAlign: alignment } 
								},
									el('li',{
										className: attributes.facebookshap ? 'round-shap social-content blocks-builder-social-common' : 'social-content blocks-builder-social-common',
										style:{background:attributes.facebookBgColor}
										},
										attributes.facebookURL && el('a',{
											className: 'facebook-social-common',
											href: attributes.facebookURL,
											target: '_blank',
											style:{color:attributes.facebookColor},
											className:'block-custom-1-txt-'+attributes.facebookFontSize,
										},
										el('i',{className: 'fab fa-facebook-f'}),
										),
									),
									el('li',{
										className: attributes.twittershap ? 'round-shap social-content blocks-builder-social-common' : 'social-content blocks-builder-social-common',
										style:{background:attributes.twitterBgColor}
										},
										attributes.twitterURL && el('a',{
											className: 'twitter-social-common',
											href: attributes.twitterURL,
											target: '_blank',
											style:{color:attributes.twitterColor},
											className:'block-custom-1-txt-'+attributes.twitterFontSize,
										},
										el('i',{className: 'fab fa-twitter'}),
										),
									),
									el('li',{
										className: attributes.instagramshap ? 'round-shap social-content blocks-builder-social-common' : 'social-content blocks-builder-social-common',
										style:{background:attributes.instagramBgColor}
										},
										attributes.instagramURL && el('a',{
											className: 'instagram-social-common',
											href: attributes.instagramURL,
											target: '_blank',
											style:{color:attributes.instagramColor},
											className:'block-custom-1-txt-'+attributes.instagramFontSize,
										},
										el('i',{className: 'fab fa-instagram'}),
										),
									),
									el('li',{
										className: attributes.linkedshap ? 'round-shap social-content blocks-builder-social-common' : 'social-content blocks-builder-social-common',
										style:{background:attributes.linkedBgColor}
										},
										attributes.linkedURL && el('a',{
											className: 'linked-social-common',
											href: attributes.linkedURL,
											target: '_blank',
											style:{color:attributes.linkedColor},
											className:'block-custom-1-txt-'+attributes.linkedFontSize,
										},
										el('i',{className: 'fab fa-linkedin-in'}),
										),
									)
								),
						)
					)
				)				
			];
			
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var facebookURL = props.attributes.facebookURL;
			var facebookshap = props.attributes.facebookshap;
			var facebookColor = props.attributes.facebookColor;
			var facebookBgColor = props.attributes.facebookBgColor;
			var facebookFontSize = props.attributes.facebookFontSize;
			var twitterURL = props.attributes.twitterURL;
			var twittershap = props.attributes.twittershap;
			var twitterColor = props.attributes.twitterColor;
			var twitterBgColor = props.attributes.twitterBgColor;
			var twitterFontSize = props.attributes.twitterFontSize;
			var instagramURL = props.attributes.instagramURL;
			var instagramshap = props.attributes.instagramshap;
			var instagramColor = props.attributes.instagramColor;
			var instagramBgColor = props.attributes.instagramBgColor;
			var instagramFontSize = props.attributes.instagramFontSize;
			var linkedURL = props.attributes.linkedURL;
			var linkedshap = props.attributes.linkedshap;
			var linkedColor = props.attributes.linkedColor;
			var linkedBgColor = props.attributes.linkedBgColor;
			var linkedFontSize = props.attributes.linkedFontSize;
			
			return el('div',{className: props.className},
						el('div',{
							className: 'blocks-builder-social-main'
							},
							el('div',{
								className: 'blocks-builder-social-main-hed',
								style: { textAlign: alignment } 
								},
									el( RichText.Content, {
										tagName: 'h3',
										value: attributes.socialhead,
										style:{color:attributes.socialheadColor},
									})
							),
							el('div',{
								className: 'blocks-builder-social-content',
							},
								el('ul',{
									className: 'blocks-builder-social-content-ul',
									style: { textAlign: alignment } 
								},
									el('li',{
										className: attributes.facebookshap ? 'round-shap social-content blocks-builder-social-common' : 'social-content blocks-builder-social-common',
										style:{background:attributes.facebookBgColor}
									},
										attributes.facebookURL && el('a',{
											className: 'facebook-social-common',
											href: facebookURL,
											target: '_blank',
											style:{color:attributes.facebookColor},
											className:'block-custom-1-txt-'+attributes.facebookFontSize,
										},
										el('i',{className: 'fab fa-facebook-f'}),
										),
									),
									el('li',{
										className: attributes.twittershap ? 'round-shap social-content blocks-builder-social-common' : 'social-content blocks-builder-social-common',
										style:{background:attributes.twitterBgColor}
									},
										attributes.twitterURL && el('a',{
											className: 'twitter-social-common',
											href: twitterURL,
											target: '_blank',
											style:{color:attributes.twitterColor},
											className:'block-custom-1-txt-'+attributes.twitterFontSize,
										},
										el('i',{className: 'fab fa-twitter'}),
										),
									),
									el('li',{
										className: attributes.instagramshap ? 'round-shap social-content blocks-builder-social-common' : 'social-content blocks-builder-social-common',
										style:{background:attributes.instagramBgColor}
									},
										attributes.instagramURL && el('a',{
											className: 'instagram-social-common',
											href: instagramURL,
											target: '_blank',
											style:{color:attributes.instagramColor},
											className:'block-custom-1-txt-'+attributes.instagramFontSize,
										},
										el('i',{className: 'fab fa-instagram'}),
										),
									),
									el('li',{
										className: attributes.linkedshap ? 'round-shap social-content blocks-builder-social-common' : 'social-content blocks-builder-social-common',
										style:{background:attributes.linkedBgColor}
									},
										attributes.linkedURL && el('a',{
											className: 'linked-social-common',
											href: linkedURL,
											target: '_blank',
											style:{color:attributes.linkedColor},
											className:'block-custom-1-txt-'+attributes.linkedFontSize,
										},
										el('i',{className: 'fab fa-linkedin-in'}),
										),
									)
								)
							)
						),
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