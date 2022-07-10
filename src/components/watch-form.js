import React from "react"
import styles from "./watch-form.module.css"
import ReCAPTCHA from "react-google-recaptcha"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const WatchForm = () => {

    const processForm = () => {
        console.log('processing');
    }

    return (
        <div id="encirca-watch-form" className={styles.watchform}>
            <form 
                name="enc-watch-form" 
                method="POST" 
                id="enc-watch-form" 
                data-netlify="true" 
                data-netlify-recaptcha="true"
                action="/thank-you"
                onSubmit={processForm}
            >
                <input type="hidden" name="form-name" value="enc-watch-form" />
                <div>
                    <label>
                        Full Name:<br />
                        <input type="text" name="name" required="true" />
                    </label>
                </div>
                <div>
                    <label>
                        Company Website:<br />
                        <input type="text" name="company-name" />
                    </label>
                </div>
                <div>
                    <label>
                        Work Email:<br />
                        <small>Work Email domain must match company website domain. Free or disposable email addresses are not allowed.</small><br />
                        <input type="email" name="email" required="true" />
                    </label>
                </div>
                <div>
                    <label>
                        Watch Terms (optional):<br />
                        <small>Please enter up to 10 trademarks for a free status report.</small><br />
                        <textarea name="watch-terms" required="true" ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="webinar-schedule-request" />
                        Send me your webinar schedule
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="terms-read" />
                        I have read the <a rel="noreferrer" target="_blank" href="https://www.encirca.com/terms">terms of service</a>.
                    </label>
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