export enum ProductOrderByEnum {
  title_asc = 'title_asc',
  title_dsc = 'title_dsc',
  price_asc = 'price_asc',
  price_dsc = 'price_dsc',
}

export const ProductOrderByLabelMapping: Record<ProductOrderByEnum, string> = {
  [ProductOrderByEnum.title_asc]: 'title_asc',
  [ProductOrderByEnum.title_dsc]: 'title_dsc',
  [ProductOrderByEnum.price_asc]: 'price_asc',
  [ProductOrderByEnum.price_dsc]: 'price_dsc',
};
