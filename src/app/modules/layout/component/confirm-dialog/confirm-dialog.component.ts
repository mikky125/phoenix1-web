import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
    loading = false;
    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
    ) {}

    onConfirm() {
        const { onConfirm, afterConfirm } = this.data;
        if (!onConfirm) {
            return null;
        }
        this.loading = true;
        onConfirm().subscribe(
            res => {
                this.loading = false;
                this.close();
                if (!!afterConfirm) {
                    afterConfirm();
                }
            },
            err => {
                this.loading = false;
            }
        );
    }
    close(): void {
        this.dialogRef.close();
    }
}

interface ConfirmDialogData {
    title?: string;
    desc?: string;
    onConfirm?: () => Observable<any>;
    afterConfirm?: () => void;
    onCancel?: () => void;
}
