## qq音乐接口地址：<https://m.y.qq.com/>

#### 1.基础路径：

```
https://music.niubishanshan.top/api/v2/music
```

#### 2.获取首页推荐信息

描述：获取网站首页的推荐信息, 包含顶部轮播和广播

```
URL：/recommend
```

#### 3.获取排行榜信息

描述：获取排行榜数据, 获取到的是从各种维度获取的排行版歌单(比如周榜, 月榜...)

```
URL：/toplist
```

| 字段        | 字段类型 | 字段说明                                      |
| ----------- | -------- | --------------------------------------------- |
| announce    | string   | 声明文案                                      |
| errno       | int      | 0: 表示没有问题, 其他表示有问题. 详情参考 msg |
| msg         | string   | 接口返回状态描述                              |
| data        | array    | 接口返回数据主体                              |
| id          | int      | 歌单id                                        |
| title       | string   | 歌单标题                                      |
| listenCount | int      | 歌单播放次数                                  |
| picUrl      | string   | 歌单 logo url                                 |
| songList    | array    | 歌单中排行榜前三的曲目                        |
| singerName  | string   | 歌手名称                                      |
| songName    | string   | 歌曲名称                                      |
| number      | int      | 排行                                          |

#### 5.获取歌曲列表

描述：获取指定歌单中的曲目列表

```
URL： /songList/26
```

| 字段         | 字段类型 | 字段说明                                      |
| ------------ | -------- | --------------------------------------------- |
| announce     | string   | 声明文案                                      |
| errno        | int      | 0: 表示没有问题, 其他表示有问题. 详情参考 msg |
| msg          | string   | 接口返回状态描述                              |
| data         | object   | 接口返回数据主体                              |
| updateTime   | string   | 更新时间                                      |
| totalSongNum | int      | 歌单中歌曲数目                                |
| topInfo      | object   | 歌单信息                                      |
| picAlbum     | string   | 歌单封面logo                                  |
| listName     | string   | 歌单名称                                      |
| songList     | array    | 歌曲列表                                      |
| songMid      | string   | 歌曲id                                        |
| singer       | array    | 歌手信息                                      |
| singerName   | string   | 歌手名称                                      |
| singerMid    | string   | 歌手媒体 id, 用户获取歌手头像                 |
| songName     | string   | 歌曲名称                                      |
| songId       | string   | 歌曲 id, 用于获取歌词                         |
| albumMid     | string   | 专辑媒体 id, 用于获取专辑封面 url             |

#### 6.获取歌曲播放 url

描述：根据歌曲id, 获取播放 url(目前可用)

```
URL： /songUrllist/{:songID}
```

| announce | string | 声明文案                                                 |
| -------- | ------ | -------------------------------------------------------- |
| errno    | int    | 0: 表示没有问题, 其他表示有问题. 详情参考 msg            |
| msg      | string | 接口返回状态描述                                         |
| data     | array  | item 为对应音乐的播放 url, 直接放到 audio 标签就可以播放 |

#### 7.搜索

描述：音乐搜索功能, 可以根据音乐信息搜索出匹配的歌曲列表

```
URL： /search/唐人
```

#### 8.获取歌词(基于歌曲 songid)

描述：获取歌词

```
URL：lrc/4823575
```

#### 9.获取歌曲封面图片和歌手头像图片

描述：获取歌曲封面和歌手的头像图片, 就是播放器用来转圈的那个~

```
URL：/albumImg/{:albummid}/{:singerMid}
```

| 字段            | 字段类型 | 字段说明                                      |
| --------------- | -------- | --------------------------------------------- |
| errno           | int      | 0: 表示没有问题, 其他表示有问题. 详情参考 msg |
| announce        | string   | 声明文案                                      |
| msg             | string   | 接口返回状态描述                              |
| data            | object   | 返回数据                                      |
| albumImgUrl     | string   | 歌曲所属的专辑封面 url                        |
| singerAvatarUrl | string   | 歌手头像 url                                  |

