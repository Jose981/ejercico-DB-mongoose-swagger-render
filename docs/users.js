module.exports = {
  paths: {
    "/create": {
      post: {
        tags: {
          Users: "Create a user",
        },
        description: "Create User",
        operationId: "createUser",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          201: {
            description: "User created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },

    "/id/{_id}": {
      put: {
        tags: {
          Tasks: "Update a user",
        },
        description: "Update User",
        operationId: "updateUser",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Id of User to be updated",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        responses: {
          200: { description: "User updated successfully" },
          500: { description: "Server error" },
        },
      },
    },
  },
};
