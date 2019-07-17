var baseUrl = "https://music.niubishanshan.top/api/v2/music"

var recommend = baseUrl + '/recommend';//顶部轮播和广播
var toplist = baseUrl + '/toplist';//排行榜
var songList = baseUrl + '/songList/';//歌曲列表
var search = baseUrl + '/search/';//搜索
var songLrc = baseUrl + '/lrc/';//获取歌词
var albumImg = baseUrl + '/albumImg/';// 获取歌词封面。。
var songUrllist = baseUrl + "/songUrllist/";//歌曲播放 url

module.exports = {
    recommend,
    toplist,
    songList,
    search,
    songLrc,
    albumImg,
    songUrllist
}

