## unbuntu 安装 mysql 流程思路
```bash
检查apt 更新
1. sudo apt update
安装mysql
2. sudo apt install mysql-server -y
要验证 MySQL 已经正确安装，使用下列命令
3. sudo systemctl status mysql.service
你应该在那里看到 “Active: active (running)”。如果你没有看到，使用下列命令去开始这个服务：

4. sudo systemctl start mysql.service
```
2、由于没有出现密码设置项，所以不知道怎么进入数据操作命令行，在网络上找到了解决办法，链接：ubuntu18.04 首次登录mysql未设置密码或忘记密码解决方法
  2.1、找到安装时默认生成的默认账户在终端上输入 
  <code> sudo cat /etc/mysql/debian.cnf </code> 如下图显示的账号和密码
#### 我的账号 默认首次生成信息
user     = debian-sys-maint
password = nc3c8quU38XRuh6n
##### 修改密码操作
```bash

1)、use mysql;                   #连接到mysql数据库

2)、update mysql.user set authentication_string=password('carline') where user='root' and Host ='localhost';    #修改密码carline是密码

3)、update user set  plugin="mysql_native_password";     

4)、flush privileges;

5)、quit; 
 ```

 ## 使用root账户进入 mysql
 ```bash
 sudo mysql -u root -p
 ```
 ## 启动Ubuntu的几种方式
 ```bash
 > 启动mysql：
> 
> 方式一：sudo /etc/init.d/mysql start
> 
> 方式二：sudo service mysql start
> 
> 停止mysql：
> 
> 方式一：sudo /etc/init.d/mysql stop
> 
> 方式二：sudo service mysql stop
> 
> 重启mysql：
> 
> 方式一：sudo/etc/init.d/mysql restart
> 
> 方式二：sudo service mysql restart

```