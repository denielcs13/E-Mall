package cn.com.service;

import java.util.List;

import cn.com.vo.Address;

public interface AddressService {
      public  List<Address> getAddressByUser_name(String user_name);
      public boolean IsAddAddress(Address address);
}
