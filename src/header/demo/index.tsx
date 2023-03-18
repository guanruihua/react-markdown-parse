import React from "react"
import { Container, Unit } from 'unit-testing-react'
import { Header } from '..'

function _(value: string) {
	return <div>
		<Header>{value}</Header>
		<div style={{ color: '#eee' }}>markdown: {value}</div>
		<br />
	</div>
}

export default function () {
	return <Container columns={2} gap={10}>
		<Unit>Success</Unit>
		<Container columns={1}>
			<Unit>{_('# Heading level 1')}	<h1>Heading level 1</h1></Unit>
			<Unit>{_('## Heading level 2')}	<h2>Heading level 2</h2></Unit>
			<Unit>{_('### Heading level 3')}	<h3>Heading level 3</h3></Unit>
			<Unit>{_('#### Heading level 4')}	<h4>Heading level 4</h4></Unit>
			<Unit>{_('##### Heading level 5')}	<h5>Heading level 5</h5></Unit>
			<Unit>{_('###### Heading level 6')}	<h6>Heading level 6</h6></Unit>
		</Container>
		<Unit>Error</Unit>
		<Container columns={1}>
			<Unit>{_('#Heading level 1')}	<div>Heading level 1</div></Unit>
			<Unit>{_('##Heading level 2')}	<div>Heading level 2</div></Unit>
			<Unit>{_('###Heading level 3')}	<div>Heading level 3</div></Unit>
			<Unit>{_('####Heading level 4')}	<div>Heading level 4</div></Unit>
			<Unit>{_('#####Heading level 5')}	<div>Heading level 5</div></Unit>
			<Unit>{_('######Heading level 6')}	<div>Heading level 6</div></Unit>
		</Container>
	</Container>
}
