import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export interface Code {
	lang?: string
	children: string
}

export function Code(props: Code) {
	const { children } = props
	const content = children.replace(/^\s+|\s+$/g, '')

	return <SyntaxHighlighter
		showLineNumbers={true}
		language={props.lang}
		style={theme}
		wrapLongLines={true}
		customStyle={{ tabSize: 1, lineHeight: 1.5 }} >
		{content
			.replace(/```[a-zA-Z0-9]{0,}\r\n/gi, '')
			.replace('```','')
			.replace(/\r\n$/gi, '')
		}
	</SyntaxHighlighter>
}