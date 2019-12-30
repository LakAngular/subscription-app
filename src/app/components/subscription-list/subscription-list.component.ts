import { Component, OnInit } from '@angular/core';
import { SubscriptionSaveService } from '../../_service/subscription-save.service';
import { ISubscription} from '../../_model/subscriptionType.interface';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss']
})
export class SubscriptionListComponent implements OnInit {
  subscriptionValue: ISubscription[];

  constructor(private subscripitonsaveService: SubscriptionSaveService) { }


  ngOnInit() {
    this.listSubscription();
  }

  /** @description Method for listing the subscriptions
   *  @set email string, subscription string, password string
   */
  listSubscription() {
    this.subscriptionValue = this.subscripitonsaveService.getSubscriptionValue();
    console.log(this.subscriptionValue);
  }

}
