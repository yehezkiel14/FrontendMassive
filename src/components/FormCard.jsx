import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import GambarSatu from "../assets/a1.png";
import GambarDua from "../assets/iot-dalam-pertanian.png";
import GambarTiga from "../assets/pexels.png";
import GambarEmpat from "../assets/tabulampot.png";
import Selengkapnya from "./elements/button/Selengkapnya";

const initialCards = [
    {
        id: 1,
        title: 'Budidaya Padi Organik',
        description: '7 Tahap Sukses Membudidayakan Padi Organik',
        image: GambarSatu,
    },
    {
        id: 2,
        title: 'Teknologi IoT di Pertanian',
        description: 'Manfaat dan aplikasi IoT untuk memantau dan meningkatkan produktivitas lahan.',
        image: GambarDua,
    },
    {
        id: 3,
        title: 'Hidroponik di rumah',
        description: 'Teknik hidroponik sederhana yang cocok untuk lahan terbatas di perkotaan.',
        image: GambarTiga,
    },
    {
        id: 4,
        title: 'Tabulampot buah tropis',
        description: 'Cara menanam buah dalam pot untuk kebun minimalis Anda.',
        image: GambarEmpat,
    },
    // Tambahkan lebih banyak kartu di sini...
];

const FormCard = () => {
    const [cards, setCards] = useState(initialCards);

    return (
        <div className="card-container mx-auto flex flex-col items-center justify-center">
            <div className="inline-flex justify-center items-start gap-4">
                {cards.map((card) => (
                    <Link key={card.id} to={`/detailartikel/${card.id}`}>
                        <Card {...card} />
                    </Link>
                ))}
            </div>
            <Link to="/detailartikel"><Selengkapnya /></Link>
        </div>
    );
};

export default FormCard;
