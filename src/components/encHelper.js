import React, { useEffect } from "react";

const EncHelper = () => {
  useEffect(() => {

    //scripts added to document head
    let HDScript = document.createElement('script');
    HDScript.src= 'https://identity.netlify.com/v1/netlify-identity-widget.js'
    document.getElementsByTagName('head')[0].appendChild(HDScript);
    
  }, []);
  return (
	  <div></div>
  )
}

export default EncHelper;
