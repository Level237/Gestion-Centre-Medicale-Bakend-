import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddPaymentComponent } from "./add-payment/add-payment.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { AllpaymentComponent } from "./allpayment/allpayment.component";
import { Page404Component } from "./../../authentication/page404/page404.component";
const routes: Routes = [
  {
    path: "add-payment",
    component: AddPaymentComponent,
  },
  {
    path: "all-payment",
    component: AllpaymentComponent,
  },
  {
    path: "invoice",
    component: InvoiceComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
