import React, { useEffect, useState } from 'react'
import { Col, Container, Input, Label, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import Listview from '../../components/myproperties/PropertyList/Listview'
import { getData } from '../../components/utils/getData'
import usePagination from '../../components/utils/usePagination'

const Propertylist = () => {

  const [value, setValue] = useState();
  
  // get data from api
  useEffect(() => {
      getData(`${process.env.API_URL}/property`)
          .then((res) => {
              setValue(res.data?.LatestPropertyListingInEnterprise);
          })
          .catch((error) => console.log('error', error))
  }, [])

  // use pagination hook
  const [Pagination, data, paginationData] = usePagination(value, 8);

  return (
    <>
      <Breadcrumb title='Property list' titleText='Welcome to admin panel' parent='My properties' />
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

export default Propertylist