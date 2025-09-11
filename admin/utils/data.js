const slug = 'document-embedder-addons-for-elementor';

export const dashboardInfo = (info) => {
	const { version, isPremium, hasPro } = info;

	const proSuffix = isPremium ? ' Pro' : '';

	return {
		name: `Document Embedder Addon${proSuffix}`,
		displayName: `Document Embedder Addon${proSuffix} - Easily Embed Word, Excel, PowerPoint, PDF, and Google Docs.`,
		description: 'Document Embedder Addon for Elementor is a collection of 12 document display widgets designed for use with the Elementor page builder. It allows users to embed files such as PDFs, Word documents, Excel sheets, PowerPoint presentations, and Google Docs directly into WordPress pages with adjustable layout controls.',
		slug,
		logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
		banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
		// video: 'https://www.youtube.com/watch?v=milYZrqLJsE',
		// isYoutube: true,
		version,
		isPremium,
		hasPro,
		pages: {
			org: `https://wordpress.org/plugins/${slug}/`,
			// landing: `https://bplugins.com/products/${slug}/`, //Learn More button aer jonno
			// docs: `https://bplugins.com/docs/${slug}/`,
			// pricing: `https://bplugins.com/products/${slug}/pricing`,
		},
		freemius: {
			product_id: 19836,
			plan_id: 32912,
			public_key: 'pk_a175d9d65767cc56ca88c39e031a9'
		}
	}
}

export const changelogs = [
	{
		version: '1.0.3',
		list: [
			'Reduce assets load'
		]
	},
	{
		version: '1.0.2',
		list: [
			'Add translate feature'
		]
	},
	{
		version: '1.0.0',
		list: [
			'First release'
		]
	}
];

export const demoInfo = {
	title: 'Live Overview',
	description: 'Click on any style to view it live',
	allInOneLabel: 'See All Demo',
	allInOneLink: 'https://bblockswp.com/pricing-table-all-demos/',
	demos: [
		{
			icon: '',
			title: 'Pricing Table- Default Style',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/pricing-table-default-style/'
		},
		{
			icon: '',
			title: 'Pricing Table- Default Style Two',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/pricing-table-default-style-two/'
		},
		{
			icon: '',
			title: 'Pricing Table- Default Style Three',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/pricing-table-default-style-three/'
		},
		{
			icon: '',
			title: 'Pricing Table- Horizontal Style',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/pricing-table-horizontal-style/'
		},
		{
			icon: '',
			title: 'Pricing Table- Minimal Style',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/pricing-table-minimal-style/'
		},
		{
			icon: '',
			title: 'Pricing Table- Dark Style',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/pricing-table-dark-style/'
		},
		{
			icon: '',
			title: 'Pricing Table- Switchable Style',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/pricing-table-switchable-style/'
		},
		{
			icon: '',
			title: 'Pricing Table- DarkMinimalist Style',
			description: '',
			category: '',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/pricing-table-darkminimalist-style/'
		}
	]
}

export const pricingInfo = {
	cycles: [
		// {
		// 	cycle: 'monthly',
		// 	label: 'Monthly',
		// 	isDefault: false
		// },
		// {
		// 	cycle: 'annual',
		// 	label: 'Yearly',
		// 	isDefault: true
		// },
		{
			cycle: 'lifetime',
			label: 'Lifetime',
			isDefault: false
		}
	],
	plans: [
		{
			name: 'Single Site',
			quantity: 1,
			prices: {
				// monthly: '4.99',
				// annual: '47.88',
				lifetime: '29.99'
			},
			pricePrefix: '',
			priceSuffix: '',
			isFeatured: false,
			note: ''
		},
		{
			name: '3 Sites',
			quantity: 3,
			prices: {
				// monthly: '8.99',
				// annual: '83.88',
				lifetime: '59.99'
			},
			pricePrefix: '',
			priceSuffix: '',
			isFeatured: true,
			note: ''
		},
		{
			name: 'Unlimited Sites',
			quantity: 'null',
			prices: {
				// monthly: '33.99',
				// annual: '323.88',
				lifetime: '199.99'
			},
			pricePrefix: '',
			priceSuffix: '',
			isFeatured: false,
			note: ''
		}
	],
	features: [
		'Five professional design layouts.',
		'Custom styling options',
		'Advanced typography',
		'Flexible layout controls',
		'Highlight popular button',
		'Toggle active buttons',
		'Custom icon',
		'Responsive device based controls',
	],
	button: {
		label: 'Buy Now ➜'
	},
	featured: {
		text: 'Best Value'
	}
}

