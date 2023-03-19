import React from "react"
import { format } from '../format'
import './index.less'

export interface Markdown {
	children: string
	path?: string
}

export function Markdown(props: Markdown) {
	const { children, path } = props

	return <div>
		{format(children, { path })}
	</div>
}
