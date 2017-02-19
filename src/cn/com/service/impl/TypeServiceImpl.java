package cn.com.service.impl;

import java.util.List;

import cn.com.dao.TypeDao;
import cn.com.dao.impl.TypeDaoImpl;
import cn.com.service.TypeService;
import cn.com.vo.Type;

public class TypeServiceImpl implements TypeService{

	public TypeDao typeDaoImpl = new TypeDaoImpl();
	
	public List<Type> getTypeList(String parent_type_id) {
		return typeDaoImpl.typeList(parent_type_id);
	}

	public Type getType(String type_id) {
		return typeDaoImpl.getType(type_id);
	}

	public List<Type> getTypeAllList() {
		return typeDaoImpl.typeAllList();
	}

}
