package cn.com.dao;

import java.util.List;

import cn.com.vo.Account;

public interface AccountDao {
      public List<Account> accountByUser_name(String user_name);
      public boolean accountById(String account_id,String account_password);
      public boolean checkout(String account_id,double total_sum);
      public boolean checkin(String account_id,double total_sum);
      public String accountByGoods_Id(String goods_id);
}
