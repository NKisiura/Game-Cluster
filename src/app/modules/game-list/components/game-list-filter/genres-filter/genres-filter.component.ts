import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { MainEntitiesService } from '../../../../../global/utils/services/main-entities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { GenreInterface } from '../../../../../global/types/entities/genres/genre.interface';
import { GenresSelectors } from '../../../../../state/features/genres/selectors/genres.selectors';

@Component({
  selector: 'app-genres-filter',
  templateUrl: './genres-filter.component.html',
})
export class GenresFilterComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  public genresList$ = new Observable<GenreInterface[] | null>();
  public selectedGenreId: number | null = null;

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly mainEntitiesService: MainEntitiesService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initListeners();
    this.initValues();
  }

  private initListeners(): void {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        this.selectedGenreId = +params['genres'] || null;
      });
  }

  private initValues(): void {
    this.genresList$ = this.store$.pipe(
      select(GenresSelectors.genresListSelector),
      map((genres: GenreInterface[] | null) => {
        return genres
          ? this.filterGenresListAccordingToMainGenres(genres)
          : genres;
      })
    );
  }

  private filterGenresListAccordingToMainGenres(
    genres: GenreInterface[]
  ): GenreInterface[] {
    return genres.filter((genre) =>
      this.mainEntitiesService.getMainGenresList().includes(genre.slug)
    );
  }

  public async genresFilterChange(
    genre: GenreInterface | undefined
  ): Promise<void> {
    await this.navigateWithGenresParams(genre ? genre.id : null);
  }

  private async navigateWithGenresParams(
    genreId: number | null
  ): Promise<void> {
    await this.router.navigate([], {
      queryParams: { genres: genreId },
      queryParamsHandling: 'merge',
    });
  }
}
