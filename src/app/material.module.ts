import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonModule,
        MatSelectModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatTableModule,
        MatSortModule,
    ],
    exports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonModule,
        MatSelectModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatTableModule,
        MatSortModule,
    ],
    providers: [],
})
export class MaterialModule { }
