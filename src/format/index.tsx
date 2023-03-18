/* eslint-disable*/
import React from "react"
import { MTable } from "../mTable"
import { Code } from '../code'
import { isEffectArray } from "check-it-type"
import { LineFormat } from '../line'
import { Block } from '../block'
import { HeaderRegExp, Header } from "../header"

export function format(text: string) {

	const lines: string[] = text.split(/\r\n|\n/)
	const renderContent: React.ReactNode[] = []

	// 代码块
	let codeTempList: string[] = []
	let codeLang = undefined
	let isCodeBlock: boolean = false

	// 表格
	let isTable: boolean = false
	let tableTempList: string[] = []

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i]
		// console.log(line)

		/** table start **/
		if (isTable && line.indexOf('|') > -1) {
			tableTempList.push(line)
			continue;
		}

		if (isTable && line.indexOf('|') === -1) {
			isTable = false
			renderContent.push(
				<MTable key={'table' + i} >{tableTempList.join('\n')}</MTable>
			)
			tableTempList = []
		}

		if (isTable === false && /^\|?(\s?:?-{2,}:?\s?\|?){1,}/.test(line)) {
			if (lines.length > 0 && lines[i - 1].indexOf('|') > -1) {
				isTable = true
				isEffectArray(renderContent) && renderContent.pop()
				tableTempList.push(lines[i - 1])
				tableTempList.push(line)
				continue;
			}
		}
		/** table end **/

		/** code start **/
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
		/** code end **/

		let renderLineDom = <LineFormat key={i}>{line}</LineFormat>

		if (/^>\s/.test(line)) {
			renderLineDom = <Block key={i}>{line}</Block>
		}
		if (HeaderRegExp.test(line)) {
			renderLineDom = <Header key={i}>{line}</Header>
		}
		renderContent.push(renderLineDom)
	}


	return renderContent
}