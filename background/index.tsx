import React from 'react'
import { createRoot } from 'react-dom/client'
import { MainContainer, MenuObject, getTestMenuRoute, lazyLoad } from 'unit-testing-react'

const menu: MenuObject[] = [
	// {
	// 	path: '/home',
	// 	element: <div style={{ color: 'red' }}>Home</div>
	// },
	getTestMenuRoute({
		// fold: false,
		modules: [
			{ name: 'demo', element: lazyLoad(import('../src/demo')) },
			{ name: 'Header', element: lazyLoad(import('../src/header/demo')) },
			{ name: 'Code', element: lazyLoad(import('../src/code/demo')) },
			{ name: 'Block', element: lazyLoad(import('../src/block/demo')) },
			{ name: 'Table', element: lazyLoad(import('../src/mTable/demo')) },
		],

	})
]

createRoot(document.getElementById('root')!)
	.render(<MainContainer menu={menu} />)