import Button from '../components/Button';
import nfLogo from '../assets/img/NFlogo.png';

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl overflow-hidden rounded-lg bg-[#34418e] shadow-[0_30px_90px_rgba(52,65,142,0.20)]">
        <div className="grid items-center gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-h-80 items-center justify-center bg-[#ffd320] p-8 sm:p-10 lg:min-h-[30rem]">
            <img
              src={nfLogo}
              alt="Page not found"
              className="h-64 w-64 object-contain drop-shadow-[0_22px_34px_rgba(52,65,142,0.22)] sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />
          </div>

          <div className="p-6 text-center text-[#f9fcf8] sm:p-8 lg:p-12 lg:text-left">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#ffd320]">
              Page Not Found
            </p>
            <h1 className="mt-4 text-8xl font-black leading-none tracking-tight text-[#f9fcf8] sm:text-9xl">
              404
            </h1>
            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-[#f9fcf8] sm:text-4xl">
              This aisle is empty.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[#f9fcf8]/76 lg:mx-0">
              The page you opened is missing, moved, or no longer available. Head back to the shop and keep browsing.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button to="/" variant="primary" className="py-3">
                Back Home
              </Button>
              <Button to="/products" className="py-3">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
