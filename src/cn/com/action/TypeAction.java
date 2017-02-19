package cn.com.action;

import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import cn.com.service.TypeService;
import cn.com.service.impl.TypeServiceImpl;
import cn.com.vo.Type;

public class TypeAction extends ActionSupport{
     private String type_id;
     private String type_name;
     private String parent_type_id;
     
     private List<Type> typeList;
     private List<Type> parent_typeList;
     
     private TypeService typeService = new TypeServiceImpl();
     
     
	public String getType_id() {
		return type_id;
	}
	public void setType_id(String type_id) {
		this.type_id = type_id;
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
	public List<Type> getTypeList() {
		return typeList;
	}
	public void setTypeList(List<Type> typeList) {
		this.typeList = typeList;
	}
	
    public List<Type> getParent_typeList() {
		return parent_typeList;
	}
	public void setParent_typeList(List<Type> parent_typeList) {
		this.parent_typeList = parent_typeList;
	}
@SuppressWarnings({ "unchecked", "rawtypes" })
public String typeAction() {
	try{

		parent_typeList = typeService.getTypeList("0");
		typeList = typeService.getTypeAllList();
		Map request=(Map)ActionContext.getContext().get("request");

		request.put("typeList", typeList);
		request.put("parent_typeList", parent_typeList);
	    return SUCCESS;
	}catch(Exception e){
		  e.printStackTrace();
			return INPUT;
		}
	}
}
