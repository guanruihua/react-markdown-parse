import React from "react"
import { LineFormat } from '../line'
import './index.less'

export interface Block {
	children: string
}

export const BlockRegExp = />\s/

export function Block(props: Block) {
	const { children } = props
	if (BlockRegExp.test(children)) {
		return <div className="block">
			<LineFormat emptyContainer>{children.replace(/>\s/, '')}</LineFormat>
		</div>
	}
	return <LineFormat>{children}</LineFormat>
}
