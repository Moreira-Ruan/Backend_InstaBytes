import { getTodosPosts, criarPost } from "../models/postsModel.js";
import fs from "fs";

// Função para listar todos os posts
export async function listarPosts(req, res) {
    // Obtém todos os posts do banco de dados
    const posts = await getTodosPosts();
    // Envia os posts como resposta JSON com status 200 (OK)
    res.status(200).json(posts);
};

// Função para criar um novo post
export async function postarNovoPost(req, res) {
    // Recupera os dados do novo post enviados no corpo da requisição
    const novoPost = req.body;
    try {
        // Cria o novo post no banco de dados
        const postCriado = await criarPost(novoPost);
        // Envia o post criado como resposta JSON com status 200 (OK)
        res.status(200).json(postCriado);
    } catch (erro) {
        // Exibe o erro no console em caso de falha
        console.error(erro.message);
        // Retorna uma resposta de erro com status 500 (Erro Interno do Servidor)
        res.status(500).json({ erro: "Falha na requisicao" });
    }
};

// Função para fazer upload de uma imagem e associá-la a um post
export async function uploadImagem(req, res) {
    // Cria um novo objeto de post com os dados básicos
    const novoPost = {
        descricao: "", // Inicializa a descrição como vazia
        img_url: req.file.originalname, // Define o nome original do arquivo como URL da imagem
        alt: "" // Inicializa o texto alternativo como vazio
    };

    try {
        // Cria o novo post no banco de dados
        const postCriado = await criarPost(novoPost);
        // Define o caminho atualizado para a imagem com base no ID do post
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        // Renomeia o arquivo de imagem para incluir o ID do post
        fs.renameSync(req.file.path, imagemAtualizada);
        // Envia o post criado como resposta JSON com status 200 (OK)
        res.status(200).json(postCriado);
    } catch (erro) {
        // Exibe o erro no console em caso de falha
        console.error(erro.message);
        // Retorna uma resposta de erro com status 500 (Erro Interno do Servidor)
        res.status(500).json({ erro: "Falha na requisicao" });
    }
};
