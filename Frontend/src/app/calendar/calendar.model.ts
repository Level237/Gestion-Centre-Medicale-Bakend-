import { formatDate } from "@angular/common";
export class Calendar {
  id: number;
  title: string;
  category: string;
  startDate: string;
  endDate: string;
  details: string;

  constructor(calendar) {
    {
      this.id = calendar.id || this.getRandomID();
      this.title = calendar.title || "";
      this.category = calendar.category || "";
      this.startDate = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.endDate = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.details = calendar.details || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
