package cn.com.service;

import java.util.List;

import cn.com.vo.Type;

public interface TypeService {
        public List<Type> getTypeList(String parent_type_id);
        public List<Type> getTypeAllList();
        public Type getType(String type_id);
}
