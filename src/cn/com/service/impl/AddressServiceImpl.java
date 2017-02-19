package cn.com.service.impl;

import java.util.List;

import cn.com.dao.AddressDao;
import cn.com.dao.impl.AddressDaoImpl;
import cn.com.service.AddressService;
import cn.com.vo.Address;

public class AddressServiceImpl implements AddressService{

	public AddressDao dao = new AddressDaoImpl(); 
	public List<Address> getAddressByUser_name(String user_name) {
		return dao.getAddressByUser_name(user_name);
	}

	public boolean IsAddAddress(Address address) {
		return dao.addAddress(address);
	}

}
