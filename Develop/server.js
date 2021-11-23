const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


// MAKE MODELS
  // Product
    // Foreign key category_id references Category
  // ProductTag
    // Foreign key product_id references Product
    // Foregin key tag_id references Tag
  // Category
  // Tag

// Relationships
  // Product to Category is 1:many
    // belongsTo
    // hasMany
  // Prodcut to Tag is many:many
    // belongsToMany
    // through ProductTag

// If the above is done properly, seeds work

// ROUTES