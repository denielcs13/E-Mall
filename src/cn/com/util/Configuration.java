package cn.com.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Configuration {

	private static Configuration config=null;
	public  String className = "";
	public  String url = "";
	public  String name = "";
	public  String password = "";
	
	private Configuration(){
		Properties p = new Properties();
		try {
			p.load(new FileInputStream("src/db.properties"));
			className = p.getProperty("className");
			url = p.getProperty("url");
			name = p.getProperty("name");	
			password = p.getProperty("password");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static Configuration loadConfig(){
		if(config == null){
			config = new Configuration();
		}
		return config;
	}
	
}
