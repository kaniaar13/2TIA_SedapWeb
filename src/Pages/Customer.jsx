import { useState } from 'react';
import Customer from '../data/Customer.json';
import PageHeader from '../components/PageHeader';
import CustomerForm from './CustomerForm';

export default function Customers() {
    const [showForm, setShowForm] = useState(false);

    const handleAddCustomer = () => {
        setShowForm(true);
    };

    const handleCancelForm = () => {
        setShowForm(false);
    };

    return (
        <div>
            <PageHeader
                title="Customers"
                breadcrumbs={["Home", "Customers"]}
                onAddClick={handleAddCustomer}
            />

            {showForm ? (
                <CustomerForm onCancel={handleCancelForm} />
            ) : (
                <div className="overflow-x-auto mt-6 rounded-lg shadow">
                    <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700 uppercase">
                            <tr>
                                <th className="px-6 py-3">Customer ID</th>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Phone</th>
                                <th className="px-6 py-3">Loyalty</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {Customer.map((c) => (
                                <tr key={c.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4">{c.id}</td>
                                    <td className="px-6 py-4">{c.name}</td>
                                    <td className="px-6 py-4">{c.email}</td>
                                    <td className="px-6 py-4">{c.phone}</td>
                                    <td
                                        className={`px-6 py-4 font-semibold ${
                                            c.loyalty === "Gold"
                                                ? "text-yellow-600"
                                                : c.loyalty === "Silver"
                                                ? "text-gray-500"
                                                : "text-amber-800"
                                        }`}
                                    >
                                        {c.loyalty}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
