export interface ProductDTO {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
  }
  
  export interface CreateProductDTO {
    nome: string;
    preco: number;
    descricao: string;
  }
  