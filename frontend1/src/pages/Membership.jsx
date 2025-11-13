import ChartLink from '../components/ChartLink';
import Header from '../components/Header';

export default function Membership() {
  return (
    <div className="p-6">
      <Header title="Membership Management" />
      <div className="mt-4">
        <p className="text-gray-700">Manage memberships for users or vendors here.</p>
      </div>
      <ChartLink />
    </div>
  );
}
