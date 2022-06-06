package com.xindi.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Styles {
    public Integer id;
    public Integer parentId;
    public String name;
    public Integer level;
    public String src;
}
