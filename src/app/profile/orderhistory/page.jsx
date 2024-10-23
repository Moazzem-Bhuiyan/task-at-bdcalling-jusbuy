import React from 'react';

const Page = () => {

    const orders = [
        { id: '#1456118', products: 3, price: 575, date: '20-Dec-2024, 3:00 PM', status: 'Processing' },
        { id: '#1456118', products: 3, price: 575, date: '20-Dec-2024, 3:50 PM', status: 'Delivered' },
        { id: '#1456118', products: 3, price: 575, date: '20-Dec-2024, 3:00 PM', status: 'Delivered' },
        { id: '#1456118', products: 3, price: 575, date: '20-Dec-2024, 3:00 PM', status: 'Processing' },
        { id: '#1456118', products: 3, price: 575, date: '20-Dec-2024, 3:00 PM', status: 'Cancelled' },
      ];



    return (
        <div className="container mx-auto px-4 sm:px-8 py-6">
      <div className="py-4">
        <h2 className="text-2xl font-semibold leading-tight">Order History</h2>
      </div>
      <div className="min-w-full overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Order No.
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Total Products
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Price
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{order.id}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{order.products}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">${order.price}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{order.date}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    className={`relative inline-block w-28 px-5 py-2 font-semibold leading-tight ${
                      order.status === 'Delivered'
                        ? 'text-white'
                        : order.status === 'Processing'
                        ? 'text-yellow-900'
                        : 'text-red-900'
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-0 ${
                        order.status === 'Delivered'
                          ? 'bg-orange-500'
                          : order.status === 'Processing'
                          ? 'bg-yellow-200'
                          : 'bg-red-200'
                      } opacity-50 rounded-md`}
                    ></span>
                    <span className="relative">{order.status}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Page;