import React, { useEffect } from "react";

const EncHelper = () => {
  useEffect(() => {
    
    const notAllowed = ["gmail.com", "msn.com", "aol.com", "yahoo.com", "mac.com", "hotmail.com", "icloud.com"]
    const rmiInput = document.getElementById('more-info-company')
    if (rmiInput && rmiInput !== 'undefined') {
      rmiInput.addEventListener('keyup', (e) => {
        notAllowed.forEach(addy => {
          if (rmiInput.value.includes(addy)) {
            rmiInput.value = rmiInput.value.replace(addy, '')
          }
        })
      })
    }

  }, []);
  return (
	  <div></div>
  )
}

export default EncHelper;
