import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const authLinks = [
  { label: 'Sign In', to: '/auth/signin' },
  
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-lg px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition',
    isActive
      ? 'bg-[#34418e] text-white shadow-[0_10px_24px_rgba(52,65,142,0.2)]'
      : 'text-[#65708f] hover:bg-[#34418e]/8 hover:text-[#34418e]',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#34418e]/10 bg-[#f9fcf8]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx" className="h-11 w-11 rounded-lg border border-[#34418e]/12 bg-white object-contain p-1 shadow-sm" />
          <div className="space-y-0.5">
            <p className="text-xl font-black tracking-tight text-[#34418e]">BulldogEx Shop</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Account navigation">
          {authLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
