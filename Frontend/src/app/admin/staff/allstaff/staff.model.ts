import { formatDate } from "@angular/common";
export class Staff {
  id: number;
  img: string;
  name: string;
  email: string;
  date: string;
  address: string;
  mobile: string;
  designation: string;
  constructor(staff) {
    {
      this.id = staff.id || this.getRandomID();
      this.img = staff.avatar || "assets/images/user/user1.jpg";
      this.name = staff.name || "";
      this.designation = staff.designation || "";
      this.email = staff.email || "";
      this.date = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.address = staff.address || "";
      this.mobile = staff.mobile || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
