import React from "react"
import styles from "./watch-form.module.css"
import { navigate } from "gatsby"

const WatchForm = () => {

    function encode(data) {
        return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }

    const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
        "form-name": event.target.getAttribute("name"),
        // eslint-disable-next-line no-restricted-globals
        ...name,
        }),
    })
        .then(() => navigate("/thank-you/"))
        .catch((error) => alert(error));
    };
 
    return (
        <div id="encirca-watch-form" className={styles.watchform}>
            <form 
                class="enc-form" 
                name="watch-form"  
                id="watch-form"  
                method="POST" 
                onSubmit={handleSubmit} 
                data-netlify-recaptcha="true" 
                netlify 
            >
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
                <div data-netlify-recaptcha="true"></div>
                <button type="submit">Send</button>
            </div>
            </form>
        </div>
    )
}

export default WatchForm