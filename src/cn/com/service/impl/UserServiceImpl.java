package cn.com.service.impl;

import cn.com.dao.UserDao;
import cn.com.dao.impl.UserDaoImpl;

import cn.com.service.UserService;
import cn.com.vo.User;

public class UserServiceImpl implements UserService{

	UserDao dao = new UserDaoImpl();
	public boolean getIsValidate(User user) {
		return dao.isValidate(user);
	}
	public boolean getIsUpdatePassword(String user_name, String password) {
		return dao.updatePassword(user_name, password);
	}
	public User getUserByUser_name(String user_name) {
		return dao.getUserByUser_name(user_name);
	}
	public boolean getRegister(User user) {
		return dao.register(user);
	}
	public boolean isToBeSellor(User user) {
		return dao.toBeSellor(user);
	}
	
}
