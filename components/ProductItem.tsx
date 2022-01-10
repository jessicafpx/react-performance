import { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import {AddProductToWishlistProps} from './AddProductToWishList';

// import { AddProductToWishlist } from './AddProductToWishList';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
	return import('./AddProductToWishList').then(mod => mod.AddProductToWishlist)
}, {
	loading: () => <span>Carregando...</span>
})
interface ProductItemProps {
	product: {
		id: number;
		price: number;
		priceFormatted: string;
		title: string;
	}
	onAddToWishlist: (id: number) => void;
}

// memo faz um shallow compare por padrão
// {} === {} // false (igualdade referencial)

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
	const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

	// async function showFormattedDate() {
	// 	const { format } = await import('date-fns')

	// 	format()
	// }

	return (
		<div>
			{product.title} - <strong>{product.priceFormatted}</strong>
			<button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

			{isAddingToWishlist && (
				<AddProductToWishlist 
					onAddToWishlist={() => onAddToWishlist(product.id)}
					onRequestClose={() => setIsAddingToWishlist(false)}
				/>
			)}
		</div>
	)
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
	return Object.is(prevProps.product, nextProps.product)
});