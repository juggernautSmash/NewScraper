# NewScraper
In this assignment, you'll create a web app that lets users view and leave comments on the latest news. But you're not going to actually write any articles; instead, you'll flex your Mongoose and Cheerio muscles to scrape news from another site.

To Use the Repo:
generate a ".env" in your root directory. In the .env file, declare a variable called "LOCALDB_URL". LOCALDB_URL should be equal to a string URI of the database you are using. Since we are using mongodb, the string should look like this: mongodb://localhost/DBNAME. DBNAME should be the name of the database you are using in your local machine