import { Injectable } from '@angular/core'
import { IndividualConfig, ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root',
})
export class UiService {
  toastCfg: Partial<IndividualConfig> = {
    closeButton: true,
    progressBar: true,
    easeTime: 500,
  }
  constructor(private toastr: ToastrService) {}

  showSuccessNotification(text?: string, title?: string) {
    this.toastr.success(text ?? '', title ?? '', this.toastCfg)
  }

  showErrorNotification(text?: string, title?: string) {
    this.toastr.error(text ?? '', title ?? '', this.toastCfg)
  }

  showWarningNotification(text?: string, title?: string) {
    this.toastr.warning(text ?? '', title ?? '', this.toastCfg)
  }
}
