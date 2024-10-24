export default function OrderSummary() {
    return (
      <div className="w-full m-auto  max-w-sm my-10 p-6 bg-gray-100 border border-gray-200">
        {/* Promotion Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Promotion</h2>
          <div className="flex items-center mt-3">
            <input
              type="text"
              placeholder="Enter Store/Daraz Code"
              className="flex-grow p-2 border border-gray-300 rounded-md bg-white"
            />
            <button className="ml-3 px-4 py-2 bg-blue-600 text-white font-medium rounded-md">
              APPLY
            </button>
          </div>
        </div>
  
        {/* Invoice Info */}
        <div className="mb-6">
          <p className="text-sm text-gray-700">
            Invoice and Contact Info{" "}
            <a href="#" className="text-blue-600">
              Edit
            </a>
          </p>
        </div>
  
        {/* Order Summary */}
        <div className="bg-white p-4 border border-gray-300">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-3">
            <p>Items Total (1 Item)</p>
            <p>$144</p>
          </div>
          <div className="flex justify-between mb-3">
            <p>Delivery Fee</p>
            <p>$55</p>
          </div>
          <div className="flex justify-between font-semibold text-red-600">
            <p>Total:</p>
            <p>$199</p>
          </div>
          <p className="text-xs text-right text-gray-500 mt-2">
            VAT included, where applicable
          </p>
        </div>
  
        {/* Proceed to Pay Button */}
        <button className="w-full mt-6 py-3 bg-gray-300 text-white font-medium rounded-lg cursor-not-allowed">
          Proceed to Pay
        </button>
      </div>
    );
  }
  