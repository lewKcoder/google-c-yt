import Head from 'next/head';
import Header from '../components/Header';

function search() {
  return (
    <div>
      <Head>
        <title>Search Result</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}

export default search;
