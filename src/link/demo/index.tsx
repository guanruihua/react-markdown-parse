import React from "react"
import { Container, Unit } from "unit-testing-react"
import { Link } from '..'

export default function () {
	return <Container gap={10}>
		<Unit><Link>{`[超链接](https://github.com/guanruihua)`}</Link></Unit>
		<Unit><Link path="/link/demo/">{`[![](./img/pkq.png)](https://github.com/guanruihua)`}</Link></Unit>
		<Unit><Link>{`[<p>加粗</p>](https://github.com/guanruihua)`}</Link></Unit>
		<Unit><Link>{`[<img src="./img/pkq.png" />](https://github.com/guanruihua)`}</Link></Unit>
	</Container>
}
