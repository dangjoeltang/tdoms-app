import { Product } from '@prisma/client';

export const products = [
  {
    type: 'lighting',
    modelNumber: 'LGHT-001',
    name: 'Light Number 1',
    note: '',
    retailPrice: 99.99,
    wholesalePrice: 49.99,
    cost: 25.0,
    stockQuantity: 10,
    bulbCount: 5,
    finish: 'rustic',
    grossWeight: 30,
    pkgLength: 25,
    pkgWidth: 25,
    pkgHeight: 25,
    netWeight: 25,
    unitLength: 20,
    unitWidth: 20,
    unitHeight: 20,
  },
  {
    type: 'Lighting',
    modelNumber: 'LPNT',
    retailPrice: 856.96,
    wholesalePrice: 952.16,
    cost: 366.61,
    stockQuantity: 27,
    bulbCount: 3,
    finish: 'Boilermaker',
    grossWeight: 2,
    pkgLength: 21,
    pkgWidth: 14,
    pkgHeight: 11,
    netWeight: 6,
    unitLength: 9,
    unitWidth: 16,
    unitHeight: 3,
  },
  {
    type: 'Lighting',
    modelNumber: 'CYHHZ',
    retailPrice: 834.63,
    wholesalePrice: 597.5,
    cost: 170.27,
    stockQuantity: 2,
    bulbCount: 9,
    finish: 'Pipefitter',
    grossWeight: 44,
    pkgLength: 18,
    pkgWidth: 7,
    pkgHeight: 11,
    netWeight: 50,
    unitLength: 20,
    unitWidth: 20,
    unitHeight: 20,
  },
  {
    type: 'Lighting',
    modelNumber: 'RYAM^A',
    retailPrice: 503.6,
    wholesalePrice: 576.34,
    cost: 254.26,
    stockQuantity: 100,
    bulbCount: 10,
    finish: 'Plumber',
    grossWeight: 9,
    pkgLength: 13,
    pkgWidth: 17,
    pkgHeight: 4,
    netWeight: 38,
    unitLength: 3,
    unitWidth: 18,
    unitHeight: 1,
  },
  {
    type: 'Lighting',
    modelNumber: 'CPS',
    retailPrice: 842.69,
    wholesalePrice: 62.75,
    cost: 103.51,
    stockQuantity: 96,
    bulbCount: 2,
    finish: 'Boilermaker',
    grossWeight: 12,
    pkgLength: 11,
    pkgWidth: 9,
    pkgHeight: 14,
    netWeight: 29,
    unitLength: 1,
    unitWidth: 18,
    unitHeight: 12,
  },
  {
    type: 'Lighting',
    modelNumber: 'NWL',
    retailPrice: 699.62,
    wholesalePrice: 436.85,
    cost: 194.22,
    stockQuantity: 79,
    bulbCount: 8,
    finish: 'Sheet Metal Worker',
    grossWeight: 13,
    pkgLength: 12,
    pkgWidth: 11,
    pkgHeight: 5,
    netWeight: 9,
    unitLength: 3,
    unitWidth: 20,
    unitHeight: 5,
  },
  {
    type: 'Lighting',
    modelNumber: 'EVR',
    retailPrice: 514.49,
    wholesalePrice: 275.52,
    cost: 243.2,
    stockQuantity: 74,
    bulbCount: 9,
    finish: 'Pipelayer',
    grossWeight: 28,
    pkgLength: 21,
    pkgWidth: 25,
    pkgHeight: 1,
    netWeight: 43,
    unitLength: 3,
    unitWidth: 15,
    unitHeight: 19,
  },
  {
    type: 'Lighting',
    modelNumber: 'RBS^H',
    retailPrice: 598.9,
    wholesalePrice: 203.15,
    cost: 303.68,
    stockQuantity: 95,
    bulbCount: 1,
    finish: 'Concrete Finisher',
    grossWeight: 29,
    pkgLength: 5,
    pkgWidth: 8,
    pkgHeight: 12,
    netWeight: 40,
    unitLength: 3,
    unitWidth: 10,
    unitHeight: 3,
  },
  {
    type: 'Lighting',
    modelNumber: 'BPL',
    retailPrice: 338.51,
    wholesalePrice: 190.76,
    cost: 159.49,
    stockQuantity: 55,
    bulbCount: 6,
    finish: 'Stucco Mason',
    grossWeight: 5,
    pkgLength: 16,
    pkgWidth: 21,
    pkgHeight: 9,
    netWeight: 2,
    unitLength: 8,
    unitWidth: 15,
    unitHeight: 19,
  },
  {
    type: 'Lighting',
    modelNumber: 'SKYW',
    retailPrice: 540.52,
    wholesalePrice: 411.77,
    cost: 154.77,
    stockQuantity: 72,
    bulbCount: 3,
    finish: 'Stucco Mason',
    grossWeight: 38,
    pkgLength: 23,
    pkgWidth: 25,
    pkgHeight: 21,
    netWeight: 50,
    unitLength: 16,
    unitWidth: 2,
    unitHeight: 2,
  },
  {
    type: 'Lighting',
    modelNumber: 'AUY',
    retailPrice: 760.77,
    wholesalePrice: 567.89,
    cost: 55.15,
    stockQuantity: 50,
    bulbCount: 5,
    finish: 'Safety Officer',
    grossWeight: 28,
    pkgLength: 16,
    pkgWidth: 6,
    pkgHeight: 3,
    netWeight: 21,
    unitLength: 2,
    unitWidth: 17,
    unitHeight: 6,
  },
  {
    type: 'Lighting',
    modelNumber: 'LGF.A',
    retailPrice: 346.25,
    wholesalePrice: 405.23,
    cost: 408.58,
    stockQuantity: 31,
    bulbCount: 4,
    finish: 'Safety Officer',
    grossWeight: 48,
    pkgLength: 22,
    pkgWidth: 10,
    pkgHeight: 5,
    netWeight: 32,
    unitLength: 11,
    unitWidth: 9,
    unitHeight: 9,
  },
  {
    type: 'Lighting',
    modelNumber: 'AMTX',
    retailPrice: 487.66,
    wholesalePrice: 106.27,
    cost: 300.88,
    stockQuantity: 91,
    bulbCount: 10,
    finish: 'Safety Officer',
    grossWeight: 4,
    pkgLength: 10,
    pkgWidth: 10,
    pkgHeight: 1,
    netWeight: 4,
    unitLength: 17,
    unitWidth: 16,
    unitHeight: 4,
  },
  {
    type: 'Lighting',
    modelNumber: 'CVI',
    retailPrice: 342.64,
    wholesalePrice: 671.3,
    cost: 210.18,
    stockQuantity: 78,
    bulbCount: 1,
    finish: 'Electrician',
    grossWeight: 25,
    pkgLength: 2,
    pkgWidth: 17,
    pkgHeight: 25,
    netWeight: 36,
    unitLength: 1,
    unitWidth: 4,
    unitHeight: 18,
  },
  {
    type: 'Lighting',
    modelNumber: 'TMK^C',
    retailPrice: 866.74,
    wholesalePrice: 834.58,
    cost: 253.57,
    stockQuantity: 4,
    bulbCount: 1,
    finish: 'Waterproofer',
    grossWeight: 3,
    pkgLength: 23,
    pkgWidth: 20,
    pkgHeight: 12,
    netWeight: 20,
    unitLength: 3,
    unitWidth: 14,
    unitHeight: 4,
  },
  {
    type: 'Lighting',
    modelNumber: 'QCOM',
    retailPrice: 102.82,
    wholesalePrice: 71.74,
    cost: 199.04,
    stockQuantity: 12,
    bulbCount: 1,
    finish: 'Concrete Finisher',
    grossWeight: 15,
    pkgLength: 7,
    pkgWidth: 21,
    pkgHeight: 16,
    netWeight: 33,
    unitLength: 14,
    unitWidth: 18,
    unitHeight: 12,
  },
  {
    type: 'Lighting',
    modelNumber: 'RMR',
    retailPrice: 947.75,
    wholesalePrice: 780.01,
    cost: 59.27,
    stockQuantity: 23,
    bulbCount: 3,
    finish: 'Plumber',
    grossWeight: 31,
    pkgLength: 14,
    pkgWidth: 10,
    pkgHeight: 6,
    netWeight: 4,
    unitLength: 4,
    unitWidth: 10,
    unitHeight: 8,
  },
  {
    type: 'Lighting',
    modelNumber: 'PKOH',
    retailPrice: 28.76,
    wholesalePrice: 447.2,
    cost: 410.82,
    stockQuantity: 37,
    bulbCount: 9,
    finish: 'Stucco Mason',
    grossWeight: 2,
    pkgLength: 10,
    pkgWidth: 13,
    pkgHeight: 25,
    netWeight: 14,
    unitLength: 12,
    unitWidth: 9,
    unitHeight: 6,
  },
  {
    type: 'Lighting',
    modelNumber: 'DKT',
    retailPrice: 897.96,
    wholesalePrice: 138.21,
    cost: 233.75,
    stockQuantity: 85,
    bulbCount: 2,
    finish: 'Plumber',
    grossWeight: 29,
    pkgLength: 25,
    pkgWidth: 3,
    pkgHeight: 18,
    netWeight: 28,
    unitLength: 20,
    unitWidth: 15,
    unitHeight: 2,
  },
  {
    type: 'Lighting',
    modelNumber: 'JOE',
    retailPrice: 104.19,
    wholesalePrice: 25.32,
    cost: 37.45,
    stockQuantity: 98,
    bulbCount: 7,
    finish: 'Glazier',
    grossWeight: 42,
    pkgLength: 10,
    pkgWidth: 12,
    pkgHeight: 21,
    netWeight: 2,
    unitLength: 5,
    unitWidth: 5,
    unitHeight: 5,
  },
  {
    type: 'Lighting',
    modelNumber: 'RCKY',
    retailPrice: 178.62,
    wholesalePrice: 928.62,
    cost: 337.7,
    stockQuantity: 72,
    bulbCount: 8,
    finish: 'Concrete Finisher',
    grossWeight: 30,
    pkgLength: 4,
    pkgWidth: 9,
    pkgHeight: 5,
    netWeight: 24,
    unitLength: 10,
    unitWidth: 19,
    unitHeight: 9,
  },
];