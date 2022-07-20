import React, { useEffect } from "react";
import '../../css/widget.css';

const Portfolio = (props) => {
  // runs once with this sytax
  useEffect(() => {
    // create script to embed widget only once
    let widget = document.getElementById("enc-portfolio-widget");
    if (!widget) {
      // main widget
      let scriptWidget = document.createElement('script');
      scriptWidget.id = "enc-portfolio-widget";
      scriptWidget.type = 'text/javascript';
      scriptWidget.async = true;
      let theUrl = process.env.ESB_URL + '/api/encirca/' + props.partnerId + '/widgets/portfolio';
      scriptWidget.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
      // embed placeholder
      let placeholder = document.getElementById("enc-portfolio-embed");
      if (placeholder) {
        placeholder.parentNode.insertBefore(scriptWidget, placeholder);
      }
    }
  }, [props?.partnerId]);
  // return rendered html
  return (
	  <div id="enc-portfolio-embed"></div>
  )
}

export default Portfolio;
