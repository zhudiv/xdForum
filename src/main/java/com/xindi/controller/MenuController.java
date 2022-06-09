package com.xindi.controller;


import com.xindi.mapper.MenuMapper;
import com.xindi.pojo.Menu;
import com.xindi.utils.JSONResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("api/menu")
public class MenuController {
    @Autowired
    private MenuMapper menuMapper;

    @RequestMapping("list")
    public JSONResult menuList(){
        List<Menu> menuList = menuMapper.selectList(null);
        return JSONResult.ok(menuList);
    }
}
