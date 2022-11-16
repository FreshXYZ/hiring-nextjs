import { NextPage } from 'next';
import { ShareholderTable } from '../components/shareholder-table/shareholder-table';

const Home: NextPage = (props) => {
  return (
    <div className="min-h-screen p-2 min-w-screen bg-secondary-grey-light-2 md:bg-white">
      <ShareholderTable />
    </div>
  );
};

export default Home;
