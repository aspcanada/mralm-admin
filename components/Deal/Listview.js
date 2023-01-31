import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import DealBox from './DealBox'

// const LoadMore = ({size, setSize}) => {
//     return (
//         <nav className="theme-pagination">
//             <ul className="pagination">
//                 <li className="page-item">
//                     <button href="#" className="page-link" aria-label="Previous" onClick={() => setSize(size + 1)}>
//                         <span aria-hidden="true">Load More</span>
//                     </button>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

const Listview = ({ data, size, setSize }) => {
    return (
        <div className="col-xl-12">
            <Row className="property-2 column-sm property-label property-grid">
                {data.map((deals, index) => {
                    // `data` is an array of each page's API response.
                    return deals.map((deal, i) => <Col xl='4' md='6 xl-6' key={i}>
                                                <DealBox data={deal} />
                                            </Col>)
                })}
            </Row>
            {/* <button onClick={() => setSize(size + 1)}>Load More</button> */}
            {/* <LoadMore size={size} setSize={setSize}/> */}
            
        </div>
    )
}

export default Listview