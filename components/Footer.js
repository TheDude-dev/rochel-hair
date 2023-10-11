import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="bg-black text-white pt-10 pb-10 flex flex-row">
        <div className="flex flex-col mr-20 ml-20 pl-5 pr-5">
          <h1 className="mb-5">ИНФОРМАЦИЯ</h1>
          <div className="text-slate-400">
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
          </div>
        </div>

        <div className="flex flex-col mr-20 ml-20 pl-5 pr-5">
          <h1 className="mb-5">СЛУЖБА ПОДДЕРЖКИ</h1>
          <div className="text-slate-400">
            <h4 className="mb-2">
              <Link href="/">Контактная информация</Link>
            </h4>
            <h4 className="mb-2">
              <Link href="/">Возврат товара</Link>
            </h4>

            <h4 className="mb-2">
              <Link href="/">Карта сайта</Link>
            </h4>
          </div>
        </div>

        <div className="flex flex-col mr-20 ml-20 pl-5 pr-5">
          <h1 className="mb-5">ДОПОЛНИТЕЛЬНО</h1>
          <div className="text-slate-400">
            <h4 className="mb-2">
              <Link href="/">Подарочные сертификаты</Link>
            </h4>
            <h4 className="mb-2">
              <Link href="/">Партнеры</Link>
            </h4>

            <h4 className="mb-2">
              <Link href="/">Товары со скидкой</Link>
            </h4>
          </div>
        </div>

        <div className="flex flex-col mr-20 ml-20 pl-5 pr-5">
          <h1 className="mb-5">ЛИЧНЫЙ КАБИНЕТ</h1>
          <div className="text-slate-400">
            <h4 className="mb-2">
              <Link href="/">Личный кабинет</Link>
            </h4>
            <h4 className="mb-2">
              <Link href="/">История заказов</Link>
            </h4>

            <h4 className="mb-2">
              <Link href="/">Мои закладки</Link>
            </h4>
            <h4 className="mb-2">
              <Link href="/">Рассылка новостей</Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
