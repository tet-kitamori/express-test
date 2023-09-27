const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    if (req.session.comments == undefined) {
        req.session.comments = []
    }
    const data = {
        title:'Hello!',
        message:'フォームを入力してください。',
        comments:req.session.comments
    }
    res.render('hello', data);
});

router.post('/', function(req, res, next) {
    req.session.comments.unshift(req.body.comment)
    const data = {
        title:'Hello!',
        message:'※コメントの保存※',
        comments:req.session.comments
    }
    res.render('hello', data);
});

module.exports = router;
