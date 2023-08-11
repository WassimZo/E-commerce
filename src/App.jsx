import ProductsList from "./components/ProductsList";
import FloatingCart from "./components/FloatingCart";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-800">
        <div className="max-w-4xl mx-auto pt-14">
          <ProductsList />
        </div>
      </div>
      <FloatingCart />
    </>
  );
}

export default App;
