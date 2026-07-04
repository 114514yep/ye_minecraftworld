# 数据包 #

## 数据包的位置和结构 ##
数据包一般位于saves>世界名>datapacks，一般为空，在datapacks中编辑文件夹"XX的数据包"以修改数据包。
### pack.mcmeta ###
数据包文件夹中需要pack.mcmeta文件作为标识，其中需要以下内容：
```
{
    "pack":{
        "pack_format":,
        "description":""
    }
}
```
其中pack_format和游戏版本有关，description是作者用的简述。
### data文件夹 ###
与pack.mcmeta并列的data文件夹，用于存储各种来源的数据包文件夹。  
数据包文件夹中不同文件夹存放不同功能的文件。  
saves之外有游戏本体的jar文件。同样可视为一个大的数据包。