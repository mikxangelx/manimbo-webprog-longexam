import { NavLink } from 'react-router-dom';
import nfLogo from '../assets/img/NFlogo.png';

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Products', to: '/products' },
      { label: 'Collections', to: '/products' },
    ],
  },
 
  {
    title: 'Info',
    links: [
      { label: 'FAQs', to: '/about' },
      { label: 'Contact Us', to: '/about' },
      { label: 'Market', to: '/products' },
    ],
  },
];

const legalLinks = ['Cookies Policy', 'Legal Terms', 'Privacy Policy'];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: (
      <path d="M14.2 8.2h2.2V4.4A27.7 27.7 0 0 0 13.2 4c-3.2 0-5.4 2-5.4 5.6v3.3H4.3v4.3h3.5V28h4.4V17.2h3.5l.6-4.3h-4.1V10c0-1.2.3-1.8 2-1.8Z" />
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: (
      <>
        <rect x="5.2" y="5.2" width="21.6" height="21.6" rx="6.2" />
        <circle cx="16" cy="16" r="5.2" />
        <circle cx="22.8" cy="9.4" r="1.3" />
      </>
    ),
  },
  {
    label: 'X',
    href: 'https://www.x.com',
    icon: (
      <path d="M18.8 14.1 27 4.5h-1.9l-7.1 8.3-5.7-8.3H5.8l8.6 12.6-8.6 10h1.9l7.5-8.7 6 8.7h6.5l-8.9-13Zm-2.7 3.1-.9-1.2-6.9-9.9h3.1l5.6 8 .9 1.2 7.3 10.4h-3.1l-6-8.5Z" />
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com',
    icon: (
      <>
        <path d="M28.3 10.1a3.2 3.2 0 0 0-2.2-2.2C24.1 7.4 16 7.4 16 7.4s-8.1 0-10.1.5a3.2 3.2 0 0 0-2.2 2.2A33.4 33.4 0 0 0 3.2 16c0 2 .2 4 .5 5.9a3.2 3.2 0 0 0 2.2 2.2c2 .5 10.1.5 10.1.5s8.1 0 10.1-.5a3.2 3.2 0 0 0 2.2-2.2c.3-1.9.5-3.9.5-5.9s-.2-4-.5-5.9Z" />
        <path d="m13.5 19.7 6.7-3.7-6.7-3.7v7.4Z" className="fill-[#34418e]" />
      </>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#34418e] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 text-[#f9fcf8]">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={nfLogo}
                alt="NF logo"
                className="h-12 w-12 rounded-lg bg-[#f9fcf8]/10 object-contain p-1.5"
              />
              <p className="text-2xl font-bold tracking-tight text-[#ffd320]">Bulldogs Exchange</p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="mt-8 grid gap-8 sm:grid-cols-3"
            >
              {footerLinks.map((group) => (
                <div key={group.title}>
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffd320]">
                    {group.title}
                  </p>
                  <div className="flex flex-col items-start gap-3">
                    {group.links.map((link) => (
                      <NavLink
                        key={`${group.title}-${link.label}`}
                        to={link.to}
                        end={link.to === '/'}
                        className={({ isActive }) =>
                          [
                            'rounded-lg py-1 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd320] focus-visible:ring-offset-2 focus-visible:ring-offset-[#34418e]',
                            isActive
                              ? 'text-[#ffd320]'
                              : 'text-[#f9fcf8]/78 hover:text-[#ffd320]',
                          ].join(' ')
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className="lg:pb-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffd320]">
              Need campus essentials?
            </p>
            <p className="mt-2 text-5xl font-light leading-none tracking-normal text-[#f9fcf8] sm:text-6xl lg:text-7xl">
              Let's shop
            </p>
          </div>
        </div>

        <div className="border-t border-dashed border-[#f9fcf8]/28 pt-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <span key={link} className="text-xs font-semibold text-[#f9fcf8]/65">
                  {link}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[#f9fcf8]/78 transition hover:bg-[#ffd320] hover:text-[#34418e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd320] focus-visible:ring-offset-2 focus-visible:ring-offset-[#34418e]"
                >
                  <svg
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    className="h-5 w-5 fill-current"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
