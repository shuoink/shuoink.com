declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- augmenting
  interface Window {
    dataLayer: Array<{[key: string]: any}>;
  }
}

export type ContactRequestBody = {
  name: string;
  email: string;
  message: string;
  phone: string;
  contactMethod: string;
};
