import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Apod } from 'src/app/models/Apod'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  apod: Apod | null = null
  backIcon: IconProp = ['fas', 'window-close']

  constructor(private router: Router) {
    const item = this.router.getCurrentNavigation()?.extras.state?.item
    if (item) this.apod = item
    else this.router.navigate(['/'])
  }

  ngOnInit(): void {}
}
