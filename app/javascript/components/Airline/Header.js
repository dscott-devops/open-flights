import React from 'react'

const Header = (props) => 
{
  const {name, image_url, avg_score} = props.attributes
  const total = props.reviews.length
  const theprops = props
  return (
    
    
    <div className="wrapper">
      <h1><img src={image_url}/> {name}</h1>
       <div>
        <div className="totalReviews">{total} User Reviews</div>
        <div className="starRating"></div>
        <div className="totalOutOf">{avg_score}</div>
      </div>
    </div>
  )

  
}

export default Header