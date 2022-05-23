package com.xindi.controller;

import com.xindi.mapper.ColorMapper;
import com.xindi.pojo.Color;
import com.xindi.pojo.MyConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

//@Controller
@RestController
@Slf4j
public class HelloController {
//    @RequestMapping("hello")
//    @ResponseBody
    @GetMapping("hello")
    public String hello() {
        return "Hello World~~";
    }

    @Autowired
    private MyConfig myConfig;

    @GetMapping("getMyConfig")
    public Object getMyConfig() {
        return myConfig;
    }

    @Value("${self.custom.config.sdkSecret}")
    private String sdkSecret;
    @Value("${self.custom.config.host}")
    private String host;
    @Value("${self.custom.config.port}")
    private String port;
    @Value("${app.name.xxx.yyy.zzz}")
    private String xyz;

    @GetMapping("getYmlCustomConfig")
    public Object getYmlCustomConfig() {
        return sdkSecret + ";\t" + host + ";\t" + port + ";\t" + xyz;
    }

    @PostMapping("upload")
    public String upload(MultipartFile file) throws Exception{
        file.transferTo(new File("/temp/" + file.getOriginalFilename()));
        return "上传成功";
    }
}
