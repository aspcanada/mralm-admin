import React, { useEffect, useState } from "react"
import { Col, Container, Input, Label, Row } from "reactstrap"
import Breadcrumb from "../../components/Common/Breadcrumb"
import Listview from "../../components/Deal/Listview"
import usePagination from "../../components/utils/usePagination"
import useSWR from "swr"
import useSWRInfinite from "swr/infinite"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

// A function to get the SWR key of each page,
// its return value will be accepted by `fetcher`.
// If `null` is returned, the request of that page won't start.
const limit = 10
const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null // reached the end
  return `/api/deals?_page=${pageIndex + 1}&_limit=${limit}` // SWR key
}

const LoadMore = ({ size, setSize, isLoadingMore, isReachingEnd }) => {
  return (
    <nav className="theme-pagination">
      <ul className="pagination">
        <li className="page-item">
          <button
            href="#"
            className="page-link"
            aria-label="Load More"
            disabled={isLoadingMore || isReachingEnd}
            onClick={() => setSize(size + 1)}
          >
            <span aria-hidden="true">
              {isLoadingMore
                ? "loading..."
                : isReachingEnd
                ? "No more deals"
                : "Load More"}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

const DealList = () => {
  const { data, error, isLoading, isValidating, size, setSize } =
    useSWRInfinite(getKey)

  const deals = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined")
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < limit)
  const isRefreshing = isValidating && data && data.length === size

  return (
    <>
      <Breadcrumb title="Deals" titleText="Our Newest Deals" parent="Deals" />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <Container fluid={true}>
          <Row>
            <Col lg="12">
              <div className="property-admin">
                <div className="property-section section-sm">
                  <Row className="ratio_55 property-grid-2 property-map map-with-back">
                    <Col className="col-12">
                      <div className="filter-panel">
                        <div className="listing-option">
                          <h5 className="mb-0">
                            Showing <span>{size}</span> page(s) of{" "}
                            <span>{isLoadingMore ? "..." : deals.length}</span>{" "}
                            deals
                          </h5>
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
                    {isEmpty ? <p>no deals found.</p> : null}
                    <Listview data={data} size={size} setSize={setSize} />
                    <LoadMore
                      size={size}
                      setSize={setSize}
                      isLoadingMore={isLoadingMore}
                      isReachingEnd={isReachingEnd}
                    />
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default DealList
