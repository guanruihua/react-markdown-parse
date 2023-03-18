import React from "react"
import { format } from '../format'
import './index.less'

export interface Markdown {
	children: string
}

export function Markdown(props: Markdown) {
	const { children } = props

	return <div>
		{format(children)}
	</div>
}
