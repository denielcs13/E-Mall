package cn.com.service;

import java.util.List;

import cn.com.vo.Account;

public interface AccountService {
	public List<Account> getAccountByUser_name(String user_name);
    public boolean isAccountValidate(String account_id,String account_password);
    public boolean checkout(String account_id,double total_sum);
    public boolean checkin(String account_id,double total_sum);
    public String getAccountByGoods_Id(String goods_id);
}
