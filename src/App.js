import React, {useState} from "react";
import Barcode from "./components/Barcode";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
  const [price, setPrice] = useState(0);
  const [productType, setProductType] = useState(null);

  return (
    <main>
      {!!price && !!productType && (
        <div className="no-print flex flex-col justify-center items-center mt-3 mb-1">
          <p className="text-md text-gray-700">Podgląd:</p>
        </div>
      )}
      <div>
        <Barcode price={price} productType={productType}/>
      </div>
      <div className="no-print">
        <InputForm
          price={price}
          setPrice={setPrice}
          productType={productType}
          setProductType={setProductType}
        />
      </div>
    </main>
  );
}

export default App;
