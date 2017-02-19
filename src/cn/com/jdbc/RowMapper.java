package cn.com.jdbc;

import java.sql.ResultSet;

public interface RowMapper {
	public Object mapRow(ResultSet rs);
}
