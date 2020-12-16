function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="container mx-auto px-6 py-4">
                <div className="lg:flex">
                    <div className="w-full lg:w-2/5 -mx-6">
                        <div className="px-6">
                            <div>
                                <a href="#" className="text-xl font-bold text-gray-100 hover:text-indigo-700">PRICEx</a>
                            </div>

                            <p className="mt-2 text-gray-400 w-4/5">Крупнейший агрегатор ценовых предложений среди
                                множества проверенных Эстонских интернет-магазинов.</p>

                            <div className="flex mt-4 -mx-2">
                                <a href="#" className="mx-2 text-gray-100 hover:text-gray-400" aria-label="Facebook">
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 512 512">
                                        <path
                                            d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"/>
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <h3 className="text-gray-100 uppercase">Покупателям</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-400">Как выбрать товары</a>
                                <a href="#" className="block mt-2 text-sm text-gray-400">Решение проблем</a>
                                <a href="#" className="block mt-2 text-sm text-gray-400">О сервисе</a>
                            </div>

                            <div>
                                <h3 className="text-gray-100 uppercase">Сотрудничество</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-400">Подключение магазина</a>
                                <a href="#" className="block mt-2 text-sm text-gray-400">Преимущества</a>
                                <a href="#" className="block mt-2 text-sm text-gray-400">Личный кабинет магазина</a>
                            </div>

                            <div>
                                <h3 className="text-gray-100 uppercase">Контакты</h3>
                                <span className="block mt-2 text-sm text-gray-400">+372 56554327</span>
                                <span className="block mt-2 text-sm text-gray-400">info@pricex.ee</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-700 border-none"/>
                <div>
                    <p className="text-xs text-center text-gray-100">© PRICEx - Все права защищены</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
