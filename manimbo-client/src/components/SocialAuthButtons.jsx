const providers = [
  {
    name: 'Google',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="#EA4335"
          d="M12 10.2v3.9h5.4c-.2 1.3-1.6 3.9-5.4 3.9-3.2 0-5.9-2.7-5.9-6s2.7-6 5.9-6c1.8 0 3 .8 3.7 1.4l2.5-2.4C16.6 3.6 14.5 2.8 12 2.8 6.9 2.8 2.8 7 2.8 12S6.9 21.2 12 21.2c6 0 9.9-4.2 9.9-10.1 0-.7-.1-1.2-.2-1.7H12Z"
        />
        <path
          fill="#34A853"
          d="M2.8 12c0 1.6.6 3.1 1.5 4.2l3.6-2.8c-.4-.4-.6-1-.6-1.4s.2-1 .6-1.4L4.3 7.8A9 9 0 0 0 2.8 12Z"
        />
        <path
          fill="#FBBC05"
          d="M12 21.2c2.7 0 4.9-.9 6.5-2.4l-3.2-2.6c-.9.6-2 .9-3.3.9-2.5 0-4.6-1.7-5.3-4l-3.7 2.9c1.7 3.2 5 5.2 9 5.2Z"
        />
        <path
          fill="#4285F4"
          d="M18.5 18.8c1.9-1.8 3.4-4.6 3.4-8.6 0-.7-.1-1.2-.2-1.7H12v3.9h5.4c-.3 1.4-1.1 2.6-2.2 3.4l3.3 3Z"
        />
      </svg>
    ),
  },
  {
    name: 'Apple',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M16.7 12.8c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-2-1.5-.2-2.9.9-3.7.9-.8 0-2-.9-3.2-.9-1.7 0-3.2 1-4.1 2.5-1.8 3.1-.5 7.8 1.3 10.3.9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.8 3.4-.8s2 .8 3.4.8c1.4 0 2.3-1.2 3.2-2.4 1-1.4 1.5-2.8 1.5-2.9-.1 0-3.7-1.4-3.7-4.4Zm-2.4-7c.7-.8 1.2-2 1-3.1-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4Z" />
      </svg>
    ),
  },
];

const socialButtonClassName =
  'flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#d5ddf2] bg-white px-4 py-3 text-[13px] font-bold text-[#17204d] transition hover:border-[#bcc9eb] hover:bg-[#fbfcff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#34418e]/20 focus-visible:ring-offset-2';

const SocialAuthButtons = ({ mode }) => {
  const actionText = mode === 'signup' ? 'Sign up' : 'Log in';

  return (
    <div className="space-y-3">
      {providers.map((provider) => (
        <button
          key={provider.name}
          type="button"
          className={socialButtonClassName}
          aria-label={`${actionText} with ${provider.name}`}
        >
          {provider.icon}
          <span>{`${actionText} with ${provider.name}`}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialAuthButtons;
