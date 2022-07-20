import React, { useEffect } from "react";

const CheckDomain = (props) => {
  // runs once with this sytax
  useEffect(() => {
    // widget options
    if (props?.defaultTld) {
      window.encWidgetTldDefault = props.defaultTld;
    }
    if (props?.tldSuggestions) {
      if (props.tldSuggestions === "false" || props.tldSuggestions === "FALSE" || props.tldSuggestions === false) {
        window.encWidgetTldSuggestions = false;
      } else {
        window.encWidgetTldSuggestions = props.tldSuggestions;
      }
    }
    // create script to embed widget only once
    let widget = document.getElementById("enc-checkDomain-widget");
    if (!widget) {
      // main widget
      let scriptWidget = document.createElement('script');
      scriptWidget.id = "enc-checkDomain-widget";
      scriptWidget.type = 'text/javascript';
      scriptWidget.async = true;
      let theUrl = process.env.ESB_URL + '/api/encirca/' + props.partnerId + '/widgets/checkDomain';
      scriptWidget.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
      // embed placeholder
      let placeholder = document.getElementById("enc-checkDomain-embed");
      if (placeholder) {
        placeholder.parentNode.insertBefore(scriptWidget, placeholder);
      }
    }
  }, [props?.partnerId, props?.defaultTld, props?.tldSuggestions]);
  // return rendered html
  return (
    <div id="enc-checkDomain-embed"></div>
  )
}

export default CheckDomain;
