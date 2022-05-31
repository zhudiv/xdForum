package com.xindi.controller;

import com.xindi.mapper.StylesMapper;
import com.xindi.pojo.Styles;
import com.xindi.utils.JSONResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api")
@Slf4j
public class StylesController {

    @Autowired
    private StylesMapper stylesMapper;

    @PostMapping("styles/list")
    public JSONResult stylesList(){
        List<Styles> stylesList = stylesMapper.selectList(null);
        return JSONResult.ok(stylesList);
    }
}
