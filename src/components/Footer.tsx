export const Footer = () => {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const years = currentYear > startYear ? `${startYear} - ${currentYear}` : startYear;
  return (
    <footer className="mt-32 text-center text-gray-500">
      Copyright &copy; {years} Stephen Sorensen. All rights reserved.
    </footer>
  );
};
