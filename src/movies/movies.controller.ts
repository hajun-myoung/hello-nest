import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entities';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOneById(@Param('id') id: number): Movie {
    console.log(typeof id);
    return this.moviesService.getOne(id);
  }

  @Post()
  createMovie(@Body() movieData: CreateMovieDto) {
    console.log(movieData);
    // return 'this will create movie';
    return this.moviesService.createOne(movieData);
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch('/:id')
  patchMovie(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.updateOne(id, updateData);
  }
}
