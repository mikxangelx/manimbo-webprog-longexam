import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js'

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-14">
        <section className="page-shell">
          <article className="grid overflow-hidden rounded-lg bg-[#34418e] shadow-[0_28px_80px_rgba(52,65,142,0.20)] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex min-h-72 items-center justify-center bg-[#ffd320] p-8">
              <div className="rounded-lg bg-[#34418e] px-6 py-5 text-center shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
                <p className="text-5xl font-black text-[#f9fcf8]">404</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#ffd320]">
                  Missing Item
                </p>
              </div>
            </div>

            <div className="flex items-center p-6 text-[#f9fcf8] sm:p-8 lg:p-12">
              <div className="max-w-2xl">
                <p className="mb-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#ffd320]">
                  Product Not Found
                </p>
                <h1 className="text-4xl font-black leading-tight tracking-tight text-[#f9fcf8] sm:text-5xl">
                  This campus item is not on the shelf.
                </h1>
                <p className="mt-5 max-w-xl text-sm leading-7 text-[#f9fcf8]/76 sm:text-base">
                  The product may have been moved, renamed, or removed from the catalog. Head back to the products page to continue browsing available items.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button to="/products" variant="primary">Back to Products</Button>
                  <Button to="/">Go Home</Button>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-14">
      <section className="page-shell">
        <article className="overflow-hidden rounded-lg bg-[#34418e] shadow-[0_30px_90px_rgba(52,65,142,0.22)]">
          <div className="grid lg:min-h-[38rem] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[#ffd320] p-4 sm:p-6 lg:p-8">
              <div className="h-full min-h-80 overflow-hidden rounded-lg bg-[#f9fcf8] shadow-[0_22px_55px_rgba(0,0,0,0.18)]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full min-h-80 w-full object-cover"
                />
              </div>
            </div>

            <div className="flex items-center p-6 text-[#f9fcf8] sm:p-8 lg:p-12">
              <div className="w-full max-w-2xl">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-[#ffd320] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#34418e]">
                    {product.category}
                  </span>
                  <span className="rounded-lg border border-[#f9fcf8]/14 bg-[#f9fcf8]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#f9fcf8]/80">
                    Campus Pick
                  </span>
                </div>

                <h1 className="max-w-2xl text-4xl font-black leading-[0.98] tracking-tight text-[#f9fcf8] sm:text-6xl">
                  {product.title}
                </h1>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-[#ffd320] px-4 py-2 text-base font-black text-[#34418e]">
                    {product.price}
                  </span>
                  <span className="rounded-lg bg-[#f9fcf8]/12 px-4 py-2 text-sm font-bold text-[#f9fcf8]">
                    {product.stock}
                  </span>
                </div>

                <div className="mt-8 space-y-4 rounded-lg border border-[#f9fcf8]/12 bg-[#f9fcf8]/8 p-5">
                  {product.content.map((paragraph, index) => (
                    <p key={index} className="whitespace-pre-wrap text-base leading-7 text-[#f9fcf8]/78">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="primary">Add to Cart</Button>
                  <Button to="/products">Back to Products</Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default ProductPage;
