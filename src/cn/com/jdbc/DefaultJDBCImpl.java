package cn.com.jdbc;

import java.lang.reflect.Method;
import java.lang.reflect.Type;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DefaultJDBCImpl extends JDBCTemplate{

	@Override
	public void setParameters(PreparedStatement pstmt, Object args) {
		if(args!=null){
			Object[] obj = (Object[])args;
			for(int i=0;i<obj.length;i++){
				try {
					pstmt.setObject(i+1, obj[i]);
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		else{}
	}
	
	

	@Override
	public Object mapRow(ResultSet rs, Class clazz) {
		if(clazz==null){
			try {
				if(rs.next()){
					return true;
				}else{
					return false;
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		List<Object> list = new ArrayList<Object>();
		Method[] methods = clazz.getMethods();
		try {
			ResultSetMetaData md = rs.getMetaData();
			while(rs.next()){

				Object obj = clazz.newInstance();
//				System.out.println("rs.next()="+1);
				for(int i=0;i<md.getColumnCount();i++){
					for(int j=0;j<methods.length;j++){
						if(methods[j].getName().equalsIgnoreCase("set"+md.getColumnName(i+1))){
							String str = methods[j].getParameterTypes()[0].getName();					
	//						System.out.println("1    "+md.getColumnName(i+1));
							if(str.equals("float")){
							   methods[j].invoke(obj,rs.getFloat(i+1));
							}else if(str.equals("java.lang.String")){
							   methods[j].invoke(obj,rs.getString(i+1));
							}else if(str.equals("int")){
							   methods[j].invoke(obj,rs.getInt(i+1));
							}else if(str.equals("java.sql.Date")){
							   methods[j].invoke(obj,rs.getDate(i+1));
							}
//							System.out.println("2    "+md.getColumnName(i+1));
						}
					}
				}
				list.add(obj);	
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

}
