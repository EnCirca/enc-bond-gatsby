import React, { useEffect } from "react";
import WidgetSpinner from "../widgetSpinner";
import '../../css/widget.css';

const TransferDomainBulk = (props) => {
  // runs once with this sytax
  useEffect(() => {
    // create script to embed widget only once
    let widget = document.getElementById("enc-transferDomainBulk-widget");
    if (!widget) {
      // main widget
      let scriptWidget = document.createElement('script');
      scriptWidget.id = "enc-transferDomainBulk-widget";
      scriptWidget.type = 'text/javascript';
      scriptWidget.async = true;
      let theUrl = process.env.ESB_URL + '/api/encirca/' + props.partnerId + '/widgets/transferDomainBulk';
      scriptWidget.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
      // embed placeholder
      let placeholder = document.getElementById("enc-transferDomainBulk-embed");
      if (placeholder) {
        placeholder.parentNode.insertBefore(scriptWidget, placeholder);
      }
    }
  }, [props?.partnerId]);
  // return rendered html
  return (
	  <div id="enc-transferDomainBulk-embed">
      <WidgetSpinner align="left" />
    </div>
  )
}

export default TransferDomainBulk;