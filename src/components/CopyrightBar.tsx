const CopyrightBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] w-full border-t border-[#06369c] bg-white py-3 shadow-[0_-4px_16px_rgba(6,54,156,0.08)] sm:py-4">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium tracking-wide text-[#06369c] sm:text-sm md:text-base lg:text-lg">
          © {new Date().getFullYear()} Renaissance Meeting &amp; Special Events. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default CopyrightBar;