package cn.com.dao.impl;

import java.util.List;

import cn.com.dao.CreditDao;
import cn.com.jdbc.DefaultJDBCImpl;
import cn.com.vo.Credit;
import cn.com.vo.Order;

public class CreditDaoImpl implements CreditDao{
	DefaultJDBCImpl d = new DefaultJDBCImpl();
	public boolean updateCredit(Credit credit) {
		
		Boolean q = false;
		try{
			String credit_id = existCredit(credit.getUser_name());
			if(credit_id==null){
				String sql = "insert into EM_CREDIT values(?,?,?,?,?,?)";
				Object[] args = {};
				q = (Boolean)d.query(sql, args, null);
			}else{
				String sql = "update EM_CREDIT set GOOD =GOOD+?,BAD =BAD+?,BUY_COUNT =BUY_COUNT+1,TOTAL_SUM =TOTAL_SUM+? where USER_NAME=? ";
				Object[] args = {credit.getGood(),credit.getBad(),credit.getBuy_count(),credit.getUser_name()};
				q = (Boolean)d.query(sql, args, null);
			}
		}catch(Exception e){
			throw new RuntimeException(e);
		}
		
		return q;
	}
	
	
	public String existCredit(String user_name) {
		String sql = "select * from EM_CREDIT where USER_NAME=?";
		String[] args = {user_name};
		List<Credit> list= (List<Credit>)d.query(sql, args, Credit.class);
		if(list.size()>0){
			String credit_id = list.get(0).getCredit_id();
			//System.out.println("existOrderId----------orderId-------------"+order_id);
			return credit_id;
		}else{
			return null;
		}
	}
	

}
