import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-profile-dialog",
  templateUrl: "./profile-dialog.component.html",
  styleUrls: ["./profile-dialog.component.scss"],
})
export class ProfileDialogComponent {
  public name: string = "";

  constructor(
    public dialogRef: MatDialogRef<ProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log("dataSource", data);
    const filteredData: { [key: string]: any } = {};
    for (let key in data.lostData) {
      if (key !== "dateOfBirth" && key !== "applicantPhoto") {
        filteredData[key] = data.lostData[key];
        this.name+=data.lostData[key]+" ";
          // Store the key-value pairs except dob and photo
      }
    }
    this.name.trim()
   
    
    console.log("name", this.name);
  }

  onPrint(): void {
    // Implement print functionality
  }

  onResend(): void {
    // Implement resend functionality
  }
}
