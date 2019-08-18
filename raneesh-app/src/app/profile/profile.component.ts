import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  error=null;
  searchText: string = '';
  data = [];
  repos: any;
  showRepoTab: boolean = false;
  showRepoDetails: boolean = false;

  constructor(private ProfileService: ProfileService) {

  }

  ngOnInit() {
    // subscribe api get call
    this.ProfileService.getUser().subscribe(res => this.data = res,
      error=>console.log(error)
    )
  }
  userDetails(obj: any) {
    this.showRepoTab = true;
    this.ProfileService.userDetails(obj).subscribe(res => {
      this.repos = res;
      if (this.repos.length !== 0) {
        this.showRepoDetails = false;
      } else {
        this.showRepoDetails = true;
      }
    })
  }

}
