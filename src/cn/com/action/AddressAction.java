package cn.com.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import cn.com.service.AddressService;
import cn.com.service.impl.AddressServiceImpl;
import cn.com.vo.Address;
import cn.com.vo.User;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class AddressAction extends ActionSupport implements SessionAware{
	private String address_id;
    private String user_name;
    private String address_name;
    private  Map<String, Object> session;
    
    private List<Address> addressList = new ArrayList<Address>();
    AddressService addressService = new AddressServiceImpl();
	public String getAddress_id() {
		return address_id;
	}
	public void setAddress_id(String address_id) {
		this.address_id = address_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getAddress_name() {
		return address_name;
	}
	public void setAddress_name(String address_name) {
		this.address_name = address_name;
	}
	public void setSession(Map<String, Object> session) {
		  this.session=session;
	}
    @SuppressWarnings("unchecked")
	public String addressAction(){
    	user_name = ((User) session.get("user")).getUser_name();
		addressList = addressService.getAddressByUser_name(user_name);
		Map request=(Map)ActionContext.getContext().get("request");
		request.put("addressList", addressList); //传给前台，前台可用EL表达式显示
    	return SUCCESS;
    }

}
