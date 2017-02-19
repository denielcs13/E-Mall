package cn.com.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Date;
import java.util.Enumeration;
import java.util.Vector;

	// 建立DBConnectionPool内部类
	class DBConnectionPool {
		private int checkOut;
		@SuppressWarnings("rawtypes")
		private Vector freeConnections = new Vector();
		private int maxconn;
		private String name;
		private String password;
		private String URL;
		private String user;

		public DBConnectionPool(String name, String URL, String user,
				String password, int maxconn) {
			this.name = name;
			this.URL = URL;
			this.password = password;
			this.user = user;
			this.maxconn = maxconn;
		}

		public synchronized void freeConnection(Connection con) {
			freeConnections.addElement(con);
			checkOut--;
			notifyAll();
		}

		public synchronized Connection getConnection() {
			Connection con = null;
			if (freeConnections.size() > 0) {
				con = (Connection) freeConnections.firstElement();
				freeConnections.removeElementAt(0);
				try {
					if (con.isClosed()) {
						con = getConnection();
					}
				} catch (SQLException e) {
					con = getConnection();
					throw new RuntimeException(e.getMessage());
				}
			} else if (maxconn == 0 || checkOut < maxconn) {
				con = newConnection();
			}
			if (con != null) {
				checkOut++;
			}
			return con;
		}

		public synchronized Connection getConnection(long timeout) {
			long startTime = new Date().getTime();
			Connection con;
			while ((con = getConnection()) == null) {
				try {
					wait(timeout);
				} catch (InterruptedException e) {
				}
				if ((new Date().getTime() - startTime) >= timeout) {
					return null;
				}
			}
			return con;
		}

		public void release() {
			Enumeration allConnections = freeConnections.elements();
			while (allConnections.hasMoreElements()) {
				Connection con = (Connection) allConnections.nextElement();
				try {
					con.close();
				} catch (SQLException e) {
					throw new RuntimeException(e.getMessage());
				}
			}
			freeConnections.removeAllElements();
		}

		private Connection newConnection() {
			Connection con = null;
			try {
				con = DriverManager.getConnection(URL, user, password);
			} catch (SQLException e) {
				throw new RuntimeException(e.getMessage());
			}
			return con;
		}
}
