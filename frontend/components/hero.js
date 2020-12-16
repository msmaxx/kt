function Hero() {
    return (
        <div className="md:flex">
            <div className="flex items-center justify-center px-6 py-8 md:h-128 w-full md:w-1/2">
                <div className="max-w-xl">
                    <h2 className="text-2xl font-semibold text-indigo-600 md:text-3xl">Выгодный <span
                        className="text-gray-700">шопинг!</span></h2>

                    <p className="mt-2 text-sm text-gray-600 md:text-base"><b>PRICEx</b> поможет подобрать, найти и
                        купить подходящий товар по выгодной цене: рейтинги, отзывы и разнообразные фильтры сориентируют
                        среди множества предложений проверенных Эстонских интернет-магазинов.</p>

                    <div className="flex mt-6">
                        <a href="#"
                           className="px-3 py-2 block bg-indigo-700 text-gray-200 text-xs font-semibold rounded hover:bg-indigo-800">Скидки
                            и акции</a>
                        <a href="#"
                           className="mx-4 px-3 py-2 block bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">Список
                            магазинов</a>
                    </div>
                </div>
            </div>

            <div className="w-full h-64 md:w-1/2 md:h-auto">
                <div className="h-full w-full bg-cover"
                     style={{'background-image': 'url(https://images.unsplash.com/photo-1588286492514-ddb61b527086?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)'}}>
                    <div className="h-full w-full bg-black opacity-25"/>
                </div>
            </div>
        </div>
    );
}

export default Hero;
