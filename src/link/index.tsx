import React from "react"
import { LineFormat } from '../line'

export interface Link {
	children: string
	path?: string
}

export function Link(props: Link) {
	const { children, path } = props

	if (/^\[.*\]\(.*\)$/.test(children)) {
		const [, text, url] = /^\[(.*)\]\((.*)\)$/.exec(children) || ['', '', '']
		return <a href={url}>
			<LineFormat path={path}>
				{text}
			</LineFormat>
		</a>
	}

	return <LineFormat path={path}>{children}</LineFormat>
}