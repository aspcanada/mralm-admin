import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import UserBox from '../../components/manageuser/allusers/UserBox'
import useSWR from 'swr'

const UsersList = () => {
  const url = '/api/users'
  const { data: users, isLoading, error } = useSWR(url)

  return (
    <>
      <Breadcrumb
        title="Users"
        titleText="Welcome To Admin panel"
        parent="Users"
      />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {users && (
        <Container fluid={true}>
          <Row className="agent-section property-section user-lists">
            <Col lg="12">
              <div className="property-grid-3 agent-grids ratio2_3">
                <Row className="property-2 column-sm property-label property-grid list-view">
                  {users.map((item, i) => {
                    return (
                      <Col md="12" xl="6" key={i}>
                        <UserBox data={item} label={false} />
                      </Col>
                    )
                  })}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default UsersList
