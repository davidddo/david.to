import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@website/core/services';
import { Education, Project, WorkExperience } from '@website/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  projects$: Observable<Project[]>;
  experiences$: Observable<WorkExperience[]>;
  educations: Education[];

  constructor(private router: Router, private apiService: DataService) {
    this.projects$ = this.apiService.getProjects();
    this.experiences$ = this.apiService.getExperiences();
  }

  openProject(project: Project) {
    this.router.navigate([project.url]);
  }
}
