package com.xindi.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    public Integer id;
    public String name;
    public String password;
    public String token;
    public String type;
}
