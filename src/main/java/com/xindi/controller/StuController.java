package com.xindi.controller;

import com.xindi.pojo.MyConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

//@Controller
@RestController
@RequestMapping("stu")
@Slf4j
public class StuController {

//    @GetMapping("${stuId}get")
//    public String getStu(@PathVariable("stuId") String stuId,
//                        @RequestParam Integer id,
//                         @RequestParam String name) {
//
//        return "查询Stu";
//    }

    @PostMapping("createStu")
    public String  createStu(@RequestBody Map<String, Object> map,
                             @RequestHeader("token") String token,
                             @CookieValue("clientId") String clientId,
                             HttpServletRequest request
                             ){
        String headerToken = request.getHeader("token");
        return "新增";
    }
}
