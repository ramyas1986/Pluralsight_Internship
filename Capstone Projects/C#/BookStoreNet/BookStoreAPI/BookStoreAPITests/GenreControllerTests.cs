using BookStore.Controllers;
using BookStore.Data;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

public class GenresControllerTests
{
    private GenresController CreateController()
    {
        var options = new DbContextOptionsBuilder<BookstoreContext>()
            .UseInMemoryDatabase(databaseName: $"BookstoreTestDb_{Guid.NewGuid()}") // Unique DB for each test
            .Options;

        var context = new BookstoreContext(options);

        // Seed the database with initial data
        context.Genres.AddRange(
            new Genre { GenreId = 1, GenreName = "Fantasy" },
            new Genre { GenreId = 2, GenreName = "Science Fiction" }
        );
        context.SaveChanges();

        return new GenresController(context);
    }

    [Fact]
    public async Task GetGenres_ReturnsOkResult_WithListOfGenres()
    {
        // Arrange
        var controller = CreateController();

        // Act
        var result = await controller.GetGenres();

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var genres = Assert.IsAssignableFrom<IEnumerable<Genre>>(okResult.Value);
        Assert.Equal(2, genres.Count());
    }

    [Fact]
    public async Task GetGenreById_ReturnsNotFound_WhenGenreDoesNotExist()
    {
        // Arrange
        var controller = CreateController();

        // Act
        var result = await controller.GetGenreById(999); // Non-existent ID

        // Assert
        Assert.IsType<NotFoundObjectResult>(result);
    }

    [Fact]
    public async Task GetGenreById_ReturnsOkResult_WhenGenreExists()
    {
        // Arrange
        var controller = CreateController();

        // Act
        var result = await controller.GetGenreById(1); // Existing ID

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var genre = Assert.IsType<Genre>(okResult.Value);
        Assert.Equal(1, genre.GenreId);
    }

    [Fact]
    public async Task AddGenre_ReturnsBadRequest_WhenGenreNameIsEmpty()
    {
        // Arrange
        var controller = CreateController();
        var newGenre = new Genre { GenreName = "" };

        // Act
        var result = await controller.AddGenre(newGenre);

        // Assert
        Assert.IsType<BadRequestObjectResult>(result);
    }

    [Fact]
    public async Task AddGenre_ReturnsBadRequest_WhenGenreNameContainsExclamationMark()
    {
        // Arrange
        var controller = CreateController();
        var newGenre = new Genre { GenreName = "Sci-Fi!" };

        // Act & Assert
        await Assert.ThrowsAsync<System.Exception>(() => controller.AddGenre(newGenre));
    }

    [Fact]
    public async Task AddGenre_ReturnsCreatedAtAction_WhenGenreIsValid()
    {
        // Arrange
        var controller = CreateController();
        var newGenre = new Genre { GenreId = 3, GenreName = "Mystery" };

        // Act
        var result = await controller.AddGenre(newGenre);

        // Assert
        var createdResult = Assert.IsType<CreatedAtActionResult>(result);
        var genre = Assert.IsType<Genre>(createdResult.Value.GetType().GetProperty("genre").GetValue(createdResult.Value, null));
        Assert.Equal("Mystery", genre.GenreName);
    }
}
