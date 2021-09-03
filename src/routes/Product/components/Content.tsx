import { Col, Row } from 'antd'
import React from 'react'
import Images from './Images'
import Product from './Product'
import Umkm from './Umkm'

export default function Content() {
    return (
        <Row gutter={[16,16]}>
            <Col xl={5}><Umkm/></Col>
            <Col xl={11}><Product/></Col>
            <Col xl={8}><Images/></Col>
        </Row>
    )
}
