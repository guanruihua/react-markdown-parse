import React from 'react';
import { Code } from '..'

export default function () {
	return (
		<Code lang='tsx'>
			{`import React from "react"
import { HighLighter } from './high'

export default function () {
	return <div style={{ color: '#fff' }}>
		<HighLighter />
	</div>
}`}
		</Code>
	)

}