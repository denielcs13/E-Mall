package cn.com.dao;

import cn.com.vo.User;

public interface UserDao {
	  public boolean register(User user);
      public boolean isValidate(User user);
      public boolean updatePassword(String user_name,String password);
      public User getUserByUser_name(String user_name);
      public boolean toBeSellor(User user);
}
