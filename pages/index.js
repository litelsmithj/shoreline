import React from "react"
import {client} from '../lib/client'
import {Product, HeroBanner, FooterBanner} from '../components/index'

const Home = ({products, bannerData, headerBannerData}) => (
  <div>
    <HeroBanner heroBanner={headerBannerData.length && headerBannerData[0]}/>
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Welcome to the Shore!</p>
    </div>

    <div className='products-container'>
      {products?.map(product => <Product key = {product._id} product = {product}/>)}
    </div>

    <FooterBanner footerBanner = {bannerData && bannerData[0]}/>
  </div>
)

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const headerBannerQuery = '*[_type == "headerBanner"]';
  const headerBannerData = await client.fetch(headerBannerQuery);

  return {
    props: {products, bannerData, headerBannerData}
  }
}

export default Home;
