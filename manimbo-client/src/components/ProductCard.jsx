import Button from './Button';

const ProductCard = ({ product }) => {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#34418e]/10 bg-[#f9fcf8] shadow-[0_18px_45px_rgba(52,65,142,0.09)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(52,65,142,0.15)]">
      <div className="aspect-4/3 overflow-hidden bg-[#34418e]">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#34418e]">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-black text-[#17204d]">{product.title}</h3>
        <p className="mt-2 text-base font-bold text-[#34418e]">{product.price}</p>
        <p className="mt-3 text-sm leading-6 text-[#65708f]">
          {product.content[0].substring(0, 120)}...
        </p>
        <Button to={`/products/${product.name}`} className="mt-4" variant="soft">View Product</Button>
      </div>
    </article>
  );
};

export default ProductCard;
