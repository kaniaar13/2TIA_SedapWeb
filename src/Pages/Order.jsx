import { useState } from 'react';
import orders from '../data/Order.json';
import PageHeader from '../components/PageHeader';
import OrderForm from './OrderForm';

export default function Order() {
    const [showForm, setShowForm] = useState(false); // State untuk toggle form

    const handleAddOrder = () => {
        setShowForm(true); // Tampilkan form saat tombol Add diklik
    };

    const handleCancelForm = () => {
        setShowForm(false); // Sembunyikan form saat tombol cancel diklik
    };

    const statusColor = (status) => {
        switch (status) {
            case "Completed":
                return "text-green-600 font-semibold";
            case "Pending":
                return "text-yellow-500 font-semibold";
            case "Cancelled":
                return "text-red-500 font-semibold";
            default:
                return "text-gray-600";
        }
    };

    return (
        <div>
            <PageHeader
                title="Order"
                breadcrumbs={["Home", "Order"]}
                onAddClick={handleAddOrder}
            />

            {showForm ? (
                <OrderForm onCancel={handleCancelForm} />
            ) : (
                <div className="overflow-x-auto mt-6 rounded-lg shadow">
                    <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700 uppercase">
                            <tr>
                                <th className="px-6 py-3">Order ID</th>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Total ($)</th>
                                <th className="px-6 py-3">Order Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {orders.map((o) => (
                                <tr key={o.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4">{o.id}</td>
                                    <td className="px-6 py-4">{o.customer}</td>
                                    <td className={`px-6 py-4 ${statusColor(o.status)}`}>{o.status}</td>
                                    <td className="px-6 py-4">${o.total.toFixed(2)}</td>
                                    <td className="px-6 py-4">{o.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
