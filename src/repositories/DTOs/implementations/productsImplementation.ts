import { api, IApiSuccessResponse } from "../../../services/api";
import { ProductsRepository } from "../interfaces/products";
import { CreateProductDTO, ProductDTO } from "../productDTO";

export class ProductsRepositoryImplementation implements ProductsRepository {
  async createProduct(data: CreateProductDTO): Promise<ProductDTO | null> {
    const response = await api.post<IApiSuccessResponse<ProductDTO>>(
      "/produtos",
      data
    );
    return response.data.RES;
  }
}
