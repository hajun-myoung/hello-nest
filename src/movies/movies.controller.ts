import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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

  @Post()
  createMovie(@Body() movieData) {
    console.log(movieData);
    // return 'this will create movie';
    return movieData;
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return `this will delete a movie. ID: ${id}`;
  }

  @Patch('/:id')
  patchMovie(@Param('id') id: string, @Body() updateData) {
    // return `this will update a movie. ID: ${id}`;
    return {
      updatedMovie: id,
      ...updateData,
    };
  }
}
