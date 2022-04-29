export interface Order {
  poNumber: string;
  salesRepName: string;
  paymentTerms: string;
  status: string;
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
