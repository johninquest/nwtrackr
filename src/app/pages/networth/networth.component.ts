import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/utils/supabase.service';
import { DatetimeService } from 'src/app/utils/datetime.service';

@Component({
  selector: 'app-networth',
  templateUrl: './networth.component.html',
  styleUrls: ['./networth.component.scss']
})
export class NetworthComponent {
  constructor(private _db: SupabaseService, private _dts: DatetimeService) {
    this.fetchAllNetWorthData();
  }

  netWorthData: any;
  sumOfAssets: number = 0;
  sumOfLiabilities: number = 0;

  fetchAllNetWorthData() {
    let _req = this._db.getAllRowsInTable('networth');
    _req.then(val => {
      console.log('Net worth data:', val);
      this.getAndSum(val.data ?? [])
      this.netWorthData = val.data;
    }).catch(err => console.log('Error data:', err))

  }

  getAndSum(nwData: Array<any>) {
    let sumHolder: number = 0;
    if (nwData) {
      for (let i in nwData) {
        // sum += array[i];
        // console.log('Amt:', nwData[i]['monetary_value']);
        // let amt = nwData[i]['monetary_value'];

        if (nwData[i]['category'] === 'asset') {
          console.log('Assets:', nwData[i]['monetary_value']);
          this.sumOfAssets += nwData[i]['monetary_value'];
        } if (nwData[i]['category'] === 'liability') {
          console.log('Liabilities:', nwData[i]['monetary_value']);
          this.sumOfLiabilities += nwData[i]['monetary_value'];
        }
      }


    }

  }

  dateFormatted(dateStr: string) {
    return this._dts.toDeDateFormat(dateStr);
  }
}
