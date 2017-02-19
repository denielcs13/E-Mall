package cn.com.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import cn.com.service.CommentService;
import cn.com.service.GoodsService;
import cn.com.service.SellorService;
import cn.com.service.TypeService;
import cn.com.service.impl.CommentServiceImpl;
import cn.com.service.impl.GoodsServiceImpl;
import cn.com.service.impl.SellorServiceImpl;
import cn.com.service.impl.TypeServiceImpl;
import cn.com.util.FileEveryDaySerialNumber;
import cn.com.util.SerialNumber;
import cn.com.vo.Comment;
import cn.com.vo.Goods;
import cn.com.vo.Type;
import cn.com.vo.User;

import org.apache.struts2.interceptor.SessionAware;

import sun.org.mozilla.javascript.internal.IdScriptableObject;
@SuppressWarnings("serial")
public class GoodsAction extends ActionSupport  implements SessionAware{
	private String goods_id;
    private String goods_name;
    private String goods_detail;
    private String type_id;
    private String goods_price;
    private String goods_image;
    private String discount_rate;
	private Map<String, Object> session;
	private String tipMessage_;
	
	private String user_name;
	private String stock_quantity;
	
    private String type_name;
    private String parent_type_id;
    private String parent_type_name;
    
    private List<Goods> goodsList = new ArrayList<Goods>();
    private List<Type> typeList = new ArrayList<Type>();
    private List<Comment> commentList = new ArrayList<Comment>();
    private Goods goods;
    
    private List<Goods> comparelist = new ArrayList<Goods>();
    private List<String> goods_image_list = new ArrayList<String>();
    private List<String> goods_name_list = new ArrayList<String>();
    private List<Float> goods_price_list = new ArrayList<Float>();
    private List<Integer> sellCount_list = new ArrayList<Integer>();
    private List<Integer> stock_quantity_list = new ArrayList<Integer>();
    

    private GoodsService goodsSerivce= new GoodsServiceImpl();
    private TypeService typeService = new TypeServiceImpl();
    private CommentService commentService = new CommentServiceImpl();
    private SellorService sellorService = new SellorServiceImpl();
    
    SerialNumber serial = new FileEveryDaySerialNumber(4, "GoodsSerialNumber.dat");  
	public String getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(String goods_id) {
		this.goods_id = goods_id;
	}
	public String getGoods_name() {
		return goods_name;
	}
	public void setGoods_name(String goods_name) {
		this.goods_name = goods_name;
	}
	public String getGoods_detail() {
		return goods_detail;
	}
	public void setGoods_detail(String goods_detail) {
		this.goods_detail = goods_detail;
	}
	public String getType_id() {
		return type_id;
	}
	public void setType_id(String type_id) {
		this.type_id = type_id;
	}
	
	public String getGoods_image() {
		return goods_image;
	}
	public void setGoods_image(String goods_image) {
		this.goods_image = goods_image;
	}
	
	public List<Goods> getGoodsList() {
		return goodsList;
	}
	public void setGoodsList(List<Goods> goodsList) {
		this.goodsList = goodsList;
	}
    public String getType_name() {
		return type_name;
	}
	public void setType_name(String type_name) {
		this.type_name = type_name;
	}

	public String getParent_type_id() {
		return parent_type_id;
	}
	public void setParent_type_id(String parent_type_id) {
		this.parent_type_id = parent_type_id;
	}
	public Goods getGoods() {
		return goods;
	}
	public void setGoods(Goods goods) {
		this.goods = goods;
	}
	public String getParent_type_name() {
		return parent_type_name;
	}
	public void setParent_type_name(String parent_type_name) {
		this.parent_type_name = parent_type_name;
	}
	public void setSession(Map<String, Object> session) {
		this.session = session;	
	}
	public String getTipMessage_() {
		return tipMessage_;
	}
	public void setTipMessage_(String tipMessage_) {
		this.tipMessage_ = tipMessage_;
	}
	
