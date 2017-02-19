package cn.com.jdbc;

import java.sql.PreparedStatement;

public interface ParameterSetter {
	public void setParameters(PreparedStatement pstmt);
}
