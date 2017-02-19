package cn.com.util;

import java.io.BufferedReader;  
import java.io.BufferedWriter;  
import java.io.File;  
import java.io.FileReader;  
import java.io.FileWriter;  
import java.io.IOException;  
import java.text.DecimalFormat;  
import java.text.SimpleDateFormat;  
import java.util.ArrayList;  
import java.util.Date;  
import java.util.List;  
import java.util.concurrent.TimeUnit;  
  
/** 
   * JAVA版本的自动生成有规则的订单号(或编号) 
   * 生成的格式是: 200908010001 前面几位为当前的日期,后面五位为系统自增长类型的编号 
   * 原理:  
   *      1.获取当前日期格式化值; 
   *      2.读取文件,上次编号的值+1最为当前此次编号的值 
   *      (新的一天会重新从1开始编号) 
   *       
   *      存储自动编号值的文件如下(文件名: EveryDaySerialNumber.dat) 
   */  



public abstract class SerialNumber {  
  
    public synchronized String getSerialNumber(String prefix) {  
        return process(prefix);  
    }  
    protected abstract String process(String prefix);  
}  
  
  
abstract class EveryDaySerialNumber extends SerialNumber {  
      
    protected final static SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");  
    protected DecimalFormat df = null;  
      
    public EveryDaySerialNumber(int width) {  
        if(width < 1) {  
            throw new IllegalArgumentException("Parameter length must be great than 1!");  
        }  
        char[] chs = new char[width];  
        for(int i = 0; i < width; i++) {  
            chs[i] = '0';  
        }  
        df = new DecimalFormat(new String(chs));  
    }  
      
    protected String process(String  prefix) {  
        Date date = new Date();  
        int n = getOrUpdateNumber(date, 1);  
        return prefix+format(date) + format(n);  
    }  
      
    protected String format(Date date) {  
        return sdf.format(date);  
    }  
    protected String format(int num) {  
        return df.format(num);  
    }  
      
    /** 
     * 获得序列号，同时更新持久化存储中的序列 
     * @param current 当前的日期 
     * @param start   初始化的序号 
     * @return 所获得新的序列号 
     */  
    protected abstract int getOrUpdateNumber(Date current, int start);  
}  
  
  
