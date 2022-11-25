import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ChipModel } from '../../models/chip.model';
import { ChipsService } from '../../services/chips.service';

@Component({
  selector: 'app-chips-list',
  styleUrls: ['./chips-list.component.scss'],
  templateUrl: './chips-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipsListComponent {
  readonly list$: Observable<ChipModel[]> = this._chipsService.getAll();

  constructor(private _chipsService: ChipsService) {
  }
}
