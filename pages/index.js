import Image from "next/image";

import HeaderBottom from "@/components/HeaderBottom";
import Header from "@/components/Header";
import PageDescription from "@/components/PageDescription";

export default function Home() {
  return (
    <>
      <Header />
      <HeaderBottom />
      <PageDescription />
    </>
  );
}
