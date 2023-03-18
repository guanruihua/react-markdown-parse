/* eslint-disable*/
import React from "react"


export interface LineFormat {
	emptyContainer?: boolean
	children: string
}
/* eslint-disable*/
export function LineFormat(props: LineFormat) {
	const { children } = props

	const renderContent: React.ReactNode = children

	if (props.emptyContainer === true) {
		return <React.Fragment>{renderContent}</React.Fragment>
	}

	return <div className="line">{renderContent}</div>
}