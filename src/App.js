import React, {useState} from "react";
import Barcode from "./components/Barcode";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
  const [price, setPrice] = useState(0);
  const [productType, setProductType] = useState(null);

  return (
    <main>
      <div>
        <Barcode price={price} productType={productType}/>
      </div>
      <div className="no-print">
        <InputForm price={price} setPrice={setPrice} productType={productType} setProductType={setProductType}/>
      </div>
    </main>
  );
}

export default App;
