import * as React from 'react'
import TldPricing from '../components/tldPricing'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
    leftSide,
    rightSide,
    bottom,
    container,
    tldImgContainer,
    centerContainer,
    wrapper
} from './tldInfo.module.css' 

const TldInfo = ({moreInfo, tldImg, tldName, partnerId, contentLeft, contentBottom}) => {
    return (
        <section className={wrapper}>
            <div className={container}>
                <div className={centerContainer}>
                    <div className={leftSide}>
                        <div dangerouslySetInnerHTML={{ __html : contentLeft}} />
                    </div>
                    <div className={rightSide}>
                        {tldImg && <div className={tldImgContainer}>
                            <GatsbyImage alt={tldName + ' tld image'} image={getImage(tldImg)} />
                        </div> }
                        <h2>More Info</h2>
                        <TldPricing partnerId={partnerId} tld={tldName} />
                        { moreInfo && <div className="enc-more-more-info" dangerouslySetInnerHTML={{__html: moreInfo}} /> }
                    </div>  
                </div>
                { contentBottom && <div className={bottom} dangerouslySetInnerHTML={{__html: contentBottom}} /> }
            </div>
        </section>
    )
}

export default TldInfo