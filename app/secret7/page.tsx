'use client';

import { useState } from 'react';

const getWaifu = async () => {
  const type = "sfw";
  const category = "waifu";
  const url = `https://api.waifu.pics/${type}/${category}`;  // URL-String korrekt zusammengesetzt
  let response = await fetch(url);
  let daten = await response.json();
  let string = daten["url"];  // Waifu-Bild-URL aus den Daten extrahiert
  console.log(string);
  return string;  // Keine Typen-Konvertierung nötig, da es bereits ein String ist
};

const LadeDaten = () => {
  const [url, setUrl] = useState('');  // Zustand für die URL

  const fetchData = async () => {
    let waifuUrl = await getWaifu();  // Auf die Funktion warten
    setUrl(waifuUrl);  // URL im Zustand speichern
  };

  return (
    <>
      {url && <img src={url} alt="JSK" className="h-96" />}  {/* Bild nur anzeigen, wenn URL existiert */}
      <button  onClick={fetchData}>Neues Bild laden</button>  {/* Button um neues Bild zu laden */}
    </>
  );
};

export default LadeDaten;
