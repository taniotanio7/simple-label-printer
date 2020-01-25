import React from "react";
import {capitalize} from "lodash"
import {productCodes} from "../globals";

export default function InputForm({price, setPrice, productType, setProductType}) {
  const products = Object.values(productCodes);

  return (
    <form
      className="container mx-auto px-3"
      onSubmit={e => {
        e.preventDefault();
        window.print();
      }}
    >
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Cena
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mt-3">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="product-type"
        >
          Wybierz produkt
        </label>
        <div className="relative shadow">
          <select
            name="productType"
            id="product-type"
            value={productType}
            onChange={e => setProductType(e.target.value)}
            className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-500"
          >
            <option default value="">
              ------
            </option>
            {products.map(product => (
              <option key={product} value={product}>
                {capitalize(product)}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="shadow-md hover:shadow-xl mt-5 bg-blue-500 disabled:bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed"
          disabled={!price && !productType}
        >
          Drukuj
        </button>
      </div>
    </form>
  );
}
