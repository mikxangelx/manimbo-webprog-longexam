import { NavLink, Outlet } from 'react-router-dom';
import nuLogo from '../assets/img/NU LOGO.png';
import logo from '../assets/img/nubdexchange_logo.png';

const AuthLayout = () => {
  return (
    <section className="relative min-h-screen text-[#17204d]">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-[#34418e]/10 bg-[#f9fcf8]/88 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd320] focus-visible:ring-offset-2"
            aria-label="Go to BulldogEx Shop home page"
          >
            <img src={logo} alt="BulldogEx" className="h-11 w-11 rounded-lg border border-[#34418e]/12 bg-white object-contain p-1 shadow-sm" />
            <span className="text-xl font-black tracking-tight text-[#34418e] transition hover:text-[#17204d]">
              BulldogEx Shop
            </span>
          </NavLink>
        </div>
      </header>

      <div className="mx-auto grid min-h-screen w-full max-w-7xl gap-6 px-4 pb-10 pt-28 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8">
        <aside className="flex items-center justify-center overflow-hidden rounded-lg bg-[#34418e] p-6 text-center text-white shadow-[0_28px_80px_rgba(52,65,142,0.22)] sm:p-8 lg:p-10">
          <div className="w-full max-w-lg">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:text-left">
              <div className="rounded-lg bg-[#f9fcf8] p-3 shadow-[0_14px_30px_rgba(0,0,0,0.16)]">
                <img src={nuLogo} alt="National University logo" className="h-20 w-20 object-contain sm:h-24 sm:w-24" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#ffd320]">
                  National University
                </p>
                <p className="mt-2 text-2xl font-bold leading-tight text-[#f9fcf8]">
                  BulldogEx Shop
                </p>
              </div>
            </div>

            <h2 className="mx-auto mt-10 max-w-lg text-5xl font-black leading-none tracking-tight text-[#f9fcf8] sm:text-6xl">
              Your campus cart starts here.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#f9fcf8]/75 sm:text-base">
              Sign in to keep orders, saved items, and pickup details ready when class gets busy.
            </p>
          </div>
        </aside>

        <main className="flex items-center rounded-lg border border-[#34418e]/10 bg-[#f9fcf8]/92 p-6 shadow-[0_18px_60px_rgba(52,65,142,0.10)] sm:p-8 lg:p-12">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;