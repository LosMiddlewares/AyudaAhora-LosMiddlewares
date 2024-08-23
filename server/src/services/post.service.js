import { Post } from '../models/post.js';

export const postService = {
    
    async getPosts() {
        try {
            return await Post.findAll();
        } catch (error) {
            throw new Error("error al obtener posts");
        }
    },

    async getPostById(id) {
        try {
            const post = await Post.findByPk(id);
            if (!post) {
                return "post no encontrado";
            }
            return post;
        } catch (error) {
            throw new Error("error al obtener el post");
        }
    },

    async createPost(postData, path, userId) {
        try {
            const newPost = await Post.create({
                ...postData,
                image: path,
                user_id: userId
            });
            return newPost;
        } catch (error) {
            throw new Error(`Error al crear el post: ${error.message}`);
        }
    },

    async updatePost(id, updatedPostData) {
        try {
            const post = await this.getPostById(id);
            if (!post) {
                return "post no encontrado";
            }
            return await post.update(updatedPostData);
        } catch (error) {
            throw new Error(`error al actualizar el post: ${error.message}`);
        }
    },

    async deletePost(id) {
        try {
            const post = await this.getPostById(id);
            if (!post) {
                return "post no encontrado";
            }
            await post.destroy();
            return { message: 'post eliminado' };
        } catch (error) {
            throw new Error(`error al eliminar el post: ${error.message}`);
        }
    }
};
