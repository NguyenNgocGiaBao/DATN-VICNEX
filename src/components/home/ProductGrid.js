// ProductGrid.jsx
import ProductItem from './ProductItem';

const products = [
  {
    imgSrc: 'img/product/hinh9.png',
    alt: 'Vợt Cầu Lông Yonex Astrox 88D Pro',
    title: 'Vợt Cầu Lông Yonex Astrox 88D Pro',
    priceSale: '3.250.000₫',
    priceOld: '3.900.000₫',
    stars: '★★★★★',
  },
  {
    imgSrc: 'img/product/hinh10.png',
    alt: 'Giày Cầu Lông Yonex Power Cushion',
    title: 'Giày Cầu Lông Yonex Power Cushion',
    priceSale: '2.800.000₫',
    priceOld: '3.200.000₫',
    stars: '★★★★☆',
  },{
    imgSrc: 'img/product/hinh10.png',
    alt: 'Giày Cầu Lông Yonex Power Cushion',
    title: 'Giày Cầu Lông Yonex Power Cushion',
    priceSale: '2.800.000₫',
    priceOld: '3.200.000₫',
    stars: '★★★★☆',
  },{
    imgSrc: 'img/product/hinh10.png',
    alt: 'Giày Cầu Lông Yonex Power Cushion',
    title: 'Giày Cầu Lông Yonex Power Cushion',
    priceSale: '2.800.000₫',
    priceOld: '3.200.000₫',
    stars: '★★★★☆',
  },{
    imgSrc: 'img/product/hinh10.png',
    alt: 'Giày Cầu Lông Yonex Power Cushion',
    title: 'Giày Cầu Lông Yonex Power Cushion',
    priceSale: '2.800.000₫',
    priceOld: '3.200.000₫',
    stars: '★★★★☆',
  },{
    imgSrc: 'img/product/hinh10.png',
    alt: 'Giày Cầu Lông Yonex Power Cushion',
    title: 'Giày Cầu Lông Yonex Power Cushion',
    priceSale: '2.800.000₫',
    priceOld: '3.200.000₫',
    stars: '★★★★☆',
  },{
    imgSrc: 'img/product/hinh10.png',
    alt: 'Giày Cầu Lông Yonex Power Cushion',
    title: 'Giày Cầu Lông Yonex Power Cushion',
    priceSale: '2.800.000₫',
    priceOld: '3.200.000₫',
    stars: '★★★★☆',
  },{
    imgSrc: 'img/product/hinh10.png',
    alt: 'Giày Cầu Lông Yonex Power Cushion',
    title: 'Giày Cầu Lông Yonex Power Cushion',
    priceSale: '2.800.000₫',
    priceOld: '3.200.000₫',
    stars: '★★★★☆',
  },
  // Thêm các sản phẩm khác ở đây...
];

const ProductGrid = () => {
  return (
    <div className="product-wrapper">
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
