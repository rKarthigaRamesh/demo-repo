const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine','ejs')

app.use(express.urlencoded({extended: false}))

app.get('/',(req,res) => {
    const articles = [{
        title: 'Vidhya',
        createdAt: new Date(),
        description: 'A Blog By Vidhya'
    },
    {
        title: 'Krithiga',
        createdAt: new Date(),
        description: 'A Blog By Krithiga'
    },
    {
        title: 'Rashmi',
        createdAt: new Date(),
        description: 'A Blog By Rashmi'
    },
    {
        title: 'Karthiga',
        createdAt: new Date(),
        description: 'A Blog By Karthiga'
    },
    {
        title: 'Haripriya',
        createdAt: new Date(),
        description: 'A Blog By Haripriya'
    }
]
    res.render('articles/index',{articles: articles})
})

app.use('/articles', articleRouter)

app.listen(5000)