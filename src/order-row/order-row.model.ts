export type OrderRowRequired = {
  productNumber: string;
  quantity?: number;
};
export type OrderRowUpdateMany = {
  data: OrderRowRequired[];
};
