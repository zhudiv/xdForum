package com.xindi.controller;

import com.xindi.mapper.ColorMapper;
import com.xindi.pojo.Color;
import com.xindi.utils.JSONResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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
}
