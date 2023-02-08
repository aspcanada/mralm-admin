import React, { useEffect, useState } from "react"
import Breadcrumb from "../../components/Common/Breadcrumb"
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Row,
} from "reactstrap"
import EditPropertyForm from "../../components/myproperties/editProperty/EditPropertyForm"
import { useRouter } from "next/router"
import DealForm from "../../components/Deal/DealForm"
import useSWR from "swr"

const DealDetail = () => {
  const router = useRouter()
  const { id } = router.query

  const url = `/api/deals/${id}`
  const { data: deal, isLoading, error } = useSWR(url)

  return (
    <>
      <Breadcrumb
        title="View Deal"
        titleText="Welcome to admin panel"
        parent="Deals"
      />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {deal && (
        <Container fluid={true}>
          <Row>
            <Col lg="12">
              <Card className="card">
                <CardHeader className="card-header pb-0">
                  <h5>View deal details</h5>
                </CardHeader>
                <CardBody className="card-body admin-form">
                  <pre>{JSON.stringify(deal, null, 2)}</pre>
                  <DealForm deal={deal} />
                  {/* <EditPropertyForm /> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default DealDetail
