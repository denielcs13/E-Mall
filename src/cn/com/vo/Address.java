package cn.com.vo;

public class Address {
    private String address_id;
    private String user_name;
    private String address_name;
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
	public Address(){}
	public Address(String address_id, String user_name, String address_name) {
		super();
		this.address_id = address_id;
		this.user_name = user_name;
		this.address_name = address_name;
	}
    
}
