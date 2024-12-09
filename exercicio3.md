# Resolução do Exercício 3

### Situação proposta

Otimização de Performance no Frontend

Utilizando React.memo, useMemo, ou outra técnica para melhorar a performance da renderização de uma tabela exibida no Frontend de uma aplicação que lista produtos em uma tabela com paginação e que está com problemas de performance, explique como seria implementada a solução deste problema e mostre exemplos de códigos usados para este propósito.

Critérios:
- Utilizar técnicas de otimização adequadas no React para evitar renderizações desnecessárias.
- Explicar claramente a escolha da abordagem e os benefícios da solução aplicada.

## Possíveis causas do problema

1. **Uso incorreto do array de dependências do hook useEffect**:
 Mudanças em estados não relevantes associados ao hook useEffect podem estar disparando renderizações desnecessárias.
  
2. **Renderizações desnecessárias por falta de memorização**
Componentes podem ser memorizados afim de evitar renderizações desnecessárias.
   
3. **Cálculo ou filtro de paginação recalculados a cada renderização**
  Filtros ou paginação podem estar sendo recalculados a cada renderização.

4. **Carregamento completo da tabela**:
 Exibir todos os dados de uma vez, mesmo aqueles fora da página atual, pode causar gargalos de memória e processamento.

   
## Como eu resolveria o problema

Para resolver este problema eu aplicaria um conjunto de técnicas visando resolver problemas de excesso de renderizações e aproveitaria a situação para aplicar técnicas que trariam um ganho de performance.


### 1. Revisaria o array de dependências do `useEffect`

Eu garantiria que o `useEffect` que faz a chamada da rota que lista os items da tabela só fosse disparado quando os estados ou variáveis relevantes forem alterados. Por exemplo, disparar a busca de itens apenas ao mudar a página:

```typescript
useEffect(() => { fetchProducts(currentPage, itemsPerPage); }, [currentPage, itemsPerPage])
```

### 2. Utilizaria `React.memo` para memorizar componentes

Componentes como as linhas da tabela podem ser memorizados com `React.memo` para evitar re-renderizações ao alterar outros elementos da página:

```typescript
import React, { memo } from 'react';

const ProductRow = memo(({ product }) => ; return ( <tr> <td>{product.name}</td> <td>{product.price}</td> </tr> ); );

export default ProductRow;
```
### 3. Revisaria a lógica do cálculo de paginação e atribuiria o valor computado ao hook useMemo

Eu revisaria a lógica do calculo de paginação, atribuiria o valor computado ao hook useMemo e utilizaria o valor computado para alimentar a tabela. Exemplo:

```typescript
const paginatedProducts = useMemo(() => { 
    const start = (currentPage - 1) * itemsPerPage; 
    const end = start + itemsPerPage; 
    return products.slice(start, end); 
    }, [products, currentPage, itemsPerPage]);

const TableComponent = <ProductsTable products={paginatedProducts} />

```

### 4. Aplicaria técnicas de virtualization na tabela

Eu aplicaria técnicas de virtualization na tabela para exibir apenas os dados necessários para exibição na página atual. Isso pode ser implementado por meio de técnicas de `virtualization`, utilizando, por exemplo a biblioteca `react-window`. Exemplo:

```typescript
import { FixedSizeList as List } from 'react-window';

const VirtualizedTable = ({ products }) => ( 
<List height={400} itemCount={products.length} itemSize={35} width={800}
{({ index, style }) => (
  <div style={style}>
    {products[index].name} - {products[index].price}
  </div>
 </List> ); 
)}
```


### Bônus:

Além das soluções propostas, eu também utilizaria alguma biblioteca que permitesse reaproveitar o cache de items já carregados para evitar novas chamadas desnecessariamente, como por exemplo a biblioteca 'react-query'. Exemplo:

```typescript
import { useQuery } from 'react-query';

const { data: products, isLoading } = useQuery(['products', currentPage], () =>
  fetchProducts(currentPage, itemsPerPage)
);
```

