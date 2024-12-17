import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Pertanyaan = () => {
  const [pertanyaanData, setPertanyaanData] = useState([
    {
      user: 'Nama User 1',
      pekerjaan: 'Petani',
      question: 'Bagaimana cara meningkatkan hasil panen padi?',
      answer: {
        user: 'Nama User 2',
        pekerjaan: 'Ahli Pertanian',
        response: 'Salah satu cara meningkatkan hasil panen padi adalah dengan menggunakan pupuk organik dan teknik irigasi yang tepat.'
      }
    },
    {
      user: 'Nama User 3',
      pekerjaan: 'Petani Sayuran',
      question: 'Apa jenis pupuk terbaik untuk tanaman sayuran?',
      answer: {
        user: 'Nama User 4',
        pekerjaan: 'Pakar Pertanian',
        response: 'Pupuk kompos dan pupuk kandang adalah pilihan terbaik untuk tanaman sayuran karena kaya akan nutrisi.'
      }
    },
    {
      user: 'Nama User 5',
      pekerjaan: 'Petani Organik',
      question: 'Bagaimana mengatasi hama tanaman secara organik?',
      answer: {
        user: 'Nama User 6',
        pekerjaan: 'Konsultan Pertanian',
        response: 'Menggunakan pestisida alami seperti neem oil dan memperkenalkan predator alami seperti ladybugs dapat membantu mengatasi hama secara organik.'
      }
    },
    {
      user: 'Nama User 7',
      pekerjaan: 'Peneliti Pertanian',
      question: 'Apa saja teknologi terbaru dalam pertanian?',
      answer: {
        user: 'Nama User 8',
        pekerjaan: 'Teknisi Pertanian',
        response: 'Beberapa teknologi terbaru dalam pertanian termasuk drone untuk pemantauan lahan, sensor tanah, dan pertanian vertical.'
      }
    }
  ]);

  const [answers, setAnswers] = useState(Array(pertanyaanData.length).fill(false));

  const toggleAnswer = index => {
    setAnswers(prevAnswers =>
      prevAnswers.map((answer, i) => (i === index ? !answer : answer))
    );
  };

  const handleNewQuestion = () => {
    Swal.fire({
      title: 'Ajukan Pertanyaan',
      input: 'textarea',
      inputLabel: 'Tulis pertanyaan Anda di sini',
      inputPlaceholder: 'Tulis pertanyaan Anda...',
      showCancelButton: true,
      confirmButtonText: 'Submit'
    }).then(result => {
      if (result.isConfirmed && result.value.trim()) {
        const newQuestion = {
          user: 'Nama User Baru',
          pekerjaan: 'Petani Baru',
          question: result.value,
          answer: null // Initially no answer
        };
        setPertanyaanData([...pertanyaanData, newQuestion]);
        setAnswers([...answers, false]);
      }
    });
  };

  const handleNewAnswer = index => {
    Swal.fire({
      title: 'Berikan Jawaban',
      input: 'textarea',
      inputLabel: 'Tulis jawaban Anda di sini',
      inputPlaceholder: 'Tulis jawaban Anda...',
      showCancelButton: true,
      confirmButtonText: 'Submit'
    }).then(result => {
      if (result.isConfirmed && result.value.trim()) {
        const newPertanyaanData = [...pertanyaanData];
        newPertanyaanData[index].answer = {
          user: 'Nama User Jawaban',
          pekerjaan: 'Ahli Baru',
          response: result.value
        };
        setPertanyaanData(newPertanyaanData);
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold mb-4">Ajukan Pertanyaan?</h2>
          <p className="mb-4">
            Ajukan pertanyaan seputar pertanian di sini, dan dapatkan jawaban dari para profesional serta komunitas aktif kami.
          </p>
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded"
            onClick={handleNewQuestion}
          >
            Tanya Sekarang
          </button>
        </div>

        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold mb-4">Pengguna Teraktif</h2>
          <ul>
            <li className="mb-2">Nama User Pekerjaan - 143 Jawaban</li>
            <li className="mb-2">Nama User Pekerjaan - 120 Jawaban</li>
            <li className="mb-2">Nama User Pekerjaan - 98 Jawaban</li>
          </ul>
        </div>
      </div>

      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-xl font-bold mb-4">Pertanyaan Seputar Pertanian</h2>
        {pertanyaanData.map((pertanyaan, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faUser} className="h-10 w-10 mr-4 text-gray-400" />
              <div>
                <p className="font-bold">{pertanyaan.user}</p>
                <p className="text-sm text-gray-600">{pertanyaan.pekerjaan}</p>
              </div>
            </div>
            <p className="font-bold mb-2">{pertanyaan.question}</p>
            {pertanyaan.answer ? (
              <>
                <button
                  className="text-blue-500"
                  onClick={() => toggleAnswer(index)}
                >
                  {answers[index] ? 'Sembunyikan Jawaban' : 'Lihat Jawaban'}
                </button>
                {answers[index] && (
                  <div className="mt-2 p-4 bg-gray-100 border rounded">
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon icon={faUser} className="h-10 w-10 mr-4 text-gray-400" />
                      <div>
                        <p className="font-bold">{pertanyaan.answer.user}</p>
                        <p className="text-sm text-gray-600">{pertanyaan.answer.pekerjaan}</p>
                      </div>
                    </div>
                    <p>{pertanyaan.answer.response}</p>
                  </div>
                )}
              </>
            ) : (
              <button
                className="text-green-500 mt-2"
                onClick={() => handleNewAnswer(index)}
              >
                Berikan Jawaban
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pertanyaan;
