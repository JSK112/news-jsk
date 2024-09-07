import Image from "next/image";
import NavBar from "./navBar";
import NewsPost from "./components/newsPost";


export default function Home() {
  return (
    <>
      <h1 className="text-4xl">JskNews</h1>
      <NewsPost/>
    </>
  );
}
