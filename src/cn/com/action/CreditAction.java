package cn.com.action;

import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import cn.com.service.CreditService;
import cn.com.service.impl.CreditServiceImpl;
import cn.com.util.FileEveryDaySerialNumber;
import cn.com.util.SerialNumber;
import cn.com.vo.Credit;
import cn.com.vo.User;

import com.opensymphony.xwork2.ActionSupport;

public class CreditAction extends ActionSupport implements SessionAware{
	
	private String credit_id;
	private String user_name;
    private int buy_count;
    private int good;
    private int bad;
    private double total_sum;
    
	private  Map<String, Object> session;
	CreditService creditService = new CreditServiceImpl();
	SerialNumber serial = new FileEveryDaySerialNumber(4, "CreditSerialNumber.dat"); 
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
	public void setSession(Map<String, Object> session) {
		this.session = session;
	}
	
	public String updateCreditAction(){
		user_name = ((User)session.get("user")).getUser_name();
		total_sum = Double.parseDouble((String)session.get("total_sum"));
		Credit credit = new Credit(serial.getSerialNumber("CE"),user_name,buy_count,good,bad,total_sum);
		if(creditService.updateCredit(credit)){	
			return SUCCESS;
		}
		else{
			return INPUT;
		}
	}
	

}
