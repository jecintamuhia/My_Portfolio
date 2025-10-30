// src/components/Footer.tsx
const Footer = () => {
  return (
    // Updated background color
    <footer className="bg-slate-900 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Jecinta N. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;