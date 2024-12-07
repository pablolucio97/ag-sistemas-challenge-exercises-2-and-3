export function parseToBRL(value: string): number {
  const numberValue = parseFloat(value);
  return numberValue;
}

export function validateBRLFormat(price: string): boolean {

      const decimalIndex = price.lastIndexOf('.');

 
      if (decimalIndex === -1 || price.length - decimalIndex - 1 !== 2) {
          return false;
      }
  
      const afterDecimal = price.slice(decimalIndex + 1);
  
 
      if (!/^\d{2}$/.test(afterDecimal)) {
          return false;
      }
  
  
      const beforeDecimal = price.slice(0, decimalIndex);
      if (!/^\d+([,]\d{3})*$/.test(beforeDecimal)) {
          return false;
      }
  
      return true;
}