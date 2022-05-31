package com.xindi.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.conditions.update.LambdaUpdateChainWrapper;
import com.xindi.mapper.UserMapper;
import com.xindi.pojo.User;
import com.xindi.utils.JSONResult;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

import com.xindi.utils.TokenUtils;


@Data
@NoArgsConstructor
@AllArgsConstructor
class tokenData{
    private String token;
    private String type;
//    public void setToken(String token){
//        this.token = token;
//    }
}

@RestController
@RequestMapping("api/user")
@Slf4j
public class UserController {
    @Autowired
    public UserMapper userMapper;

    @PostMapping("login")
    public JSONResult UserCheck(@RequestBody Map<String, Object> map,
                            HttpServletRequest request){
        System.out.println("-------userLogin------");
        System.out.println(map.get("account"));
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("name", map.get("account"));
//        System.out.println(userMapper.selectOne(queryWrapper));
//        System.out.println(queryWrapper);
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
