import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import DealBox from './DealBox'

const Listview = ({ Pagination, data }) => {
    return (
        <div className="col-xl-12">
            <Row className="property-2 column-sm property-label property-grid">
                {
                    data && data.map((item, i) => {
                        return (
                            <Col xl='4' md='6 xl-6' key={i}>
                                <DealBox data={item} />
                            </Col>
                        )
                    })
                }
            </Row>
            <Pagination />
        </div>
    )
}

export default Listview