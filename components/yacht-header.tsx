export function YachtHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900 text-white py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold tracking-wider">TONY LOVEC YACHT MANAGEMENT</div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:text-gray-300">
              CHARTER
            </a>
            <a href="#" className="hover:text-gray-300">
              CONTACT
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4"></div>
      </div>
    </header>
  )
}
