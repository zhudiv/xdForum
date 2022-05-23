package com.xindi.controller;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.xindi.mapper.ColorMapper;
import com.xindi.pojo.Color;
import com.xindi.pojo.MyConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

//@Controller
@RestController
@RequestMapping("stu")
@Slf4j
public class StuController {
    @PostMapping("createStu")
    public String  createStu(@RequestBody Map<String, Object> map,
                             @RequestHeader("token") String token,
                             @CookieValue("clientId") String clientId,
                             HttpServletRequest request
                             ){
        String headerToken = request.getHeader("token");
        return "新增";
    }

    @Autowired
    public  ColorMapper colorMapper;

    @GetMapping("test")
    public String test(){
        List<Color> colorList = colorMapper.selectList(null);
        System.out.println(colorList);
        return "test";
    }
}
