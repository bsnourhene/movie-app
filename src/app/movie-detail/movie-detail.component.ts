import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component'; 

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined; 

  constructor(private route: ActivatedRoute, private appComponent: AppComponent) {} 

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getMovieById(+id);
    }
  }

  getMovieById(id: number): void {
    this.movie = this.appComponent.movies.find(movie => movie.id === id); 
  }

}
