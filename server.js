import { createServer, Model } from "miragejs";
//  Mirage JS works
createServer({
    models: {
        quizzes: Model,
    },

    seeds(server) {
        server.create("quiz", { id: "1", text: "Solar System Quiz" });
        server.create("quiz", { id: "2", text: "About Me" });
        server.create("quiz", { id: "3", text: "Bio Quiz" });
    },

    routes() {
        this.get("/api/quiz", (schema) => {
            return schema.quizzes.all();
        });
        this.get("/api/quiz/:id", (schema, request) => {
            let id = request.params.id;

            return schema.quizzes.find(id);
        });
    },
});
