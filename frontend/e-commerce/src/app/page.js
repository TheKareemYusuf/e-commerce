import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <div>
      <SearchBar />
      <ProductList />
    </div>
  );
}