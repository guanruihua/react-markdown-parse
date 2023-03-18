import React from "react"
import { Markdown } from '../markdown'
import { default as JSONData } from './temp/test.json'

const { data = '' } = JSONData

export default function () {
	return <div style={{ color: '#fff' }}>
		<Markdown>
			{data}
		</Markdown>
	</div>
}
