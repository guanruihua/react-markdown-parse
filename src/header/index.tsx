import React from 'react';
import { LineFormat } from '../line'

export interface Header {
	children: string
}

export const HeaderRegExp = /^#+\s/

export function Header(props: Header) {
	const { children } = props

	const content = children.replace(/#/gi, '')
	const header = LineFormat({ children: content, emptyContainer: true })

	if (!HeaderRegExp.test(children))
		return <React.Fragment>{header}</React.Fragment>

	if (/^#\s/.test(children)) return <h1>{header}</h1>
	if (/^##\s/.test(children)) return <h2>{header}</h2>
	if (/^###\s/.test(children)) return <h3>{header}</h3>
	if (/^####\s/.test(children)) return <h4>{header}</h4>
	if (/^#####\s/.test(children)) return <h5>{header}</h5>
	if (/^######\s/.test(children)) return <h6>{header}</h6>

	return <React.Fragment>{header}</React.Fragment>
}