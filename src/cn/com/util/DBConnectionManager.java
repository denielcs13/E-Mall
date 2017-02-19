package cn.com.util;

import java.io.*;   
import java.sql.*;
import java.util.*;
import java.util.Date;

//建立DBConnectionManager
public class DBConnectionManager {
	static private DBConnectionManager instance;
	static private int clients;
	private Vector drivers = new Vector();
	private PrintWriter log;
	private Hashtable pools = new Hashtable();

	// 返回唯一的实列
	static synchronized public DBConnectionManager getInstance() {
		if (instance == null) {
			instance = new DBConnectionManager();
		}
		clients++;
		return instance;
	}

	// 构造函数！
	public DBConnectionManager() {
		init();
	} // 结束构造函数
	// 释放一个连接

	public void freeConnection(String name, Connection con) {
		DBConnectionPool pool = (DBConnectionPool) pools.get(name);
		if (pool != null) {
			pool.freeConnection(con);
		}
	}

	// 结束释放一个连接
	// 取得一个连接
	public Connection getConnection(String name) {
		DBConnectionPool pool = (DBConnectionPool) pools.get(name);
//		System.out.println("ccc "+pool);
		if (pool != null) {
			return pool.getConnection();
		}
		return null;
	}

	public Connection getConnection(String name, long time) {
		DBConnectionPool pool = (DBConnectionPool) pools.get(name);
		if (pool != null) {
			return pool.getConnection(time);
		}
		return null;
	} // 结束getconnection
	// 关闭所有连接

	public synchronized void release() {
		{
			if (--clients != 0)
				return;
		}
		Enumeration allPools = pools.elements();
		while (allPools.hasMoreElements()) {
			DBConnectionPool pool = (DBConnectionPool) allPools.nextElement();
			pool.release();
		}
		Enumeration allDrivers = drivers.elements();
		while (allDrivers.hasMoreElements()) {
			Driver driver = (Driver) allDrivers.nextElement();
			try {
				DriverManager.deregisterDriver(driver);
				log("撤消JDBC驱动程序" + driver.getClass().getName());
			} catch (SQLException e) {
				log(e, "无法撤消JDBC驱动程序的注册" + driver.getClass().getName());
			}
		}
	}

	private void createPools(Properties props) {
		Enumeration propNames = props.propertyNames();
		while (propNames.hasMoreElements()) {
			String name = (String) propNames.nextElement();
			if (name.endsWith(".url")) {
				String poolName = name.substring(0, name.lastIndexOf("."));
				String url = props.getProperty(poolName + ".url");
				if (url == null) {
					log("没有连接池" + poolName + "指定的URL");
					continue;
				}
				String user = props.getProperty(poolName + ".user");
				String password = props.getProperty(poolName + ".password");
				String maxconn = props.getProperty(poolName + ".maxconn", "0");
				int max;
				try {
					max = Integer.valueOf(maxconn).intValue();
				} catch (NumberFormatException e) {
					log("错误的最大连接数：" + maxconn + ".连接池" + poolName);
					max = 0;
				}
				DBConnectionPool pool = new DBConnectionPool(poolName, url,
						user, password, max);
				pools.put(poolName, pool);
				log("成功创建连接池" + poolName);
			}
		}
	}

	private void init() {
		InputStream is = getClass().getResourceAsStream("/db.properties");
		Properties dbProps = new Properties();
		try {
//			System.out.println("aaaa "+is);
			dbProps.load(is);
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage());
		}
		String logFile = dbProps.getProperty("logfile",
				"DBConnectionManager.log");
		try {
			log = new PrintWriter(new FileWriter(logFile, true), true);
		} catch (IOException e) {
			System.err.println("无法打开日志文件：" + logFile);
			log = new PrintWriter(System.err);
		}
		loadDriver(dbProps);
		createPools(dbProps);
	}

	private void loadDriver(Properties props) {
		String driverClasses = props.getProperty("drivers");
		StringTokenizer st = new StringTokenizer(driverClasses);
		while (st.hasMoreElements()) {
			String driverClassName = st.nextToken().trim();
			try {
				Driver driver = (Driver) Class.forName(driverClassName)
						.newInstance();
				DriverManager.registerDriver(driver);
				drivers.addElement(driver);
				log("成功注册驱动程序" + driverClassName);
			} catch (Exception e) {
				log("无法注册驱动程序:" + driverClassName + ",错误" + e);
			}
		}
	}

	private void log(String msg) {
		log.println(new Date() + ":" + msg);
	}

	private void log(Throwable e, String msg) {
		log.println(new Date() + ":" + msg);
		e.printStackTrace(log);
	}
}

