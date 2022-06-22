---
title: AltRoots Signup Request
thumbnail: "../../assets/default-content-image.jpg"
description: "AltRoots Watch Form"
pageType: "page"
---

<h3>Launching July 15. Sign-up to receive alert.</h3>
<form action="/thank-you/" data-netlify-recaptcha="true" class="enc-form" name="watch-form" id="watch-form" method="POST" data-netlify="true" netlify>
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
    <small>Please enter up to 10 trademarks for a free status report.</small><br />
    <textarea name="watch-terms" required="true" ></textarea></label>
  </div>
  <div>
    <div data-netlify-recaptcha="true"></div>
    <button type="submit">Send</button>
  </div>
</form>