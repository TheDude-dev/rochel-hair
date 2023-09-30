import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="bg-black text-white pt-10 pb-10">
        <p className="flex flex-col mr-20 ml-20 pl-5 pr-5">
          <h1 className="mb-5">ИНФОРМАЦИЯ</h1>
          <span className="text-slate-400">
            <h4 className="mb-2">
              <Link href="/">
                Златоустовские ножи <br />в Москве и Московской области
              </Link>
            </h4>
            <h4 className="mb-2">
              <Link href="/">Ножевые стали</Link>
            </h4>

            <h4 className="mb-2">
              <Link href="/">О нас</Link>
            </h4>
            <h4 className="mb-2">
              <Link href="/">Условия оплаты и доставки</Link>
            </h4>
            <h4>
              <Link href="/">Политика конфиденциальности</Link>
            </h4>
          </span>
        </p>
      </div>
    </>
  );
}
