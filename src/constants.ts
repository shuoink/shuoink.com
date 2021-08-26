export const BUTTON_CLASSES =
  'inline-block bg-transparent font-bold border-current border-2 p-2 px-4 text-gray-100 uppercase select-none hover:bg-gray-100 hover:text-gray-900 duration-75 cursor-pointer text-lg sm:text-2xl';

export const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
export const CONTENTFUL_SPACE_ID = '2mzgx8k2g2hb';

export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY!;

export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS!;

export const MEDIA_QUERIES = {
  'sm': '(min-width: 640px)',
  'md': '(min-width: 768px)',
  'lg': '(min-width: 1024px)',
  'xl': '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

export const TEXT_BAD = 'text-red-300';
export const BG_BAD = 'bg-red-900';
export const BORDER_BAD = 'border-red-300';

export const TEXT_GOOD = 'text-green-300';
export const BG_GOOD = 'bg-green-900';
export const BORDER_GOOD = 'border-green-300';
