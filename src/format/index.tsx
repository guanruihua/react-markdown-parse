/* eslint-disable*/
import { HeaderRegExp, Header } from "../header"
import { Code } from '../code'
import React from "react"

export interface LineFormat {
	children: string
}

export function LineFormat(props: LineFormat) {
	const { children } = props
	return <div className="line">{children}</div>
}

export function format(text: string) {
	
	const lines: string[] = text.split(/\r\n/)
	const renderContent: React.ReactNode[] = []

	let codeTempList: string[] = []
	let codeLang = undefined
	let isCodeBlock: boolean = false

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i]

		if (/^```[a-zA-Z0-9]{0,}/.test(line)) {
			if (isCodeBlock === true) {
				isCodeBlock = false
				renderContent.push(<Code key={i} lang={codeLang}>{codeTempList.join('\n')}</Code>)
				codeTempList = []
				codeLang = undefined
				continue;
			}
			isCodeBlock = true
			const [lang] = /[a-zA-Z0-9]{0,}/.exec(line) || []
			codeLang = lang
			continue;
		}

		if (isCodeBlock === true) {
			codeTempList.push(line)
			continue;
		}

		let lineDom = <LineFormat key={i}>{line}</LineFormat>
		if (HeaderRegExp.test(line)) {
			lineDom = <Header key={i}>{line}</Header>
		}

		renderContent.push(lineDom)
	}


	return renderContent
}