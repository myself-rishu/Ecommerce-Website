import Banner from "@/components/Banner";
import ProductCart from "@/components/cards/ProductCart";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Ecommerce Website</title>
        <meta className="description" content="Generated by create next app" />
        <meta
          className="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-100">
        <Banner />
        <div className="my-2 bg-light">
          <h4 className="text-center p-2 text-uppercase">Products</h4>
        </div>
        <div className="index_product row">
          {products &&
            products.map((item) => {
              return (
                <div key={item.id} className="col-md-4 mt-4">
                  <ProductCart product={item} />
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  let products = [];
  try {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    products = result.products;
  } catch (error) {
    return { notFound: true };
  }
  return { props: { products } };
}