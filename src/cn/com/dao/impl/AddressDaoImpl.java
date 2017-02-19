package cn.com.dao.impl;

import java.util.List;

import cn.com.dao.AddressDao;
import cn.com.jdbc.DefaultJDBCImpl;
import cn.com.vo.Address;

public class AddressDaoImpl implements AddressDao{

	DefaultJDBCImpl d = new DefaultJDBCImpl(); 
	
	public List<Address> getAddressByUser_name(String user_name) {
		String sql = "select * from EM_ADDRESS where USER_NAME=?";
		String[] args = {user_name};
		List<Address> addressList = (List<Address>)d.query(sql, args, Address.class);	
		return addressList;
	}

	public boolean addAddress(Address address) {
		// TODO Auto-generated method stub
		return false;
	}

}
