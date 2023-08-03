/*
MIDDLEWARE
schema => model => pre => db => post
schema => model => update => db

middleware => pre, post (works for the save)
schema => model -> instance -> pre -> save -> db -> next

Note : pre is used before saving into db

*/

hotelSchema.pre('save', function ( next ) {
	this.updatedAt = Date.now();

	if (!this.createdAt) {
		this.createdAt = this.updatedAt;
	}
	next();
})