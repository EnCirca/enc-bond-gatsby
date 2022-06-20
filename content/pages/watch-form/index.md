---
title: Watch Form
thumbnail: "../../assets/default-content-image.jpg"
description: "AltRoots Watch Form"
pageType: "page"
---

<form class="enc-form" name="watch-form" id="watch-form" method="POST" data-netlify="true" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" required="true" /></label>
  </p>
  <p>
    <label>Company Name: <input type="text" name="company-name" /></label>
  </p>
  <p>
    <label>Email Address: <input type="email" name="email" required="true" /></label>
    <small>A corporate email address must be used, not Gmail, Hotmail, Yahoo etc...</small>
  </p>
  <p>
    <label>Watch Terms: <textarea name="watch-terms" required="true" ></textarea></label>
  </p>
  <p>
    <div data-netlify-recaptcha="true"></div>
    <button type="submit">Send</button>
  </p>
</form>