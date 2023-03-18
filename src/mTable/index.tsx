import React from 'react'
import { isEffectArray } from 'check-it-type'
import { LineFormat } from '../line'
import './index.less'

export interface MTable {
	children: string | string[]
}

export function MTable(props: MTable) {
	const { children } = props

	let tHeads: string[] = []
	let tHeadAlign: ('left' | 'center' | 'right')[] = []
	const tBodyList: string[][] = []

	const lines: string[] = isEffectArray(children) ? children : children.split(/\r\n|\n/)
	for (let i = 0; i < lines.length; i++) {
		const trs = lines[i].replace(/^\|/, '').replace(/\|$/, '').split('|')
		if (i === 0) {
			tHeads = trs
			continue;
		}
		if (i === 1) {
			tHeadAlign = trs.filter(_ => _).map(item => {
				if (/^\s?:-{1,}:\s?$/.test(item)) return 'center'
				if (/^\s?:-{1,}/.test(item)) return 'left'
				if (/-{1,}:\s?$/.test(item)) return 'right'
				return 'left'
			})
			continue;
		}
		tBodyList.push(trs)
	}

	return <table
		className='md-table'
		border={0}
		cellSpacing={0}
		cellPadding={0}>
		<colgroup>
			{tHeadAlign.map((t, index) => <col key={index} style={{ minWidth: 60 }} />)}
		</colgroup>
		<thead>
			<tr>
				{tHeads.map((t, index) => <th
					style={{ textAlign: tHeadAlign[index] }}
					scope="col"
					key={index}>
					{LineFormat({ children: t, emptyContainer: true })}
				</th>)}
			</tr>
		</thead>
		<tbody>
			{tBodyList.map((item, index) =>
				<tr key={index}>
					{item.map((cell, cIndex) => <td
						scope="col"
						style={{ textAlign: tHeadAlign[cIndex] }}
						key={cIndex}>
						{LineFormat({ children: cell, emptyContainer: true })}
					</td>)}
				</tr>
			)}
		</tbody>
	</table>
}