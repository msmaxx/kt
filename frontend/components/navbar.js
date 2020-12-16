import {useState} from "react";
import Link from "next/link";

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <a className="text-indigo-700 text-xl font-bold md:text-2xl hover:text-indigo-800"
                               href="#">PRICEx</a>

                            <div className="mx-12 hidden md:block">
                                <input type="text"
                                       className="w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border border-transparent focus:outline-none focus:bg-white focus:shadow-outline focus:border-indigo-700"
                                       placeholder="Поиск по товарам" aria-label="Поиск по товарам"/>
                            </div>
                        </div>

                        <div className="flex md:hidden">

                            <button onClick={() => setNavbarOpen(!navbarOpen)} type="button"
                                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                                    aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path fillRule="evenodd"
                                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={"md:flex items-center" + (navbarOpen ? " md:flex" : " hidden")}>
                        <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                            <a className="my-1 text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: md:mx-4 md:my-0"
                               href="#"> Избранное</a>
                            <a className="my-1 text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: md:mx-4 md:my-0"
                               href="#"> Сравнение</a>
                        </div>
                        <div className="flex items-center py-2 -mx-1 md:mx-0">
                            <a className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-indigo-700 font-medium text-gray-200 leading-5 hover:bg-indigo-800 md:mx-2 md:w-auto"
                               href="#">Войти</a>
                            <a className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-gray-900 text-sm bg-gray-300 font-medium text-white leading-5 hover:bg-gray-400 md:mx-0 md:w-auto"
                               href="#">Зарегистрироваться</a>
                        </div>
                        <div className="mt-3 md:hidden">
                            <input type="text"
                                   className="w-full px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline"
                                   placeholder="Поиск по товарам" aria-label="Поиск по товарам"/>
                        </div>
                    </div>
                </div>

                <div className="mt-3 py-3 -mx-3 overflow-y-auto whitespace-no-wrap scrollmenu">
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Продукты</a>
                    <a className="text-sm text-indigo-600 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0" href="#">Скидки
                        и акции</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Электроника</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0" href="#">Бытовая
                        техника</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Компьютеры</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Детям</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Ремонт</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Дом</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Мебель</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Авто</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Красота</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Здоровье</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Гигиена</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Зоотовары</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0" href="#">Спорт
                        и активный отдых</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0" href="#">Досуг
                        и развлечения</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Книги</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0" href="#">Дача,
                        сад и огород</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0" href="#">Одежда
                        и обувь</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0" href="#">Ювелирные
                        изделия</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0" href="#">Товары
                        для взрослых</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0"
                       href="#">Оборудование</a>
                    <a className="text-sm text-gray-700 leading-5 hover:text-indigo-700 hover: mx-4 md:my-0" href="#">Товары
                        для школы и офиса</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
