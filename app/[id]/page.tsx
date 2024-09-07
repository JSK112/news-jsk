"use client"; // Markiere die Komponente als Client-Komponente

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Product = () => {
  const { id } = useParams(); // Verwende useParams aus next/navigation
  const [newsItem, setNewsItem] = useState<{ title: string; message: string; short_description: string; img: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/news.json'); // Stelle sicher, dass die JSON-Datei korrekt im public-Ordner liegt
      const data = await res.json();
      const item = data.find((item: { id: number }) => item.id === Number(id));
      setNewsItem(item || null);
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!newsItem) {
    return <p>Keine Nachricht gefunden</p>;
  }

  return (
    <div>
      <h2>{newsItem.title}</h2>
      <p>{newsItem.short_description}</p>
      <img src={newsItem.img} alt={newsItem.title} />
      <p>{newsItem.message}</p>
    </div>
  );
};

export default Product;
