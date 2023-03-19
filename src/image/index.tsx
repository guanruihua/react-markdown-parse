import React from "react"
import { isUndefined } from "check-it-type";

export interface MImage {
	path?: string
	children: string
}

export function resolveImgPath(path: string | undefined, custom: string) {
	if (isUndefined(path)) return custom
	const newUrl = path.replace(/\/$/, '') + '/' + custom.replace(/(^\.)|(^\.\/)/, '')

	return newUrl
}

export function MImage(props: MImage) {
	const { children, path } = props

	if (/^!\[.*\]\(.*\)$/.test(children)) {
		const [, alt, url] = /^!\[(.{0,})\]\((.{0,})\)$/.exec(children) || ['', '', '']
		return <img alt={alt} src={resolveImgPath(path, url)} />
	}
	return <img alt={'empty'} />
}
