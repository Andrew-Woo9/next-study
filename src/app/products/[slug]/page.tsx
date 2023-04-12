import {getProduct, getProducts} from "@/service/products";
import notFound from "@/app/products/not-found";

type Props = {
  params: {
    slug: string;
  }
}
export const revalidate = 3;

export function generateMetadata({params}: Props) {
  return {
    title: `제품의 이름은 ${params.slug}`
  }
}

const ProductDetailPage = async ({params:{slug}} : Props) => {

  const product = await getProduct(slug);

  if(!product) return notFound();

  return (
    <div>
      <h1>{product.name} 제품페이지</h1>
    </div>
  );
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map( products => ({
      slug: products,
    })
  )
}
export default ProductDetailPage;
