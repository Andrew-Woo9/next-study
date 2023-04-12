import React from 'react';
import {getProducts} from "@/service/products";
import Link from "next/link";
import Image from 'next/image';
import MeowArticle from "@/components/MeowArticle";
import campImg from '../../../public/images/camp.jpg';

// export const revalidate = 3;
const ProductsPage = async () => {
  const products = await getProducts()

  /***
   * Image TAG
   * 1. 우선순위가 높은 것에 priority 를 사용함
   * 2. 외부이미지(서버) 사용시 next.config 에 패턴정의 필요 (서버 재시작필요)
   */

  return (
    <>
      <h1>제품 소개페이지</h1>
      <Image src={campImg} alt={'inImg'} priority/>
      <Image src={'https://images.unsplash.com/photo-1441986300917-64674bd600d8'} alt={'outImg'} width={300} height={300}/>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
          ))
        }
      </ul>
      <MeowArticle />
    </>
  );
};

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map( products => ({
      slug: products,
    })
  )
}

export default ProductsPage;
