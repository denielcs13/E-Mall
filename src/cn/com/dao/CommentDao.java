package cn.com.dao;

import java.util.List;

import cn.com.vo.Comment;

public interface CommentDao {
    public boolean addComment(Comment c);
    public List<Comment> commentList(String goods_id);
}
