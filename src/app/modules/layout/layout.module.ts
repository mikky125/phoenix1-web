import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';

import {
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatIconModule
} from '@angular/material';
import { LoadingComponent } from './components/loading/loading.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';

const SharedComponents = [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PageHeadingComponent,
    LoadingComponent,
    ConfirmDialogComponent
];

@NgModule({
    declarations: [...SharedComponents],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatTableModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatIconModule
    ],
    exports: [
        CommonModule,
        ...SharedComponents,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatTableModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatIconModule
    ],
    entryComponents: [ConfirmDialogComponent]
})
export class LayoutModule {}
