const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const models = require("./models");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// view all manga
app.get("/manga", (req, res) => {
  models.Manga.findAll().then(mangas => res.json(mangas));
});

// getting manga by genre
app.get("/manga/:genre", (req, res) => {
  models.Manga.findAll({
    where: {
      genre: genre
    }
  }).then(mangas => res.json(mangas));
});

// adding a manga
app.post("/add-manga", (req, res) => {
  let title = req.body.title;
  let author = req.body.author;
  let chapters = req.body.chapters;
  let genre = req.body.genre;
  let publisher = req.body.publisher;
  let years = req.body.years;
  let imgurl = req.body.imgurl;

  let manga = models.Manga.build({
    title: title,
    author: author,
    chapters: chapters,
    genre: genre,
    publisher: publisher,
    years: years,
    imgurl: imgurl
  });

  manga
    .save()
    .then(savedManga => res.json(savedManga))
    .catch(error => console.log(error));
  console.log(manga);
});

// updating manga
app.post("/update-manga", (req, res) => {
  let title = req.body.title;
  let author = req.body.author;
  let chapters = req.body.chapters;
  let genre = req.body.genre;
  let publisher = req.body.publisher;
  let years = req.body.years;
  let imgurl = req.body.imgurl;
  let mangaid = req.body.mangaid;

  models.Manga.update(
    {
      title: title,
      author: author,
      chapters: chapters,
      genre: genre,
      publisher: publisher,
      years: years,
      imgurl: imgurl
    },
    {
      where: {
        id: mangaid
      }
    }
  )
    .then(updatedManga => res.json(updatedManga))
    .catch(error => console.log(error));
});

// deleting manga
app.post("/delete-manga", (req, res) => {
  let mangaid = req.body.mangaid;

  console.log(mangaid)

  models.Manga.destroy(
    {
      where: {
        id: mangaid
      }
    }
  )
    .then(deletedManga => res.json(console.log(deletedManga)))
    .catch(error => console.log(error));
});

// listening at the port
app.listen(PORT, () => {
  console.log("Server is running...");
});
