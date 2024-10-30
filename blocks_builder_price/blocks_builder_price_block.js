( function( blocks, editor, components, i18n, element ) {
	var el = element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;
	var RichText = wp.editor.RichText;
	var BlockControls = wp.editor.BlockControls;
	var AlignmentToolbar = wp.editor.AlignmentToolbar;
	var MediaUpload = wp.editor.MediaUpload;
	var InspectorControls = wp.editor.InspectorControls;
	var TextControl = wp.components.TextControl;
	var Button = wp.components.Button;
	var ColorPalette= wp.components.ColorPalette;
	var ToggleControl= wp.components.ToggleControl;
	
	registerBlockType( 'blockbuilde/price', {
		title: i18n.__( 'Price block' ),
		description: i18n.__( 'A column placed within the pricing table block.' ),
		icon: 'clipboard',
		category: 'blocks-builder',
		attributes: {
			alignment: {
				type: 'string',
				default: 'center',
			},
			columnno: {
				type: 'number',
				default: 2,
			},
			currencysymbol: {
				type: 'string',
				default: '$',
			},
			buttonstyle:{
				type: 'boolean',
				default:false,
			},
			Plan1Text:{
				type: 'string',
			},
			Plan2Text:{
				type: 'string',
			},
			Plan3Text:{
				type: 'string',
			},
			Plan4Text:{
				type: 'string',
			},
			Plan5Text:{
				type: 'string',
			},
			Plan1Amount:{
				type: 'string',
			},
			Plan2Amount:{
				type: 'string',
			},
			Plan3Amount:{
				type: 'string',
			},
			Plan4Amount:{
				type: 'string',
			},
			Plan5Amount:{
				type: 'string',
			},
			Plan1button:{
				type: 'string',
			},
			Plan2button:{
				type: 'string',
			},
			Plan3button:{
				type: 'string',
			},
			Plan4button:{
				type: 'string',
			},
			Plan5button:{
				type: 'string',
			},
			Plan1features:{
				type: 'string',
			},
			Plan2features:{
				type: 'string',
			},
			Plan3features:{
				type: 'string',
			},
			Plan4features:{
				type: 'string',
			},
			Plan5features:{
				type: 'string',
			},
			block1BgColor: {
				type: 'string',
			},
			block1txtColor: {
				type: 'string',
			},
			block1BtnBgColor: {
				type: 'string',
			},
			block1BtntxtColor: {
				type: 'string',
			},
			block2BgColor: {
				type: 'string',
			},
			block2txtColor: {
				type: 'string',
			},
			block2BtnBgColor: {
				type: 'string',
			},
			block2BtntxtColor: {
				type: 'string',
			},
			block3BgColor: {
				type: 'string',
			},
			block3txtColor: {
				type: 'string',
			},
			block3BtnBgColor: {
				type: 'string',
			},
			block3BtntxtColor: {
				type: 'string',
			},
			block4BgColor: {
				type: 'string',
			},
			block4txtColor: {
				type: 'string',
			},
			block4BtnBgColor: {
				type: 'string',
			},
			block4BtntxtColor: {
				type: 'string',
			},
			block5BgColor: {
				type: 'string',
			},
			block5txtColor: {
				type: 'string',
			},
			block5BtnBgColor: {
				type: 'string',
			},
			block5BtntxtColor: {
				type: 'string',
			},
			btn1hrf:{
				type: 'url',
			},
			btn2hrf:{
				type: 'url',
			},
			btn3hrf:{
				type: 'url',
			},
			btn4hrf:{
				type: 'url',
			},
			btn5hrf:{
				type: 'url',
			}
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
							title: i18n.__( 'Column Setting' ),
							initialOpen: true,
							className:'blocks-builder-admin-setting-common',
						},
						el( 'p', {}, i18n.__( 'Select No of Column.' ) ),
						el( components.RangeControl, {
							value: props.attributes.columnno, 
							min: 1,
							max: 5,
							onChange: function(col_no){
									props.setAttributes( { columnno: col_no } );
								}
						}),
						el(ToggleControl,{
							label: i18n.__( 'Button Round Shape' ),
							checked: props.attributes.buttonstyle,
							onChange: function( btnstyle ) {
								props.setAttributes( { buttonstyle: btnstyle } );
							},
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Currency Symbol' ),
							value: props.attributes.currencysymbol,
							onChange: function( curncysymbol ) {
								props.setAttributes( { currencysymbol: curncysymbol } );
							},
						}),
					),					
					el( components.PanelBody, {
							title: i18n.__( 'Block1 Setting' ),
							initialOpen: false,
							className:'blocks-builder-admin-setting-common setting-common-blk setting-blok-'+attributes.columnno,
						},
						el( 'p', {}, i18n.__( 'Change Block 1 Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block1BgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk1bgcolor){
									props.setAttributes( { block1BgColor: blk1bgcolor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 1 Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block1txtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk1txtColor){
									props.setAttributes( { block1txtColor: blk1txtColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 1 button Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block1BtnBgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk1btnbgColor){
									props.setAttributes( { block1BtnBgColor: blk1btnbgColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 1 button Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block1BtntxtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk1btntxtColor){
									props.setAttributes( { block1BtntxtColor: blk1btntxtColor } );
								}
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Button 1 href' ),
							value: props.attributes.btn1hrf,
							onChange: function( btn1hr ) {
								props.setAttributes( { btn1hrf: btn1hr } );
							},
						}),
					),
					el( components.PanelBody, {
							title: i18n.__( 'Block2 Setting' ),
							initialOpen: false,
							className:'blocks-builder-admin-setting-common setting-common-blk setting-blok-'+attributes.columnno,
						},
						el( 'p', {}, i18n.__( 'Change Block 2 Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block2BgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk2bgcolor){
									props.setAttributes( { block2BgColor: blk2bgcolor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 2 Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block2txtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk2txtColor){
									props.setAttributes( { block2txtColor: blk2txtColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 2 button Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block2BtnBgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk2btnbgColor){
									props.setAttributes( { block2BtnBgColor: blk2btnbgColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 2 button Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block2BtntxtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk2btntxtColor){
									props.setAttributes( { block2BtntxtColor: blk2btntxtColor } );
								}
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Button 2 href' ),
							value: props.attributes.btn2hrf,
							onChange: function( btn2hr ) {
								props.setAttributes( { btn2hrf: btn2hr } );
							},
						}),
					),
					el( components.PanelBody, {
							title: i18n.__( 'Block3 Setting' ),
							initialOpen: false,
							className:'blocks-builder-admin-setting-common setting-common-blk setting-blok-'+attributes.columnno,
						},
						el( 'p', {}, i18n.__( 'Change Block 3 Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block3BgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk3bgcolor){
									props.setAttributes( { block3BgColor: blk3bgcolor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 3 Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block3txtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk3txtColor){
									props.setAttributes( { block3txtColor: blk3txtColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 3 button Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block3BtnBgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk3btnbgColor){
									props.setAttributes( { block3BtnBgColor: blk3btnbgColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 3 button Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block3BtntxtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk3btntxtColor){
									props.setAttributes( { block3BtntxtColor: blk3btntxtColor } );
								}
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Button 3 href' ),
							value: props.attributes.btn3hrf,
							onChange: function( btn3hr ) {
								props.setAttributes( { btn3hrf: btn3hr } );
							},
						}),
					),
					el( components.PanelBody, {
							title: i18n.__( 'Block4 Setting' ),
							initialOpen: false,
							className:'blocks-builder-admin-setting-common setting-common-blk setting-blok-'+attributes.columnno,
						},
						el( 'p', {}, i18n.__( 'Change Block 4 Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block4BgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk4bgcolor){
									props.setAttributes( { block4BgColor: blk4bgcolor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 4 Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block4txtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk4txtColor){
									props.setAttributes( { block4txtColor: blk4txtColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 4 button Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block4BtnBgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk4btnbgColor){
									props.setAttributes( { block4BtnBgColor: blk4btnbgColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 4 button Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block4BtntxtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk4btntxtColor){
									props.setAttributes( { block4BtntxtColor: blk4btntxtColor } );
								}
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Button 4 href' ),
							value: props.attributes.btn4hrf,
							onChange: function( btn4hr ) {
								props.setAttributes( { btn4hrf: btn4hr } );
							},
						}),
					),
					el( components.PanelBody, {
							title: i18n.__( 'Block5 Setting' ),
							initialOpen: false,
							className:'blocks-builder-admin-setting-common setting-common-blk setting-blok-'+attributes.columnno,
						},
						el( 'p', {}, i18n.__( 'Change Block 5 Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block5BgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk5bgcolor){
									props.setAttributes( { block5BgColor: blk5bgcolor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 5 Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block5txtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk5txtColor){
									props.setAttributes( { block5txtColor: blk5txtColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 5 button Background Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block5BtnBgColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk5btnbgColor){
									props.setAttributes( { block5BtnBgColor: blk5btnbgColor } );
								}
						}),
						el( 'p', {}, i18n.__( 'Change Block 5 button Text Color.' ) ),
						el( ColorPalette, {
							value: props.attributes.block5BtntxtColor, 
							colors: [{color: '#00d1b2', name: 'teal'},
									{ color: '#3373dc', name: 'royal blue' },
									{ color: '#209cef', name: 'sky blue' },
									{ color: '#22d25f', name: 'green' },
									{ color: '#ffdd57', name: 'yellow' },
									{ color: '#ff3860', name: 'pink' },
									{ color: '#7941b6', name: 'purple' },
									{ color: '#392F43', name: 'black' }], 
							allowCustom: false,
							onChange: function(blk5btntxtColor){
									props.setAttributes( { block5BtntxtColor: blk5btntxtColor } );
								}
						}),
						el( TextControl, {
							type: 'url',
							label: i18n.__( 'Button 5 href' ),
							value: props.attributes.btn5hrf,
							onChange: function( btn5hr ) {
								props.setAttributes( { btn5hrf: btn5hr } );
							},
						}),
					),
				),
				el('div',{className: props.className+' show-price-block'+attributes.columnno},
					el('div',{className: 'price-in-common',	style:{ background:attributes.block1BgColor,color:attributes.block1txtColor }},
						el('div',{className: 'plan-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Plan A',
								value: attributes.Plan1Text,
								formattingControls:[],
								keepPlaceholderOnFocus: true,
								onChange: function( Plan1txt ) {
									props.setAttributes( { Plan1Text: Plan1txt } );
								},
							}),
						),
						el('div',{className:'curncy'},
							attributes.currencysymbol
						),
						el('div',{className: 'plan-amt-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: '99',
								value: attributes.Plan1Amount,
								formattingControls:[],
								keepPlaceholderOnFocus: true,
								onChange: function( Plan1Amt ) {
									props.setAttributes( { Plan1Amount: Plan1Amt } );
								},
							}),
						),
						el('div',{className: 'plan-feature-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Text feature Here',
								value: attributes.Plan1features,
								formattingControls:[],
								style: { textAlign: alignment}, 
								keepPlaceholderOnFocus: true,
								onChange: function( Plan1feature ) {
									props.setAttributes( { Plan1features: Plan1feature } );
								},
							}),
						),
						el('div',{className: 'plan-btn'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Button Text',
								value: attributes.Plan1button,
								formattingControls:[],
								keepPlaceholderOnFocus: true,
								className: attributes.buttonstyle ? 'btn-rndshap' : 'btn-sqrshap',
								style:{background:attributes.block1BtnBgColor,color:attributes.block1BtntxtColor},
								onChange: function( Plan1btn ) {
									props.setAttributes( { Plan1button: Plan1btn } );
								},
							}),
						),
					),
					el('div',{className: 'price-in-common',	style:{ background:attributes.block2BgColor,color:attributes.block2txtColor }},
						el('div',{className: 'plan-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Plan B',
								value: attributes.Plan2Text,
								formattingControls:[],
								keepPlaceholderOnFocus: true,
								onChange: function( Plan2txt ) {
									props.setAttributes( { Plan2Text: Plan2txt } );
								},
							}),
						),
						el('div',{className:'curncy'},
							attributes.currencysymbol
						),
						el('div',{className: 'plan-amt-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: '99',
								value: attributes.Plan2Amount,
								formattingControls:[],
								keepPlaceholderOnFocus: true,
								onChange: function( Plan2Amt ) {
									props.setAttributes( { Plan2Amount: Plan2Amt } );
								},
							}),
						),
						el('div',{className: 'plan-feature-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Text feature Here',
								value: attributes.Plan2features,
								formattingControls:[],
								style: { textAlign: alignment}, 
								keepPlaceholderOnFocus: true,
								onChange: function( Plan2feature ) {
									props.setAttributes( { Plan2features: Plan2feature } );
								},
							}),
						),
						el('div',{className: 'plan-btn'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Button Text',
								value: attributes.Plan2button,
								formattingControls:[],
								keepPlaceholderOnFocus: true,
								className: attributes.buttonstyle ? 'btn-rndshap' : 'btn-sqrshap',
								style:{background:attributes.block2BtnBgColor,color:attributes.block2BtntxtColor},
								onChange: function( Plan2btn ) {
									props.setAttributes( { Plan2button: Plan2btn } );
								},
							}),
						),
					),
					el('div',{className: 'price-in-common',	style:{ background:attributes.block3BgColor,color:attributes.block3txtColor }},
						el('div',{className: 'plan-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Plan c',
								value: attributes.Plan3Text,
								formattingControls:[],
								keepPlaceholderOnFocus: true,
								onChange: function( Plan3txt ) {
									props.setAttributes( { Plan3Text: Plan3txt } );
								},
							}),
						),
						el('div',{className:'curncy'},
							attributes.currencysymbol
						),
						el('div',{className: 'plan-amt-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: '99',
								value: attributes.Plan3Amount,
								keepPlaceholderOnFocus: true,
								formattingControls:[],
								onChange: function( Plan3Amt ) {
									props.setAttributes( { Plan3Amount: Plan3Amt } );
								},
							}),
						),
						el('div',{className: 'plan-feature-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Text feature Here',
								value: attributes.Plan3features,
								keepPlaceholderOnFocus: true,
								formattingControls:[],
								style: { textAlign: alignment}, 
								onChange: function( Plan3feature ) {
									props.setAttributes( { Plan3features: Plan3feature } );
								},
							}),
						),
						el('div',{className: 'plan-btn'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Button Text',
								value: attributes.Plan3button,
								keepPlaceholderOnFocus: true,
								formattingControls:[],
								className: attributes.buttonstyle ? 'btn-rndshap' : 'btn-sqrshap',
								style:{background:attributes.block3BtnBgColor,color:attributes.block3BtntxtColor},
								onChange: function( Plan3btn ) {
									props.setAttributes( { Plan3button: Plan3btn } );
								},
							}),
						),
					),
					el('div',{className: 'price-in-common',	style:{ background:attributes.block4BgColor,color:attributes.block4txtColor }},
						el('div',{className: 'plan-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Plan c',
								value: attributes.Plan4Text,
								formattingControls:[],
								keepPlaceholderOnFocus: true,
								onChange: function( Plan4txt ) {
									props.setAttributes( { Plan4Text: Plan4txt } );
								},
							}),
						),
						el('div',{className:'curncy'},
							attributes.currencysymbol
						),
						el('div',{className: 'plan-amt-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: '99',
								value: attributes.Plan4Amount,
								keepPlaceholderOnFocus: true,
								formattingControls:[],
								onChange: function( Plan4Amt ) {
									props.setAttributes( { Plan4Amount: Plan4Amt } );
								},
							}),
						),
						el('div',{className: 'plan-feature-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Text feature Here',
								value: attributes.Plan4features,
								keepPlaceholderOnFocus: true,
								formattingControls:[],
								style: { textAlign: alignment}, 
								onChange: function( Plan4feature ) {
									props.setAttributes( { Plan4features: Plan4feature } );
								},
							}),
						),
						el('div',{className: 'plan-btn'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Button Text',
								value: attributes.Plan4button,
								keepPlaceholderOnFocus: true,
								formattingControls:[],
								className: attributes.buttonstyle ? 'btn-rndshap' : 'btn-sqrshap',
								style:{background:attributes.block4BtnBgColor,color:attributes.block4BtntxtColor},
								onChange: function( Plan4btn ) {
									props.setAttributes( { Plan4button: Plan4btn } );
								},
							}),
						),
					),
					el('div',{className: 'price-in-common',	style:{ background:attributes.block5BgColor,color:attributes.block5txtColor }},
						el('div',{className: 'plan-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Plan c',
								value: attributes.Plan5Text,
								formattingControls:[],
								keepPlaceholderOnFocus: true,
								onChange: function( Plan5txt ) {
									props.setAttributes( { Plan5Text: Plan5txt } );
								},
							}),
						),
						el('div',{className:'curncy'},
							attributes.currencysymbol
						),
						el('div',{className: 'plan-amt-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: '99',
								value: attributes.Plan5Amount,
								keepPlaceholderOnFocus: true,
								formattingControls:[],
								onChange: function( Plan5Amt ) {
									props.setAttributes( { Plan5Amount: Plan5Amt } );
								},
							}),
						),
						el('div',{className: 'plan-feature-txt'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Text feature Here',
								value: attributes.Plan5features,
								keepPlaceholderOnFocus: true,
								formattingControls:[],
								style: { textAlign: alignment}, 
								onChange: function( Plan5feature ) {
									props.setAttributes( { Plan5features: Plan5feature } );
								},
							}),
						),
						el('div',{className: 'plan-btn'},
							el( RichText, {
								key: 'editable',
								tagName: 'p',
								placeholder: 'Button Text',
								value: attributes.Plan5button,
								keepPlaceholderOnFocus: true,
								formattingControls:[],
								className: attributes.buttonstyle ? 'btn-rndshap' : 'btn-sqrshap',
								style:{background:attributes.block5BtnBgColor,color:attributes.block5BtntxtColor},
								onChange: function( Plan5btn ) {
									props.setAttributes( { Plan5button: Plan5btn } );
								},
							}),
						),
					)
				)
			];
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var currencysymbol = props.attributes.currencysymbol;
			var columnno = props.attributes.columnno;
			var buttonstyle	= props.attributes.buttonstyle;
			var Plan1Text = props.attributes.Plan1Text;
			var Plan2Text = props.attributes.Plan2Text;
			var Plan3Text = props.attributes.Plan3Text;
			var Plan4Text = props.attributes.Plan4Text;
			var Plan5Text = props.attributes.Plan5Text;
			var Plan1Amount = props.attributes.Plan1Amount;
			var Plan2Amount = props.attributes.Plan2Amount;
			var Plan3Amount = props.attributes.Plan3Amount;
			var Plan4Amount = props.attributes.Plan4Amount;
			var Plan5Amount = props.attributes.Plan5Amount;
			var Plan1features = props.attributes.Plan1features;
			var Plan2features = props.attributes.Plan2features;
			var Plan3features = props.attributes.Plan3features;
			var Plan4features = props.attributes.Plan4features;
			var Plan5features = props.attributes.Plan5features;
			var Plan1button = props.attributes.Plan1button;
			var Plan2button = props.attributes.Plan2button;
			var Plan3button = props.attributes.Plan3button;
			var Plan4button = props.attributes.Plan4button;
			var Plan5button = props.attributes.Plan5button;
			var block1BgColor = props.attributes.block1BgColor;
			var block2BgColor = props.attributes.block2BgColor;
			var block3BgColor = props.attributes.block3BgColor;
			var block4BgColor = props.attributes.block4BgColor;
			var block5BgColor = props.attributes.block5BgColor;
			var block1txtColor = props.attributes.block1txtColor;
			var block2txtColor = props.attributes.block2txtColor;
			var block3txtColor = props.attributes.block3txtColor;
			var block4txtColor = props.attributes.block4txtColor;
			var block5txtColor = props.attributes.block5txtColor;
			var block1BtnBgColor = props.attributes.block1BtnBgColor;
			var block2BtnBgColor = props.attributes.block2BtnBgColor;
			var block3BtnBgColor = props.attributes.block3BtnBgColor;
			var block4BtnBgColor = props.attributes.block4BtnBgColor;
			var block5BtnBgColor = props.attributes.block5BtnBgColor;
			var block1BtntxtColor = props.attributes.block1BtntxtColor;
			var block2BtntxtColor = props.attributes.block2BtntxtColor;
			var block3BtntxtColor = props.attributes.block3BtntxtColor;
			var block4BtntxtColor = props.attributes.block4BtntxtColor;
			var block5BtntxtColor = props.attributes.block5BtntxtColor;
			var btn1hrf = props.attributes.btn1hrf;
			var btn2hrf = props.attributes.btn2hrf;
			var btn3hrf = props.attributes.btn3hrf;
			var btn4hrf = props.attributes.btn4hrf;
			var btn5hrf = props.attributes.btn5hrf;
			
			return el('div',{className: props.className+' show-price-block'+attributes.columnno},
				el('div',{className: 'price-in-common',style:{ background:attributes.block1BgColor,color:attributes.block1txtColor }},
					el('div',{className: 'plan-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan1Text,
						}),
					),
					el('div',{className:'curncy'},
							attributes.currencysymbol
					),
					el('div',{className: 'plan-amt-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan1Amount,
						}),
					),
					el('div',{className: 'plan-feature-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan1features,
							style: { textAlign: alignment}, 
						}),
					),
					el('div',{className: 'plan-btn'},
						el( RichText.Content, {
							tagName: 'a',
							href:attributes.btn1hrf,
							value: attributes.Plan1button,
							className: attributes.buttonstyle ? 'btn-rndshap' : 'btn-sqrshap',
							style:{background:attributes.block1BtnBgColor,color:attributes.block1BtntxtColor},
						}),
					),
				),
				el('div',{className: 'price-in-common' ,style:{ background:attributes.block2BgColor,color:attributes.block2txtColor }},
					el('div',{className: 'plan-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan2Text,
						}),
					),
					el('div',{className:'curncy'},
							attributes.currencysymbol
					),
					el('div',{className: 'plan-amt-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan2Amount,
						}),
					),
					el('div',{className: 'plan-feature-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan2features,
							style: { textAlign: alignment}, 
						}),
					),
					el('div',{className: 'plan-btn'},
						el( RichText.Content, {
							tagName: 'a',
							value: attributes.Plan2button,
							href:attributes.btn2hrf,
							className: attributes.buttonstyle ? 'btn-rndshap' : 'btn-sqrshap',
							style:{background:attributes.block2BtnBgColor,color:attributes.block2BtntxtColor},
						}),
					),
				),
				el('div',{className: 'price-in-common',style:{ background:attributes.block3BgColor,color:attributes.block3txtColor }},
					el('div',{className: 'plan-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan3Text,
						}),
					),
					el('div',{className:'curncy'},
							attributes.currencysymbol
					),
					el('div',{className: 'plan-amt-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan3Amount,
						}),
					),
					el('div',{className: 'plan-feature-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan3features,
							style: { textAlign: alignment}, 
						}),
					),
					el('div',{className: 'plan-btn'},
						el( RichText.Content, {
							tagName: 'a',
							value: attributes.Plan3button,
							href:attributes.btn3hrf,
							className: attributes.buttonstyle ? 'btn-rndshap' : 'btn-sqrshap',
							style:{background:attributes.block3BtnBgColor,color:attributes.block3BtntxtColor},
						}),
					),
				),
				el('div',{className: 'price-in-common' ,style:{ background:attributes.block4BgColor,color:attributes.block4txtColor }},
					el('div',{className: 'plan-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan4Text,
						}),
					),
					el('div',{className:'curncy'},
							attributes.currencysymbol
					),
					el('div',{className: 'plan-amt-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan4Amount,
						}),
					),
					el('div',{className: 'plan-feature-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan4features,
							style: { textAlign: alignment}, 
						}),
					),
					el('div',{className: 'plan-btn'},
						el( RichText.Content, {
							tagName: 'a',
							value: attributes.Plan4button,
							href:attributes.btn4hrf,
							className: attributes.buttonstyle ? 'btn-rndshap' : 'btn-sqrshap',
							style:{background:attributes.block4BtnBgColor,color:attributes.block4BtntxtColor},
						}),
					),
				),
				el('div',{className: 'price-in-common' ,style:{ background:attributes.block5BgColor,color:attributes.block5txtColor }},
					el('div',{className: 'plan-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan5Text,
						}),
					),
					el('div',{className:'curncy'},
							attributes.currencysymbol
					),
					el('div',{className: 'plan-amt-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan5Amount,
						}),
					),
					el('div',{className: 'plan-feature-txt'},
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.Plan5features,
							style: { textAlign: alignment}, 
						}),
					),
					el('div',{className: 'plan-btn'},
						el( RichText.Content, {
							tagName: 'a',
							value: attributes.Plan5button,
							href:attributes.btn5hrf,
							className: attributes.buttonstyle ? 'btn-rndshap' : 'btn-sqrshap',
							style:{background:attributes.block5BtnBgColor,color:attributes.block5BtntxtColor},
						}),
					),
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

