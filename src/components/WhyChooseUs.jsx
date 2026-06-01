import React from 'react';
import { motion } from 'framer-motion';

// ==========================================
// 1️⃣ CORE FEATURES ICONS
// ==========================================
import strategyIcon from '../assets/icon-strategy.svg';
import growthIcon from '../assets/icon-growth.svg';
import targetingIcon from '../assets/icon-targeting.svg';
import marketingIcon from '../assets/icon-marketing.svg';
import optimizationIcon from '../assets/icon-optimization.svg';
import successIcon from '../assets/icon-success.svg';

// ==========================================
// 2️⃣ MULTI CHANNEL MEDIA ECOSYSTEM ICONS
// ==========================================
import googleImg from '../assets/google.png';
import amazonImg from '../assets/amazon.png';
import youtubeImg from '../assets/youtube.png';
import tradedeskImg from '../assets/tradedesk.png';
import adobeImg from '../assets/adobe.png';
import wazeImg from '../assets/waze.png';
import stackImg from '../assets/stack.png';
import rokuImg from '../assets/roku.png';
import spotifyImg from '../assets/spotify.png';
import oohImg from '../assets/ooh.png';
import audioImg from '../assets/audio.png';
import ingameImg from '../assets/ingame.png';
import accountbaseImg from '../assets/accountbase.png';

// ==========================================
// 3️⃣ SOCIAL PERFORMANCE ICONS
// ==========================================
import facebookImg from '../assets/facebook.png';
import instagramImg from '../assets/instagram.png';
import pinterestImg from '../assets/pinterest.png';
import snapchatImg from '../assets/snapchat.png';
import linkedinImg from '../assets/linkedin.png';
import twitterImg from '../assets/twitter.png';
import tiktokImg from '../assets/tiktok.png';
import redditImg from '../assets/reddit.png';
import twitchImg from '../assets/twitch.png';

// ==========================================
// 4️⃣ SEARCH GROWTH CAMPAIGNS ICONS
// ==========================================
import googleSa360Img from '../assets/sa360.png';
import googleAdsImg from '../assets/sa360.png'; 
import microsoftImg from '../assets/microsoft.png';
import snapchatSearchImg from '../assets/snapchat.png';
import appleImg from '../assets/apple.png';
import amazonSearchImg from '../assets/amazon.png';

// ==========================================
// 5️⃣ RETAIL GROWTH SYSTEMS ICONS
// ==========================================
import amazonDspRetailImg from '../assets/amazon.png';
import amazonNativeRetailImg from '../assets/amazon.png';
import shopifyImg from '../assets/shopify.png';
import squarespaceImg from '../assets/squarespace.png';
import magentoImg from '../assets/magento.png';
import criteoImg from '../assets/criteo.png';
import walmartImg from '../assets/walmart.png';
import cvsImg from '../assets/cvs.png'; 
import targetImg from '../assets/target.png'; 
import costcoImg from '../assets/costco.png';
import channelImg from '../assets/channel.png';
import instacartImg from '../assets/instacart.png';

// ==========================================
// 6️⃣ AUDIENCE DATA & INTELLIGENCE ICONS
// ==========================================
import liverampImg from '../assets/livercamp.png';
import dunImg from '../assets/dunandbradsheet.png';
import bomboraImg from '../assets/bombora.png';
import ibmImg from '../assets/ibm.png';
import acxiomImg from '../assets/acxiom.png';
import comscoreImg from '../assets/comscore.png';
import dstilleryImg from '../assets/dstillery.png';
import experianImg from '../assets/experian.png';
import factualImg from '../assets/factual.png';
import digitaloohImg from '../assets/digitalooh.png';
import foursquareImg from '../assets/foursquare.png';
import mastercardImg from '../assets/mastercard.png';
import numeratorImg from '../assets/numerator.png';
import pelmorexImg from '../assets/pelmorex.png';
import placeiqImg from '../assets/placeiq.png';
import weatherImg from '../assets/theweatherchannel.png';

