import Link from 'next/link';
import React, { useState } from 'react';
import type { CstaStandard, StateStandard } from '@prisma/client';

const Pdf: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [confidence, setConfidence] = useState(0.5);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<
    (CstaStandard & {
      confidence: number;
      stateStandards: (StateStandard & { confidence: number })[];
    })[]
  >([
    {
      'id': '1B-NI-04',
      'level': '1B (Grades 3-5 / Ages 8-11)',
      'standard':
        'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
      'clarification':
        'Information is sent and received over physical or wireless paths. It is broken down into smaller pieces called packets, which are sent independently and reassembled at the destination. Students should demonstrate their understanding of this flow of information by, for instance, drawing a model of the way packets are transmitted, programming an animation to show how packets are transmitted, or demonstrating this through an unplugged activity which has them act it out in some way.',
      'category':
        'Networks & the Internet: Network Communication & Organization',
      'confidence': 0.8825381994247437,
      'stateStandards': [
        {
          'id': '18c4c071-b069-439f-bb10-2c8c08bdc33c',
          'state': 'NM',
          'stateId': '1B-NI-04',
          'grade': 'N/A',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.8825381994247437,
        },
        {
          'id': '52217502-e246-44df-ad58-5c53906880d6',
          'state': 'HI',
          'stateId': '1B-NI-04',
          'grade': 'N/A',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.8825381994247437,
        },
        {
          'id': '0ccb5d35-6672-41cf-bd75-cc8fa7888030',
          'state': 'NC',
          'stateId': '35-NI-01',
          'grade': 'N/A',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.8825381994247437,
        },
        {
          'id': 'c0db8ba8-bb66-4d02-a27d-767554f82c63',
          'state': 'Illinois',
          'stateId': '3-5.NI.04',
          'grade': 'N/A',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.8825381994247437,
        },
        {
          'id': '308dfa87-85b0-4462-b6ec-9040125dcb79',
          'state': 'CA',
          'stateId': '3-5.NI.4',
          'grade': 'N/A',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category':
            'Networks & the Internet/Network Communication & Organization',
          'notes': null,
          'confidence': 0.8825381994247437,
        },
        {
          'id': '53eb6e98-09be-4be3-93e3-c7e0243e909a',
          'state': 'Michigan',
          'stateId': '1B-NI-04',
          'grade': null,
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.8825381994247437,
        },
        {
          'id': '02125d2d-447b-40bf-8d12-6367d9553682',
          'state': 'NH',
          'stateId': '1B-NI-04',
          'grade': 'N/A',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.8825381994247437,
        },
        {
          'id': '3baa146a-bf83-49c1-89d4-e9d98ba672f4',
          'state': 'CT',
          'stateId': '1B-NI-04',
          'grade': 'N/A',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.8825381994247437,
        },
        {
          'id': '6cc0f99d-a7fe-4fe8-8457-c810d0d8a056',
          'state': 'Iowa',
          'stateId': '1B-NI-04',
          'grade': 'N/A',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.8825381994247437,
        },
        {
          'id': '91136bda-acf0-4d4e-bc40-a24cd3104b8a',
          'state': 'RI',
          'stateId': '1B-CSN-N-1',
          'grade': 'N/A',
          'standard':
            'Model how information is broken down into smaller pieces of data, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category': 'Computing Systems & Networks',
          'notes': null,
          'confidence': 0.8738060593605042,
        },
        {
          'id': '5ecad5b9-82fe-4bb3-a16f-5883459716d1',
          'state': 'Indiana',
          'stateId': '3-5.NI.2:',
          'grade': null,
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the internet, and reassembled at the destination.',
          'category': 'Networking & The Internet',
          'notes': null,
          'confidence': 0.8730700016021729,
        },
        {
          'id': 'be1d9b6f-8bd7-4768-98ac-f11ec04471d7',
          'state': 'NV',
          'stateId': '4.NI.NCO.1',
          'grade': '4th',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the internet, and reassembled at the destination.',
          'category': 'NI.NCO: Network, Communication, and Organization',
          'notes': null,
          'confidence': 0.8730700016021729,
        },
        {
          'id': '57f9b61e-e8b0-4a7c-ac84-373a2eb667ad',
          'state': 'OK',
          'stateId': '5.NI.NCO.01',
          'grade': '5th',
          'standard':
            'Model how information is broken down into packets (i.e., smaller pieces), transmitted through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category':
            'Networks & the Internet / Network Communication & Organization',
          'notes': null,
          'confidence': 0.8625264167785645,
        },
        {
          'id': 'f7d0b42b-6d63-4454-b92a-3aa48e7537f6',
          'state': 'NJ',
          'stateId': '8.1.8.NI.1',
          'grade': 'N/A',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as addressed packets through multiple devices over networks and the Internet, and reassembled at the destination. ',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.8613638877868652,
        },
        {
          'id': '934c4a7d-f32d-45ec-afde-ace44a48aed5',
          'state': 'WA',
          'stateId': '1B-NI-04',
          'grade': 'N/A',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination. (P. 4.4)',
          'category': '',
          'notes': '4.4',
          'confidence': 0.8508317470550537,
        },
        {
          'id': 'b306f4ae-0e37-4746-a4a3-60b9ffb9e27f',
          'state': 'MD',
          'stateId': '5.NI.NCO.01',
          'grade': '5th',
          'standard':
            'Model how information is deconstructed into packets (smaller pieces), transmitted through multiple devices over the internet and networks, and reassembled at the final destination.',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.8336228728294373,
        },
        {
          'id': 'b444021d-4174-4399-924c-2406b0f97310',
          'state': 'VA',
          'stateId': 'CSF.2',
          'grade': 'N/A',
          'standard':
            'The student will model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.8153501152992249,
        },
        {
          'id': '2d9de17b-e593-44b3-9e20-204001b111fb',
          'state': 'UT',
          'stateId': '5.NI.1',
          'grade': '5th',
          'standard':
            'Model how information is broken down into smaller pieces, transmitted as packets (data groups) through multiple devices over networks and the Internet, and reassembled at the destination. (Practice 4: Developing and Using Abstractions)',
          'category': 'Network and the Internet (NI)',
          'notes': 'Minor rewording.',
          'confidence': 0.8122532367706299,
        },
        {
          'id': 'e1e8cc9d-1c87-48d7-802c-f934df700117',
          'state': 'Kansas',
          'stateId': '5.NI.NCO.01 ',
          'grade': '5th',
          'standard':
            'Model how information is broken down into smaller pieces and transmitted through multiple devices over networks and the internet, and how these pieces are assembled at the destination. ',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.8115916848182678,
        },
        {
          'id': 'a74c0ee9-6730-4b8e-9840-53c3599f2ffd',
          'state': 'VA',
          'stateId': '7.15',
          'grade': '7th',
          'standard':
            'The student will model how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the Internet, and reassembled at the destination.',
          'category': 'Networking and the Internet',
          'notes': null,
          'confidence': 0.8063952922821045,
        },
        {
          'id': '8675c395-0a86-46ab-bb2f-1aa19dd3b507',
          'state': 'Missouri',
          'stateId': '5.NI.NCO.01 ',
          'grade': '5th',
          'standard':
            'Model how information is broken down into packets, transmitted through multiple computing devices over networks and the internet and reassembled at the destination.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.8031765818595886,
        },
        {
          'id': '43058d69-4e5b-45c0-b2be-7b1003193a6b',
          'state': 'MS',
          'stateId': '5.NI.NCO.01 ',
          'grade': '5th',
          'standard':
            'Model how information is broken down into packets, transmitted through multiple computing devices over networks and the internet and reassembled at the destination. ',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.8006398677825928,
        },
        {
          'id': '536f3410-117e-4072-af1a-7988bbc98be2',
          'state': 'WY',
          'stateId': '5.NI.NCO.01 ',
          'grade': 'N/A',
          'standard':
            'Model and explain how information is broken down into smaller pieces, transmitted as packets through multiple devices over networks and the internet, and reassembled at the destination. [Practice 4.4 Developing and Using Abstractions]',
          'category':
            'Network & The Internet: Network, Communication, & Organization',
          'notes':
            'WY standard requires that students not only model but also explain otherwise the standards are identical.',
          'confidence': 0.7995023727416992,
        },
        {
          'id': '8a11882f-15cc-4efc-9bec-522254f23c39',
          'state': 'UT',
          'stateId': '4.NI.1',
          'grade': '4th',
          'standard':
            'Model how information is broken down into smaller pieces called packets and transmitted through multiple devices over physical or wireless paths and reassembled at the destination. (Practice 4: Developing and Using Abstractions)',
          'category': 'Network and the Internet (NI)',
          'notes':
            'UT standard is almost identical to the CSTA standard with a bit of rewording.',
          'confidence': 0.7982338666915894,
        },
        {
          'id': 'e816e3bd-3407-425a-83d8-16fc647a3274',
          'state': 'AZ',
          'stateId': '4.NI.NCO.1',
          'grade': '4th',
          'standard':
            'Model how information is decomposed, transmitted as packets through multiple devices over networks and reassembled at the destination.',
          'category':
            'Networks and the Internet (NI) / Network, Communication, and Organization (NCO)',
          'notes': null,
          'confidence': 0.789784848690033,
        },
        {
          'id': '47be2865-2ad2-41ff-b920-101159d0385d',
          'state': 'Missouri',
          'stateId': '4.NI.NCO.01 ',
          'grade': '4th',
          'standard':
            'Explain how information is broken down into packets, transmitted through multiple computing devices over networks and the internet and reassembled at the destination.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.7432976365089417,
        },
        {
          'id': '45b26d2c-4f75-49c3-acde-0956726b34e4',
          'state': 'MS',
          'stateId': '4.NI.NCO.01 ',
          'grade': '4th',
          'standard':
            'Explain how information is broken down into packets, transmitted through multiple computing devices over networks and the internet and reassembled at the destination. ',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.7355172634124756,
        },
        {
          'id': '9b4e64ea-a0b3-4478-a2cc-7d38c3275835',
          'state': 'AK',
          'stateId': '5.NI.NCO.01 ',
          'grade': '5th',
          'standard':
            'Recognize, explain, and model how information is broken down into packets (smaller pieces), transmitted between devices, and reassembled.',
          'category':
            'Network and the Internet: Network Communication and Organization',
          'notes':
            'AK standard requires recognition and explanation of packets as well as modeling how packets work.',
          'confidence': 0.7072608470916748,
        },
        {
          'id': 'bc5b0ad8-c0f8-4038-b42a-e3320631b49a',
          'state': 'MT',
          'stateId': 'CS.NI.6-8.3',
          'grade': 'N/A',
          'standard':
            'demonstrate how information is broken down and transmitted through multiple devices over networks and the internet and reassembled at the destination',
          'category': 'Networks and the Internet',
          'notes':
            'MT changed the word model to demonstrate and un-capitalized Internet otherwise it is identical to the CSTA 1B standard',
          'confidence': 0.6059945225715637,
        },
        {
          'id': '64e1f173-7545-4c0c-801b-353dd7995e23',
          'state': 'MD',
          'stateId': '4.NI.NCO.01',
          'grade': '4th',
          'standard':
            'Summarize how information is sent and received over physical and wireless pathways (e.g., information is deconstructed in smaller pieces called packets, transmitted to final destination, and reassembled).',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.590694785118103,
        },
        {
          'id': '5295bb24-a9c2-41cb-90de-f6eed5c5d852',
          'state': 'OK',
          'stateId': '4.NI.NCO.01',
          'grade': '4th',
          'standard':
            'Explain how information is sent and received across physical or wireless paths (e.g., It is broken down into smaller pieces called packets and transmitted from one location to another).',
          'category':
            'Networks & the Internet / Network Communication & Organization',
          'notes': null,
          'confidence': 0.5841647386550903,
        },
        {
          'id': 'd9ff5980-a5e9-4a49-86a4-4db920879d4c',
          'state': 'OK',
          'stateId': '8.NI.NCO.01',
          'grade': '8th',
          'standard':
            'Explain protocols and their importance to data transmission; model how packets are broken down into smaller pieces and how they are delivered.',
          'category':
            'Networks & the Internet / Network Communication & Organization',
          'notes': null,
          'confidence': 0.5606653094291687,
        },
        {
          'id': 'd35832ec-daf5-4b5c-b08e-4b4ce1706ffb',
          'state': 'OK',
          'stateId': '8.NI.NCO.01',
          'grade': '8th',
          'standard':
            'Explain protocols and their importance to data transmission; model how packets are broken down into smaller pieces and how they are delivered.',
          'category':
            'Networks & the Internet / Network Communication & Organization',
          'notes': null,
          'confidence': 0.5606653094291687,
        },
        {
          'id': '9690e06d-8a35-4b36-b7ad-51ac43db94b5',
          'state': 'AK',
          'stateId': '8.NI.NCO.01 ',
          'grade': '8th',
          'standard':
            'Explain protocols and their importance to data transmission; model how packets are broken down into smaller pieces and how they are delivered.',
          'category':
            'Network and the Internet: Network Communication and Organization',
          'notes':
            'The second part of the AK standard is similar to CSTA 1B-NI-04 standard.',
          'confidence': 0.5585630536079407,
        },
        {
          'id': '0464def5-75e3-49cc-9432-5ead3ce21286',
          'state': 'AK',
          'stateId': '8.NI.NCO.01 ',
          'grade': '8th',
          'standard':
            'Explain protocols and their importance to data transmission; model how packets are broken down into smaller pieces and how they are delivered.',
          'category':
            'Network and the Internet: Network Communication and Organization',
          'notes':
            'The first part of the AK standard is based on the CSTA 6-8 standard.',
          'confidence': 0.5585630536079407,
        },
        {
          'id': 'b1baca4f-d4f7-4fd5-83ea-99d029cdbfb1',
          'state': 'Kansas',
          'stateId': 'MG.NI.NCO.01',
          'grade': null,
          'standard':
            'Explain protocols and their importance to data transmission; model how packets are broken down into smaller pieces and how they are delivered.',
          'category': 'Computing Systems',
          'notes': null,
          'confidence': 0.5585630536079407,
        },
        {
          'id': 'c5e05398-d33d-43ee-b980-d71006ac0346',
          'state': 'WY',
          'stateId': '8.NI.NCO.01 ',
          'grade': 'N/A',
          'standard':
            'Model the role of protocols in transmitting data across networks and the internet (e.g., explain protocols and their importance to data transmission; model how packets are broken down into smaller pieces and how they are delivered). [Practice 4.4 Developing and Using Abstractions]',
          'category':
            'Network & The Internet: Network, Communication, & Organization',
          'notes':
            'WY standard includes examples in the standard text but otherwise is identical to the CSTA standard.',
          'confidence': 0.5559793710708618,
        },
        {
          'id': '0a794d30-6a39-4707-ad38-45505eca8ad7',
          'state': 'OH',
          'stateId': 'NI.N.5.a',
          'grade': '5th',
          'standard':
            'Model how information is broken down to be transmitted and then reassembled to help students gain a better understanding of the internet and networks. ',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.5385830402374268,
        },
        {
          'id': '097ea3fe-9416-4200-bd1d-6fe7e93abc6a',
          'state': 'OH',
          'stateId': 'NI.IOT.5.a',
          'grade': '5th',
          'standard':
            'Learn and model how information is broken down to be transmitted by smart devices to help students visualize how information transfers over the internet. ',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.5261178016662598,
        },
        {
          'id': '2e3a1ce0-ba01-42d7-bcf8-1a8050a326d8',
          'state': 'Wisconsin',
          'stateId': 'NI2.a.6.m',
          'grade': null,
          'standard':
            'Simulate how information is transmitted as packets through multiple devices over the internet and networks.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.5068796277046204,
        },
        {
          'id': '1e874975-9cff-462a-aed9-dc0742e755e8',
          'state': 'MD',
          'stateId': '6.NI.NCO.01',
          'grade': '6th',
          'standard':
            'Model a simple protocol for transferring information, using packets, across networks and the internet. ',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.5022621750831604,
        },
        {
          'id': 'c61cc08c-8e7b-4039-831b-5e333b6423d3',
          'state': 'Missouri',
          'stateId': '3.NI.NCO.01 ',
          'grade': '3rd',
          'standard':
            'Recognize how information changes when sent and received over physical or wireless paths. (Information is broken into smaller parts, sent to the destination and then reassembled into a whole.)',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.4820893108844757,
        },
        {
          'id': 'eb2a15c9-2775-464f-955d-ce2d4bbabdb8',
          'state': 'MS',
          'stateId': '3.NI.NCO.01 ',
          'grade': '3rd',
          'standard':
            'Recognize how information changes when sent and received over physical or wireless paths. (Information is broken into smaller parts, sent to the destination and then reassembled into a whole.) ',
          'category': 'Computing Systems',
          'notes': null,
          'confidence': 0.4794298708438873,
        },
        {
          'id': '6adfd86f-2aa3-4b1d-b7e6-3a5fa5250d10',
          'state': 'ID',
          'stateId': '6-8.NI.01',
          'grade': 'N/A',
          'standard':
            'Simulate the flow of information as packets on the Internet and networks (e.g. model using strings and paper, note passing).',
          'category': 'Networks and the Internet',
          'notes': 'ID standard is similar to a lower-level CSTA standard.',
          'confidence': 0.4569156467914581,
        },
        {
          'id': '1da340b8-380d-4f43-93d2-dbcd60332e27',
          'state': 'MS',
          'stateId': '4.CS.HS.01 ',
          'grade': '4th',
          'standard':
            'Model that information is translated, transmitted and processed in order to flow through hardware and software. ',
          'category': 'Computing Systems',
          'notes': null,
          'confidence': 0.4528486430644989,
        },
        {
          'id': 'b53d208b-d136-4158-97fb-86357c71a914',
          'state': 'OH',
          'stateId': 'NI.N.4.a',
          'grade': '4th',
          'standard':
            'Describe how information is broken down to be transmitted over a network to help students gain a better understanding of the internet and networks.',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.4503556787967682,
        },
        {
          'id': '585acaf6-d87e-4fc2-afa6-97b011019f51',
          'state': 'NH',
          'stateId': '2-NI-04',
          'grade': 'N/A',
          'standard':
            'Model the role of protocols in transmitting data across networks and the Internet.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.4340604841709137,
        },
        {
          'id': '4558d7e4-30fd-4610-8a97-11af342b773e',
          'state': 'Illinois',
          'stateId': '6-8.NI.04',
          'grade': 'N/A',
          'standard':
            'Model the role of protocols in transmitting data across networks and the Internet.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.4340604841709137,
        },
        {
          'id': '252b3dab-d689-478d-bcf4-5346ca4b8c67',
          'state': 'NM',
          'stateId': '2-NI-04',
          'grade': 'N/A',
          'standard':
            'Model the role of protocols in transmitting data across networks and the Internet.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.4340604841709137,
        },
        {
          'id': 'd7c4f768-5547-4069-8d9f-681b75647c62',
          'state': 'Iowa',
          'stateId': '2-NI-04',
          'grade': 'N/A',
          'standard':
            'Model the role of protocols in transmitting data across networks and the Internet.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.4340604841709137,
        },
        {
          'id': 'bd099fee-63ce-44ac-af38-47e0353c6540',
          'state': 'MS',
          'stateId': '6-8.NI.NCO.01 ',
          'grade': 'N/A',
          'standard':
            'Model the different ways that data is transferred across a network and the protocols used to transmit the data. ',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.4250371158123016,
        },
        {
          'id': 'a67cbfa7-8006-4532-871c-f770e7fe6de7',
          'state': 'CT',
          'stateId': '2-NI-04',
          'grade': 'N/A',
          'standard':
            'Model the role of protocols in transmitting data across networks and the Internet.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.4236387610435486,
        },
        {
          'id': 'c7382955-17ff-42de-9baf-52d5c0308792',
          'state': 'Michigan',
          'stateId': '2-NI-04',
          'grade': null,
          'standard':
            'Model the role of protocols in transmitting data across networks and the Internet.',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.4236387610435486,
        },
        {
          'id': 'adc87114-a812-4110-ad5b-ce7534575237',
          'state': 'RI',
          'stateId': '2-CSN-N-1',
          'grade': 'N/A',
          'standard':
            'Model the role of protocols in transmitting data across networks and the Internet.',
          'category': 'Computing Systems & Networks',
          'notes': null,
          'confidence': 0.4236387610435486,
        },
        {
          'id': '726b5c94-0f0c-480b-b80a-9eac23c4782e',
          'state': 'CA',
          'stateId': '6-8.NI.4',
          'grade': 'N/A',
          'standard':
            'Model the role of protocols in transmitting data across networks and the Internet.',
          'category':
            'Networks & the Internet/Network Communication & Organization',
          'notes': null,
          'confidence': 0.4236387610435486,
        },
        {
          'id': '8a0bc05f-6c03-49bd-9a15-8132aec401d6',
          'state': 'OK',
          'stateId': '6.NI.NCO.01',
          'grade': '6th',
          'standard':
            'Model a simple protocol for transferring information using packets.',
          'category':
            'Networks & the Internet / Network Communication & Organization',
          'notes':
            'May have also been somewhat based on a progression from 1B-NI-04',
          'confidence': 0.4195415079593658,
        },
        {
          'id': 'b5bef683-1303-4abc-8063-2a0e30e4d28e',
          'state': 'AK',
          'stateId': '6.NI.NCO.01',
          'grade': '6th',
          'standard':
            'Model a simple protocol for transferring information using packets.',
          'category':
            'Network and the Internet: Network Communication and Organization',
          'notes':
            'AK requires only one protocol while the CSTA standard seems to require more than one.',
          'confidence': 0.4195415079593658,
        },
        {
          'id': 'dee3d0c2-ef77-4cee-864f-3c6fa8c4bfb0',
          'state': 'Missouri',
          'stateId': '6‐8.NI.NCO.01 ',
          'grade': null,
          'standard':
            'Model the different ways that data is transferred across a network and the protocols used to transmit the data.',
          'category': '',
          'notes': null,
          'confidence': 0.4175041019916534,
        },
        {
          'id': '84ee0cae-d682-479b-bcab-d8f4b3a868d0',
          'state': 'Indiana',
          'stateId': '6-8.NI.2:',
          'grade': null,
          'standard':
            'Model the role of protocols in transmitting data across networks and the internet. (E)',
          'category': 'Networking & The Internet',
          'notes': null,
          'confidence': 0.417362242937088,
        },
        {
          'id': '678d5bc8-e0cf-43fd-b95d-e257ebb8e356',
          'state': 'OH',
          'stateId': 'NI.N.8.b',
          'grade': '8th',
          'standard':
            'Model protocols (i.e., rules) and explain why they are used to transmit data across networks and the internet. ',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.4150033891201019,
        },
        {
          'id': '84082d33-657e-406b-9f35-6712a44d4416',
          'state': 'NC',
          'stateId': 'K2-NI-01',
          'grade': 'N/A',
          'standard':
            'Illustrate how information is broken down into smaller pieces and can be reassembled.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.4058628678321838,
        },
        {
          'id': '9fff1849-8ddd-4b18-9d84-1b6a57666e9c',
          'state': 'NJ',
          'stateId': '8.1.8.NI.2',
          'grade': 'N/A',
          'standard':
            'Model the role of protocols in transmitting data across networks and the Internet and how they enable secure and errorless communication. ',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.4019157588481903,
        },
        {
          'id': '077bebef-00fb-47ef-803a-e7d833c87df8',
          'state': 'WA',
          'stateId': '2-NI-04',
          'grade': 'N/A',
          'standard':
            'Model the role of protocols in transmitting data across networks and the Internet. (P. 4.4)',
          'category': '',
          'notes': '4.4',
          'confidence': 0.4000280499458313,
        },
        {
          'id': '5ddde5ed-ab47-4c48-8035-4aa0b168af98',
          'state': 'ND',
          'stateId': '7.NI.1',
          'grade': '7th',
          'standard':
            'Model how data is sent from one computer to another across networks.',
          'category': 'Technology Systems Networks & Internet',
          'notes': null,
          'confidence': 0.3985214531421661,
        },
        {
          'id': '036aa1fe-5124-44ff-acb5-33eeeb004444',
          'state': 'Kentucky',
          'stateId': 'E-NI-02',
          'grade': '5th',
          'standard':
            'Use a model to represent how digital information is sent and received over physical or wireless paths.',
          'category': 'Networks and the Internet',
          'notes': 'Subconcept: Cybersecurity',
          'confidence': 0.3928239643573761,
        },
        {
          'id': '9a144d9b-e771-4294-8ecc-52a6067a4310',
          'state': 'AR',
          'stateId': 'CSK8.G5.8.1',
          'grade': '5th',
          'standard':
            'Describe how information can be transmitted using computing devices via a network',
          'category': 'Computers and Communications',
          'notes': null,
          'confidence': 0.3903144299983978,
        },
        {
          'id': '4fedaef8-ee77-4cfd-9766-cc1d070d34be',
          'state': 'AR',
          'stateId': 'CSK8.G6.8.1',
          'grade': '6th',
          'standard':
            'Describe how information can be transmitted using computing devices via a network',
          'category': 'Computers and Communications',
          'notes': 'AR standard have also been based on 1B-NI-04 ',
          'confidence': 0.3903144299983978,
        },
        {
          'id': '061710c7-7062-4675-8c72-183feec026b0',
          'state': 'SC',
          'stateId': 'HS1.NI.1.1',
          'grade': 'N/A',
          'standard':
            'Describe how hardware, software, and protocols work together for transmitting data across networks. ',
          'category': 'Networks & the Internet',
          'notes':
            'Standard 1: Evaluate data transmission across networks, including the Internet. ',
          'confidence': 0.3794140219688416,
        },
        {
          'id': '3e9cdf9f-450f-453b-a747-1432799ea8c9',
          'state': 'NJ',
          'stateId': '8.1.5.NI.1',
          'grade': 'N/A',
          'standard':
            'Develop models that successfully transmit and receive information using both wired and wireless methods. ',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.3792178928852081,
        },
        {
          'id': 'f6508259-8993-4666-b43d-f293fe4048e0',
          'state': 'UT',
          'stateId': '7.NI.1',
          'grade': '7th',
          'standard':
            'Model the role of protocols in transmitting data across networks and the Internet. (Practice 7: Communication about Computing)',
          'category': 'Network and the Internet (NI)',
          'notes':
            'UT standard includes practices in the text of the standard but otherwise the standard is identical.',
          'confidence': 0.3779074847698212,
        },
        {
          'id': '209bebfc-75ce-4fad-9e8a-c4362c19733e',
          'state': 'AZ',
          'stateId': '8.NI.NCO.1',
          'grade': '8th',
          'standard':
            'Develop models to illustrate the role of protocols in transmitting data across networks and the Internet.  ',
          'category':
            'Networks and the Internet (NI) / Network, Communication, and Organization (NCO)',
          'notes':
            'AZ requires students to develop models (plural) while CSTA standard could be met with a teacher created model that students use.',
          'confidence': 0.3738381564617157,
        },
        {
          'id': '3d9add85-89cc-4a97-a0ca-5fe49a072c09',
          'state': 'OH',
          'stateId': 'NI.IOT.3.a',
          'grade': '3rd',
          'standard':
            'Describe how devices send and receive information over physical or wireless paths to identify how information is transmitted.',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.3732074201107025,
        },
        {
          'id': 'f94230c7-5db1-427d-a318-0da777dca56f',
          'state': 'VA',
          'stateId': 'MSCSE.10',
          'grade': 'N/A',
          'standard':
            'The student will model the role of protocols in transmitting data across networks and the Internet.',
          'category': 'Networking and the Internet',
          'notes': null,
          'confidence': 0.3714824914932251,
        },
        {
          'id': 'd284a8c5-2e21-4601-8882-6478920f84b9',
          'state': 'MA',
          'stateId': '6-8.CS.c.3',
          'grade': 'N/A',
          'standard':
            'Describe how information, both text and non-text, is translated and communicated between digital devices over a computer network.',
          'category': 'Computing Systems',
          'notes': null,
          'confidence': 0.3565265834331512,
        },
        {
          'id': '3882bd49-1303-4c32-aae8-df5af967ebae',
          'state': 'VA',
          'stateId': '7.14',
          'grade': '7th',
          'standard':
            'The student will explain why protocols are necessary in data transmission. Model the role of protocols in transmitting data across networks and the Internet.',
          'category': 'Networking and the Internet',
          'notes': null,
          'confidence': 0.3262208700180054,
        },
        {
          'id': '1af78b83-2d05-4217-b1bf-e83906e762c7',
          'state': 'Kansas',
          'stateId': '4.NI.NCO.01 ',
          'grade': '4th',
          'standard':
            'Explain how information is sent and received across physical or wireless paths. ',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.3193780779838562,
        },
        {
          'id': '91f18661-5fa9-4c2f-b7ba-eaca7de4d269',
          'state': 'ND',
          'stateId': '6.NI.1',
          'grade': '6th',
          'standard': 'Explain how data is sent across networks.',
          'category': 'Technology Systems Networks & Internet',
          'notes': null,
          'confidence': 0.317820817232132,
        },
        {
          'id': 'db70ac43-4b80-4656-b653-1340342f71cb',
          'state': 'ND',
          'stateId': '6.NI.1',
          'grade': '6th',
          'standard': 'Explain how data is sent across networks.',
          'category': 'Technology Systems Networks & Internet',
          'notes': null,
          'confidence': 0.317820817232132,
        },
        {
          'id': 'c641d8a8-5ebb-42ce-afe5-257037aca24d',
          'state': 'SC',
          'stateId': 'HS4.NI.1.1',
          'grade': 'N/A',
          'standard':
            'Trace data through the Open Systems Interconnect (OSI) Model. ',
          'category': 'Networks & the Internet',
          'notes':
            'Standard 1: Evaluate data transmission across networks, including the Internet. ',
          'confidence': 0.3160834610462189,
        },
        {
          'id': 'ec4650ef-64bd-4ddd-aeb3-d501120d049f',
          'state': 'AR',
          'stateId': 'CSCS.Y2.8.4',
          'grade': 'N/A',
          'standard':
            'Research and describe the flow of common internet traffic by using a protocol analyzer (e.g., NetworkMiner, Wireshark, Zeek) to inspect how programs communicate over a network',
          'category': 'Computers and Communications',
          'notes': 'No corresponding CSTA standard',
          'confidence': 0.315459817647934,
        },
        {
          'id': 'd6109e98-9d1f-4777-8e73-9d5a52cdd001',
          'state': 'NC',
          'stateId': '68-NI-01',
          'grade': 'N/A',
          'standard':
            'Anaylze different ways that data is transferred across a network and the role of protocols in transmitting data.',
          'category': 'Networks & the Internet',
          'notes': null,
          'confidence': 0.3091168701648712,
        },
        {
          'id': '03e0a02a-d6c9-4fa1-8e9b-6c0e29ffe986',
          'state': 'AR',
          'stateId': 'CSNT.Y3.8.4',
          'grade': 'N/A',
          'standard':
            'Interpret network protocols used for data transmission in a simulated network',
          'category': 'Computers and Communications',
          'notes': 'No corresponding CSTA standard',
          'confidence': 0.3082121610641479,
        },
        {
          'id': '8105dd74-d3e7-4be5-8191-272df280503c',
          'state': 'NY',
          'stateId': '9-12.NSD.4',
          'grade': 'N/A',
          'standard':
            'Describe the components and design characteristics that allow data and information to be moved, stored, and referenced over the internet.',
          'category': 'Networks & System Design',
          'notes': null,
          'confidence': 0.3077691495418549,
        },
        {
          'id': '18f79c3b-7f0b-413d-a4bc-29cede96ca2d',
          'state': 'FL',
          'stateId': 'SC.68.CS-CS.5.1',
          'grade': 'N/A',
          'standard':
            'Describe how information, both text and non-text, is translated and communicated between digital computers over a computer network.',
          'category': 'Communication Systems and Computing',
          'notes': null,
          'confidence': 0.3017609417438507,
        },
        {
          'id': '3eac0e50-cafb-47a5-8913-8b8cf7d44bc8',
          'state': 'VA',
          'stateId': 'CSF.3',
          'grade': 'N/A',
          'standard':
            'The student will explain the role of protocols in transmitting data across networks and the Internet.',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.2905970811843872,
        },
        {
          'id': '906ad9ed-79da-44a2-8e3a-8ace130ee34b',
          'state': 'VA',
          'stateId': 'CSP.3',
          'grade': 'N/A',
          'standard':
            'The student will explain abstractions enabling  \r\na.\tone computer to communicate with another over an Internet connection; and \r\nb.\tdifferent layers of Internet technology to build on one another. \r',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.288716048002243,
        },
        {
          'id': 'ac084a4d-ab7e-49c9-a481-b98d4195bab6',
          'state': 'VA',
          'stateId': 'CSP.3',
          'grade': 'N/A',
          'standard':
            'The student will explain abstractions enabling  \r\na.\tone computer to communicate with another over an Internet connection; and \r\nb.\tdifferent layers of Internet technology to build on one another. \r',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.288716048002243,
        },
        {
          'id': '5f9955d6-9f0d-4244-b8c0-82e547f0b8dd',
          'state': 'AR',
          'stateId': 'CSNT.Y2.3.1 ',
          'grade': 'N/A',
          'standard':
            'Create programs to store, access, and manipulate level-appropriate data (e.g., structured data, objects)\nIdentify how data moves throughout a network and analyze network traffic and track packets',
          'category': 'Data, Information, and Security',
          'notes':
            'The identified CSTA standard relates to the second half of the AR standard for year 2. CSTA standard 3B-AP-14 is related to the first half',
          'confidence': 0.2872208952903748,
        },
        {
          'id': '6066b781-9d11-46c9-a42f-0135e9cbd2f4',
          'state': 'OH',
          'stateId': 'NI.N.3.a',
          'grade': '3rd',
          'standard':
            'Describe how communication occurs when information is sent and received over physical or wireless paths to explain communication systems (e.g., sending an email or visiting a website). ',
          'category': 'Networks and the Internet',
          'notes': null,
          'confidence': 0.2755703330039978,
        },
        {
          'id': 'cf10a5eb-396b-439c-9ff3-ffcdd69e2eb6',
          'state': 'AK',
          'stateId': '4.NI.NCO.01 ',
          'grade': '4th',
          'standard':
            'Recognize and explain how information is sent and received over both physical and wireless paths.',
          'category':
            'Network and the Internet: Network Communication and Organization',
          'notes': 'AK standard is a building block for the CSTA standard.',
          'confidence': 0.2751311063766479,
        },
        {
          'id': 'd0ba01d5-54e8-433f-83dd-749cf44e002f',
          'state': 'ID',
          'stateId': '9-10.NI.01',
          'grade': 'N/A',
          'standard':
            'Describe the underlying process of Internet-based services. (e.g. illustrate how information flows in a global network, servers and clients, cloud services, secure versus insecure communication).',
          'category': 'Networks and the Internet',
          'notes':
            'Some of the same ideas about networks are addressed in both standards but what students are required to know and what they will do differs.',
          'confidence': 0.2714292109012604,
        },
        {
          'id': '357722c2-cd2c-49a4-bfde-77a18ab3c031',
          'state': 'ND',
          'stateId': '8.NI.1',
          'grade': '8th',
          'standard':
            'Investigate how data is sent from one computer to another across networks.',
          'category': 'Technology Systems Networks & Internet',
          'notes': 'No corresponding level 2 CSTA standard ',
          'confidence': 0.2668761909008026,
        },
      ],
    },
    {
      'id': '1B-AP-08',
      'level': '1B (Grades 3-5 / Ages 8-11)',
      'standard':
        'Compare and refine multiple algorithms for the same task and determine which is the most appropriate.',
      'clarification':
        'Different algorithms can achieve the same result, though sometimes one algorithm might be most appropriate for a specific situation. Students should be able to look at different ways to solve the same task and decide which would be the best solution. For example, students could use a map and plan multiple algorithms to get from one point to another. They could look at routes suggested by mapping software and change the route to something that would be better, based on which route is shortest or fastest or would avoid a problem. Students might compare algorithms that describe how to get ready for school. Another example might be to write different algorithms to draw a regular polygon and determine which algorithm would be the easiest to modify or repurpose to draw a different polygon.',
      'category': 'Algorithms & Programming: Algorithms',
      'confidence': 0.7453376650810242,
      'stateStandards': [
        {
          'id': '93dd92ab-bfad-4782-a8de-0d4118f2a75f',
          'state': 'RI',
          'stateId': '1B-CT-A-1',
          'grade': 'N/A',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is more appropriate to complete the task.',
          'category': 'Computational Tihnking & Programming',
          'notes': null,
          'confidence': 0.7616309523582458,
        },
        {
          'id': '68318011-adf1-4b8d-bf21-65872b70f90f',
          'state': 'Illinois',
          'stateId': '3-5.AP.08',
          'grade': 'N/A',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.7453376650810242,
        },
        {
          'id': '280b003a-937e-4be3-b323-3f8ff330bfd7',
          'state': 'NM',
          'stateId': '1B-AP-08',
          'grade': 'N/A',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.7453376650810242,
        },
        {
          'id': '10b69939-b21c-42c8-9cf6-0eddd66efc71',
          'state': 'CA',
          'stateId': '3-5.AP.10',
          'grade': 'N/A',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate.',
          'category': 'Algorithms & Programming/Algorithms',
          'notes': null,
          'confidence': 0.7453376650810242,
        },
        {
          'id': '6fa8b039-227c-437e-810f-db8db70f187e',
          'state': 'CT',
          'stateId': '1B-AP-08',
          'grade': 'N/A',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.7453376650810242,
        },
        {
          'id': '22afe41f-c514-4fd2-94c2-4faeb4900dfe',
          'state': 'Michigan',
          'stateId': '1B-AP-08',
          'grade': null,
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate.',
          'category': 'Algorithms and Programming',
          'notes': null,
          'confidence': 0.7453376650810242,
        },
        {
          'id': 'a5eee180-4782-4629-bd08-944458c5cb3a',
          'state': 'HI',
          'stateId': '1B-AP-08',
          'grade': 'N/A',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.7453376650810242,
        },
        {
          'id': '3a6eb63a-8b15-4353-acdb-4e7bf31a8687',
          'state': 'NH',
          'stateId': '1B-AP-08',
          'grade': 'N/A',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.7453376650810242,
        },
        {
          'id': 'c7b59658-2f0c-4620-9637-b0783f76896d',
          'state': 'Iowa',
          'stateId': '1B-AP-08',
          'grade': 'N/A',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.7453376650810242,
        },
        {
          'id': '7c485d8d-4bc1-4ff3-b60b-839ed7e8804a',
          'state': 'NV',
          'stateId': '4.AP.A.1',
          'grade': '4th',
          'standard':
            'Test, compare, and refine multiple algorithms for the same task and determine which is the most appropriate.',
          'category': 'AP.A: Algorithms',
          'notes': 'NV added requirement for testing.',
          'confidence': 0.7413414120674133,
        },
        {
          'id': 'be2d478a-ad71-472f-8019-67413b796c4c',
          'state': 'AK',
          'stateId': '5.AP.A.01 ',
          'grade': '5th',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate. ',
          'category': 'Algorithms and Programming: Algorithms',
          'notes': null,
          'confidence': 0.7271547913551331,
        },
        {
          'id': '34b6bd14-74c4-4cdb-8209-3ee253447528',
          'state': 'NJ',
          'stateId': '8.1.5.AP.1',
          'grade': 'N/A',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate. ',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.7253501415252686,
        },
        {
          'id': '358d8ecf-b146-4bd1-9393-4a59515cc1cd',
          'state': 'MD',
          'stateId': '5.AP.A.01',
          'grade': '5th',
          'standard':
            'Develop, compare, and refine multiple algorithms for the same task and determine which algorithm is the most appropriate. ',
          'category': 'Algorithms and Programming',
          'notes': null,
          'confidence': 0.7204292416572571,
        },
        {
          'id': '139e8870-df4e-4fda-ab31-a2912973169c',
          'state': 'AZ',
          'stateId': '5.AP.A.1',
          'grade': '5th',
          'standard':
            'Compare, test, and refine multiple algorithms for the same task and determine which is the most effective.',
          'category': 'Algorithms and Programming (AP) / Algorithms (A)',
          'notes':
            'AZ changed the last word in the standard from appropriate to effective and added testing in addition to comparing and refining',
          'confidence': 0.7121959328651428,
        },
        {
          'id': '9a349c21-59d4-40e1-b99b-58468d51dccf',
          'state': 'AZ',
          'stateId': '4.AP.A.1',
          'grade': '4th',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most effective.',
          'category': 'Algorithms and Programming (AP) / Algorithms (A)',
          'notes':
            'AZ changed the last word in the standard from appropriate to effective',
          'confidence': 0.691398024559021,
        },
        {
          'id': '6f0e5696-7d50-4996-b9b1-00fd9911810b',
          'state': 'OK',
          'stateId': '5.AP.A.01',
          'grade': '5th',
          'standard':
            'Model, compare and refine multiple algorithms for the same task and determine which is the most efficient.',
          'category': 'Algorithms & Programming / Algorithms',
          'notes': null,
          'confidence': 0.6878007054328918,
        },
        {
          'id': 'c7d28c7f-f713-4d0c-b2f7-14899442974c',
          'state': 'WA',
          'stateId': '1B-AP-08',
          'grade': 'N/A',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate. (P. 6.3, P. 3.3)',
          'category': '',
          'notes': '6.3, 3.3',
          'confidence': 0.6820873022079468,
        },
        {
          'id': 'f4fb3199-26eb-44f0-aa65-efd4933997a4',
          'state': 'UT',
          'stateId': '4.AP.1',
          'grade': '4th',
          'standard':
            'Compare and refine multiple algorithms for the same task, using computer and non-computer languages, and determine which is the most appropriate. (Practice 3: Recognizing and Defining Computational Problems and Practice 6: Testing and Refining Computational Artifacts)',
          'category': 'Algorithms and Programming (AP)',
          'notes':
            'UT added computer and non-computer languages and clarifying statement includes collaboration.',
          'confidence': 0.6818012595176697,
        },
        {
          'id': 'b61cf517-06bc-45f7-a07c-b83dd9efcf9e',
          'state': 'OH',
          'stateId': 'ATP.A.6.a',
          'grade': '6th',
          'standard':
            'Compare and refine multiple algorithms for the same task to determine which is the most efficient. ',
          'category': 'Algorithmic Thinking and Programming',
          'notes': null,
          'confidence': 0.6788157224655151,
        },
        {
          'id': '309a15a8-2196-4e87-a3bc-180bb09f2221',
          'state': 'MT',
          'stateId': 'CS.AP.5.1',
          'grade': '5th',
          'standard':
            'compare and refine multiple algorithms for the same task and determine which is the most appropriate',
          'category': 'Algorithms and Programming',
          'notes': null,
          'confidence': 0.6750932335853577,
        },
        {
          'id': '3804d335-5c14-473d-8a36-bdeb31c6aa2b',
          'state': 'MT',
          'stateId': 'CS.AP.4.1',
          'grade': '4th',
          'standard':
            'compare and refine multiple algorithms for the same task and determine which is the most appropriate',
          'category': 'Algorithms and Programming',
          'notes': null,
          'confidence': 0.6750932335853577,
        },
        {
          'id': '8efd37a2-9fbd-4390-b888-0eccf4aea8cf',
          'state': 'UT',
          'stateId': '5.AP.1',
          'grade': '5th',
          'standard':
            'Compare and refine multiple algorithms for the same task and determine which is the most appropriate. (Practice 3: Recognizing and Defining Computational Problems and Practice 6: Testing and Refining Computational Artifacts)',
          'category': 'Algorithms and Programming (AP)',
          'notes':
            'UT standard does include practices as part of the standard text but otherwise is identical.',
          'confidence': 0.6718815565109253,
        },
        {
          'id': '18f01d32-7a49-456d-a88e-f3c2fd24a9bc',
          'state': 'WY',
          'stateId': '5.AP.A.01',
          'grade': 'N/A',
          'standard':
            'Using grade appropriate content and complexity, compare and refine multiple algorithms for the same task and determine which is the most appropriate. [Practice 3.3 Recognizing and Defining Computational Problems] [Practice 6.3 Testing and Refining Computational Artifacts]',
          'category': 'Algorithms & Programming: Algorithms',
          'notes':
            'WY standard added the phrase "using grade appropriate content and complexity" otherwise the standards are identical.',
          'confidence': 0.6474406719207764,
        },
        {
          'id': '9f610260-c8da-4b3f-9912-48f3adacb424',
          'state': 'OK',
          'stateId': '4.AP.A.01',
          'grade': '4th',
          'standard':
            'Model, compare, and refine multiple algorithms for the same task.',
          'category': 'Algorithms & Programming / Algorithms',
          'notes': null,
          'confidence': 0.6464958786964417,
        },
        {
          'id': '9f89c075-f810-4de5-9450-f7b72b1779dc',
          'state': 'Texas',
          'stateId': '126.10.g5.c.1.d',
          'grade': '5th',
          'standard':
            'compare multiple algorithms for the same task and determine which algorithm is the most appropriate for that task.',
          'category':
            '(1) Computational thinking--foundations. The student explores the core concepts of computational thinking, a set of problem-solving processes that involve decomposition, pattern recognition, abstraction, and algorithms. The student is expected to:',
          'notes': null,
          'confidence': 0.620916485786438,
        },
        {
          'id': '32b3c388-ecf7-4781-bd0a-4ca8e97a48d6',
          'state': 'Kansas',
          'stateId': '5.AP.A.01 ',
          'grade': '5th',
          'standard':
            'Analyze and refine multiple algorithms for the same task and determine which algorithm is the most efficient.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.618844747543335,
        },
        {
          'id': 'e4bd41dd-6862-4015-9e96-15f04b920563',
          'state': 'AK',
          'stateId': '4.AP.A.01 ',
          'grade': '4th',
          'standard':
            'Create, compare & refine multiple algorithms for the same task.',
          'category': 'Algorithms and Programming: Algorithms',
          'notes':
            'AK requires creation of multiple algorithms and does not have students determine which is most appropriate.',
          'confidence': 0.6058610081672668,
        },
        {
          'id': '566b88a9-3aa6-425b-b49e-2f93bee6fa54',
          'state': 'MS',
          'stateId': '5.AP.A.01',
          'grade': '5th',
          'standard':
            'Compare and simplify multiple algorithms (sets of step‐by‐step instructions) for accomplishing the same task verbally and kinesthetically, with robot devices or a programming language, then determine which is the most efficient. ',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.5881557464599609,
        },
        {
          'id': '30d85d3d-5e55-4c08-862c-8ffe301001c7',
          'state': 'Missouri',
          'stateId': '5.AP.A.01 ',
          'grade': '5th',
          'standard':
            'Compare and simplify multiple algorithms (sets of step‐by‐step instructions) for accomplishing the same task verbally and kinesthetically, with robot devices or a programming language, then determine which is the most efficient.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.5799887180328369,
        },
        {
          'id': '790232f8-f541-4edd-91fa-3776a75a0032',
          'state': 'MD',
          'stateId': '4.AP.A.01',
          'grade': '4th',
          'standard':
            'Develop, compare, and refine multiple algorithms for the same task ',
          'category': 'Algorithms and Programming',
          'notes': null,
          'confidence': 0.5649166107177734,
        },
        {
          'id': 'a4eecae7-00cc-457e-bc93-820c1f186ba3',
          'state': 'Kansas',
          'stateId': '4.AP.A.01 ',
          'grade': '4th',
          'standard':
            'Analyze and refine multiple algorithms for the same task. ',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.5564276576042175,
        },
        {
          'id': 'f21a2483-24c5-4bf2-8b87-22859e092a98',
          'state': 'AZ',
          'stateId': '3.AP.A.1',
          'grade': '3rd',
          'standard':
            'Recognize and compare multiple algorithms for the same task and determine which are effective.',
          'category': 'Algorithms and Programming (AP) / Algorithms (A)',
          'notes': 'Different levels of Blooms',
          'confidence': 0.5531678795814514,
        },
        {
          'id': '6a152c55-d074-4342-8628-950c38bc44ee',
          'state': 'NY',
          'stateId': '7-8.CT.6',
          'grade': 'N/A',
          'standard':
            'Design, compare and refine algorithms for a specific task or within a program.',
          'category': 'Computational Thinking',
          'notes': null,
          'confidence': 0.5375749468803406,
        },
        {
          'id': '0095aede-dd8f-4c66-88b1-9c26338f0c2c',
          'state': 'NY',
          'stateId': '7-8.CT.6',
          'grade': 'N/A',
          'standard':
            'Design, compare and refine algorithms for a specific task or within a program.',
          'category': 'Computational Thinking',
          'notes': null,
          'confidence': 0.5375749468803406,
        },
        {
          'id': 'ab6afda5-6fcd-46ec-8641-24e7de0c8fa8',
          'state': 'NC',
          'stateId': '35-AP-01',
          'grade': 'N/A',
          'standard':
            'Create multiple algorithms for the same task to determine which is the most accurate and efficient.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.5339376926422119,
        },
        {
          'id': '87785cf2-c213-4f0a-bfca-46221cb6effe',
          'state': 'MS',
          'stateId': '4.AP.A.01',
          'grade': '4th',
          'standard':
            'Compare and simplify multiple algorithms (sets of step‐by‐step instructions) for accomplishing the same task verbally and kinesthetically, with robot devices or a programming language. ',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.5187352895736694,
        },
        {
          'id': '7f085e81-c0b1-41c5-bcd7-31f21144f086',
          'state': 'Missouri',
          'stateId': '3.AP.A.01 ',
          'grade': '3rd',
          'standard':
            'Compare multiple algorithms (sets of step‐by‐step instructions) for accomplishing the same task verbally and kinesthetically, with robot devices or a programming language.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.5055426359176636,
        },
        {
          'id': 'f5dad7bc-7ada-43ba-8f2c-b8bc98e69657',
          'state': 'Missouri',
          'stateId': '4.AP.A.01 ',
          'grade': '4th',
          'standard':
            'Compare and simplify multiple algorithms (sets of step‐by‐step instructions) for accomplishing the same task verbally and kinesthetically, with robot devices or a programming language.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.5005787014961243,
        },
        {
          'id': '1e4757d7-d7d4-4591-ab03-96117d0ad1ff',
          'state': 'Kentucky',
          'stateId': 'E-AP-01',
          'grade': '4th',
          'standard':
            'Create and compare two sets of algorithms for the same task to determine the best solution',
          'category': 'Algorithms and Programming',
          'notes': 'Subconcept: Algorithms',
          'confidence': 0.4918423891067505,
        },
        {
          'id': '30d28e36-2fdd-404e-8ce3-efbb8d721abf',
          'state': 'MS',
          'stateId': '3.AP.A.01',
          'grade': '3rd',
          'standard':
            'Compare multiple algorithms (sets of step‐by‐step instructions) for accomplishing the same task verbally and kinesthetically, with robot devices or a programming language. ',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.489164799451828,
        },
        {
          'id': '3e63303f-1766-49cf-9120-c4e9d6725cd1',
          'state': 'OK',
          'stateId': '3.AP.A.01',
          'grade': '3rd',
          'standard':
            'Model and compare multiple algorithms for the same task.',
          'category': 'Algorithms & Programming / Algorithms',
          'notes': null,
          'confidence': 0.4813015460968018,
        },
        {
          'id': 'e9e2890f-68c6-45fa-85a8-9cf95e65597d',
          'state': 'NY',
          'stateId': '4-6.CT.6',
          'grade': 'N/A',
          'standard':
            'Compare two or more algorithms and discuss the advantages and disadvantages of each for a specific task. ',
          'category': 'Computational Thinking',
          'notes': null,
          'confidence': 0.4801323413848877,
        },
        {
          'id': '1deec60c-abe7-4b1a-9f86-61aa7e9da71f',
          'state': 'MD',
          'stateId': '3.AP.A.01',
          'grade': '3rd',
          'standard':
            'Develop and compare multiple algorithms for the same task. ',
          'category': 'Algorithms and Programming',
          'notes': null,
          'confidence': 0.477236270904541,
        },
        {
          'id': '5ab44dc5-f242-4f93-a9db-1a6045926410',
          'state': 'Texas',
          'stateId': '126.19.g8.c.1.e',
          'grade': '8th',
          'standard':
            'develop, compare, and improve algorithms for a specific task to solve a problem; and',
          'category':
            '(1) Computational thinking--foundations. The student explores the core concepts of computational thinking, a set of problem-solving processes that involve decomposition, pattern recognition, abstraction, and algorithms. The student is expected to:',
          'notes': null,
          'confidence': 0.4711905419826508,
        },
        {
          'id': '13a4d878-b145-46da-bb35-53f9d9de0927',
          'state': 'Kentucky',
          'stateId': 'E-AP-01',
          'grade': '3rd',
          'standard':
            'Compare two sets of algorithms for the same task to determine the best solution',
          'category': 'Algorithms and Programming',
          'notes': 'Subconcept: Algorithms',
          'confidence': 0.4570018649101257,
        },
        {
          'id': 'fe366f56-6d6c-4ca8-b25a-62404125755c',
          'state': 'MA',
          'stateId': '6-8.CT.d.1',
          'grade': 'N/A',
          'standard':
            'Individually and collaboratively compare algorithms to solve a problem, based on a given criteria (e.g., time, resource, accessibility).',
          'category': 'Computational Thinking',
          'notes': null,
          'confidence': 0.4475291073322296,
        },
        {
          'id': '49b7f91e-17f8-4774-8935-200959174cd2',
          'state': 'MT',
          'stateId': 'CS.AP.3.1',
          'grade': '3rd',
          'standard':
            'compare and contrast multiple algorithms to complete the same task',
          'category': 'Algorithms and Programming',
          'notes':
            'MT standard focuses on comparing and contrasting while CSTA standard is comparing and refining and determining which is appropriate.',
          'confidence': 0.4408241212368011,
        },
        {
          'id': '790cf9c7-bfd5-47cf-845a-1ff2ffb6f8c8',
          'state': 'NY',
          'stateId': '9-12.CT.6',
          'grade': 'N/A',
          'standard':
            'Demonstrate how at least two classic algorithms work, and analyze the trade-offs related to two or more algorithms for completing the same task.',
          'category': 'Computational Thinking',
          'notes': null,
          'confidence': 0.4379643499851227,
        },
        {
          'id': 'e589c6d9-0f8e-427f-9097-1bd369bdaa85',
          'state': 'FL',
          'stateId': 'SC.68.CS-CS.2.12',
          'grade': 'N/A',
          'standard':
            'Select the ‘best’ algorithm based on a given criteria (e.g., time, resource, and accessibility) to solve a problem, individually and collaboratively.',
          'category': 'Communication Systems and Computing',
          'notes': null,
          'confidence': 0.4297242164611816,
        },
        {
          'id': '82a3e80b-a917-44cb-88a2-eb96c2c56769',
          'state': 'MA',
          'stateId': '9-12.CT.d.4',
          'grade': 'N/A',
          'standard':
            'Analyze trade-offs among multiple approaches to solve a given problem (e.g., space/time performance, maintainability, correctness, elegance).',
          'category': 'Computational Thinking',
          'notes': null,
          'confidence': 0.426550567150116,
        },
        {
          'id': '5b05aaf1-7465-467a-8b9b-ca753094a1ef',
          'state': 'Wisconsin',
          'stateId': 'AP3.b.6.m',
          'grade': null,
          'standard':
            'Compare different algorithms that may be used to solve the same problem in terms of their speed, clarity, and size (e.g., different algorithms solve the same problem, but one might be faster than the other). [Clarification Students are not expected to quantify these differences].',
          'category': 'Algorithms and Programming (AP)',
          'notes': null,
          'confidence': 0.4261528849601746,
        },
        {
          'id': 'ccefdf05-d907-4dcf-9558-d2e91c06dc41',
          'state': 'FL',
          'stateId': 'SC.912.CS-CS.2.9',
          'grade': 'N/A',
          'standard':
            'Evaluate ways to characterize how well algorithms perform and that two algorithms can perform differently for the same task.',
          'category': 'Communication Systems and Computing',
          'notes': null,
          'confidence': 0.4190115332603455,
        },
        {
          'id': 'cbfebb35-832f-428a-96b3-27586c729e30',
          'state': 'CO',
          'stateId': 'CS.HS.1.2a',
          'grade': 'N/A',
          'standard':
            'Identify and compare different algorithms that can be used to solve the same problem.',
          'category': 'Computational Thinking',
          'notes':
            'CSTA standard is a very different level but is the closest match.',
          'confidence': 0.4150181114673615,
        },
        {
          'id': '09ea596e-7415-4c68-bf5b-0c56439fdd87',
          'state': 'OH',
          'stateId': 'AI.NI.6.a',
          'grade': '6th',
          'standard':
            'Individually and collaboratively compare language processing algorithms to solve a problem based on a given criteria (e.g., time, resource, accessibility). ',
          'category': 'Artificial Intelligence',
          'notes':
            'CSTA only has two AI standards at the momment for grades 11-12:\n3B-AP-08 Describe how artificial intelligence drives many software and physical systems.\r\n3B-AP-09 Implement an artificial intelligence algorithm to play a game against a human opponent or solve a problem.',
          'confidence': 0.3946976959705353,
        },
        {
          'id': 'e39a8ab8-231c-4cc1-ab1d-0c2a76cef8d7',
          'state': 'CO',
          'stateId': 'CS.HS.1.3a',
          'grade': 'N/A',
          'standard':
            'Describe pros and cons of the performance of algorithms for the same task.',
          'category': 'Computational Thinking',
          'notes':
            'CSTA standard is specifially about control structures while the CO standard is focused specifically on comparison of algorithms based on performance. ',
          'confidence': 0.3928497731685638,
        },
        {
          'id': 'a56bd77c-ebb5-43f1-8e7f-e10fc49d6793',
          'state': 'WV',
          'stateId': 'CS.9-12.9',
          'grade': 'N/A',
          'standard': 'Compare the effectiveness of the algorithms.',
          'category': 'Programming and Algorithms',
          'notes': null,
          'confidence': 0.3904653191566467,
        },
        {
          'id': '61e95b93-4336-475d-9441-76937ed2fd26',
          'state': 'FL',
          'stateId': 'SC.912.CS-CS.2.11',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms by their efficiency, correctness, and clarity (e.g., by analyzing and comparing execution times, testing with multiple inputs or data sets, and by debugging).',
          'category': 'Communication Systems and Computing',
          'notes': null,
          'confidence': 0.3861720263957977,
        },
        {
          'id': 'c44c9f59-c205-4443-89c8-7d685c71543f',
          'state': 'AR',
          'stateId': 'CSK8.G8.5.3',
          'grade': '8th',
          'standard': 'Compare and refine algorithms',
          'category': 'Algorithms and Programs',
          'notes': null,
          'confidence': 0.3857007324695587,
        },
        {
          'id': '43ec15c0-80e9-4184-a318-1e35c47f38d8',
          'state': 'AR',
          'stateId': 'CSK8.G5.5.3',
          'grade': '5th',
          'standard': 'Compare and refine algorithms',
          'category': 'Algorithms and Programs',
          'notes': null,
          'confidence': 0.3857007324695587,
        },
        {
          'id': '1c91a9cd-dc90-4c4d-8f3d-1933405f56ec',
          'state': 'AR',
          'stateId': 'CSK8.G7.5.3',
          'grade': '7th',
          'standard': 'Compare and refine algorithms',
          'category': 'Algorithms and Programs',
          'notes': null,
          'confidence': 0.3857007324695587,
        },
        {
          'id': 'fd1b4375-21f5-46d9-9eec-b387f1d94ccb',
          'state': 'AR',
          'stateId': 'CSK8.G6.5.3',
          'grade': '6th',
          'standard': 'Compare and refine algorithms',
          'category': 'Algorithms and Programs',
          'notes': null,
          'confidence': 0.3857007324695587,
        },
        {
          'id': '20d55ca3-a485-4144-90f9-0469b2c200b3',
          'state': 'WV',
          'stateId': 'CS.DCS.4',
          'grade': 'N/A',
          'standard':
            'Evaluate ways that different algorithms may be used to solve the same problem.',
          'category': 'Computer Systems and Computational Thinking',
          'notes': null,
          'confidence': 0.3852125704288483,
        },
        {
          'id': '45338eee-ed98-41df-b65d-4b8974bbe9df',
          'state': 'ID',
          'stateId': '6-8.AP.02',
          'grade': 'N/A',
          'standard':
            'Compare different algorithms that may be used to solve the same problem by time and space efficiency.',
          'category': 'Algorithms and Programming',
          'notes': 'ID standard is closest to a lower-level CSTA standard.',
          'confidence': 0.384631484746933,
        },
        {
          'id': 'c0ec30c6-d059-46a6-9482-8b0934a7fe33',
          'state': 'MA',
          'stateId': '9-12.CT.b.4',
          'grade': 'N/A',
          'standard':
            'Describe that there are ways to characterize how well algorithms perform and that two algorithms can perform differently for the same task.',
          'category': 'Computational Thinking',
          'notes': null,
          'confidence': 0.3779378533363342,
        },
        {
          'id': '77c8b45f-d97e-410f-9789-7facdfb39eb7',
          'state': 'WY',
          'stateId': 'L2.AP.A.03',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms (e.g., sorting, searching) in terms of their efficiency, correctness, and clarity. [Practice 4.2 Developing and Using Abstractions]',
          'category': 'Algorithms & Programming: Algorithms',
          'notes':
            'WY added examples of algorithms to the standard otherwise they are identical.',
          'confidence': 0.3717084527015686,
        },
        {
          'id': '730db815-2b52-425f-bc01-f59d8f51d5dd',
          'state': 'Wisconsin',
          'stateId': 'AP4.a.8.h',
          'grade': null,
          'standard':
            '(+) Critically analyze and evaluate classic algorithms (e.g., sorting, searching) and use in different contexts, adapting as appropriate.',
          'category': 'Algorithms and Programming (AP)',
          'notes': null,
          'confidence': 0.3674748539924622,
        },
        {
          'id': '860ea11e-cd2a-46d1-b66a-6d475d8d8c72',
          'state': 'AR',
          'stateId': 'CSPG.Y3.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate multiple student-created algorithms and non-student-created algorithms in terms of time and space complexities (e.g., Big O notation)',
          'category': 'Algorithms and Programs',
          'notes':
            'Standards are somewhat related though what is being evaluated differs',
          'confidence': 0.364817887544632,
        },
        {
          'id': '482cff01-20e0-4b44-aa6b-2f4b649fc093',
          'state': 'AR',
          'stateId': 'CSMD.Y3.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate multiple student-created algorithms and non-student-created algorithms in terms of time and space complexities (e.g., Big O notation)',
          'category': 'Algorithms and Programs',
          'notes':
            'Standards are somewhat related though what is being evaluated differs',
          'confidence': 0.3647260069847107,
        },
        {
          'id': '8635ef16-91be-45e1-99e1-bb8bd49ff0fc',
          'state': 'AR',
          'stateId': 'AIML.Y2.5.2',
          'grade': 'N/A',
          'standard':
            'Evaluate multiple student-created algorithms and non-student-created algorithms in terms of time and space complexities (e.g., Big O notation)',
          'category': 'Algorithms and Programs',
          'notes':
            'Standards are related though what algorithms are being evalutated for differs.',
          'confidence': 0.3647260069847107,
        },
        {
          'id': 'd86adece-8178-4d72-9773-aaddf1582786',
          'state': 'Wisconsin',
          'stateId': 'AP4.a.11.h',
          'grade': null,
          'standard':
            '(+) Evaluate algorithms (e.g., sorting, searching) in terms of their efficiency, correctness, and clarity.',
          'category': 'Algorithms and Programming (AP)',
          'notes': null,
          'confidence': 0.3609374463558197,
        },
        {
          'id': 'd3cad5da-f6b3-4785-a862-ef1d0c660c16',
          'state': 'AK',
          'stateId': 'L2.AP.A.04',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms (e.g., sorting, searching) in terms of their efficiency, correctness, and clarity.',
          'category': 'Algorithms and Programming: Algorithms',
          'notes':
            'AK had additional clarifying information included in the standard.',
          'confidence': 0.359498143196106,
        },
        {
          'id': 'e703b1d4-791b-4a00-8efc-b9cc7f3725c7',
          'state': 'Indiana',
          'stateId': '7352.D2.1 ',
          'grade': null,
          'standard':
            'Explain the role of algorithms in problem-solving including: ● Analyze and compare the best, average, and worst-case behaviors and performance of an algorithm for given problems with various input sizes ● Implement a basic numerical algorithm and apply to a given problem. ● Discuss the halting problem and why it has no algorithmic solution ● Investigate factors other than computational efficiency that influence the choice of algorithms.',
          'category': 'Domain: Computer Design and Function',
          'notes': null,
          'confidence': 0.3568167984485626,
        },
        {
          'id': '6fa16021-42dd-4330-9413-1b57bbdb364d',
          'state': 'AR',
          'stateId': 'CSGD.Y2.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms including classic search and sort algorithms\nResearch how to evaluate these algorithms in terms of time and space complexities (e.g., Big O notation)',
          'category': 'Algorithms and Programs',
          'notes':
            'Standards are related / CSTA standard does not have a research component',
          'confidence': 0.3557835817337036,
        },
        {
          'id': '9287c886-4b53-4f89-9e3a-c630c8a7bb9d',
          'state': 'Kentucky',
          'stateId': 'H-AP-14',
          'grade': null,
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity.*',
          'category': 'Algorithms & Programming',
          'notes': 'Subconcept: Algorithms',
          'confidence': 0.3544240295886993,
        },
        {
          'id': '30bf8807-d621-4fe4-bf16-a910c8e9f3df',
          'state': 'ID',
          'stateId': '11-12.AP.08',
          'grade': 'N/A',
          'standard':
            'Evaluate efficiency, correctness, and clarity of algorithms.',
          'category': 'Algorithms and Programming',
          'notes': 'Slight rewording',
          'confidence': 0.3542762696743011,
        },
        {
          'id': 'd4e2a05c-cd18-4914-a688-5ead5ea4967f',
          'state': 'OK',
          'stateId': 'L2.AP.A.04',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms (e.g., sorting, searching) in terms of their efficiency and clarity.',
          'category': 'Algorithms & Programming / Algorithms',
          'notes': null,
          'confidence': 0.3524373769760132,
        },
        {
          'id': '432ecd8f-138c-4845-b919-b3fc51d5a8d4',
          'state': 'Missouri',
          'stateId': '11‐12.AP.A.04 ',
          'grade': null,
          'standard':
            'Evaluate algorithms (e.g., sorting, searching) in terms of their efficiency and clarity.',
          'category': '',
          'notes': null,
          'confidence': 0.3524373769760132,
        },
        {
          'id': '4fe8a708-6f4a-4eef-8ffe-efa77ed243b3',
          'state': 'ND',
          'stateId': 'ES.AP.3',
          'grade': 'N/A',
          'standard': 'Evaluate algorithms in terms of their efficiency.',
          'category': 'Computational Thinking\nAlgorithms & Programming',
          'notes': null,
          'confidence': 0.3491067290306091,
        },
        {
          'id': '3599e830-7101-4855-94a6-a3b5eebce2b2',
          'state': 'Michigan',
          'stateId': '3B-AP-11',
          'grade': null,
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity.',
          'category': 'Algorithms and Programming',
          'notes': null,
          'confidence': 0.3467085957527161,
        },
        {
          'id': '86c51c7d-ec00-4ff6-92a0-5c54cd3ba16e',
          'state': 'NM',
          'stateId': '3B-AP-11',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.3467085957527161,
        },
        {
          'id': 'b905fbdf-2946-4a1f-84e9-a22538e4d897',
          'state': 'CT',
          'stateId': '3B-AP-11',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.3467085957527161,
        },
        {
          'id': '8684fdc2-53fa-411b-a31e-2fea4a8edc35',
          'state': 'HI',
          'stateId': '3B-AP-11',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.3467085957527161,
        },
        {
          'id': 'a67a6630-594c-4a3f-8f89-0032d3bb6aaf',
          'state': 'Kansas',
          'stateId': 'L2.AP.A.06 ',
          'grade': null,
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity.',
          'category': 'Algorithms and Programming',
          'notes': null,
          'confidence': 0.3467085957527161,
        },
        {
          'id': '5e0efe11-4f1f-4e14-8bc0-871ecfdc3c36',
          'state': 'ID',
          'stateId': '11-12.AP.07',
          'grade': 'N/A',
          'standard':
            'Critically examine algorithms and design an original algorithm (e.g. adapt, remix, improve).',
          'category': 'Algorithms and Programming',
          'notes':
            'Both standards will have students working with  algorithms and then creating or adapting an algorithm.',
          'confidence': 0.3457089960575104,
        },
        {
          'id': 'b1612118-557d-4ce1-a9b9-98c85515a487',
          'state': 'NC',
          'stateId': 'HS-AP-03',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.3454155027866364,
        },
        {
          'id': '739a6783-69a7-43d5-820b-bce48c8d8cf1',
          'state': 'NH',
          'stateId': '3B-AP-11',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.3454155027866364,
        },
        {
          'id': '6cf6a2eb-6a3a-4556-955c-e5fcd826e298',
          'state': 'Iowa',
          'stateId': '3B-AP-11',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity.',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.3454155027866364,
        },
        {
          'id': '71c89b1d-dc46-4d53-ab3f-87cb7ffd3cc9',
          'state': 'Illlinois',
          'stateId': '11-12.AP.13',
          'grade': null,
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity.',
          'category': 'Algorithms and Programming',
          'notes': null,
          'confidence': 0.3454155027866364,
        },
        {
          'id': 'd2613d48-8141-4b32-b9c3-b12cbb4fe12b',
          'state': 'NV',
          'stateId': 'A9-12.AP.A.4',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity.',
          'category': 'AP.A: Algorithms',
          'notes': null,
          'confidence': 0.3454155027866364,
        },
        {
          'id': '6df4a887-dfb2-4838-9538-caf37feeec40',
          'state': 'SC',
          'stateId': 'HS4.AP.1.1',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms in terms of efficiency, correctness, and clarity (CSTA, 2017). ',
          'category': 'Algorithms and Programming',
          'notes':
            'Standard 1: Design algorithms that can be adapted to express an idea or solve a problem. ',
          'confidence': 0.3444079160690308,
        },
        {
          'id': '58a4875c-0169-424a-88fa-39d41b3c7ec4',
          'state': 'ND',
          'stateId': '6.PSA.3',
          'grade': '6th',
          'standard':
            'Compare/contrast the efficiencies of multiple solutions to a task',
          'category': 'Computational Thinking Problem Solving and Algorithms',
          'notes': null,
          'confidence': 0.3365383148193359,
        },
        {
          'id': '348b3f46-1c14-4880-bff8-947daae4df94',
          'state': 'MS',
          'stateId': '11-12.AP.A.04',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms (e.g., sorting, searching) in terms of their efficiency and clarity. ',
          'category': 'Algorithms & Programming',
          'notes': null,
          'confidence': 0.3355983793735504,
        },
        {
          'id': '3efbe3b2-4f17-4bb7-b1ed-3f619802a7a6',
          'state': 'Tennessee',
          'stateId': '2.AT.2',
          'grade': '2nd',
          'standard': 'Compare and evaluate multiple ways to get a solution.',
          'category': 'Algorithmic Thinking',
          'notes': null,
          'confidence': 0.3322006464004517,
        },
        {
          'id': '534b1d6e-f327-451b-835c-f42a9deb7432',
          'state': 'CA',
          'stateId': '9-12S.AP.13',
          'grade': 'N/A',
          'standard': 'Evaluate algorithms in terms of their efficiency.',
          'category': 'Algorithms & Programming/Algorithms',
          'notes': 'CA standard leaves out correctness and clarity.',
          'confidence': 0.331532210111618,
        },
        {
          'id': '5323ac08-341b-42c9-92fc-e0a690e02899',
          'state': 'MT',
          'stateId': 'CS.AP.9-12.5',
          'grade': 'N/A',
          'standard':
            'evaluate algorithms in terms of their efficiency, correctness, and clarity',
          'category': 'Algorithms and Programming',
          'notes': null,
          'confidence': 0.3296266496181488,
        },
        {
          'id': '7bd59aca-6460-4162-9b81-8678843cfaca',
          'state': 'VA',
          'stateId': 'PRG.17',
          'grade': 'N/A',
          'standard':
            'The student will adapt classic algorithms for use in a particular context and analyze them for effectiveness and efficiency.',
          'category': 'Algorithms and Programming',
          'notes': null,
          'confidence': 0.3286826312541962,
        },
        {
          'id': 'cdfe88ec-39d7-4c25-ad80-1e0969fdc6fc',
          'state': 'AR',
          'stateId': 'CSPG.Y2.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms including classic search and sort algorithms',
          'category': 'Algorithms and Programs',
          'notes': 'Standards are related',
          'confidence': 0.317261129617691,
        },
        {
          'id': '50d6b4fc-3a93-4cf9-82d1-aec52f548bd8',
          'state': 'WA',
          'stateId': '3B-AP-11',
          'grade': 'N/A',
          'standard':
            'Evaluate algorithms in terms of their efficiency, correctness, and clarity. (P. 4.2)',
          'category': '',
          'notes': '4.2',
          'confidence': 0.3136472702026367,
        },
        {
          'id': 'ff1be996-a8d5-47ab-9b2c-7004c967c928',
          'state': 'Texas',
          'stateId': '127.790.d.5.m',
          'grade': null,
          'standard':
            'compare efficiency of search and sort algorithms by using informal runtime comparisons, exact calculation of statement execution counts, and theoretical efficiency values using "big-O" notation, including worst-case, best-case, and average-case time/space analysis;',
          'category':
            '(5) Critical thinking, problem solving, and decision making. The student uses appropriate strategies to analyze problems and design algorithms.',
          'notes': null,
          'confidence': 0.3117541372776031,
        },
        {
          'id': 'be462dd5-bc5b-4a89-a54c-9613f97422b7',
          'state': 'AR',
          'stateId': 'CSMD.Y2.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms including classic search and sort algorithms',
          'category': 'Algorithms and Programs',
          'notes':
            'Standards are related / CSTA standard does specify both student and non-student created algorithms and CSTA is more explicit about what characteristic to evaluate for',
          'confidence': 0.3111618757247925,
        },
        {
          'id': '02be1cc8-53fa-4dee-8bed-4711b7be5323',
          'state': 'AR',
          'stateId': 'CSRB.Y2.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms including classic search and sort algorithms',
          'category': 'Algorithms and Programs',
          'notes':
            'Standards are related though CSTA standard is more explicit on what algorithms should be evaluated for',
          'confidence': 0.3111618757247925,
        },
        {
          'id': '3c81f27d-3b77-4e24-9239-732994382cc3',
          'state': 'AR',
          'stateId': 'CSDS.Y2.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms including classic search and sort algorithms',
          'category': 'Algorithms and Programs',
          'notes': 'Standards are related',
          'confidence': 0.3111618757247925,
        },
        {
          'id': 'a614fa4b-9fbb-45fb-816e-cb679205576f',
          'state': 'AR',
          'stateId': 'AIML.Y2.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms including classic search and sort algorithms',
          'category': 'Algorithms and Programs',
          'notes':
            'Standards are related though what algorithms are being evalutated for differs.',
          'confidence': 0.3111618757247925,
        },
        {
          'id': '1f0b0972-31be-4499-8e9a-3e9f9274a878',
          'state': 'AR',
          'stateId': 'CSCS.Y2.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms including classic search and sort algorithms',
          'category': 'Algorithms and Programs',
          'notes': 'Standards are related',
          'confidence': 0.310001403093338,
        },
        {
          'id': 'dc9c0b21-a79b-4c5c-a4fd-128ebdd1af85',
          'state': 'AR',
          'stateId': 'CSNT.Y2.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms including classic search and sort algorithms',
          'category': 'Algorithms and Programs',
          'notes': 'Standards are related',
          'confidence': 0.310001403093338,
        },
        {
          'id': 'a810f58d-e58c-4c25-95b4-bf5e5d2a8c2d',
          'state': 'AR',
          'stateId': 'CSNT.Y1.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms',
          'category': 'Algorithms and Programs',
          'notes': 'Standards are related',
          'confidence': 0.3017829358577728,
        },
        {
          'id': 'b76d1792-5ee9-451d-8ee2-2d5a7d668eb2',
          'state': 'AR',
          'stateId': 'CSPG.Y1.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms',
          'category': 'Algorithms and Programs',
          'notes': null,
          'confidence': 0.3017829358577728,
        },
        {
          'id': '9cb03e54-1040-4388-a33d-aa94cc5ab7bf',
          'state': 'AR',
          'stateId': 'CSMD.Y1.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms',
          'category': 'Algorithms and Programs',
          'notes': 'Standards are related',
          'confidence': 0.3017829358577728,
        },
        {
          'id': '2043d589-3fe7-4671-bb52-5f943a649110',
          'state': 'AR',
          'stateId': 'AIML.Y1.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms',
          'category': 'Algorithms and Programs',
          'notes': null,
          'confidence': 0.3017829358577728,
        },
        {
          'id': '8f9f795a-a17a-472b-9bb3-6d444f2e46d8',
          'state': 'AR',
          'stateId': 'CSDS.Y1.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms',
          'category': 'Algorithms and Programs',
          'notes': 'Standards are related',
          'confidence': 0.3017829358577728,
        },
        {
          'id': '6414f7a5-f252-483d-b829-fc832f536d3a',
          'state': 'AR',
          'stateId': 'CSCE.Y1.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms',
          'category': 'Algorithms and Programs',
          'notes': null,
          'confidence': 0.3017829358577728,
        },
        {
          'id': 'ae1f1ee2-a4f8-4daa-a340-8b9286c7f66a',
          'state': 'AR',
          'stateId': 'CSCS.Y1.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms',
          'category': 'Algorithms and Programs',
          'notes': 'Standards are related',
          'confidence': 0.3017829358577728,
        },
        {
          'id': '0de947d7-af40-444c-811a-55454398ce6e',
          'state': 'Texas',
          'stateId': '127.790.d.5.h',
          'grade': null,
          'standard':
            'identify, describe, trace, evaluate, and compare standard sorting algorithms, including selection sort, bubble sort, insertion sort, and merge sort;',
          'category':
            '(5) Critical thinking, problem solving, and decision making. The student uses appropriate strategies to analyze problems and design algorithms.',
          'notes': null,
          'confidence': 0.29970383644104,
        },
        {
          'id': 'c7e38e3b-9d82-4d39-98ff-c3eb9c064203',
          'state': 'AR',
          'stateId': 'CSGD.Y3.5.3',
          'grade': 'N/A',
          'standard':
            'Evaluate the qualities of level-appropriate student-created and non-student-created algorithms in terms of time and space complexities (e.g., Big O notation)',
          'category': 'Algorithms and Programs',
          'notes': null,
          'confidence': 0.2964195609092712,
        },
        {
          'id': '4903e351-61ab-4b71-961a-72ac3b0fae81',
          'state': 'OH',
          'stateId': 'AI.ML4.a',
          'grade': '4th',
          'standard':
            'Explain three different machine learning approaches to choose which may be best for a given situation. ',
          'category': 'Artificial Intelligence',
          'notes':
            'CSTA only has two AI standards at the momment for grades 11-12:\n3B-AP-08 Describe how artificial intelligence drives many software and physical systems.\r\n3B-AP-09 Implement an artificial intelligence algorithm to play a game against a human opponent or solve a problem.',
          'confidence': 0.2934814095497131,
        },
      ],
    },
  ]);

  const handleUpload = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file as File);
    formData.append('confidence', confidence.toString());

    const response = await fetch('/api/pdf', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    setResults(response);
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

          <div className='mb-4'>
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

          <div>
            {results.map((result) => (
              <div
                key={result.id}
                id='results-container'
                className='bg-white rounded-lg shadow-lg p-6 mb-8'
              >
                <h2 className='text-2xl font-bold mb-4'>Analysis Results</h2>

                <div className='mb-4'>
                  <h3 className='text-xl font-bold mb-2'>Content Summary</h3>
                  <div
                    id='content-summary'
                    className='bg-gray-100 p-4 rounded-lg'
                  >
                    <p className='text-gray-500'>No summary available</p>
                  </div>
                </div>

                <div className='mb-4'>
                  <h3 className='text-xl font-bold mb-2'>Key Concepts</h3>
                  <div id='key-concepts' className='flex flex-wrap gap-2'>
                    <span className='text-gray-500'>
                      No concepts identified
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className='text-xl font-bold mb-2'>Matched Standards</h3>
                  <div id='matched-standards' className='space-y-4'>
                    {result.stateStandards.map((standard) => (
                      <div
                        key={standard.id}
                        className='bg-gray-100 p-4 rounded-lg'
                      >
                        <h4 className='text-lg font-bold mb-2'>
                          {standard.standard}
                        </h4>
                        <p className='text-gray-500'>
                          {standard.state} - {standard.stateId}
                        </p>
                        <p className='text-gray-500'>{standard.category}</p>
                        <p className='text-gray-500'>{standard.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
              Knowledge Graph
            </Link>
            <Link
              href='/statistics'
              className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
            >
              View Statistics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdf;
