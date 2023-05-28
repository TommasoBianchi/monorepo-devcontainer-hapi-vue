"use strict";

module.exports = {
	method: "GET",
	path: "/users",
	options: {
		handler: async (request, h) => {
			const { User } = request.models();
			return await User.query();
		},
	},
};
