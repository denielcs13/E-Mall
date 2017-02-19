package cn.com.dao.impl;

import java.util.List;

import cn.com.dao.CommentDao;
import cn.com.jdbc.DefaultJDBCImpl;
import cn.com.vo.Address;
import cn.com.vo.Comment;

public class CommentDaoImpl implements CommentDao{
	DefaultJDBCImpl d = new DefaultJDBCImpl();
	public boolean addComment(Comment c) {
		Boolean addCommentDone = false;
		try{
				String sql = "insert into EM_COMMENT values(?,?,?,?,?,?,?)";
				Object[] args = {c.getComment_id(),c.getUser_name(),c.getGoods_id(),c.getComment(),c.getOrder_id(),c.getFlag(),c.getComment_time()};
				addCommentDone = (Boolean)d.query(sql, args, null);
		}catch(Exception e){
			throw new RuntimeException(e);
		}
		return addCommentDone;
	}
	@SuppressWarnings("unchecked")
	public List<Comment> commentList(String goods_id) {
		String sql = "select * from EM_COMMENT where GOODS_ID=?";
		String[] args = {goods_id};
		List<Comment> commentList = (List<Comment>)d.query(sql, args, Comment.class);	
		System.out.println("commentList.size() = "+commentList.size());
		System.out.println("goods_id = "+ goods_id);
		//System.out.println("commentList.get(0).getComment() daoimpl = "+commentList.get(0).getComment());
		return commentList;
	}

}
