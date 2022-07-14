import React, { useState, useEffect } from "react"
import getStripe from "../utils/stripejs"
import axios from "axios"
import styles from "./checkout.module.css"

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    let canSubmit = true;
    
    const watchInput = document.getElementById('watch-term-input')
    const watchInputError = document.getElementById('watch-term-input-error')
    const custRefInput = document.getElementById('cust-ref-input')
    const custRefInputError = document.getElementById('cust-ref-input-error')
    const termsCheck = document.getElementById('terms-check')
    const termsCheckError = document.getElementById('terms-check-error')
    const watchTerms = new FormData(event.target).get("watchTerms")
    const custEmail = new FormData(event.target).get("custEmail")
    const custRef = new FormData(event.target).get("custRef")
    const stripe = await getStripe()

    watchInputError.style.display = 'none'
    watchInputError.style.borderColor = '#ddd'
    watchInputError.style.borderWidth = '1px'

    custRefInputError.style.display = 'none'
    custRefInputError.style.borderColor = '#ddd'
    custRefInputError.style.borderWidth = '1px'
    
    termsCheckError.style.display = 'none'

    if (custRefInput.value.length === 0) { 
      custRefInput.style.borderColor = 'red';
      custRefInput.style.borderWidth = '3px';
      custRefInputError.style.display = 'block';
      canSubmit = false;
      setLoading(false);
    }

    if (watchInput.value.length === 0) { 
      watchInput.style.borderColor = 'red';
      watchInput.style.borderWidth = '3px';
      watchInputError.style.display = 'block';
      canSubmit = false;
      setLoading(false);
    }

    if (!termsCheck.checked) {
      termsCheckError.style.display = 'block';
      canSubmit = false;
      setLoading(false);
    }
    
    const session = await axios.post(process.env.GATSBY_SESSION_DOMAIN + '/stripeCreateSession', {
      "success_url": "http://altroots.com/success/",
      "cancel_url": "http://altroots.com/watch/",
      "metadata": {
        "watch_terms": watchTerms,
        "cust_email": custEmail,
        "client_ref": custRef,
      },
      "line_items": [{ price: process.env.GATSBY_SINGLE_EXACT_SEARCH_PRODUCT, quantity: 1 }],
      
      "mode": "payment",
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
    console.log(canSubmit, 'still false');
    if(canSubmit) {
      const { error } = await stripe.redirectToCheckout(session.data)
      if (error) {
        console.warn("Error:", error)
        setLoading(false)
      }
    }

  }

  useEffect(() => {
    //do not allow spaces
    const watchInput = document.getElementById('watch-term-input')
    const custEmailInput = document.getElementById('cust-email-input')
    const notAllowed = ['Space', 'Comma', 'Colon', 'Semicolon']
    const emailNotAllowed = ["gmail.com", "msn.com", "aol.com", "yahoo.com", "mac.com", "hotmail.com", "icloud.com"]
    watchInput.addEventListener('keyup', (e) => {
      let keyedCode = e.code;
      if (notAllowed.includes(keyedCode)) {
        watchInput.value = watchInput.value.slice(0,-1)
      }
    })
    custEmailInput.addEventListener('keyup', (e) => {
      emailNotAllowed.forEach(addy => {
        if (custEmailInput.value.includes(addy)) {
          custEmailInput.value = custEmailInput.value.replace(addy, '')
        }
      })
    })
  }, []);
  return (
    <div className={styles.watchFormContainer}>
    <form onSubmit={handleSubmit} className="enc-form" id="watch-single-exact-form">
      <div>
        <label>
          <strong>Email</strong><br />
          <small>Enter your company email address. Shared email addresses from google, yahoo etc. can not be used.</small><br />
          <input id="cust-email-input" type="email" name="custEmail" />
        </label> 
      </div>
      <div>
        <label>
          <strong>Customer Reference</strong><br />
          <span id="cust-ref-input-error" className={styles.inputError} style={{color:'red', display:'none'}}>ERROR:Customer Reference Must Not Be Empty.</span>
          <small>Enter a client reference number help track your search report internally.</small><br />
          <input id="cust-ref-input" type="text" name="custRef" maxLength="100" />
        </label>
      </div>
      <div>
        <label>
          <strong>Watch Term</strong><br />
          <span id="watch-term-input-error" className={styles.inputError} style={{color:'red', display:'none'}}>ERROR:Watch Term Must Not Be Empty.</span>
          <small>Enter a single brand name or word you would like us to search.</small><br />
          <input id="watch-term-input" type="text" name="watchTerms" maxLength="100" />
        </label>
      </div>
      <div>
        <label>
        <span id="terms-check-error" className={styles.inputError} style={{color:'red', display:'none'}}>ERROR:You Must Agree To The Terms Of Service</span>
          <input type="checkbox" name="terms-check" id="terms-check" value="1" />I agree to the <a href="https://altroots.com/terms/">Terms Of Service.</a>
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