module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	

	app.get('/api/posts', app.api.getBlogPosts);
	app.get('/api/posts/:id', app.api.getBlogPost);

	app.post('/api/posts', app.api.createBlogPost);
	app.put('/api/posts/:id', app.api.updateBlogPost);

	app.delete('/api/posts/:id', app.api.deleteBlogPost);

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};