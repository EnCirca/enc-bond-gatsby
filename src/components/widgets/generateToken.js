import React, { useEffect } from "react";
import '../../css/widget.css';

const GenerateToken = (props) => {
  // runs once with this sytax
  useEffect(() => {
    // create script to embed widget only once
    let widget = document.getElementById("enc-generateToken-widget");
    if (!widget) {
      // main widget
      let scriptWidget = document.createElement('script');
      scriptWidget.id = "enc-generateToken-widget";
      scriptWidget.type = 'text/javascript';
      scriptWidget.async = true;
      let theUrl = process.env.ESB_URL + '/api/encirca/' + props.partnerId + '/widgets/generateToken';
      scriptWidget.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
      // embed placeholder
      let placeholder = document.getElementById("enc-generateToken-embed");
      if (placeholder) {
        placeholder.parentNode.insertBefore(scriptWidget, placeholder);
      }
    }
  }, [props?.partnerId]);
  // return rendered html
  return (
	  <div id="enc-generateToken-embed"></div>
  )
}

export default GenerateToken;
