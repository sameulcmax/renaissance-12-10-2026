const CopyrightBar = () => {
  return (
    <footer className="w-full border-t border-[#06369c] bg-white py-3 sm:py-4">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium tracking-wide text-[#06369c] sm:text-sm md:text-base lg:text-lg">
          © {new Date().getFullYear()} Renaissance Meeting &amp; Special Events. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default CopyrightBar;