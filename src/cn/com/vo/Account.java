package cn.com.vo;

public class Account {
   private String account_id;
   private String account_password;
   private String user_name;
   private double banlance;
   private String account_name;
	public String getAccount_id() {
		return account_id;
	}
	public void setAccount_id(String account_id) {
		this.account_id = account_id;
	}
	public String getAccount_password() {
		return account_password;
	}
	public void setAccount_password(String account_password) {
		this.account_password = account_password;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public double getBanlance() {
		return banlance;
	}
	public void setBanlance(double banlance) {
		this.banlance = banlance;
	}
	
	public String getAccount_name() {
		return account_name;
	}
	public void setAccount_name(String account_name) {
		this.account_name = account_name;
	}
	public Account(){}
	public Account(String account_id, String account_password,
			String user_name, double banlance,String account_name) {
		super();
		this.account_id = account_id;
		this.account_password = account_password;
		this.user_name = user_name;
		this.banlance = banlance;
		this.account_name = account_name;
	}
   
}
