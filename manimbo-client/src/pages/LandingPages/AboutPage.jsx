import Button from '../../components/Button';
import aboutImage from '../../assets/img/about.jpg';
import categoryImage10 from '../../assets/img/10.jpg';
import categoryImage11 from '../../assets/img/11.jpg';
import categoryImage12 from '../../assets/img/12.jpg';
import categoryImage13 from '../../assets/img/13.jpg';

const categoryImages = [
  { src: categoryImage10, alt: 'Campus category item 10' },
  { src: categoryImage11, alt: 'Campus category item 11' },
  { src: categoryImage12, alt: 'Campus category item 12' },
  { src: categoryImage13, alt: 'Campus category item 13' },
];

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-14">
      <section className="page-shell">
        <div className="grid overflow-hidden rounded-lg bg-[#34418e] shadow-[0_28px_80px_rgba(52,65,142,0.22)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="min-h-[28rem]">
            <img
              src={aboutImage}
              alt="BulldogEx campus shop"
              className="h-full min-h-[28rem] w-full object-cover"
            />
          </div>

          <div className="flex items-center p-6 text-[#f9fcf8] sm:p-8 lg:p-12">
            <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#ffd320]">
              About Store
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-[#f9fcf8] sm:text-5xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#f9fcf8]/76 sm:text-base">
              BulldogEx Shop brings campus essentials into a clean storefront with clear
              categories, quick actions, and straightforward store information.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">
              Store Overview
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#17204d]">Store at a glance</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#65708f]">
            Everything is arranged around fast browsing, simple choices, and reliable pickup.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-[#ffd320] p-6 text-[#34418e] shadow-[0_18px_45px_rgba(255,211,32,0.18)]">
            <p className="text-4xl font-black">08</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#65708f]">
              Items
            </p>
          </div>
          <div className="section-panel">
            <p className="text-4xl font-black text-[#34418e]">06</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#65708f]">
              Categories
            </p>
          </div>
          <div className="section-panel">
            <p className="text-4xl font-black text-[#34418e]">03</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#65708f]">
              Pickup Slots
            </p>
          </div>
          <div className="section-panel">
            <p className="text-4xl font-black text-[#34418e]">24</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#65708f]">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">
              Store Flow
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#17204d]">Simple from browse to pickup</h2>

            <div className="mt-6 space-y-5">
              <article className="section-panel">
                <h3 className="text-lg font-bold text-[#17204d]">Curated Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-[#65708f]">
                  Products are grouped by daily need so shoppers can scan faster.
                </p>
              </article>

              <article className="section-panel">
                <h3 className="text-lg font-bold text-[#17204d]">Simple Checkout</h3>
                <p className="mt-3 text-sm leading-6 text-[#65708f]">
                  Product pages keep price, stock, and action buttons easy to find.
                </p>
              </article>

              <article className="section-panel">
                <h3 className="text-lg font-bold text-[#17204d]">Pickup Ready</h3>
                <p className="mt-3 text-sm leading-6 text-[#65708f]">
                  Store information stays direct for students who need quick order updates.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-lg bg-[#34418e] p-6 text-[#f9fcf8] shadow-[0_22px_60px_rgba(52,65,142,0.2)] sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#ffd320]">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {categoryImages.map((image) => (
                <div key={image.src} className="aspect-square overflow-hidden rounded-lg bg-[#f9fcf8]/10">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <Button to="/products" className="mt-5" variant="primary">View Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
