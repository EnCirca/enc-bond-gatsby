import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import shareImage from "../../content/assets/default-content-image.jpg"
import CheckDomain from "../components/widgets/checkDomain"


const Watch = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const siteUrl = data.site.siteMetadata.siteUrl
  const handleChange = (e) => {
    window.location.replace(e.target.value);
  }
  return (
    <div>
      <SEO title="Welcome" description={siteDescription} image={siteUrl + shareImage} url={siteUrl + "/"} />
      <Layout>
        <div id="bond-check-container">
          <div id="bond-left">
            <CheckDomain partnerId="62e14223d4c9c41e47688e00" defaultTld="bond" tldSuggestions="" />
            <div>
              <h2>.bond is where the ﬁnancial and online worlds meet</h2>
              <p>
                This premium domain extension is ideal for ﬁnancial service providers, advisers, and investors. .bond links clients to the experts they are looking for, reinforcing a trusted and stable ﬁnancial solution.
              </p>
              <p>
              Using a .bond domain extension sends strong and positive connotations to your visitors and reinforces the beneﬁts clients will receive when working with your ﬁrm. .bond also doubles up as a meaningful extension for those who wish to use it to highlight the special bonds that they have with friends and family.
              </p>
            </div>
          </div>
          <div id="bond-right">
            <h5>Click to discover available premium .bond names.</h5>
				    <div>
              <select onChange={handleChange}>
                <option value="https://getmy.bond/?domain=a1.bond">a1.bond $768</option>
                <option value="https://getmy.bond/?domain=aaa.bond">aaa.bond $768</option>
                <option value="https://getmy.bond/?domain=about.bond">about.bond $384</option>
                <option value="https://getmy.bond/?domain=account.bond">account.bond $384  </option>
                <option value="https://getmy.bond/?domain=accountancy.bond">accountancy.bond $768  </option>
                <option value="https://getmy.bond/?domain=accounting.bond">accounting.bond $768  </option>
                <option value="https://getmy.bond/?domain=acquire.bond">acquire.bond $384  </option>
                <option value="https://getmy.bond/?domain=across.bond">across.bond $768  </option>
                <option value="https://getmy.bond/?domain=action.bond">action.bond $768  </option>
                <option value="https://getmy.bond/?domain=ad.bond">ad.bond $768  </option>
                <option value="https://getmy.bond/?domain=ada.bond">ada.bond $768  </option>
                <option value="https://getmy.bond/?domain=adams.bond">adams.bond $768  </option>
                <option value="https://getmy.bond/?domain=adblocker.bond">adblocker.bond $768  </option>
                <option value="https://getmy.bond/?domain=add.bond">add.bond $768  </option>
                <option value="https://getmy.bond/?domain=adjust.bond">adjust.bond $384  </option>
                <option value="https://getmy.bond/?domain=adult.bond">adult.bond $768  </option>
                <option value="https://getmy.bond/?domain=adventure.bond">adventure.bond $768  </option>
                <option value="https://getmy.bond/?domain=advertise.bond">advertise.bond $768  </option>
                <option value="https://getmy.bond/?domain=affiliate.bond">affiliate.bond $768  </option>
                <option value="https://getmy.bond/?domain=agenda.bond">agenda.bond $768  </option>
                <option value="https://getmy.bond/?domain=agent.bond">agent.bond $768  </option>
                <option value="https://getmy.bond/?domain=air.bond">air.bond $768  </option>
                <option value="https://getmy.bond/?domain=airline.bond">airline.bond $768  </option>
                <option value="https://getmy.bond/?domain=airlines.bond">airlines.bond $768  </option>
                <option value="https://getmy.bond/?domain=american.bond">american.bond $768  </option>
                <option value="https://getmy.bond/?domain=analyst.bond">analyst.bond $384  </option>
                <option value="https://getmy.bond/?domain=analyze.bond">analyze.bond $384  </option>
                <option value="https://getmy.bond/?domain=anonymous.bond">anonymous.bond $768  </option>
                <option value="https://getmy.bond/?domain=appliance.bond">appliance.bond $768  </option>
                <option value="https://getmy.bond/?domain=apps.bond">apps.bond $768  </option>
                <option value="https://getmy.bond/?domain=auction.bond">auction.bond $768  </option>
                <option value="https://getmy.bond/?domain=auctions.bond">auctions.bond $768  </option>
                <option value="https://getmy.bond/?domain=auto.bond">auto.bond $768  </option>
                <option value="https://getmy.bond/?domain=autoauction.bond">autoauction.bond $768  </option>
                <option value="https://getmy.bond/?domain=autocare.bond">autocare.bond $768  </option>
                <option value="https://getmy.bond/?domain=autocenter.bond">autocenter.bond $768  </option>
                <option value="https://getmy.bond/?domain=autoinsurance.bond">autoinsurance.bond $48  </option>
                <option value="https://getmy.bond/?domain=autos.bond">autos.bond $768  </option>
                <option value="https://getmy.bond/?domain=bad.bond">bad.bond $768  </option>
                <option value="https://getmy.bond/?domain=bank.bond">bank.bond $768  </option>
                <option value="https://getmy.bond/?domain=banker.bond">banker.bond $384  </option>
                <option value="https://getmy.bond/?domain=bankers.bond">bankers.bond $384  </option>
                <option value="https://getmy.bond/?domain=banking.bond">banking.bond $768  </option>
                <option value="https://getmy.bond/?domain=banks.bond">banks.bond $768  </option>
                <option value="https://getmy.bond/?domain=benefit.bond">benefit.bond $384  </option>
                <option value="https://getmy.bond/?domain=benefits.bond">benefits.bond $768  </option>
                <option value="https://getmy.bond/?domain=bespoke.bond">bespoke.bond $768  </option>
                <option value="https://getmy.bond/?domain=bet.bond">bet.bond $768  </option>
                <option value="https://getmy.bond/?domain=bets.bond">bets.bond $768  </option>
                <option value="https://getmy.bond/?domain=betting.bond">betting.bond $768  </option>
                <option value="https://getmy.bond/?domain=bettingodds.bond">bettingodds.bond $768  </option>
                <option value="https://getmy.bond/?domain=billpay.bond">billpay.bond $384  </option>
                <option value="https://getmy.bond/?domain=bills.bond">bills.bond $384  </option>
                <option value="https://getmy.bond/?domain=bitcoins.bond">bitcoins.bond $768  </option>
                <option value="https://getmy.bond/?domain=bitpay.bond">bitpay.bond $768  </option>
                <option value="https://getmy.bond/?domain=biz.bond">biz.bond $768  </option>
                <option value="https://getmy.bond/?domain=blockchain.bond">blockchain.bond $768  </option>
                <option value="https://getmy.bond/?domain=broker.bond">broker.bond $768  </option>
                <option value="https://getmy.bond/?domain=brokers.bond">brokers.bond $768  </option>
                <option value="https://getmy.bond/?domain=businessbroker.bond">businessbroker.bond $48  </option>
                <option value="https://getmy.bond/?domain=businesscapital.bond">businesscapital.bond $48  </option>
                <option value="https://getmy.bond/?domain=businesscard.bond">businesscard.bond $48  </option>
                <option value="https://getmy.bond/?domain=businesscards.bond">businesscards.bond $48  </option>
                <option value="https://getmy.bond/?domain=businessclass.bond">businessclass.bond $48  </option>
                <option value="https://getmy.bond/?domain=businesscloud.bond">businesscloud.bond $48  </option>
                <option value="https://getmy.bond/?domain=businesscreators.bond">businesscreators.bond $48  </option>
                <option value="https://getmy.bond/?domain=businessdeals.bond">businessdeals.bond $48  </option>
                <option value="https://getmy.bond/?domain=businessdirect.bond">businessdirect.bond $48  </option>
                <option value="https://getmy.bond/?domain=businessfinance.bond">businessfinance.bond $48  </option>
                <option value="https://getmy.bond/?domain=businessinsider.bond">businessinsider.bond $48  </option>
                <option value="https://getmy.bond/?domain=businessloans.bond">businessloans.bond $48  </option>
                <option value="https://getmy.bond/?domain=businessowners.bond">businessowners.bond $48  </option>
                <option value="https://getmy.bond/?domain=businesspartner.bond">businesspartner.bond $48  </option>
                <option value="https://getmy.bond/?domain=businessplan.bond">businessplan.bond $48  </option>
                <option value="https://getmy.bond/?domain=businessplans.bond">businessplans.bond $48  </option>
                <option value="https://getmy.bond/?domain=businessservices.bond">businessservices.bond $48  </option>
                <option value="https://getmy.bond/?domain=businessworld.bond">businessworld.bond $48  </option>
                <option value="https://getmy.bond/?domain=cache.bond">cache.bond $768  </option>
                <option value="https://getmy.bond/?domain=card.bond">card.bond $768  </option>
                <option value="https://getmy.bond/?domain=cards.bond">cards.bond $768  </option>
                <option value="https://getmy.bond/?domain=cars.bond">cars.bond $768  </option>
                <option value="https://getmy.bond/?domain=cashback.bond">cashback.bond $768  </option>
                <option value="https://getmy.bond/?domain=cashpoint.bond">cashpoint.bond $768  </option>
                <option value="https://getmy.bond/?domain=casinogames.bond">casinogames.bond $768  </option>
                <option value="https://getmy.bond/?domain=casinos.bond">casinos.bond $768  </option>
                <option value="https://getmy.bond/?domain=center.bond">center.bond $768  </option>
                <option value="https://getmy.bond/?domain=central.bond">central.bond $768  </option>
                <option value="https://getmy.bond/?domain=cheapcars.bond">cheapcars.bond $768  </option>
                <option value="https://getmy.bond/?domain=cheaphotels.bond">cheaphotels.bond $768  </option>
                <option value="https://getmy.bond/?domain=check.bond">check.bond $768  </option>
                <option value="https://getmy.bond/?domain=city.bond">city.bond $768  </option>
                <option value="https://getmy.bond/?domain=coin.bond">coin.bond $768  </option>
                <option value="https://getmy.bond/?domain=commerce.bond">commerce.bond $768  </option>
                <option value="https://getmy.bond/?domain=commercial.bond">commercial.bond $768  </option>
                <option value="https://getmy.bond/?domain=communicate.bond">communicate.bond $768  </option>
                <option value="https://getmy.bond/?domain=compare.bond">compare.bond $768  </option>
                <option value="https://getmy.bond/?domain=compliance.bond">compliance.bond $768  </option>
                <option value="https://getmy.bond/?domain=compre.bond">compre.bond $768  </option>
                <option value="https://getmy.bond/?domain=computer.bond">computer.bond $768  </option>
                <option value="https://getmy.bond/?domain=connect.bond">connect.bond $768  </option>
                <option value="https://getmy.bond/?domain=consignment.bond">consignment.bond $768  </option>
                <option value="https://getmy.bond/?domain=consulting.bond">consulting.bond $768  </option>
                <option value="https://getmy.bond/?domain=coop.bond">coop.bond $768  </option>
                <option value="https://getmy.bond/?domain=corporation.bond">corporation.bond $768  </option>
                <option value="https://getmy.bond/?domain=coupons.bond">coupons.bond $768  </option>
                <option value="https://getmy.bond/?domain=credit.bond">credit.bond $768  </option>
                <option value="https://getmy.bond/?domain=creditos.bond">creditos.bond $768  </option>
                <option value="https://getmy.bond/?domain=credits.bond">credits.bond $768  </option>
                <option value="https://getmy.bond/?domain=crisis.bond">crisis.bond $768  </option>
                <option value="https://getmy.bond/?domain=crowdfund.bond">crowdfund.bond $768  </option>
                <option value="https://getmy.bond/?domain=cruise.bond">cruise.bond $768  </option>
                <option value="https://getmy.bond/?domain=cruises.bond">cruises.bond $768  </option>
                <option value="https://getmy.bond/?domain=custom.bond">custom.bond $768  </option>
                <option value="https://getmy.bond/?domain=customer.bond">customer.bond $768  </option>
                <option value="https://getmy.bond/?domain=cyber.bond">cyber.bond $768  </option>
                <option value="https://getmy.bond/?domain=cybermonday.bond">cybermonday.bond $768  </option>
                <option value="https://getmy.bond/?domain=data.bond">data.bond $768  </option>
                <option value="https://getmy.bond/?domain=databank.bond">databank.bond $768  </option>
                <option value="https://getmy.bond/?domain=dealer.bond">dealer.bond $768  </option>
                <option value="https://getmy.bond/?domain=deals.bond">deals.bond $768  </option>
                <option value="https://getmy.bond/?domain=debt.bond">debt.bond $768  </option>
                <option value="https://getmy.bond/?domain=deposit.bond">deposit.bond $768  </option>
                <option value="https://getmy.bond/?domain=diamonds.bond">diamonds.bond $768  </option>
                <option value="https://getmy.bond/?domain=discount.bond">discount.bond $768  </option>
                <option value="https://getmy.bond/?domain=discover.bond">discover.bond $768  </option>
                <option value="https://getmy.bond/?domain=discoverecommerce.bond">ecommerce.bond $768  </option>
                <option value="https://getmy.bond/?domain=employment.bond">employment.bond $768  </option>
                <option value="https://getmy.bond/?domain=enterprise.bond">enterprise.bond $768  </option>
                <option value="https://getmy.bond/?domain=enterprize.bond">enterprize.bond $768  </option>
                <option value="https://getmy.bond/?domain=event.bond">event.bond $768  </option>
                <option value="https://getmy.bond/?domain=events.bond">events.bond $768  </option>
                <option value="https://getmy.bond/?domain=exchange.bond">exchange.bond $768  </option>
                <option value="https://getmy.bond/?domain=expertcapital.bond">expertcapital.bond $48  </option>
                <option value="https://getmy.bond/?domain=expertise.bond">expertise.bond $768  </option>
                <option value="https://getmy.bond/?domain=expertsolutions.bond">expertsolutions.bond $48  </option>
                <option value="https://getmy.bond/?domain=finance.bond">finance.bond $768  </option>
                <option value="https://getmy.bond/?domain=finances.bond">finances.bond $96  </option>
                <option value="https://getmy.bond/?domain=financial.bond">financial.bond $768  </option>
                <option value="https://getmy.bond/?domain=financials.bond">financials.bond $96  </option>
                <option value="https://getmy.bond/?domain=financing.bond">financing.bond $768  </option>
                <option value="https://getmy.bond/?domain=forsale.bond">forsale.bond $768  </option>
                <option value="https://getmy.bond/?domain=forum.bond">forum.bond $768  </option>
                <option value="https://getmy.bond/?domain=forums.bond">forums.bond $768  </option>
                <option value="https://getmy.bond/?domain=gambling.bond">gambling.bond $768  </option>
                <option value="https://getmy.bond/?domain=game.bond">game.bond $768  </option>
                <option value="https://getmy.bond/?domain=games.bond">games.bond $768  </option>
                <option value="https://getmy.bond/?domain=green.bond">green.bond $768  </option>
                <option value="https://getmy.bond/?domain=happyinvestors.bond">happyinvestors.bond $48  </option>
                <option value="https://getmy.bond/?domain=have.bond">have.bond $48  </option>
                <option value="https://getmy.bond/?domain=help.bond">help.bond $48  </option>
                <option value="https://getmy.bond/?domain=highend.bond">highend.bond $768  </option>
                <option value="https://getmy.bond/?domain=highstreet.bond">highstreet.bond $768  </option>
                <option value="https://getmy.bond/?domain=homebusiness.bond">homebusiness.bond $48  </option>
                <option value="https://getmy.bond/?domain=homes.bond">homes.bond $768  </option>
                <option value="https://getmy.bond/?domain=homesforsale.bond">homesforsale.bond $48  </option>
                <option value="https://getmy.bond/?domain=ibank.bond">ibank.bond $384  </option>
                <option value="https://getmy.bond/?domain=insure.bond">insure.bond $768  </option>
                <option value="https://getmy.bond/?domain=invest.bond">invest.bond $768  </option>
                <option value="https://getmy.bond/?domain=investing.bond">investing.bond $96  </option>
                <option value="https://getmy.bond/?domain=investinyourself.bond">investinyourself.bond $48  </option>
                <option value="https://getmy.bond/?domain=investment.bond">investment.bond $768  </option>
                <option value="https://getmy.bond/?domain=investmentbanking.bond">investmentbanking.bond $48  </option>
                <option value="https://getmy.bond/?domain=investmentnews.bond">investmentnews.bond $48  </option>
                <option value="https://getmy.bond/?domain=investmentproperty.bond">investmentproperty.bond $48  </option>
                <option value="https://getmy.bond/?domain=investornews.bond">investornews.bond $48  </option>
                <option value="https://getmy.bond/?domain=junk.bond">junk.bond $768  </option>
                <option value="https://getmy.bond/?domain=kredit.bond">kredit.bond $768  </option>
                <option value="https://getmy.bond/?domain=kredite.bond">kredite.bond $768  </option>
                <option value="https://getmy.bond/?domain=launch.bond">launch.bond $768  </option>
                <option value="https://getmy.bond/?domain=law.bond">law.bond $768  </option>
                <option value="https://getmy.bond/?domain=lawyer.bond">lawyer.bond $768  </option>
                <option value="https://getmy.bond/?domain=layaway.bond">layaway.bond $768  </option>
                <option value="https://getmy.bond/?domain=lease.bond">lease.bond $768  </option>
                <option value="https://getmy.bond/?domain=legal.bond">legal.bond $768  </option>
                <option value="https://getmy.bond/?domain=lend.bond">lend.bond $768  </option>
                <option value="https://getmy.bond/?domain=lending.bond">lending.bond $768  </option>
                <option value="https://getmy.bond/?domain=lottery.bond">lottery.bond $768  </option>
                <option value="https://getmy.bond/?domain=luxe.bond">luxe.bond $768  </option>
                <option value="https://getmy.bond/?domain=make.bond">make.bond $768  </option>
                <option value="https://getmy.bond/?domain=.mediabond">media.bond $768  </option>
                <option value="https://getmy.bond/?domain=mediainfo.bond">mediainfo.bond $768  </option>
                <option value="https://getmy.bond/?domain=mobile.bond">mobile.bond $768  </option>
                <option value="https://getmy.bond/?domain=mobilepay.bond">mobilepay.bond $768  </option>
                <option value="https://getmy.bond/?domain=mobilepro.bond">mobilepro.bond $768  </option>
                <option value="https://getmy.bond/?domain=mobilepros.bond">mobilepros.bond $768  </option>
                <option value="https://getmy.bond/?domain=money.bond">money.bond $768  </option>
                <option value="https://getmy.bond/?domain=moneyhub.bond">moneyhub.bond $768  </option>
                <option value="https://getmy.bond/?domain=my.bond">my.bond $768  </option>
                <option value="https://getmy.bond/?domain=myfastcash.bond">myfastcash.bond $96  </option>
                <option value="https://getmy.bond/?domain=myfinance.bond">myfinance.bond $96  </option>
                <option value="https://getmy.bond/?domain=myfinance.bond">myfinance.bond $96  </option>
                <option value="https://getmy.bond/?domain=myfinances.bond">myfinances.bond $96  </option>
                <option value="https://getmy.bond/?domain=myfinances.bond">myfinances.bond $96  </option>
                <option value="https://getmy.bond/?domain=myinsurance.bond">myinsurance.bond $96  </option>
                <option value="https://getmy.bond/?domain=network.bond">network.bond $768  </option>
                <option value="https://getmy.bond/?domain=next.bond">next.bond $768  </option>
                <option value="https://getmy.bond/?domain=offer.bond">offer.bond $768  </option>
                <option value="https://getmy.bond/?domain=offers.bond">offers.bond $768  </option>
                <option value="https://getmy.bond/?domain=office.bond">office.bond $768  </option>
                <option value="https://getmy.bond/?domain=online.bond">online.bond $768  </option>
                <option value="https://getmy.bond/?domain=onlinebanking.bond">onlinebanking.bond $48  </option>
                <option value="https://getmy.bond/?domain=onlinegames.bond">onlinegames.bond $768  </option>
                <option value="https://getmy.bond/?domain=onlinepoker.bond">onlinepoker.bond $768  </option>
                <option value="https://getmy.bond/?domain=onlineshops.bond">onlineshops.bond $768  </option>
                <option value="https://getmy.bond/?domain=only.bond">only.bond $768  </option>
                <option value="https://getmy.bond/?domain=.ownbond">own.bond $768  </option>
                <option value="https://getmy.bond/?domain=partners.bond">partners.bond $768  </option>
                <option value="https://getmy.bond/?domain=payment.bond">payment.bond $768  </option>
                <option value="https://getmy.bond/?domain=payments.bond">payments.bond $768  </option>
                <option value="https://getmy.bond/?domain=penny.bond">penny.bond $768  </option>
                <option value="https://getmy.bond/?domain=people.bond">people.bond $768  </option>
                <option value="https://getmy.bond/?domain=price.bond">price.bond $768  </option>
                <option value="https://getmy.bond/?domain=pro.bond">pro.bond $768  </option>
                <option value="https://getmy.bond/?domain=product.bond">product.bond $768  </option>
                <option value="https://getmy.bond/?domain=promotion.bond">promotion.bond $768  </option>
                <option value="https://getmy.bond/?domain=property.bond">property.bond $768  </option>
                <option value="https://getmy.bond/?domain=propertyinsurance.bond">propertyinsurance.bond $48  </option>
                <option value="https://getmy.bond/?domain=propertyinvestment.bond">propertyinvestment.bond $48  </option>
                <option value="https://getmy.bond/?domain=propertymanagement.bond">propertymanagement.bond $48  </option>
                <option value="https://getmy.bond/?domain=propertyowners.bond">propertyowners.bond $48  </option>
                <option value="https://getmy.bond/?domain=push.bond">push.bond $768  </option>
                <option value="https://getmy.bond/?domain=real.bond">real.bond $48  </option>
                <option value="https://getmy.bond/?domain=realty.bond">realty.bond $768  </option>
                <option value="https://getmy.bond/?domain=refinance.bond">refinance.bond $96  </option>
                <option value="https://getmy.bond/?domain=refinancing.bond">refinancing.bond $96  </option>
                <option value="https://getmy.bond/?domain=rental.bond">rental.bond $768  </option>
                <option value="https://getmy.bond/?domain=resales.bond">resales.bond $768  </option>
                <option value="https://getmy.bond/?domain=reserve.bond">reserve.bond $768  </option>
                <option value="https://getmy.bond/?domain=revenue.bond">revenue.bond $768  </option>
                <option value="https://getmy.bond/?domain=review.bond">review.bond $768  </option>
                <option value="https://getmy.bond/?domain=reviews.bond">reviews.bond $768  </option>
                <option value="https://getmy.bond/?domain=reward.bond">reward.bond $768  </option>
                <option value="https://getmy.bond/?domain=sale.bond">sale.bond $768  </option>
                <option value="https://getmy.bond/?domain=sales.bond">sales.bond $768  </option>
                <option value="https://getmy.bond/?domain=school.bond">school.bond $768  </option>
                <option value="https://getmy.bond/?domain=science.bond">science.bond $768  </option>
                <option value="https://getmy.bond/?domain=sell.bond">sell.bond $768  </option>
                <option value="https://getmy.bond/?domain=send.bond">send.bond $768  </option>
                <option value="https://getmy.bond/?domain=service.bond">service.bond $768  </option>
                <option value="https://getmy.bond/?domain=share.bond">share.bond $768  </option>
                <option value="https://getmy.bond/?domain=.skubond">sku.bond $768  </option>
                <option value="https://getmy.bond/?domain=smartinsurance.bond">smartinsurance.bond $48  </option>
                <option value="https://getmy.bond/?domain=smartinvesting.bond">smartinvesting.bond $48  </option>
                <option value="https://getmy.bond/?domain=smartinvestors.bond">smartinvestors.bond $48  </option>
                <option value="https://getmy.bond/?domain=smartproperty.bond">smartproperty.bond $48  </option>
                <option value="https://getmy.bond/?domain=speciality.bond">speciality.bond $768  </option>
                <option value="https://getmy.bond/?domain=specialized.bond">specialized.bond $768  </option>
                <option value="https://getmy.bond/?domain=start.bond">start.bond $768  </option>
                <option value="https://getmy.bond/?domain=.stockbond">stock.bond $768  </option>
                <option value="https://getmy.bond/?domain=stockbrokers.bond">stockbrokers.bond $48  </option>
                <option value="https://getmy.bond/?domain=stockexchange.bond">stockexchange.bond $48  </option>
                <option value="https://getmy.bond/?domain=stockmarket.bond">stockmarket.bond $768  </option>
                <option value="https://getmy.bond/?domain=stocks.bond">stocks.bond $768  </option>
                <option value="https://getmy.bond/?domain=stocktrading.bond">stocktrading.bond $48  </option>
                <option value="https://getmy.bond/?domain=store.bond">store.bond $768  </option>
                <option value="https://getmy.bond/?domain=submit.bond">submit.bond $768  </option>
                <option value="https://getmy.bond/?domain=subscribe.bond">subscribe.bond $768  </option>
                <option value="https://getmy.bond/?domain=tax.bond">tax.bond $768  </option>
                <option value="https://getmy.bond/?domain=team.bond">team.bond $768  </option>
                <option value="https://getmy.bond/?domain=tip.bond">tip.bond $768  </option>
                <option value="https://getmy.bond/?domain=tips.bond">tips.bond $768  </option>
                <option value="https://getmy.bond/?domain=tm.bond">tm.bond $768  </option>
                <option value="https://getmy.bond/?domain=trade.bond">trade.bond $768  </option>
                <option value="https://getmy.bond/?domain=trader.bond">trader.bond $768  </option>
                <option value="https://getmy.bond/?domain=trading.bond">trading.bond $768  </option>
                <option value="https://getmy.bond/?domain=training.bond">training.bond $768  </option>
                <option value="https://getmy.bond/?domain=transfer.bond">transfer.bond $768  </option>
                <option value="https://getmy.bond/?domain=travel.bond">travel.bond $768  </option>
                <option value="https://getmy.bond/?domain=trust.bond">trust.bond $768  </option>
                <option value="https://getmy.bond/?domain=trusted.bond">trusted.bond $768  </option>
                <option value="https://getmy.bond/?domain=tv.bond">tv.bond $768  </option>
                <option value="https://getmy.bond/?domain=vote.bond">vote.bond $768  </option>
                <option value="https://getmy.bond/?domain=want.bond">want.bond $768  </option>
                <option value="https://getmy.bond/?domain=wedding.bond">wedding.bond $768  </option>
                <option value="https://getmy.bond/?domain=weddings.bond">weddings.bond $768  </option>
                <option value="https://getmy.bond/?domain=work.bond">work.bond $768  </option>
                <option value="https://getmy.bond/?domain=world.bond">world.bond $768  </option>
                <option value="https://getmy.bond/?domain=worth.bond">worth.bond $768  </option>
                <option value="https://getmy.bond/?domain=you.bond">you.bond $768  </option>
                <option value="https://getmy.bond/?domain=your.bond">your.bond $768  </option>
              </select>
            </div>
          </div>
          <div id="bond-check-container">
            <div id="bond-left">
              <div class="taggbox" data-widget-id="110869" data-tags="false"></div><script src="https://widget.taggbox.com/embed-lite.min.js" type="text/javascript"></script>
            </div>
            <div id="bond-right">
              <iframe width="100%"  height="500px" src="https://www.youtube.com/embed/ny7H5PRRM2k"></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Watch

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description,
        siteUrl
      }
    }
  }
`
