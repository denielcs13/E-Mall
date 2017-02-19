package cn.com.vo;

public class Credit {
    private String credit_id;
    private String user_name;
    private int buy_count;
    private int good;
    private int bad;
    private double total_sum;
    
	public String getCredit_id() {
		return credit_id;
	}
	public void setCredit_id(String credit_id) {
		this.credit_id = credit_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public int getBuy_count() {
		return buy_count;
	}
	public void setBuy_count(int buy_count) {
		this.buy_count = buy_count;
	}
	public int getGood() {
		return good;
	}
	public void setGood(int good) {
		this.good = good;
	}
	public int getBad() {
		return bad;
	}
	public void setBad(int bad) {
		this.bad = bad;
	}
	public double getTotal_sum() {
		return total_sum;
	}
	public void setTotal_sum(double total_sum) {
		this.total_sum = total_sum;
	}
	public Credit(){}
	public Credit(String credit_id, String user_name, int buy_count, int good,
			int bad, double total_sum) {
		super();
		this.credit_id = credit_id;
		this.user_name = user_name;
		this.buy_count = buy_count;
		this.good = good;
		this.bad = bad;
		this.total_sum = total_sum;
	}
    
}
