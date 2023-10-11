import Image from "next/image";
import bg from "../public/assets/images/main_page/main-block/bg.jpg";
import assurance from "../public/assets/images/main_page/main-block/icons/01_assurance.svg";
import delivery from "../public/assets/images/main_page/main-block/icons/02_delivery.svg";
import forms from "../public/assets/images/main_page/main-block/icons/03_forms.svg";
import reduction from "../public/assets/images/main_page/main-block/icons/04_reduction.svg";

export default function ImagenIcons() {
  return (
    <div>
      <Image src={bg} width={1400} height={1000} alt="Main page picture" />
      <div className="flex flex-row items-center justify-center  bottom-0 pr-20 pl-35   ">
        <Image className="ml-auto" src={assurance} alt="assurance icon" />
        <Image className="ml-auto" src={delivery} alt="delivery icon" />
        <Image className="ml-auto" src={forms} alt="forms icon" />
        <Image className="ml-auto" src={reduction} alt="reduction icon" />
      </div>
    </div>
  );
}
