import { memo } from 'react';

interface ProductItemProps {
	product: {
		id: number;
		price: number;
		priceFormatted: string;
		title: string;
	}
	onAddToWishList: (id: number) => void;
}

// memo faz um shallow compare por padrão
// {} === {} // false (igualdade referencial)

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
	// console.log(product)
	return (
		<div>
			{product.title} - <strong>{product.priceFormatted}</strong>
			<button onClick={() => onAddToWishList(product.id)}>Add to wishlist</button>
		</div>
	)
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
	return Object.is(prevProps.product, nextProps.product)
});