import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Apod } from 'src/app/models/Apod'
import { ApiNasaService } from 'src/app/services/api-nasa.service'
import { UiService } from 'src/app/services/ui.service'
import { formatDateAsYYYYMMDD } from 'src/app/utils/utils'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false
  apodsToLoad: number = 6
  apods: Apod[] = []
  apod: Apod | null = null

  tiltSettings = {
    reverse: false,
    max: 12,
    speed: 1000,
    scale: 1.05,
    glare: false,
    reset: true,
    perspective: 500,
    transition: true,
    'max-glare': 0.25,
    'glare-prerender': false,
    gyroscope: false,
    gyroscopeMinAngleX: -30,
    gyroscopeMaxAngleX: 30,
    gyroscopeMinAngleY: -30,
    gyroscopeMaxAngleY: 30,
  }

  constructor(
    private nasaApiSvc: ApiNasaService,
    private uiSvc: UiService,
    private router: Router,
  ) {
    this.loadData()
  }

  ngOnInit(): void {}

  async loadData() {
    this.apods = []
    this.apod = null;
    this.isLoading = true
    const todayDate: Date = new Date()
    for (let index = 0; index < this.apodsToLoad; index++) {
      const date: Date = new Date()
      date.setDate(todayDate.getDate() - index)
      try {
        const apod = await this.nasaApiSvc
          .loadApod(formatDateAsYYYYMMDD(date))
          .toPromise()

        this.apods.push(apod)
      } catch (err) {
        this.uiSvc.showErrorNotification(
          `Maybe its not uploaded yet?`,
          `There was an error retrieving ${formatDateAsYYYYMMDD(date)}`,
        )
        console.log(err)
      }
    }
    this.isLoading = false
  }

  openDetails(item: Apod) {
    this.router.navigate(['details', item.date], { state: { item: item } })
  }
}