// ==========================================
// 7️⃣ PERFORMANCE METRICS ICONS
// ==========================================
import metricLiverampSa360Img from '../assets/sa360.png';
import metricAmazonAttributionImg from '../assets/amazon.png';
import metricGoogleAnalyticsImg from '../assets/googleanalytics.png';
import metricFirebaseImg from '../assets/firebase.png';
import metricAdobeImg from '../assets/adobe.png';
import metricBrandLiftSa360Img from '../assets/sa360.png';
import metricDynataImg from '../assets/dynata.png';
import metricLucidImg from '../assets/lucid.png';
import metricNielsenImg from '../assets/nielsen.png';
import metricKantarImg from '../assets/kantar.png';
import metricBrandInterestSa360Img from '../assets/sa360.png';
import metricSalesforceImg from '../assets/salesforce.png';
import metricAppsflyerImg from '../assets/appsflyer.png';
import metricHubspotImg from '../assets/hubspot.png';
import metricGoogleCloudImg from '../assets/googlecloud.png';
import metricGoogleOptimizeImg from '../assets/googleoptimizer.png';

// ==========================================
// 8️⃣ BRAND INTEGRITY ICONS
// ==========================================
import doubleVerifyImg from '../assets/doubleverify.png';
import integralAdScienceImg from '../assets/integraladscience.png';
import peer39Img from '../assets/peer.png';
import whiteOpsImg from '../assets/whiteops.png';

const featuresData = [
  { id: 1, title: "Digital Strategy", description: "Plan and execute data-driven digital strategies that align with your business goals and accelerate growth.", icon: strategyIcon },
  { id: 2, title: "Brand Growth", description: "Build strong, memorable brands through consistent messaging, creative design, and market insight.", icon: growthIcon },
  { id: 3, title: "Audience Targeting", description: "Reach the right audience with precision using smart segmentation and performance-based targeting.", icon: targetingIcon },
  { id: 4, title: "Integrated Marketing", description: "Combine paid media, content, SEO, and social channels into one seamless marketing ecosystem.", icon: marketingIcon },
  { id: 5, title: "Performance Optimization", description: "Continuously optimize campaigns using analytics, insights, and real-time performance tracking.", icon: optimizationIcon },
  { id: 6, title: "Client Success", description: "Dedicated support focused on results, transparency, and long-term partnerships that scale.", icon: successIcon }
];

const ecosystemData = [
  { id: 1, name: "Google DV360", logo: googleImg },
  { id: 2, name: "Amazon DSP", logo: amazonImg },
  { id: 3, name: "Youtube", logo: youtubeImg },
  { id: 4, name: "TheTradeDesk", logo: tradedeskImg },
  { id: 5, name: "Adobe", logo: adobeImg },
  { id: 6, name: "Waze", logo: wazeImg },
  { id: 7, name: "StackAdapt", logo: stackImg },
  { id: 8, name: "Roku", logo: rokuImg },
  { id: 9, name: "Spotify", logo: spotifyImg },
  { id: 10, name: "Digital OOH", logo: oohImg },
  { id: 11, name: "Digital Audio", logo: audioImg },
  { id: 12, name: "In Game", logo: ingameImg },
  { id: 13, name: "B2B Account Based Advertising", logo: accountbaseImg },
];

const socialData = [
  { id: 1, name: "Facebook", logo: facebookImg },
  { id: 2, name: "Instagram", logo: instagramImg },
  { id: 3, name: "Pinterest", logo: pinterestImg },
  { id: 4, name: "Snapchat", logo: snapchatImg },
  { id: 5, name: "LinkedIn", logo: linkedinImg },
  { id: 6, name: "Twitter", logo: twitterImg },
  { id: 7, name: "Tiktok", logo: tiktokImg },
  { id: 8, name: "Reddit", logo: redditImg },
  { id: 9, name: "Twitch", logo: twitchImg },
];

