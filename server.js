import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://source.unsplash.com/random/300x150/?nature"
    },
    {
        id: 3,
        descricao: "Cachorro fofo",
        imagem: "https://source.unsplash.com/random/300x150/?dog"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostsID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostsID(req.params.id);
    res.status(200).json(posts[index]);
})
