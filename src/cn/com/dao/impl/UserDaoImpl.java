package cn.com.dao.impl;
import java.util.List;

import cn.com.jdbc.DefaultJDBCImpl;
import cn.com.dao.UserDao;
import cn.com.vo.Goods;
import cn.com.vo.Order;
import cn.com.vo.User;

public class UserDaoImpl implements UserDao{	
	
	DefaultJDBCImpl d = new DefaultJDBCImpl(); 
	
	public boolean isValidate(User user) {
		String sql = "select * from EM_USER where USER_NAME=? and PASSWORD=?";
		String[] args = {user.getUser_name(),user.getPassword()};
		List<User> userList = (List<User>)d.query(sql, args, User.class);	
		if(userList.size()>0){
			return true;			
		}else{
		     return false;
		}
	}
	
	public boolean updatePassword(String user_name,String password) {
		Boolean q = false;
		String sql = "update EM_USER set PASSWORD = ? where USER_NAME = ?";
		String[] args = {password,user_name};
		q = (Boolean)d.query(sql, args, null);
		return q;
	}

	public User getUserByUser_name(String user_name) {
		String sql = "select * from EM_USER where USER_NAME=?";
		String[] args = {user_name};
		List<User> userList = (List<User>)d.query(sql, args, User.class);	
		return userList.get(0);
	}

	public boolean register(User user) {
		Boolean registDone = false;
		if(!existUser(user)){
			String sql = "insert into EM_USER values(?,?,?,?,?)";
			String[] args = {user.getUser_id(),user.getUser_name(),user.getPassword(),user.getRole_id(),user.getEmail()};
			registDone = (Boolean)d.query(sql, args, null);
		}
		return registDone;
	}
	
	@SuppressWarnings("unchecked")
	public boolean existUser(User user){
		
		String sql = "select * from EM_USER where USER_NAME=?";
		String[] args = {user.getUser_name()};
		List<User> userlist= (List<User>)d.query(sql, args, User.class);
		if(userlist.size()>0){
			return true;
		}else{
			return false;
		}
	}

	public boolean toBeSellor(User user) {
		Boolean q = false;
		String sql = "update EM_USER set ROLE_ID=2 where USER_NAME =?";
		String[] args = {user.getUser_name()};
		q = (Boolean)d.query(sql, args, null);
		return q;
	}
	
}
