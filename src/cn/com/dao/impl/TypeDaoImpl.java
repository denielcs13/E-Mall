package cn.com.dao.impl;

import java.util.List;

import cn.com.dao.TypeDao;
import cn.com.jdbc.DefaultJDBCImpl;
import cn.com.vo.Type;

public class TypeDaoImpl implements TypeDao{
	
	DefaultJDBCImpl d = new DefaultJDBCImpl(); 
	
	public List<Type> typeList(String parent_type_id) {
		String sql = "select * from EM_TYPE where PARENT_TYPE_ID=?";
		String[] args = {parent_type_id};
		List<Type> typeList = (List<Type>)d.query(sql, args, Type.class);	
		return typeList;
	}

	public Type getType(String type_id) {
		String sql = "select * from EM_TYPE where TYPE_ID=?";
		String[] args = {type_id};
		List<Type> type_list = (List<Type>)d.query(sql, args, Type.class);	
		return type_list.get(0);
	}

	public List<Type> typeAllList() {
		String sql = "select * from EM_TYPE";
		List<Type> type_list = (List<Type>)d.query(sql, null, Type.class);
		return type_list;
	}

}
