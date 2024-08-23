import { postService } from "../services/post.service.js";
import { handleError } from "../utils/errorCatch.js";

export const postController = {
    async getPosts(_req, res) {
        try {
            const posts = await postService.getPosts();
            res.status(200).json(posts);
        } catch (error) {
            handleError(error, res, "Error al obtener posts");
        }
    },

    async getPostById(req, res) {
        try {
            const { id } = req.params;
            const post = await postService.getPostById(id);
            res.status(200).json(post);
        } catch (error) {
            handleError(error, res, `Error al obtener post con id ${id}`);
        }
    },

    async createPost(req, res) {
        try {
            const postData = req.body;
            const path = req.file ? req.file.path : null;
            const newPost = await postService.createPost(postData, path, req.user.id);
            console.log(req.userId);
            res.status(201).json({ message: "Post creado", newPost });
        } catch (error) {
            handleError(error, res, "Error al crear post");
        }
    },
    

    async updatePost(req, res) {
        try {
            const { id } = req.params;
            const updatedPostData = req.body;
            if (req.file) {
                updatedPostData.image = req.file.path; 
            }
            const updatedPost = await postService.updatePost(id, updatedPostData);
            res.status(200).json(updatedPost);
        } catch (error) {
            handleError(error, res, `Error al actualizar post con id ${id}`);
        }
    },

    async deletePost(req, res) {
        try {
            const postDeleted = await postService.deletePost(id);
            res.status(200).json(postDeleted);
        } catch (error) {
            handleError(error, res, `Error al eliminar post con id ${id}`);
        }
    }
};