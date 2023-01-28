import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Common/Breadcrumb'
import { Card, CardBody, CardHeader, Col, Container, Form, Row } from 'reactstrap'
import EditPropertyForm from '../../components/myproperties/editProperty/EditPropertyForm'
import { getData } from '../../components/utils/getData'
import { useRouter } from "next/router"

const DealDetail = () => {
  const router = useRouter()

  const { id } = router.query


  const [value, setValue] = useState();
  
  // get data from api
  useEffect(() => {
      getData(`${process.env.API_URL}/deals/${id}`)
          .then((res) => {
              setValue(res.data);
          })
          .catch((error) => console.log('error', error))
  }, [])

  return (
    <>
      <Breadcrumb title='View Deal' titleText='Welcome to admin panel' parent='Deals' />
      <Container fluid={true}>
          <Row>
              <Col lg='12'>
                  <Card className="card">
                      <CardHeader className="card-header pb-0">
                          <h5>View deal details</h5>
                      </CardHeader>
                      <CardBody className="card-body admin-form">
                        <pre>{JSON.stringify(value, null, 2)}</pre>
                          {/* <EditPropertyForm /> */}
                      </CardBody>
                  </Card>
              </Col>
          </Row>
      </Container>
    </>
  );
}

export default DealDetail
