import ChartLink from '../components/ChartLink';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function VendorDashboard() {
  const links = [
    { name: 'Add Item', path: '/membership' },
    { name: 'View Requests', path: '/reports' },
    { name: 'Transaction Status', path: '/transactions' },
  ];

  return (
    <div className="flex">
      <Sidebar links={links} />
      <div className="flex-1">
        <Header title="Vendor Dashboard" />
        <div className="p-6">
          <h2 className="text-xl font-semibold">Welcome Vendor!</h2>
          <p className="mt-2 text-gray-700">Manage your products and check requests.</p>
        </div>
      </div>
      <ChartLink />
    </div>
  );
}
