package cn.com.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class FileEveryDaySerialNumber extends EveryDaySerialNumber {  
	  
    /** 
     * 持久化存储的文件 
     */      
    private File file = null;  
      
    /** 
     * 存储的分隔符 
     */  
    private final static String FIELD_SEPARATOR = ",";     
  
    public FileEveryDaySerialNumber(int width,String filename) {  
        super(width);  
        file = new File(filename);  
    }  
  
    @Override  
    protected int getOrUpdateNumber(Date current, int start) {  
        String date = format(current);  
        int num = start;  
        if(file.exists()) {  
            List<String> list = FileUtil.readList(file);          
            String[] data = list.get(0).split(FIELD_SEPARATOR);  
            if(date.equals(data[0])) {  
                num = Integer.parseInt(data[1]);  
            }  
        }  
        FileUtil.rewrite(file, date + FIELD_SEPARATOR + (num + 1));  
        return num;  
    }          
}  
  
  
class FileUtil {  
  
    public static void rewrite(File file, String data) {  
        BufferedWriter bw = null;  
        try {  
            bw = new BufferedWriter(new FileWriter(file));  
            bw.write(data);  
        } catch (IOException e) {  
            e.printStackTrace();  
        } finally {          
            if(bw != null) {  
               try {   
                   bw.close();  
               } catch(IOException e) {  
                   e.printStackTrace();  
               }  
            }              
        }  
    }  
      
    public static List<String> readList(File file) {  
        BufferedReader br = null;  
        List<String> data = new ArrayList<String>();  
        try {  
            br = new BufferedReader(new FileReader(file));  
            for(String str = null; (str = br.readLine()) != null; ) {  
                data.add(str);  
            }  
        } catch (IOException e) {  
            e.printStackTrace();  
        } finally {  
            if(br != null) {  
               try {   
                   br.close();  
               } catch(IOException e) {  
                   e.printStackTrace();  
               }  
            }  
        }  
        return data;  
    }  
}  

