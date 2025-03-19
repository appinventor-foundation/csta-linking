import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>CSTA Classification | Statistics</title>
      </Head>

      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-center mb-8'>
          CSTA Standards Statistics
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-bold mb-4'>Standards by State</h2>
            <div className='h-80'>
              <canvas id='state-chart'></canvas>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-bold mb-4'>Standards by Concept</h2>
            <div className='h-80'>
              <canvas id='concept-chart'></canvas>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-bold mb-4'>
              Alignment Strength Distribution
            </h2>
            <div className='h-80'>
              <canvas id='alignment-chart'></canvas>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-bold mb-4'>Standards by Grade Band</h2>
            <div className='h-80'>
              <canvas id='grade-chart'></canvas>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
          <h2 className='text-2xl font-bold mb-4'>Standards Coverage</h2>
          <div className='overflow-x-auto'>
            <table className='min-w-full bg-white'>
              <thead>
                <tr>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                    State
                  </th>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                    Total Standards
                  </th>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                    Mapped to National
                  </th>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                    Coverage %
                  </th>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                    Strong Alignments
                  </th>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                    Moderate Alignments
                  </th>
                </tr>
              </thead>
              <tbody id='coverage-table-body'>
                <tr>
                  <td
                    colSpan={6}
                    className='py-4 px-4 text-center text-gray-500'
                  >
                    Loading data...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-6'>
          <h2 className='text-2xl font-bold mb-4'>Navigation</h2>
          <div className='flex flex-wrap gap-4'>
            <Link
              href='/'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Knowledge Graph
            </Link>
            <a
              href='/analyze'
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            >
              Analyze PDF
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
