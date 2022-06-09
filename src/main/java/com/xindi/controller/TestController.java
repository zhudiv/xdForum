package com.xindi.controller;

import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.conditions.update.LambdaUpdateChainWrapper;
import com.xindi.mapper.ColorMapper;
import com.xindi.mapper.UserMapper;
import com.xindi.pojo.Color;
import com.xindi.pojo.User;
import com.xindi.utils.JSONResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.util.List;
import java.util.Map;

//@Controller
@RestController
@RequestMapping("api")
@Slf4j
public class TestController {
    @GetMapping("user/info")
    public JSONResult test(){
        return JSONResult.ok();
    }

    @Autowired
    private UserMapper userMapper;

    @GetMapping("user/list")
    public JSONResult userList(){
        List<User> userList = userMapper.selectList(null);
        return JSONResult.ok(userList);
    }

    @GetMapping("article")
    public JSONResult article(){
        return JSONResult.ok();
    }
    @Autowired
    public  ColorMapper colorMapper;

    @PostMapping("color/list")
    public JSONResult colorList(){
        List<Color> colorList = colorMapper.selectList(null);
        return JSONResult.ok(colorList);
    }

    @PostMapping("color/insert")
    public JSONResult colorInsert(@RequestBody Map<String, Object> map){
        Color color = new Color();
        color.color = map.get("color").toString();

        List colorList  = colorMapper.selectByMap(map);

        if(colorList.size() >= 1){
            return JSONResult.errorMsg("已存在该颜色");
        }else{
            colorMapper.insert(color);
            return JSONResult.ok();
        }
    }

    @PostMapping("color/delete")
    public JSONResult colorDelete(@RequestBody Map<String, Object> map){
        Color color = new Color();
        color.id = (Integer) map.get("id");
        try{
            if(colorMapper.deleteById(color) > 0){
                return JSONResult.ok();
            }else{
                return JSONResult.errorMsg("删除失败");
            }

        }catch (Exception e){
            return JSONResult.errorMsg(e.toString());
        }

    }

    @PostMapping("color/search")
    public JSONResult colorListByID(@RequestBody Map<String, Object> map){
        Color color = new Color();
        color.id = (Integer) map.get("id");
        try{
         colorMapper.selectById((Serializable) map.get("id"));
         return JSONResult.build(200, "查询成功", colorMapper.selectById((Serializable) map.get("id")));
        }catch (Exception e){
            return JSONResult.errorMsg(e.toString());
        }
    }

    @PostMapping("color/edit")
    public JSONResult colorEdit(@RequestBody Map<String, Object> map){
        Color co= new Color((Integer) map.get("id"), (String) map.get("color"),  (String) map.get("colors"));
        LambdaUpdateWrapper<Color> lambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        lambdaUpdateWrapper.eq(Color::getId, co.getId())
                            .set(Color::getColors, co.getColors());
        int rows = colorMapper.update(null, lambdaUpdateWrapper);
        return JSONResult.ok();
    }
}
