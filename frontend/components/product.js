import SellersTable from "./sellers_table";

function Product() {
    return (
        <div className="container my-8 mx-auto sm: container px-8 py-2 mx-auto md: container py-2 mx-auto">

            <ul className="mx-4 flex text-gray-600 text-sm lg:text-base">
                <li className="inline-flex items-center">
                    <a href="/">Наушники и Bluetooth-гарнитуры</a>
                    <svg
                        className="h-5 w-auto text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </li>
                <li className="inline-flex items-center text-gray-800">
                    <a href="№">Apple</a>
                </li>
            </ul>


            <div className="flex">
                <div className="flex-initial my-2">
                    <p className="mx-4 text-sm text-indigo-600  md:my-0">15 Вопросов</p>
                </div>
                <div className="flex-initial my-2">
                    <p className="mx-4 text-sm text-indigo-600 md:my-0">32 Отзыва</p>
                </div>
                <div className="flex-initial my-2">
                    <p className="mx-4 text-sm text-green-600 md:my-0">ЭРГОНОМИКА, НАДЕЖНОСТЬ</p>
                </div>
            </div>

            <nav className="flex flex-col sm:flex-row mx-4">
                <button
                    className="text-gray-600 py-4 px-6 block hover:text-indigo-800 focus:outline-none text-indigo-600  border-b-2 font-medium border-indigo-600 ">
                    Описание
                </button>
                <button className="text-gray-600 py-4 px-6 block hover:text-indigo-800 focus:outline-none">
                    Характеристики
                </button>
                <button className="text-gray-600 py-4 px-6 block hover:text-indigo-800 focus:outline-none">
                    Цены
                </button>
                <button className="text-gray-600 py-4 px-6 block hover:text-indigo-800 focus:outline-none">
                    Отзывы
                </button>
                <button className="text-gray-600 py-4 px-6 block hover:text-indigo-800 focus:outline-none">
                    Вопросы о товаре
                </button>
                <button className="text-gray-600 py-4 px-6 block hover:text-indigo-800 focus:outline-none">
                    Обзоры
                </button>
            </nav>


            <div className="container my-6">
                <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">

                    <div
                        className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 md:my-2 md:px-2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
                        <img className="my-4 object-left-top w-70 h-70"
                             src="https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:670/q:100/plain/s3://catalog-products/190320152142488320/190326150025486216.png"/>
                    </div>

                    <div
                        className="w-full overflow-hidden sm:my-2 sm:px-2 md:my-2 md:px-2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">

                        <p className="my-4 font-bold text-base text-gray-600">Коротко о товаре</p>
                        <ul className="list-disc mx-6">
                            <li>Bluetooth 5.0</li>
                            <li>время работы 5 ч (от аккумулятора в кейсе 24 ч)</li>
                            <li>вес 4 г</li>
                        </ul>
                    </div>

                    <div
                        className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 md:my-2 md:px-2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">

                        <div className="max-w-2xl mx-auto px-8 py-4 bg-white rounded-lg shadow-md">
                            <div className="flex justify-between items-center">
                                <span className="font-light text-gray-600 text-sm">ПОПУЛЯРНОЕ ПРЕДЛОЖЕНИЕ</span>
                            </div>

                            <div className="mt-2">
                                <span className="font-bold text-gray-600 text-3xl">170 €</span>
                                <span className="text-gray-600 text-base flex"> Бесплатный самовывоз </span>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <a className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-indigo-700 font-medium text-gray-200 leading-5 hover:bg-indigo-800 md:mx-2 md:w-auto"
                                   href="#">В магазин</a>

                                <div className="flex items-center">
                                    <img className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                                         src="https://pbs.twimg.com/profile_images/580658812329152513/h-jNrJr1_400x400.png"
                                         alt="avatar"/>
                                    <a className="text-gray-700 font-bold cursor-pointer">PhotoPoint</a>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto my-4 px-8 py-4 bg-white rounded-lg shadow-md">
                            <div className="flex justify-between items-center">
                                <span className="font-light text-gray-600 text-sm">НИЗКАЯ ЦЕНА</span>
                            </div>

                            <div className="mt-2">
                                <span className="font-bold text-gray-600 text-3xl">155 €</span>

                                <span className="text-gray-600 text-base flex"> Бесплатная доставка </span>
                                <span className="text-gray-600 text-base flex"> Бесплатный самовывоз </span>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <a className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-indigo-700 font-medium text-gray-200 leading-5 hover:bg-indigo-800 md:mx-2 md:w-auto"
                                   href="#">В магазин</a>

                                <div className="flex items-center">
                                    <img className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                                         src="https://static.pricer.lt/images/sites/Bigbox.ee.png"
                                         alt="avatar"/>
                                    <a className="text-gray-700 font-bold cursor-pointer">BigBox</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <h2 className="text-2xl font-medium text-gray-600 ">Предложения магазинов</h2>
            <SellersTable/>
        </div>
    );
}

export default Product;
