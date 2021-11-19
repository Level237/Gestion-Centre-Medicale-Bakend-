export class Payment {
  id: number;
  pName: string;
  dName: string;
  charges: string;
  tax: string;
  date: string;
  discount: string;
  total: string;
  constructor(payment) {
    {
      this.id = payment.id || this.getRandomID();
      this.pName = payment.pName || "";
      this.dName = payment.dName || "";
      this.charges = payment.charges || "";
      this.tax = payment.tax || "";
      this.date = payment.date || "";
      this.discount = payment.discount || "";
      this.total = payment.total || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
