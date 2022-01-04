import React, {useState, useEffect } from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import Header from "./Header"

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const slug = useParams()
  const [loaded, setLoaded] = useState(false)
  

  useEffect(()=>{
    console.log(slug)
    const url = `/api/v1/airlines/${slug.slug}`
   

    axios.get(url)
		.then(
      response => {
        setAirline(response.data)
        setLoaded(true)
        console.log(response)
      
      
      })
		.catch(response => console.log(response) )
	}, [])

    
    return (
    <div className="wrapper">
      <div className="column">
        {
          loaded &&         
        <Header
        attributes={airline.data.attributes}
        reviews={airline.included}
        />
        }
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">[Review Form Goes Here]</div>
        
      </div>

    </div>
    )
}

export default Airline