import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brandBlack text-white">
      
      {/* Minimal Header - Just the Logo */}
      <header className="p-6 absolute top-0 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                <h1 className="text-2xl font-bold text-white tracking-wider">
                  INK & <span className="text-brandLightGreen">EMERALD</span>
                </h1>
            </Link>
        </div>
      </header>

      {/* The Content (Login/Register Forms) */}
      <main className="flex-grow flex items-center justify-center pt-20 pb-10">
        <Outlet /> 
      </main>
      
    </div>
  );
};

export default AuthLayout;