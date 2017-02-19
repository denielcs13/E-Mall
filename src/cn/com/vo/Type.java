package cn.com.vo;

public class Type {
      private String type_id;
      private String type_name;
      private String parent_type_id;
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
	public Type(){}
	public Type(String type_id, String type_name, String parent_type_id) {
		super();
		this.type_id = type_id;
		this.type_name = type_name;
		this.parent_type_id = parent_type_id;
	}
      
}
