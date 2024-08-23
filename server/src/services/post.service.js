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

    async createPost(postData, file) {
        try {
            const { title, description, goal_amount } = postData;

            if (!file) {
                throw new Error('No se subió ninguna imagen.');
            }
            
            const uploadPath = path.join('public', 'uploads', file.name);

            await new Promise((resolve, reject) => {
                file.mv(uploadPath, (err) => {
                    if (err) return reject(err);
                    resolve();
                });
            });

            const newPost = await Post.create({
                title,
                description,
                goal_amount,
                image: file.name,
                current_amount: 0
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
