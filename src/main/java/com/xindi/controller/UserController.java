package com.xindi.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.xindi.mapper.ColorMapper;
import com.xindi.mapper.UserMapper;
import com.xindi.pojo.User;
import com.xindi.pojo.tokenData;
import com.xindi.utils.JSONResult;
import com.xindi.utils.TokenUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@Slf4j
public class UserController {
    @Autowired
    public UserMapper userMapper;

    @PostMapping("login")
    public JSONResult UserCheck(@RequestBody Map<String, Object> map,
                                HttpServletRequest request){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("name", map.get("account"));
        User user = userMapper.selectOne(queryWrapper);
        System.out.println(user);
        if(ObjectUtils.isEmpty(user)){
            return JSONResult.errorMsg("用户名错误");
        }else{
            String token = TokenUtils.token(map.get("account").toString(), map.get("password").toString());
            LambdaUpdateWrapper<User> lambdaUpdateWrapper = new LambdaUpdateWrapper<>();
            lambdaUpdateWrapper.eq(User::getName, map.get("account")).set(User::getToken, token);
            Integer rows = userMapper.update(null, lambdaUpdateWrapper);
            Object o = new tokenData(token, user.type);
            return JSONResult.ok( o );
        }
    }
}
