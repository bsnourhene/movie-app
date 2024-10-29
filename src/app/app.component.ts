import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadBarComponent, SearchBarComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'movie-app';
  movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      language: 'English',
      releaseDate: '2010-07-16',
      voteAverage: 8.8,
      voteCount: 2000000,
      genre: 'Sci-Fi',
      overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      imageUrl: 'assets/photos/Inception.png'
    },
    {
      id: 2,
      title: 'Interstellar',
      language: 'English',
      releaseDate: '2014-11-07',
      voteAverage: 8.6,
      voteCount: 1500000,
      genre: 'Sci-Fi',
      overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      imageUrl: 'assets/photos/Interstellar.png'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      language: 'English',
      releaseDate: '2008-07-18',
      voteAverage: 9.0,
      voteCount: 2300000,
      genre: 'Action',
      overview: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      imageUrl: 'assets/photos/TheDarkKnight.png'
    },
    {
      id: 4,
      title: 'The Shawshank Redemption',
      language: 'English',
      releaseDate: '1994-09-23',
      voteAverage: 9.3,
      voteCount: 2000000,
      genre: 'Drama',
      overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      imageUrl: 'assets/photos/TheShawshankRedemption.png'
    },
    {
      id: 5,
      title: 'Pulp Fiction',
      language: 'English',
      releaseDate: '1994-10-14',
      voteAverage: 8.9,
      voteCount: 1800000,
      genre: 'Crime',
      overview: 'The lives of two mob hitmen, a boxer, a gangsters wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      imageUrl: 'assets/photos/PulpFiction.png'
    },
    {
      id: 6,
      title: 'Forrest Gump',
      language: 'English',
      releaseDate: '1994-07-06',
      voteAverage: 8.8,
      voteCount: 1900000,
      genre: 'Drama',
      overview: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold through the perspective of an Alabama man with an IQ of 75.',
      imageUrl: 'assets/photos/ForrestGump.png'
    },
    {
      id: 7,
    title: 'Fight Club',
    language: 'English',
    releaseDate: '1999-10-15',
    voteAverage: 8.8,
    voteCount: 1700000,
    genre: 'Drama',
    overview: 'An insomniac office worker forms an underground fight club with a soap manufacturer, as they fight their way to self-improvement.',
      imageUrl: 'assets/photos/FightClub.png'
    },
    {
      id: 8,
    title: 'The Godfather',
    language: 'English',
    releaseDate: '1972-03-24',
    voteAverage: 9.2,
    voteCount: 1800000,
    genre: 'Crime',
    overview: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
      imageUrl: 'assets/photos/TheGodfather.png'
    },{
      id: 9,
      title: 'The Matrix',
      language: 'English',
      releaseDate: '1999-03-31',
      voteAverage: 8.7,
      voteCount: 1500000,
      genre: 'Sci-Fi',
      overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      imageUrl: 'assets/photos/TheMatrix.png'
    },
    {
      id: 10,
    title: 'The Lord of the Rings: The Return of the King',
    language: 'English',
    releaseDate: '2003-12-17',
    voteAverage: 8.9,
    voteCount: 1900000,
    genre: 'Fantasy',
    overview: 'Gandalf and Aragorn lead the World of Men against Sauron’s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
      imageUrl: 'assets/photos/TheLord.png'
    }
    
  ];
  searchMovieByTitle(title: string) {
    console.log('Recherche pour le film:', title);
  }
  
}
