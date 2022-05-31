package com.xindi.utils;

public class JSONResult {
    // 业务响应状态
    private Integer code;

    //    响应消息
    private String msg;

    //    响应中的数据
    private Object data;

    private String ok; // 不使用

    public static JSONResult build(Integer code, String msg, Object data) {
        return new JSONResult(code, msg, data);
    }

    public static JSONResult ok(Object data) {
        return new JSONResult(data);
    }

    public static JSONResult ok() {
        return new JSONResult(null);
    }

    public static JSONResult errorMsg(String msg) {
        return new JSONResult(500, msg, null);
    }

    public static JSONResult errorMap(Object data) {
        return new JSONResult(501, "error", data);
    }

    public static JSONResult errorTokenMsg(String msg) {
        return new JSONResult(502, msg, null);
    }

    public static JSONResult errorException(String msg) {
        return new JSONResult(555, msg, null);
    }

    public JSONResult() {

    }

    public JSONResult(Integer code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    public JSONResult(Object data) {
        this.code = 200;
        this.msg = "OK";
        this.data = data;
    }
    public Boolean isOK() {
        return this.code == 200;
    }

    public Integer getStatus() {
        return code;
    }

    public void setStatus(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

}
