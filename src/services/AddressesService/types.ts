export interface AddressBalancesResponse {
  address: string;
  balance: string | number;
  balanceUsd: string | number;
  currencyId: string;
  explorerUrl: string;
  state: string;
  statusTitle: string;
  statusDescription: string;
  balanceFromExplorer: string | number;
}

export interface TransferFromAddressRequest {
  addressFrom: string;
  currencyId: string;
}

export interface InvoicesByAddressStatuses {
  status: string;
  datetime: string;
}

export interface InvoicesByAddressResponse {
  id: string;
  orderId: string;
  createdAt: string;
  statuses: InvoicesByAddressStatuses[];
  amount: number;
  currency: string;
  storeName: string;
  paymentUrl: string;
}

type AddressState = 'free' | 'busy' | 'hold';

export interface DataByAddressResponse {
  address: string;
  invoices: { paid: number, total: number; };
  savedUsdOnCommission: number;
  state: AddressState;
  transactions: {
    incoming: { amountUsd: number; count: number; };
    outgoing: { amountUsd: number; count: number; };
  };
}
