import data from "../../data.json";
import AddToCart from "./AddToCart";
import { useSelector } from "react-redux";
import { selectItems } from "../features/AddToCartFeature/AddToCartSlice";

const Item = () => {
	const itemsInCart = useSelector(selectItems);

	return (
		<div className=" lg:col-span-2 md:col-span-2 mobile:mb-6">
			<h1 className="mb-6 text-[2.6rem] font-bold text-rose-900 mobile:-mt-5">
				Desserts
			</h1>
			<div className="grid xl:grid-cols-3 xl:grid-rows-3 xl:gap-5 mobile:gap-6">
				{data.map((item) => {
					const inCart = itemsInCart.find(
						(cartItem) =>
							cartItem.id === item.id
					);

					return (
						<div
							key={item.id}
							className=" grid relative"
						>
							<img
								src={
									item
										.image
										.thumbnail
								}
								alt={item.name}
								srcSet={`
							${item.image.mobile} 375w,
              						${item.image.tablet} 768w,
              						${item.image.desktop} 1440w
						`}
								sizes=" (max-width: 375px) 100vw,
									(max-width: 768px) 50vw,
    									(max-width: 1440px) 33vw"
								className={`mb-10 rounded-lg  ${
									inCart
										? "border-2 border-red-red"
										: null
								} mobile:w-full mobile:h-[230px] mobile:object-cover`}
							/>
							<AddToCart
								item={item}
							/>
							<p className="text-rose-500">
								{item.category}
							</p>
							<h3 className="text-lg font-semibold text-rose-900">
								{item.name}
							</h3>
							<p className="text-lg font-semibold text-red-red">
								$
								{item.price.toFixed(
									2
								)}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Item;
