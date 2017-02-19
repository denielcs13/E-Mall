package cn.com.service;

import cn.com.vo.User;

public interface UserService {
	public boolean getRegister(User user);
	public boolean getIsValidate(User user);
	public boolean getIsUpdatePassword(String user_name,String password);
	public User getUserByUser_name(String user_name);
	public boolean isToBeSellor(User user);
}
