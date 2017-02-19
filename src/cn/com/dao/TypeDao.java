package cn.com.dao;

import java.util.List;

import cn.com.vo.Type;

public interface TypeDao {
      public List<Type> typeList(String parent_type_id);
      public List<Type> typeAllList();
      public Type getType(String type_id);
}
