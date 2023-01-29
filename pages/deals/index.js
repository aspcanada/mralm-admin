import React, { useEffect, useState } from 'react'
import { Col, Container, Input, Label, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import Listview from '../../components/Deal/Listview'
import usePagination from '../../components/utils/usePagination'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'

const fetcher = (...args) => fetch(...args).then(res => res.json())

// A function to get the SWR key of each page,
// its return value will be accepted by `fetcher`.
// If `null` is returned, the request of that page won't start.
const limit = 10;
const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null // reached the end
  return `/api/deals?_page=${pageIndex}&_limit=${limit}`           // SWR key
}

const DealList = () => {
  // const { data: deals, isLoading, error } = useSWR("/api/deals");

  const { data, size, setSize } = useSWRInfinite(getKey)
  if (!data) return 'loading'

  console.log(data[0])

  // We can now calculate the number of all data
  let totalDeals = 0
  for (let i = 0; i < data.length; i++) {
    totalDeals += data[i].length
  }

  // use pagination hook
  // const [Pagination, data, paginationData] = usePagination(data, 8);

  // console.log(paginationData.GetEnd());
  // console.log(paginationData.GetStart());
  // console.log(paginationData.ActivePage());

  return (
    <>
      <Breadcrumb title='Deals' titleText='Our Newest Deals' parent='Deals' />
      {/* {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>} */}
      {data && 
        <Container fluid={true}>
          <Row>
            <Col lg='12'>
              <div className='property-admin'>
                <div className="property-section section-sm">
                  <Row className='ratio_55 property-grid-2 property-map map-with-back'>
                    <Col className='col-12'>
                      <div className="filter-panel">
                        <div className="listing-option">
                          <h5 className="mb-0">Showing <span>{totalDeals}</span> Deals</h5>
                          {/* <h5 className="mb-0">Showing <span>{paginationData.GetStart()}-{paginationData.GetEnd()} of {paginationData.Totalproducts}</span> Listings</h5> */}
                          {/* <div>
                            <div className="d-flex">
                              <span className="m-r-10">Map view</span>
                              <Label className="switch">
                                <Input type="checkbox" className="option-list" name="step_1" defaultValue="ani1" defaultChecked /><span className="switch-state" />
                              </Label>
                              <span className="m-l-10">List view</span>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </Col>
                    <Listview data={data} size={size} setSize={setSize} />
                    {/* <Listview Pagination={Pagination} data={data} /> */}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </>
  )
}

export default DealList