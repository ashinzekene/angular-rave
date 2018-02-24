export class RaveOptions {
  PBFPubKey: string
  customer_email: string
  customer_firstname: string
  customer_lastname: string
  custom_description: string
  custom_logo: string
  custom_title: string
  amount: number
  customer_phone: string
  redirect_url: string
  country: string
  currency: string
  payment_method: string
  pay_button_text: string
  txref: string
  integrity_hash: string
  callback: (response: any) => void
  onclose: () => void
}