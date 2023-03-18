import React from "react"
import { Container, Unit } from "unit-testing-react"
import { MTable } from '..'

export default function () {
	return <Container>
		<Unit>
			<MTable>
				{`t1|t2|t3|
:----:|:----|----:|
d1|d2|d3|
dd1|dd2|dd3|`}
			</MTable>
		</Unit>
				<Unit>
			<MTable>
				{`|t1|t2|t3|
|:----:|:----|----:|
|d1|d2|d3|
|dd1|dd2|dd3|`}
			</MTable>
		</Unit>
	</Container>
}
