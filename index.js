import express from "express";
import axios from "axios";

// // Import http library
// const http = require("http")
// // use env variable to define tcp/ip port with a default
// const PORT = process.env.PORT || 8080
// //create our server object
// const server = http.createServer()
// // We define a function that runs in response a request event
// server.on("request", (request, response) => {
//   // handle request based on method then URL
//   response.statusCode = 200
//   response.write("Hello World")
//   response.end()
// })
// // get the server to start listening
// server.listen(PORT, err => {
//   // error checking
//   err ? console.error(err) : console.log(`listening on port ${PORT}`)
// })

const app = express();
const port = process.env.PORT || 8080;
  
  app.use(express.static("public"));

app.get("/", async (req, res) => {
        res.render("index.ejs");
});

// renders the ejs page with the name and image of a random cocktail when the button is clicked
  app.post("/surprise-me", async (req, res) => {
    try {
        const result = await axios.get("http://www.thecocktaildb.com/api/json/v1/1/random.php");
        res.render("index.ejs", { content: result.data.drinks[0].strDrink, image: result.data.drinks[0].strDrinkThumb + "/preview", id: result.data.drinks[0].idDrink});
      } catch (error) {
        console.log(error);
        res.status(500);
      }
    });

// renders the ejs page with the name and image of a gin cocktail when the button is clicked

    app.post("/gin", async (req, res) => {
        try {
            const result = await axios.get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin");
            const randomGin = result.data.drinks[[(Math.floor(Math.random()*result.data.drinks.length)+1)]];
            res.render("index.ejs", { content: randomGin.strDrink, image: randomGin.strDrinkThumb + "/preview", id: randomGin.idDrink});
          } catch (error) {
            console.log(error);
            res.status(500);
          }
        });

        // renders the ejs page with the name and image of a rum cocktail when the button is clicked

    app.post("/rum", async (req, res) => {
        try {
            const result = await axios.get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum");
            const randomRum = result.data.drinks[[(Math.floor(Math.random()*result.data.drinks.length)+1)]];
            res.render("index.ejs", { content: randomRum.strDrink, image: randomRum.strDrinkThumb + "/preview", id: randomRum.idDrink});
          } catch (error) {
            console.log(error);
            res.status(500);
          }
        });

        // renders the ejs page with the name and image of a tequila cocktail when the button is clicked

    app.post("/tequila", async (req, res) => {
        try {
            const result = await axios.get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila");
            const randomTequila = result.data.drinks[[(Math.floor(Math.random()*result.data.drinks.length)+1)]];
            res.render("index.ejs", { content: randomTequila.strDrink, image: randomTequila.strDrinkThumb + "/preview", id: randomTequila.idDrink});
          } catch (error) {
            console.log(error);
            res.status(500);
          }
        });

        // renders the ejs page with the name and image of a vodka cocktail when the button is clicked

    app.post("/vodka", async (req, res) => {
        try {
            const result = await axios.get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka");
            const randomVodka = result.data.drinks[[(Math.floor(Math.random()*result.data.drinks.length)+1)]];
            res.render("index.ejs", { content: randomVodka.strDrink, image: randomVodka.strDrinkThumb + "/preview", id: randomVodka.idDrink});
          } catch (error) {
            console.log(error);
            res.status(500);
          }
        });

    // renders page with the cocktail recipe when the name or image of the cocktail is pressed

    app.get("/recipe/:id", async (req, res) => {
      try {
        const id = (req.params.id);
        const result = await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        res.render("recipe.ejs", { name: result.data.drinks[0].strDrink, instructions: result.data.drinks[0].strInstructions, ingredients: [result.data.drinks[0].strIngredient1, result.data.drinks[0].strIngredient2, result.data.drinks[0].strIngredient3, result.data.drinks[0].strIngredient4, result.data.drinks[0].strIngredient5, result.data.drinks[0].strIngredient6, result.data.drinks[0].strIngredient7, result.data.drinks[0].strIngredient8, result.data.drinks[0].strIngredient9, result.data.drinks[0].strIngredient10, result.data.drinks[0].strIngredient11, result.data.drinks[0].strIngredient12, result.data.drinks[0].strIngredient13, result.data.drinks[0].strIngredient14, result.data.drinks[0].strIngredient15], measures: [result.data.drinks[0].strMeasure1, result.data.drinks[0].strMeasure2, result.data.drinks[0].strMeasure3, result.data.drinks[0].strMeasure4, result.data.drinks[0].strMeasure5, result.data.drinks[0].strMeasure6, result.data.drinks[0].strMeasure7, result.data.drinks[0].strMeasure8, result.data.drinks[0].strMeasure9, result.data.drinks[0].strMeasure10, result.data.drinks[0].strMeasure11, result.data.drinks[0].strMeasure12, result.data.drinks[0].strMeasure13, result.data.drinks[0].strMeasure14, result.data.drinks[0].strMeasure15]});
 } catch (error) {
          console.log(error);
          res.status(500);
        };
      });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });