import React from 'react'
import { createRoot } from 'react-dom/client'
import { MainContainer, MenuObject, getTestMenuRoute, lazyLoad } from 'unit-testing-react'
import './index.less'

const menu: MenuObject[] = [
	// {
	// 	path: '/home',
	// 	element: <div style={{ color: 'red' }}>Home</div>
	// },
	getTestMenuRoute({
		fold: false,
		modules: [
			{ name: 'demo', element: lazyLoad(import('../src/demo/temp')) },
			{ name: 'Header', element: lazyLoad(import('../src/header/demo')) },
			{ name: 'Code', element: lazyLoad(import('../src/code/demo')) },
			{ name: 'Block', element: lazyLoad(import('../src/block/demo')) },
			{ name: 'Table', element: lazyLoad(import('../src/mTable/demo')) },
			{ name: 'Image', element: lazyLoad(import('../src/image/demo')) },
			{ name: 'Link', element: lazyLoad(import('../src/link/demo')) },
		],

	})
]

createRoot(document.getElementById('root')!)
	.render(<MainContainer menu={menu} />)