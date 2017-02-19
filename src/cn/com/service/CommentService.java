package cn.com.service;

import java.util.List;

import cn.com.vo.Comment;

public interface CommentService {
	public boolean IsAddComment(Comment c);
	public List<Comment> getCommentList(String goods_id);
}
