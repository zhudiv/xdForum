package com.xindi.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Menu {
    @TableId(type = IdType.ASSIGN_ID)
    public Integer id;
    public String link;
    public String permissions;
    public Integer level;
    public Integer parentId;
}
