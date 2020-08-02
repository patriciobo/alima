import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UIService } from '../../../services/ui.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {
  formCliente: FormGroup;
  modoEdicion: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FormClientesComponent>,
    private uiService: UIService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    if (data.isEditing) {
      this.modoEdicion = data.modoEdicion;
    } else {
      this.modoEdicion = data.modoEdicion;
    }
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formCliente = this.formBuilder.group({
      NombreYApellido: [
        ,
        { validators: [Validators.required], updateOn: 'blur' },
      ],
      Dni: [
        ,
        {
          validators: [
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.minLength(6),
          ],
          updateOn: 'blur',
        },
      ],
      Telefono: [
        ,
        {
          validators: [
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.minLength(10),
          ],
          updateOn: 'blur',
        },
      ],
      Correo: [null, { updateOn: 'blur' }],
      FechaNacimiento: [
        { validators: [Validators.required], updateOn: 'blur' },
      ],
    });
  }

  guardarCliente(): boolean {
    return true;
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
