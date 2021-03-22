# Docker 使用说明

docker 镜像地址及各项版本，详见：
https://hub.docker.com/repository/docker/dql19991112/pedro_ubuntu

## docker 使用

```
// 查看正在运行中docker容器
$ docker ps
CONTAINER ID   IMAGE                          COMMAND       CREATED             STATUS             PORTS                NAMES
533ad5bb7468   dql19991112/pedro_ubuntu:0.3   "/bin/bash"   About an hour ago   Up About an hour   0.0.0.0:80->80/tcp   pedro_ubuntu

// 进入特定id的docker容器
$ docker exec -it 533ad5bb7468 /bin/bash
root@533ad5bb7468:/# // 这里已经进入

// 退出
root@533ad5bb7468:/# exit
或
快捷键 ctrl + D
或
快捷键 ctrl + p + q
```

> 注意： 禁止使用`docker attach`命令重连容器————该命令执行时，上述三种退出容器的方法，并不能全部保证容器后台运行。

## Ubuntu Linux Service

在 ubuntu 中，可以使用`systemctl`命令后台运行进程。该命令会读取一个`*.service`的文件。

### 具体命令

```
// 重新加载所有的*.service文件，该文件可以位于`/lib/systemd/system/`目录下
// 当一个.service文件被修改后，也需要执行该命令
$ systemctl daemon-reload

// 启动、重启、关停一个服务
// 如新建了一个`cso-front-end.service`文件
$ systemctl start cso-front-end
$ systemctl stop cso-front-end
$ systemctl restart cso-front-end

// 查看服务状态
$ systemctl status cso-front-end
```

### .service 文件样板

```
[Unit]
Description=Flina auto code Java REST Service
[Service]
WorkingDirectory=/root/git
ExecStart=/usr/bin/java -jar /root/git/flina-pedro-coder.jar
[Install]
WantedBy=multi-user.target
```
