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
   * JAVA�汾���Զ������й���Ķ�����(����) 
   * ���ɵĸ�ʽ��: 200908010001 ǰ�漸λΪ��ǰ������,������λΪϵͳ���������͵ı�� 
   * ԭ��:  
   *      1.��ȡ��ǰ���ڸ�ʽ��ֵ; 
   *      2.��ȡ�ļ�,�ϴα�ŵ�ֵ+1��Ϊ��ǰ�˴α�ŵ�ֵ 
   *      (�µ�һ������´�1��ʼ���) 
   *       
   *      �洢�Զ����ֵ���ļ�����(�ļ���: EveryDaySerialNumber.dat) 
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
     * ������кţ�ͬʱ���³־û��洢�е����� 
     * @param current ��ǰ������ 
     * @param start   ��ʼ������� 
     * @return ������µ����к� 
     */  
    protected abstract int getOrUpdateNumber(Date current, int start);  
}  
  
  
