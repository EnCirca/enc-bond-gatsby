import React, { useEffect } from "react";
import '../../css/widget.css';


const Pricing = (props) => {
  // runs once with this sytax
  useEffect(() => {
    // create script to embed widget only once
    let widget = document.getElementById("enc-pricing-widget");
    if (!widget) {
      // main widget
      let scriptWidget = document.createElement('script');
      scriptWidget.id = "enc-pricing-widget";
      scriptWidget.type = 'text/javascript';
      scriptWidget.async = true;
      let theUrl = process.env.ESB_URL + '/api/encirca/' + props.partnerId + '/widgets/pricing';
      scriptWidget.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
      // embed placeholder
      let placeholder = document.getElementById("enc-pricing-embed");
      if (placeholder) {
        placeholder.parentNode.insertBefore(scriptWidget, placeholder);
      }
    }
  }, [props?.partnerId]);
  // return rendered html
  return (
	  <div id="enc-pricing-embed"></div>
  )
}

export default Pricing;
