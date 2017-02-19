package cn.com.dao;

import java.util.List;

import cn.com.vo.Address;

public interface AddressDao {
       public List<Address> getAddressByUser_name(String user_name);
       public boolean addAddress(Address address);
}
