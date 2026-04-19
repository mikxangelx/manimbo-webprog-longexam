import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-lg border border-[#34418e]/16 bg-white px-4 py-3 text-sm text-[#17204d] outline-none transition placeholder:text-[#65708f]/55 focus:border-[#34418e] focus:ring-4 focus:ring-[#34418e]/10';

const actionButtonClassName = 'w-full py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <>
      <p className="mb-3 eyebrow">
        Welcome Back
      </p>
      <h1 className="text-4xl font-black tracking-tight text-[#17204d] sm:text-5xl">Log In</h1>
      <p className="body-copy mt-3">
        Access your store account to review orders, saved items, and pickup details.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label htmlFor="signin-email" className="text-sm font-bold text-[#17204d]">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-bold text-[#17204d]">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-[#65708f]">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-[#65708f]">
            <input type="checkbox" className="h-4 w-4 rounded border-[#34418e]/20 accent-[#34418e]" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-bold text-[#34418e] transition hover:text-[#17204d]">
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Log In
        </Button>

      </form>

      <div className="mt-8 border-t border-[#34418e]/12 pt-6 text-sm text-[#65708f]">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-bold text-[#34418e] transition hover:text-[#17204d]">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
