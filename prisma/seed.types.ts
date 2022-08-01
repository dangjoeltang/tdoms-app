export interface Order {
  poNumber: string;
  salesRepName: string;
  paymentTerms: string;
  status: string;
}

export interface OrderRow {
  quantity: number;
  poNumber: string;
  productNumber: string;
}

export interface OrderRowWithoutPoNumber {
  quantity: number;
  productNumber: string;
}

export interface Contact {
  name: string;
  phone: string;
  email: string;
  fax?: string;
}

export interface Address {
  title: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  note: string;
  isShipping: boolean;
  isBilling: boolean;
}

export interface Client {
  name: string;
  accountOwner: string;
  accountNumber: string;
  accountType: string;
  businessType: string;
  description: string;
  taxId: string;
  phone: string;
  email: string;
  fax: string;
  discount: number;
  paymentTerms: string;
  addresses?: Address[];
  contacts?: Contact[];
  orders?: Order[];
}

export interface Product {
  type: string;
  modelNumber: string;
  name: string;
  note: string | null;
  stockQuantity: number;
  nextRestockDate: Date;
  nextRestockQuantity: number;
  bulbCount: number;
  finish: string;
  grossWeight: number;
  pkgLength: number;
  pkgWidth: number;
  pkgHeight: number;
  netWeight: number;
  unitLength: number;
  unitWidth: number;
  unitHeight: number;
}

export interface ProductPricing {
  retailPrice: number;
  wholesalePrice: number;
  cost: number;
}
