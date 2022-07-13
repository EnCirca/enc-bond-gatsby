import React, { useState } from "react"
import getStripe from "../utils/stripejs"
import axios from "axios"
import styles from "./checkout.module.css" 

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    const watchTerms = new FormData(event.target).get("watchTerms")
    const custEmail = new FormData(event.target).get("custEmail")
    const custRef = new FormData(event.target).get("custRef")
    const stripe = await getStripe();
    const session = await axios.post('http://localhost:4000/stripeCreateSession', {
      "success_url": "http://altroots.com/thank-you/",
      "cancel_url": "http://altroots.com/watch/",
      "metadata": {
        "watch_terms": watchTerms,
        "cust_email": custEmail,
        "client_ref": custRef,
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

  return (
    <div className={styles.watchFormContainer}>
    <form onSubmit={handleSubmit} className="enc-form">
      <div>
        <label>
        Email<br />
        <small>Enter your company email address. Shared email addresses from google, yahoo etc. can not be used.</small><br />
        <input id="cust-email-input" type="email" name="custEmail" />
        </label> 
      </div>
      <div>
        <label>
          Customer Reference<br />
          <small>Enter a client reference number help track your search report internally.</small><br />
          <input id="cust-ref-input" type="text" name="custRef" />
        </label>
      </div>
      <div>
        <label>
        Watch Terms<br />
        <small>Enter a single brand name or word you would like us to search.</small><br />
        <input id="watch-term-input" type="text" name="watchTerms" />
        </label>
      </div>
      <div>
      <button disabled={loading}>Start Watching</button>
      </div>
    </form>
    </div>
  )
}

export default Checkout