import { Dispatch, SetStateAction } from "react";
import { Button } from "../../../../components/Button";
import TextAreaInput from "../../../../components/TextAreaInput";
import TextInput from "../../../../components/TextInput";

interface RegisterProductFormProps {
  productName: string;
  setProductName: Dispatch<SetStateAction<string>>;
  productPrice: string;
  setProductPrice: Dispatch<SetStateAction<string>>;
  productDescription: string;
  setProductDescription: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  onSubmit: () => void;
}

const RegisterProductForm: React.FC<RegisterProductFormProps> = ({
  isLoading,
  productName,
  setProductName,
  productDescription,
  setProductDescription,
  productPrice,
  setProductPrice,
  onSubmit,
}) => {
  return (
    <form className="w-[90%] md:w-[30rem] bg-white shadow-md rounded-md p-8 mt-4 lg:mx-auto">
      <h2 className="text-sm md:text-lg text-gray-900 font-bold mb-2">
        Cadastro de produto
      </h2>
      <div className="mb-4">
        <TextInput
          inputLabel="Nome"
          placeholder="Forneça um nome para o produto"
          value={productName}
          onChange={(val) => setProductName(val.target.value)}
        />
      </div>
      <div className="mb-4">
        <TextInput
          inputLabel="Preço"
          placeholder="Preço do produto em reais. Ex: R$ 39,90"
          value={productPrice}
          onChange={(val) => setProductPrice(val.target.value)}
        />
      </div>
      <div className="mb-4">
        <TextAreaInput
          inputLabel="Descrição"
          placeholder="Forneça uma breve descrição para o produto"
          maxTextLength={80}
          showTextLength
          currentTextLength={productDescription.length}
          value={productDescription}
          onChange={(val) => setProductDescription(val.target.value)}
        />
      </div>
      <div className="mb-4">
        <Button
          buttonLabel="Cadastrar produto"
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
          onClick={onSubmit}
        />
      </div>
    </form>
  );
};

export default RegisterProductForm;