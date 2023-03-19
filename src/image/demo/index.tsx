import React from "react"
import { Container } from "unit-testing-react"
import { MImage as Image } from '..'


export default function () {
	return <Container>

		<Image path='/image/demo'>{`![test1](./img/pkq.png)`}</Image>
		
		<Image>{`![test3](./demo/img/pkq.png)`}</Image>
		<Image>{`![test4](demo/img/pkq.png)`}</Image>
		<Image>{`![test6](/image/demo/img/pkq.png)`}</Image>

	</Container>
}
