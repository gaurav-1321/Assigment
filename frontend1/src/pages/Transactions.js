import ChartLink from '../components/ChartLink';
import Header from '../components/Header';

export default function Transactions() {
  return (
    <div className="p-6">
      <Header title="Transactions" />
      <div className="mt-4">
        <p className="text-gray-700">Check all transactions and payments here.</p>
      </div>
      <ChartLink />
    </div>
  );
}
