import { api } from '@/api/Api';
import { AxiosBaseResponse, Token } from '@/api/types';
import {
  AddressBalancesResponse,
  TransferFromAddressRequest,
  InvoicesByAddressResponse,
  DataByAddressResponse,
} from './types';

export default class AddressesService {
  public static async getAddressBalances(params: Record<string, any>, token: Token): Promise<AxiosBaseResponse<AddressBalancesResponse>> {
    return api.get('/stores/invoices/addresses/new', params, token);
  }

  public static async transferFromAddress(
    payload: TransferFromAddressRequest,
    token: Token,
  ): Promise<AxiosBaseResponse<Partial<AddressBalancesResponse>>> {
    return api.post('/stores/invoices/transfer-from-address', payload, token);
  }

  public static async getInvoicesByAddress(
    params: Record<string, string | string[]>,
    token: Token,
  ): Promise<AxiosBaseResponse<InvoicesByAddressResponse>> {
    return api.post('/stores/addresses/invoices', params, token);
  }

  public static async getDataByAddress(address: string, token: Token): Promise<AxiosBaseResponse<DataByAddressResponse>> {
    return api.get(`/addresses/${address}`, null, token);
  }
}
