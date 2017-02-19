package cn.com.service.impl;

import java.util.List;

import cn.com.dao.CommentDao;
import cn.com.dao.impl.CommentDaoImpl;
import cn.com.service.CommentService;
import cn.com.vo.Comment;

public class CommentServiceImpl implements CommentService{
    CommentDao commentDao = new CommentDaoImpl();
	public boolean IsAddComment(Comment c) {
		return commentDao.addComment(c);
	}
	public List<Comment> getCommentList(String goods_id) {
		return commentDao.commentList(goods_id);
	}
  
}
