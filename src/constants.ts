export const BUTTON_CLASSES =
  'inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 cursor-pointer';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY!;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS!;

export const MEDIA_QUERIES = {
  'sm': '(min-width: 640px)',
  'md': '(min-width: 768px)',
  'lg': '(min-width: 1024px)',
  'xl': '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;
export const YEAR = DAY * 365;
