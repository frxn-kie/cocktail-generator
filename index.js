import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
  
  app.use(express.static("public"));

app.get("/", async (req, res) => {
        res.render("index.ejs");
});

// renders the ejs page with the name and image of a random cocktail when the button is clicked
  app.post("/surprise-me", async (req, res) => {
    try {
        const result = await axios.get("http://www.thecocktaildb.com/api/json/v1/1/random.php");
        res.render("index.ejs", { content: result.data.drinks[0].strDrink, image: result.data.drinks[0].strDrinkThumb + "/preview"});
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
            res.render("index.ejs", { content: randomGin.strDrink, image: randomGin.strDrinkThumb + "/preview"});
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
            res.render("index.ejs", { content: randomRum.strDrink, image: randomRum.strDrinkThumb + "/preview"});
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
            res.render("index.ejs", { content: randomTequila.strDrink, image: randomTequila.strDrinkThumb + "/preview"});
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
            res.render("index.ejs", { content: randomVodka.strDrink, image: randomVodka.strDrinkThumb + "/preview"});
          } catch (error) {
            console.log(error);
            res.status(500);
          }
        });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });