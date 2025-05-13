import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://speedee.onrender.com/api/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      {orders.map((order) => (
        <div key={order._id} className="border p-4 mb-4 rounded">
          <p className="font-semibold">Customer: {order.email}</p>
          <p>Total: ${order.totalAmount.toFixed(2)}</p>
          <p>Status: {order.paymentStatus}</p>
          <div className="mt-2">
            {order.items.map((item, idx) => (
              <div key={idx} className="text-sm">
                {item.name} x {item.quantity} — ${item.price}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">Placed: {new Date(order.createdAt).toLocaleString()}</p>
          <p className="mt-2">
            <strong>Ship To:</strong> {order.shipping?.name}, {order.shipping?.address?.line1}, {order.shipping?.address?.city}, {order.shipping?.address?.country}
          </p>

        </div>
      ))}
    </div>
  );
};

export default Orders;
