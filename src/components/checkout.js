import React, { useState } from "react"
import getStripe from "../utils/stripejs"
import axios from "axios"

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const watchTerms = new FormData(event.target).get("watchTerms")
    const custEmail = new FormData(event.target).get("custEmail")
    const stripe = await getStripe();
 
    const session = await axios.post('http://localhost:4000/stripeCreateSession', {
      "success_url": "http://localhost/thank-you/",
      "cancel_url": "http://localhost/cancel/",
      "metadata": {
        "watch_terms": watchTerms,
        "cust_email": custEmail,
      },
      "line_items": [{ price: "price_1LKM3cAG5rO3KPKhP8tNkpcj", quantity: 1 }],
      "mode": "payment",
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
    const { error } = await stripe.redirectToCheckout(session.data)

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  // const redirectToCheckout = async event => {
  //   event.preventDefault()
  //   setLoading(true)

  //   const stripe = await getStripe()
  //   const { error } = await stripe.redirectToCheckout({
  //     mode: "payment",
  //     lineItems: [{ price: "price_1LKM3cAG5rO3KPKhP8tNkpcj", quantity: 1 }],
  //     successUrl: `http://localhost:8000/page-2/`,
  //     cancelUrl: `http://localhost:8000/`,
  //   })

  //   if (error) {
  //     console.warn("Error:", error)
  //     setLoading(false)
  //   }
  // }

  return (
    <form onSubmit={handleSubmit} className="enc-form">
      <div>
        <label>
        Email<br /><input type="email" name="custEmail" />
        </label> 
      </div>
      <div>
        <label>
          Customer Reference<br /><input type="text" name="custRef" />
        </label>
      </div>
      <div>
        <label>
        Watch Terms<br /><textarea name="watchTerms" />
        </label>
      </div>
      <div>
      <button disabled={loading}>Start Watching</button>
      </div>
    </form>
  )
}

export default Checkout