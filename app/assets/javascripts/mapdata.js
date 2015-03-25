var simplemaps_usmap_mapdata = {

	main_settings:{
		//General settings
		width: 'responsive', //or '700'
		background_color: '#FFFFFF',	
		background_transparent: 'yes',
		border_color: '#ffffff',
		pop_ups: 'detect', //on_click, on_hover, or detect
	
		//State defaults
		state_description:   'State description',
		state_color: '#88A4BC',
		state_hover_color: '#3B729F',
		state_url: 'http://simplemaps.com',
		border_size: 1.5,		
		all_states_inactive: 'no',
		all_states_zoomable: 'no',		
		
		//Location defaults
		location_description:  'Location description',
		location_color: '#FF0067',
		location_opacity: .8,
		location_hover_opacity: 1,
		location_url: '',
		location_size: 25,
		location_type: 'square', // circle, square, image
		location_image_source: 'frog.png', //name of image in the map_images folder		
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,				
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',
		
		//Labels
		label_color: '#d5ddec',	
		label_hover_color: '#d5ddec',		
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
		hide_eastern_labels: 'no',
		
		//Zoom settings
		zoom: 'yes', //use default regions		
		back_image: 'no',   //Use image instead of arrow for back zoom				
		arrow_color: '#3B729F',
		arrow_color_border: '#88A4BC',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click		
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds
		
		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	
		
		//Advanced settings
		div: 'map',
		auto_load: 'yes',		
		url_new_tab: 'no', 
		images_directory: 'default', //e.g. 'map_images/'
		fade_time:  .1, //time to fade out		
		link_text: '(Link)'  //Text mobile browsers will see for links	
		
	},

	state_specific:{	
		"HI": {
			name: 'Hawaii',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
		},
		"AK": {
			name: 'Alaska',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"FL": {
			name: 'Florida',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"NH": {
			name: 'New Hampshire',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"VT": {
			name: 'Vermont',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"ME": {
			name: 'Maine',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'	
			},
		"RI": {
			name: 'Rhode Island',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'		
			},
		"NY": {
			name: 'New York',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'	
		},
		"PA": {
			name: 'Pennsylvania',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'				
			},
		"NJ": {
			name: 'New Jersey',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'				
			},
		"DE": {
			name: 'Delaware',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"MD": {
			name: 'Maryland',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'						
			},
		"VA": {
			name: 'Virginia',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"WV": {
			name: 'West Virginia',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'				
			},
		"OH": {
			name: 'Ohio',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'		
			},
		"IN": {
			name: 'Indiana',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'				
			},
		"IL": {
			name: 'Illinois',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"CT": {
			name: 'Connecticut',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'				
			},
		"WI": {
			name: 'Wisconsin',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'		
			},
		"NC": {
			name: 'North Carolina',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"DC": {
			name: 'District of Columbia',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
		},
		"MA": {
			name: 'Massachusetts',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'				
			},
		"TN": {
			name: 'Tennessee',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'	
			},
		"AR": {
			name: 'Arkansas',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"MO": {
			name: 'Missouri',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"GA": {
			name: 'Georgia',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"SC": {
			name: 'South Carolina',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"KY": {
			name: 'Kentucky',
			description: 'default',
			color: 'default',
			zoomable: 'no',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"AL": {
			name: 'Alabama',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'					
			},
		"LA": {
			name: 'Louisiana',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"MS": {
			name: 'Mississippi',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'				
			},
		"IA": {
			name: 'Iowa',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"MN": {
			name: 'Minnesota',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"OK": {
			name: 'Oklahoma',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"TX": {
			name: 'Texas',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"NM": {
			name: 'New Mexico',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'		
			},
		"KS": {
			name: 'Kansas',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'			
			},
		"NE": {
			name: 'Nebraska',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'		
			},
		"SD": {
			name: 'South Dakota',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"ND": {
			name: 'North Dakota',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"WY": {
			name: 'Wyoming',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"MT": {
			name: 'Montana',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"CO": {
			name: 'Colorado',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"UT": {
			name: 'Utah',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"AZ": {
			name: 'Arizona',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		"NV": {
			name: 'Nevada',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'		
			},
		"OR": {
			name: 'Oregon',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'		
			},
		"WA": {
			name: 'Washington',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'				
			},
		"CA": {
			name: 'California',
			description: '1,300 campgrounds, 16,000 campsites',
			color: '#3B729F',
			hover_color: 'red',
			url: 'default',
			inactive: 'no'					
			},
		"MI": {
			name: 'Michigan',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'				
			},
		"ID": {
			name: 'Idaho',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			inactive: 'yes'
			},
		// Territories - Hidden unless hide is set to "no"
		"GU": {
			name: 'Guam',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
			},
		"VI": {
			name: 'Virgin Islands',
			image_source: 'x.png',			
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
			},
		"PR": {
			name: 'Puerto Rico',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
			},
		"MP": {
			name: 'Northern Mariana Islands',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
			}		
		},
	
//	locations:{
//		"0": { //must give each location an id, so that you can reference it later
//			name: "New York",
//			lat: 40.71, 
//			lng: -74.00,
//			description: 'default',
//			color: 'default',
//			url: 'default',
//			type: 'default',
//			size: 'default' //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
//		},
//		1: {
//			name: 'Anchorage',
//			lat: 61.2180556,
//			lng: -149.9002778, 
//			color: 'default',
//			type: 'circle'
//		}
//	},
	
	labels:{
		"HI": {
			color: 'default',
			hover_color: 'default',
			font_family: 'default',
			pill: 'yes',	
			width: 'default',			
		}
	}
	
}




