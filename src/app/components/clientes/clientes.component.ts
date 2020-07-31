import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

const datos: Cliente[] = [
  { nombre: 'Nahuel Gallinoti', dni: 40879418, telefono: 3517894561, estado: 'Activo' },
  { nombre: 'Matias Gallinoti', dni: 40879418, telefono: 3517894561, estado: 'Activo' },
  { nombre: 'Gabriel Gallinoti', dni: 40879418, telefono: 3517894561, estado: 'Inactivo' },
  { nombre: 'Patricio Gallinoti', dni: 40879418, telefono: 3517894561, estado: 'Moroso' },
];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'dni', 'telefono', 'estado'];
  dataSource = new MatTableDataSource(datos);

  constructor() { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  filtrar(valor: string) {
    console.log(valor);
    this.dataSource.filter = valor.trim().toLowerCase();
  }
}
