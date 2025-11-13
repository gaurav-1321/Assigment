import ChartLink from '../components/ChartLink';
import Header from '../components/Header';

export default function Reports() {
  return (
    <div className="p-6">
      <Header title="Reports" />
      <div className="mt-4">
        <p className="text-gray-700">View all reports and statistics here.</p>
      </div>
      <ChartLink />
    </div>
  );
}
