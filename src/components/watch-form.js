import React from "react"
import styles from "./watch-form.module.css"

const WatchForm = ({}) => {

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
                netlify
            >
            <div>
                <label>Your Name:<br /><input type="text" name="name" required="true" /></label>
            </div>
            <div>
                <label>Company Name:<br /><input type="text" name="company-name" /></label>
            </div>
            <div>
                <label>Email Address:<br /><input type="email" name="email" required="true" /></label>
                <small>A corporate email address must be used, not Gmail, Hotmail, Yahoo etc...</small>
            </div>
            <div>
                <label>Watch Terms:<br /><textarea name="watch-terms" required="true" ></textarea></label>
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