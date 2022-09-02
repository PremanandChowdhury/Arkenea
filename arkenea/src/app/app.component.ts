import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

export interface PeriodicElement {
  id: number;
  user_name: string;
  email: string;
  gender: string;
  address: string;
  date_of_birth: string;
}
// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    user_name: 'Rodrique Inglefield',
    email: 'ringlefield0@bravesites.com',
    gender: 'Male',
    address: '114 Springs Crossing',
    date_of_birth: '2/16/2017',
  },
  {
    id: 2,
    user_name: 'Brittani Deegan',
    email: 'bdeegan1@microsoft.com',
    gender: 'Female',
    address: '24837 Roth Pass',
    date_of_birth: '12/27/2021',
  },
  {
    id: 3,
    user_name: 'Jobie Ritchman',
    email: 'jritchman2@cafepress.com',
    gender: 'Polygender',
    address: '53 Warbler Pass',
    date_of_birth: '12/16/2021',
  },
  {
    id: 4,
    user_name: 'Simonne Jobson',
    email: 'sjobson3@elpais.com',
    gender: 'Female',
    address: '830 Di Loreto Circle',
    date_of_birth: '12/03/2014',
  },
  {
    id: 5,
    user_name: 'Vickie Sprowson',
    email: 'vsprowson4@dot.gov',
    gender: 'Female',
    address: '94 Walton Plaza',
    date_of_birth: '10/07/2013',
  },
  {
    id: 6,
    user_name: "Rafaello O'Corren",
    email: 'rocorren5@indiatimes.com',
    gender: 'Male',
    address: '2 Northfield Court',
    date_of_birth: '9/11/2014',
  },
  {
    id: 7,
    user_name: 'Quentin Goggen',
    email: 'qgoggen6@epa.gov',
    gender: 'Female',
    address: '6808 Nevada Plaza',
    date_of_birth: '7/08/2018',
  },
  {
    id: 8,
    user_name: 'Quint Garrad',
    email: 'qgarrad7@springer.com',
    gender: 'Male',
    address: '2 Anzinger Way',
    date_of_birth: '7/19/2012',
  },
  {
    id: 9,
    user_name: 'Clem Anton',
    email: 'canton8@businesswire.com',
    gender: 'Female',
    address: '3371 Grayhawk Hill',
    date_of_birth: '10/07/2015',
  },
  {
    id: 10,
    user_name: 'Basilius Iley',
    email: 'biley9@hc360.com',
    gender: 'Male',
    address: '411 Mosinee Pass',
    date_of_birth: '2/19/2022',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'arkenea';
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  displayedColumns: string[] = [
    'select',
    'user_name',
    'email',
    'gender',
    'address',
    'date_of_birth',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }

  // !TODO : Action Functionality
  openEditDialog(item: any) {
    console.log('>> Edit Item', item);
    this.dialog.open(EditDialogComponent, {
      data: item,
    });
  }

  openDeleteDialog(item: any, itemId: any) {
    console.log('>> Delete Item with id', itemId);
    this.dialog.open(DeleteDialogComponent, {
      data: [item, itemId],
    });
  }
}
