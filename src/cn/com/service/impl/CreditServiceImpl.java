package cn.com.service.impl;

import cn.com.dao.CreditDao;
import cn.com.dao.impl.CreditDaoImpl;
import cn.com.service.CreditService;
import cn.com.vo.Credit;

public class CreditServiceImpl implements CreditService{
 
	CreditDao dao = new CreditDaoImpl();
	public boolean updateCredit(Credit credit) {
		return dao.updateCredit(credit);
	}

}
