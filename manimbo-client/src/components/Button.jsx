import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'border-[#ffd320] bg-[#ffd320] text-[#34418e] shadow-[0_12px_30px_rgba(255,211,32,0.28)] hover:bg-[#f4c900]',
  secondary: 'border-[#34418e]/18 bg-[#f9fcf8] text-[#34418e] hover:border-[#34418e]/35 hover:bg-white',
  brand: 'border-[#34418e] bg-[#34418e] text-white shadow-[0_12px_30px_rgba(52,65,142,0.22)] hover:bg-[#27336f]',
  soft: 'border-[#34418e]/14 bg-[#34418e]/7 text-[#34418e] hover:bg-[#34418e]/12',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-lg border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd320] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
