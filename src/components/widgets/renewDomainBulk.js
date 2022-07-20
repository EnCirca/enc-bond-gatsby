import React, { useEffect } from "react";
import WidgetSpinner from "../widgetSpinner";
import '../../css/widget.css';

const RenewDomainBulk = (props) => {
  // runs once with this sytax
  useEffect(() => {
    // create script to embed widget only once
    let widget = document.getElementById("enc-renewDomainBulk-widget");
    let placeholder = document.getElementById("enc-renewDomainBulk-embed");
    if (!widget) {
      // main widget
      let scriptWidget = document.createElement('script');
      scriptWidget.id = "enc-renewDomainBulk-widget";
      scriptWidget.type = 'text/javascript';
      scriptWidget.async = true;<i icon="fa-solid fa-circle-notch" />
      let theUrl = process.env.ESB_URL + '/api/encirca/' + props.partnerId + '/widgets/renewDomainBulk';
      scriptWidget.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
      // embed placeholder
      if (placeholder) {
        placeholder.parentNode.insertBefore(scriptWidget, placeholder);
      }
    }
  }, [props?.partnerId]);
  // return rendered html
  return (
    <div id="enc-renewDomainBulk-embed">
      <WidgetSpinner align="left" />
    </div>
  )
}

export default RenewDomainBulk;
