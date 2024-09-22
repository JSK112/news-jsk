import Image from "next/image";
import NavBar from "./navBar";
import NewsPost from "./components/newsPost";

const LadeDaten = async () => {
  const url = "https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg"
  const response = await fetch('https://api.trace.moe/search?url=' + url);
  const daten = await response.json();
  console.log("https://api.trace.moe/search?url=" + url)
  console.log(daten);

};



export default function Home() {


  return (
    <>
      <h1 className="text-4xl">JskNews</h1>
      <NewsPost/>
      
    </>
  );
}
