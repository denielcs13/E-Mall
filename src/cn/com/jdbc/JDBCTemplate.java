package cn.com.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import cn.com.util.DBConnectionManager;

public abstract class JDBCTemplate {

	public abstract void setParameters(PreparedStatement pstmt, Object args);

	public abstract Object mapRow(ResultSet rs, Class clazz);
	
	public String connectionName = "tx";
	
	public Object query(String sql, Object args, Class clazz) {
		
		Object obj = null;
		Connection conn = null;
		DBConnectionManager db = new DBConnectionManager();
		conn = db.getConnection(connectionName);
		try {
//			System.out.println("bbb "+conn);
			PreparedStatement pstmt = conn.prepareStatement(sql);
			setParameters(pstmt, args);
			ResultSet rs = pstmt.executeQuery();
			obj = mapRow(rs, clazz);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (conn != null && !conn.isClosed()) {
					db.freeConnection(connectionName, conn);
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return obj;
	}

//	public static Object query(String sql, final ParameterSetter setter,final RowMapper mapper) {
//		Object obj = null;
//		Connection conn = DBConnectionManager.getConnection();
//		try {
//			PreparedStatement pstmt = conn.prepareStatement(sql);
//			setter.setParameters(pstmt);
//			ResultSet rs = pstmt.executeQuery();
//			obj = mapper.mapRow(rs);
//		} catch (SQLException e) {
//			e.printStackTrace();
//		}finally{
//			try {
//				if (conn != null && !conn.isClosed()) {
//					conn.close();
//				}
//			} catch (SQLException e) {
//				e.printStackTrace();
//			}
//		}
//		return obj;
//	}

}
