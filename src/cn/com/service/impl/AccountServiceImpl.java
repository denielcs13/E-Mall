package cn.com.service.impl;

import java.util.List;

import cn.com.dao.AccountDao;
import cn.com.dao.impl.AccountDaoImpl;
import cn.com.service.AccountService;
import cn.com.vo.Account;

public class AccountServiceImpl implements AccountService{

	AccountDao dao = new AccountDaoImpl();
	public List<Account> getAccountByUser_name(String user_name) {
		return dao.accountByUser_name(user_name);
	}

	public boolean isAccountValidate(String account_id,String account_password) {
		return dao.accountById(account_id,account_password);
	}

	public boolean checkout(String account_id, double total_sum) {
		return dao.checkout(account_id, total_sum);
	}

	public boolean checkin(String account_id, double total_sum) {
		return dao.checkin(account_id, total_sum);
	}
	
	public String getAccountByGoods_Id(String goods_id){
		return dao.accountByGoods_Id(goods_id);
	}

}
