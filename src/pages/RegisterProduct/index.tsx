import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import Header from "../../components/Header";
import { ProductsRepositoryImplementation } from "../../repositories/DTOs/implementations/productsImplementation";
import { parseToBRL } from "../../utils/formatBRL";
import RegisterProductForm from "./components/RegisterProductForm";

function RegisterProductPage() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const productsRepository = useMemo(() => {
    return new ProductsRepositoryImplementation();
  }, []);

  const handleRegisterProduct = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = {
        nome: productName,
        preco: parseToBRL(productPrice),
        descricao: productDescription,
      };
      await productsRepository.createProduct(data);
      toast.success("Produto cadastrado com sucesso!");
      setProductName("");
      setProductPrice("");
      setProductDescription("");
    } catch (error) {
      if (error && typeof error === "object" && "statusCode" in error) {
        if (error.statusCode === 409) {
          toast.error("Já existe um produto cadastrado com este nome.");
        } else {
          toast.error(
            "Houve um erro ao tentar cadastrar produto. Por favor, tente novamente mais tarde."
          );
        }
      }
    } finally {
      setIsLoading(false);
    }
  }, [productDescription, productName, productPrice, productsRepository]);

  return (
    <div className="w-screen h-full flex flex-col">
      <Header pageTitle="Cadastro de produto" />
      <main className="flex flex-col bg-gray-50 w-full min-h-screen lg:w-[1080px] mx-auto">
        <div className="w-full max-w-[30rem] flex flex-col mx-auto mt-[4rem] p-4">
          <h1 className="text-lg md:text-2xl text-gray-900 font-bold mt-4">
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
            onSubmit={handleRegisterProduct}
          />
        </div>
      </main>
    </div>
  );
}

export default RegisterProductPage;
