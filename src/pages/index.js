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
    // window.location.replace(e.target.value);
    const encDomainName = document.getElementById('enc-domain-name');
    encDomainName.value = e.target.value;
    document.getElementById('enc-search-button').click();
    return false;
  }
  return (
    <div>
      <SEO title="Welcome" description={siteDescription} image={siteUrl + shareImage} url={siteUrl + "/"} />
      <Layout>
        <div id="bond-check-container">
        <CheckDomain partnerId="62e14223d4c9c41e47688e00" defaultTld="bond" tldSuggestions="" />
        </div>
        <div id="bond-check-container">
          <div id="bond-left">
            
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
                <option value="a1.bond">a1.bond $768</option>
                <option value="aaa.bond">aaa.bond $768</option>
                <option value="about.bond">about.bond $384</option>
                <option value="account.bond">account.bond $384  </option>
                <option value="accountancy.bond">accountancy.bond $768  </option>
                <option value="accounting.bond">accounting.bond $768  </option>
                <option value="acquire.bond">acquire.bond $384  </option>
                <option value="across.bond">across.bond $768  </option>
                <option value="action.bond">action.bond $768  </option>
                <option value="ad.bond">ad.bond $768  </option>
                <option value="ada.bond">ada.bond $768  </option>
                <option value="adams.bond">adams.bond $768  </option>
                <option value="adblocker.bond">adblocker.bond $768  </option>
                <option value="add.bond">add.bond $768  </option>
                <option value="adjust.bond">adjust.bond $384  </option>
                <option value="adult.bond">adult.bond $768  </option>
                <option value="adventure.bond">adventure.bond $768  </option>
                <option value="advertise.bond">advertise.bond $768  </option>
                <option value="affiliate.bond">affiliate.bond $768  </option>
                <option value="agenda.bond">agenda.bond $768  </option>
                <option value="agent.bond">agent.bond $768  </option>
                <option value="air.bond">air.bond $768  </option>
                <option value="airline.bond">airline.bond $768  </option>
                <option value="airlines.bond">airlines.bond $768  </option>
                <option value="american.bond">american.bond $768  </option>
                <option value="analyst.bond">analyst.bond $384  </option>
                <option value="analyze.bond">analyze.bond $384  </option>
                <option value="anonymous.bond">anonymous.bond $768  </option>
                <option value="appliance.bond">appliance.bond $768  </option>
                <option value="apps.bond">apps.bond $768  </option>
                <option value="auction.bond">auction.bond $768  </option>
                <option value="auctions.bond">auctions.bond $768  </option>
                <option value="auto.bond">auto.bond $768  </option>
                <option value="autoauction.bond">autoauction.bond $768  </option>
                <option value="autocare.bond">autocare.bond $768  </option>
                <option value="autocenter.bond">autocenter.bond $768  </option>
                <option value="autoinsurance.bond">autoinsurance.bond $48  </option>
                <option value="autos.bond">autos.bond $768  </option>
                <option value="bad.bond">bad.bond $768  </option>
                <option value="bank.bond">bank.bond $768  </option>
                <option value="banker.bond">banker.bond $384  </option>
                <option value="bankers.bond">bankers.bond $384  </option>
                <option value="banking.bond">banking.bond $768  </option>
                <option value="banks.bond">banks.bond $768  </option>
                <option value="benefit.bond">benefit.bond $384  </option>
                <option value="benefits.bond">benefits.bond $768  </option>
                <option value="bespoke.bond">bespoke.bond $768  </option>
                <option value="bet.bond">bet.bond $768  </option>
                <option value="bets.bond">bets.bond $768  </option>
                <option value="betting.bond">betting.bond $768  </option>
                <option value="bettingodds.bond">bettingodds.bond $768  </option>
                <option value="billpay.bond">billpay.bond $384  </option>
                <option value="bills.bond">bills.bond $384  </option>
                <option value="bitcoins.bond">bitcoins.bond $768  </option>
                <option value="bitpay.bond">bitpay.bond $768  </option>
                <option value="biz.bond">biz.bond $768  </option>
                <option value="blockchain.bond">blockchain.bond $768  </option>
                <option value="broker.bond">broker.bond $768  </option>
                <option value="brokers.bond">brokers.bond $768  </option>
                <option value="businessbroker.bond">businessbroker.bond $48  </option>
                <option value="businesscapital.bond">businesscapital.bond $48  </option>
                <option value="businesscard.bond">businesscard.bond $48  </option>
                <option value="businesscards.bond">businesscards.bond $48  </option>
                <option value="businessclass.bond">businessclass.bond $48  </option>
                <option value="businesscloud.bond">businesscloud.bond $48  </option>
                <option value="businesscreators.bond">businesscreators.bond $48  </option>
                <option value="businessdeals.bond">businessdeals.bond $48  </option>
                <option value="businessdirect.bond">businessdirect.bond $48  </option>
                <option value="businessfinance.bond">businessfinance.bond $48  </option>
                <option value="businessinsider.bond">businessinsider.bond $48  </option>
                <option value="businessloans.bond">businessloans.bond $48  </option>
                <option value="businessowners.bond">businessowners.bond $48  </option>
                <option value="businesspartner.bond">businesspartner.bond $48  </option>
                <option value="businessplan.bond">businessplan.bond $48  </option>
                <option value="businessplans.bond">businessplans.bond $48  </option>
                <option value="businessservices.bond">businessservices.bond $48  </option>
                <option value="businessworld.bond">businessworld.bond $48  </option>
                <option value="cache.bond">cache.bond $768  </option>
                <option value="card.bond">card.bond $768  </option>
                <option value="cards.bond">cards.bond $768  </option>
                <option value="cars.bond">cars.bond $768  </option>
                <option value="cashback.bond">cashback.bond $768  </option>
                <option value="cashpoint.bond">cashpoint.bond $768  </option>
                <option value="casinogames.bond">casinogames.bond $768  </option>
                <option value="casinos.bond">casinos.bond $768  </option>
                <option value="center.bond">center.bond $768  </option>
                <option value="central.bond">central.bond $768  </option>
                <option value="cheapcars.bond">cheapcars.bond $768  </option>
                <option value="cheaphotels.bond">cheaphotels.bond $768  </option>
                <option value="check.bond">check.bond $768  </option>
                <option value="city.bond">city.bond $768  </option>
                <option value="coin.bond">coin.bond $768  </option>
                <option value="commerce.bond">commerce.bond $768  </option>
                <option value="commercial.bond">commercial.bond $768  </option>
                <option value="communicate.bond">communicate.bond $768  </option>
                <option value="compare.bond">compare.bond $768  </option>
                <option value="compliance.bond">compliance.bond $768  </option>
                <option value="compre.bond">compre.bond $768  </option>
                <option value="computer.bond">computer.bond $768  </option>
                <option value="connect.bond">connect.bond $768  </option>
                <option value="consignment.bond">consignment.bond $768  </option>
                <option value="consulting.bond">consulting.bond $768  </option>
                <option value="coop.bond">coop.bond $768  </option>
                <option value="corporation.bond">corporation.bond $768  </option>
                <option value="coupons.bond">coupons.bond $768  </option>
                <option value="credit.bond">credit.bond $768  </option>
                <option value="creditos.bond">creditos.bond $768  </option>
                <option value="credits.bond">credits.bond $768  </option>
                <option value="crisis.bond">crisis.bond $768  </option>
                <option value="crowdfund.bond">crowdfund.bond $768  </option>
                <option value="cruise.bond">cruise.bond $768  </option>
                <option value="cruises.bond">cruises.bond $768  </option>
                <option value="custom.bond">custom.bond $768  </option>
                <option value="customer.bond">customer.bond $768  </option>
                <option value="cyber.bond">cyber.bond $768  </option>
                <option value="cybermonday.bond">cybermonday.bond $768  </option>
                <option value="data.bond">data.bond $768  </option>
                <option value="databank.bond">databank.bond $768  </option>
                <option value="dealer.bond">dealer.bond $768  </option>
                <option value="deals.bond">deals.bond $768  </option>
                <option value="debt.bond">debt.bond $768  </option>
                <option value="deposit.bond">deposit.bond $768  </option>
                <option value="diamonds.bond">diamonds.bond $768  </option>
                <option value="discount.bond">discount.bond $768  </option>
                <option value="discover.bond">discover.bond $768  </option>
                <option value="discoverecommerce.bond">ecommerce.bond $768  </option>
                <option value="employment.bond">employment.bond $768  </option>
                <option value="enterprise.bond">enterprise.bond $768  </option>
                <option value="enterprize.bond">enterprize.bond $768  </option>
                <option value="event.bond">event.bond $768  </option>
                <option value="events.bond">events.bond $768  </option>
                <option value="exchange.bond">exchange.bond $768  </option>
                <option value="expertcapital.bond">expertcapital.bond $48  </option>
                <option value="expertise.bond">expertise.bond $768  </option>
                <option value="expertsolutions.bond">expertsolutions.bond $48  </option>
                <option value="finance.bond">finance.bond $768  </option>
                <option value="finances.bond">finances.bond $96  </option>
                <option value="financial.bond">financial.bond $768  </option>
                <option value="financials.bond">financials.bond $96  </option>
                <option value="financing.bond">financing.bond $768  </option>
                <option value="forsale.bond">forsale.bond $768  </option>
                <option value="forum.bond">forum.bond $768  </option>
                <option value="forums.bond">forums.bond $768  </option>
                <option value="gambling.bond">gambling.bond $768  </option>
                <option value="game.bond">game.bond $768  </option>
                <option value="games.bond">games.bond $768  </option>
                <option value="green.bond">green.bond $768  </option>
                <option value="happyinvestors.bond">happyinvestors.bond $48  </option>
                <option value="have.bond">have.bond $48  </option>
                <option value="help.bond">help.bond $48  </option>
                <option value="highend.bond">highend.bond $768  </option>
                <option value="highstreet.bond">highstreet.bond $768  </option>
                <option value="homebusiness.bond">homebusiness.bond $48  </option>
                <option value="homes.bond">homes.bond $768  </option>
                <option value="homesforsale.bond">homesforsale.bond $48  </option>
                <option value="ibank.bond">ibank.bond $384  </option>
                <option value="insure.bond">insure.bond $768  </option>
                <option value="invest.bond">invest.bond $768  </option>
                <option value="investing.bond">investing.bond $96  </option>
                <option value="investinyourself.bond">investinyourself.bond $48  </option>
                <option value="investment.bond">investment.bond $768  </option>
                <option value="investmentbanking.bond">investmentbanking.bond $48  </option>
                <option value="investmentnews.bond">investmentnews.bond $48  </option>
                <option value="investmentproperty.bond">investmentproperty.bond $48  </option>
                <option value="investornews.bond">investornews.bond $48  </option>
                <option value="junk.bond">junk.bond $768  </option>
                <option value="kredit.bond">kredit.bond $768  </option>
                <option value="kredite.bond">kredite.bond $768  </option>
                <option value="launch.bond">launch.bond $768  </option>
                <option value="law.bond">law.bond $768  </option>
                <option value="lawyer.bond">lawyer.bond $768  </option>
                <option value="layaway.bond">layaway.bond $768  </option>
                <option value="lease.bond">lease.bond $768  </option>
                <option value="legal.bond">legal.bond $768  </option>
                <option value="lend.bond">lend.bond $768  </option>
                <option value="lending.bond">lending.bond $768  </option>
                <option value="lottery.bond">lottery.bond $768  </option>
                <option value="luxe.bond">luxe.bond $768  </option>
                <option value="make.bond">make.bond $768  </option>
                <option value=".mediabond">media.bond $768  </option>
                <option value="mediainfo.bond">mediainfo.bond $768  </option>
                <option value="mobile.bond">mobile.bond $768  </option>
                <option value="mobilepay.bond">mobilepay.bond $768  </option>
                <option value="mobilepro.bond">mobilepro.bond $768  </option>
                <option value="mobilepros.bond">mobilepros.bond $768  </option>
                <option value="money.bond">money.bond $768  </option>
                <option value="moneyhub.bond">moneyhub.bond $768  </option>
                <option value="my.bond">my.bond $768  </option>
                <option value="myfastcash.bond">myfastcash.bond $96  </option>
                <option value="myfinance.bond">myfinance.bond $96  </option>
                <option value="myfinance.bond">myfinance.bond $96  </option>
                <option value="myfinances.bond">myfinances.bond $96  </option>
                <option value="myfinances.bond">myfinances.bond $96  </option>
                <option value="myinsurance.bond">myinsurance.bond $96  </option>
                <option value="network.bond">network.bond $768  </option>
                <option value="next.bond">next.bond $768  </option>
                <option value="offer.bond">offer.bond $768  </option>
                <option value="offers.bond">offers.bond $768  </option>
                <option value="office.bond">office.bond $768  </option>
                <option value="online.bond">online.bond $768  </option>
                <option value="onlinebanking.bond">onlinebanking.bond $48  </option>
                <option value="onlinegames.bond">onlinegames.bond $768  </option>
                <option value="onlinepoker.bond">onlinepoker.bond $768  </option>
                <option value="onlineshops.bond">onlineshops.bond $768  </option>
                <option value="only.bond">only.bond $768  </option>
                <option value=".ownbond">own.bond $768  </option>
                <option value="partners.bond">partners.bond $768  </option>
                <option value="payment.bond">payment.bond $768  </option>
                <option value="payments.bond">payments.bond $768  </option>
                <option value="penny.bond">penny.bond $768  </option>
                <option value="people.bond">people.bond $768  </option>
                <option value="price.bond">price.bond $768  </option>
                <option value="pro.bond">pro.bond $768  </option>
                <option value="product.bond">product.bond $768  </option>
                <option value="promotion.bond">promotion.bond $768  </option>
                <option value="property.bond">property.bond $768  </option>
                <option value="propertyinsurance.bond">propertyinsurance.bond $48  </option>
                <option value="propertyinvestment.bond">propertyinvestment.bond $48  </option>
                <option value="propertymanagement.bond">propertymanagement.bond $48  </option>
                <option value="propertyowners.bond">propertyowners.bond $48  </option>
                <option value="push.bond">push.bond $768  </option>
                <option value="real.bond">real.bond $48  </option>
                <option value="realty.bond">realty.bond $768  </option>
                <option value="refinance.bond">refinance.bond $96  </option>
                <option value="refinancing.bond">refinancing.bond $96  </option>
                <option value="rental.bond">rental.bond $768  </option>
                <option value="resales.bond">resales.bond $768  </option>
                <option value="reserve.bond">reserve.bond $768  </option>
                <option value="revenue.bond">revenue.bond $768  </option>
                <option value="review.bond">review.bond $768  </option>
                <option value="reviews.bond">reviews.bond $768  </option>
                <option value="reward.bond">reward.bond $768  </option>
                <option value="sale.bond">sale.bond $768  </option>
                <option value="sales.bond">sales.bond $768  </option>
                <option value="school.bond">school.bond $768  </option>
                <option value="science.bond">science.bond $768  </option>
                <option value="sell.bond">sell.bond $768  </option>
                <option value="send.bond">send.bond $768  </option>
                <option value="service.bond">service.bond $768  </option>
                <option value="share.bond">share.bond $768  </option>
                <option value=".skubond">sku.bond $768  </option>
                <option value="smartinsurance.bond">smartinsurance.bond $48  </option>
                <option value="smartinvesting.bond">smartinvesting.bond $48  </option>
                <option value="smartinvestors.bond">smartinvestors.bond $48  </option>
                <option value="smartproperty.bond">smartproperty.bond $48  </option>
                <option value="speciality.bond">speciality.bond $768  </option>
                <option value="specialized.bond">specialized.bond $768  </option>
                <option value="start.bond">start.bond $768  </option>
                <option value=".stockbond">stock.bond $768  </option>
                <option value="stockbrokers.bond">stockbrokers.bond $48  </option>
                <option value="stockexchange.bond">stockexchange.bond $48  </option>
                <option value="stockmarket.bond">stockmarket.bond $768  </option>
                <option value="stocks.bond">stocks.bond $768  </option>
                <option value="stocktrading.bond">stocktrading.bond $48  </option>
                <option value="store.bond">store.bond $768  </option>
                <option value="submit.bond">submit.bond $768  </option>
                <option value="subscribe.bond">subscribe.bond $768  </option>
                <option value="tax.bond">tax.bond $768  </option>
                <option value="team.bond">team.bond $768  </option>
                <option value="tip.bond">tip.bond $768  </option>
                <option value="tips.bond">tips.bond $768  </option>
                <option value="tm.bond">tm.bond $768  </option>
                <option value="trade.bond">trade.bond $768  </option>
                <option value="trader.bond">trader.bond $768  </option>
                <option value="trading.bond">trading.bond $768  </option>
                <option value="training.bond">training.bond $768  </option>
                <option value="transfer.bond">transfer.bond $768  </option>
                <option value="travel.bond">travel.bond $768  </option>
                <option value="trust.bond">trust.bond $768  </option>
                <option value="trusted.bond">trusted.bond $768  </option>
                <option value="tv.bond">tv.bond $768  </option>
                <option value="vote.bond">vote.bond $768  </option>
                <option value="want.bond">want.bond $768  </option>
                <option value="wedding.bond">wedding.bond $768  </option>
                <option value="weddings.bond">weddings.bond $768  </option>
                <option value="work.bond">work.bond $768  </option>
                <option value="world.bond">world.bond $768  </option>
                <option value="worth.bond">worth.bond $768  </option>
                <option value="you.bond">you.bond $768  </option>
                <option value="your.bond">your.bond $768  </option>
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
