import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  faSearch = faSearch;

  onKeyPress(event: KeyboardEvent) {
    const query = (event.target as HTMLInputElement).value;
    if (event.key === 'Enter') {
      this.search.emit(query); 
    } else {
      this.search.emit(query); 
    }
  }

  onBackspace() {
    this.search.emit(''); 
  }
  

}
