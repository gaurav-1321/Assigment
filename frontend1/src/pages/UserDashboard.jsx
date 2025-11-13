import ChartLink from '../components/ChartLink';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function UserDashboard() {
  const links = [
    { name: 'Reports', path: '/reports' },
    { name: 'Transactions', path: '/transactions' },
  ];

  return (
    <div className="flex">
      <Sidebar links={links} />
      <div className="flex-1">
        <Header title="User Dashboard" />
        <div className="p-6">
          <h2 className="text-xl font-semibold">Welcome User!</h2>
          <p className="mt-2 text-gray-700">Access your reports and transactions here.</p>
        </div>
      </div>
      <ChartLink />
    </div>
  );
}
