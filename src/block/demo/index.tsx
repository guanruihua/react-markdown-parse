import React from "react"
import { Container, Unit } from "unit-testing-react"
import { Block } from '..'

function _(value: string) {
	return <div>
		<Block>{value}</Block>
		<div style={{ color: '#eee' }}>markdown: {value}</div>
		<br />
	</div>
}

export default function () {
	return <Container>
		<Unit>
			{_('> 区块')}
		</Unit>
	</Container>
}
