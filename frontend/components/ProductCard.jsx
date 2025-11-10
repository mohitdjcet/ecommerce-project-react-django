function ProductCard({ product }) {
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform p-4">
            <img
                src = {`${BASEURL}${product.image}`}
                alt = {product.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
                />
            <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
            <p className="text-gray-600 font-medium">${product.price}</p>
        </div>
    )
}

export default ProductCard;