const searchData = [
  { id: 1, name: "Google SA360", logo: googleSa360Img },
  { id: 2, name: "Google Ads", logo: googleAdsImg },
  { id: 3, name: "Microsoft", logo: microsoftImg },
  { id: 4, name: "Snapchat", logo: snapchatSearchImg },
  { id: 5, name: "Apple Search Ads", logo: appleImg },
  { id: 6, name: "Amazon Native", logo: amazonSearchImg },
];

const retailData = [
  { id: 1, name: "Amazon DSP", logo: amazonDspRetailImg },
  { id: 2, name: "Amazon Native", logo: amazonNativeRetailImg },
  { id: 3, name: "Shopify", logo: shopifyImg },
  { id: 4, name: "Squarespace", logo: squarespaceImg },
  { id: 5, name: "Magento", logo: magentoImg },
  { id: 6, name: "Criteo", logo: criteoImg },
  { id: 7, name: "Walmart", logo: walmartImg },
  { id: 8, name: "CVS", logo: cvsImg },
  { id: 9, name: "Target", logo: targetImg },
  { id: 10, name: "Costco", logo: costcoImg },
  { id: 11, name: "Channel Advisor", logo: channelImg },
  { id: 12, name: "Instacart", logo: instacartImg },
];

const audienceData = [
  { id: 1, name: "Liveramp", logo: liverampImg },
  { id: 2, name: "Dun & Bradstreet", logo: dunImg },
  { id: 3, name: "Bombora", logo: bomboraImg },
  { id: 4, name: "IBM Watson", logo: ibmImg },
  { id: 5, name: "Acxiom", logo: acxiomImg },
  { id: 6, name: "comscore", logo: comscoreImg },
  { id: 7, name: "Dstillery", logo: dstilleryImg },
  { id: 8, name: "Experian", logo: experianImg },
  { id: 9, name: "Factual", logo: factualImg },
  { id: 10, name: "Digital OOH", logo: digitaloohImg },
  { id: 11, name: "Foursquare", logo: foursquareImg },
  { id: 12, name: "Mastercard", logo: mastercardImg },
  { id: 13, name: "Numerator", logo: numeratorImg },
  { id: 14, name: "Pelmorex", logo: pelmorexImg },
  { id: 15, name: "PlaceIQ", logo: placeiqImg },
  { id: 16, name: "TheWeatherChannel", logo: weatherImg },
];

const metricsData = [
  { id: 1, name: "Liveramp", logo: metricLiverampSa360Img },
  { id: 2, name: "Amazon Attribution", logo: metricAmazonAttributionImg },
  { id: 3, name: "Google Analytics", logo: metricGoogleAnalyticsImg },
  { id: 4, name: "Firebase", logo: metricFirebaseImg },
  { id: 5, name: "Adobe Analytics", logo: metricAdobeImg },
  { id: 6, name: "Google Brand Lift", logo: metricBrandLiftSa360Img },
  { id: 7, name: "Dynata", logo: metricDynataImg },
  { id: 8, name: "Lucid", logo: metricLucidImg },
  { id: 9, name: "Nielsen", logo: metricNielsenImg },
  { id: 10, name: "Kantar", logo: metricKantarImg },
  { id: 11, name: "Google Brand Interest", logo: metricBrandInterestSa360Img },
  { id: 12, name: "Salesforce", logo: metricSalesforceImg },
  { id: 13, name: "AppsFlyer", logo: metricAppsflyerImg },
  { id: 14, name: "HubSpot", logo: metricHubspotImg },
  { id: 15, name: "Google Cloud", logo: metricGoogleCloudImg },
  { id: 16, name: "Google Optimize", logo: metricGoogleOptimizeImg },
];

