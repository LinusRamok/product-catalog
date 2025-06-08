import { Suspense } from "react";
import ProductDetail from "@/components/ProductDetail";

const ProductPage = ({ params }: { params: { productId: string } }) => {
  return (
    <Suspense fallback={<p>Loading product...</p>}>
      <ProductDetail productId={params.productId} />
    </Suspense>
  );
};

export default ProductPage;
