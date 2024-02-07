import { Component } from '@angular/core';
import { UnitcodeService } from '../../service-crud/unitcode.service';

@Component({
  selector: 'app-unitcode',
  templateUrl: './unitcode.component.html',
  styleUrl: './unitcode.component.scss'
})
export class UnitcodeComponent {

  units: any[] = [];
  formunitsData: any = {
    unit_code: '',
    name: '',
    description_unitcode: '',

   };
  editIdunit: number | null = null;

  constructor(private unitcodeService: UnitcodeService) {}

  ngOnInit() {
    this.getUnitcode();

  }

  getUnitcode() {
    this.unitcodeService.getUnitcodes().subscribe((data: any) => {
      this.units = data.data;
    });
  }

  onSubmitUnitcode() {
    if (this.editIdunit === null) {
      // Create a new career
      this.unitcodeService.createUnitcode(this.formunitsData).subscribe(() => {
        this.getUnitcode();
        this.formunitsData.unit_code = '';
        this.formunitsData.name = '';
        this.formunitsData.description_unitcode = '';

      });
    } else {
      // Update an existing career
      this.unitcodeService.updateUnitcode(this.editIdunit, this.formunitsData).subscribe(() => {
        this.getUnitcode();
        this.editIdunit = null;
        this.formunitsData.unit_code = '';
        this.formunitsData.name = '';
        this.formunitsData.description_unitcode = '';
      });
    }
  }

  editUnitcode(unit: any) {
    this.editIdunit = unit.id_unit_code;
    this.formunitsData.unit_code = unit.unit_code;
    this.formunitsData.name = unit.name;
    this.formunitsData.no_3 = unit.description_unitcode;
  }

  deleteUnitcode(id: number) {
    this.unitcodeService.deleteUnitcode(id).subscribe(() => {
      this.getUnitcode();
    });
  }

}
