const JokeController = require("../controller/jokes.controller");

module.exports = app => {
    // Get all
    app.get('/api/jokes', JokeController.findAllJokes);
    // Get one
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    // Create one
    app.post('/api/jokes', JokeController.createNewJoke);
    // Update one
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    // Delete one
    app.delete('/api/jokes/:id', JokeController.deleteExistingJoke);
}