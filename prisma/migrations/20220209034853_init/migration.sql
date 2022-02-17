-- CreateTable
CREATE TABLE "ClientAddress" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(255),
    "city" VARCHAR(255),
    "zipcode" VARCHAR(255),
    "title" VARCHAR(255),
    "note" VARCHAR(255),
    "state" VARCHAR(255),
    "isShipping" BOOLEAN,
    "isBilling" BOOLEAN,
    "createdAt" TIMESTAMP(6),
    "updatedAt" TIMESTAMP(6),
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "ClientAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "phone" VARCHAR(255),
    "email" VARCHAR(255),
    "fax" VARCHAR(255),
    "createdAt" TIMESTAMP(6),
    "updatedAt" TIMESTAMP(6),
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "accountOwner" VARCHAR(255),
    "accountNumber" VARCHAR(255),
    "accountType" VARCHAR(255),
    "businessType" VARCHAR(255),
    "description" TEXT,
    "taxId" VARCHAR(255),
    "phone" VARCHAR(255),
    "email" VARCHAR(255),
    "fax" VARCHAR(255),
    "discount" INTEGER,
    "paymentTerms" VARCHAR(255),
    "createdAt" TIMESTAMP(6),
    "updatedAt" TIMESTAMP(6),

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseOrder" (
    "id" SERIAL NOT NULL,
    "poNumber" VARCHAR(255),
    "salesRepName" VARCHAR(255),
    "paymentTerms" VARCHAR(255),
    "status" VARCHAR(255),
    "createdAt" TIMESTAMP(6),
    "updatedAt" TIMESTAMP(6),
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "PurchaseOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsInOrder" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255),
    "quantity" INTEGER,
    "price" INTEGER,
    "createdAt" TIMESTAMP(6),
    "updatedAt" TIMESTAMP(6),
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductsInOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(255),
    "modelNumber" VARCHAR(255),
    "name" VARCHAR(255),
    "note" TEXT,
    "retailPrice" DECIMAL(10,2),
    "wholesalePrice" DECIMAL(10,2),
    "cost" DECIMAL(10,2),
    "stockQuantity" INTEGER,
    "nextRestockDate" DATE,
    "nextRestockQuantity" INTEGER,
    "bulbCount" INTEGER,
    "finish" VARCHAR(255),
    "grossWeight" DECIMAL(10,2),
    "pkgLength" DECIMAL(10,2),
    "pkgWidth" DECIMAL(10,2),
    "pkgHeight" DECIMAL(10,2),
    "netWeight" DECIMAL(10,2),
    "unitLength" DECIMAL(10,2),
    "unitWidth" DECIMAL(10,2),
    "unitHeight" DECIMAL(10,2),
    "createdAt" TIMESTAMP(6),
    "updatedAt" TIMESTAMP(6),

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FulfillmentOrder" (
    "id" SERIAL NOT NULL,
    "poNumber" VARCHAR(255),
    "status" VARCHAR(255),
    "createdAt" TIMESTAMP(6),
    "updatedAt" TIMESTAMP(6),

    CONSTRAINT "FulfillmentOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" SERIAL NOT NULL,
    "deliveredDate" DATE,
    "status" VARCHAR(255),
    "trackingNumber" VARCHAR(255),
    "shippingProvider" VARCHAR(255),
    "createdAt" TIMESTAMP(6),
    "updatedAt" TIMESTAMP(6),
    "shipmentId" INTEGER NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsInShipment" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255),
    "quantity" INTEGER,
    "createdAt" TIMESTAMP(6),
    "updatedAt" TIMESTAMP(6),
    "shipmentId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductsInShipment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClientAddress" ADD CONSTRAINT "ClientAddress_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrder" ADD CONSTRAINT "PurchaseOrder_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsInOrder" ADD CONSTRAINT "ProductsInOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "PurchaseOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsInOrder" ADD CONSTRAINT "ProductsInOrder_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "FulfillmentOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsInShipment" ADD CONSTRAINT "ProductsInShipment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsInShipment" ADD CONSTRAINT "ProductsInShipment_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "Shipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
