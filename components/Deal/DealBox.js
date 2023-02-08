import Link from 'next/link'
import React from 'react'
import { Calendar, Camera, Heart, Percent, PieChart } from 'react-feather'
import ImageSlider from '../ImageSlider'
import DealLabel from './DealLabel'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const DealBox = ({ data }) => {
  const symbol = '$'
  const currencyValue = 1
  const router = useRouter()
  const NavigateFavourit = () => {
    toast.success('Added to favourites.')
    // router.push('/myproperties/propertylist')
  }

  return (
    <>
      <div className="property-box">
        <div className="property-image">
          <ImageSlider images={data.img} />
          <div className="labels-left">
            <DealLabel labels={data.label} />
          </div>
          <div className="seen-data">
            <Camera />
            <span>{data.img.length}</span>
          </div>
          <Link href="" title="Member">
            <img
              src={data.memberAvatar}
              alt="Member avatar"
              className="avatar"
            />
          </Link>
          <div className="overlay-property-box">
            {/* <Link href='' className="effect-round" title="Compare">
                            <AddToCompareProducts id={data.id} />
                        </Link> */}

            <div
              className="effect-round like"
              onClick={() => {
                NavigateFavourit()
              }}
              title="wishlist"
            >
              <Heart />
            </div>
          </div>
        </div>
        <div className="property-details">
          <span className="font-roboto">{data.city || 'USA'} </span>
          <Link
            href={
              Array.isArray(data.img)
                ? `/property/image-slider/?id=${data.id}`
                : `/property/image-box/?id=${data.id}`
            }
          >
            <h3>{data.title}</h3>
          </Link>
          <h6>
            {symbol}
            {data.amount.toLocaleString()}
          </h6>
          <p className="font-roboto">
            {data.details ||
              'This home provides wonderful entertaining spaces with a chef kitchen opening. Elegant retreat in a quiet Coral Gables setting..'}{' '}
          </p>
          <ul>
            <li>
              <Calendar size={18} />
              &nbsp; Term: {data.term} months
            </li>
            <li>
              <Percent size={18} />
              &nbsp; Rate: {data.rate}%
            </li>
            <li>
              <PieChart size={18} />
              &nbsp; LTV: {data.ltv}%
            </li>
          </ul>
          <div className="property-btn d-flex">
            <span>{data.date}</span>
            <Link href={`/deals/${data.id}`}>
              <button type="button" className="btn btn-dashed btn-pill">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default DealBox
