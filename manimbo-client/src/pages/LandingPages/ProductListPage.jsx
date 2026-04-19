import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';
import productHeroImage from '../../assets/img/14.jpg';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-14">
      <section className="page-shell">
        <div className="grid overflow-hidden rounded-lg bg-[#34418e] shadow-[0_28px_80px_rgba(52,65,142,0.22)] lg:grid-cols-[1fr_0.72fr]">
          <div className="p-6 text-[#f9fcf8] sm:p-8 lg:p-12">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#ffd320]">
              Products
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#f9fcf8] sm:text-5xl">
              Campus essentials, ready when you are.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#f9fcf8]/76 sm:text-base">
              Browse practical items for class, study, commute, and everyday campus routines.
            </p>
            <div className="mt-7">
              <Button to="/" variant="primary">Back Home</Button>
            </div>
          </div>

          <div className="min-h-[28rem]">
            <img
              src={productHeroImage}
              alt="Campus products"
              className="h-full min-h-[28rem] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">
              Featured Products
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#17204d]">Ready for pickup</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#65708f]">
            Clean cards, clear pricing, and quick product details for faster browsing.
          </p>
        </div>

        <ProductList products={products} />
      </section>
    </div>
  );
}

export default ProductListPage
