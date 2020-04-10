import React from 'react'
import axios from 'axios'

function Home({ products }) {
  // React.useEffect(() => {
  //   getProducts()
  // },  [])

  // async function getProducts() {
  //   const url = 'http://localhost:3000/api/products';
  //   const response = await axios.get(url);
  //   console.log(response.data)
  // }

  return <>home</>;
}

Home.getInitialProps = async () => {
  // fetch data on the server
  // return response data as an object
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data }
  // note: this object will be merged with existing props
}

export default Home;
