import { useState } from "react";
import Header from "../../components/Header";
import RegisterProductForm from "./components/RegisterProductForm";

function RegisterProductPage() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log({ productName, productPrice, productDescription });
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className="w-screen h-full flex flex-col">
      <Header pageTitle="Cadastro de produto" />
      <main className="flex flex-col bg-gray-50 w-full min-h-screen lg:w-[1080px] mx-auto">
        <div className="w-full max-w-[30rem] flex flex-col mx-auto mt-[4rem] p-4">
          <h1 className="text-lg md:text-2xl text-gray-900 font-bold">
            Cadastro de produto
          </h1>
          <span className="text-sm md:text-[1rem] text-gray-700 my-2">
            Preencha o formulário para realizar o cadastro do produto
          </span>
          <RegisterProductForm
            productName={productName}
            setProductName={setProductName}
            productPrice={productPrice}
            setProductPrice={setProductPrice}
            productDescription={productDescription}
            setProductDescription={setProductDescription}
            isLoading={isLoading}
            onSubmit={handleSubmit}
          />
        </div>
      </main>
    </div>
  );
}

export default RegisterProductPage;
