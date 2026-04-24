import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-lg border border-[#34418e]/16 bg-white px-4 py-3 text-sm text-[#17204d] outline-none transition placeholder:text-[#65708f]/55 focus:border-[#34418e] focus:ring-4 focus:ring-[#34418e]/10';

const actionButtonClassName = 'w-full py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <>
      <p className="mb-3 eyebrow">
        Create Account
      </p>
      <h1 className="text-4xl font-black tracking-tight text-[#17204d] sm:text-5xl">Sign Up</h1>
      <p className="body-copy mt-3">
        Create a store account for faster checkout, order updates, and pickup details.
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-bold text-[#17204d]">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-bold text-[#17204d]">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-bold text-[#17204d]">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-bold text-[#17204d]">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-[#65708f]">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Create Account
        </Button>
      </form>

      <div className="mt-8 border-t border-[#34418e]/12 pt-6 text-sm text-[#65708f]">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-bold text-[#34418e] transition hover:text-[#17204d]">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;