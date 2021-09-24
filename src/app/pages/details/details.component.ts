import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Apod } from 'src/app/models/Apod'
import { ApiNasaService } from 'src/app/services/api-nasa.service'
import { UiService } from 'src/app/services/ui.service'
import { formatDateAsYYYYMMDD } from 'src/app/utils/utils'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  apod: Apod | null = null
  backIcon: IconProp = ['fas', 'window-close']

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uiSvc: UiService,
    private nasaSvc: ApiNasaService,
  ) {
    const item = this.router.getCurrentNavigation()?.extras.state?.item
    const date = this.route.snapshot.paramMap.get('date')
    if (item) this.apod = item
    else if (date) this.loadApod(date)
    else {
      this.uiSvc.showErrorNotification("Couldn't load any APOD", 'ERROR')
      this.router.navigate(['/'])
    }
  }

  async loadApod(date: string) {
    try {
      this.apod = await this.nasaSvc.loadApod(date).toPromise()
    } catch (err) {
      this.uiSvc.showErrorNotification(
        `Maybe its not uploaded yet?`,
        `There was an error retrieving ${date}`,
      )
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {}
}
