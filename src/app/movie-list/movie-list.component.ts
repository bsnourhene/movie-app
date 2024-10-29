import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';



@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule,FormsModule,SearchBarComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  
  @Input() movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  constructor() {
    this.filteredMovies = this.movies; 
  }
  onSearch(query: string): void {
    console.log('Query reçue:', query); 
    this.filteredMovies = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    console.log('Films filtrés:', this.filteredMovies); 
  }
  ngOnInit(): void {
    this.filteredMovies = this.movies;
  }

  filterMovies(title: string): void {
    if (title) {
      this.filteredMovies = this.movies.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    } else {
      this.filteredMovies = this.movies;
    }
  }

}
