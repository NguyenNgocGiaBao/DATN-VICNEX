import ProductDescription from "./ProductDescription";
import ExpertReviews from "./ExpertReviews";

function ProductDetailSection() {
  return (
    <section className="product-detail-section">
      <ProductDescription />
      <ExpertReviews />
    </section>
  );
}

export default ProductDetailSection;
