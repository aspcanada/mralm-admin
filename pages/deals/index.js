import React, { useEffect, useState } from 'react'
import { Col, Container, Input, Label, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import Listview from '../../components/Deal/Listview'
import { getData } from '../../components/utils/getData'
import usePagination from '../../components/utils/usePagination'

const DealList = () => {

  const [value, setValue] = useState();
  
  // get data from api
  useEffect(() => {
      getData(`${process.env.API_URL}/deals`)
          .then((res) => {
              setValue(res.data);
          })
          .catch((error) => console.log('error', error))
  }, [])

  // use pagination hook
  const [Pagination, data, paginationData] = usePagination(value, 8);

  // console.log(paginationData.GetEnd());
  // console.log(paginationData.GetStart());
  console.log(paginationData.ActivePage());

  return (
    <>
      <Breadcrumb title='Deals' titleText='Welcome to admin panel' parent='Deals' />
      <Container fluid={true}>
        <Row>
          <Col lg='12'>
            <div className='property-admin'>
              <div className="property-section section-sm">
                <Row className='ratio_55 property-grid-2 property-map map-with-back'>
                  <Col className='col-12'>
                    <div className="filter-panel">
                      <div className="listing-option">
                        <h5 className="mb-0">Showing <span>{paginationData.GetStart()}-{paginationData.GetEnd()} of {paginationData.Totalproducts}</span> Listings</h5>
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
                  <Listview Pagination={Pagination} data={data} />
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DealList