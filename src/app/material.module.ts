import { NgModule } from "@angular/core";
import { MatButtonModule, MatSelectModule,MatDialogModule, MatCardModule,MatProgressSpinnerModule, MatTabsModule, MatListModule, MatSidenavModule, MatToolbarModule, MatCheckboxModule, MatSliderModule, MatIconModule, MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    imports: [MatButtonModule, 
        MatCheckboxModule, MatCardModule, MatSelectModule,MatDialogModule, MatTabsModule,MatProgressSpinnerModule, MatListModule, MatSidenavModule, MatToolbarModule, MatSliderModule, MatNativeDateModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
    exports: [MatButtonModule,
        MatCheckboxModule, MatCardModule, MatTabsModule,MatDialogModule, MatSelectModule,MatProgressSpinnerModule, MatListModule, MatSidenavModule, MatToolbarModule, MatSliderModule, MatNativeDateModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule]
})
export class MaterialModule { }