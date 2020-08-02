import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormClientesComponent } from './form-clientes/form-clientes.component';

const datos: Cliente[] = [
  { nombre: 'Nahuel Gallinoti', dni: 40879418, fechaNacimiento: new Date('02/03/1993'), telefono: 3517894561, estado: 'Activo' },
  { nombre: 'Matias Gallinoti', dni: 40879418, fechaNacimiento: new Date('03/04/1992'), telefono: 3517894561, estado: 'Activo' },
  { nombre: 'Gabriel Gallinoti', dni: 40879418, fechaNacimiento: new Date('04/05/1990'), telefono: 3517894561, estado: 'Inactivo' },
  { nombre: 'Patricio Gallinoti', dni: 40879418, fechaNacimiento: new Date('05/06/1996'), telefono: 3517894561, estado: 'Moroso' },
];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'dni', 'telefono', 'estado'];
  dataSource = new MatTableDataSource(datos);

  constructor(public dialog: MatDialog) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  filtrar(valor: string) {
    console.log(valor);
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  agregarCliente(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      modoEdicion: false,
    };

    this.dialog.open(FormClientesComponent, dialogConfig);
  }
}
