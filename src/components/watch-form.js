import React from "react"
import styles from "./watch-form.module.css"
import ReCAPTCHA from "react-google-recaptcha"

const WatchForm = () => {

    return (
        <div id="encirca-watch-form" className={styles.watchform}>
            <form 
                name="enc-watch-form" 
                method="POST" 
                id="enc-watch-form" 
                data-netlify="true" 
                data-netlify-recaptcha="true"
                action="/thank-you"
            >
            <input type="hidden" name="form-name" value="enc-watch-form" />
            <div>
                <label>Your Name:<br /><input type="text" name="name" required="true" /></label>
            </div>
            <div>
                <label>Company Name:<br /><input type="text" name="company-name" /></label>
            </div>
            <div>
                <label>Email Address:<br />
                <small>A corporate email address must be used, not Gmail, Hotmail, Yahoo etc...</small><br />
                <input type="email" name="email" required="true" /></label>
            </div>
            <div>
                <label>Watch Terms:<br />
                <small>Please enter the words or brand names you want us to watch. For example: acme, kleenex, ibm etc...</small><br />
                <textarea name="watch-terms" required="true" ></textarea></label>
            </div>
            <div>
                <ReCAPTCHA sitekey="6LcBENYgAAAAABttHtD7kvkByQKqlV7KSZy9zEqB" />
                <button type="submit">Send</button>
            </div>
            <input type="hidden" name="form-name" value="watch-form" />
            </form>
        </div>
    )
}

export default WatchForm