export const filterDemoInfo={
	categories:[
		{label: 'All', value: 'all',  col: 2, height: '19rem'},
		{label: 'Default',value: 'default',  col: 1, height: '38rem'},		
		{label: 'Horizontal',value: 'horizontal',  col: 1, height: '38rem'},		
		{label: 'Minimal',value: 'minimal',  col: 1, height: '38rem'},
		{label: 'Dark',value: 'dark',  col: 1, height: '38rem'},
		{label: 'Switchable',value: 'switchable',  col: 1,height: '38rem'},
		{label: 'Dark Minimalist',value: 'darkMinimalist',  col: 1, height: '38rem'}
	],
	demos: [
		{
			title: 'Default Pricing Table Style',
			categories:['default'],
			url:'https://templates.bplugins.com/wp-content/uploads/2025/08/image-2.png'
		},
		{
			title: 'Horizontal Pricing Table Style',
			categories:['horizontal'],
			url:'https://templates.bplugins.com/wp-content/uploads/2025/06/horizatioal-pricing2-Copy.png'
		},
		{
			title: 'Minimal Pricing Table Style',
			categories:['minimal'],
			url:'https://templates.bplugins.com/wp-content/uploads/2025/06/minimal-pricing1-Copy.png'
		},
		{
			title: 'Dark Pricing Table Style',
			categories:['dark'],
			url:'https://templates.bplugins.com/wp-content/uploads/2025/07/drak-pricing33.png'
		},
		{
			title: 'Switchable Pricing Table Style',
			categories:['switchable'],
			url:'https://templates.bplugins.com/wp-content/uploads/2025/07/Switchable-Pricing-Table5.png'
		},
		{
			title: 'DarkMinimalist Pricing Table Style ',
			categories:['darkMinimalist'],
			url:'https://templates.bplugins.com/wp-content/uploads/2025/07/dark-minimalist4.png'
		},
	]
}
// export const featureCompareInfo = {
// 	title: 'Features',
// 	plans: [
// 		{
// 			id: 'ztbk4ex2fyi',
// 			name: 'Free Plan',
// 			color: '#485781'
// 		},
// 		{
// 			id: 'lhmjqhkeyi',
// 			name: `<span style='color: #485781;'>Pro Start from </span><span style='font-size: 1.3em;'>47.88/y</span>`,
// 			color: '#146EF5'
// 		}
// 	],
// 	features: [
// 		{
// 			label: 'Multiple Layouts (Grid, Masonry, Ticker, and Slider)',
// 			plans: ['ztbk4ex2fyi', 'lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Sub Layout (Left/Right Image, Overlay Box, Title Meta, and more)',
// 			plans: ['ztbk4ex2fyi', 'lhmjqhkeyi']
// 		},
// 		{
// 			label: 'More Layouts and Sub Layouts',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Customization for Post Ticker layout',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Shortcode to display the posts block anywhere',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Post Query (filter by post type, categories, author, post count, and order)',
// 			plans: ['ztbk4ex2fyi', 'lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Display Pages & Custom Post Types',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Advanced Filtering (filter by tag, taxonomy, author, and more)',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Post Offset (skip the first [n] posts)',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Include/Exclude Posts by IDs and Exclude Current Post',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Custom Post Query Hook',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Show/Hide Post Elements (feature image, title, metadata, excerpt, and read more button)',
// 			plans: ['ztbk4ex2fyi', 'lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Customize/Style Post Element (feature image, title, metadata, excerpt, and read more button)',
// 			plans: ['ztbk4ex2fyi', 'lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Fully Responsiveness for mobile, tablet, and desktop',
// 			plans: ['ztbk4ex2fyi', 'lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Customizable Pagination',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Rearrange/Sort post title and metadata',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Feature Image custom size',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Display Reading Time',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Show Excerpt from Main Content',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Enable/Disable Meta Author link',
// 			plans: ['lhmjqhkeyi']
// 		},
// 		{
// 			label: 'Custom Meta icons',
// 			plans: ['lhmjqhkeyi']
// 		}
// 	]
// }


const pluginSlug = slug;
const demoLink = 'https://bblockswp.com/demo';
const docsURL = 'https://bplugins.com/docs/bblocks';

export const blocksInfo = {
title:'All Widgets',
action:'bptbGetBlocks',
blocks:[
{
name: `bae_doc_embedder`,
title: 'Document Embedder',
icon: '',
demo: ``,
docs: ``,
},
{
name: `bae_excel_embedder`,
title: 'Excel Embedder',
icon: '',
demo: `${demoLink}/row/`,
docs: `${docsURL}/row-block/`,
},
{
name: `bae_pdf_embedder`,
title: 'PDF Embedder',
icon: '',
demo: ``,
docs: ``,
},
{
name: `bae_word_viewer`,
title: 'Word Viewer',
icon: '',
demo: ``,
docs: ``,
},
{
name: `bae_excel_viewer`,
title: 'Excel Viewer',
icon: '',
demo: ``,
docs: ``,
},
{
name: `bae_pp_embedder`,
title: 'PowerPoint Embedder',
icon: '',
demo: `${demoLink}/powerpoint-embedder/`,
docs: `${docsURL}/powerpoint-embedder-block/`,
},
{
name: `bae_powerpoint_viewer`,
title: 'PowerPoint Viewer',
icon: '',
demo: `${demoLink}/powerpoint-viewer/`,
docs: `${docsURL}/powerpoint-viewer-block/`,
},
{
name: `bae_google_docs`,
title: 'Google Docs Embedder',
icon: '',
demo: `${demoLink}/google-docs-embedder/`,
docs: `${docsURL}/google-docs-embedder-block/`,
},
{
name: `bae_google_sheets`,
title: 'Google Sheets Embedder',
icon: '',
demo: ``,
docs: ``,
},
{
name: `bae_google_slides`,
title: 'Google Slides Embedder',
icon: '',
demo: ``,
docs: ``,
},
{
name: `bae_pdf_native_embedder`,
title: 'PDF Native Embedder',
icon: '',
demo: ``,
docs: ``,
},
]
}