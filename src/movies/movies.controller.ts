import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies(): string {
    return 'This will return all of movies';
  }

  @Get('/:id')
  getOneById(@Param('id') id: string) {
    return `This will return one move. ID: ${id}`;
  }
}
