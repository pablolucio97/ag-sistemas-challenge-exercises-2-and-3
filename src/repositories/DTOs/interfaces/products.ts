import { CreateProductDTO, ProductDTO } from "../productDTO";

export interface ProductsRepository {
  createProduct(data: CreateProductDTO): Promise<ProductDTO | null>;
}
