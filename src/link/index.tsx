import React from "react"
import { LineFormat } from '../line'


export interface Link {
	children: string
}

export function Link(props: Link) {
	const { children } = props

	console.log(children)
	if (/^\!\[.*\]\(.*\)$/.test(children)) {
		const list = /^\!\[.{0,}\]\(.{0,}\)$/.exec(children) || []
		console.log(list)
	}

	return <LineFormat>{children}</LineFormat>
}
