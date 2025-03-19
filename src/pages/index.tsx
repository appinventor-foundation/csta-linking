import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>CSTA Classification</title>
      </Head>

      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-center mb-8'>
          CSTA Standards Knowledge Graph
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-2xl font-bold'>Standards Relationships</h2>
                <div className='flex space-x-2'>
                  <button
                    id='zoom-in'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                  <button
                    id='zoom-out'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                  <button
                    id='reset-zoom'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className='mb-4 flex flex-wrap gap-4'>
                <div className='flex items-center'>
                  <select id='view-select' className='border rounded px-2 py-1'>
                    <option value='all'>All Standards</option>
                    <option value='state'>By State</option>
                    <option value='standard'>By Standard</option>
                  </select>
                </div>

                <div id='state-filter' className='flex items-center'>
                  <select
                    id='state-select'
                    className='border rounded px-2 py-1'
                  >
                    <option value=''>Select State</option>
                  </select>
                </div>

                <div id='standard-filter' className='flex items-center'>
                  <select
                    id='standard-select'
                    className='border rounded px-2 py-1'
                  >
                    <option value=''>Select Standard</option>
                  </select>
                </div>

                <button
                  id='refresh-btn'
                  className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded'
                >
                  Apply Filters
                </button>
              </div>

              <div className='mb-4 flex flex-wrap gap-4'>
                <div className='flex items-center'>
                  <span className='inline-block w-4 h-4 bg-blue-500 rounded-full mr-2'></span>
                  <span>National Standards</span>
                </div>
                <div className='flex items-center'>
                  <span className='inline-block w-4 h-4 bg-green-500 rounded-full mr-2'></span>
                  <span>Alabama Standards</span>
                </div>
                <div className='flex items-center'>
                  <span className='inline-block w-4 h-4 bg-red-500 rounded-full mr-2'></span>
                  <span>California Standards</span>
                </div>
                <div className='flex items-center'>
                  <span className='inline-block w-4 h-4 bg-purple-500 rounded-full mr-2'></span>
                  <span>New York Standards</span>
                </div>
              </div>

              <div
                id='graph-container'
                className='w-full h-[600px] border rounded-lg bg-gray-50'
              ></div>
              <div id='tooltip'></div>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h2 className='text-2xl font-bold mb-4'>Navigation</h2>
              <div className='flex flex-wrap gap-4'>
                <Link
                  href='/statistics'
                  className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
                >
                  View Statistics
                </Link>
                <Link
                  href='/pdf'
                  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                >
                  Analyze PDF
                </Link>
              </div>
            </div>
          </div>

          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
              <h2 className='text-2xl font-bold mb-4'>Node Details</h2>
              <div id='node-details' className='text-gray-500'>
                Click on a node to view details
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h2 className='text-2xl font-bold mb-4'>About</h2>
              <p className='mb-4'>
                This knowledge graph visualizes the relationships between CSTA
                (Computer Science Teachers Association) National Standards and
                state-specific standards.
              </p>
              <p className='mb-4'>
                <strong>Interaction:</strong>
              </p>
              <ul className='list-disc list-inside mb-4'>
                <li>Click and drag nodes to reposition them</li>
                <li>Hover over nodes to see details</li>
                <li>Use the zoom buttons to zoom in/out</li>
                <li>
                  Use the filters to focus on specific states or standards
                </li>
              </ul>
              <p>
                <strong>Legend:</strong>
              </p>
              <ul className='list-disc list-inside'>
                <li>Larger blue nodes represent national standards</li>
                <li>Smaller colored nodes represent state standards</li>
                <li>Darker lines indicate strong alignment</li>
                <li>Lighter lines indicate moderate alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
