import Link from 'next/link';
import React, { useState } from 'react';
import type { CstaStandard, StateStandard } from '@prisma/client';
import { colorFromHueRange, stateAbbreviations } from '@/helpers/helpers';

const Pdf: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [confidence, setConfidence] = useState(0.3);
  const [state, setState] = useState('');
  const [selectedCSTA, setSelectedCSTA] = useState<
    | (CstaStandard & {
        confidence: number;
        stateStandards: (StateStandard & { confidence: number })[];
      })
    | null
  >(null);
  const [loading, setLoading] = useState(false);
  const [cstaStandards, setCstaStandards] = useState<
    (CstaStandard & {
      confidence: number;
      stateStandards: (StateStandard & { confidence: number })[];
    })[]
  >([]);
  const [stateStandards, setStateStandards] = useState<
    (StateStandard & { confidence: number })[]
  >([]);

  const handleUpload = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file as File);
    formData.append('confidence', confidence.toString());
    formData.append('state', state);

    const response = await fetch('/api/pdf', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    setCstaStandards(response.csta);
    setStateStandards(response.state);
    setLoading(false);
  };

  return (
    <div>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-center mb-8'>
          Upload Educational Material
        </h1>

        <div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
          <h2 className='text-2xl font-bold mb-4'>PDF Analysis</h2>
          <p className='mb-4'>
            Upload a PDF file containing educational material to analyze for
            CSTA standards alignment.
          </p>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold'
              htmlFor='Confidence'
            >
              Confidence Threshold: {confidence}
            </label>

            <input
              className='w-full'
              type='range'
              id='confidence'
              name='confidence'
              step='0.01'
              min='0'
              max='1'
              value={confidence}
              onChange={(e) => setConfidence(parseFloat(e.target.value))}
            />
          </div>
          <div className='mb-4 grid grid-cols-2 gap-4'>
            <div>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='pdf-file'
              >
                Select PDF File
              </label>
              <input
                className='w-full px-3 py-2 border rounded-lg'
                type='file'
                id='pdf-file'
                name='file'
                accept='.pdf'
                required
                onChange={(e) => {
                  const files = e.target.files;
                  if (files?.length) {
                    setFile(files[0]);
                  }
                }}
              />
            </div>
            <div>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='state'
              >
                Select a State
              </label>
              <select
                className='w-full px-3 py-2 border rounded-lg'
                id='state'
                name='state'
                required
                onChange={(e) => setState(e.target.value)}
              >
                <option value=''>Select a State</option>
                {Object.entries(stateAbbreviations).map(([state, abbr]) => (
                  <option key={abbr} value={abbr}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 cursor-pointer disabled:cursor-default disabled:bg-gray-200 disabled:hover:bg-gray-200 text-white font-bold py-2 px-4 rounded'
              disabled={!file}
              onClick={handleUpload}
            >
              Upload and Analyze
            </button>
          </div>
          <div className={'mb-4 p-4 rounded-lg ' + (loading ? '' : 'hidden')}>
            <p className='text-gray-500'>Uploading file...</p>
          </div>

          <div className={cstaStandards.length ? '' : 'hidden'}>
            <h2 className='text-2xl font-bold my-4 text-center'>
              Analysis Results
            </h2>

            <h2 className='text-xl font-bold my-4'>CSTA Standards</h2>

            {cstaStandards.map((csta) => (
              <div className='mt-2' key={csta.id}>
                <div className='p-4 border rounded-lg bg-blue-50'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-lg font-bold'>{csta.id}</h3>
                    <span
                      style={{
                        backgroundColor: colorFromHueRange(
                          { from: 0, to: 120, lightness: 90 },
                          csta.confidence,
                        ),
                        color: colorFromHueRange(
                          { from: 0, to: 120, lightness: 20 },
                          csta.confidence,
                        ),
                      }}
                      className='bg-green-100 text-green-800 px-2 py-1 rounded text-sm'
                    >
                      {(csta.confidence * 100).toFixed(1)}% match
                    </span>
                  </div>
                  <p className='mb-2'>{csta.standard}</p>
                  <p className='mb-4 text-xs text-gray-700'>
                    {csta.clarification}
                  </p>

                  <div className='grid grid-cols-2 gap-2 text-sm mb-4'>
                    <div>
                      <strong>Concept:</strong> {csta.category || 'N/A'}
                    </div>
                    <div>
                      <strong>Grade:</strong> {csta.level || 'N/A'}
                    </div>
                  </div>

                  <button
                    className='bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded w-full'
                    onClick={() => {
                      setSelectedCSTA(csta);
                      (
                        document.querySelector(
                          '#related-state-standards',
                        ) as HTMLDialogElement
                      )?.showModal();
                    }}
                  >
                    Show Related State Standards
                  </button>
                </div>
              </div>
            ))}

            {stateStandards.length ? (
              <>
                <h2 className='text-xl font-bold my-4'>State Standards</h2>

                {stateStandards.map((standard) => (
                  <div className='mt-2' key={standard.id}>
                    <div className='p-4 border rounded-lg bg-blue-50'>
                      <div className='flex justify-between items-start mb-2'>
                        <h3 className='text-lg font-bold'>
                          {standard.stateId}
                        </h3>
                        <span
                          style={{
                            backgroundColor: colorFromHueRange(
                              { from: 0, to: 120, lightness: 90 },
                              standard.confidence,
                            ),
                            color: colorFromHueRange(
                              { from: 0, to: 120, lightness: 20 },
                              standard.confidence,
                            ),
                          }}
                          className='bg-green-100 text-green-800 px-2 py-1 rounded text-sm'
                        >
                          {(standard.confidence * 100).toFixed(1)}% match
                        </span>
                      </div>
                      <p className='mb-2'>{standard.standard}</p>

                      <div className='grid grid-cols-2 gap-2 text-sm mb-4'>
                        <div>
                          <strong>Concept:</strong> {standard.category || 'N/A'}
                        </div>
                        <div>
                          <strong>Grade:</strong> {standard.grade || 'N/A'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>

        <div
          id='results-container'
          className='bg-white rounded-lg shadow-lg p-6 mb-8 hidden'
        >
          <h2 className='text-2xl font-bold mb-4'>Analysis Results</h2>

          <div className='mb-4'>
            <h3 className='text-xl font-bold mb-2'>Content Summary</h3>
            <div id='content-summary' className='bg-gray-100 p-4 rounded-lg'>
              <p className='text-gray-500'>No summary available</p>
            </div>
          </div>

          <div className='mb-4'>
            <h3 className='text-xl font-bold mb-2'>Key Concepts</h3>
            <div id='key-concepts' className='flex flex-wrap gap-2'>
              <span className='text-gray-500'>No concepts identified</span>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-2'>Matched Standards</h3>
            <div id='matched-standards' className='space-y-4'>
              <p className='text-gray-500'>No standards matched</p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-6'>
          <h2 className='text-2xl font-bold mb-4'>Navigation</h2>
          <div className='flex flex-wrap gap-4'>
            <Link
              href='/'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      <dialog
        id='related-state-standards'
        className='w-1/2 mx-auto my-auto rounded-lg'
      >
        <div className='bg-white rounded-lg p-6'>
          <h2 className='text-2xl font-bold mb-4'>Related State Standards</h2>
          <div className='space-y-4'>
            {selectedCSTA?.stateStandards.map((stateStandard) => (
              <div
                className='p-2 border rounded border-green-300'
                style={{
                  backgroundColor: colorFromHueRange(
                    { from: 0, to: 120, lightness: 92 },
                    stateStandard.confidence,
                  ),
                }}
                key={stateStandard.id}
              >
                <div className='flex justify-between'>
                  <span className='font-semibold'>
                    {stateStandard.state} - {stateStandard.stateId}
                  </span>
                  <span
                    className='text-sm'
                    style={{
                      color: colorFromHueRange(
                        { from: 0, to: 120, lightness: 30 },
                        stateStandard.confidence,
                      ),
                    }}
                  >
                    {(stateStandard.confidence * 100).toFixed(1)}% match
                  </span>
                </div>
                <p className='text-sm mt-1'>{stateStandard.standard}</p>
              </div>
            ))}
          </div>
          <div className='bg-white sticky inset-x-0 bottom-0 pb-4 -mb-6'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer'
              onClick={() =>
                (
                  document.querySelector(
                    '#related-state-standards',
                  ) as HTMLDialogElement
                )?.close()
              }
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Pdf;