const integrityData = [
  { id: 1, name: "DoubleVerify", logo: doubleVerifyImg },
  { id: 2, name: "Integral Ad Science", logo: integralAdScienceImg },
  { id: 3, name: "Peer39", logo: peer39Img },
  { id: 4, name: "WhiteOps", logo: whiteOpsImg },
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.02 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const RenderItemNode = ({ item }) => (
  <motion.div
    key={item.id}
    className="flex items-center gap-2 sm:gap-3 bg-transparent py-2 px-3 sm:px-4 group min-w-[120px] sm:min-w-[150px] max-w-full justify-center border border-transparent hover:border-neutral-100 rounded-md transition-all duration-200"
    variants={itemVariants}
  >
    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-in-out transform group-hover:scale-105">
      <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain pointer-events-none" />
    </div>
    <span className="text-xs sm:text-[14px] font-[500] tracking-tight text-neutral-900 font-sans break-words text-left w-full">
      {item.name}
    </span>
  </motion.div>
);

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-white block relative overflow-x-hidden">
      
      {/* PART 1: CORE FEATURES */}
      <section className="w-full bg-white text-black pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-12 lg:px-20 block border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto text-center">
          
          <motion.div 
            className="flex flex-col items-center gap-4 sm:gap-5 mb-12 sm:mb-16 text-center w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            <h2 
              className="text-lg sm:text-2xl md:text-3xl lg:text-[38px] font-[1000] tracking-tighter uppercase leading-tight w-full text-center bg-clip-text text-transparent px-2"
              style={{ 
                fontFamily: "'Unbounded', sans-serif",
                backgroundImage: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              WHY DIGITAL HOUSE FOR DIGITAL ADVERTISING?
            </h2>
            <p className="max-w-6xl mx-auto text-neutral-500 text-xs sm:text-sm md:text-[16px] font-medium leading-[1.6] text-center mt-1 px-2 sm:px-4">
              Digital House delivers data-driven digital advertising built for measurable growth. We plan and execute campaigns across the right platforms to reach the right audience. Our approach combines smart targeting, creative optimization, and performance tracking. Every campaign is continuously refined using real-time insights and analytics. The result is advertising that drives visibility, engagement, and meaningful outcomes.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-12 gap-x-6 sm:gap-x-8 justify-items-center max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={gridContainerVariants}
          >
            {featuresData.map((feature) => (
              <motion.div 
                key={feature.id} 
                className="flex flex-col items-center text-center group w-full max-w-[320px] px-2"
                variants={itemVariants}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain pointer-events-none" />
                </div>
                <h3 className="text-sm sm:text-lg font-medium tracking-tight text-neutral-900 mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-500 text-[11px] sm:text-sm md:text-[14px] leading-relaxed px-1 sm:px-2">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* PART 2: MULTI CHANNEL MEDIA ECOSYSTEM */}
      <section className="w-full bg-white text-black py-12 sm:py-16 px-4 sm:px-12 lg:px-20 block relative border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto text-center">
          
          <motion.div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-20 text-center w-full" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[38px] font-[1000] tracking-tighter uppercase leading-tight w-full text-center bg-clip-text text-transparent px-2" style={{ fontFamily: "'Unbounded', sans-serif", backgroundImage: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              MULTI CHANNEL MEDIA ECOSYSTEM
            </h2>
            <p className="max-w-4xl mx-auto text-neutral-400 text-xs sm:text-base md:text-[15px] font-medium leading-relaxed px-2 sm:px-4">
              We plan, manage, and optimize media across multiple platforms to maximize reach, engagement, and measurable results.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6 max-w-6xl mx-auto mb-12 sm:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={gridContainerVariants}>
            {ecosystemData.map((item) => <RenderItemNode key={item.id} item={item} />)}
          </motion.div>

          <div className="w-full flex justify-center">
            <button className="border border-black bg-white text-black px-6 sm:px-10 py-2.5 sm:py-3 text-[10px] sm:text-sm font-[400] uppercase tracking-tight hover:bg-black hover:text-white transition-all duration-300 ease-in-out" style={{ fontFamily: "'Unbounded', sans-serif" }}>Get Consultancy</button>
          </div>

        </div>
      </section>

      {/* PART 3: SOCIAL PERFORMANCE MARKETING */}
      <section className="w-full bg-white text-black py-12 sm:py-16 px-4 sm:px-12 lg:px-20 block relative border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto text-center">
          
          <motion.div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-20 text-center w-full" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[38px] font-[1000] tracking-tighter uppercase leading-tight w-full text-center bg-clip-text text-transparent px-2" style={{ fontFamily: "'Unbounded', sans-serif", backgroundImage: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              SOCIAL PERFORMANCE MARKETING
            </h2>
            <p className="max-w-4xl mx-auto text-neutral-400 text-xs sm:text-base md:text-[15px] font-medium leading-relaxed px-2 sm:px-4">
              We design and manage high impact paid social campaigns focused on measurable growth.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6 max-w-6xl mx-auto mb-12 sm:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={gridContainerVariants}>
            {socialData.map((item) => <RenderItemNode key={item.id} item={item} />)}
          </motion.div>

          <div className="w-full flex justify-center">
            <button className="border border-black bg-white text-black px-6 sm:px-10 py-2.5 sm:py-3 text-[10px] sm:text-sm font-[400] uppercase tracking-tight hover:bg-black hover:text-white transition-all duration-300 ease-in-out" style={{ fontFamily: "'Unbounded', sans-serif" }}>Get Consultancy</button>
          </div>

        </div>
      </section>

      {/* PART 4: SEARCH GROWTH CAMPAIGNS */}
      <section className="w-full bg-white text-black py-12 sm:py-16 px-4 sm:px-12 lg:px-20 block relative border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto text-center">
          
          <motion.div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-20 text-center w-full" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[38px] font-[1000] tracking-tighter uppercase leading-tight w-full text-center bg-clip-text text-transparent px-2" style={{ fontFamily: "'Unbounded', sans-serif", backgroundImage: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              SEARCH GROWTH CAMPAIGNS
            </h2>
            <p className="max-w-4xl mx-auto text-neutral-400 text-xs sm:text-base md:text-[15px] font-medium leading-relaxed px-2 sm:px-4">
              Our approach combines smart keyword strategy, precise targeting, and continuous optimization across leading search platforms.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6 max-w-6xl mx-auto mb-12 sm:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={gridContainerVariants}>
            {searchData.map((item) => <RenderItemNode key={item.id} item={item} />)}
          </motion.div>

          <div className="w-full flex justify-center">
            <button className="border border-black bg-white text-black px-6 sm:px-10 py-2.5 sm:py-3 text-[10px] sm:text-sm font-[400] uppercase tracking-tight hover:bg-black hover:text-white transition-all duration-300 ease-in-out" style={{ fontFamily: "'Unbounded', sans-serif" }}>Get Consultancy</button>
          </div>

        </div>
      </section>

      {/* PART 5: RETAIL GROWTH SYSTEMS */}
      <section className="w-full bg-white text-black py-12 sm:py-16 px-4 sm:px-12 lg:px-20 block relative border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto text-center">
          
          <motion.div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-20 text-center w-full" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[38px] font-[1000] tracking-tighter uppercase leading-tight w-full text-center bg-clip-text text-transparent px-2" style={{ fontFamily: "'Unbounded', sans-serif", backgroundImage: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              RETAIL GROWTH SYSTEMS
            </h2>
            <p className="max-w-4xl mx-auto text-neutral-400 text-xs sm:text-base md:text-[15px] font-medium leading-relaxed px-2 sm:px-4">
              From scalable storefront development to performance-driven marketing integrations, we help brands grow sales across digital retail platforms.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6 max-w-6xl mx-auto mb-12 sm:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={gridContainerVariants}>
            {retailData.map((item) => <RenderItemNode key={item.id} item={item} />)}
          </motion.div>

          <div className="w-full flex justify-center">
            <button className="border border-black bg-white text-black px-6 sm:px-10 py-2.5 sm:py-3 text-[10px] sm:text-sm font-[400] uppercase tracking-tight hover:bg-black hover:text-white transition-all duration-300 ease-in-out" style={{ fontFamily: "'Unbounded', sans-serif" }}>Get Consultancy</button>
          </div>

        </div>
      </section>

      {/* PART 6: AUDIENCE DATA & INTELLIGENCE */}
      <section className="w-full bg-white text-black py-12 sm:py-16 px-4 sm:px-12 lg:px-20 block relative border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto text-center">
          
          <motion.div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-20 text-center w-full" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[38px] font-[1000] tracking-tighter uppercase leading-tight w-full text-center bg-clip-text text-transparent px-2" style={{ fontFamily: "'Unbounded', sans-serif", backgroundImage: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              AUDIENCE DATA & INTELLIGENCE
            </h2>
            <p className="max-w-4xl mx-auto text-neutral-400 text-xs sm:text-base md:text-[15px] font-medium leading-relaxed px-2 sm:px-4">
              We help brands unlock the power of third-party data to build precise, scalable audiences.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6 max-w-6xl mx-auto mb-12 sm:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={gridContainerVariants}>
            {audienceData.map((item) => <RenderItemNode key={item.id} item={item} />)}
          </motion.div>

          <div className="w-full flex justify-center">
            <button className="border border-black bg-white text-black px-6 sm:px-10 py-2.5 sm:py-3 text-[10px] sm:text-sm font-[400] uppercase tracking-tight hover:bg-black hover:text-white transition-all duration-300 ease-in-out" style={{ fontFamily: "'Unbounded', sans-serif" }}>Get Consultancy</button>
          </div>

        </div>
      </section>

      {/* PART 7: PERFORMANCE METRICS */}
      <section className="w-full bg-white text-black py-12 sm:py-16 px-4 sm:px-12 lg:px-20 block relative border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto text-center">
          
          <motion.div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-20 text-center w-full" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[38px] font-[1000] tracking-tighter uppercase leading-tight w-full text-center bg-clip-text text-transparent px-2" style={{ fontFamily: "'Unbounded', sans-serif", backgroundImage: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              PERFORMANCE METRICS
            </h2>
            <p className="max-w-4xl mx-auto text-neutral-400 text-xs sm:text-base md:text-[15px] font-medium leading-relaxed px-2 sm:px-4">
              Actionable insights powered by real time data to measure impact, optimize campaigns, and drive growth.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6 max-w-6xl mx-auto mb-12 sm:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={gridContainerVariants}>
            {metricsData.map((item) => <RenderItemNode key={item.id} item={item} />)}
          </motion.div>

          <div className="w-full flex justify-center">
            <button className="border border-black bg-white text-black px-6 sm:px-10 py-2.5 sm:py-3 text-[10px] sm:text-sm font-[400] uppercase tracking-tight hover:bg-black hover:text-white transition-all duration-300 ease-in-out" style={{ fontFamily: "'Unbounded', sans-serif" }}>Get Consultancy</button>
          </div>

        </div>
      </section>

      {/* PART 8: BRAND INTEGRITY */}
      <section className="w-full bg-white text-black pt-12 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-12 lg:px-20 block relative border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto text-center">
          
          <motion.div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-20 text-center w-full" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[38px] font-[1000] tracking-tighter uppercase leading-tight w-full text-center bg-clip-text text-transparent px-2" style={{ fontFamily: "'Unbounded', sans-serif", backgroundImage: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              BRAND INTEGRITY
            </h2>
            <p className="max-w-4xl mx-auto text-neutral-400 text-xs sm:text-base md:text-[15px] font-medium leading-relaxed px-2 sm:px-4">
              We are among world class digital media buying services, leveraging the best in-class data services to ensure brand-safe ad delivery.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6 max-w-6xl mx-auto mb-12 sm:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={gridContainerVariants}>
            {integrityData.map((item) => <RenderItemNode key={item.id} item={item} />)}
          </motion.div>

          <div className="w-full flex justify-center">
            <button className="border border-black bg-white text-black px-6 sm:px-10 py-2.5 sm:py-3 text-[10px] sm:text-sm font-[400] uppercase tracking-tight hover:bg-black hover:text-white transition-all duration-300 ease-in-out" style={{ fontFamily: "'Unbounded', sans-serif" }}>Get Consultancy</button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default WhyChooseUs;