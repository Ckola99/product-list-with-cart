import data from "../../data.json";
import AddToCart from "./AddToCart"

const Item = () => {
	return (
		<div className=" lg:col-span-2 md:col-span-2">
			<h1 className="mb-6 text-[2.6rem] font-bold text-rose-900">Desserts</h1>
			<div className="grid xl:grid-cols-3 xl:grid-rows-3 xl:gap-5 ">
				{data.map((item, index) => (
					<div key={index} className=" grid relative">
						<img
							src={
								item.image
									.thumbnail
							}
							alt={item.name}
							srcSet={`
							${item.image.mobile} 640w,
              						${item.image.tablet} 768w,
              						${item.image.desktop} 1024w
						`}
							sizes=" 100vw,
                   				        50vw,
                   				       33vw"
						       className="mb-10 rounded-lg"
						/>
						<AddToCart />
						<p className="text-rose-500">
							{item.category}
						</p>
						<h3 className="text-lg font-semibold text-rose-900">
							{item.name}
						</h3>
						<p className="text-lg font-semibold text-red">
							${item.price.toFixed(2)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Item;
