import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { MainEntitiesService } from '../../../../../global/utils/services/main-entities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Subject, takeUntil } from 'rxjs';
import { GenreInterface } from '../../../../../global/types/entities/genres/genre.interface';
import { GenresSelectors } from '../../../../../state/features/genres/selectors/genres.selectors';

@Component({
  selector: 'app-genres-filter',
  templateUrl: './genres-filter.component.html',
})
export class GenresFilterComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  public genresList: GenreInterface[] = [];
  public selectedGenreId: number | null = null;

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly mainEntitiesService: MainEntitiesService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initListeners();
  }

  private initListeners(): void {
    this.store$
      .pipe(
        select(GenresSelectors.genresListSelector),
        filter(Boolean),
        map((genres: GenreInterface[]) =>
          this.filterGenresListAccordingToMainGenres(genres)
        ),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((genres) => (this.genresList = genres));

    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        const genreId = +params['genres'] || null;
        if (genreId) {
          const isMainGenre = this.checkIsGenreMain(genreId);
          this.selectedGenreId = isMainGenre ? genreId : null;
        } else {
          this.selectedGenreId = null;
        }
      });
  }

  private checkIsGenreMain(genreId: number): boolean {
    return !!this.genresList.find((genre) => genre.id === genreId);
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