	public String getGoods_price() {
		return goods_price;
	}
	public void setGoods_price(String goods_price) {
		this.goods_price = goods_price;
	}
	public String getDiscount_rate() {
		return discount_rate;
	}
	public void setDiscount_rate(String discount_rate) {
		this.discount_rate = discount_rate;
	}
	public String getStock_quantity() {
		return stock_quantity;
	}
	public void setStock_quantity(String stock_quantity) {
		this.stock_quantity = stock_quantity;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public String searchGoodsByTypeAction(){
    	try{	
    		parent_type_id = typeService.getType(type_id).getParent_type_id();
    		
    		typeList = typeService.getTypeList(parent_type_id);
    		goodsList = goodsSerivce.getGoodsListSearchByType(type_id);		
            parent_type_name = typeService.getType(parent_type_id).getType_name();
            type_name = typeService.getType(type_id).getType_name();
            
           // System.out.println("typeList="+typeList.get(0).getType_name());
            
    		Map request=(Map)ActionContext.getContext().get("request");
    		request.put("goodsList", goodsList);
    		request.put("typeList",typeList);
    		request.put("type_name", type_name);
    		request.put("parent_type_name", parent_type_name);
    		
    		HttpServletRequest request1 = ServletActionContext.getRequest();// 获得request对象
    		String sessionID = request1.getSession().getId();// 获得sessionID
    		session.put("sid", sessionID);
    		session.put("typeList", typeList); //存session
    		session.put("type_name", type_name);
    		session.put("parent_type_name", parent_type_name);
    		session.put("current_type_id", type_id);
          
    	    return SUCCESS;
    	}catch(Exception e){
    		  e.printStackTrace();
    			return INPUT;
    		}
    }
	
	@SuppressWarnings("unchecked")
	public String searchGoodsByIdAction(){
    	try{
    		goods = goodsSerivce.getGoodsSearchById(goods_id);
            commentList = commentService.getCommentList(goods_id);
            int sellCount = goodsSerivce.getSellCount(goods_id);
            int stock_quantity = sellorService.searchSellorGoodsById(goods_id).get(0).getStock_quantity();
           // System.out.println("commentList.get(0).getComment() = "+commentList.get(0).getComment());
    		Map request=(Map)ActionContext.getContext().get("request");
    		request.put("goods", goods);
    		request.put("typeList", session.get("typeList"));  //取session ,并传给前台
    		request.put("type_name", session.get("type_name"));
    		request.put("parent_type_name", session.get("parent_type_name"));
    		request.put("commentList", commentList);
    		request.put("sellCount", sellCount);
    		request.put("stock_quantity", stock_quantity);
    		//request.put("current_type_id", goods.getType_id());
    		
    	    return SUCCESS;
    	}catch(Exception e){
    		  e.printStackTrace();
    			return INPUT;
    		}
    }
	
	@SuppressWarnings("unchecked")
	public String searchGoodsByNameAction(){
		
		//System.out.println("进入searchGoodsByNameAction！");
		
    	try{
    		goodsList = goodsSerivce.getGoodsSearchByName(goods_name);
             
    		Map request=(Map)ActionContext.getContext().get("request");
    		request.put("goodsList", goodsList);

    	    return SUCCESS;
    	}catch(Exception e){
    		  e.printStackTrace();
    			return INPUT;
    		}
    }

	
	
	@SuppressWarnings("unchecked")
	public String addGoodsAction(){
		System.out.println("进入addGoodsAction!");
		user_name = ((User) session.get("user")).getUser_name();
		try {
			Map request=(Map)ActionContext.getContext().get("request");
			if(uploadAction()!=null){
				System.out.println("file = "+file);
				System.out.println("fileFileName = "+fileFileName);
				goods_image = fileFileName.get(0);
				Goods g = new Goods(serial.getSerialNumber("GO"),goods_name,goods_detail,type_id,Float.parseFloat(goods_price),goods_image,Float.parseFloat(discount_rate),0);
				if(goodsSerivce.isAddGoods(g)&&sellorService.addGoods(user_name, g.getGoods_id(), null, null, Integer.parseInt(stock_quantity))){
					
					tipMessage_ = "添加商品成功！";
					request.put("tipMessage_", tipMessage_);
				    return SUCCESS;
				}
			}else{
				System.out.println("uploadAction()!=SUCCESS");
				tipMessage_ = "添加商品失败！";
				request.put("tipMessage", tipMessage_);
				return INPUT;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
      return SUCCESS;
	}
	
	@SuppressWarnings("unchecked")
	public String addToCompareAction(){
		comparelist = (List<Goods>)session.get("comparelist");
		    System.out.println("comparelist = "+comparelist);
		    System.out.println("goods_id = "+goods_id);
		    //System.out.println("comparelist.size() = "+comparelist.size());
			if(comparelist!=null){
				System.out.println("comparelist.size()<3");
				goods = goodsSerivce.getGoodsSearchById(goods_id);
				goods.setSellCount(goodsSerivce.getSellCount(goods_id));
				
				comparelist = (List<Goods>)session.get("comparelist");
				goods_image_list = (List<String>)session.get("goods_image_list");
				goods_name_list = (List<String>)session.get("goods_name_list");
				goods_price_list = (List<Float>)session.get("goods_price_list");
				sellCount_list = (List<Integer>)session.get("sellCount_list");
				stock_quantity_list = (List<Integer>)session.get("stock_quantity_list");
				
				System.out.println("goods = "+goods);
				
				comparelist.add(goods);
				goods_image_list.add(goods.getGoods_image());
				goods_name_list.add(goods.getGoods_name());
				goods_price_list.add(goods.getGoods_price()*goods.getDiscount_rate());
				sellCount_list.add(goods.getSellCount());
				stock_quantity_list.add(sellorService.searchSellorGoodsById(goods_id).get(0).getStock_quantity());
				
				session.put("comparelist", comparelist);
				session.put("goods_image_list", goods_image_list);
				session.put("goods_name_list", goods_name_list); //存session
				session.put("goods_price_list", goods_price_list); //存session
				session.put("sellCount_list", sellCount_list); //存session
				session.put("stock_quantity_list", stock_quantity_list); //存session
				
				
				System.out.println("comparelist.size() = "+comparelist.size());
				return SUCCESS;
			}
		else{
			
			comparelist = new ArrayList<Goods>();
			
			goods = goodsSerivce.getGoodsSearchById(goods_id);
			System.out.println("goods_name = "+goods.getGoods_name());
			goods.setSellCount(goodsSerivce.getSellCount(goods_id));
			
			comparelist.add(goods);
			goods_image_list.add(goods.getGoods_image());
			goods_name_list.add(goods.getGoods_name());
			goods_price_list.add(goods.getGoods_price()*goods.getDiscount_rate());
			sellCount_list.add(goods.getSellCount());
			stock_quantity_list.add(sellorService.searchSellorGoodsById(goods_id).get(0).getStock_quantity());
			
			session.put("comparelist", comparelist);
			session.put("goods_image_list", goods_image_list);
			session.put("goods_name_list", goods_name_list); //存session
			session.put("goods_price_list", goods_price_list); //存session
			session.put("sellCount_list", sellCount_list); //存session
			session.put("stock_quantity_list", stock_quantity_list); //存session
			return SUCCESS;
		}
	}
	
//图片上传
	private List<File> file;

    private List<String> fileFileName;

    private List<String> fileContentType;

    private List<String> dataUrl;
    
    public String uploadAction() throws Exception {
    	System.out.println("进入uploadAction！");
    	dataUrl = new ArrayList<String>();
    	
        String imgpath = "images/goods-image/w-clothes/dress/";
        for (int i = 0; i < file.size(); ++i) {
            InputStream is = new FileInputStream(file.get(i));

            String path = ServletActionContext.getServletContext().getRealPath("/");
            dataUrl.add(this.getFileFileName().get(i));
            File destFile = new File(path+imgpath, this.getFileFileName().get(i));
            
            System.out.println("path+imgpath = "+path+imgpath);
            
            OutputStream os = new FileOutputStream(destFile);
            byte[] buffer = new byte[400];
            int length = 0;
            while ((length = is.read(buffer)) > 0) {
            	System.out.println("while ((length = is.read(buffer)) > 0)");
                os.write(buffer, 0, length);
            }
            is.close();
            os.close();
        }
        return SUCCESS;
    }
    
    public List<String> getDataUrl() {
        return dataUrl;
    }
    public void setDataUrl(List<String> dataUrl) {
        this.dataUrl = dataUrl;
    }
    public List<File> getFile() {
        return file;
    }
    public void setFile(List<File> file) {
        this.file = file;
    }
    public List<String> getFileFileName() {
        return fileFileName;
    }
    public void setFileFileName(List<String> fileFileName) {
        this.fileFileName = fileFileName;
    }
    public List<String> getFileContentType() {
        return fileContentType;
    }
    public void setFileContentType(List<String> fileContentType) {
        this.fileContentType = fileContentType;
    }
}
