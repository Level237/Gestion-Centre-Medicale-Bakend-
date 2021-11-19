import { formatDate } from "@angular/common";
export class Appointments {
  id: number;
  img: string;
  name: string;
  email: string;
  dateTime: string;
  mobile: string;
  address: string;
  disease: string;

  constructor(appointments) {
    {
      this.id = appointments.id || this.getRandomID();
      this.img = appointments.avatar || "assets/images/user/usrbig1.jpg";
      this.name = appointments.name || "";
      this.email = appointments.email || "";
      this.dateTime = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.address = appointments.address || "";
      this.mobile = appointments.mobile || "";
      this.disease = appointments.disease || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
