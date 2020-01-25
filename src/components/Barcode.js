import React from "react";
import PluginBarcode from "react-barcode";
import "./Barcode.css"
import {currencyDefaults, productCodes} from "../globals";
import currency from "currency.js"

function generateEAN(productType, price) {
  const productPrice = currency(price, currencyDefaults);
  // TODO: Fix this
  const productCode = Object.keys(productCodes).find(
    key => productCodes[key] === productType
  );
  console.log(productCode);
  if (productPrice.value < 9999.99) {
    const priceStr = productPrice.intValue.toString().padStart(6, "0");
    return `201${productCode}${priceStr}`;
  }
}

export default function Barcode({price, productType}) {
  if (!price || !productType) {
    return <p className="text-3xl">Wprowadź wszystkie dane</p>
  }
  const productPrice = currency(price, currencyDefaults);

  return <div style={{width: "60mm", height: "29mm"}} className="flex flex-col items-center">
    <PluginBarcode format="ean13" font="OCRB" value={generateEAN(productType, price)}/>
    <p className="text-xl text-center mt-0">Cena: {productPrice.format()}</p>
  </div>;
}
