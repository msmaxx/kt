import StarRatings from "react-star-ratings"
import axios from 'axios';

function SellersTable() {
    return (
        axios.get('http://localhost:8000/api/seller/').then(response => {
            console.log(response);
        }),
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
                class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
            >
                <table class="min-w-full leading-normal">
                    <thead>
                    <tr>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Магазин</th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Доставка</th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Оплата</th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Цена</th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"/>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img
                                        className="w-full h-full rounded-full"
                                        src="https://pbs.twimg.com/profile_images/580658812329152513/h-jNrJr1_400x400.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Photopoint
                                    </p>
                                    <div className="flex">
                                        <StarRatings
                                            rating={4.5}
                                            starDimension="15px"
                                            starSpacing="1px"
                                            starRatedColor="rgb(255,193,37)"

                                        />
                                        <p className="mx-4 text-sm text-gray-600 md:my-0">24 Отзыва</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-600 whitespace-no-wrap">Бесплатный самовывоз</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">Оплата онлайн</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="font-bold text-gray-600 text-xl">170 €</span>
                        </td>
                        <td
                            className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                        >
                            <a className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-indigo-700 font-medium text-gray-200 leading-5 hover:bg-indigo-800 md:mx-2 md:w-auto"
                               href="#">В магазин</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img
                                        className="w-full h-full rounded-full"
                                        src="https://static.pricer.lt/images/sites/Bigbox.ee.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        BigBox.ee
                                    </p>
                                    <div className="flex">
                                        <StarRatings
                                            rating={4}
                                            starDimension="15px"
                                            starSpacing="1px"
                                            starRatedColor="rgb(255,193,37)"
                                        />
                                        <p className="mx-4 text-sm text-gray-600 md:my-0">3 Отзыва</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">Бесплатная доставка</p>
                            <p className="text-gray-600 whitespace-no-wrap">Бесплатный самовывоз</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">Варианты оплаты учтоняйте в магазине</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="font-bold text-gray-600 text-xl">155 €</span>
                        </td>
                        <td
                            className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                        >
                            <a className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-indigo-700 font-medium text-gray-200 leading-5 hover:bg-indigo-800 md:mx-2 md:w-auto"
                               href="#">В магазин</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SellersTable;
