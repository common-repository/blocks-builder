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
	var ToggleControl= wp.components.ToggleControl;
	
	registerBlockType( 'blockbuilde/tweet', {
		title: i18n.__( 'Tweet Block' ),
		description: i18n.__( 'Add a quote for readers to tweet via Twitter.' ),
		icon: 'twitter',
		category: 'blocks-builder',
		attributes: {
			alignment: {
				type: 'string',
				default: 'right',
			},
			tweet_txt:{
				type: 'array',
				source: 'children',
				selector: 'p',
				default: 'Enter Text Here',
			},
			tweet_button_txt:{
				type:'string',
				default: 'Click To Tweet',
			},
			TweetBgColor:{
				type: 'string',
			},
			TweetTxtColor:{
				type: 'string',
			},
			TweetBtnBGColor:{
				type: 'string',
				default:'#1da1f2',
			},
			TweetBtnTxtColor:{
				type: 'string',
				default:'#ffffff',
			},
			TweetBoxBorderColor:{
				type: 'string',
			},
			All_rounded:{
				type: 'boolean',
				default:false,
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
							title: i18n.__( 'Tweet Block Setting' ),
							initialOpen: true,
							className:'blocks-builder-admin-setting-common',
						},
						el(ToggleControl,{
							label: i18n.__( 'All Round Corner' ),
							checked: props.attributes.All_rounded,
							onChange: function( all_round ) {
								props.setAttributes( { All_rounded: all_round } );
							},
						}),
						el( 'p', {}, i18n.__( 'Change Tweet Box Border Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.TweetBoxBorderColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(TwetBoxBorderColor){
									props.setAttributes( { TweetBoxBorderColor: TwetBoxBorderColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.TweetBgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(TwetBgColor){
									props.setAttributes( { TweetBgColor: TwetBgColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.TweetTxtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(TwetTxtColor){
									props.setAttributes( { TweetTxtColor: TwetTxtColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Button Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.TweetBtnBGColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' },
									{ color: '#1da1f2', name: 'Dodger Blue' }],									
							allowCustom: false,
							onChange: function(TwetBtnBGColor){
									props.setAttributes( { TweetBtnBGColor: TwetBtnBGColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Button Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.TweetBtnTxtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' },
									{ color: '#ffffff', name: 'white' }], 
							allowCustom: false,
							onChange: function(TwetBtnTxtColor){
									props.setAttributes( { TweetBtnTxtColor: TwetBtnTxtColor } );
								}
						}),
					),
				),
				el('div',{className: props.className},
					el('div',{
						className: attributes.All_rounded?'all-round blok-tweet-main':'blok-tweet-main',
						style: {background: attributes.TweetBgColor, border:'1px solid '+attributes.TweetBoxBorderColor}
						},
						el( RichText, {
							key: 'editable',
							tagName: 'p',
							placeholder: 'Enter Text Here',
							keepPlaceholderOnFocus: true,
							value: attributes.tweet_txt,
							formattingControls:[],
							className:'blok-tweet-txt',
							style: {color: attributes.TweetTxtColor},
							onChange: function( twet_txt ) {
								props.setAttributes( { tweet_txt: twet_txt } );
							},
						}),
						el('div',{
							className:'blok-tweet-btn',
							style: { textAlign: alignment}
							},
							el( RichText, {
								key: 'editable',
								tagName: 'a',
								placeholder: 'Click To Tweet',
								keepPlaceholderOnFocus: false,
								value: attributes.tweet_button_txt,
								className:attributes.All_rounded?'all-round':'',
								style: {color: attributes.TweetBtnTxtColor, background: attributes.TweetBtnBGColor, border:'1px solid '+attributes.TweetBtnBGColor},
								onChange: function( tweet_btn_txt ) {
									props.setAttributes( { tweet_button_txt: tweet_btn_txt } );
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
			var tweet_txt = props.attributes.tweet_txt;
			var tweet_button_txt = props.attributes.tweet_button_txt;
			var TweetBgColor = props.attributes.TweetBgColor;
			var TweetTxtColor = props.attributes.TweetTxtColor;
			var TweetBtnBGColor = props.attributes.TweetBtnBGColor;
			var TweetBtnTxtColor = props.attributes.TweetBtnTxtColor;
			var All_rounded = props.attributes.All_rounded;

			var tweetURI = 'https://twitter.com/home?status=' + encodeURIComponent( tweet_txt );
			
			return el('div',{className: props.className},
						el('div',{
							className: attributes.All_rounded?'all-round blok-tweet-main':'blok-tweet-main',
							style: {background: attributes.TweetBgColor, border:'1px solid '+attributes.TweetBoxBorderColor} 
							},
							el( RichText.Content, {
								tagName: 'p',
								value: attributes.tweet_txt,
								className:'blok-tweet-txt',
								style: {color: attributes.TweetTxtColor},
							}),
							el('div',{
								className:'blok-tweet-btn',
								style: { textAlign: alignment}
								},
								el( RichText.Content, {
									tagName: 'a',
									href: tweetURI,
									value: attributes.tweet_button_txt,
									target: '_blank',
									className:attributes.All_rounded?'all-round':'',
									style: {color: attributes.TweetBtnTxtColor, background: attributes.TweetBtnBGColor, border:'1px solid '+attributes.TweetBtnBGColor },
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