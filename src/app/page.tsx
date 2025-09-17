export default function Home() {
  return (
    <div className="bg-orange-500 min-h-screen flex items-center justify-center p-4">
      <section className="w-full max-w-2xl">
        {/* Boarding Pass Container */}
        <section className="bg-white rounded-xl shadow-2xl overflow-hidden flex relative">
          {/* Semicircle holes centered on the dashed border line */}
          <span className="absolute -top-3 left-44 w-6 h-6 bg-orange-500 rounded-full transform -translate-x-1/2"></span>
          <span className="absolute -bottom-3 left-44 w-6 h-6 bg-orange-500 rounded-full transform -translate-x-1/2"></span>
          
          {/* Left Section with QR Code */}
          <section className="w-48 bg-white p-6 flex items-center justify-center border-r-2 border-dashed border-gray-300">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/002/557/391/original/qr-code-for-scanning-free-vector.jpg"
              alt="QR Code"
              className="w-32 h-32 object-contain"
            />
          </section>
          
          {/* Middle Section with Flight Info */}
          <section className="flex-1 p-6">
            {/* Cities and Flight Route */}
            <section className="flex items-center justify-between mb-6">
              <span className="flex flex-col">
                <span className="text-sm text-blue-900 mb-1">Mumbai,</span>
                <span className="text-sm text-blue-900 mb-1">India</span>
                <span className="text-4xl font-bold text-gray-800">BOM</span>
                <span className="text-xs text-gray-500 mt-1">Wed, July 27<sup>th</sup></span>
                <span className="text-xs text-gray-500">1:00 AM</span>
              </span>
              
              {/* Airplane Icon and Dotted Line */}
              <span className="flex items-center px-8">
                {/* Dots before airplane */}
                <span className="flex items-center space-x-1">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                </span>
                
                {/* Airplane */}
                <span className="mx-2">
                  <svg className="w-6 h-6 text-gray-600 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                </span>
                
                {/* Dots after airplane */}
                <span className="flex items-center space-x-1">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                </span>
              </span>
              
              <span className="text-right flex flex-col items-end">
                <span className="text-sm text-blue-900 mb-1">Amsterdam,</span>
                <span className="text-sm text-blue-900 mb-1">Netherlands</span>
                <span className="text-4xl font-bold text-gray-800">AMS</span>
                <span className="text-xs text-gray-500 mt-1">Thu, July 27<sup>th</sup></span>
                <span className="text-xs text-gray-500">8:30 AM</span>
              </span>
            </section>
            
            {/* Flight Details Grid */}
            <section className="grid grid-cols-5 gap-4 text-sm">
              <span className="flex flex-col">
                <span className="text-gray-400 text-xs mb-1">Passenger</span>
                <span className="font-medium text-blue-900">Nikita Sharma</span>
              </span>
              <span className="flex flex-col">
                <span className="text-gray-400 text-xs mb-1">Seat</span>
                <span className="font-medium text-blue-900">4A</span>
              </span>
              <span className="flex flex-col">
                <span className="text-gray-400 text-xs mb-1">Terminal</span>
                <span className="font-medium text-blue-900">D</span>
              </span>
              <span className="flex flex-col">
                <span className="text-gray-400 text-xs mb-1">Gate</span>
                <span className="font-medium text-blue-900">32</span>
              </span>
              <span className="flex flex-col">
                <span className="text-gray-400 text-xs mb-1">Boarding</span>
                <span className="font-medium text-blue-900">12:40 PM</span>
              </span>
            </section>
          </section>
          
          {/* Right Section - Boarding Pass Label */}
          <section className="w-14 bg-blue-900 text-white flex items-center justify-center">
            <span className="transform -rotate-90 whitespace-nowrap flex justify-between w-64 px-4">
              <span className="text-xs font-light">JET AIRWAYS</span>
              <span className="text-xs font-light">Boarding Pass</span>
            </span>
          </section>
        </section>
      </section>
    </div>
  );
}