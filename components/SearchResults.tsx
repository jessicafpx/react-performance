import { List, ListRowRenderer } from 'react-virtualized';
import { ProductItem } from './ProductItem';

interface SearchResultsProps {
	totalPrice: number;
  results: Array<{
		id: number;
		price: number;
		priceFormatted: string;
		title: string;
	}>
	onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, onAddToWishlist, totalPrice }: SearchResultsProps) {
	// const totalPrice = useMemo(() => {
	// 	results.reduce((total, product) => total + product.price, 0);
	// }, [results]);

	const rowRerenderer: ListRowRenderer = ({ index, key, style }) => {
		return (
			<div key={key} style={style}>
				<ProductItem
					product={results[index]}
					onAddToWishlist={onAddToWishlist}
				/>
			</div>
		)
	}

	return (
		<div>
			<h2>{totalPrice}</h2>

			<List
				height={350}
				rowHeight={35}
				width={900}
				overscanRowCount={5}
				rowCount={results.length}
				rowRenderer={rowRerenderer}
			/>
			
			{/* {results.map(product => {
				return (
					<ProductItem product={product} key={product.id} onAddToWishlist={onAddToWishlist}/>
				);
			})} */}
		</div>
	)
}


// React:
// 1. Criar nova versão do componente
// 2. Comparar com a versão anterior
// 3. Se houverem alterações, vai atualizar o que alterou

// Quando usar o memo:
// 1. Pure Functional Components
// 2. Renders too often
// 3. Re-renders with same props
// 4. Medium to big size


// Quando usar o useMemo:
// 1. Cálculos pesados
// 2. Igualdade referencial (quando passa aquela info pro componente filho)