import ChartLink from '../components/ChartLink';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function AdminDashboard() {
  const links = [
    { name: 'Maintenance', path: '/maintenance' },
    { name: 'Reports', path: '/reports' },
    { name: 'Transactions', path: '/transactions' },
  ];

  return (
    <div className="flex">
      <Sidebar links={links} />
      <div className="flex-1">
        <Header title="Admin Dashboard" />
        <div className="p-6">
          <h2 className="text-xl font-semibold">Welcome Admin!</h2>
          <p className="mt-2 text-gray-700">Use the sidebar to navigate through modules.</p>
        </div>
      </div>
      <ChartLink />
    </div>
  );
}
