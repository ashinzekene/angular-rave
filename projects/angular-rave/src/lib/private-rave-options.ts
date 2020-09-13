import { RaveOptions, RaveCustomer } from './rave-options';

export interface RavePaymentData {
  amount: number;
  currency: string;
  customer: RaveCustomer;
  flw_ref: string;
  status: string;
  tx_ref: string;
  transaction_id: string;
}

export interface PrivateRaveOptions extends RaveOptions {
  callback: RaveCallback;
  onclose: () => void;
}

export type RaveCallback = (paymentData: RavePaymentData) => void;
