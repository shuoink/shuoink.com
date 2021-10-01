declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export type ContactRequestBody = {
  name: string;
  email: string;
  message: string;
  phone: string;
  contactMethod: string;
};
