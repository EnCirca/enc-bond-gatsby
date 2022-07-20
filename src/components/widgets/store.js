import React, { useEffect } from "react";
import '../../css/widget.css';

const Store = (props) => {
  // runs once with this sytax
  useEffect(() => {
    // create script to embed widget only once
    let widget = document.getElementById("enc-store-widget");
    if (!widget) {
      // main widget
      let scriptWidget = document.createElement('script');
      scriptWidget.id = "enc-store-widget";
      scriptWidget.type = 'text/javascript';
      scriptWidget.async = true;
      let theUrl = process.env.ESB_URL + '/api/encirca/' + props.partnerId + '/widgets/store';
      scriptWidget.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
      // embed placeholder
      let placeholder = document.getElementById("enc-store-embed");
      if (placeholder) {
        placeholder.parentNode.insertBefore(scriptWidget, placeholder);
      }
    }
  }, [props?.partnerId]);
  // return rendered html
  return (
	  <div id="enc-store-embed"></div>
  )
}

export default Store;
