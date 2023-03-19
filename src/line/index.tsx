/* eslint-disable*/
import React from "react"
import { MImage } from '../image'

export interface LineFormat {
	path?: string
	emptyContainer?: boolean
	children: string
}
/* eslint-disable*/
export function LineFormat(props: LineFormat) {
	const { children, path } = props

	const renderContent: React.ReactNode = children

	if (/^!\[.*\]\(.*\)$/.test(children)) {
		return <MImage path={path}>{children}</MImage>
	}


	if (props.emptyContainer === true) {
		return <React.Fragment>{renderContent}</React.Fragment>
	}

	return <div className="line">{renderContent}</div>
}