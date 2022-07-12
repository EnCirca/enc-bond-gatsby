import React, { useState } from "react"
import getStripe from "../../utils/stripejs"

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "300px",
}

const buttonStyles = {
  display: "block",
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const price = new FormData(event.target).get("priceSelect")
    const watchTerms = new FormData(event.target).get("watchTerms")
    const custEmail = new FormData(event.target).get("custEmail")
    const stripe = await getStripe();
    // const stripe = require('stripe')('sk_test_51L3kYQAG5rO3KPKhSZiRvlPH4MiMGtzN88qOgfp1ftVucFz0gUeK0sYSXpK2buHVU5kVmbQS6xz85qJ28bmDRVxd00RuH8pXu7');
    
    // const session = await stripe.checkout.sessions.create({
    //   success_url: '/thank-you/',
    //   cancel_url: '/cancel/',
    //   lineItems: [{ price, quantity: 1 }],
    //   mode: 'payment',
    //   metadata: {
    //     "watch_terms" : watchTerms,
    //     "email" : custEmail,
    //   }
    // });
    


    const { error } = await stripe.redirectToCheckout({sessionId : 'cs_test_a1HAV9RYsGytcLof4w749LZJu1bydcdyGfVPUkFT4XATwugkVZcl4xqxOp'})

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <div style={cardStyles}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none" }}>
          <legend>
            <h4>{product.name}</h4>
          </legend>
          <label>
            Email: <input type="email" name="custEmail" />
          </label>
          <label>
            Customer Reference: <input type="text" name="custRef" />
          </label>
          <label>
            Watch Terms: <textarea name="watchTerms" />
          </label>
          <label>
            Price{" "}
            <select name="priceSelect">
              {product.prices.map(price => (
                <option key={price.id} value={price.id}>
                  {formatPrice(price.unit_amount, price.currency)}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
        <button
          disabled={loading}
          style={
            loading
              ? { ...buttonStyles, ...buttonDisabledStyles }
              : buttonStyles
          }
        >
          BUY ME
        </button>
      </form>
    </div>
  )
}

export default ProductCard