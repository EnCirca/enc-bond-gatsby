import React, { useEffect, useState } from "react";

const TldPricing = (props) => {
	// find price for this tld
	const [regPrice, setRegPrice] = useState("");
	const [renPrice, setRenPrice] = useState("");
	const [txrPrice, setTxrPrice] = useState("");
	const [shouldRender, setShouldRender] = useState(false);
	// hard coded to pricing partner for now
	let data = require('./cache/pricing_5bf423d00ca200154430dfb5.js');
	const pricingOtherPartners = ["5bf423d00ca200154430dfb5", "5f1f0282e4058e79b6803777"];
	if (props && props.partnerId && (pricingOtherPartners.indexOf(props.partnerId) !== -1)) {
		data = require('./cache/pricing_' + props.partnerId + '.js');
	}
	// runs once with this sytax
	useEffect(() => {
		let result, tld, registration = "", renewal = "", transfer = "";
		for (let i=0; i < data.pricing.results.length; i++) {
			result = data.pricing.results[i];
			for (let j=0; j < result.tlds.length; j++) {
				tld = result.tlds[j];
				if (tld && (tld.name === props.tld) && (result.type === 'Domain Order')) {
					if (result.price_sale) {
						registration = result.price_sale;
					} else {
						registration = result.price_regular;
					}
				}
				if (tld && (tld.name === props.tld) && (result.type === 'Domain Renewal')) {
					renewal = result.price_regular;
				}
				if (tld && (tld.name === props.tld) && (result.type === 'Domain Transfer')) {
					transfer = result.price_regular;
				}
			}
		}
		if (registration) {
			setRegPrice('<li>Registration: $' + registration + '</li>');
		}
		if (renewal) {
			setRenPrice('<li>Renewal: $' + renewal + '</li>');
		}
		if (transfer) {
			setTxrPrice('<li>Transfer: $' + transfer + '</li>');
		}
		setShouldRender(true);
	}, [props?.partnerId, props?.tld, data?.pricing?.results]);
	// return data
	return(
		<>
		{shouldRender ? (
			<>
			<div className="tld-price-list">
				<ul dangerouslySetInnerHTML={{__html: regPrice + renPrice + txrPrice }}></ul>
			</div>
			<div className="tld-price-list-prem-msg"><ul><li>Some domains may be premium or blocked.</li></ul></div>
			</>
		) : (<div className="tld-price-list-fetching">Fetching pricing ...</div>)}
		</>
	);
}

export default TldPricing