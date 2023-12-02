const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const {Post, PostImage} = require('../models/models')

class postController {
    async create(req, res, next) {
        try {
            const {name, body} = req.body
            const {imgs} = req.files

            const post = await Post.create({ name, body })
            
            if (imgs) {
                imgs.forEach(img => {
                    let fileName = uuid.v4() +".jpg"
                    img.mv(path.resolve(__dirname, "..", "static", fileName))
                    PostImage.create({
                        img: fileName,
                        postId: post.id
                    })
                });
            }

            return res.json(post)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const {limit, page} = req.query
        page = page || 1
        limit = limit || 9

        let offset = page * limit - limit
        const posts = await Post.findAll({limit, offset})

        return res.json(posts)
    }

    async getOne(req, res) {
        const {id} = req.params

        const post = await Post.findOne(
            {
                where: {id},
                include: [{ model: PostImage, as:'img' }]
            }
        )

        return res.json(post)
    }
}

module.exports = new postController();