import React from "react"

export interface LineFormat {
	emptyContainer?: boolean
	children: string
}

export function LineFormat(props: LineFormat) {
	const { children } = props
	
	if (props.emptyContainer === true) {
		return <React.Fragment>{children}</React.Fragment>
	}

	return <div className="line">{children}</div>
}