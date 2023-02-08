import React, { useEffect, useState } from 'react'

const usePagination = (value, itemsPerPage = 6) => {
  const [activePage, setActivePage] = useState(1)
  const [data, setData] = useState(value || [])

  const [paginationData, setPaginationData] = useState({
    Totalproducts: 0,
    ProductsPerPage: itemsPerPage,
    TotalPages: function () {
      return Math.ceil(this.Totalproducts / this.ProductsPerPage)
    },
    ActivePage: function () {
      return activePage
    },
    TotalPagesArray: function () {
      return [...Array(this.TotalPages()).keys()]
    },
    GetStart: function () {
      return this.ProductsPerPage * (activePage - 1) + 1
    },
    GetEnd: function () {
      return this.ProductsPerPage * activePage > this.Totalproducts
        ? this.Totalproducts
        : this.ProductsPerPage * activePage
    },
  })
  useEffect(() => {
    if (value) {
      setPaginationData((pre) => ({ ...pre, Totalproducts: value.length }))
    }
  }, [value])

  let start = activePage - 2 < 0 ? 0 : activePage - 2
  let end = activePage - 2 < 0 ? activePage + 2 : activePage + 1

  useEffect(() => {
    value &&
      setData(
        value.slice(
          paginationData.ProductsPerPage * (activePage - 1),
          paginationData.ProductsPerPage * activePage
        )
      )
    setActivePage(activePage)
    // console.log('activePage', activePage);
  }, [activePage, value])

  const Pagination = () => {
    return (
      <nav className="theme-pagination">
        <ul className="pagination">
          <li className="page-item">
            <a
              href="#"
              className="page-link"
              aria-label="Previous"
              onClick={() => {
                activePage > 1 ? setActivePage((p) => p - 1) : ''
              }}
            >
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {paginationData
            .TotalPagesArray()
            .slice(start, end)
            .map((item) => (
              <li
                className={`page-item${
                  item + 1 === activePage ? ' active' : ''
                }`}
                key={item}
                onClick={() => setActivePage(item + 1)}
              >
                <a href="#" className="page-link">
                  {item + 1}
                </a>
              </li>
            ))}

          <li className="page-item">
            <a
              href="#"
              className="page-link"
              aria-label="Next"
              onClick={() => {
                activePage < paginationData.TotalPages()
                  ? setActivePage((p) => p + 1)
                  : ''
              }}
            >
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
  return [Pagination, data, paginationData]
}

export default usePagination
