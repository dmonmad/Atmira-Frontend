import { Component, Input, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnDestroy {
  @Input() color: string = 'black'
  @Input() loadingText: string[] = ['']
  activeTextIndex = 0

  interval: any
  changeTimer: number = 500

  constructor() {}

  ngOnDestroy(): void {
    if (!this.interval) clearInterval(this.interval)
  }

  ngOnInit(): void {
    if (this.loadingText.length > 1)
      this.interval = setInterval(() => {
        if (this.activeTextIndex === this.loadingText.length-1) {
          this.activeTextIndex = 0
        } else {
          this.activeTextIndex++
        }
      }, this.changeTimer)
  }
}
