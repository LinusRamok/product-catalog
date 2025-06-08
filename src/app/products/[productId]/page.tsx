import ProductDetail from "@/components/ProductDetail";
import { fetchProduct } from "@/lib/fetchProduct";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params
  const product = await fetchProduct(productId);
  return <ProductDetail product={product} />
};

export default ProductPage;
