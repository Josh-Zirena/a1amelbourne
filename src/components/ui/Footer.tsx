export default function Footer() {
  return (
    <footer className="flex items-center justify-center min-h-[4rem] text-emerald-900 text-sm bg-white w-full">
      <div className="py-4">
        &copy; {new Date().getFullYear()} A1A Melbourne Wrestling. All rights
        reserved.
      </div>
    </footer>
  );
}
