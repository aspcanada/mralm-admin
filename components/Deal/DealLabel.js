import React, { Fragment } from 'react'

const DealLabel = ({ labels }) => {
  return (
    <>
      {Array.isArray(labels) &&
        labels?.map((values, i) => {
          return (
            <Fragment key={i}>
              {values === 'Expired' && (
                <div>
                  <span className="label label-danger">{values}</span>
                </div>
              )}
              {values === 'Active' && (
                <div>
                  <span className="label label-success">{values}</span>
                </div>
              )}
            </Fragment>
          )
        })}
    </>
  )
}

export default DealLabel
