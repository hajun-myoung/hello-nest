import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entities';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException('Movie Not Found. Given ID: ' + id);
    }
    return movie;
  }

  deleteOne(id: string): boolean {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }

  createOne(movieData: CreateMovieDto): boolean {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
    return true;
  }

  updateOne(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
