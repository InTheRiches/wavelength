import Link from "next/link";

export default function ProductCarousel({ products }) {
    return (
        <div className="grid grid-cols-2 overflow-x-auto scrollbar-hide mb-5 gap-y-4">
            {products.map((product) => (
                <div className="flex flex-col items-center p-10 hover:z-50">
                    <img src={product.image} alt="" className="h-52 w-52 rounded-xl drop-shadow-xl bg-white py-1 border-4 border-white object-contain mb-6" />
                    <div className="flex flex-col items-center">
                        <a target="_blank" rel="noopener noreferrer" href={product.url} className="text-2xl font-medium mt-4 mb-2 text-slate-900 dark:text-slate-50 hover:underline">{product.name}</a>
                        <p className=" text-slate-700 dark:text-slate-300 min-[424px]:text-md min-[1350px]:text-lg text-base">{product.description}</p>
                    </div>
                </div>
                // buttons to go left and right to the next and last product
            ))}
        </div>
    )
}