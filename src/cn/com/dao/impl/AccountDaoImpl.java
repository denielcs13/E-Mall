package cn.com.dao.impl;

import java.util.List;

import cn.com.dao.AccountDao;
import cn.com.jdbc.DefaultJDBCImpl;
import cn.com.vo.Account;

public class AccountDaoImpl implements AccountDao{

	DefaultJDBCImpl d = new DefaultJDBCImpl(); 
	public List<Account> accountByUser_name(String user_name) {
		String sql = "select * from EM_ACCOUNT where USER_NAME=?";
		String[] args = {user_name};
		List<Account> accountList = (List<Account>)d.query(sql, args, Account.class);	
		return accountList;
	}
	@SuppressWarnings("unchecked")
	public boolean accountById(String account_id,String account_password) {
		String sql = "select * from EM_ACCOUNT where ACCOUNT_ID=? and ACCOUNT_PASSWORD=?";
		String[] args = {account_id,account_password};
		List<Account> accountList = (List<Account>)d.query(sql, args, Account.class);	
		System.out.println("accountList.size() = "+accountList.size());
		if(accountList.size()>0){ 
		    return true;
		}else{
			return false;
		}
	}
	public boolean checkout(String account_id, double total_sum) {
		Boolean addOrderDone = false;
		String sql = "update EM_ACCOUNT set BALANCE=BALANCE-? where ACCOUNT_ID=?";
		Object[] args = {total_sum,account_id};
		
		addOrderDone = (Boolean)d.query(sql, args, null);
		return addOrderDone;
	}
	@SuppressWarnings("unchecked")
	public String accountByGoods_Id(String goods_id) {
		String sql = "select ACCOUNT_ID from EM_ACCOUNT,EM_SELLOR_GOODS where EM_ACCOUNT.USER_NAME=EM_SELLOR_GOODS.USER_NAME and EM_SELLOR_GOODS.GOODS_ID=?";
		String[] args = {goods_id};
		List<Account> accountList = (List<Account>)d.query(sql, args, Account.class);	
		System.out.println("accountList.get(0).getAccount_id() = "+accountList.get(0).getAccount_id());
		return accountList.get(0).getAccount_id();
	}
	
	public boolean checkin(String account_id, double total_sum) {
		Boolean addOrderDone = false;
		String sql = "update EM_ACCOUNT set BALANCE=BALANCE+? where ACCOUNT_ID=?";
		Object[] args = {total_sum,account_id};
		addOrderDone = (Boolean)d.query(sql, args, null);
		return addOrderDone;
	}
	
	
	

}
