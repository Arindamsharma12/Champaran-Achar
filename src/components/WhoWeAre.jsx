import { useState } from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

export default function WaahWebsite() {
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <button 
                  className="font-semibold text-gray-800 hover:text-orange-500 transition"
                  onClick={() => setIsShopOpen(!isShopOpen)}
                >
                  SHOP {isShopOpen ? '▲' : '▼'}
                </button>
                {isShopOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Category 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Category 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Category 3</a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="font-semibold text-gray-800 hover:text-orange-500 transition">ABOUT US</a>
              <a href="#" className="font-semibold text-gray-800 hover:text-orange-500 transition">CONTACT US</a>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="w-24">
                <img src="/logo2.png" alt="" />
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-gray-800 hover:text-orange-500 transition">
                <Search size={20} />
                <span className="sr-only">SEARCH</span>
              </button>
              <a href="#" className="text-gray-800 hover:text-orange-500 transition">
                <div className="flex items-center">
                  <ShoppingCart size={20} />
                  <span className="ml-2 font-semibold">MY CART</span>
                </div>
              </a>
              <a href="#" className="text-gray-800 hover:text-orange-500 transition">
                <User size={20} />
                <span className="sr-only">Account</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Who We Are Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">WHO WE ARE</h1>
            
            <div className="">
              <img 
                src="/image.png" 
                alt="Waah team members" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
              />
            </div>
            
            <div className="max-w-4xl mx-auto bg-amber-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}